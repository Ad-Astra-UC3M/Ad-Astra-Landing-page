# Wild World webfont

`wild-world.otf` is the original Wild World Bold v1.007 font by Abdullah Neon
(Abdullah Mosad). The project maintainer confirmed Ad Astra's authorization to
use and extend this first version on 31 August 2026.

`wild-world-es.otf` and `wild-world-es.woff2` are generated web assets. They keep
the original glyphs and metrics intact and add:

- `ÁÉÍÓÚÜÑ` and `áéíóúüñ`
- `¡`, `¿`, `ª`, `º`, and `·`
- combining acute, tilde, and dieresis marks with canonical composition rules

Rebuild the generated files from the repository root:

```powershell
uv run --no-project --with "fonttools[woff]>=4.59,<5" python scripts/build_wild_world_es.py
```
