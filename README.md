# Ichigo Package

## PyPI

<!-- 
python -m build
pip install dist/ichigo-0.0.1-py3-none-any.whl
python -c "import ichigo.asr as asr; print(asr.__file__)" 
python -c "from ichigo.asr import transcribe; results = transcribe('speech.wav'); print(results)"
python -c "from ichigo.asr import transcribe; results = transcribe('speech.wav', return_stoks=True); print(results)"
python -c "from ichigo.asr import transcribe; results = transcribe('/root/ichigo-experiments/test'); print(results)"
-->

Setup package with `python=3.10`

```
python -m build
python -m twine upload dist/* 

# test
python -c "import ichigo.asr as asr; print(asr.__file__)"
```

### Batch Processing
1. Install python package

```bash
pip install ichigo
```

2. Transcribe with your audio file

```python
# Quick one-liner
from ichigo.asr import transcribe
results = transcribe("path/to/your/file/or/folder")

# Or with more control using the model class
from ichigo.asr import IchigoASR
model = IchigoASR(model_name="custom-model", model_path="path/to/model/hub")
results = model.transcribe(
    "./your_audio_folder",
    output_path="./output_folder",
    extensions=(".wav", ".mp3", ".flac", ".m4a")
)
```

3. Return semantic tokens for further speechless training (Optional)

```python
from ichigo.asr import transcribe
stoks = transcribe("path/to/your/file/or/folder", return_stoks=True)
```

### API

```bash
# Start the API server
uvicorn ichigo.asr.server:app --host 0.0.0.0 --port 8000

# Use with curl
curl -X POST "http://localhost:8000/transcribe/" \
  -H "accept: application/json" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@path/to/audio.wav"

# Get semantic tokens
curl -X POST "http://localhost:8000/transcribe/?return_stoks=true" \
  -H "accept: application/json" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@path/to/audio.wav"
```

You can also access the API documentation at `http://localhost:8000/docs`