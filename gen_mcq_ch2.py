# gen_mcq_ch2.py - 45 câu trắc nghiệm Chương 2: Biểu Diễn Thông Tin & Số Nguyên (IDs 31-75)
def get_mcq_ch2():
    return [
        {
            "id": 31,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Số thập lục phân 0x3F tương ứng với giá trị nhị phân 8-bit nào sau đây?",
            "options": [
                "0011 1111",
                "0011 1110",
                "1111 0011",
                "0101 1111"
            ],
            "answer": 0,
            "explanation": "0x3 = 0011_2 và 0xF = 1111_2, do đó 0x3F = 00111111_2."
        },
        {
            "id": 32,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu diễn nhị phân của số thập lục phân 0xA5 là gì?",
            "options": [
                "1010 0101",
                "1011 0101",
                "1010 0110",
                "1100 0101"
            ],
            "answer": 0,
            "explanation": "0xA = 10 = 1010_2 và 0x5 = 5 = 0101_2. Ghép lại ta được 10100101_2."
        },
        {
            "id": 33,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Kết quả của phép toán bit-wise `0x41 ^ 0x00` là bao nhiêu?",
            "options": [
                "0x00",
                "0x41",
                "0xFF",
                "0xBE"
            ],
            "answer": 1,
            "explanation": "Tính chất của phép XOR: x ^ 0 = x với mọi giá trị của x. Do đó 0x41 ^ 0x00 = 0x41."
        },
        {
            "id": 34,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Kết quả của phép toán bit-wise `0x6A ^ 0x6A` là bao nhiêu?",
            "options": [
                "0x6A",
                "0xFF",
                "0x00",
                "0x35"
            ],
            "answer": 2,
            "explanation": "Tính chất của phép XOR: x ^ x = 0 với mọi x. Hai số giống hệt nhau XOR với nhau luôn bằng 0."
        },
        {
            "id": 35,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Đoạn mã C sau thực hiện hoán đổi giá trị hai biến x và y không dùng biến tạm:\n`x = x ^ y; y = x ^ y; x = x ^ y;`\nThuật toán này hoạt động dựa trên tính chất toán học nào của phép XOR?",
            "options": [
                "Tính phân phối với phép nhân",
                "Tính kết hợp, giao hoán và tính chất tự triệt tiêu `a ^ a = 0`, `a ^ 0 = a`",
                "Tính bù 1 của số nhị phân",
                "Tính chất tràn số trong phép cộng modulo 2"
            ],
            "answer": 1,
            "explanation": "Sau bước 2: y = (x ^ y) ^ y = x ^ (y ^ y) = x ^ 0 = x. Sau bước 3: x = (x ^ y) ^ x = (x ^ x) ^ y = 0 ^ y = y."
        },
        {
            "id": 36,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Kết quả của biểu thức C `!0x41` (toán tử phủ định logic) so với `~0x41` (toán tử đảo bit) trên biến 8-bit là gì?",
            "options": [
                "!0x41 cho ra 0x00, còn ~0x41 cho ra 0xBE",
                "!0x41 cho ra 0xBE, còn ~0x41 cho ra 0x00",
                "Cả hai đều cho ra 0x00",
                "Cả hai đều cho ra 0xFF"
            ],
            "answer": 0,
            "explanation": "Toán tử logic ! nhận giá trị khác 0 (0x41) và trả về 0 (0x00). Toán tử bit ~ đảo từng bit: ~0100 0001_2 = 1011 1110_2 = 0xBE."
        },
        {
            "id": 37,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong ngôn ngữ C, kết quả của biểu thức logic `0x69 && 0x55` là gì?",
            "options": [
                "0x41",
                "0x01",
                "0x00",
                "0x7D"
            ],
            "answer": 1,
            "explanation": "Toán tử && là toán tử logic, cả hai vế 0x69 và 0x55 đều khác 0 (True), nên kết quả của biểu thức logic luôn là 1 (0x01)."
        },
        {
            "id": 38,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Kết quả của phép toán bit-wise `0x69 & 0x55` (trên 8-bit) là gì?",
            "options": [
                "0x41",
                "0x01",
                "0x7D",
                "0x00"
            ],
            "answer": 0,
            "explanation": "0x69 = 0110 1001_2, 0x55 = 0101 0101_2. Thực hiện AND từng bit: 0100 0001_2 = 0x41."
        },
        {
            "id": 39,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Sự khác biệt chính giữa Dịch phải logic (Logical right shift) và Dịch phải số học (Arithmetic right shift) là gì?",
            "options": [
                "Dịch phải logic luôn chèn các bit 0 vào vị trí trống bên trái, còn dịch phải số học chèn bản sao của bit dấu (MSB)",
                "Dịch phải logic dùng cho số có dấu, dịch phải số học dùng cho số không dấu",
                "Dịch phải logic làm tăng giá trị của số, dịch phải số học làm giảm giá trị",
                "Dịch phải logic chỉ áp dụng cho số thực float"
            ],
            "answer": 0,
            "explanation": "Dịch phải logic luôn lấp 0 bên trái (dùng cho unsigned). Dịch phải số học giữ nguyên dấu bằng cách lấp bit MSB (dùng cho signed bù 2)."
        },
        {
            "id": 40,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho biến 8-bit `x = 0xD4` (nhị phân `1101 0100_2`). Nếu thực hiện dịch phải số học `x >> 2`, kết quả nhị phân thu được là gì?",
            "options": [
                "0011 0101",
                "1111 0101",
                "1101 0000",
                "0101 0101"
            ],
            "answer": 1,
            "explanation": "Vì bit dấu MSB của 0xD4 là 1 (số âm), phép dịch phải số học sẽ chèn hai bit 1 vào bên trái: 1101 0100 >> 2 = 1111 0101_2 (tương ứng 0xF5)."
        },
        {
            "id": 41,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trên kiến trúc x86-64, khi thao tác với biến kiểu `int` 32-bit, biểu thức `x << 36` sẽ được phần cứng thực thi như thế nào?",
            "options": [
                "Dịch sang trái 36 bit, biến x chắc chắn bằng 0",
                "Gây ra ngắt phần cứng (Hardware Exception)",
                "Chỉ lấy 5 bit thấp của số lượng dịch (36 mod 32 = 4), tương đương thực hiện `x << 4`",
                "Trình biên dịch tự động ép x sang kiểu long 64-bit"
            ],
            "answer": 2,
            "explanation": "Với kiểu dữ liệu w = 32 bit, tập lệnh x86 chỉ đọc 5 bit thấp của số lượng dịch (k mod 32). Vì 36 % 32 = 4 nên lệnh thực tế là x << 4."
        },
        {
            "id": 42,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong hệ biểu diễn số nguyên có dấu bù 2 (Two's Complement) độ dài w bit, bit có trọng số âm là bit nào?",
            "options": [
                "Bit thấp nhất (LSB - vị trí 0) với trọng số -1",
                "Bit cao nhất (MSB - vị trí w-1) với trọng số -2^(w-1)",
                "Tất cả các bit đều mang trọng số âm",
                "Không có bit nào mang trọng số âm"
            ],
            "answer": 1,
            "explanation": "Trong công thức B2T: giá trị = -x_{w-1} * 2^(w-1) + sum_{i=0}^{w-2} x_i * 2^i. Chỉ bit MSB x_{w-1} mang trọng số âm."
        },
        {
            "id": 43,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giá trị nhỏ nhất (TMin) và lớn nhất (TMax) của kiểu số nguyên có dấu 8-bit bù 2 lần lượt là bao nhiêu?",
            "options": [
                "TMin = -128, TMax = 127",
                "TMin = -127, TMax = 128",
                "TMin = -256, TMax = 255",
                "TMin = 0, TMax = 255"
            ],
            "answer": 0,
            "explanation": "Với w=8: TMin = -2^7 = -128 (0x80) và TMax = 2^7 - 1 = 127 (0x7F)."
        },
        {
            "id": 44,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu diễn thập lục phân của số bù 2 mang giá trị `-1` trên hệ thống 32-bit là gì?",
            "options": [
                "0x80000000",
                "0xFFFFFFFF",
                "0x7FFFFFFF",
                "0x00000001"
            ],
            "answer": 1,
            "explanation": "Số -1 trong bù 2 có toàn bộ tất cả các bit là 1: 1111...1111_2 = 0xFFFFFFFF."
        },
        {
            "id": 45,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu diễn thập lục phân của TMin (giá trị âm nhỏ nhất) trên hệ thống 32-bit bù 2 là gì?",
            "options": [
                "0xFFFFFFFF",
                "0x80000000",
                "0x7FFFFFFF",
                "0x00000000"
            ],
            "answer": 1,
            "explanation": "TMin32 = -2^31 = -2,147,483,648. Biểu diễn nhị phân có bit MSB là 1, các bit còn lại là 0: 1000...0000_2 = 0x80000000."
        },
        {
            "id": 46,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu thức toán học nào sau đây thể hiện mối quan hệ chính xác giữa TMin, TMax và UMax trên cùng độ dài w-bit?",
            "options": [
                "|TMin| = TMax + 1 và UMax = 2 * TMax + 1",
                "|TMin| = TMax và UMax = 2 * TMax",
                "|TMin| = TMax - 1 và UMax = TMax + TMin",
                "TMin + TMax = UMax"
            ],
            "answer": 0,
            "explanation": "Vì có số 0 chiếm một vị trí ở miền dương, nên số lượng số âm nhiều hơn số dương 1 đơn vị: |TMin| = TMax + 1. Ngoài ra, UMax = 2^w - 1 = 2 * (2^{w-1} - 1) + 1 = 2 * TMax + 1."
        },
        {
            "id": 47,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong hệ bù 2, số đối (negation: `-x`) của một số nguyên x được tính bằng công thức nào ở mức bit?",
            "options": [
                "~x",
                "~x + 1",
                "~(x + 1)",
                "x ^ 0xFFFFFFFF"
            ],
            "answer": 1,
            "explanation": "Quy tắc lấy số đối trong bù 2: đảo tất cả các bit rồi cộng 1, tức là -x = ~x + 1."
        },
        {
            "id": 48,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trường hợp ngoại lệ đặc biệt nào sau đây xảy ra khi lấy số đối bù 2 (`-x = ~x + 1`)?",
            "options": [
                "-0 khác 0",
                "-TMin = TMin",
                "-TMax = TMin",
                "-(-1) = 0"
            ],
            "answer": 1,
            "explanation": "Do tính bất đối xứng của bù 2, không có số dương tương ứng cho TMin (vì TMax < |TMin|). Do đó ~TMin + 1 bị tràn số và quay trở lại chính TMin. Ví dụ 8-bit: -(-128) = -128."
        },
        {
            "id": 49,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong ngôn ngữ C, kết quả đánh giá của biểu thức so sánh `-1 < 0U` là gì?",
            "options": [
                "True (1)",
                "False (0)",
                "Lỗi biên dịch do so sánh khác kiểu",
                "Hành vi không xác định (Undefined Behavior)"
            ],
            "answer": 1,
            "explanation": "Cạm bẫy kinh điển: Khi so sánh signed và unsigned, C tự động ép signed (-1) sang unsigned. -1 trong unsigned 32-bit là UMax = 4,294,967,295. Vì 4294967295 < 0 là sai nên kết quả là False (0)."
        },
        {
            "id": 50,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong C trên hệ thống 32-bit, biểu thức `2147483647U > -2147483647 - 1` trả về kết quả nào?",
            "options": [
                "True (1)",
                "False (0)",
                "Bị crash do tràn số",
                "Lỗi cú pháp"
            ],
            "answer": 1,
            "explanation": "Vế phải là TMin (-2147483648). Do vế trái là unsigned (2147483647U), vế phải bị ép kiểu ngầm định sang unsigned thành 2147483648U. Vì 2147483647U > 2147483648U là sai, kết quả là False (0)."
        },
        {
            "id": 51,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Quá trình Zero Extension (mở rộng bằng số 0) được áp dụng khi nào?",
            "options": [
                "Chuyển một số nguyên không dấu (unsigned) sang kiểu dữ liệu có số bit lớn hơn",
                "Chuyển một số nguyên có dấu (signed) sang kiểu dữ liệu có số bit lớn hơn",
                "Cắt bớt số bit từ 32-bit về 16-bit",
                "Thực hiện phép chia số âm cho 2"
            ],
            "answer": 0,
            "explanation": "Zero extension dùng cho số không dấu (unsigned), các bit cao mới được điền toàn bộ là số 0 để bảo toàn giá trị số học ban đầu."
        },
        {
            "id": 52,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho biến kiểu `short` 16-bit `x = -5`. Khi chuyển `x` sang kiểu `int` 32-bit, giá trị các bit mới ở nửa trên (16 bit cao) sẽ là gì?",
            "options": [
                "Toàn bit 0 (Zero extension)",
                "Toàn bit 1 (Sign extension vì x là số âm)",
                "Các giá trị ngẫu nhiên trong bộ nhớ",
                "Nửa bit 0 nửa bit 1 xen kẽ"
            ],
            "answer": 1,
            "explanation": "Vì short là kiểu có dấu và mang giá trị âm (bit dấu MSB = 1), cơ chế Sign Extension sẽ sao chép bit dấu 1 vào toàn bộ 16 bit cao."
        },
        {
            "id": 53,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho đoạn mã C: `short sx = -12345; unsigned int uy = sx;`. Quá trình chuyển đổi diễn ra theo thứ tự chuẩn nào?",
            "options": [
                "Ép kiểu sang unsigned short trước, rồi mới mở rộng thành unsigned int",
                "Mở rộng dấu (Sign extension) từ short lên int trước, sau đó mới đổi kiểu thành unsigned int",
                "Cắt bớt bit rồi mới mở rộng",
                "Không mở rộng mà chỉ sao chép 16 bit vào phần cao của uy"
            ],
            "answer": 1,
            "explanation": "Chuẩn C quy định: Khi vừa đổi kích thước vừa đổi kiểu signed/unsigned, việc thay đổi kích thước được ưu tiên thực hiện trước (Sign extension sx từ 16-bit lên 32-bit), sau đó mới chuyển sang unsigned."
        },
        {
            "id": 54,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Khi ép kiểu một số nguyên 32-bit sang kiểu 16-bit (Truncation), giá trị mới được xác định như thế nào?",
            "options": [
                "Lấy giá trị cũ chia cho 2",
                "Bỏ 16 bit thấp, giữ lại 16 bit cao",
                "Cắt bỏ 16 bit cao, chỉ giữ lại 16 bit thấp (tương đương lấy modulo 2^16)",
                "Đặt toàn bộ giá trị thành 0xFFFF"
            ],
            "answer": 2,
            "explanation": "Truncation (cắt gọt) giữ lại k bit thấp và loại bỏ các bit cao, về mặt toán học tương đương với phép toán lấy phần dư modulo 2^k."
        },
        {
            "id": 55,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phát hiện tràn số trong phép cộng hai số nguyên không dấu w-bit (s = x + y) dựa vào điều kiện nào sau đây?",
            "options": [
                "s < x (hoặc s < y)",
                "s > x",
                "s == 0",
                "x < 0 hoặc y < 0"
            ],
            "answer": 0,
            "explanation": "Với hai số không dấu, nếu có tràn số, tổng s = (x + y) mod 2^w sẽ bị quay vòng và nhỏ hơn toán hạng x (hoặc y)."
        },
        {
            "id": 56,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Hiện tượng tràn số dương (Positive Overflow) trong phép cộng hai số nguyên có dấu bù 2 xảy ra khi nào?",
            "options": [
                "x > 0, y > 0 nhưng kết quả tổng s <= 0",
                "x < 0, y < 0 nhưng kết quả tổng s >= 0",
                "x > 0, y < 0 nhưng kết quả tổng s == 0",
                "x == y"
            ],
            "answer": 0,
            "explanation": "Cộng hai số dương lớn mà kết quả sinh ra bit dấu MSB là 1 (số âm) chính là biểu hiện của tràn số dương."
        },
        {
            "id": 57,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Hiện tượng tràn số âm (Negative Overflow) trong phép cộng hai số nguyên có dấu bù 2 xảy ra khi nào?",
            "options": [
                "x > 0, y > 0 nhưng kết quả tổng s <= 0",
                "x < 0, y < 0 nhưng kết quả tổng s >= 0",
                "x + y < -1000",
                "x và y khác dấu nhau"
            ],
            "answer": 1,
            "explanation": "Cộng hai số âm lớn mà kết quả sinh ra bit dấu MSB là 0 (số không âm) chính là tràn số âm."
        },
        {
            "id": 58,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép cộng giữa một số nguyên dương và một số nguyên âm trong hệ bù 2 có thể xảy ra hiện tượng tràn số không?",
            "options": [
                "Có thể tràn số dương",
                "Có thể tràn số âm",
                "Không bao giờ xảy ra tràn số",
                "Chỉ tràn số nếu hai số có độ lớn tuyệt đối bằng nhau"
            ],
            "answer": 2,
            "explanation": "Cộng một số dương x và một số âm y luôn cho kết quả nằm chặt chẽ trong khoảng [TMin, TMax], do đó không bao giờ có thể bị tràn số."
        },
        {
            "id": 59,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép nhân một số nguyên x với 16 có thể được tối ưu hóa bằng chỉ thị dịch bit nào?",
            "options": [
                "x >> 4",
                "x << 4",
                "x << 16",
                "x >> 16"
            ],
            "answer": 1,
            "explanation": "16 = 2^4, do đó nhân với 16 tương đương với dịch trái 4 bit: x << 4."
        },
        {
            "id": 60,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu thức `(x << 3) - x` tương đương với phép nhân nào trong số học?",
            "options": [
                "x * 2",
                "x * 7",
                "x * 8",
                "x * 9"
            ],
            "answer": 1,
            "explanation": "x << 3 = 8 * x. Do đó (x << 3) - x = 8x - x = 7 * x."
        },
        {
            "id": 61,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Tại sao khi chia một số nguyên có dấu âm `x < 0` cho 2^k bằng phép dịch phải số học, ta phải cộng thêm lượng thiên lệch (Bias) `(1 << k) - 1`?",
            "options": [
                "Để kết quả làm tròn đúng về 0 (round toward zero) theo chuẩn ngôn ngữ C, thay vì làm tròn xuống âm vô cùng",
                "Để biến số âm thành số dương",
                "Để tránh lỗi chia cho 0 trong CPU",
                "Để đặt cờ tràn số OF lên 1"
            ],
            "answer": 0,
            "explanation": "Dịch phải số học đơn thuần làm tròn xuống (-inf), ví dụ -3 >> 1 = -2 (trong khi C yêu cầu -3 / 2 = -1). Cộng bias (2^k - 1) trước khi dịch giúp kết quả làm tròn đúng về 0."
        },
        {
            "id": 62,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Đoạn mã C tối ưu phép chia có dấu `x / 4` (với 4 = 2^2) làm tròn về 0 đúng chuẩn là:",
            "options": [
                "x >> 2",
                "(x < 0 ? x + 3 : x) >> 2",
                "(x + 4) >> 2",
                "x / 2 >> 1"
            ],
            "answer": 1,
            "explanation": "Với k=2, lượng bias là 2^k - 1 = 3. Nếu x < 0 thì cộng bias 3 trước khi dịch phải 2: (x < 0 ? x + 3 : x) >> 2."
        },
        {
            "id": 63,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong kiến trúc Little-Endian (như Intel x86-64), các byte của một dữ liệu đa byte được sắp xếp trong bộ nhớ theo nguyên tắc nào?",
            "options": [
                "Byte có trọng số thấp nhất (LSB) được lưu tại địa chỉ bộ nhớ thấp nhất",
                "Byte có trọng số cao nhất (MSB) được lưu tại địa chỉ bộ nhớ thấp nhất",
                "Các byte chẵn lưu trước, các byte lẻ lưu sau",
                "Các byte được đảo ngược thứ tự ngẫu nhiên sau mỗi lần khởi động"
            ],
            "answer": 0,
            "explanation": "Little Endian: 'Little end comes first' - byte có trọng số thấp nhất (LSB) nằm tại địa chỉ bộ nhớ nhỏ nhất."
        },
        {
            "id": 64,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giả sử số nguyên 32-bit `0x12345678` được lưu tại địa chỉ `0x100` trên hệ thống Little-Endian. Giá trị tại byte địa chỉ `0x100` là bao nhiêu?",
            "options": [
                "0x12",
                "0x34",
                "0x56",
                "0x78"
            ],
            "answer": 3,
            "explanation": "Byte LSB là 0x78 sẽ nằm tại địa chỉ thấp nhất 0x100. Tiếp theo 0x101 là 0x56, 0x102 là 0x34, và 0x103 là 0x12."
        },
        {
            "id": 65,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giả sử số nguyên 32-bit `0x12345678` được lưu tại địa chỉ `0x100` trên hệ thống Big-Endian. Giá trị tại byte địa chỉ `0x100` là bao nhiêu?",
            "options": [
                "0x12",
                "0x78",
                "0x34",
                "0x56"
            ],
            "answer": 0,
            "explanation": "Big Endian: Byte có trọng số cao nhất (MSB là 0x12) được lưu tại địa chỉ nhỏ nhất 0x100."
        },
        {
            "id": 66,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giao thức truyền thông mạng Internet (TCP/IP) quy định thứ tự byte tiêu chuẩn (Network Byte Order) là gì?",
            "options": [
                "Little-Endian",
                "Big-Endian",
                "Middle-Endian",
                "Tùy thuộc vào vi xử lý của máy gửi"
            ],
            "answer": 1,
            "explanation": "Network Byte Order được quy định chuẩn hóa là Big-Endian (sử dụng các hàm htons, htonl để chuyển đổi từ máy x86 Little-Endian)."
        },
        {
            "id": 67,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho biến nguyên không dấu 8-bit `x = 0xF0`. Phép toán nào sau đây cho phép lấy ra giá trị 4-bit thấp (low nibble) của x?",
            "options": [
                "x & 0x0F",
                "x | 0x0F",
                "x ^ 0xFF",
                "x >> 4"
            ],
            "answer": 0,
            "explanation": "Mặt nạ 0x0F (0000 1111) kết hợp với phép & sẽ giữ nguyên 4 bit thấp và xóa toàn bộ các bit cao về 0."
        },
        {
            "id": 68,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép toán bit nào sau đây dùng để BẬT bit thứ k (đếm từ 0) của biến x lên 1 mà không làm thay đổi các bit khác?",
            "options": [
                "x = x & (1 << k)",
                "x = x | (1 << k)",
                "x = x ^ (1 << k)",
                "x = x & ~(1 << k)"
            ],
            "answer": 1,
            "explanation": "Phép OR với mặt nạ (1 << k) sẽ đặt bit k thành 1 (vì 0|1=1 và 1|1=1), các bit khác OR với 0 giữ nguyên giá trị."
        },
        {
            "id": 69,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép toán bit nào sau đây dùng để TẮT (xóa về 0) bit thứ k của biến x mà không làm thay đổi các bit khác?",
            "options": [
                "x = x & ~(1 << k)",
                "x = x | (1 << k)",
                "x = x ^ (1 << k)",
                "x = ~x"
            ],
            "answer": 0,
            "explanation": "~(1 << k) tạo ra chuỗi bit toàn 1 ngoại trừ bit k bằng 0. AND với mặt nạ này sẽ xóa bit k về 0 và giữ nguyên mọi bit khác."
        },
        {
            "id": 70,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép toán bit nào sau đây dùng để ĐẢO (toggle: 0 thành 1, 1 thành 0) bit thứ k của biến x?",
            "options": [
                "x = x ^ (1 << k)",
                "x = x | (1 << k)",
                "x = x & (1 << k)",
                "x = x + (1 << k)"
            ],
            "answer": 0,
            "explanation": "XOR với 1 sẽ đảo trạng thái bit (0^1=1, 1^1=0), trong khi XOR với 0 giữ nguyên bit."
        },
        {
            "id": 71,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho x là một số nguyên dương 32-bit. Biểu thức `(x & (x - 1)) == 0` có ý nghĩa kiểm tra điều gì?",
            "options": [
                "Kiểm tra xem x có phải là số lẻ hay không",
                "Kiểm tra xem x có phải là một lũy thừa của 2 (Power of 2) hay không",
                "Kiểm tra xem x có chia hết cho 4 hay không",
                "Kiểm tra xem x có bằng 0 hay không"
            ],
            "answer": 1,
            "explanation": "Một lũy thừa của 2 có dạng nhị phân 00..10..00. Trừ đi 1 sẽ đảo toàn bộ các bit từ bit 1 đó trở về sau. Phép AND sẽ triệt tiêu bit 1 duy nhất đó, cho kết quả bằng 0."
        },
        {
            "id": 72,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giá trị của biểu thức C `~0` bằng bao nhiêu trên kiểu int 32-bit?",
            "options": [
                "0",
                "1",
                "-1",
                "2147483647"
            ],
            "answer": 2,
            "explanation": "Số 0 có toàn bộ 32 bit là 0. Đảo tất cả các bit ~0 sẽ thành 32 bit 1 (0xFFFFFFFF), trong hệ bù 2 đây chính là số -1."
        },
        {
            "id": 73,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho một mảng các byte: `char arr[4] = {0x00, 0x01, 0x00, 0x00};`. Nếu ép mảng này thành con trỏ `int*` và đọc giá trị trên máy Little-Endian, giá trị số nguyên thu được là bao nhiêu?",
            "options": [
                "1",
                "256",
                "65536",
                "16777216"
            ],
            "answer": 1,
            "explanation": "Trên Little-Endian: byte arr[0]=0x00 ở vị trí LSB, byte arr[1]=0x01 ở vị trí byte thứ hai (trọng số 256), byte 2 và 3 là 0x00. Giá trị tổng là 0x00000100 = 256."
        },
        {
            "id": 74,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Điều gì xảy ra trong biểu thức C `unsigned int i; for (i = 10; i >= 0; i--)`?",
            "options": [
                "Vòng lặp chạy đúng 11 lần rồi dừng bình thường",
                "Vòng lặp vô tận vì kiểu unsigned luôn luôn >= 0, khi i = 0 mà i-- thì i sẽ tràn thành UMax (4294967295)",
                "Lỗi biên dịch vì biến unsigned không được dùng trong vòng for",
                "Chương trình bị crash do tràn stack"
            ],
            "answer": 1,
            "explanation": "Cạm bẫy cực kỳ phổ biến: biến unsigned không bao giờ âm, do đó điều kiện i >= 0 luôn luôn đúng, vòng lặp trở thành vô tận."
        },
        {
            "id": 75,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Cho hai số nguyên có dấu 8-bit: `x = 100 (0x64)` và `y = 50 (0x32)`. Kết quả phép cộng `x + y` trong hệ 8-bit bù 2 là gì?",
            "options": [
                "150",
                "-106 (do tràn số dương thành âm)",
                "0",
                "127"
            ],
            "answer": 1,
            "explanation": "100 + 50 = 150 vượt quá TMax8 (127). Biểu diễn nhị phân: 01100100 + 00110010 = 10010110_2 = 0x96. Trong bù 2, 0x96 có bit MSB là 1, mang giá trị 150 - 256 = -106."
        }
    ]
