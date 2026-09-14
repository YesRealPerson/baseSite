import os
from PIL import Image
from PIL.ExifTags import TAGS

files = os.listdir("./")
ids = [272, 42036, 33434, 33437, 37386]
names = ["Camera", "Lens", "Shutter Speed", "F-Stop", "Focal Length"]
ls = [
    0,
    0,
    lambda x: f"1/{round(1 / x)}",
    lambda x: "f" + str(x),
    lambda x: str(int(x)) + "mm"
]

for x in files:
    if x.endswith(".jpg"):
        i = Image.open("./"+x)
        exif = i._getexif()
        if exif:
            details = []
            for id, value in exif.items():
                if id in ids:
                    idx = ids.index(id)
                    v = value
                    if ls[idx]:
                        v = ls[idx](value)
                    details.append([names[idx], v])
            if(not len(details)):
                details.append(["Camera", "EOS R8"])
            print("{\n"+f'src: "/{x}",\nalt: "TODO",\ndetails:{details}'+"\n},")