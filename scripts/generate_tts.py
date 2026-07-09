#!/usr/bin/env python3
"""
Generate section audio using gTTS with simple language detection.

Usage:
  pip install gTTS langdetect pydub
  # ensure ffmpeg is installed on your system

  python scripts/generate_tts.py --output public/audio/about-box.mp3 "Your text here"

The script will split the text into sentences, detect language for each sentence,
generate temporary mp3 segments with gTTS (es or en), and concatenate them into
the desired output file using pydub. This keeps English phrases spoken in English
and Spanish in Spanish (gTTS voices), suitable for Latin American Spanish with
the `lang='es'` option.

Note: gTTS uses Google Translate TTS; it's free for light usage but not an
official production API. For higher quality or commercial use consider a paid
TTS provider.
"""
import argparse
import os
import tempfile
from gtts import gTTS
from langdetect import detect
from pydub import AudioSegment
import re


def split_sentences(text):
    # naive sentence splitter by punctuation
    parts = re.split(r'(?<=[.!?\n])\s+', text.strip())
    return [p.strip() for p in parts if p.strip()]


def tts_segment(text, lang, tmpdir):
    filename = os.path.join(tmpdir, f"seg_{abs(hash(text)) % (10**8)}.mp3")
    tts = gTTS(text=text, lang=lang)
    tts.save(filename)
    return filename


def generate(text, out_path):
    sentences = split_sentences(text)
    tmpdir = tempfile.mkdtemp(prefix='tts_')
    segments = []

    for s in sentences:
        try:
            lang = detect(s)
        except Exception:
            lang = 'es'

        # normalize to en/es
        if lang.startswith('en'):
            code = 'en'
        else:
            code = 'es'

        seg = tts_segment(s, code, tmpdir)
        segments.append(seg)

    # concatenate
    final = None
    for seg in segments:
        audio = AudioSegment.from_file(seg, format='mp3')
        if final is None:
            final = audio
        else:
            final += audio

    # export
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    final.export(out_path, format='mp3')
    print(f"Wrote {out_path}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('text', nargs='?', help='Text to synthesize. If omitted, reads stdin.')
    parser.add_argument('--output', '-o', required=True, help='Output mp3 path (e.g. public/audio/about-box.mp3)')
    args = parser.parse_args()

    if args.text:
        text = args.text
    else:
        import sys
        text = sys.stdin.read()

    generate(text, args.output)


if __name__ == '__main__':
    main()
