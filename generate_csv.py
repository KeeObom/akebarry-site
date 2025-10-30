# THIS SCRIPT IS USED TO GENERATE CODE FOR THE NAMES SENT
# THE OUTPUT CSV WILL BE UPLOADED TO SUPABASE DB
# OR PASTED AS TEXT 
# RUN WITH python3 generate_csv.py


import csv
import random
import string
from datetime import date

# === CONFIG ===
INPUT_FILE = "students.csv"
OUTPUT_FILE = "students_ready.csv"
USED_CODES_FILE = "used_codes.txt"
COURSE_NAME = "HSE 1, 2 & 3"  # You can change this manually (HSE 1, 2, or 3)
ISSUED_DATE = str(date.today())  # You can override with a fixed date, e.g. "2025-11-01"

# === LOAD PREVIOUS CODES TO AVOID DUPLICATES ===
try:
    with open(USED_CODES_FILE, "r") as f:
        used_codes = set(line.strip() for line in f if line.strip())
except FileNotFoundError:
    used_codes = set()

def generate_unique_code():
    """Generate an 8-character unique lowercase alphanumeric code."""
    while True:
        code = ''.join(random.choices(string.ascii_lowercase + string.digits, k=8))
        if code not in used_codes:
            used_codes.add(code)
            return code

# === READ INPUT NAMES ===
with open(INPUT_FILE, "r") as infile:
    reader = csv.DictReader(infile)
    students = [row["student_name"].strip() for row in reader if row.get("student_name")]

# === WRITE OUTPUT ===
with open(OUTPUT_FILE, "w", newline="") as outfile:
    fieldnames = ["student_name", "course_name", "issued_date", "code", "valid"]
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()

    for name in students:
        writer.writerow({
            "student_name": name,
            "course_name": COURSE_NAME,
            "issued_date": ISSUED_DATE,
            "code": generate_unique_code(),
            "valid": "TRUE"
        })

# === SAVE USED CODES ===
with open(USED_CODES_FILE, "w") as f:
    for code in sorted(used_codes):
        f.write(f"{code}\n")

print(f"✅ Done! Generated {len(students)} records in {OUTPUT_FILE}")
