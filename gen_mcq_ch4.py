# gen_mcq_ch4.py - 40 câu trắc nghiệm Chương 4: Cấu Trúc Điều Khiển x86-64 (IDs 121-160)
def get_mcq_ch4():
    return [
        {
            "id": 121,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cờ Carry Flag (CF) trong thanh ghi cờ trạng thái của vi xử lý được bật lên 1 khi nào?",
            "options": [
                "Khi kết quả của một phép tính số học bù 2 bị tràn số có dấu",
                "Khi phép tính số học không dấu (unsigned) bị tràn (có nhớ hoặc mượn ở bit MSB)",
                "Khi kết quả của phép tính bằng 0",
                "Khi kết quả của phép tính là số âm"
            ],
            "answer": 1,
            "explanation": "CF (Carry Flag) dành riêng cho số không dấu (unsigned overflow): bật khi có nhớ ngoài bit cao nhất hoặc có mượn trong phép trừ."
        },
        {
            "id": 122,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cờ Zero Flag (ZF) được thiết lập lên 1 trong trường hợp nào sau đây?",
            "options": [
                "Khi kết quả của phép toán vừa thực thi bằng 0",
                "Khi kết quả của phép toán là số nguyên âm",
                "Khi toán hạng nguồn bằng 0",
                "Khi CPU đang ở trạng thái nhàn rỗi (idle)"
            ],
            "answer": 0,
            "explanation": "ZF = 1 nếu kết quả của phép toán gần nhất bằng 0; ngược lại ZF = 0."
        },
        {
            "id": 123,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cờ Sign Flag (SF) phản ánh điều gì của kết quả phép toán vừa thực hiện?",
            "options": [
                "Phản ánh giá trị bit dấu cao nhất (MSB), bằng 1 nếu kết quả là số âm",
                "Bằng 1 nếu phép toán thực hiện phép cộng, bằng 0 nếu thực hiện phép trừ",
                "Bằng 1 nếu hai toán hạng cùng dấu",
                "Bằng 1 khi có tràn số có dấu"
            ],
            "answer": 0,
            "explanation": "SF nhận giá trị bằng đúng bit MSB của kết quả. Với số có dấu bù 2, MSB = 1 nghĩa là kết quả âm, do đó SF = 1."
        },
        {
            "id": 124,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cờ Overflow Flag (OF) được bật lên 1 khi nào?",
            "options": [
                "Khi phép toán số nguyên có dấu bù 2 bị tràn số (dương + dương ra âm hoặc âm + âm ra dương)",
                "Khi số nguyên không dấu vượt quá UMax",
                "Khi bộ nhớ RAM bị tràn",
                "Khi con trỏ ngăn xếp %rsp vượt quá giới hạn"
            ],
            "answer": 0,
            "explanation": "OF (Overflow Flag) chuyên dụng cho số có dấu bù 2: bật lên 1 khi kết quả phép tính có dấu vượt ra ngoài khoảng [TMin, TMax]."
        },
        {
            "id": 125,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `cmpq %rsi, %rdi` thực hiện phép tính ngầm định nào để thiết lập các cờ trạng thái?",
            "options": [
                "%rsi - %rdi",
                "%rdi - %rsi",
                "%rdi + %rsi",
                "%rdi & %rsi"
            ],
            "answer": 1,
            "explanation": "Theo cú pháp AT&T: `cmp S2, S1` thực hiện phép trừ `S1 - S2` (toán hạng thứ 2 trừ đi toán hạng thứ 1), tức là tính `%rdi - %rsi` mà không lưu kết quả, chỉ cập nhật cờ."
        },
        {
            "id": 126,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `testq %rax, %rax` thường được trình biên dịch sử dụng nhằm mục đích gì?",
            "options": [
                "Xóa thanh ghi %rax về 0",
                "Kiểm tra xem %rax mang giá trị âm, dương hay bằng 0 mà không làm thay đổi giá trị của nó",
                "Đổi dấu thanh ghi %rax",
                "Kiểm tra xem %rax có phải là địa chỉ bộ nhớ hợp lệ không"
            ],
            "answer": 1,
            "explanation": "testq tính %rax & %rax (kết quả chính là %rax): nếu %rax == 0 thì ZF=1; nếu %rax < 0 (bit MSB=1) thì SF=1. Đồng thời luôn đặt CF=0 và OF=0."
        },
        {
            "id": 127,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `test` luôn luôn đặt hai cờ trạng thái nào về giá trị 0?",
            "options": [
                "ZF và SF",
                "CF và OF",
                "SF và OF",
                "ZF và CF"
            ],
            "answer": 1,
            "explanation": "Lệnh test thực hiện phép AND logic, không có hiện tượng nhớ hay tràn số học nên luôn xóa CF = 0 và OF = 0."
        },
        {
            "id": 128,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `sete %al` (hoặc `setz %al`) gán giá trị gì vào thanh ghi 8-bit `%al`?",
            "options": [
                "Gán 1 nếu ZF = 1 (kết quả bằng nhau/bằng 0), gán 0 nếu ZF = 0",
                "Gán 0 nếu ZF = 1, gán 1 nếu ZF = 0",
                "Luôn gán giá trị của cờ CF",
                "Gán giá trị 0xFF"
            ],
            "answer": 0,
            "explanation": "sete / setz kiểm tra cờ Zero: nếu ZF = 1 thì đặt byte đích bằng 1, ngược lại đặt bằng 0."
        },
        {
            "id": 129,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Để so sánh hai số nguyên CÓ DẤU bù 2 sau lệnh `cmp`, điều kiện cờ để lệnh `setl` (Set if Less: nhỏ hơn) gán giá trị 1 là gì?",
            "options": [
                "CF = 1",
                "ZF = 1",
                "SF ^ OF (Sign Flag XOR với Overflow Flag)",
                "SF & OF"
            ],
            "answer": 2,
            "explanation": "Với số có dấu, nếu không tràn số (OF=0) thì nhỏ hơn khi SF=1. Nếu có tràn số (OF=1) thì dấu bị đảo ngược (SF=0). Do đó điều kiện chính xác là `SF ^ OF`."
        },
        {
            "id": 130,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Để so sánh hai số nguyên KHÔNG DẤU sau lệnh `cmpq %rsi, %rdi`, lệnh nào sau đây nhảy nếu `%rdi < %rsi`?",
            "options": [
                "jl (Jump if Less)",
                "jb (Jump if Below / Carry Flag = 1)",
                "js (Jump if Sign)",
                "jle (Jump if Less or Equal)"
            ],
            "answer": 1,
            "explanation": "Số không dấu dùng Below (jb) và Above (ja). Phép trừ S1 - S2 khi S1 < S2 (không dấu) sẽ sinh ra mượn, tức cờ CF = 1, do đó lệnh `jb` (hoặc `jc`) sẽ nhảy."
        },
        {
            "id": 131,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy có điều kiện nào sau đây được dùng cho so sánh CÓ DẤU 'Lớn hơn' (>)?",
            "options": [
                "ja (Jump if Above)",
                "jg (Jump if Greater)",
                "jge (Jump if Greater or Equal)",
                "jae (Jump if Above or Equal)"
            ],
            "answer": 1,
            "explanation": "Greater (jg) / Less (jl) dành cho số có dấu (signed). Above (ja) / Below (jb) dành cho số không dấu (unsigned)."
        },
        {
            "id": 132,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy gián tiếp `jmp *%rax` khác với lệnh nhảy trực tiếp `jmp .L1` ở điểm nào?",
            "options": [
                "Nhảy gián tiếp lấy địa chỉ đích từ thanh ghi hoặc ô nhớ tại thời điểm chạy (runtime), còn nhảy trực tiếp đích nhảy được mã hóa cứng ngay trong lệnh",
                "Nhảy gián tiếp chỉ nhảy được trong phạm vi 128 byte",
                "Nhảy gián tiếp luôn kiểm tra cờ ZF",
                "Nhảy gián tiếp là lệnh đặc quyền của Kernel"
            ],
            "answer": 0,
            "explanation": "`jmp *Operand` là nhảy gián tiếp: CPU đọc địa chỉ đích từ giá trị của thanh ghi hoặc bộ nhớ, thường dùng cho con trỏ hàm và bảng nhảy (jump tables)."
        },
        {
            "id": 133,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Xét đoạn mã C sau:\n`if (x > y) a = 1; else a = 2;`\nKhi dịch sang hợp ngữ theo cấu trúc rẽ nhánh truyền thống, trình biên dịch thường làm gì với điều kiện `x > y`?",
            "options": [
                "Giữ nguyên điều kiện và nhảy đến khối then",
                "Đảo ngược điều kiện thành `x <= y` (dùng `jle`) để nhảy qua khối then và đi thẳng tới nhãn else",
                "Tạo ra hai luồng chạy song song",
                "Chuyển đổi thành vòng lặp while"
            ],
            "answer": 1,
            "explanation": "Mẫu biên dịch rẽ nhánh trong hợp ngữ thường đảo ngược điều kiện kiểm tra: nếu điều kiện SAI (x <= y) thì nhảy tới nhánh else, nếu đúng thì chạy tiếp khối then."
        },
        {
            "id": 134,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh Conditional Move (`cmovcc`) mang lại lợi ích hiệu năng to lớn gì so với cấu trúc rẽ nhánh dùng lệnh nhảy (`jcc`)?",
            "options": [
                "Giúp giảm kích thước tập tin thực thi đi 50%",
                "Tránh được hình phạt đoán sai nhánh (Branch Misprediction Penalty) trên vi xử lý có đường ống (pipeline) sâu",
                "Cho phép CPU chạy mà không cần xung nhịp",
                "Không sử dụng bất kỳ thanh ghi nào"
            ],
            "answer": 1,
            "explanation": "Vi xử lý hiện đại sử dụng bộ dự đoán nhánh (Branch Predictor). Nếu đoán sai nhánh rẽ jcc, toàn bộ pipeline phải bị hủy (flush), tốn 15-30 chu kỳ. Cmov thực thi cả 2 nhánh không rẽ nên tránh hoàn toàn tổn thất này."
        },
        {
            "id": 135,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tình huống nào sau đây KHÔNG THỂ hoặc NGUY HIỂM nếu sử dụng Conditional Move (`cmov`)?",
            "options": [
                "Khi tính giá trị nhỏ nhất của hai số nguyên đơn giản: `min = (x < y) ? x : y;`",
                "Khi một trong hai nhánh có biểu thức giải tham chiếu con trỏ: `val = (p != NULL) ? *p : 0;`",
                "Khi gán một hằng số vào thanh ghi",
                "Khi hai nhánh có cùng kiểu dữ liệu"
            ],
            "answer": 1,
            "explanation": "Cmov bắt buộc CPU phải tính toán trước giá trị của cả hai nhánh. Nếu p == NULL, việc tính trước `*p` sẽ gây lỗi Segmentation Fault và crash chương trình!"
        },
        {
            "id": 136,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Dạng vòng lặp nào sau đây có cấu trúc chuyển dịch sang mã hợp ngữ tự nhiên và ngắn gọn nhất?",
            "options": [
                "Vòng lặp Do-While",
                "Vòng lặp While thông thường",
                "Vòng lặp For",
                "Vòng lặp For-each"
            ],
            "answer": 0,
            "explanation": "Do-While thực thi thân vòng lặp trước, sau đó chỉ cần một phép kiểm tra điều kiện và một lệnh `jcc` nhảy ngược lên đầu vòng lặp nếu điều kiện đúng."
        },
        {
            "id": 137,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Chiến lược biên dịch vòng lặp `while (test) { body }` theo kiểu 'Jump-to-middle' hoạt động như thế nào?",
            "options": [
                "Nhảy ngay lập tức tới nhãn kiểm tra điều kiện ở cuối/giữa, nếu điều kiện thỏa mãn thì nhảy ngược lên thực thi thân vòng lặp",
                "Chạy thân vòng lặp một lần trước bất kể điều kiện",
                "Chuyển toàn bộ thân vòng lặp thành hàm đệ quy",
                "Chia đôi mảng và xử lý nhị phân"
            ],
            "answer": 0,
            "explanation": "Jump-to-middle: bắt đầu bằng một lệnh `jmp test_label` không điều kiện xuống nhãn kiểm tra. Nếu điều kiện đúng, `jcc loop_body` nhảy ngược lên thân lặp."
        },
        {
            "id": 138,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Chiến lược biên dịch 'Guarded-do' (thường được GCC áp dụng ở mức tối ưu hóa `-O1`) cho vòng lặp while hoạt động như thế nào?",
            "options": [
                "Dùng câu lệnh if ở đầu để kiểm tra điều kiện ban đầu, nếu sai thì nhảy qua hết vòng lặp; nếu đúng thì chuyển phần còn lại thành cấu trúc do-while",
                "Lặp vô tận rồi dùng lệnh ngắt interrupt để dừng",
                "Luôn lặp đúng 100 lần",
                "Tạo thêm luồng bảo vệ để giám sát biến đếm"
            ],
            "answer": 0,
            "explanation": "Guarded-do: kiểm tra điều kiện vào lần đầu (guard). Nếu thỏa, toàn bộ phần sau trở thành vòng lặp do-while với hiệu năng cao hơn vì bên trong thân lặp chỉ còn 1 lệnh nhảy có điều kiện duy nhất."
        },
        {
            "id": 139,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Khi nào trình biên dịch GCC quyết định sử dụng Bảng nhảy (Jump Table) thay vì chuỗi các lệnh if-else cho cấu trúc câu lệnh `switch`?",
            "options": [
                "Khi câu lệnh switch chỉ có từ 1 đến 2 case",
                "Khi số lượng case tương đối lớn (thường từ 4 trở lên) và các giá trị của case nằm trong một khoảng tương đối dày đặc (liên tục)",
                "Khi tất cả các case đều là chuỗi ký tự (strings)",
                "Khi switch nằm bên trong một hàm đệ quy"
            ],
            "answer": 1,
            "explanation": "Jump Table là một mảng các con trỏ địa chỉ mã lệnh. Nó mang lại hiệu quả O(1) vượt trội khi các giá trị case liên tục hoặc gần liên tục."
        },
        {
            "id": 140,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Độ phức tạp thời gian thực thi của một câu lệnh switch sử dụng Bảng nhảy (Jump Table) là bao nhiêu đối với số lượng N trường hợp case?",
            "options": [
                "O(N)",
                "O(log N)",
                "O(1) - thời gian hằng số",
                "O(N^2)"
            ],
            "answer": 2,
            "explanation": "Jump Table truy xuất địa chỉ qua mảng chỉ bằng một phép tính chỉ mục và một lệnh nhảy gián tiếp `jmp *table(,%rdi,8)`, do đó thời gian thực thi luôn là O(1) không phụ thuộc vào N."
        },
        {
            "id": 141,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Trong hợp ngữ x86-64, câu lệnh nào sau đây thể hiện phép nhảy gián tiếp thông qua Bảng nhảy `.L4` với chỉ số case trong `%rdi`?",
            "options": [
                "jmp .L4(%rdi)",
                "jmp *.L4(,%rdi,8)",
                "call .L4(,%rdi,8)",
                "movq .L4(,%rdi,8), %rip"
            ],
            "answer": 1,
            "explanation": "Bảng nhảy chứa các địa chỉ 64-bit (8 byte). Cú pháp đúng là `jmp *.L4(,%rdi,8)` (đọc địa chỉ tại `.L4 + %rdi * 8` và nhảy đến đó)."
        },
        {
            "id": 142,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tại sao trong bước kiểm tra biên của cấu trúc switch dùng Jump Table, GCC lại trừ đi case nhỏ nhất rồi thực hiện so sánh với cờ lệnh `ja .Ldefault` (so sánh không dấu)?",
            "options": [
                "Để một phép so sánh duy nhất vừa phát hiện được trường hợp giá trị nhỏ hơn case nhỏ nhất (âm biến thành số không dấu cực lớn) vừa phát hiện được giá trị lớn hơn case lớn nhất",
                "Vì hợp ngữ x86 không hỗ trợ so sánh có dấu",
                "Vì jump table không cho phép chứa case default",
                "Để tiết kiệm bộ nhớ RAM"
            ],
            "answer": 0,
            "explanation": "Mẹo cực kỳ kinh điển của GCC: Khi trừ x cho min_val, nếu x < min_val thì hiệu số sẽ là số âm. Ép sang không dấu sẽ trở thành số cực lớn (> max_offset), do đó chỉ cần 1 lệnh `ja .Ldefault` là kiểm tra được cả 2 cận!"
        },
        {
            "id": 143,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Hiện tượng 'Fall-through' trong câu lệnh switch của ngôn ngữ C được biểu diễn như thế nào trong mã hợp ngữ?",
            "options": [
                "Trình biên dịch tự động sinh ra một lệnh gọi hàm bổ sung",
                "Không có lệnh nhảy `jmp` ở cuối khối mã của case đó, luồng thực thi tự động chạy trượt thẳng xuống dòng lệnh đầu tiên của case tiếp theo",
                "Tạo ra một ngoại lệ CPU",
                "Lặp lại toàn bộ câu lệnh switch từ đầu"
            ],
            "answer": 1,
            "explanation": "Khi không có `break`, trình biên dịch không đặt lệnh `jmp .Ldone` ở cuối nhãn, do đó CPU tuần tự chạy trượt xuống nhãn kế tiếp."
        },
        {
            "id": 144,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cho đoạn mã hợp ngữ:\n`cmpq %rsi, %rdi`\n`jle .L2`\nLệnh nhảy tới `.L2` sẽ diễn ra khi điều kiện toán học nào giữa hai biến có dấu x (%rdi) và y (%rsi) được thỏa mãn?",
            "options": [
                "x > y",
                "x < y",
                "x <= y",
                "x >= y"
            ],
            "answer": 2,
            "explanation": "Lệnh `cmpq %rsi, %rdi` tính `%rdi - %rsi` (tức x - y). Lệnh `jle` (Jump if Less or Equal) sẽ nhảy khi hiệu số <= 0, tức x <= y."
        },
        {
            "id": 145,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cho đoạn mã:\n`xorl %eax, %eax`\n`testq %rdi, %rdi`\n`setg %al`\nĐoạn mã này thực hiện biểu thức C nào (với x lưu trong `%rdi`)?",
            "options": [
                "return x == 0;",
                "return x > 0;",
                "return x < 0;",
                "return x >= 0;"
            ],
            "answer": 1,
            "explanation": "testq %rdi, %rdi kiểm tra dấu và tính 0 của %rdi. setg %al gán %al = 1 nếu %rdi > 0 (greater than 0), ngược lại gán 0. Kết quả trả về trong %rax là `x > 0`."
        },
        {
            "id": 146,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh nhảy `jne .L3` kiểm tra cờ trạng thái nào để quyết định nhảy?",
            "options": [
                "ZF = 0 (Zero Flag bằng 0, tức kết quả khác nhau / khác 0)",
                "ZF = 1",
                "CF = 1",
                "SF = 1"
            ],
            "answer": 0,
            "explanation": "jne (Jump if Not Equal): nhảy khi cờ ZF = 0 (kết quả so sánh không bằng 0, tức hai toán hạng khác nhau)."
        },
        {
            "id": 147,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cho `x = 5`, `y = 5`. Sau lệnh `cmpq %rsi, %rdi` (với %rdi = x, %rsi = y), các cờ trạng thái ZF và CF sẽ nhận giá trị gì?",
            "options": [
                "ZF = 0, CF = 1",
                "ZF = 1, CF = 0",
                "ZF = 1, CF = 1",
                "ZF = 0, CF = 0"
            ],
            "answer": 1,
            "explanation": "Tính 5 - 5 = 0. Kết quả bằng 0 nên ZF = 1. Phép trừ không có mượn nên cờ nhớ CF = 0."
        },
        {
            "id": 148,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `js .L_negative` sẽ nhảy khi nào?",
            "options": [
                "Khi kết quả là số không âm (SF = 0)",
                "Khi kết quả là số âm (cờ SF = 1)",
                "Khi có tràn số (OF = 1)",
                "Khi kết quả bằng 0 (ZF = 1)"
            ],
            "answer": 1,
            "explanation": "js (Jump if Sign): nhảy khi cờ SF = 1 (kết quả mang dấu âm)."
        },
        {
            "id": 149,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `jns .L_nonneg` sẽ nhảy khi nào?",
            "options": [
                "Khi kết quả là số âm (SF = 1)",
                "Khi kết quả không mang dấu âm (cờ SF = 0, tức >= 0)",
                "Khi cờ ZF = 0",
                "Khi cờ CF = 0"
            ],
            "answer": 1,
            "explanation": "jns (Jump if Not Sign): nhảy khi cờ SF = 0 (số không âm: dương hoặc bằng 0)."
        },
        {
            "id": 150,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Trong trường hợp nào sau đây, trình biên dịch sẽ CHẮC CHẮN KHÔNG dùng Jump Table cho câu lệnh switch mà dùng chuỗi if-else hoặc binary search?",
            "options": [
                "Khi các giá trị case liên tiếp: 100, 101, 102, 103",
                "Khi các giá trị case cực kỳ thưa thớt, ví dụ: case 1, case 1000000, case 500000000",
                "Khi có hơn 10 case liên tục",
                "Khi các case mang giá trị âm liên tiếp: -3, -2, -1, 0"
            ],
            "answer": 1,
            "explanation": "Nếu các case quá thưa thớt (1, 10^6, 5*10^8), việc tạo Jump Table sẽ tiêu tốn hàng trăm triệu ô nhớ lãng phí cho các case default, do đó trình biên dịch sẽ chuyển sang chuỗi if-else hoặc tìm kiếm nhị phân."
        },
        {
            "id": 151,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Lệnh `cmovne %rsi, %rax` thực hiện thao tác gì?",
            "options": [
                "Luôn luôn sao chép %rsi vào %rax",
                "Sao chép %rsi vào %rax nếu cờ ZF = 0 (điều kiện khác nhau / không bằng 0)",
                "Sao chép %rsi vào %rax nếu cờ ZF = 1",
                "Đổi chỗ giá trị của %rsi và %rax"
            ],
            "answer": 1,
            "explanation": "cmovne (Conditional Move if Not Equal): chỉ thực hiện di chuyển dữ liệu `%rax = %rsi` khi điều kiện Not Equal thỏa mãn (tức ZF = 0)."
        },
        {
            "id": 152,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Cho đoạn mã hợp ngữ:\n`movq $10, %rax`\n`.L1:`\n`decq %rax`\n`jnz .L1`\nVòng lặp trên sẽ thực thi thân vòng lặp bao nhiêu lần?",
            "options": [
                "9 lần",
                "10 lần",
                "11 lần",
                "Vô hạn lần"
            ],
            "answer": 1,
            "explanation": "%rax bắt đầu từ 10. Sau mỗi lần giảm 1: 9, 8, ..., 1 (vẫn khác 0 nên jnz nhảy tiếp). Khi giảm từ 1 về 0, ZF = 1 khiến jnz không nhảy nữa và thoát. Tổng cộng chạy đúng 10 lần."
        },
        {
            "id": 153,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Điều kiện để lệnh `seta` (Set if Above - so sánh không dấu lớn hơn) gán byte đích bằng 1 là gì?",
            "options": [
                "~CF & ~ZF (cả cờ Carry và cờ Zero đều bằng 0)",
                "CF = 1",
                "ZF = 1",
                "SF ^ OF"
            ],
            "answer": 0,
            "explanation": "Above (không dấu lớn hơn): không được có mượn (CF = 0) và không được bằng nhau (ZF = 0), do đó điều kiện là `~CF & ~ZF`."
        },
        {
            "id": 154,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Điều kiện để lệnh `setbe` (Set if Below or Equal - so sánh không dấu nhỏ hơn hoặc bằng) gán byte đích bằng 1 là gì?",
            "options": [
                "CF | ZF (có mượn hoặc bằng nhau)",
                "~CF & ~ZF",
                "SF | OF",
                "ZF = 0"
            ],
            "answer": 0,
            "explanation": "Below or Equal: nhỏ hơn (CF = 1) hoặc bằng nhau (ZF = 1), do đó điều kiện là `CF | ZF`."
        },
        {
            "id": 155,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Giả sử thực hiện phép trừ `0 - (-128)` trong hệ 8-bit bù 2. Cờ Overflow Flag (OF) sẽ có giá trị gì?",
            "options": [
                "OF = 0",
                "OF = 1 (do tràn số vì số 128 không biểu diễn được trong 8-bit có dấu)",
                "OF không thay đổi",
                "OF nhận giá trị ngẫu nhiên"
            ],
            "answer": 1,
            "explanation": "0 - (-128) = +128. Nhưng TMax8 chỉ là 127, do đó xảy ra hiện tượng tràn số có dấu, cờ OF được bật lên 1."
        },
        {
            "id": 156,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Một lệnh nhảy có điều kiện `jcc` trong mã máy x86-64 thường mã hóa địa chỉ đích theo phương thức nào?",
            "options": [
                "Địa chỉ tuyệt đối 64-bit",
                "Địa chỉ tương đối so với con trỏ lệnh PC (%rip) hiện tại (PC-relative addressing)",
                "Địa chỉ cơ sở của bảng ngắt",
                "Chỉ số hàng trong bảng cache"
            ],
            "answer": 1,
            "explanation": "Các lệnh jmp/jcc thường dùng cơ chế định vị PC-relative (khoảng cách offset từ lệnh tiếp theo đến nhãn đích), giúp mã lệnh có tính tái định vị cao và nhỏ gọn (thường chỉ tốn 1 hoặc 4 byte cho offset)."
        },
        {
            "id": 157,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Tại sao một cấu trúc if-else đơn giản khi biên dịch với `gcc -O2` thường chuyển thành `cmov` thay vì `jmp`?",
            "options": [
                "Vì GCC ở mức -O2 ưu tiên triệt tiêu các lệnh rẽ nhánh để tối đa hóa hiệu năng pipeline của CPU",
                "Vì cmov dùng ít RAM hơn",
                "Vì lệnh jmp không chạy được ở 64-bit",
                "Vì -O2 không hỗ trợ nhãn label"
            ],
            "answer": 0,
            "explanation": "Tối ưu hóa mức -O2 tập trung vào hiệu năng thực thi: việc thay thế nhánh nhảy bằng cmov loại bỏ hoàn toàn khả năng branch misprediction."
        },
        {
            "id": 158,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Khi thực hiện lệnh `subq %rax, %rax`, trạng thái của 4 cờ (CF, ZF, SF, OF) sẽ là gì?",
            "options": [
                "CF = 0, ZF = 1, SF = 0, OF = 0",
                "CF = 1, ZF = 1, SF = 0, OF = 0",
                "CF = 0, ZF = 0, SF = 0, OF = 0",
                "CF = 0, ZF = 1, SF = 1, OF = 0"
            ],
            "answer": 0,
            "explanation": "%rax - %rax = 0: kết quả bằng 0 nên ZF = 1, không âm nên SF = 0, không có mượn nên CF = 0, không tràn số nên OF = 0."
        },
        {
            "id": 159,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Trong vòng lặp for `for (init; test; update) body;`, thành phần `update` (bước nhảy) được thực thi vào thời điểm nào?",
            "options": [
                "Trước khi chạy body",
                "Sau mỗi lần thực thi xong body và trước lần kiểm tra test tiếp theo",
                "Chỉ thực thi 1 lần duy nhất khi kết thúc vòng lặp",
                "Đồng thời cùng lúc với init"
            ],
            "answer": 1,
            "explanation": "Thứ tự vòng for: 1. init -> 2. kiểm tra test -> 3. thực thi body -> 4. thực thi update -> quay lại bước 2."
        },
        {
            "id": 160,
            "chapter": 4,
            "chapterName": "Control Flow & Jumps",
            "question": "Nếu trong câu lệnh switch có một case không có lệnh `break` và không có nhãn kế tiếp, luồng thực thi sẽ làm gì?",
            "options": [
                "Tự động thoát khỏi switch",
                "Tiếp tục thực thi mã lệnh của case nằm ngay phía dưới nó trong bộ nhớ (fall-through)",
                "Báo lỗi ngắt thực thi",
                "Quay lại case đầu tiên"
            ],
            "answer": 1,
            "explanation": "Đây là hành vi fall-through tự nhiên của switch: CPU chạy tuần tự từ trên xuống dưới cho đến khi gặp lệnh jmp (break) hoặc hết cấu trúc."
        }
    ]
