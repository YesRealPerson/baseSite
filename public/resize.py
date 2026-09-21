from pathlib import Path
from PIL import Image, ImageOps

INPUT_DIR = Path("./")
OUTPUT_DIR = Path("slideshow")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
acceptable = [
    "IMGL3654.jpg", 
    "IMG_6911.jpg", 
    "0G3A9885.jpg", 
    "IMG_0265.jpg", 
    "IMG_7694.jpg", 
    "IMG_7766.jpg", 
    "IMGL3649.jpg", 
    "IMG_8235.jpg",
    "IMGL2546.jpg",
    "0G3A9857.jpg",
    "IMG_8298.jpg"
    ]

for path in INPUT_DIR.iterdir():
    if path.suffix.lower() not in {".jpg", ".jpeg"} or path.name not in acceptable:
        continue

    with Image.open(path) as img:
        # Apply EXIF orientation before resizing
        img = ImageOps.exif_transpose(img)

        width, height = img.size

        if width >= height:
            target_size = (3000, 2000)
        else:
            target_size = (2000, 3000)

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
            quality=85,
            optimize=True
        )

        print(f"{path.name}: {width}x{height} -> {target_size}")

print("Done!")