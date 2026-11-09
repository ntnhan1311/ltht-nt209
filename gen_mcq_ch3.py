# gen_mcq_ch3.py - 45 câu trắc nghiệm Chương 3: Hợp Ngữ x86-64 Cơ Bản (IDs 76-120)
def get_mcq_ch3():
    return [
        {
            "id": 76,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong cú pháp hợp ngữ GNU/AT&T (mặc định của GCC trên Linux), thứ tự của các toán hạng trong một câu lệnh là gì?",
            "options": [
                "Lệnh Toán_hạng_đích, Toán_hạng_nguồn (Destination, Source)",
                "Lệnh Toán_hạng_nguồn, Toán_hạng_đích (Source, Destination)",
                "Luôn bắt buộc có 3 toán hạng",
                "Tùy thuộc vào việc thanh ghi là 32-bit hay 64-bit"
            ],
            "answer": 1,
            "explanation": "Cú pháp AT&T quy định: lệnh Source, Destination (ví dụ `movq %rax, %rbx` sao chép dữ liệu từ %rax sang %rbx)."
        },
        {
            "id": 77,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong cú pháp AT&T, ký hiệu tiền tố nào bắt buộc phải đứng trước một hằng số tức thì (Immediate value)?",
            "options": [
                "%",
                "$",
                "&",
                "#"
            ],
            "answer": 1,
            "explanation": "Cú pháp AT&T dùng dấu `$` cho hằng số tức thì (ví dụ `$0x10`, `$-42`) và dùng `%` cho tên thanh ghi."
        },
        {
            "id": 78,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Kiến trúc x86-64 cung cấp bao nhiêu thanh ghi đa năng kích thước 64-bit cho lập trình viên?",
            "options": [
                "8",
                "16",
                "32",
                "64"
            ],
            "answer": 1,
            "explanation": "Kiến trúc x86-64 mở rộng từ IA32 (8 thanh ghi) lên 16 thanh ghi đa năng 64-bit (%rax, %rbx, %rcx, %rdx, %rsi, %rdi, %rsp, %rbp, %r8..%r15)."
        },
        {
            "id": 79,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Tên gọi của phần 32-bit thấp của thanh ghi 64-bit `%rax` là gì?",
            "options": [
                "%eax",
                "%ax",
                "%al",
                "%rax32"
            ],
            "answer": 0,
            "explanation": "%rax (64-bit) chứa %eax (32-bit thấp), %ax (16-bit thấp), và %al (8-bit thấp nhất)."
        },
        {
            "id": 80,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Tên gọi của phần 32-bit thấp của thanh ghi `%r8` trong kiến trúc x86-64 là gì?",
            "options": [
                "%r8l",
                "%r8w",
                "%r8d",
                "%er8"
            ],
            "answer": 2,
            "explanation": "Với các thanh ghi đánh số %r8..%r15: hậu tố 'd' (double word) cho 32-bit (%r8d), 'w' (word) cho 16-bit (%r8w), 'b' (byte) cho 8-bit (%r8b)."
        },
        {
            "id": 81,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Quy tắc đặc biệt nào sau đây xảy ra khi một chỉ thị lệnh ghi dữ liệu vào một thanh ghi 32-bit (ví dụ `movl %edx, %eax`) trên x86-64?",
            "options": [
                "32-bit cao của thanh ghi %rax giữ nguyên giá trị cũ",
                "Toàn bộ 32-bit cao của thanh ghi 64-bit %rax tự động được xóa về 0 (Zero out)",
                "32-bit cao của thanh ghi %rax được sao chép từ bit dấu của %eax",
                "Gây lỗi ngoại lệ bộ xử lý"
            ],
            "answer": 1,
            "explanation": "Quy ước phần cứng x86-64: mọi thao tác ghi vào thanh ghi 32-bit đều tự động xóa toàn bộ 32 bit cao của thanh ghi 64-bit tương ứng về 0."
        },
        {
            "id": 82,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Điều gì xảy ra với các bit còn lại của thanh ghi `%rax` khi ta thực hiện một lệnh ghi 8-bit vào `%al` (ví dụ `movb $0x55, %al`)?",
            "options": [
                "Toàn bộ 56 bit còn lại của %rax bị xóa về 0",
                "Toàn bộ 56 bit còn lại của %rax được giữ nguyên vẹn không đổi",
                "56 bit còn lại được điền toàn bộ bằng bit dấu của %al",
                "Thanh ghi %rax bị khóa chỉ đọc"
            ],
            "answer": 1,
            "explanation": "Chỉ có thao tác ghi 32-bit mới xóa các bit cao. Các thao tác ghi 8-bit (%al) và 16-bit (%ax) giữ nguyên toàn bộ các bit cao còn lại của thanh ghi."
        },
        {
            "id": 83,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong hợp ngữ x86-64, hậu tố nào sau đây chỉ kích thước dữ liệu Quadword (8 byte / 64 bit)?",
            "options": [
                "b",
                "w",
                "l",
                "q"
            ],
            "answer": 3,
            "explanation": "b = byte (1 byte), w = word (2 byte), l = long / double word (4 byte), q = quad word (8 byte)."
        },
        {
            "id": 84,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong các toán hạng sau, toán hạng nào thuộc loại Toán hạng tức thì (Immediate operand)?",
            "options": [
                "%rax",
                "(%rax)",
                "$0x1F",
                "8(%rbp)"
            ],
            "answer": 2,
            "explanation": "Toán hạng tức thì có tiền tố '$' đại diện cho giá trị hằng số cố định."
        },
        {
            "id": 85,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Toán hạng hợp ngữ nào sau đây biểu diễn thao tác truy xuất ô nhớ gián tiếp qua con trỏ lưu trong thanh ghi `%rbx`?",
            "options": [
                "%rbx",
                "$rbx",
                "(%rbx)",
                "[%rbx]"
            ],
            "answer": 2,
            "explanation": "Cặp ngoặc đơn `(%rbx)` tương đương với việc giải tham chiếu con trỏ trong C: `*rbx` (đọc/ghi ô nhớ có địa chỉ lưu trong %rbx)."
        },
        {
            "id": 86,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Công thức tổng quát tính địa chỉ hiệu dụng của toán hạng bộ nhớ `Imm(Rb, Ri, s)` trong x86-64 là gì?",
            "options": [
                "Imm + R[Rb] + R[Ri] * s",
                "Imm * s + R[Rb] + R[Ri]",
                "Imm + (R[Rb] * R[Ri]) / s",
                "R[Rb] + R[Ri] + Imm"
            ],
            "answer": 0,
            "explanation": "Địa chỉ hiệu dụng = Độ lệch Imm + Giá trị thanh ghi cơ sở R[Rb] + (Giá trị thanh ghi chỉ mục R[Ri] * Hệ số tỉ lệ s)."
        },
        {
            "id": 87,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Hệ số tỉ lệ `s` (Scale factor) trong toán hạng bộ nhớ tổng quát `Imm(Rb, Ri, s)` chỉ được phép nhận các giá trị nào sau đây?",
            "options": [
                "Bất kỳ số nguyên dương nào từ 1 đến 16",
                "Chỉ các số: 1, 2, 4, hoặc 8",
                "Chỉ các số: 2, 4, 8, hoặc 16",
                "Chỉ các lũy thừa của 10"
            ],
            "answer": 1,
            "explanation": "Phần cứng x86 chỉ hỗ trợ hệ số tỉ lệ s là 1, 2, 4, hoặc 8 (tương ứng kích thước phần tử kiểu char, short, int/float, long/double/pointer)."
        },
        {
            "id": 88,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Thanh ghi nào sau đây KHÔNG THỂ được sử dụng làm thanh ghi chỉ mục `Ri` (Index register) trong toán hạng bộ nhớ?",
            "options": [
                "%rax",
                "%rcx",
                "%rsp",
                "%rdi"
            ],
            "answer": 2,
            "explanation": "Kiến trúc x86 nghiêm cấm thanh ghi con trỏ đỉnh ngăn xếp %rsp làm thanh ghi chỉ mục Ri."
        },
        {
            "id": 89,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Giả sử thanh ghi `%rdx` chứa địa chỉ `0x1000`, thanh ghi `%rcx` chứa giá trị `0x10`. Địa chỉ ô nhớ được tham chiếu bởi toán hạng `8(%rdx, %rcx, 4)` là bao nhiêu?",
            "options": [
                "0x1048",
                "0x1040",
                "0x1050",
                "0x1018"
            ],
            "answer": 0,
            "explanation": "Địa chỉ = 8 + 0x1000 + 0x10 * 4 = 8 + 0x1000 + 0x40 = 0x1048."
        },
        {
            "id": 90,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Câu lệnh hợp ngữ nào sau đây là KHÔNG HỢP LỆ trong kiến trúc x86-64?",
            "options": [
                "movq $0x10, (%rax)",
                "movq %rax, %rbx",
                "movq (%rax), (%rbx)",
                "movq -8(%rsp), %rax"
            ],
            "answer": 2,
            "explanation": "Quy tắc kiến trúc x86: một lệnh đơn lẻ KHÔNG THỂ có cả hai toán hạng đều là ô nhớ (memory-to-memory transfer là bất hợp lệ)."
        },
        {
            "id": 91,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Để chuyển dữ liệu từ một ô nhớ `(%rax)` sang một ô nhớ khác `(%rbx)`, lập trình viên phải thực hiện như thế nào trong x86-64?",
            "options": [
                "Dùng lệnh memmoveq (%rax), (%rbx)",
                "Dùng một thanh ghi trung gian: `movq (%rax), %rdx` sau đó `movq %rdx, (%rbx)`",
                "Ép kiểu con trỏ trong mã C để dùng 1 lệnh",
                "Dùng lệnh leaq (%rax), (%rbx)"
            ],
            "answer": 1,
            "explanation": "Do vi xử lý không hỗ trợ truyền trực tiếp ô nhớ - ô nhớ, ta bắt buộc phải nạp giá trị từ bộ nhớ vào một thanh ghi tạm thời rồi mới ghi vào ô nhớ đích."
        },
        {
            "id": 92,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `movzbl (%rdi), %eax` thực hiện công việc gì?",
            "options": [
                "Đọc 1 byte từ ô nhớ (%rdi), mở rộng bằng số 0 (Zero-extend) thành 32-bit và lưu vào %eax (đồng thời xóa 32-bit cao của %rax)",
                "Đọc 4 byte từ ô nhớ, cắt bớt thành 1 byte",
                "Sao chép bit dấu của 1 byte vào %eax",
                "Nhân giá trị tại (%rdi) với 0 rồi ghi vào %eax"
            ],
            "answer": 0,
            "explanation": "movzbl: mov zero-extend byte to long. Đọc 1 byte, điền số 0 vào các bit cao để thành 32-bit nạp vào %eax."
        },
        {
            "id": 93,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Tại sao trong bảng lệnh x86-64 không có lệnh `movzlq` (Zero-extend từ 32-bit lên 64-bit)?",
            "options": [
                "Vì x86-64 không hỗ trợ số nguyên 64-bit không dấu",
                "Vì lệnh `movl` thông thường khi ghi vào thanh ghi 32-bit đã tự động xóa 32-bit cao của thanh ghi 64-bit về 0 rồi",
                "Vì người ta dùng lệnh cltq để thay thế",
                "Vì lỗi thiết kế của vi xử lý Intel"
            ],
            "answer": 1,
            "explanation": "Lệnh movl với đích là thanh ghi 32-bit (ví dụ `movl %edx, %eax`) đã mặc định zero-out nửa trên 64-bit, nên movzlq hoàn toàn dư thừa."
        },
        {
            "id": 94,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `movsbl` và `movsbq` thực hiện kiểu mở rộng dữ liệu nào khi chuyển từ 1 byte lên 32-bit hoặc 64-bit?",
            "options": [
                "Zero-extension (điền bit 0)",
                "Sign-extension (sao chép bit dấu MSB của byte nguồn vào các bit cao)",
                "Random-extension",
                "Không mở rộng mà chỉ dịch bit"
            ],
            "answer": 1,
            "explanation": "Tiền tố `movs...` là Move with Sign-extension: giữ nguyên giá trị số có dấu bù 2 bằng cách sao chép bit dấu vào các vị trí trống phía trên."
        },
        {
            "id": 95,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh đặc biệt `cltq` trong x86-64 có chức năng tương đương với câu lệnh nào sau đây?",
            "options": [
                "movl $0, %eax",
                "movslq %eax, %rax",
                "movzbq %al, %rax",
                "xorq %rax, %rax"
            ],
            "answer": 1,
            "explanation": "cltq (Convert Long to Quad): mở rộng dấu (sign-extend) nội dung của thanh ghi 32-bit %eax lên toàn bộ thanh ghi 64-bit %rax (tương đương `movslq %eax, %rax`)."
        },
        {
            "id": 96,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Khác biệt bản chất cốt lõi giữa lệnh `leaq Src, Dest` và lệnh `movq Src, Dest` là gì?",
            "options": [
                "leaq đọc dữ liệu từ bộ nhớ còn movq không đọc",
                "leaq chỉ tính toán địa chỉ hiệu dụng mà HOÀN TOÀN KHÔNG truy xuất bộ nhớ, còn movq truy xuất đọc nội dung ô nhớ",
                "leaq chỉ thực hiện được với thanh ghi %rax",
                "leaq làm thay đổi các cờ điều kiện CF, ZF còn movq thì không"
            ],
            "answer": 1,
            "explanation": "leaq (Load Effective Address) chỉ mượn bộ mạch tính địa chỉ của CPU để tính giá trị biểu thức số học, nó không hề dereference bộ nhớ (không gửi tín hiệu đọc lên bus RAM/cache)."
        },
        {
            "id": 97,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `leaq (%rdi, %rdi, 2), %rax` gán giá trị gì vào thanh ghi `%rax` (theo biến x lưu trong `%rdi`)?",
            "options": [
                "x + 2",
                "2 * x",
                "3 * x",
                "x^2"
            ],
            "answer": 2,
            "explanation": "Địa chỉ tính được là: R[%rdi] + R[%rdi] * 2 = x + 2x = 3x. Giá trị 3x này được nạp vào %rax."
        },
        {
            "id": 98,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `leaq 7(%rdi, %rsi, 4), %rax` tương đương với biểu thức số học nào trong C (với x trong `%rdi`, y trong `%rsi`)?",
            "options": [
                "(x + y * 4) + 7",
                "(x + 7) * (y + 4)",
                "x * 7 + y * 4",
                "x + y + 28"
            ],
            "answer": 0,
            "explanation": "Biểu thức tính địa chỉ: Imm + R[Rb] + R[Ri]*s = 7 + %rdi + %rsi * 4 = x + 4*y + 7."
        },
        {
            "id": 99,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `leaq` có làm thay đổi các cờ trạng thái (Condition codes như ZF, SF, OF, CF) hay không?",
            "options": [
                "Có, luôn cập nhật ZF và SF",
                "Có, nhưng chỉ cập nhật cờ nhớ CF",
                "Hoàn toàn KHÔNG làm thay đổi bất kỳ cờ trạng thái nào",
                "Chỉ thay đổi cờ khi kết quả tính ra bằng 0"
            ],
            "answer": 2,
            "explanation": "Một ưu điểm lớn của leaq là nó tính toán số học nhanh nhưng không làm ảnh hưởng đến các cờ điều kiện."
        },
        {
            "id": 100,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Giả sử thanh ghi `%rax` đang chứa giá trị `0x20` (32) và `%rdx` chứa `0x05` (5). Sau khi thực thi lệnh `subq %rdx, %rax`, giá trị trong `%rax` là bao nhiêu?",
            "options": [
                "0x25 (37)",
                "0x1B (27)",
                "-0x1B",
                "0x05"
            ],
            "answer": 1,
            "explanation": "Trong AT&T, `subq S, D` thực hiện phép tính `D = D - S`. Tức là %rax = %rax - %rdx = 32 - 5 = 27 (0x1B)."
        },
        {
            "id": 101,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Cách nhanh nhất và tối ưu nhất về dung lượng mã máy để gán thanh ghi `%rax` về giá trị 0 là gì?",
            "options": [
                "movq $0, %rax",
                "subq %rax, %rax",
                "xorl %eax, %eax",
                "leaq 0, %rax"
            ],
            "answer": 2,
            "explanation": "`xorl %eax, %eax` chỉ tốn 2 byte mã máy (so với 7 byte của `movq $0, %rax`), và do quy tắc ghi vào 32-bit tự xóa 32-bit cao, nó đặt toàn bộ %rax về 0 cực nhanh và được CPU tối ưu nhận diện."
        },
        {
            "id": 102,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `incq %rax` và `decq %rax` thực hiện thao tác gì?",
            "options": [
                "Tăng %rax lên 8 và giảm %rax đi 8",
                "Tăng %rax lên 1 và giảm %rax đi 1",
                "Nhân %rax với 2 và chia %rax cho 2",
                "Đổi dấu %rax"
            ],
            "answer": 1,
            "explanation": "incq (increment quadword) tăng giá trị lên 1, decq (decrement quadword) giảm giá trị đi 1."
        },
        {
            "id": 103,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `negq %rax` thực hiện thao tác số học nào lên thanh ghi `%rax`?",
            "options": [
                "Đảo tất cả các bit của %rax (~%rax)",
                "Đổi dấu số bù 2 (%rax = -%rax)",
                "Đặt %rax thành số âm ngẫu nhiên",
                "Xóa %rax về 0"
            ],
            "answer": 1,
            "explanation": "negq (negate) thực hiện phép lấy số đối bù 2: Dest = -Dest (tương đương ~Dest + 1)."
        },
        {
            "id": 104,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `notq %rax` khác lệnh `negq %rax` ở điểm nào?",
            "options": [
                "notq chỉ đảo bit (~%rax), trong khi negq vừa đảo bit vừa cộng 1 (-%rax)",
                "notq áp dụng cho số thực, negq áp dụng cho số nguyên",
                "Hai lệnh này giống hệt nhau",
                "notq đặt %rax thành 0 hoặc 1"
            ],
            "answer": 0,
            "explanation": "notq thực hiện phép đảo bit logic (Bitwise NOT: ~Dest), còn negq thực hiện phép đổi dấu số học bù 2 (-Dest = ~Dest + 1)."
        },
        {
            "id": 105,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Sự khác biệt giữa chỉ thị lệnh `sarq` và `shrq` trong x86-64 là gì?",
            "options": [
                "sarq dịch phải số học (chèn bit dấu MSB), còn shrq dịch phải logic (chèn bit 0)",
                "sarq dịch trái, shrq dịch phải",
                "sarq dùng cho thanh ghi 32-bit, shrq dùng cho 64-bit",
                "sarq không làm thay đổi cờ trạng thái"
            ],
            "answer": 0,
            "explanation": "sarq = Shift Arithmetic Right (dịch phải số học cho signed), shrq = Shift Logical Right (dịch phải logic cho unsigned)."
        },
        {
            "id": 106,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong lệnh dịch bit bằng thanh ghi như `sarq %cl, %rax`, tại sao chỉ có thanh ghi `%cl` (hoặc %cx, %ecx) được phép làm toán hạng chỉ định số lượng dịch?",
            "options": [
                "Do phần cứng x86 từ thời 8086 đã chỉ định riêng thanh ghi Count register (%cl) cho bộ chuyển dịch",
                "Do %cl là thanh ghi nhanh nhất của CPU",
                "Do quy ước của trình biên dịch GCC",
                "Có thể dùng bất kỳ thanh ghi nào khác thay thế"
            ],
            "answer": 0,
            "explanation": "Tập lệnh x86 quy định cứng: khi số lượng dịch không phải là hằng số tức thì ($Imm), nó bắt buộc phải nằm trong thanh ghi %cl (byte thấp nhất của %rcx)."
        },
        {
            "id": 107,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `imulq %rsi, %rdi` thực hiện phép toán nào?",
            "options": [
                "%rdi = %rdi * %rsi",
                "%rsi = %rsi * %rdi",
                "%rax = %rsi * %rdi",
                "%rdi = %rsi / %rdi"
            ],
            "answer": 0,
            "explanation": "Trong dạng 2 toán hạng `imulq S, D`, toán hạng đích D được nhân với S và kết quả được lưu trở lại vào D: %rdi = %rdi * %rsi."
        },
        {
            "id": 108,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Đoạn hợp ngữ sau thực hiện chức năng gì?\n`movq %rdi, %rax`\n`addq %rsi, %rax`\n`addq %rdx, %rax`",
            "options": [
                "Tính tổng 3 tham số đầu tiên của hàm và đặt kết quả vào thanh ghi trả về %rax",
                "Đổi chỗ giá trị giữa %rdi, %rsi và %rdx",
                "Cấp phát 24 byte trên ngăn xếp",
                "Nhân 3 tham số với nhau"
            ],
            "answer": 0,
            "explanation": "%rdi, %rsi, %rdx là 3 tham số đầu tiên theo System V ABI. Đoạn mã cộng dồn cả 3 vào %rax (thanh ghi lưu giá trị trả về của hàm)."
        },
        {
            "id": 109,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Cho đoạn mã hợp ngữ:\n`leaq (%rdi, %rdi, 8), %rax`\n`leaq (%rsi, %rax, 2), %rax`\nNếu %rdi = x và %rsi = y, giá trị trả về trong %rax là:",
            "options": [
                "18 * x + y",
                "9 * x + 2 * y",
                "8 * x + 2 * y",
                "16 * x + y"
            ],
            "answer": 0,
            "explanation": "Lệnh 1: %rax = x + 8*x = 9*x. Lệnh 2: %rax = y + 2 * (9*x) = 18*x + y."
        },
        {
            "id": 110,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Trong hợp ngữ x86-64, thanh ghi `%rsp` có vai trò quan trọng gì?",
            "options": [
                "Lưu giá trị trả về của hàm",
                "Lưu con trỏ trỏ tới đỉnh hiện tại của ngăn xếp (Stack Pointer)",
                "Lưu mã trạng thái lỗi của hệ điều hành",
                "Chỉ dùng cho các phép nhân số thực"
            ],
            "answer": 1,
            "explanation": "%rsp (Stack Pointer Register) luôn luôn trỏ tới byte thấp nhất đang chứa dữ liệu của đỉnh ngăn xếp (Top of Stack)."
        },
        {
            "id": 111,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Cho biết kiểu dữ liệu nào trong ngôn ngữ C (trên hệ Linux 64-bit) có kích thước tương ứng với Quadword (`q`) trong x86-64?",
            "options": [
                "int",
                "short",
                "long và con trỏ (pointer)",
                "float"
            ],
            "answer": 2,
            "explanation": "Trên Linux x86-64 (mô hình LP64), kiểu long và tất cả các loại con trỏ (pointer) đều có kích thước 8 byte (64-bit = quadword)."
        },
        {
            "id": 112,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Giả sử `%rax = 0x100`, bộ nhớ tại địa chỉ `0x100` chứa giá trị `0xAB`. Sau lệnh `movq $0xCD, (%rax)`, nội dung ô nhớ tại `0x100` sẽ là gì?",
            "options": [
                "0xAB",
                "0xCD",
                "0x100",
                "0x00"
            ],
            "answer": 1,
            "explanation": "Lệnh ghi giá trị tức thì $0xCD vào ô nhớ có địa chỉ lưu trong %rax (địa chỉ 0x100). Do đó ô nhớ tại 0x100 mang giá trị 0xCD."
        },
        {
            "id": 113,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Câu lệnh nào sau đây biên dịch từ phép gán C `*dest = val;` (với dest lưu trong `%rax`, val lưu trong `%rcx`)?",
            "options": [
                "movq %rax, (%rcx)",
                "movq %rcx, (%rax)",
                "leaq (%rcx), %rax",
                "movq (%rcx), %rax"
            ],
            "answer": 1,
            "explanation": "Ghi giá trị val (trong %rcx) vào ô nhớ được trỏ bởi dest (trong %rax) là: `movq %rcx, (%rax)`."
        },
        {
            "id": 114,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Câu lệnh nào sau đây biên dịch từ biểu thức C `val = *src;` (với src lưu trong `%rax`, val lưu trong `%rcx`)?",
            "options": [
                "movq (%rax), %rcx",
                "movq %rax, (%rcx)",
                "leaq (%rax), %rcx",
                "movq %rax, %rcx"
            ],
            "answer": 0,
            "explanation": "Đọc dữ liệu từ ô nhớ có địa chỉ trong %rax nạp vào thanh ghi %rcx là: `movq (%rax), %rcx`."
        },
        {
            "id": 115,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Toán hạng bộ nhớ nào sau đây tương ứng với biểu thức truy xuất mảng `a[i]` (với mảng số nguyên 4-byte `int a[]` có địa chỉ cơ sở trong `%rdi`, chỉ số `i` trong `%rsi`)?",
            "options": [
                "(%rdi, %rsi)",
                "(%rdi, %rsi, 4)",
                "4(%rdi, %rsi)",
                "(%rdi, %rsi, 8)"
            ],
            "answer": 1,
            "explanation": "Địa chỉ phần tử mảng int (4 byte) tại vị trí i là: base + i * 4. Hợp ngữ tương ứng là: `(%rdi, %rsi, 4)`."
        },
        {
            "id": 116,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Biểu thức C `p + 2` (với p là con trỏ kiểu `long*` chứa trong thanh ghi `%rdi`) khi biên dịch ra địa chỉ hợp ngữ sẽ tương đương với toán hạng nào?",
            "options": [
                "2(%rdi)",
                "8(%rdi)",
                "16(%rdi)",
                "(%rdi, 2)"
            ],
            "answer": 2,
            "explanation": "Toán tử con trỏ trong C nhân với sizeof(*p). Kiểu long có kích thước 8 byte, do đó p + 2 nhảy 2 * 8 = 16 byte, tức là `16(%rdi)`."
        },
        {
            "id": 117,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `salq $3, %rax` có tác dụng toán học tương đương với thao tác nào?",
            "options": [
                "Chia %rax cho 8",
                "Nhân %rax với 8",
                "Cộng 3 vào %rax",
                "Lấy căn bậc 3 của %rax"
            ],
            "answer": 1,
            "explanation": "salq (Shift Arithmetic Left) dịch trái 3 bit tương đương với phép nhân 2^3 = 8."
        },
        {
            "id": 118,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh `andq $~0xF, %rax` có tác dụng gì lên thanh ghi `%rax`?",
            "options": [
                "Xóa 4 bit thấp nhất của %rax về 0, giữ nguyên các bit còn lại",
                "Bật 4 bit thấp nhất của %rax lên 1",
                "Đảo 4 bit thấp nhất của %rax",
                "Đặt %rax thành số âm"
            ],
            "answer": 0,
            "explanation": "~0xF là mặt nạ có 4 bit thấp bằng 0 và tất cả các bit cao bằng 1. Phép AND với mặt nạ này sẽ xóa 4 bit thấp (làm tròn xuống bội số của 16)."
        },
        {
            "id": 119,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Khi thực thi lệnh `xorq %rax, %rax`, cờ trạng thái Zero Flag (ZF) sẽ nhận giá trị gì?",
            "options": [
                "ZF = 0",
                "ZF = 1 (vì kết quả của phép XOR một thanh ghi với chính nó luôn bằng 0)",
                "ZF không bị ảnh hưởng",
                "ZF không xác định"
            ],
            "answer": 1,
            "explanation": "Kết quả %rax ^ %rax = 0, do đó cờ ZF (Zero Flag) luôn luôn được đặt lên 1."
        },
        {
            "id": 120,
            "chapter": 3,
            "chapterName": "Machine Basics & Registers",
            "question": "Lệnh nào sau đây sao chép giá trị 2 byte từ thanh ghi `%dx` sang `%ax`?",
            "options": [
                "movb %dl, %al",
                "movw %dx, %ax",
                "movl %edx, %eax",
                "movq %rdx, %rax"
            ],
            "answer": 1,
            "explanation": "Thanh ghi 16-bit dùng hậu tố 'w' (word): `movw %dx, %ax`."
        }
    ]
