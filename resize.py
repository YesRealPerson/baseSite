from pathlib import Path
from PIL import Image, ImageOps

INPUT_DIR = Path("./")
OUTPUT_DIR = Path("output")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

for path in INPUT_DIR.iterdir():
    if path.suffix.lower() not in {".jpg", ".jpeg"}:
        continue

    with Image.open(path) as img:
        # Apply EXIF orientation before resizing
        img = ImageOps.exif_transpose(img)

        width, height = img.size

        if width >= height:
            target_size = (1500, 1000)
        else:
            target_size = (1000, 1500)

        # Resize while preserving aspect ratio, then center-crop
        img = ImageOps.fit(
            img,
            target_size,
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5)
        )

        output_path = OUTPUT_DIR / path.name

        img.save(
            output_path,
            "JPEG",
            quality=75,
            optimize=True
        )

        print(f"{path.name}: {width}x{height} -> {target_size}")

print("Done!")