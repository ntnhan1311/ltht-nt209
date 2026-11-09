# build_all.py - Ghép nối toàn bộ dữ liệu và kiểm tra tính toàn vẹn
import json
import os
import sys

# Import modules
from gen_theory import get_theory_data
from gen_mcq_ch1 import get_mcq_ch1
from gen_mcq_ch2 import get_mcq_ch2
from gen_mcq_ch3 import get_mcq_ch3
from gen_mcq_ch4 import get_mcq_ch4
from gen_mcq_ch5 import get_mcq_ch5
from gen_fill import get_fill_data

theory_data = get_theory_data()
mcq_data = (
    get_mcq_ch1() +
    get_mcq_ch2() +
    get_mcq_ch3() +
    get_mcq_ch4() +
    get_mcq_ch5()
)
fill_data = get_fill_data()

print(f"Theory chapters: {len(theory_data)}")
print(f"MCQ count: {len(mcq_data)}")
print(f"Fill count: {len(fill_data)}")

# Verification checks
assert len(theory_data) == 5, f"Expected 5 theory chapters, got {len(theory_data)}"
assert len(mcq_data) == 200, f"Expected 200 MCQs, got {len(mcq_data)}"
assert len(fill_data) == 70, f"Expected 70 fill questions, got {len(fill_data)}"

# Check MCQ IDs and integrity
mcq_ids = set()
for q in mcq_data:
    assert q['id'] not in mcq_ids, f"Duplicate MCQ ID: {q['id']}"
    mcq_ids.add(q['id'])
    assert len(q['options']) == 4, f"MCQ #{q['id']} doesn't have 4 options: {len(q['options'])}"
    assert 0 <= q['answer'] <= 3, f"MCQ #{q['id']} answer out of bounds: {q['answer']}"
    assert len(q['question'].strip()) > 10, f"MCQ #{q['id']} question too short"
    assert len(q['explanation'].strip()) > 5, f"MCQ #{q['id']} explanation too short"
assert mcq_ids == set(range(1, 201)), "MCQ IDs must be exactly 1 to 200"

# Check Fill IDs and integrity
fill_ids = set()
for q in fill_data:
    assert q['id'] not in fill_ids, f"Duplicate Fill ID: {q['id']}"
    fill_ids.add(q['id'])
    assert len(q['answer']) >= 1, f"Fill #{q['id']} has no answers"
    assert len(q['question'].strip()) > 10, f"Fill #{q['id']} question too short"
    assert len(q['explanation'].strip()) > 5, f"Fill #{q['id']} explanation too short"
assert fill_ids == set(range(1, 71)), "Fill IDs must be exactly 1 to 70"

# Write data.js
out_path = os.path.join(os.path.dirname(__file__), 'data.js')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write("// NT209 - Lập Trình Hệ Thống: CSDL Lý Thuyết & 270 Câu Hỏi Ôn Tập\n")
    f.write("// Tự động tổng hợp từ bài giảng môn học\n\n")
    f.write("const THEORY_DATA = ")
    json.dump(theory_data, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    f.write("const MCQ_DATA = ")
    json.dump(mcq_data, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    f.write("const FILL_DATA = ")
    json.dump(fill_data, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {out_path} ({os.path.getsize(out_path)} bytes)")
