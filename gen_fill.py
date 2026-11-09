# gen_fill.py - 70 câu hỏi điền vào ô trống môn NT209 (IDs 1-70)
def get_fill_data():
    return [
        # --- CHƯƠNG 1 (IDs 1-10) ---
        {
            "id": 1,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình tiền xử lý trong bộ công cụ GNU thực hiện việc chèn header và mở rộng macro có tên gọi là gì?",
            "answer": ["cpp", "C Preprocessor"],
            "hint": "Tên viết tắt của C Preprocessor (3 chữ cái)",
            "explanation": "cpp (C Preprocessor) là trình tiền xử lý trong bộ công cụ GNU, xử lý các chỉ thị #include, #define và sinh ra file .i."
        },
        {
            "id": 2,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Tên trình biên dịch thực thụ của GCC chịu trách nhiệm chuyển đổi mã C (file .i) sang mã hợp ngữ (file .s) là gì?",
            "answer": ["cc1"],
            "hint": "Tên chương trình compiler nội bộ của GCC (3 ký tự: cc...)",
            "explanation": "cc1 là trình biên dịch C cốt lõi của GCC nhận file .i và tạo ra file hợp ngữ .s."
        },
        {
            "id": 3,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Cờ lệnh GCC dùng để yêu cầu dừng lại ngay sau giai đoạn biên dịch sinh mã hợp ngữ (tạo file .s) là gì?",
            "answer": ["-S"],
            "hint": "Một chữ cái viết hoa kèm dấu gạch ngang (ví dụ: -X)",
            "explanation": "Cờ `-S` chỉ đạo GCC biên dịch mã C thành mã hợp ngữ (.s) rồi dừng lại."
        },
        {
            "id": 4,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình hợp dịch (Assembler) trong bộ công cụ GNU nhận file hợp ngữ .s và sinh ra file nhị phân .o có tên là gì?",
            "answer": ["as"],
            "hint": "Từ viết tắt của assembler (2 chữ cái)",
            "explanation": "as (GNU Assembler) thực hiện hợp dịch mã assembly .s thành object file .o."
        },
        {
            "id": 5,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Cờ lệnh GCC dùng để yêu cầu chỉ biên dịch ra file đối tượng (.o) mà không thực hiện liên kết (linking) là gì?",
            "answer": ["-c"],
            "hint": "Dấu gạch ngang kèm một chữ cái thường",
            "explanation": "Cờ `-c` yêu cầu gcc tạo file object .o rồi dừng mà không gọi linker."
        },
        {
            "id": 6,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình liên kết (Linker) trong GNU ghép nối các file .o và thư viện thành file thực thi có tên là gì?",
            "answer": ["ld"],
            "hint": "Tên viết tắt của Linker (2 chữ cái)",
            "explanation": "ld (GNU Linker) là trình liên kết tạo file thực thi hoàn chỉnh."
        },
        {
            "id": 7,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Lệnh dòng lệnh Linux dùng để dịch ngược mã máy nhị phân (.o hoặc executable) về lại mã hợp ngữ là gì?",
            "answer": ["objdump", "objdump -d"],
            "hint": "Tiện ích bắt đầu bằng obj...",
            "explanation": "`objdump -d` (disassemble) dịch ngược mã máy thành các chỉ thị hợp ngữ x86-64."
        },
        {
            "id": 8,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Cấp bộ nhớ đệm (Cache) nhanh nhất nằm trực tiếp bên trong nhân vi xử lý có tên gọi là gì?",
            "answer": ["L1", "L1 Cache", "L1Cache"],
            "hint": "L kèm một chữ số",
            "explanation": "L1 Cache (Level 1) nằm ngay sát ALU trong nhân CPU, có tốc độ truy xuất nhanh nhất (1-4 chu kỳ)."
        },
        {
            "id": 9,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Nguyên lý cục bộ khi một ô nhớ vừa được truy xuất có khả năng cao sẽ được truy xuất lại trong tương lai gần gọi là cục bộ theo gì?",
            "answer": ["thời gian", "temporal", "temporal locality"],
            "hint": "Thời gian hay Không gian?",
            "explanation": "Temporal locality (cục bộ theo thời gian): dữ liệu vừa dùng sẽ sớm được tái sử dụng."
        },
        {
            "id": 10,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Tầng trừu tượng của Hệ điều hành đại diện cho tất cả các thiết bị Nhập/Xuất (I/O) dưới dạng một chuỗi byte gọi là gì?",
            "answer": ["tập tin", "file", "tệp tin"],
            "hint": "Từ tiếng Anh bắt đầu bằng F (hoặc tiếng Việt: tập...)",
            "explanation": "File (Tập tin) là sự trừu tượng hóa của các thiết bị I/O trong hệ điều hành."
        },

        # --- CHƯƠNG 2 (IDs 11-25) ---
        {
            "id": 11,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Số thập lục phân 0x2A khi chuyển đổi sang hệ thập phân (cơ số 10) có giá trị bằng bao nhiêu?",
            "answer": ["42"],
            "hint": "Một số nguyên (2 * 16 + 10)",
            "explanation": "0x2A = 2 * 16^1 + 10 * 16^0 = 32 + 10 = 42."
        },
        {
            "id": 12,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Một Byte trong kiến trúc máy tính tiêu chuẩn bao gồm bao nhiêu bits?",
            "answer": ["8", "8 bits", "8 bit"],
            "hint": "Một chữ số",
            "explanation": "1 Byte = 8 bits."
        },
        {
            "id": 13,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Kết quả của phép toán bit-wise XOR `0x55 ^ 0x55` biểu diễn dưới dạng thập lục phân là gì?",
            "answer": ["0x00", "0x0", "0", "00"],
            "hint": "Dạng hex 0x...",
            "explanation": "Một số XOR với chính nó luôn luôn bằng 0 (0x00)."
        },
        {
            "id": 14,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giá trị nhỏ nhất (TMin) của kiểu số nguyên có dấu 8-bit bù 2 trong hệ thập phân là bao nhiêu?",
            "answer": ["-128"],
            "hint": "Số âm có 3 chữ số",
            "explanation": "TMin8 = -2^7 = -128 (0x80)."
        },
        {
            "id": 15,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Giá trị lớn nhất (TMax) của kiểu số nguyên có dấu 8-bit bù 2 trong hệ thập phân là bao nhiêu?",
            "answer": ["127"],
            "hint": "Một số nguyên dương (2^7 - 1)",
            "explanation": "TMax8 = 2^7 - 1 = 127 (0x7F)."
        },
        {
            "id": 16,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu diễn thập lục phân (đầy đủ 8 ký số hex) của số nguyên có dấu bù 2 mang giá trị -1 trên hệ thống 32-bit là gì?",
            "answer": ["0xFFFFFFFF", "0xffffffff"],
            "hint": "0x kèm 8 chữ cái F",
            "explanation": "-1 trong hệ bù 2 có tất cả các bit là 1: 0xFFFFFFFF."
        },
        {
            "id": 17,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Biểu diễn thập lục phân (đầy đủ 8 ký số hex) của giá trị TMin trên hệ thống 32-bit bù 2 là gì?",
            "answer": ["0x80000000"],
            "hint": "0x kèm số 8 và bảy số 0",
            "explanation": "TMin32 = -2^31 = 0x80000000 (bit MSB là 1, các bit còn lại bằng 0)."
        },
        {
            "id": 18,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong hệ bù 2, số đối của x được tính theo công thức: `-x = ~x + ?`. Dấu hỏi chấm là số mấy?",
            "answer": ["1"],
            "hint": "Một chữ số",
            "explanation": "Quy tắc lấy số đối bù 2: đảo bit và cộng 1 (-x = ~x + 1)."
        },
        {
            "id": 19,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép toán dịch trái `x << 3` tương đương với phép nhân số nguyên x với bao nhiêu?",
            "answer": ["8"],
            "hint": "2 lũy thừa 3",
            "explanation": "x << 3 tương đương nhân với 2^3 = 8."
        },
        {
            "id": 20,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trong ngôn ngữ C, kết quả của biểu thức so sánh `-1 < 0U` trả về giá trị số là bao nhiêu (0 hay 1)?",
            "answer": ["0", "false"],
            "hint": "Nhập 0 hoặc 1",
            "explanation": "C ép ngầm định -1 sang unsigned thành UMax (4,294,967,295). Vì 4294967295 < 0 là sai nên kết quả là 0."
        },
        {
            "id": 21,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Phép dịch phải nào lấp các vị trí trống bên trái bằng bản sao của bit dấu (MSB): Dịch phải số học hay Dịch phải logic?",
            "answer": ["số học", "dịch phải số học", "arithmetic", "arithmetic shift"],
            "hint": "Số học hay Logic?",
            "explanation": "Dịch phải số học (Arithmetic right shift) giữ nguyên dấu bằng cách điền bit MSB vào các vị trí trống."
        },
        {
            "id": 22,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Trên hệ thống Little-Endian, khi lưu số 16-bit 0x1234, byte nào (0x12 hay 0x34) sẽ nằm ở địa chỉ bộ nhớ thấp hơn?",
            "answer": ["0x34", "34"],
            "hint": "0x12 hoặc 0x34",
            "explanation": "Little-endian lưu byte trọng số thấp (LSB = 0x34) tại địa chỉ nhỏ nhất."
        },
        {
            "id": 23,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Mặt nạ hex 8-bit nào dùng để trích xuất 4 bit thấp (low nibble) của một byte qua phép toán AND?",
            "answer": ["0x0F", "0x0f", "0F", "0f"],
            "hint": "0x0...",
            "explanation": "0x0F (nhị phân 0000 1111) giữ nguyên 4 bit thấp và xóa 4 bit cao."
        },
        {
            "id": 24,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Khi ép kiểu số nguyên từ 32-bit về 16-bit, kết quả toán học tương đương lấy số ban đầu chia lấy dư (modulo) cho 2 lũy thừa bao nhiêu?",
            "answer": ["16", "2^16"],
            "hint": "Số bit của kiểu mới",
            "explanation": "Cắt gọt bit giữ lại 16 bit thấp, tương đương phép tính x mod 2^16."
        },
        {
            "id": 25,
            "chapter": 2,
            "chapterName": "Bits, Bytes & Integers",
            "question": "Khi cộng hai số nguyên có dấu cùng dương (x > 0, y > 0) mà kết quả thu được lại là số âm (s <= 0), hiện tượng này gọi là tràn số gì?",
            "answer": ["tràn số dương", "positive overflow", "dương"],
            "hint": "Tràn số âm hay Tràn số dương?",
            "explanation": "Dương + Dương ra Âm là biểu hiện của Tràn số dương (Positive Overflow)."
        },

        # --- CHƯƠNG 3 (IDs 26-40) ---
        {
            "id": 26,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Kiến trúc vi xử lý x86-64 cung cấp tổng cộng bao nhiêu thanh ghi đa năng 64-bit?",
            "answer": ["16", "16 thanh ghi"],
            "hint": "Một số nguyên",
            "explanation": "x86-64 mở rộng tập thanh ghi lên 16 thanh ghi đa năng (%rax..%r15)."
        },
        {
            "id": 27,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Tên gọi của phần 32-bit thấp của thanh ghi 64-bit %rax là gì?",
            "answer": ["%eax", "eax"],
            "hint": "%e...",
            "explanation": "%eax là 32-bit thấp của %rax."
        },
        {
            "id": 28,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Hậu tố kích thước dữ liệu trong hợp ngữ AT&T đại diện cho kích thước Double Word (4 byte) là chữ cái nào?",
            "answer": ["l"],
            "hint": "Một chữ cái thường (viết tắt của long)",
            "explanation": "l = long / double word (4 byte)."
        },
        {
            "id": 29,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Hậu tố kích thước dữ liệu trong hợp ngữ AT&T đại diện cho kích thước Quad Word (8 byte) là chữ cái nào?",
            "answer": ["q"],
            "hint": "Một chữ cái thường (viết tắt của quadword)",
            "explanation": "q = quadword (8 byte / 64 bit)."
        },
        {
            "id": 30,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Thanh ghi nào trong x86-64 luôn luôn trỏ tới đỉnh của ngăn xếp (Stack Pointer)?",
            "answer": ["%rsp", "rsp"],
            "hint": "%r...",
            "explanation": "%rsp (Stack Pointer) luôn trỏ tới đỉnh ngăn xếp."
        },
        {
            "id": 31,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Thanh ghi nào theo quy ước ABI được sử dụng để lưu trữ giá trị trả về của một hàm?",
            "answer": ["%rax", "rax"],
            "hint": "%r...",
            "explanation": "%rax lưu giá trị trả về của hàm."
        },
        {
            "id": 32,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Cho %rdx = 0x2000, %rcx = 0x10. Địa chỉ tính được của toán hạng `(%rdx, %rcx, 4)` biểu diễn dưới dạng hex là gì?",
            "answer": ["0x2040"],
            "hint": "0x2000 + 0x10 * 4",
            "explanation": "Địa chỉ = 0x2000 + 0x10 * 4 = 0x2000 + 0x40 = 0x2040."
        },
        {
            "id": 33,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Hệ số tỉ lệ s trong toán hạng bộ nhớ Imm(Rb, Ri, s) chỉ được nhận 1 trong 4 giá trị là 1, 2, 4 hoặc mấy?",
            "answer": ["8"],
            "hint": "Một chữ số",
            "explanation": "Hệ số tỉ lệ s chỉ có thể là 1, 2, 4, hoặc 8."
        },
        {
            "id": 34,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Thanh ghi nào bị cấm tuyệt đối không được dùng làm thanh ghi chỉ mục Ri trong toán hạng bộ nhớ?",
            "answer": ["%rsp", "rsp"],
            "hint": "Thanh ghi con trỏ ngăn xếp",
            "explanation": "Kiến trúc x86 cấm sử dụng %rsp làm thanh ghi chỉ mục Ri."
        },
        {
            "id": 35,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh hợp ngữ nào tính địa chỉ hiệu dụng và nạp vào thanh ghi đích mà hoàn toàn KHÔNG truy xuất vào bộ nhớ RAM?",
            "answer": ["leaq", "lea"],
            "hint": "Lệnh 4 chữ cái bắt đầu bằng lea...",
            "explanation": "leaq (Load Effective Address Quadword) chỉ tính toán địa chỉ mà không đọc bộ nhớ."
        },
        {
            "id": 36,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Cho %rdi = x. Lệnh `leaq (%rdi, %rdi, 4), %rax` gán vào thanh ghi %rax giá trị bằng mấy lần x?",
            "answer": ["5", "5 lần", "5x"],
            "hint": "Một chữ số: x + x * 4",
            "explanation": "%rax = x + 4*x = 5*x."
        },
        {
            "id": 37,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong cú pháp AT&T, câu lệnh `subq %rsi, %rdi` thực hiện phép toán lấy thanh ghi nào trừ đi thanh ghi nào?",
            "answer": ["%rdi - %rsi", "rdi - rsi"],
            "hint": "Đích trừ Nguồn hay Nguồn trừ Đích?",
            "explanation": "`subq S, D` thực hiện D = D - S, tức lấy %rdi trừ %rsi."
        },
        {
            "id": 38,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Cách tối ưu nhất (2 byte) để xóa thanh ghi %rax về 0 là dùng lệnh `xorl %eax, ?`. Dấu hỏi chấm là thanh ghi nào?",
            "answer": ["%eax", "eax"],
            "hint": "Chính thanh ghi đó",
            "explanation": "`xorl %eax, %eax` là cách tối ưu nhất để đặt toàn bộ %rax về 0."
        },
        {
            "id": 39,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh hợp ngữ đặc biệt nào thực hiện mở rộng dấu (sign-extend) nội dung của %eax thành %rax?",
            "answer": ["cltq"],
            "hint": "Lệnh 4 chữ cái bắt đầu bằng c...",
            "explanation": "cltq (Convert Long to Quad) mở rộng dấu từ %eax lên %rax."
        },
        {
            "id": 40,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Tên lệnh thực hiện dịch phải số học (Arithmetic right shift) cho dữ liệu kích thước 64-bit là gì?",
            "answer": ["sarq", "sar"],
            "hint": "sarq hay shrq?",
            "explanation": "sarq = Shift Arithmetic Right Quadword."
        },

        # --- CHƯƠNG 4 (IDs 41-55) ---
        {
            "id": 41,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tên viết tắt (2 chữ cái) của cờ nhớ trong thanh ghi trạng thái vi xử lý là gì?",
            "answer": ["CF", "cờ CF"],
            "hint": "Carry Flag",
            "explanation": "CF (Carry Flag) là cờ nhớ, báo hiệu tràn số nguyên không dấu."
        },
        {
            "id": 42,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tên viết tắt (2 chữ cái) của cờ zero (bật lên 1 khi kết quả bằng 0) là gì?",
            "answer": ["ZF", "cờ ZF"],
            "hint": "Zero Flag",
            "explanation": "ZF (Zero Flag) bật lên 1 khi kết quả phép tính bằng 0."
        },
        {
            "id": 43,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tên viết tắt (2 chữ cái) của cờ dấu (bật lên 1 khi kết quả là số âm) là gì?",
            "answer": ["SF", "cờ SF"],
            "hint": "Sign Flag",
            "explanation": "SF (Sign Flag) bằng 1 khi bit MSB của kết quả là 1 (số âm)."
        },
        {
            "id": 44,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tên viết tắt (2 chữ cái) của cờ tràn số có dấu bù 2 là gì?",
            "answer": ["OF", "cờ OF"],
            "hint": "Overflow Flag",
            "explanation": "OF (Overflow Flag) bật lên 1 khi xảy ra tràn số nguyên có dấu."
        },
        {
            "id": 45,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh so sánh trong x86 thực hiện tính hiệu số S1 - S2 để thiết lập cờ mà không lưu kết quả là lệnh gì?",
            "answer": ["cmp", "cmpq", "cmpl"],
            "hint": "Từ viết tắt của Compare (3 chữ cái)",
            "explanation": "cmp (compare) tính S1 - S2 và cập nhật cờ trạng thái."
        },
        {
            "id": 46,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `testq %rax, %rax` thực hiện phép toán logic nào giữa hai toán hạng?",
            "answer": ["AND", "&"],
            "hint": "AND, OR hay XOR?",
            "explanation": "Lệnh test thực hiện phép toán bit-wise AND để thiết lập ZF và SF."
        },
        {
            "id": 47,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy có điều kiện nào trong x86 nhảy khi hai giá trị so sánh bằng nhau (cờ ZF = 1)?",
            "answer": ["je", "jz"],
            "hint": "Jump if Equal",
            "explanation": "je (Jump if Equal) hoặc jz (Jump if Zero) nhảy khi ZF = 1."
        },
        {
            "id": 48,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy có điều kiện nào trong x86 nhảy khi hai giá trị so sánh khác nhau (cờ ZF = 0)?",
            "answer": ["jne", "jnz"],
            "hint": "Jump if Not Equal",
            "explanation": "jne (Jump if Not Equal) hoặc jnz (Jump if Not Zero) nhảy khi ZF = 0."
        },
        {
            "id": 49,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy cho số CÓ DẤU 'Lớn hơn' (Greater) trong x86 là lệnh gì?",
            "answer": ["jg"],
            "hint": "Jump if Greater (2 chữ cái)",
            "explanation": "jg (Jump if Greater) dùng cho so sánh số có dấu."
        },
        {
            "id": 50,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy cho số KHÔNG DẤU 'Lớn hơn' (Above) trong x86 là lệnh gì?",
            "answer": ["ja"],
            "hint": "Jump if Above (2 chữ cái)",
            "explanation": "ja (Jump if Above) dùng cho so sánh số không dấu."
        },
        {
            "id": 51,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tên viết tắt của lệnh di chuyển dữ liệu có điều kiện (Conditional Move) là gì?",
            "answer": ["cmov", "cmovcc"],
            "hint": "4 chữ cái ghép từ c và mov",
            "explanation": "cmov (Conditional Move) sao chép dữ liệu dựa trên trạng thái cờ."
        },
        {
            "id": 52,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tổn thất hiệu năng khi bộ dự đoán nhánh của CPU dự đoán sai đường rẽ gọi là Branch gì Penalty?",
            "answer": ["Misprediction", "Branch Misprediction", "misprediction"],
            "hint": "Từ tiếng Anh bắt đầu bằng M...",
            "explanation": "Branch Misprediction Penalty (hình phạt đoán sai nhánh) làm tốn 15-30 chu kỳ."
        },
        {
            "id": 53,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cấu trúc bảng chứa danh sách các con trỏ địa chỉ mã lệnh dùng để tối ưu câu lệnh switch gọi là Bảng gì?",
            "answer": ["bảng nhảy", "jump table", "Jump Table"],
            "hint": "Bảng...",
            "explanation": "Bảng nhảy (Jump Table) cho phép thực thi câu lệnh switch với độ phức tạp O(1)."
        },
        {
            "id": 54,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Khi một case trong switch không có lệnh break, hiện tượng luồng thực thi tự động chạy tiếp xuống case bên dưới gọi là gì?",
            "answer": ["fall-through", "fall through", "fallthrough"],
            "hint": "Thuật ngữ tiếng Anh gồm 2 từ: Fall-...",
            "explanation": "Fall-through là hiện tượng thực thi trượt xuống mã của case tiếp theo."
        },
        {
            "id": 55,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Dạng vòng lặp nào trong C có cấu trúc tự nhiên nhất khi dịch sang hợp ngữ (thân lặp chạy trước, kiểm tra ở cuối)?",
            "answer": ["do-while", "do while"],
            "hint": "Vòng lặp do...",
            "explanation": "Vòng lặp do-while chỉ cần một phép kiểm tra và nhảy ngược lên đầu vòng lặp."
        },

        # --- CHƯƠNG 5 (IDs 56-70) ---
        {
            "id": 56,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh nào đẩy một giá trị 8-byte lên đỉnh ngăn xếp và tự động giảm %rsp đi 8 byte?",
            "answer": ["pushq", "push"],
            "hint": "Lệnh bắt đầu bằng push...",
            "explanation": "pushq Src: giảm %rsp đi 8 và ghi Src vào *(%rsp)."
        },
        {
            "id": 57,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh nào lấy một giá trị 8-byte từ đỉnh ngăn xếp ra thanh ghi và tự động tăng %rsp lên 8 byte?",
            "answer": ["popq", "pop"],
            "hint": "Lệnh bắt đầu bằng pop...",
            "explanation": "popq Dest: đọc *(%rsp) vào Dest và tăng %rsp lên 8."
        },
        {
            "id": 58,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh gọi hàm `call` tự động đẩy thông tin gì của lệnh tiếp theo vào đỉnh ngăn xếp?",
            "answer": ["địa chỉ trả về", "return address", "Địa chỉ trả về"],
            "hint": "Địa chỉ...",
            "explanation": "call đẩy Return Address (địa chỉ lệnh ngay sau call) lên stack."
        },
        {
            "id": 59,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh kết thúc hàm lấy Return Address từ stack ra để chuyển luồng thực thi trở về hàm gọi là lệnh gì?",
            "answer": ["ret", "rep ret"],
            "hint": "Từ 3 chữ cái viết tắt của Return",
            "explanation": "ret (return) lấy địa chỉ từ đỉnh stack nạp vào %rip."
        },
        {
            "id": 60,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ NHẤT (tham số 1)?",
            "answer": ["%rdi", "rdi"],
            "hint": "%r...",
            "explanation": "Tham số 1 truyền qua %rdi."
        },
        {
            "id": 61,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ HAI (tham số 2)?",
            "answer": ["%rsi", "rsi"],
            "hint": "%r...",
            "explanation": "Tham số 2 truyền qua %rsi."
        },
        {
            "id": 62,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ BA (tham số 3)?",
            "answer": ["%rdx", "rdx"],
            "hint": "%r...",
            "explanation": "Tham số 3 truyền qua %rdx."
        },
        {
            "id": 63,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ TƯ (tham số 4)?",
            "answer": ["%rcx", "rcx"],
            "hint": "%r...",
            "explanation": "Tham số 4 truyền qua %rcx."
        },
        {
            "id": 64,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ NĂM (tham số 5)?",
            "answer": ["%r8", "r8"],
            "hint": "%r...",
            "explanation": "Tham số 5 truyền qua %r8."
        },
        {
            "id": 65,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ SÁU (tham số 6)?",
            "answer": ["%r9", "r9"],
            "hint": "%r...",
            "explanation": "Tham số 6 truyền qua %r9."
        },
        {
            "id": 66,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Vùng không gian bộ nhớ trên stack dành riêng cho một lần thực thi hàm gọi là Khung gì?",
            "answer": ["khung ngăn xếp", "stack frame", "khung stack"],
            "hint": "Khung...",
            "explanation": "Khung ngăn xếp (Stack Frame) lưu trữ biến cục bộ, thanh ghi callee-saved và địa chỉ trả về."
        },
        {
            "id": 67,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Vùng nhớ 128 byte nằm ngay dưới %rsp mà các hàm lá có thể tự do sử dụng gọi là Vùng gì (Red...)?",
            "answer": ["Red Zone", "vùng đỏ", "red zone"],
            "hint": "Red...",
            "explanation": "Red Zone là 128 byte dưới %rsp trong System V ABI dành cho hàm lá."
        },
        {
            "id": 68,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Hàm nhập chuỗi nào trong thư viện chuẩn C cực kỳ nguy hiểm và bị khai tử vì không kiểm soát kích thước đệm?",
            "answer": ["gets", "gets()"],
            "hint": "Hàm 4 chữ cái bắt đầu bằng g...",
            "explanation": "gets() không giới hạn số ký tự đọc vào, là nguyên nhân gây ra nhiều lỗ hổng buffer overflow."
        },
        {
            "id": 69,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Giá trị bí mật ngẫu nhiên được chèn vào stack để phát hiện việc ghi đè Return Address gọi là Stack gì?",
            "answer": ["Canary", "Stack Canary", "canary"],
            "hint": "Tên loài chim hoàng yến",
            "explanation": "Stack Canary (chim hoàng yến báo động mỏ than) dùng để phát hiện tràn bộ đệm."
        },
        {
            "id": 70,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Kỹ thuật của Hệ điều hành ngẫu nhiên hóa vị trí các vùng nhớ (Stack, Heap, Libc) mỗi lần chạy viết tắt là gì?",
            "answer": ["ASLR"],
            "hint": "4 chữ cái viết hoa (Address Space Layout...)",
            "explanation": "ASLR (Address Space Layout Randomization) ngẫu nhiên hóa địa chỉ bộ nhớ."
        }
    ]
