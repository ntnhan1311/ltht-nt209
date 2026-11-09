# gen_mcq_ch5.py - 40 câu trắc nghiệm Chương 5: Thủ Tục & Lệnh Gọi Hàm x86-64 (IDs 161-200)
def get_mcq_ch5():
    return [
        {
            "id": 161,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Trong kiến trúc vi xử lý x86-64, vùng nhớ Ngăn xếp (Stack) phát triển theo chiều hướng nào?",
            "options": [
                "Từ địa chỉ thấp lên địa chỉ cao (tăng dần)",
                "Từ địa chỉ cao xuống địa chỉ thấp (giảm dần)",
                "Phát triển sang hai bên đối xứng",
                "Cố định một vùng nhớ không thay đổi kích thước"
            ],
            "answer": 1,
            "explanation": "Ngăn xếp trong x86-64 phát triển về phía địa chỉ bộ nhớ THẤP. Đỉnh ngăn xếp (Top of stack) luôn là ô nhớ có địa chỉ số học nhỏ nhất."
        },
        {
            "id": 162,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Thanh ghi nào trong x86-64 luôn luôn trỏ tới phần tử nằm trên đỉnh hiện tại của ngăn xếp?",
            "options": [
                "%rbp",
                "%rsp",
                "%rax",
                "%rip"
            ],
            "answer": 1,
            "explanation": "%rsp (Stack Pointer Register) luôn lưu giữ địa chỉ của byte thấp nhất đang chứa dữ liệu hợp lệ trên đỉnh ngăn xếp."
        },
        {
            "id": 163,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh `pushq %rax` thực hiện chuỗi hai thao tác nào bên dưới phần cứng?",
            "options": [
                "1. `*(%rsp) = %rax`, 2. `%rsp = %rsp + 8`",
                "1. `%rsp = %rsp - 8`, 2. `*(%rsp) = %rax`",
                "1. `%rsp = %rsp + 8`, 2. `*(%rsp) = %rax`",
                "1. `*(%rsp) = %rax`, 2. `%rsp = %rsp - 8`"
            ],
            "answer": 1,
            "explanation": "Vì stack phát triển xuống địa chỉ thấp: lệnh pushq đầu tiên phải giảm con trỏ %rsp đi 8 byte (%rsp = %rsp - 8), sau đó mới ghi giá trị của %rax vào ô nhớ mà %rsp đang trỏ tới."
        },
        {
            "id": 164,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh `popq %rax` thực hiện chuỗi hai thao tác nào bên dưới phần cứng?",
            "options": [
                "1. `%rax = *(%rsp)`, 2. `%rsp = %rsp + 8`",
                "1. `%rsp = %rsp - 8`, 2. `%rax = *(%rsp)`",
                "1. `%rsp = %rsp + 8`, 2. `%rax = *(%rsp)`",
                "1. `*(%rsp) = 0`, 2. `%rsp = %rsp + 8`"
            ],
            "answer": 0,
            "explanation": "Lệnh popq đọc giá trị từ đỉnh ngăn xếp *(%rsp) vào thanh ghi đích (%rax), sau đó tăng con trỏ %rsp lên 8 byte (%rsp = %rsp + 8) để giải phóng phần tử đó khỏi stack."
        },
        {
            "id": 165,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh `call func` thực hiện bước lưu trữ quan trọng nào trước khi nhảy tới nhãn `func`?",
            "options": [
                "Lưu toàn bộ 16 thanh ghi vào bộ nhớ RAM",
                "Đẩy địa chỉ của lệnh kế tiếp ngay sau lệnh call (Return Address) vào đỉnh ngăn xếp",
                "Xóa thanh ghi %rax về 0",
                "Lưu giá trị con trỏ khung %rbp vào đĩa cứng"
            ],
            "answer": 1,
            "explanation": "call đẩy địa chỉ trả về (Return Address - địa chỉ chỉ thị lệnh nằm ngay sau nó) lên stack (tương đương `pushq %rip_next`), sau đó gán địa chỉ của hàm đích vào %rip để chuyển luồng thực thi."
        },
        {
            "id": 166,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh `ret` ở cuối hàm thực hiện thao tác gì để quay trở về hàm gọi?",
            "options": [
                "Nhảy về địa chỉ cố định 0x400000",
                "Lấy địa chỉ trả về từ đỉnh ngăn xếp (tương đương `popq %rip`) và chuyển quyền thực thi về địa chỉ đó",
                "Xóa toàn bộ bộ nhớ stack của tiến trình",
                "Khôi phục lại giá trị của các thanh ghi tham số"
            ],
            "answer": 1,
            "explanation": "ret lấy địa chỉ trả về nằm ở đỉnh ngăn xếp (nơi %rsp đang trỏ tới) nạp vào Program Counter (%rip) và tăng %rsp lên 8 byte, tiếp tục thực thi mã lệnh sau lệnh call."
        },
        {
            "id": 167,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Theo chuẩn System V AMD64 ABI (dùng trên Linux 64-bit), 6 tham số nguyên/con trỏ đầu tiên được truyền qua các thanh ghi theo đúng thứ tự nào?",
            "options": [
                "%rax, %rbx, %rcx, %rdx, %rsi, %rdi",
                "%rdi, %rsi, %rdx, %rcx, %r8, %r9",
                "%r8, %r9, %r10, %r11, %r12, %r13",
                "%rsi, %rdi, %rax, %rbx, %rcx, %rdx"
            ],
            "answer": 1,
            "explanation": "Quy ước chuẩn x86-64: Tham số 1: %rdi, Tham số 2: %rsi, Tham số 3: %rdx, Tham số 4: %rcx, Tham số 5: %r8, Tham số 6: %r9."
        },
        {
            "id": 168,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Nếu một hàm có 8 tham số nguyên, hai tham số thứ 7 và thứ 8 sẽ được truyền cho hàm bằng cách nào?",
            "options": [
                "Truyền qua thanh ghi %r10 và %r11",
                "Được đẩy lên ngăn xếp (Stack) bởi hàm gọi trước khi thực thi lệnh call",
                "Lưu trong vùng nhớ toàn cục .data",
                "Bị trình biên dịch từ chối vì hàm chỉ được có tối đa 6 tham số"
            ],
            "answer": 1,
            "explanation": "Khi vượt quá 6 tham số, các tham số từ thứ 7 trở đi bắt buộc phải được truyền thông qua ngăn xếp (Stack)."
        },
        {
            "id": 169,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Thanh ghi nào trong x86-64 được quy ước dùng để chứa giá trị trả về (Return Value) của một hàm?",
            "options": [
                "%rdi",
                "%rsp",
                "%rax",
                "%rbp"
            ],
            "answer": 2,
            "explanation": "Giá trị trả về của hàm (kích thước tối đa 64-bit) luôn được đặt trong thanh ghi %rax (%eax cho 32-bit, %al cho 8-bit). Nếu trả về 128-bit, dùng thêm %rdx."
        },
        {
            "id": 170,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Nhóm thanh ghi nào sau đây thuộc loại Callee-Saved Registers (Thanh ghi do hàm được gọi bảo tồn)?",
            "options": [
                "%rax, %rdi, %rsi, %rdx",
                "%rbx, %rbp, %r12, %r13, %r14, %r15 (và %rsp)",
                "%r8, %r9, %r10, %r11",
                "Chỉ có thanh ghi %rip"
            ],
            "answer": 1,
            "explanation": "Callee-saved gồm: %rbx, %rbp, %r12..%r15, và %rsp. Hàm được gọi phải đảm bảo giá trị của các thanh ghi này không bị thay đổi khi hàm kết thúc."
        },
        {
            "id": 171,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Quy ước đối với thanh ghi Caller-Saved Registers (như `%rax`, `%rdi`, `%rsi`, `%rdx`, `%rcx`, `%r8..%r11`) là gì?",
            "options": [
                "Hàm được gọi (Callee) phải push vào stack trước khi dùng",
                "Hàm gọi (Caller) phải tự cất nếu muốn giữ lại giá trị trước khi gọi hàm khác; hàm Callee có quyền tùy ý ghi đè mà không cần phục hồi",
                "Không bao giờ được phép sửa đổi giá trị các thanh ghi này",
                "Chỉ dùng cho hệ điều hành"
            ],
            "answer": 1,
            "explanation": "Caller-saved (thanh ghi tạm thời): Callee có thể tùy ý sửa đổi; nếu Caller cần dùng lại sau lệnh call, Caller phải tự lưu vào stack frame của mình trước khi gọi hàm."
        },
        {
            "id": 172,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Nếu một hàm muốn sử dụng thanh ghi Callee-saved `%rbx` để tính toán nội bộ, hàm đó bắt buộc phải làm gì ở phần mở đầu (Prologue) và kết thúc (Epilogue)?",
            "options": [
                "Không cần làm gì cả",
                "Phải `pushq %rbx` ở đầu hàm và `popq %rbx` trước lệnh `ret` để khôi phục lại giá trị ban đầu cho hàm gọi",
                "Phải gán %rbx = 0",
                "Phải gọi lệnh ngắt hệ thống sys_save"
            ],
            "answer": 1,
            "explanation": "Quy ước Callee-saved: Nếu hàm sửa đổi thanh ghi callee-saved, nó phải cất giữ giá trị cũ (push) và phục hồi lại nguyên vẹn (pop) trước khi trả về."
        },
        {
            "id": 173,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Khái niệm 'Khung ngăn xếp' (Stack Frame) của một hàm là gì?",
            "options": [
                "Một vi mạch phần cứng độc lập trong CPU",
                "Phân vùng bộ nhớ riêng biệt trên stack được cấp phát cho một lần gọi hàm cụ thể, chứa các biến cục bộ, trạng thái lưu trữ và địa chỉ trả về",
                "Bảng phân vùng ổ đĩa",
                "Toàn bộ bộ nhớ RAM của máy tính"
            ],
            "answer": 1,
            "explanation": "Stack Frame là vùng không gian trên ngăn xếp dành riêng cho một lần thực thi hàm để lưu trữ các thông tin cục bộ và ngữ cảnh thực thi."
        },
        {
            "id": 174,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh nào sau đây dùng để cấp phát không gian 32 byte cho các biến cục bộ trên khung ngăn xếp của hàm?",
            "options": [
                "addq $32, %rsp",
                "subq $32, %rsp",
                "movq $32, %rsp",
                "pushq $32"
            ],
            "answer": 1,
            "explanation": "Vì stack phát triển về địa chỉ thấp, để mở rộng thêm không gian 32 byte, ta phải TRỪ con trỏ đỉnh ngăn xếp: `subq $32, %rsp`."
        },
        {
            "id": 175,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh nào sau đây dùng để giải phóng (thu hồi) không gian 32 byte biến cục bộ đã cấp phát trên ngăn xếp trước khi hàm trả về?",
            "options": [
                "subq $32, %rsp",
                "addq $32, %rsp",
                "movq $0, %rsp",
                "popq $32"
            ],
            "answer": 1,
            "explanation": "Thu hồi bộ nhớ stack thực hiện bằng cách CỘNG trả lại con trỏ đỉnh ngăn xếp: `addq $32, %rsp`."
        },
        {
            "id": 176,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Trường hợp nào sau đây BẮT BUỘC một biến cục bộ phải được cấp phát vị trí trên Stack Frame thay vì lưu trong thanh ghi CPU?",
            "options": [
                "Khi biến đó có kiểu dữ liệu là int",
                "Khi trong mã nguồn C có sử dụng toán tử lấy địa chỉ `&` lên biến đó (ví dụ `scanf(\"%d\", &x);`)",
                "Khi biến đó được dùng trong vòng lặp for",
                "Khi biến đó có giá trị khởi tạo bằng 0"
            ],
            "answer": 1,
            "explanation": "Các thanh ghi CPU không có địa chỉ bộ nhớ (không thể lấy con trỏ trỏ tới thanh ghi). Do đó khi dùng toán tử `&x`, biến x bắt buộc phải nằm trong ô nhớ của stack frame."
        },
        {
            "id": 177,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Khái niệm 'Vùng đỏ' (Red Zone) 128 byte trong chuẩn System V AMD64 ABI là gì?",
            "options": [
                "Vùng nhớ bị cấm truy xuất, nếu chạm vào sẽ crash ngay lập tức",
                "Vùng nhớ 128 byte nằm ngay dưới %rsp mà các hàm lá (leaf function) có thể tự do dùng làm biến tạm mà không cần tốn lệnh điều chỉnh %rsp",
                "Vùng nhớ lưu trữ mật khẩu root của hệ thống",
                "Vùng đệm của card màn hình"
            ],
            "answer": 1,
            "explanation": "Red Zone là 128 byte dưới %rsp được ABI đảm bảo an toàn (không bị signal handler hay interrupt ghi đè trong không gian người dùng), giúp các hàm lá tiết kiệm thao tác sub/add %rsp."
        },
        {
            "id": 178,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Một 'Hàm lá' (Leaf Function) trong lập trình hệ thống được định nghĩa là gì?",
            "options": [
                "Hàm không bao giờ trả về giá trị",
                "Hàm không gọi bất kỳ một hàm nào khác trong suốt quá trình thực thi của nó",
                "Hàm có ít hơn 10 dòng lệnh",
                "Hàm chỉ thao tác trên cây nhị phân"
            ],
            "answer": 1,
            "explanation": "Leaf function là hàm nằm ở 'lá' của cây gọi hàm (call graph) - nó không thực hiện bất kỳ lệnh `call` nào tới hàm khác."
        },
        {
            "id": 179,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Tại sao các hàm đệ quy (Recursive functions) có thể hoạt động hoàn toàn chính xác trong kiến trúc x86-64 mà không làm lẫn lộn dữ liệu giữa các lần gọi?",
            "options": [
                "Vì CPU tạo ra một nhân xử lý mới cho mỗi lần gọi đệ quy",
                "Vì mỗi lần gọi hàm (invocation) đều được cấp phát một Stack Frame hoàn toàn độc lập với các biến và địa chỉ trả về riêng của lần gọi đó",
                "Vì trình biên dịch luôn biến đệ quy thành mảng toàn cục",
                "Nhờ cơ chế bộ nhớ ảo phân trang"
            ],
            "answer": 1,
            "explanation": "Cấu trúc ngăn xếp LIFO cấp phát một frame riêng cho mỗi lần gọi đệ quy, lưu ngữ cảnh riêng và thu hồi tuần tự theo chiều ngược lại khi đệ quy chạm điều kiện dừng."
        },
        {
            "id": 180,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Hàm nhập chuẩn nào trong thư viện C (stdio.h) được xem là cực kỳ nguy hiểm và đã bị loại bỏ hoàn toàn khỏi chuẩn C11 do không thể chống lỗi Buffer Overflow?",
            "options": [
                "fgets()",
                "gets()",
                "getchar()",
                "scanf_s()"
            ],
            "answer": 1,
            "explanation": "gets() chỉ nhận con trỏ đệm mà không có tham số giới hạn số ký tự tối đa được đọc, khiến nó không thể ngăn chặn việc người dùng nhập tràn bộ đệm."
        },
        {
            "id": 181,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Khi một mảng cục bộ trên Stack bị ghi tràn (Buffer Overflow), mục tiêu quan trọng nhất mà kẻ tấn công muốn ghi đè để chiếm quyền điều khiển là gì?",
            "options": [
                "Giá trị của biến đếm vòng lặp",
                "Địa chỉ trả về (Return Address) nằm trong stack frame",
                "Toán tử nhân imul",
                "Bảng mã màu ASCII"
            ],
            "answer": 1,
            "explanation": "Bằng cách ghi đè Return Address thành địa chỉ mã độc, khi hàm thực thi lệnh `ret`, CPU sẽ nhảy thẳng vào thực thi mã của kẻ tấn công."
        },
        {
            "id": 182,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Cơ chế bảo vệ 'Stack Canary' (Stack Protector) hoạt động như thế nào?",
            "options": [
                "Mã hóa toàn bộ bộ nhớ RAM bằng thuật toán AES",
                "Chèn một giá trị bí mật (canary) ngẫu nhiên giữa mảng cục bộ và Return Address, và kiểm tra lại giá trị này ngay trước khi lệnh `ret` được gọi",
                "Chặn người dùng không cho nhập bàn phím quá nhanh",
                "Tự động chuyển đổi mảng tĩnh thành mảng động trên heap"
            ],
            "answer": 1,
            "explanation": "Nếu xảy ra buffer overflow từ mảng tràn xuống Return Address, giá trị Canary chắc chắn sẽ bị ghi đè làm thay đổi. Chương trình phát hiện sự thay đổi này sẽ lập tức báo lỗi và dừng chạy."
        },
        {
            "id": 183,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Trong hợp ngữ x86-64 do GCC sinh ra với cơ chế bảo vệ Stack Canary, đoạn mã nào sau đây thực hiện việc kiểm tra Canary trước khi `ret`?",
            "options": [
                "cmpq $0, %rax",
                "xorq %fs:40, %rax; jne __stack_chk_fail",
                "testq %rsp, %rsp",
                "call exit"
            ],
            "answer": 1,
            "explanation": "Canary được lưu tại phân đoạn an toàn `%fs:40`. Lệnh `xorq %fs:40, %rax` kiểm tra nếu hai giá trị bằng nhau thì kết quả bằng 0 (ZF=1); nếu khác nhau (đã bị ghi đè) thì `jne` sẽ nhảy tới hàm báo động `__stack_chk_fail`."
        },
        {
            "id": 184,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Cờ nào của trình biên dịch GCC dùng để BẬT cơ chế bảo vệ Stack Canary?",
            "options": [
                "-fno-stack-protector",
                "-fstack-protector (hoặc -fstack-protector-all)",
                "-O0",
                "-static"
            ],
            "answer": 1,
            "explanation": "`-fstack-protector` bật tính năng chèn Canary để bảo vệ stack khỏi các lỗi tràn bộ đệm."
        },
        {
            "id": 185,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Cơ chế ASLR (Address Space Layout Randomization) của Hệ điều hành nhằm mục đích gì?",
            "options": [
                "Tăng tốc độ truy xuất cache của CPU",
                "Ngẫu nhiên hóa vị trí các vùng nhớ (Stack, Heap, Thư viện chia sẻ libc) mỗi lần chạy chương trình, khiến kẻ tấn công không thể dự đoán địa chỉ mã độc",
                "Giải nén tập tin nhị phân khi nạp vào RAM",
                "Tự động sắp xếp lại các phần tử mảng"
            ],
            "answer": 1,
            "explanation": "ASLR xáo trộn ngẫu nhiên không gian địa chỉ, làm vô hiệu hóa các cuộc tấn công dựa vào địa chỉ cố định (hardcoded addresses) như Ret-to-libc."
        },
        {
            "id": 186,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Cơ chế Non-Executable Stack (NX bit / W^X: Write XOR Execute) ngăn chặn kiểu tấn công nào?",
            "options": [
                "Ngăn chặn kẻ tấn công thực thi trực tiếp mã độc (Shellcode) được chèn vào bên trong vùng nhớ Stack",
                "Ngăn chặn việc đọc dữ liệu từ bàn phím",
                "Ngăn chặn việc tạo quá nhiều tiến trình con",
                "Ngăn chặn tràn số nguyên"
            ],
            "answer": 0,
            "explanation": "NX bit đánh dấu vùng nhớ Stack là không có quyền thực thi (No-Execute). Do đó nếu CPU bị chuyển hướng nhảy vào vùng stack chứa shellcode, phần cứng sẽ kích hoạt lỗi cấm truy xuất (fault)."
        },
        {
            "id": 187,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Kỹ thuật tấn công ROP (Return-Oriented Programming) ra đời để vượt qua cơ chế phòng vệ nào sau đây?",
            "options": [
                "Cơ chế kiểm tra kiểu dữ liệu của C",
                "Cơ chế ngăn cấm thực thi mã trên Stack (Non-Executable Stack / NX bit)",
                "Cơ chế ngắt đồng hồ phần cứng",
                "Bộ nhớ đệm L1 Cache"
            ],
            "answer": 1,
            "explanation": "Vì NX bit cấm chạy mã trên stack, kỹ thuật ROP không tiêm mã mới mà tận dụng các đoạn mã lệnh có sẵn trong thư viện kết thúc bằng lệnh `ret` (gọi là các gadget) xâu chuỗi lại với nhau."
        },
        {
            "id": 188,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Trước khi thực thi một lệnh `call` trong x86-64 System V ABI, địa chỉ của con trỏ ngăn xếp `%rsp` bắt buộc phải thỏa mãn điều kiện căn chỉnh (Alignment) nào?",
            "options": [
                "Phải là bội số của 4 byte",
                "Phải là bội số của 8 byte",
                "Phải được căn chỉnh theo ranh giới 16 byte (16-byte aligned)",
                "Không cần bất kỳ căn chỉnh nào"
            ],
            "answer": 2,
            "explanation": "ABI quy định trước khi thực hiện lệnh call, (%rsp + 8) phải là bội số của 16 (tức sau khi lệnh call đẩy 8 byte địa chỉ trả về, %rsp tại đầu hàm callee là bội số của 16), phục vụ cho các lệnh SIMD/SSE."
        },
        {
            "id": 189,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Lệnh hợp ngữ `leave` thường xuất hiện ở cuối các hàm trong IA32 / x86-64 thực hiện công việc tương đương với cặp lệnh nào?",
            "options": [
                "`movq %rbp, %rsp` theo sau bởi `popq %rbp`",
                "`pushq %rbp` theo sau bởi `movq %rsp, %rbp`",
                "`subq $8, %rsp` theo sau bởi `ret`",
                "`xorq %rax, %rax` theo sau bởi `ret`"
            ],
            "answer": 0,
            "explanation": "Lệnh `leave` phục hồi lại khung stack ban đầu: gán lại con trỏ đỉnh ngăn xếp %rsp = %rbp, sau đó pop giá trị %rbp cũ của hàm gọi từ stack ra."
        },
        {
            "id": 190,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Trong x86-64, thanh ghi `%rbp` thường được gọi là gì?",
            "options": [
                "Stack Pointer (Con trỏ đỉnh ngăn xếp)",
                "Base Pointer / Frame Pointer (Con trỏ đáy khung ngăn xếp)",
                "Instruction Pointer (Con trỏ lệnh)",
                "Status Register (Thanh ghi trạng thái)"
            ],
            "answer": 1,
            "explanation": "%rbp là Base Pointer / Frame Pointer, đóng vai trò là mốc chuẩn cố định của khung ngăn xếp trong suốt quá trình hàm thực thi."
        },
        {
            "id": 191,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Giả sử thanh ghi `%rsp = 0x7fffffffe000`. Sau khi thực hiện lệnh `pushq %rax`, giá trị mới của `%rsp` sẽ là:",
            "options": [
                "0x7fffffffe008",
                "0x7fffffffdff8",
                "0x7fffffffe000",
                "0x7fffffffdff0"
            ],
            "answer": 1,
            "explanation": "pushq giảm %rsp đi 8 byte: 0x...e000 - 8 = 0x...dff8."
        },
        {
            "id": 192,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Giả sử thanh ghi `%rsp = 0x7fffffffdff8`. Sau khi thực hiện lệnh `popq %rbx`, giá trị mới của `%rsp` sẽ là:",
            "options": [
                "0x7fffffffdff0",
                "0x7fffffffe000",
                "0x7fffffffe008",
                "0x7fffffffdff8"
            ],
            "answer": 1,
            "explanation": "popq tăng %rsp lên 8 byte: 0x...dff8 + 8 = 0x...e000."
        },
        {
            "id": 193,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Cho đoạn mã hợp ngữ:\n`subq $24, %rsp`\n`movl $10, 8(%rsp)`\n`movl $20, 12(%rsp)`\nĐoạn mã này đang làm gì?",
            "options": [
                "Cấp phát 24 byte trên stack frame và khởi tạo hai biến cục bộ 32-bit kiểu int với giá trị 10 và 20",
                "Gọi một hàm có 2 tham số",
                "Lưu trữ hai con trỏ 64-bit",
                "Giải phóng 24 byte bộ nhớ"
            ],
            "answer": 0,
            "explanation": "subq $24, %rsp cấp phát không gian stack frame, sau đó movl (ghi 4 byte) lưu giá trị 10 và 20 vào các vị trí biến cục bộ bên trong stack frame."
        },
        {
            "id": 194,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Trong trường hợp nào hàm gọi (Caller) KHÔNG CẦN phải lưu trữ thanh ghi Caller-saved `%rdx` trước khi gọi một hàm con?",
            "options": [
                "Khi hàm con có nhiều hơn 2 tham số",
                "Khi Caller không còn cần sử dụng lại giá trị đang có trong %rdx sau khi hàm con trả về",
                "Khi Caller là hàm main",
                "Khi hàm con là hàm thư viện"
            ],
            "answer": 1,
            "explanation": "Quy tắc Caller-saved: Caller chỉ cần lưu nếu nó còn muốn sử dụng lại giá trị đó sau lời gọi hàm; nếu không cần nữa thì để mặc cho hàm con ghi đè."
        },
        {
            "id": 195,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Thanh ghi `%r10` và `%r11` thuộc loại thanh ghi nào trong quy ước gọi hàm x86-64?",
            "options": [
                "Callee-saved registers",
                "Caller-saved temporary registers",
                "Thanh ghi truyền tham số thứ 7 và thứ 8",
                "Thanh ghi lưu giá trị số thực float"
            ],
            "answer": 1,
            "explanation": "%r10 và %r11 là các thanh ghi tạm thời thuộc nhóm Caller-saved, hàm con có thể tùy ý sử dụng mà không cần khôi phục."
        },
        {
            "id": 196,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Điều gì sẽ xảy ra nếu một hàm vô tình làm thay đổi giá trị của thanh ghi `%rsp` mà không phục hồi lại trước khi gọi lệnh `ret`?",
            "options": [
                "Lệnh ret vẫn tự động tìm thấy đúng địa chỉ trả về",
                "Lệnh ret sẽ lấy sai dữ liệu từ đỉnh stack mới làm địa chỉ quay về, dẫn đến crash chương trình (Segfault) hoặc thực thi mã sai",
                "Hệ điều hành sẽ tự động sửa lỗi cho chương trình",
                "Chương trình sẽ tự động lặp lại hàm từ đầu"
            ],
            "answer": 1,
            "explanation": "Lệnh ret phụ thuộc tuyệt đối vào %rsp để lấy Return Address. Nếu %rsp bị lệch, ret sẽ pop một giá trị rác làm con trỏ lệnh, gây lỗi nghiêm trọng."
        },
        {
            "id": 197,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Hàm an toàn nào sau đây nên được dùng để thay thế cho hàm không an toàn `strcpy(dest, src)` nhằm tránh lỗi tràn bộ đệm?",
            "options": [
                "strncpy(dest, src, n)",
                "gets(dest)",
                "strcat(dest, src)",
                "sprintf(dest, \"%s\", src)"
            ],
            "answer": 0,
            "explanation": "strncpy nhận thêm tham số n giới hạn số ký tự tối đa được sao chép vào bộ đệm đích, ngăn ngừa tình trạng ghi vượt quá dung lượng mảng."
        },
        {
            "id": 198,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Khái niệm 'Stack Smashing' là thuật ngữ chỉ điều gì trong an toàn hệ thống?",
            "options": [
                "Kỹ thuật tối ưu hóa ngăn xếp của trình biên dịch",
                "Hành vi cố ý làm tràn bộ đệm trên ngăn xếp để phá hủy hoặc ghi đè cấu trúc khung ngăn xếp và địa chỉ trả về",
                "Giải phóng bộ nhớ stack khi tắt máy",
                "Cơ chế nén dữ liệu trong cache"
            ],
            "answer": 1,
            "explanation": "Stack Smashing là hành động làm tràn bộ đệm ngăn xếp để ghi đè dữ liệu kiểm soát luồng thực thi (chẳng hạn như Return Address)."
        },
        {
            "id": 199,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Tại sao con trỏ `%rsp` trong x86-64 luôn được điều chỉnh theo các khối là bội số của 8 byte trong các lệnh `pushq` và `popq`?",
            "options": [
                "Vì x86-64 là kiến trúc 64-bit (8 bytes per quadword), mỗi ô nhớ từ nhớ chuẩn trên stack có kích thước 8 byte",
                "Vì CPU chỉ có 8 thanh ghi",
                "Vì bộ nhớ RAM chỉ đọc được từ địa chỉ chia hết cho 8",
                "Do quy định của hệ điều hành Windows"
            ],
            "answer": 0,
            "explanation": "Trong kiến trúc 64-bit, kích thước từ nhớ chuẩn của các thanh ghi đa năng và con trỏ địa chỉ là 8 byte (64 bit), do đó mỗi slot trên stack chuẩn là 8 byte."
        },
        {
            "id": 200,
            "chapter": 5,
            "chapterName": "Procedures, Stack & Security",
            "question": "Cho đoạn mã hợp ngữ:\n`pushq %rbp`\n`movq %rsp, %rbp`\n`subq $16, %rsp`\n`...`\n`leave`\n`ret`\nĐây là cấu trúc kinh điển của thành phần nào trong một chương trình x86-64?",
            "options": [
                "Cấu trúc bảng nhảy của lệnh switch",
                "Prologue (mở đầu) và Epilogue (kết thúc) chuẩn của một hàm có thiết lập Frame Pointer",
                "Vòng lặp do-while tối ưu",
                "Cơ chế bắt ngoại lệ C++ try-catch"
            ],
            "answer": 1,
            "explanation": "Đây là mẫu chuẩn (prologue & epilogue) của hàm x86-64 khi không dùng cờ -fomit-frame-pointer: lưu %rbp cũ, lập %rbp mới trỏ vào đỉnh frame, cấp phát biến cục bộ và dọn dẹp bằng leave trước ret."
        }
    ]
