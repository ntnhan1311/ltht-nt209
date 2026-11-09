# gen_mcq_ch1.py - 30 câu trắc nghiệm Chương 1: Tổng Quan Hệ Thống & Quá Trình Biên Dịch
def get_mcq_ch1():
    return [
        {
            "id": 1,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Trong ngôn ngữ C trên hệ thống 32-bit có dấu thông thường, kết quả của phép nhân 50000 * 50000 mang giá trị âm là do nguyên nhân nào?",
            "options": [
                "Lỗi cú pháp của trình biên dịch GCC",
                "Hiện tượng tràn số nguyên (Integer Overflow) vượt quá TMax của kiểu int 32-bit",
                "Kiểu int trong C tự động chuyển đổi thành số thực âm",
                "Do phần cứng máy tính không hỗ trợ phép nhân lớn hơn 65535"
            ],
            "answer": 1,
            "explanation": "Trong kiểu int 32-bit có dấu, giá trị lớn nhất biểu diễn được là TMax = 2^31 - 1 = 2,147,483,647. Tích 50,000 * 50,000 = 2,500,000,000 vượt quá TMax nên bị tràn số sang miền số âm (kết quả là -1,794,967,296)."
        },
        {
            "id": 2,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Biểu thức C nào sau đây minh họa cho thực tế 'Số thực dấu phẩy động (float) không có tính chất kết hợp toán học tuyệt đối'?",
            "options": [
                "(3.14 + 1e20) - 1e20 != 3.14 + (1e20 - 1e20)",
                "3.14 * 2 == 6.28",
                "1.0 / 2.0 == 0.5",
                "(float)(5 / 2) == 2.5"
            ],
            "answer": 0,
            "explanation": "Trong chuẩn IEEE 754, khi cộng 3.14 với số quá lớn (1e20), phần 3.14 bị mất mát độ chính xác (round-off error) khiến (3.14 + 1e20) - 1e20 bằng 0.0, trong khi 3.14 + (1e20 - 1e20) bằng 3.14."
        },
        {
            "id": 3,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Thứ tự chính xác của 4 giai đoạn trong quá trình biên dịch một chương trình C (từ hello.c thành file thực thi hello) là gì?",
            "options": [
                "Biên dịch (Compilation) -> Tiền xử lý (Preprocessing) -> Hợp dịch (Assembly) -> Liên kết (Linking)",
                "Tiền xử lý (Preprocessing) -> Biên dịch (Compilation) -> Hợp dịch (Assembly) -> Liên kết (Linking)",
                "Hợp dịch (Assembly) -> Tiền xử lý (Preprocessing) -> Biên dịch (Compilation) -> Liên kết (Linking)",
                "Tiền xử lý (Preprocessing) -> Hợp dịch (Assembly) -> Biên dịch (Compilation) -> Liên kết (Linking)"
            ],
            "answer": 1,
            "explanation": "Quá trình biên dịch chuẩn: 1. Tiền xử lý (cpp) -> 2. Biên dịch (cc1) -> 3. Hợp dịch (as) -> 4. Liên kết (ld)."
        },
        {
            "id": 4,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình nào trong bộ công cụ GNU thực hiện giai đoạn Tiền xử lý (Preprocessing) mã nguồn C?",
            "options": [
                "cc1",
                "as",
                "cpp",
                "ld"
            ],
            "answer": 2,
            "explanation": "cpp (C Preprocessor) là chương trình tiền xử lý, thực hiện chèn file header (#include) và mở rộng macro (#define)."
        },
        {
            "id": 5,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Đầu ra của giai đoạn Tiền xử lý (Preprocessing) khi chạy `gcc -E hello.c -o hello.i` là gì?",
            "options": [
                "File văn bản chứa mã nguồn C đã mở rộng macro và chèn nội dung header (.i)",
                "File văn bản chứa mã hợp ngữ (.s)",
                "File nhị phân chứa mã máy có thể tái định vị (.o)",
                "File thực thi nhị phân hoàn chỉnh"
            ],
            "answer": 0,
            "explanation": "File .i là file text thuần túy chứa toàn bộ mã nguồn C sau khi đã thế các macro #define, chèn mã nguồn các file #include và loại bỏ các dòng ghi chú."
        },
        {
            "id": 6,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình nào trong bộ công cụ GNU thực hiện giai đoạn Biên dịch (Compilation) từ file text mã nguồn sang mã hợp ngữ?",
            "options": [
                "cpp",
                "cc1",
                "as",
                "ld"
            ],
            "answer": 1,
            "explanation": "cc1 là trình biên dịch C thực thụ (C compiler) của GCC, chuyển đổi mã nguồn C (file .i) sang mã hợp ngữ (file .s)."
        },
        {
            "id": 7,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Để yêu cầu GCC dừng lại ngay sau giai đoạn sinh mã hợp ngữ (sinh ra file .s), lập trình viên sử dụng cờ (flag) nào?",
            "options": [
                "-E",
                "-S",
                "-c",
                "-o"
            ],
            "answer": 1,
            "explanation": "Cờ -S (viết hoa) yêu cầu GCC chỉ biên dịch ra file hợp ngữ (.s) rồi dừng lại."
        },
        {
            "id": 8,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình Hợp dịch (Assembler - as) nhận đầu vào là gì và tạo ra đầu ra là gì?",
            "options": [
                "Đầu vào: file .c, đầu ra: file .s",
                "Đầu vào: file .i, đầu ra: file .o",
                "Đầu vào: file hợp ngữ .s, đầu ra: file đối tượng nhị phân có thể tái định vị .o",
                "Đầu vào: file .o, đầu ra: file thực thi ELF"
            ],
            "answer": 2,
            "explanation": "Assembler (as) dịch mã hợp ngữ (Assembly code .s) thành mã máy dạng Relocatable Object Program (.o)."
        },
        {
            "id": 9,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Để yêu cầu GCC chỉ dịch mã nguồn đến bước tạo file đối tượng nhị phân (.o) mà không thực hiện liên kết (linking), ta dùng cờ nào?",
            "options": [
                "-c",
                "-S",
                "-E",
                "-Wall"
            ],
            "answer": 0,
            "explanation": "Cờ -c (compile without linking) yêu cầu gcc hợp dịch thành file .o rồi dừng."
        },
        {
            "id": 10,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Chương trình Liên kết (Linker - ld) có nhiệm vụ chính là gì?",
            "options": [
                "Mở rộng các chỉ thị tiền xử lý #include và #define",
                "Chuyển đổi cú pháp C thành cây cú pháp trừu tượng AST",
                "Ghép nối các file object (.o) với nhau và liên kết các hàm thư viện hệ thống thành file thực thi",
                "Tối ưu hóa số lượng thanh ghi sử dụng trong CPU"
            ],
            "answer": 2,
            "explanation": "Linker (ld) ghép nối các file mã máy độc lập (.o) và giải quyết các tham chiếu hàm ngoài (như printf trong libc) thành file thực thi hoàn chỉnh."
        },
        {
            "id": 11,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Lệnh Linux nào sau đây dùng để dịch ngược (Disassemble) một file đối tượng (.o) hoặc file thực thi về lại mã hợp ngữ?",
            "options": [
                "readelf -h",
                "objdump -d",
                "nm -a",
                "strings"
            ],
            "answer": 1,
            "explanation": "Lệnh `objdump -d <file>` dịch ngược mã máy nhị phân thành các chỉ thị hợp ngữ x86-64."
        },
        {
            "id": 12,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Lỗi 'Segmentation Fault' (core dumped) trong hệ điều hành Linux xuất hiện khi nào?",
            "options": [
                "Chương trình chạy vượt quá thời gian tối đa cho phép của CPU",
                "Chương trình cố gắng truy xuất vào một vùng nhớ mà nó không có quyền đọc/ghi hoặc vượt ra ngoài biên được cấp",
                "Chương trình có vòng lặp vô tận while(1)",
                "Chương trình khai báo quá 16 biến kiểu int"
            ],
            "answer": 1,
            "explanation": "Segmentation Fault xảy ra khi CPU/MMU phát hiện chương trình truy cập trái phép bộ nhớ (như giải tham chiếu con trỏ NULL, ghi vào vùng nhớ chỉ đọc .rodata, hoặc truy xuất địa chỉ ảo chưa được ánh xạ)."
        },
        {
            "id": 13,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Cấp nào sau đây có tốc độ truy xuất nhanh nhất trong hệ thống phân cấp bộ nhớ (Memory Hierarchy)?",
            "options": [
                "L1 Cache",
                "L2 Cache",
                "Tập thanh ghi CPU (Registers)",
                "Bộ nhớ chính (Main Memory - DRAM)"
            ],
            "answer": 2,
            "explanation": "Tập thanh ghi CPU (Registers) nằm trực tiếp bên trong nhân vi xử lý và có thể truy xuất trong 0 hoặc 1 chu kỳ xung nhịp (nhanh nhất trong toàn bộ hệ thống)."
        },
        {
            "id": 14,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Bộ nhớ đệm L1, L2, L3 Cache trong máy tính hiện đại thường được chế tạo bằng công nghệ gì?",
            "options": [
                "DRAM (Dynamic RAM)",
                "SRAM (Static RAM)",
                "Flash ROM",
                "EEPROM"
            ],
            "answer": 1,
            "explanation": "Cache CPU được làm từ SRAM (Static RAM), có tốc độ cực nhanh và không cần chu kỳ làm tươi (refresh cycle) như DRAM của bộ nhớ chính."
        },
        {
            "id": 15,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Nguyên lý cục bộ theo thời gian (Temporal Locality) phát biểu điều gì?",
            "options": [
                "Các vị trí nhớ liền kề nhau sẽ được truy xuất liên tiếp nhau",
                "Một vị trí nhớ vừa được truy xuất có khả năng cao sẽ được truy xuất lại trong tương lai gần",
                "Chương trình chạy càng lâu thì càng tiêu thụ ít bộ nhớ",
                "Dữ liệu lưu trong cache sẽ bị xóa sau 1 micro giây"
            ],
            "answer": 1,
            "explanation": "Temporal Locality: Một biến vừa được CPU đọc/ghi (ví dụ biến đếm vòng lặp i) thì rất nhiều khả năng sẽ tiếp tục được sử dụng lại ngay sau đó."
        },
        {
            "id": 16,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Nguyên lý cục bộ theo không gian (Spatial Locality) được tận dụng tốt nhất trong trường hợp nào sau đây?",
            "options": [
                "Truy xuất các phần tử mảng 2 chiều theo thứ tự hàng (Row-major: a[i][j])",
                "Truy xuất các phần tử mảng 2 chiều theo thứ tự cột (Column-major: a[j][i]) khi mảng lưu theo hàng",
                "Truy xuất các nút của danh sách liên kết nằm rải rác trong Heap",
                "Truy xuất mảng bằng chỉ số ngẫu nhiên ngẫu nhiên dùng hàm rand()"
            ],
            "answer": 0,
            "explanation": "Trong C, mảng 2 chiều được lưu trữ liên tục theo hàng (row-major order). Do đó việc duyệt tuần tự theo hàng a[i][j] sẽ tải nguyên khối cache line chứa các phần tử kế cận, tận dụng tối đa Spatial Locality."
        },
        {
            "id": 17,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Khái niệm 'Bộ nhớ ảo' (Virtual Memory) cung cấp lợi ích gì cho mỗi tiến trình đang chạy?",
            "options": [
                "Tăng tốc độ truy xuất của thanh ghi lên gấp 10 lần",
                "Cung cấp ảo giác mỗi tiến trình có một không gian địa chỉ riêng biệt, tuyến tính và độc chiếm bộ nhớ",
                "Loại bỏ hoàn toàn sự cần thiết của bộ nhớ RAM vật lý",
                "Tự động giải phóng con trỏ rò rỉ mà không cần gọi hàm free()"
            ],
            "answer": 1,
            "explanation": "Virtual Memory ánh xạ địa chỉ ảo sang địa chỉ vật lý, bảo vệ các tiến trình không can thiệp bộ nhớ của nhau và cho mỗi tiến trình cảm giác sở hữu toàn bộ không gian địa chỉ liên tục."
        },
        {
            "id": 18,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Trong các trừu tượng của Hệ điều hành, 'Tập tin' (File) là sự trừu tượng hóa của thành phần nào?",
            "options": [
                "Bộ xử lý trung tâm (CPU)",
                "Bộ nhớ chính (DRAM)",
                "Các thiết bị Nhập/Xuất (I/O Devices)",
                "Tập thanh ghi của CPU"
            ],
            "answer": 2,
            "explanation": "Trong kiến trúc UNIX/Linux, mọi thiết bị I/O (bàn phím, màn hình, ổ đĩa, card mạng) đều được trừu tượng hóa thành một tập tin (chuỗi các byte)."
        },
        {
            "id": 19,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Trong các trừu tượng của Hệ điều hành, 'Tiến trình' (Process) là sự trừu tượng hóa của thành phần nào?",
            "options": [
                "Chỉ trừu tượng hóa con trỏ lệnh PC",
                "Một chương trình đang trong trạng thái thực thi cùng toàn bộ tài nguyên (CPU, bộ nhớ, I/O)",
                "Chỉ trừu tượng hóa phân vùng Swap trên đĩa",
                "Bộ nhớ cache L1 và L2"
            ],
            "answer": 1,
            "explanation": "Process là trừu tượng hóa toàn bộ một chương trình đang chạy, bao gồm luồng thực thi CPU, không gian địa chỉ bộ nhớ ảo và các bộ mô tả tập tin I/O."
        },
        {
            "id": 20,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Khái niệm ISA (Instruction Set Architecture) định nghĩa điều gì?",
            "options": [
                "Tần số xung nhịp tối đa và nhiệt độ hoạt động của chip",
                "Quy cách thiết kế mạch điện tử của bóng bán dẫn bán dẫn",
                "Mô hình phần mềm nhìn thấy của bộ xử lý (tập lệnh, thanh ghi, cơ chế địa chỉ, định dạng dữ liệu)",
                "Kích thước vật lý của khe cắm CPU trên bo mạch chủ"
            ],
            "answer": 2,
            "explanation": "ISA là bản hợp đồng giữa phần mềm và phần cứng: tập các lệnh máy mà CPU hỗ trợ, các thanh ghi, cách định dạng và biểu diễn dữ liệu mà lập trình viên/trình biên dịch nhìn thấy."
        },
        {
            "id": 21,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Sự khác biệt giữa ISA (Instruction Set Architecture) và Vi kiến trúc (Microarchitecture) là gì?",
            "options": [
                "ISA là cách hiện thực vật lý cụ thể (pipeline, cache), còn Vi kiến trúc là tài liệu đặc tả tập lệnh",
                "ISA là bản đặc tả tập lệnh trừu tượng (như x86-64), còn Vi kiến trúc là cách thiết kế mạch cụ thể hiện thực ISA đó (như Intel Skylake, AMD Zen)",
                "ISA chỉ dùng cho hệ điều hành, Vi kiến trúc chỉ dùng cho trình biên dịch",
                "Hai khái niệm này hoàn toàn đồng nghĩa và có thể thay thế cho nhau"
            ],
            "answer": 1,
            "explanation": "Nhiều vi kiến trúc khác nhau (Intel Core i9, AMD Ryzen) có thể cùng triển khai chung một kiến trúc tập lệnh ISA (x86-64)."
        },
        {
            "id": 22,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Khi một chương trình người dùng muốn đọc dữ liệu từ bàn phím hoặc đĩa cứng, nó phải chuyển từ User Mode sang Kernel Mode thông qua cơ chế nào?",
            "options": [
                "Gọi trực tiếp hàm main() của Kernel",
                "Lời gọi hệ thống (System Call / Trap)",
                "Ghi đè giá trị của thanh ghi %rsp về 0",
                "Tự động ép kiểu con trỏ sang void*"
            ],
            "answer": 1,
            "explanation": "Chương trình người dùng chạy ở User Mode không có quyền truy xuất trực tiếp phần cứng, phải thông qua System Call (như read, write) để yêu cầu Hệ điều hành (Kernel Mode) thực hiện thay."
        },
        {
            "id": 23,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Hiện tượng 'use-after-free' trong C đề cập đến tình huống lỗi bộ nhớ nào sau đây?",
            "options": [
                "Cấp phát bộ nhớ bằng malloc() nhưng quên không gọi free()",
                "Giải phóng một con trỏ 2 lần liên tiếp bằng lệnh free()",
                "Truy xuất hoặc ghi dữ liệu vào vùng nhớ sau khi vùng nhớ đó đã bị thu hồi bởi hàm free()",
                "Khai báo một con trỏ mà không khởi tạo giá trị ban đầu"
            ],
            "answer": 2,
            "explanation": "use-after-free là lỗi bảo mật nguy hiểm khi chương trình tiếp tục đọc/ghi thông qua con trỏ trỏ tới vùng nhớ Heap đã bị trả lại qua free()."
        },
        {
            "id": 24,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Hiện tượng 'Memory Leak' (Rò rỉ bộ nhớ) xảy ra khi nào?",
            "options": [
                "Dữ liệu trên ngăn xếp (stack) tràn sang phân vùng mã lệnh (.text)",
                "Bộ nhớ Heap được cấp phát động thông qua malloc/calloc nhưng không bao giờ được giải phóng khi không còn dùng nữa",
                "Bộ nhớ RAM bị hỏng vật lý làm mất dữ liệu khi mất điện",
                "Truy cập mảng với chỉ số âm"
            ],
            "answer": 1,
            "explanation": "Memory Leak xảy ra khi bộ nhớ được cấp phát động mà mất hết các con trỏ quản lý, khiến nó không thể tái sử dụng hay giải phóng, làm tiêu hao tài nguyên hệ thống."
        },
        {
            "id": 25,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Tại sao việc tối ưu hóa mức `-O2` hoặc `-O3` của GCC đôi khi làm xuất hiện các lỗi runtime mà ở mức `-O0` không thấy?",
            "options": [
                "Mức -O2 làm thay đổi kích thước của kiểu int từ 4 byte thành 2 byte",
                "Trình biên dịch tối ưu giả định chương trình không có Hành vi không xác định (Undefined Behavior) và tái sắp xếp, loại bỏ các đoạn mã 'thừa'",
                "Mức -O2 tự động xóa toàn bộ các biến toàn cục trong chương trình",
                "Do mức -O2 luôn ép chương trình chạy ở chế độ đa luồng"
            ],
            "answer": 1,
            "explanation": "Trình biên dịch tối ưu hóa dựa trên tiêu chuẩn C và giả định không có Undefined Behavior. Nếu code có lỗi đọc ngoài biên hoặc tràn số có dấu, trình tối ưu có thể tối ưu sai hoặc bộc lộ lỗi tiềm ẩn."
        },
        {
            "id": 26,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Đơn vị dữ liệu chuyển dịch cơ bản trên các đường truyền Bus giữa CPU và Bộ nhớ chính thường được gọi là gì?",
            "options": [
                "Bit đơn lẻ",
                "Từ nhớ (Word - thường là 4 byte hoặc 8 byte)",
                "Khối 1 Gigabyte",
                "Một trang giấy A4"
            ],
            "answer": 1,
            "explanation": "Hệ thống truyền dữ liệu qua Bus theo đơn vị từ nhớ (Word), trong hệ 64-bit là quadword (8 byte / 64 bit)."
        },
        {
            "id": 27,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Cơ chế nào cho phép thiết bị I/O (như ổ cứng SSD hoặc card mạng) truyền trực tiếp các khối dữ liệu lớn vào bộ nhớ chính mà không cần CPU can thiệp từng byte?",
            "options": [
                "Polled I/O",
                "Programmed I/O",
                "DMA (Direct Memory Access)",
                "Software Interrupt"
            ],
            "answer": 2,
            "explanation": "DMA (Direct Memory Access) cho phép các thiết bị I/O tự đọc/ghi trực tiếp vào DRAM, giải phóng thời gian xử lý cho CPU."
        },
        {
            "id": 28,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Thành phần nào trong CPU có nhiệm vụ lưu trữ địa chỉ của chỉ thị lệnh kế tiếp sẽ được nạp và thực thi?",
            "options": [
                "ALU (Arithmetic Logic Unit)",
                "PC (Program Counter / Instruction Pointer - %rip)",
                "Cờ trạng thái ZF",
                "Thanh ghi %rax"
            ],
            "answer": 1,
            "explanation": "Program Counter (PC, trên x86-64 là thanh ghi %rip) luôn trỏ tới địa chỉ của lệnh tiếp theo cần thực thi."
        },
        {
            "id": 29,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Khi hai hàm trong hai file mã nguồn C khác nhau cùng định nghĩa một biến toàn cục `int count;`, công cụ nào sẽ phát hiện lỗi trùng lặp biểu tượng (duplicate symbol)?",
            "options": [
                "Preprocessor (cpp)",
                "Compiler (cc1)",
                "Linker (ld)",
                "Assembler (as)"
            ],
            "answer": 2,
            "explanation": "Linker (ld) chịu trách nhiệm kết hợp bảng biểu tượng (Symbol Table) của các file .o. Nếu có 2 biểu tượng mạnh (strong symbols) trùng tên, Linker sẽ báo lỗi multiple definition."
        },
        {
            "id": 30,
            "chapter": 1,
            "chapterName": "Tổng quan & Biên dịch",
            "question": "Khái niệm 'Context Switch' (Chuyển ngữ cảnh) trong hệ điều hành đề cập đến việc gì?",
            "options": [
                "Chuyển đổi kiểu dữ liệu từ float sang int trong biểu thức toán học",
                "Lưu lại trạng thái (thanh ghi, PC) của tiến trình hiện tại và khôi phục trạng thái của tiến trình khác để CPU thực thi",
                "Biên dịch mã C sang mã Java bytecode",
                "Chuyển đổi quyền truy cập của một tập tin từ chỉ đọc sang đọc/ghi"
            ],
            "answer": 1,
            "explanation": "Context Switch là cơ chế của OS để lưu trạng thái tiến trình cũ và nạp trạng thái tiến trình mới, cho phép chia sẻ CPU giữa nhiều tiến trình đồng thời."
        }
    ]
