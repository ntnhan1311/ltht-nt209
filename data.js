// NT209 - Lập Trình Hệ Thống: CSDL Lý Thuyết & 270 Câu Hỏi Ôn Tập
// Tự động tổng hợp từ bài giảng môn học

const THEORY_DATA = [
  {
    "id": "ch1",
    "number": 1,
    "title": "Chương 1: Tổng Quan Hệ Thống & Quá Trình Biên Dịch",
    "badge": "Tổng quan & Biên dịch",
    "summary": "Các thực tế phần cứng, chu trình dịch mã nguồn C sang mã máy, kiến trúc phân cấp bộ nhớ và các lớp trừu tượng của Hệ điều hành.",
    "sections": [
      {
        "title": "1. Các thực tế trong lập trình hệ thống",
        "content": "\n<h4>1.1. Ints không phải là số nguyên toán học, Floats không phải là số thực</h4>\n<ul>\n  <li><b>Số nguyên (Ints):</b> Bị giới hạn về số bit (thường 32-bit hoặc 64-bit). Có hiện tượng tràn số (overflow).\n    <br><i>Ví dụ:</i> Trong kiểu <code>int</code> 32-bit có dấu, <code>40000 * 40000 = 1600000000</code>; nhưng <code>50000 * 50000 = -1794967296</code> (do tràn số dương thành âm).\n    <br>Biểu thức <code>x * x >= 0</code> không phải lúc nào cũng đúng với số nguyên!\n  </li>\n  <li><b>Số thực dấu phẩy động (Floats):</b> Có miền giá trị lớn hơn nhưng độ chính xác hữu hạn (xấp xỉ). Không có tính chất kết hợp toán học tuyệt đối:\n    <br><code>(3.14 + 1e20) - 1e20 = 0.0</code> (do 3.14 bị mất mát độ chính xác khi cộng với số quá lớn), nhưng <code>3.14 + (1e20 - 1e20) = 3.14</code>.\n  </li>\n</ul>\n\n<h4>1.2. Lỗi tham chiếu bộ nhớ (Memory Referencing Bugs)</h4>\n<ul>\n  <li>C không kiểm tra biên mảng (no bounds checking). Ghi vượt biên mảng có thể làm hỏng biến lân cận, làm sai lệch trạng thái hoặc crash chương trình (Segmentation Fault).</li>\n  <li>Hiện tượng lỗi có thể phụ thuộc vào cờ tối ưu hóa của trình biên dịch (ví dụ chạy bình thường ở <code>-O0</code> nhưng crash ở <code>-O2</code> hoặc ngược lại).</li>\n  <li>Bộ nhớ động (Dynamic memory): rò rỉ bộ nhớ (memory leak), giải phóng 2 lần (double free), sử dụng con trỏ lơ lửng (dangling pointer / use-after-free).</li>\n</ul>\n\n<h4>1.3. Hiệu suất hệ thống & Tối ưu hóa</h4>\n<ul>\n  <li>Tối ưu thuật toán là chưa đủ; cấu trúc truy cập bộ nhớ ảnh hưởng cực lớn đến tốc độ do bộ nhớ đệm (Cache).</li>\n  <li>Truy cập tuần tự theo dòng (Row-major) tận dụng tốt tính cục bộ không gian (Spatial locality), nhanh hơn gấp nhiều lần so với truy cập theo cột (Column-major) gây cache miss liên tục.</li>\n</ul>\n"
      },
      {
        "title": "2. Quá trình biên dịch chương trình C (Compilation Pipeline)",
        "content": "\n<p>Lệnh <code>gcc -O2 -o hello hello.c</code> trải qua 4 giai đoạn chính:</p>\n<table class=\"table-theory\">\n  <thead>\n    <tr><th>Giai đoạn</th><th>Công cụ</th><th>Đầu vào</th><th>Đầu ra</th><th>Ý nghĩa</th></tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><b>1. Tiền xử lý (Preprocessing)</b></td>\n      <td><code>cpp</code> (gcc -E)</td>\n      <td><code>hello.c</code></td>\n      <td><code>hello.i</code> (Text)</td>\n      <td>Chèn nội dung các header <code>#include</code>, mở rộng macro <code>#define</code>, bỏ chú thích.</td>\n    </tr>\n    <tr>\n      <td><b>2. Biên dịch (Compilation)</b></td>\n      <td><code>cc1</code> (gcc -S)</td>\n      <td><code>hello.i</code></td>\n      <td><code>hello.s</code> (Text)</td>\n      <td>Dịch mã nguồn C sang mã hợp ngữ (Assembly language, ví dụ x86-64).</td>\n    </tr>\n    <tr>\n      <td><b>3. Hợp dịch (Assembly)</b></td>\n      <td><code>as</code> (gcc -c)</td>\n      <td><code>hello.s</code></td>\n      <td><code>hello.o</code> (Binary)</td>\n      <td>Chuyển mã hợp ngữ thành mã máy nhị phân có thể tái định vị (Relocatable Object Program).</td>\n    </tr>\n    <tr>\n      <td><b>4. Liên kết (Linking)</b></td>\n      <td><code>ld</code> (gcc -o)</td>\n      <td><code>hello.o</code> + libs</td>\n      <td><code>hello</code> (Binary)</td>\n      <td>Kết hợp các file object và thư viện chuẩn (như <code>printf</code>) thành file thực thi hoàn chỉnh (Executable).</td>\n    </tr>\n  </tbody>\n</table>\n<div class=\"note-box\">\n  <b>💡 Lệnh hữu ích:</b>\n  <ul>\n    <li><code>gcc -E hello.c -o hello.i</code> : Dừng sau bước tiền xử lý</li>\n    <li><code>gcc -S hello.c -o hello.s</code> : Dừng sau bước sinh mã hợp ngữ</li>\n    <li><code>gcc -c hello.c -o hello.o</code> : Dừng sau bước sinh object code nhị phân</li>\n    <li><code>objdump -d hello.o</code> hoặc <code>objdump -d hello</code> : Dịch ngược (Disassemble) mã máy về hợp ngữ</li>\n  </ul>\n</div>\n"
      },
      {
        "title": "3. Kiến trúc phần cứng & Phân cấp bộ nhớ (Memory Hierarchy)",
        "content": "\n<h4>3.1. Các thành phần phần cứng cơ bản</h4>\n<ul>\n  <li><b>CPU (Central Processing Unit):</b> Chứa PC (Program Counter), Register File (tập thanh ghi), ALU (Arithmetic Logic Unit).</li>\n  <li><b>Buses:</b> Kênh truyền dữ liệu (thường chuyển theo cụm từ nhớ - word: 4 byte hoặc 8 byte).</li>\n  <li><b>Main Memory (Bộ nhớ chính):</b> Mảng các byte liên tiếp lưu trữ chương trình và dữ liệu khi chạy.</li>\n</ul>\n\n<h4>3.2. Kim tự tháp phân cấp bộ nhớ (Memory Hierarchy)</h4>\n<p>Bộ nhớ càng gần CPU thì tốc độ càng nhanh, dung lượng càng nhỏ và chi phí trên mỗi bit càng đắt:</p>\n<ol>\n  <li><b>L0 - Registers:</b> Nằm ngay trong CPU, truy xuất trong 0 chu kỳ xung nhịp.</li>\n  <li><b>L1 Cache (SRAM):</b> Nằm trong lõi CPU, truy xuất 1-4 chu kỳ, vài chục KB.</li>\n  <li><b>L2 Cache (SRAM):</b> Nằm gần lõi, truy xuất ~10 chu kỳ, vài trăm KB đến vài MB.</li>\n  <li><b>L3 Cache (SRAM):</b> Dùng chung giữa các lõi, truy xuất 30-50 chu kỳ, vài chục MB.</li>\n  <li><b>L4 - Main Memory (DRAM):</b> Truy xuất ~100-200 chu kỳ, vài GB đến hàng chục GB.</li>\n  <li><b>L5 - Secondary Storage (SSD / HDD):</b> Truy xuất hàng trăm ngàn đến hàng triệu chu kỳ xung nhịp.</li>\n</ol>\n\n<h4>3.3. Nguyên lý cục bộ (Locality)</h4>\n<ul>\n  <li><b>Tính cục bộ theo thời gian (Temporal Locality):</b> Một ô nhớ vừa được truy xuất có khả năng cao sẽ được truy xuất lại trong tương lai gần (ví dụ biến đếm vòng lặp).</li>\n  <li><b>Tính cục bộ theo không gian (Spatial Locality):</b> Nếu một ô nhớ được truy xuất, các ô nhớ có địa chỉ kế cận nó sẽ có khả năng cao được truy xuất tiếp theo (ví dụ duyệt mảng liên tục theo thứ tự tăng dần).</li>\n</ul>\n"
      },
      {
        "title": "4. Các tầng trừu tượng của Hệ điều hành",
        "content": "\n<p>Hệ điều hành đóng vai trò trung gian giữa phần mềm và phần cứng thông qua các tầng trừu tượng:</p>\n<ul>\n  <li><b>Tập tin (Files):</b> Là sự trừu tượng hóa của các thiết bị Nhập/Xuất (I/O Devices). Mọi thiết bị (bàn phím, màn hình, mạng, đĩa) đều được xem là một chuỗi các byte.</li>\n  <li><b>Bộ nhớ ảo (Virtual Memory):</b> Trừu tượng hóa bộ nhớ chính và thiết bị I/O. Cung cấp cho mỗi tiến trình một không gian địa chỉ ảo liên tục, riêng biệt và đồng nhất.</li>\n  <li><b>Tiến trình (Processes):</b> Trừu tượng hóa toàn bộ hệ thống gồm CPU, bộ nhớ chính và thiết bị I/O. Cho mỗi chương trình cảm giác nó đang độc chiếm toàn bộ máy tính.</li>\n  <li><b>Tiểu trình (Threads):</b> Đơn vị thực thi nhỏ hơn nằm trong một tiến trình, dùng chung không gian địa chỉ và tài nguyên của tiến trình đó.</li>\n  <li><b>Chế độ thực thi:</b> <i>Kernel Mode</i> (đặc quyền, truy xuất toàn bộ phần cứng) và <i>User Mode</i> (hạn chế). Chương trình người dùng muốn truy xuất phần cứng phải thông qua Lời gọi hệ thống (System Calls).</li>\n</ul>\n"
      }
    ]
  },
  {
    "id": "ch2",
    "number": 2,
    "title": "Chương 2: Biểu Diễn Thông Tin & Số Nguyên",
    "badge": "Bits, Bytes & Integers",
    "summary": "Hệ nhị phân/hex, phép toán bit, số nguyên không dấu B2U, số nguyên có dấu bù 2 B2T, ép kiểu, mở rộng/cắt gọt bit, tràn số, phép nhân/chia lũy thừa 2 và thứ tự byte Little/Big Endian.",
    "sections": [
      {
        "title": "1. Biểu diễn số & Phép toán Bit",
        "content": "\n<h4>1.1. Byte và Hệ Thập Lục Phân (Hexadecimal)</h4>\n<ul>\n  <li>1 Byte = 8 bits. Trong hệ Hex, 1 ký số đại diện cho đúng 4 bits (nibble).</li>\n  <li>1 Byte có giá trị từ <code>0x00</code> (0) đến <code>0xFF</code> (255 nhị phân <code>11111111_2</code>).</li>\n  <li>Mẹo chuyển đổi: <code>0xA = 10 (1010)</code>, <code>0xB = 11 (1011)</code>, <code>0xC = 12 (1100)</code>, <code>0xD = 13 (1101)</code>, <code>0xE = 14 (1110)</code>, <code>0xF = 15 (1111)</code>.</li>\n</ul>\n\n<h4>1.2. Phép toán Bit-wise vs Logic trong C</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Thao tác</th><th>Toán tử Bit-wise</th><th>Toán tử Logic (Boolean)</th></tr></thead>\n  <tbody>\n    <tr><td>AND</td><td><code>&</code> (từng bit)</td><td><code>&&</code> (kết quả 0 hoặc 1, short-circuit)</td></tr>\n    <tr><td>OR</td><td><code>|</code> (từng bit)</td><td><code>||</code> (kết quả 0 hoặc 1, short-circuit)</td></tr>\n    <tr><td>NOT</td><td><code>~</code> (đảo từng bit)</td><td><code>!</code> (0 thành 1, khác 0 thành 0)</td></tr>\n    <tr><td>XOR</td><td><code>^</code> (từng bit)</td><td>Không có toán tử logic tương đương</td></tr>\n  </tbody>\n</table>\n<div class=\"note-box\">\n  <b>Tính chất đặc biệt của XOR (^):</b>\n  <ul>\n    <li><code>x ^ 0 = x</code> ; <code>x ^ x = 0</code></li>\n    <li>Hoán đổi 2 số không dùng biến phụ: <code>x = x ^ y; y = x ^ y; x = x ^ y;</code></li>\n  </ul>\n</div>\n\n<h4>1.3. Phép Dịch Bit (Shift Operations)</h4>\n<ul>\n  <li><b>Dịch trái (<code>x &lt;&lt; k</code>):</b> Đẩy bit sang trái k vị trí, luôn lấp các vị trí trống bên phải bằng số <b>0</b>. Tương đương nhân với 2<sup>k</sup> (modulo 2<sup>w</sup>).</li>\n  <li><b>Dịch phải logic (<code>x &gt;&gt; k</code>):</b> Lấp các vị trí trống bên trái bằng số <b>0</b>. Dùng cho số <b>không dấu (unsigned)</b>.</li>\n  <li><b>Dịch phải số học (<code>x &gt;&gt; k</code>):</b> Lấp các vị trí trống bên trái bằng <b>bit dấu (MSB)</b>. Dùng cho số <b>có dấu (signed)</b> để giữ nguyên dấu âm/dương.</li>\n  <li><b>Quy tắc mod w:</b> Với biến w-bit, nếu dịch k bit với k &gt;= w, vi xử lý x86-64 chỉ dịch <code>k mod w</code> bit (ví dụ kiểu int 32-bit thì <code>x &lt;&lt; 36</code> tương đương <code>x &lt;&lt; 4</code>).</li>\n</ul>\n"
      },
      {
        "title": "2. Biểu diễn số nguyên: Không dấu (B2U) & Bù 2 (B2T)",
        "content": "\n<h4>2.1. Công thức trọng số</h4>\n<ul>\n  <li><b>Không dấu (Unsigned - B2U):</b> \n    <br><code>B2U(X) = &sum;<sub>i=0</sub><sup>w-1</sup> x<sub>i</sub> &times; 2<sup>i</sup></code>\n    <br>Miền giá trị: <code>[0, 2<sup>w</sup> - 1]</code> (UMin = 0, UMax = 2<sup>w</sup> - 1).\n  </li>\n  <li><b>Bù 2 (Two's Complement - B2T):</b>\n    <br><code>B2T(X) = -x<sub>w-1</sub> &times; 2<sup>w-1</sup> + &sum;<sub>i=0</sub><sup>w-2</sup> x<sub>i</sub> &times; 2<sup>i</sup></code>\n    <br>Bit cao nhất (MSB) có trọng số âm <code>-2<sup>w-1</sup></code> đóng vai trò là bit dấu (0 là dương, 1 là âm).\n    <br>Miền giá trị: <code>[-2<sup>w-1</sup>, 2<sup>w-1</sup> - 1]</code> (TMin = -2<sup>w-1</sup>, TMax = 2<sup>w-1</sup> - 1).\n  </li>\n</ul>\n\n<h4>2.2. Bảng giá trị cực trị theo số bit</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Tham số</th><th>8-bit (Byte)</th><th>16-bit (Word)</th><th>32-bit (Int / DWord)</th><th>64-bit (Long / QWord)</th></tr></thead>\n  <tbody>\n    <tr><td><b>UMax</b></td><td>255 (0xFF)</td><td>65,535 (0xFFFF)</td><td>4,294,967,295 (0xFFFFFFFF)</td><td>2<sup>64</sup> - 1 (0xFFFF...FFFF)</td></tr>\n    <tr><td><b>TMax</b></td><td>127 (0x7F)</td><td>32,767 (0x7FFF)</td><td>2,147,483,647 (0x7FFFFFFF)</td><td>2<sup>63</sup> - 1 (0x7FFF...FFFF)</td></tr>\n    <tr><td><b>TMin</b></td><td>-128 (0x80)</td><td>-32,768 (0x8000)</td><td>-2,147,483,648 (0x80000000)</td><td>-2<sup>63</sup> (0x8000...0000)</td></tr>\n    <tr><td><b>-1</b></td><td>0xFF</td><td>0xFFFF</td><td>0xFFFFFFFF</td><td>0xFFFFFFFF_FFFFFFFF</td></tr>\n  </tbody>\n</table>\n\n<div class=\"note-box\">\n  <b>Các quan hệ cốt lõi:</b>\n  <ul>\n    <li><code>|TMin| = TMax + 1</code> (Bất đối xứng: số âm nhiều hơn số dương 1 đơn vị).</li>\n    <li><code>UMax = 2 &times; TMax + 1</code>.</li>\n    <li>Số đối bù 2: <code>-x = ~x + 1</code>.</li>\n    <li><b>Trường hợp đặc biệt:</b> <code>-TMin = TMin</code> (do TMin không có số dương đối xứng trong phạm vi w bit, nên đảo dấu vẫn ra chính nó!).</li>\n  </ul>\n</div>\n"
      },
      {
        "title": "3. Ép kiểu (Casting), Mở rộng & Cắt gọt bit",
        "content": "\n<h4>3.1. Ép kiểu giữa Signed và Unsigned</h4>\n<ul>\n  <li>Khi ép kiểu giữa Signed và Unsigned có <b>cùng kích thước bit</b>, chuỗi bit trong bộ nhớ <b>không đổi</b>, chỉ thay đổi cách vi xử lý diễn giải giá trị.</li>\n  <li><b>Cạm bẫy ngầm định trong C:</b> Nếu một biểu thức chứa cả <code>signed</code> và <code>unsigned</code>, C sẽ <b>ngầm định ép signed sang unsigned</b>!\n    <br><i>Ví dụ kinh điển:</i>\n    <br><code>-1 &lt; 0U</code> &rarr; <b>SAI (False)!</b> Vì <code>-1</code> bị ép thành <code>unsigned int</code> mang giá trị <code>UMax = 4294967295</code>, mà <code>4294967295 &lt; 0</code> là sai.\n    <br><code>2147483647U &gt; -2147483648</code> &rarr; <b>SAI!</b> Vì <code>-2147483648</code> ép sang unsigned thành <code>2147483648U</code> lớn hơn <code>2147483647U</code>.\n  </li>\n</ul>\n\n<h4>3.2. Mở rộng bit (Expansion)</h4>\n<ul>\n  <li><b>Zero Extension (Số không dấu):</b> Thêm các bit 0 vào phía trước (bên trái). Giá trị số học không đổi.</li>\n  <li><b>Sign Extension (Số có dấu bù 2):</b> Lặp lại bit dấu (MSB) vào toàn bộ các bit phía trước. Giá trị số học không đổi.\n    <br><i>Ví dụ 8-bit lên 16-bit:</i> <code>-5</code> trong 8-bit là <code>0xFB</code> (<code>11111011</code>). Mở rộng dấu thành 16-bit là <code>0xFFFB</code> (vẫn là -5).\n  </li>\n  <li><b>Thứ tự ưu tiên:</b> Nếu vừa đổi kích thước vừa đổi kiểu (ví dụ từ <code>short</code> sang <code>unsigned int</code>), C thực hiện mở rộng kích thước trước (Sign Extension), sau đó mới chuyển đổi kiểu sang Unsigned.</li>\n</ul>\n\n<h4>3.3. Cắt gọt bit (Truncation)</h4>\n<ul>\n  <li>Khi ép từ kiểu kích thước lớn về kiểu nhỏ hơn (ví dụ <code>int</code> 32-bit về <code>short</code> 16-bit), hệ thống cắt bỏ các bit cao, chỉ giữ lại w bit thấp.</li>\n  <li>Toán học: Giá trị mới = <code>Giá trị cũ mod 2<sup>w</sup></code>.</li>\n</ul>\n"
      },
      {
        "title": "4. Phép toán số học, Tràn số & Thứ tự Byte (Endianness)",
        "content": "\n<h4>4.1. Phát hiện tràn số (Overflow Detection)</h4>\n<ul>\n  <li><b>Cộng không dấu:</b> Tràn số xảy ra khi tổng <code>s = x + y &lt; x</code> (kết quả bị wrap-around quanh 2<sup>w</sup>).</li>\n  <li><b>Cộng có dấu bù 2:</b>\n    <ul>\n      <li><i>Tràn số dương (Positive Overflow):</i> <code>x &gt; 0, y &gt; 0</code> nhưng kết quả <code>s &le; 0</code>.</li>\n      <li><i>Tràn số âm (Negative Overflow):</i> <code>x &lt; 0, y &lt; 0</code> nhưng kết quả <code>s &ge; 0</code>.</li>\n      <li><i>Không bao giờ tràn:</i> Khi hai số khác dấu (một dương, một âm).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>4.2. Phép nhân và chia với lũy thừa 2 (2<sup>k</sup>)</h4>\n<ul>\n  <li><b>Nhân với 2<sup>k</sup>:</b> <code>x * 2<sup>k</sup> = x &lt;&lt; k</code> (áp dụng cho cả signed và unsigned).</li>\n  <li><b>Chia không dấu với 2<sup>k</sup>:</b> <code>x / 2<sup>k</sup> = x &gt;&gt; k</code> (dịch phải logic).</li>\n  <li><b>Chia có dấu với 2<sup>k</sup> làm tròn về 0:</b>\n    <ul>\n      <li>Nếu <code>x &ge; 0</code>: <code>x &gt;&gt; k</code> (dịch phải số học).</li>\n      <li>Nếu <code>x &lt; 0</code>: Dịch phải số học thông thường làm tròn xuống (-&infin;). Để làm tròn về 0 đúng chuẩn C, cần cộng thêm lượng thiên lệch (Bias): <code>bias = (1 &lt;&lt; k) - 1</code>.\n        <br>Công thức chuẩn: <code>(x + (1 &lt;&lt; k) - 1) &gt;&gt; k</code>.\n      </li>\n    </ul>\n  </li>\n</ul>\n\n<h4>4.3. Thứ tự Byte (Byte Ordering / Endianness)</h4>\n<p>Xét số nguyên 32-bit (4 bytes): <code>0x01234567</code> lưu tại địa chỉ cơ sở <code>0x100</code>:</p>\n<table class=\"table-theory\">\n  <thead><tr><th>Kiến trúc</th><th>Địa chỉ 0x100</th><th>Địa chỉ 0x101</th><th>Địa chỉ 0x102</th><th>Địa chỉ 0x103</th><th>Đặc điểm</th></tr></thead>\n  <tbody>\n    <tr><td><b>Little Endian</b> (x86, ARM)</td><td><b>0x67</b> (LSB)</td><td>0x45</td><td>0x23</td><td><b>0x01</b> (MSB)</td><td>Byte trọng số thấp (LSB) ở địa chỉ thấp nhất.</td></tr>\n    <tr><td><b>Big Endian</b> (Network, SPARC)</td><td><b>0x01</b> (MSB)</td><td>0x23</td><td>0x45</td><td><b>0x67</b> (LSB)</td><td>Byte trọng số cao (MSB) ở địa chỉ thấp nhất.</td></tr>\n  </tbody>\n</table>\n"
      }
    ]
  },
  {
    "id": "ch3",
    "number": 3,
    "title": "Chương 3: Hợp Ngữ x86-64 Cơ Bản",
    "badge": "Machine Basics & Registers",
    "summary": "Tập 16 thanh ghi x86-64, kích thước dữ liệu, các dạng toán hạng định vị địa chỉ, lệnh MOV/LEAQ và các phép tính số học logic cơ bản.",
    "sections": [
      {
        "title": "1. Kiến trúc x86-64 & Tập 16 Thanh ghi",
        "content": "\n<h4>1.1. Khái niệm cơ bản</h4>\n<ul>\n  <li><b>ISA (Instruction Set Architecture):</b> Giao diện lập trình giữa phần cứng và phần mềm (tập lệnh, thanh ghi, quản lý bộ nhớ). x86 thuộc họ CISC (tập lệnh phức tạp, độ dài lệnh thay đổi).</li>\n  <li><b>Quy ước cú pháp:</b> Cú pháp GNU / AT&T (dùng trong Linux/GCC): toán hạng nguồn đứng trước, toán hạng đích đứng sau: <code>op Source, Dest</code>; thanh ghi có tiền tố <code>%</code>, hằng số có tiền tố <code>$</code>.</li>\n</ul>\n\n<h4>1.2. Bảng 16 Thanh ghi đa năng x86-64</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>64-bit</th><th>32-bit thấp</th><th>16-bit thấp</th><th>8-bit thấp</th><th>Vai trò đặc biệt trong ABI</th></tr></thead>\n  <tbody>\n    <tr><td><code>%rax</code></td><td><code>%eax</code></td><td><code>%ax</code></td><td><code>%al</code></td><td>Giá trị trả về của hàm (Return value)</td></tr>\n    <tr><td><code>%rdi</code></td><td><code>%edi</code></td><td><code>%di</code></td><td><code>%dil</code></td><td>Tham số 1 của hàm (1st Argument)</td></tr>\n    <tr><td><code>%rsi</code></td><td><code>%esi</code></td><td><code>%si</code></td><td><code>%sil</code></td><td>Tham số 2 của hàm (2nd Argument)</td></tr>\n    <tr><td><code>%rdx</code></td><td><code>%edx</code></td><td><code>%dx</code></td><td><code>%dl</code></td><td>Tham số 3 của hàm (3rd Argument)</td></tr>\n    <tr><td><code>%rcx</code></td><td><code>%ecx</code></td><td><code>%cx</code></td><td><code>%cl</code></td><td>Tham số 4 của hàm (4th Argument)</td></tr>\n    <tr><td><code>%r8</code></td><td><code>%r8d</code></td><td><code>%r8w</code></td><td><code>%r8b</code></td><td>Tham số 5 của hàm (5th Argument)</td></tr>\n    <tr><td><code>%r9</code></td><td><code>%r9d</code></td><td><code>%r9w</code></td><td><code>%r9b</code></td><td>Tham số 6 của hàm (6th Argument)</td></tr>\n    <tr><td><code>%rsp</code></td><td><code>%esp</code></td><td><code>%sp</code></td><td><code>%spl</code></td><td>Con trỏ đỉnh ngăn xếp (Stack Pointer)</td></tr>\n    <tr><td><code>%rbp</code></td><td><code>%ebp</code></td><td><code>%bp</code></td><td><code>%bpl</code></td><td>Con trỏ khung ngăn xếp (Frame Pointer / Callee-saved)</td></tr>\n    <tr><td><code>%rbx</code></td><td><code>%ebx</code></td><td><code>%bx</code></td><td><code>%bl</code></td><td>Callee-saved register</td></tr>\n    <tr><td><code>%r10</code></td><td><code>%r10d</code></td><td><code>%r10w</code></td><td><code>%r10b</code></td><td>Caller-saved register</td></tr>\n    <tr><td><code>%r11</code></td><td><code>%r11d</code></td><td><code>%r11w</code></td><td><code>%r11b</code></td><td>Caller-saved register</td></tr>\n    <tr><td><code>%r12..15</code></td><td><code>%r12d..15d</code></td><td><code>%r12w..15w</code></td><td><code>%r12b..15b</code></td><td>Callee-saved registers</td></tr>\n  </tbody>\n</table>\n\n<div class=\"note-box alert\">\n  <b>⚠️ QUY TẮC VÀNG VỀ GHI THANH GHI 32-BIT:</b>\n  <br>Trong x86-64, bất kỳ lệnh nào ghi dữ liệu vào thanh ghi 32-bit (ví dụ <code>movl %edx, %eax</code>) sẽ <b>TỰ ĐỘNG XÓA (ZERO OUT) TOÀN BỘ 32-BIT CAO CỦA THANH GHI 64-BIT TƯƠNG ỨNG (%rax) VỀ 0!</b>\n  <br>Ngược lại, lệnh ghi vào thanh ghi 8-bit hoặc 16-bit giữ nguyên các bit cao còn lại.\n</div>\n"
      },
      {
        "title": "2. Kích thước dữ liệu & Các dạng toán hạng",
        "content": "\n<h4>2.1. Hậu tố kích thước dữ liệu (Data Sizes)</h4>\n<ul>\n  <li><code>b</code>: Byte (1 byte = 8 bits, kiểu C: <code>char</code>)</li>\n  <li><code>w</code>: Word (2 bytes = 16 bits, kiểu C: <code>short</code>)</li>\n  <li><code>l</code>: Double Word / Long (4 bytes = 32 bits, kiểu C: <code>int</code>, con trỏ trong 32-bit)</li>\n  <li><code>q</code>: Quad Word (8 bytes = 64 bits, kiểu C: <code>long</code>, <code>char*</code> - con trỏ trong 64-bit)</li>\n</ul>\n\n<h4>2.2. Các dạng toán hạng (Operand Forms)</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Dạng toán hạng</th><th>Cú pháp AT&T</th><th>Giá trị / Địa chỉ</th><th>Ví dụ</th></tr></thead>\n  <tbody>\n    <tr><td><b>Immediate (Tức thì)</b></td><td><code>$Imm</code></td><td>Giá trị hằng số <code>Imm</code></td><td><code>$0x400</code>, <code>$-5</code></td></tr>\n    <tr><td><b>Register (Thanh ghi)</b></td><td><code>E<sub>a</sub></code></td><td>Giá trị trong thanh ghi <code>R[E<sub>a</sub>]</code></td><td><code>%rax</code>, <code>%edx</code></td></tr>\n    <tr><td><b>Memory: Tuyệt đối</b></td><td><code>Imm</code></td><td><code>M[Imm]</code></td><td><code>0x104</code></td></tr>\n    <tr><td><b>Memory: Gián tiếp qua thanh ghi</b></td><td><code>(E<sub>b</sub>)</code></td><td><code>M[R[E<sub>b</sub>]]</code></td><td><code>(%rax)</code></td></tr>\n    <tr><td><b>Memory: Cơ sở + Độ lệch</b></td><td><code>Imm(E<sub>b</sub>)</code></td><td><code>M[Imm + R[E<sub>b</sub>]]</code></td><td><code>8(%rbp)</code>, <code>-16(%rsp)</code></td></tr>\n    <tr><td><b>Memory: Tổng quát đầy đủ</b></td><td><code>Imm(E<sub>b</sub>, E<sub>i</sub>, s)</code></td><td><code>M[Imm + R[E<sub>b</sub>] + R[E<sub>i</sub>] &times; s]</code></td><td><code>4(%rdx, %rcx, 8)</code></td></tr>\n  </tbody>\n</table>\n<div class=\"note-box\">\n  <b>Hệ số tỉ lệ (Scale factor <code>s</code>):</b> Chỉ được phép nhận một trong bốn giá trị: <b>1, 2, 4, hoặc 8</b>. Thanh ghi chỉ mục <code>E<sub>i</sub></code> không được phép là <code>%rsp</code>.\n</div>\n"
      },
      {
        "title": "3. Lệnh MOV & Lệnh LEAQ",
        "content": "\n<h4>3.1. Lệnh MOV (Data Movement)</h4>\n<ul>\n  <li>Cú pháp: <code>mov[b|w|l|q] Source, Dest</code></li>\n  <li><b>LUẬT BẤT THÀNH VĂN:</b> Hai toán hạng <b>KHÔNG THỂ</b> đồng thời là ô nhớ! Lệnh như <code>movq (%rax), (%rbx)</code> là không hợp lệ (phải dùng thanh ghi trung gian).</li>\n  <li><b>Mở rộng bit khi copy:</b>\n    <ul>\n      <li><code>movzBW Src, Dest</code>: Zero-extension (lấp 0 vào các bit cao).</li>\n      <li><code>movsBW Src, Dest</code>: Sign-extension (lặp lại bit dấu vào các bit cao).</li>\n      <li><code>cltq</code>: Lệnh đặc biệt mở rộng dấu từ <code>%eax</code> thành <code>%rax</code> (tương đương <code>movslq %eax, %rax</code>).</li>\n    </ul>\n  </li>\n</ul>\n\n<h4>3.2. Lệnh LEAQ (Load Effective Address)</h4>\n<ul>\n  <li>Cú pháp: <code>leaq Src, Dest</code> (trong đó <code>Src</code> có cú pháp định vị địa chỉ bộ nhớ).</li>\n  <li><b>KHÁC BIỆT CỐT LÕI VỚI MOV:</b> <code>leaq</code> chỉ <b>tính địa chỉ</b> và gán giá trị địa chỉ đó vào thanh ghi đích, <b>HOÀN TOÀN KHÔNG TRUY XUẤT VÀO BỘ NHỚ</b> (không dereference bộ nhớ)!</li>\n  <li><b>Ứng dụng làm toán nhanh:</b> Trình biên dịch dùng <code>leaq</code> để thực hiện phép nhân với 2, 3, 4, 5, 8, 9 và phép cộng trong đúng 1 chu kỳ máy:\n    <br><code>leaq (%rdi, %rdi, 2), %rax</code> &rarr; <code>%rax = %rdi + 2 * %rdi = 3 * %rdi</code>\n    <br><code>leaq (%rdi, %rdi, 4), %rax</code> &rarr; <code>%rax = 5 * %rdi</code>\n    <br><code>leaq 7(%rdi, %rsi, 4), %rax</code> &rarr; <code>%rax = %rdi + 4 * %rsi + 7</code>\n  </li>\n</ul>\n"
      },
      {
        "title": "4. Các lệnh số học và logic",
        "content": "\n<table class=\"table-theory\">\n  <thead><tr><th>Lệnh</th><th>Ý nghĩa</th><th>Thao tác</th></tr></thead>\n  <tbody>\n    <tr><td><code>addq Src, Dest</code></td><td>Cộng</td><td><code>Dest = Dest + Src</code></td></tr>\n    <tr><td><code>subq Src, Dest</code></td><td>Trừ</td><td><code>Dest = Dest - Src</code> (Chú ý: Đích trừ Nguồn!)</td></tr>\n    <tr><td><code>imulq Src, Dest</code></td><td>Nhân có dấu</td><td><code>Dest = Dest &times; Src</code></td></tr>\n    <tr><td><code>salq k, Dest</code> / <code>shlq</code></td><td>Dịch trái</td><td><code>Dest = Dest &lt;&lt; k</code></td></tr>\n    <tr><td><code>sarq k, Dest</code></td><td>Dịch phải số học</td><td><code>Dest = Dest &gt;&gt; k</code> (chèn bit dấu)</td></tr>\n    <tr><td><code>shrq k, Dest</code></td><td>Dịch phải logic</td><td><code>Dest = Dest &gt;&gt; k</code> (chèn bit 0)</td></tr>\n    <tr><td><code>xorq Src, Dest</code></td><td>XOR</td><td><code>Dest = Dest ^ Src</code> (<code>xorl %eax, %eax</code> để reset về 0)</td></tr>\n    <tr><td><code>andq Src, Dest</code></td><td>AND</td><td><code>Dest = Dest &amp; Src</code></td></tr>\n    <tr><td><code>orq Src, Dest</code></td><td>OR</td><td><code>Dest = Dest | Src</code></td></tr>\n    <tr><td><code>incq Dest</code></td><td>Tăng 1</td><td><code>Dest = Dest + 1</code></td></tr>\n    <tr><td><code>decq Dest</code></td><td>Giảm 1</td><td><code>Dest = Dest - 1</code></td></tr>\n    <tr><td><code>negq Dest</code></td><td>Đổi dấu bù 2</td><td><code>Dest = -Dest</code></td></tr>\n    <tr><td><code>notq Dest</code></td><td>Đảo bit</td><td><code>Dest = ~Dest</code></td></tr>\n  </tbody>\n</table>\n"
      }
    ]
  },
  {
    "id": "ch4",
    "number": 4,
    "title": "Chương 4: Cấu Trúc Điều Khiển x86-64",
    "badge": "Control Flow & Jumps",
    "summary": "Cờ trạng thái Condition Codes, lệnh so sánh CMP/TEST, lệnh gán SET, các lệnh nhảy JMP/Jcc, chuyển đổi if-else, conditional move (CMOV), vòng lặp và bảng nhảy switch jump table.",
    "sections": [
      {
        "title": "1. Mã điều kiện (Condition Codes) & Lệnh CMP / TEST",
        "content": "\n<h4>1.1. Bốn cờ trạng thái 1-bit đơn lẻ (Condition Codes)</h4>\n<ul>\n  <li><b>CF (Carry Flag):</b> Cờ nhớ. Bật lên 1 khi phép toán số học không dấu (unsigned) bị tràn (có nhớ hoặc mượn ở bit MSB).</li>\n  <li><b>ZF (Zero Flag):</b> Cờ zero. Bật lên 1 khi kết quả của phép toán vừa thực hiện bằng 0.</li>\n  <li><b>SF (Sign Flag):</b> Cờ dấu. Bật lên 1 khi kết quả phép toán là số âm (bit MSB = 1).</li>\n  <li><b>OF (Overflow Flag):</b> Cờ tràn. Bật lên 1 khi phép toán số nguyên có dấu (signed bù 2) bị tràn số (dương + dương ra âm, hoặc âm + âm ra dương).</li>\n</ul>\n<div class=\"note-box\">\n  <b>Chú ý:</b> Lệnh <code>leaq</code> KHÔNG làm thay đổi bất kỳ cờ điều kiện nào!\n</div>\n\n<h4>1.2. Lệnh so sánh CMP và kiểm tra TEST</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Lệnh</th><th>Thao tác ngầm định</th><th>Tác động lên cờ</th><th>Mục đích sử dụng</th></tr></thead>\n  <tbody>\n    <tr>\n      <td><code>cmpq S<sub>2</sub>, S<sub>1</sub></code></td>\n      <td>Tính <code>S<sub>1</sub> - S<sub>2</sub></code> (không lưu kết quả)</td>\n      <td>Cập nhật CF, ZF, SF, OF theo hiệu số</td>\n      <td>So sánh hai giá trị: kiểm tra bằng nhau, lớn hơn, nhỏ hơn</td>\n    </tr>\n    <tr>\n      <td><code>testq S<sub>2</sub>, S<sub>1</sub></code></td>\n      <td>Tính <code>S<sub>1</sub> &amp; S<sub>2</sub></code> (không lưu kết quả)</td>\n      <td>Cập nhật ZF, SF (luôn xóa CF = 0, OF = 0)</td>\n      <td><code>testq %rax, %rax</code> để kiểm tra âm/dương/bằng 0; hoặc kiểm tra bitmask</td>\n    </tr>\n  </tbody>\n</table>\n"
      },
      {
        "title": "2. Lệnh SET & Các lệnh nhảy JUMP",
        "content": "\n<h4>2.1. Nhóm lệnh SET (Gán 1 byte thấp dựa trên cờ)</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Lệnh</th><th>Tên gọi</th><th>Điều kiện cờ</th><th>Diễn giải</th></tr></thead>\n  <tbody>\n    <tr><td><code>sete / setz</code></td><td>Equal / Zero</td><td><code>ZF</code></td><td>Bằng nhau / Kết quả bằng 0</td></tr>\n    <tr><td><code>setne / setnz</code></td><td>Not Equal</td><td><code>~ZF</code></td><td>Khác nhau / Khác 0</td></tr>\n    <tr><td><code>sets / setns</code></td><td>Sign / Not Sign</td><td><code>SF / ~SF</code></td><td>Số âm / Số không âm</td></tr>\n    <tr><td><code>setg / setnle</code></td><td>Greater (Signed)</td><td><code>~(SF ^ OF) &amp; ~ZF</code></td><td>Lớn hơn (có dấu: &gt;)</td></tr>\n    <tr><td><code>setge / setnl</code></td><td>Greater or Equal (Signed)</td><td><code>~(SF ^ OF)</code></td><td>Lớn hơn hoặc bằng (có dấu: &ge;)</td></tr>\n    <tr><td><code>setl / setnge</code></td><td>Less (Signed)</td><td><code>SF ^ OF</code></td><td>Nhỏ hơn (có dấu: &lt;)</td></tr>\n    <tr><td><code>setle / setng</code></td><td>Less or Equal (Signed)</td><td><code>(SF ^ OF) | ZF</code></td><td>Nhỏ hơn hoặc bằng (có dấu: &le;)</td></tr>\n    <tr><td><code>seta / setnbe</code></td><td>Above (Unsigned)</td><td><code>~CF &amp; ~ZF</code></td><td>Lớn hơn (không dấu)</td></tr>\n    <tr><td><code>setb / setc</code></td><td>Below (Unsigned)</td><td><code>CF</code></td><td>Nhỏ hơn (không dấu)</td></tr>\n  </tbody>\n</table>\n\n<h4>2.2. Nhóm lệnh nhảy JUMP</h4>\n<ul>\n  <li><b>Nhảy không điều kiện:</b> <code>jmp Label</code> (trực tiếp), <code>jmp *Operand</code> (gián tiếp qua con trỏ hoặc ô nhớ).</li>\n  <li><b>Nhảy có điều kiện (Jcc):</b> <code>je</code>, <code>jne</code>, <code>js</code>, <code>jns</code>, <code>jg</code>, <code>jge</code>, <code>jl</code>, <code>jle</code> (so sánh có dấu), <code>ja</code>, <code>jae</code>, <code>jb</code>, <code>jbe</code> (so sánh không dấu).</li>\n</ul>\n"
      },
      {
        "title": "3. Cấu trúc rẽ nhánh (If-Else) & Conditional Move (CMOV)",
        "content": "\n<h4>3.1. Chuyển dịch C sang Assembly theo mẫu Goto</h4>\n<pre><code>// Mã C:\nif (test)\n    then-block;\nelse\n    else-block;\n\n// Mẫu Assembly tương đương:\n    t = test;\n    if (!t) goto false_label;\n    then-block;\n    goto done;\nfalse_label:\n    else-block;\ndone:</code></pre>\n\n<h4>3.2. Lệnh Conditional Move (<code>cmov</code>)</h4>\n<ul>\n  <li>Thay vì rẽ nhánh bằng <code>jmp</code>, CPU tính toán sẵn kết quả của cả hai nhánh, sau đó dùng <code>cmovcc Src, Dest</code> để sao chép có điều kiện.</li>\n  <li><b>Ưu điểm vượt trội:</b> Tránh hiện tượng đoán sai nhánh (Branch Misprediction Penalty) trên các vi xử lý hiện đại có đường ống sâu (deep pipeline). Đoán sai nhánh có thể làm tốn 15-30 chu kỳ xung nhịp!</li>\n  <li><b>KHI NÀO KHÔNG DÙNG ĐƯỢC CMOV:</b>\n    <ul>\n      <li>Khi một nhánh có phép toán tiềm ẩn nguy cơ lỗi runtime, ví dụ: <code>val = p ? *p : 0;</code> &rarr; Không được tính sẵn <code>*p</code> vì nếu <code>p == NULL</code> sẽ gây crash chương trình (Segfault)!</li>\n      <li>Khi phép toán ở một nhánh có chi phí quá nặng (side effects lớn hoặc tính toán lâu).</li>\n    </ul>\n  </li>\n</ul>\n"
      },
      {
        "title": "4. Vòng lặp (Loops) & Bảng nhảy Switch (Jump Tables)",
        "content": "\n<h4>4.1. Các dạng chuyển đổi vòng lặp</h4>\n<ul>\n  <li><b>Do-While:</b> Dạng tự nhiên nhất trong hợp ngữ: thân vòng lặp chạy trước, kiểm tra điều kiện ở cuối và <code>jcc</code> ngược lên đầu.</li>\n  <li><b>While Loop:</b> Thường được dịch theo 2 chiến lược:\n    <ol>\n      <li><i>Jump-to-middle:</i> Nhảy không điều kiện xuống nhãn kiểm tra điều kiện ở giữa trước, nếu đúng thì nhảy lên thân lặp.</li>\n      <li><i>Guarded-do (GCC -O1):</i> Kiểm tra điều kiện ngay đầu bằng một lệnh rẽ nhánh; nếu sai thì bỏ qua, nếu đúng thì chuyển thành cấu trúc do-while.</li>\n    </ol>\n  </li>\n  <li><b>For Loop:</b> Được chuyển đổi trực tiếp về dạng <code>while</code> tương đương: khởi tạo &rarr; kiểm tra &rarr; thân lặp &rarr; cập nhật bước nhảy.</li>\n</ul>\n\n<h4>4.2. Cấu trúc Switch & Bảng nhảy (Jump Tables)</h4>\n<ul>\n  <li>Khi số lượng <code>case</code> lớn và nằm trong khoảng giá trị liên tục, trình biên dịch tạo một <b>Bảng nhảy (Jump Table)</b> - mảng các địa chỉ mã lệnh.</li>\n  <li><b>Thực thi O(1):</b> Nhảy gián tiếp bằng lệnh <code>jmp *.L4(,%rdi,8)</code>, thời gian thực thi không phụ thuộc vào số lượng case!</li>\n  <li><b>Xử lý trường hợp mặc định (default):</b> Trừ đi case nhỏ nhất, sau đó dùng phép so sánh không dấu <code>ja .Ldefault</code> để bắt cả giá trị âm và giá trị vượt quá khoảng giới hạn chỉ trong một phép kiểm tra.</li>\n  <li><b>Fall-through:</b> Khi một case không có lệnh <code>break</code>, chương trình thực thi thẳng xuống mã của case tiếp theo.</li>\n</ul>\n"
      }
    ]
  },
  {
    "id": "ch5",
    "number": 5,
    "title": "Chương 5: Thủ Tục & Lệnh Gọi Hàm x86-64",
    "badge": "Procedures, Stack & Security",
    "summary": "Cơ chế quản lý ngăn xếp, truyền tham số, quy ước bảo toàn thanh ghi Caller/Callee-saved, cấu trúc stack frame, hàm đệ quy và lỗ hổng tràn bộ đệm (Buffer Overflow).",
    "sections": [
      {
        "title": "1. Ngăn xếp (Stack) & Lệnh PUSH / POP",
        "content": "\n<h4>1.1. Cấu trúc bộ nhớ Ngăn xếp</h4>\n<ul>\n  <li>Ngăn xếp tuân theo nguyên tắc LIFO (Last-In, First-Out).</li>\n  <li><b>ĐẶC TÍNH QUAN TRỌNG:</b> Ngăn xếp trong kiến trúc x86-64 <b>phát triển về phía địa chỉ THẤP</b> (Top of stack có địa chỉ nhỏ nhất).</li>\n  <li>Thanh ghi <code>%rsp</code> (Stack Pointer) luôn trỏ tới byte đầu tiên của phần tử nằm trên đỉnh ngăn xếp.</li>\n</ul>\n\n<h4>1.2. Thao tác PUSHQ và POPQ</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Lệnh</th><th>Các bước thực thi bên dưới</th><th>Ảnh hưởng lên %rsp</th></tr></thead>\n  <tbody>\n    <tr>\n      <td><code>pushq Src</code></td>\n      <td>1. <code>%rsp = %rsp - 8</code><br>2. <code>*(%rsp) = Src</code></td>\n      <td>Giảm <code>%rsp</code> đi 8 byte (đỉnh ngăn xếp dời xuống địa chỉ thấp)</td>\n    </tr>\n    <tr>\n      <td><code>popq Dest</code></td>\n      <td>1. <code>Dest = *(%rsp)</code><br>2. <code>%rsp = %rsp + 8</code></td>\n      <td>Tăng <code>%rsp</code> lên 8 byte (đỉnh ngăn xếp dời lên địa chỉ cao)</td>\n    </tr>\n  </tbody>\n</table>\n"
      },
      {
        "title": "2. Cơ chế gọi hàm: CALL, RET & Truyền tham số",
        "content": "\n<h4>2.1. Lệnh CALL và RET</h4>\n<ul>\n  <li><b><code>call Label</code>:</b>\n    <ol>\n      <li>Đẩy địa chỉ trả về (Return Address - địa chỉ lệnh ngay sau lệnh call) vào đỉnh ngăn xếp (tương đương <code>pushq %rip</code>).</li>\n      <li>Gán địa chỉ nhãn hàm <code>Label</code> vào <code>%rip</code> để nhảy tới thực thi hàm.</li>\n    </ol>\n  </li>\n  <li><b><code>ret</code>:</b>\n    <ol>\n      <li>Lấy địa chỉ trả về từ đỉnh ngăn xếp ra (tương đương <code>popq %rip</code>).</li>\n      <li>Nhảy về tiếp tục thực thi lệnh ngay sau lệnh call ở hàm gọi.</li>\n    </ol>\n  </li>\n</ul>\n\n<h4>2.2. Quy ước truyền tham số (System V AMD64 ABI)</h4>\n<p>6 tham số số nguyên / con trỏ đầu tiên được truyền trực tiếp qua các thanh ghi theo thứ tự cố định:</p>\n<table class=\"table-theory\">\n  <thead><tr><th>Thứ tự tham số</th><th>Thanh ghi 64-bit</th><th>Thanh ghi 32-bit</th><th>Thanh ghi 16-bit</th><th>Thanh ghi 8-bit</th></tr></thead>\n  <tbody>\n    <tr><td>Tham số 1</td><td><code>%rdi</code></td><td><code>%edi</code></td><td><code>%di</code></td><td><code>%dil</code></td></tr>\n    <tr><td>Tham số 2</td><td><code>%rsi</code></td><td><code>%esi</code></td><td><code>%si</code></td><td><code>%sil</code></td></tr>\n    <tr><td>Tham số 3</td><td><code>%rdx</code></td><td><code>%edx</code></td><td><code>%dx</code></td><td><code>%dl</code></td></tr>\n    <tr><td>Tham số 4</td><td><code>%rcx</code></td><td><code>%ecx</code></td><td><code>%cx</code></td><td><code>%cl</code></td></tr>\n    <tr><td>Tham số 5</td><td><code>%r8</code></td><td><code>%r8d</code></td><td><code>%r8w</code></td><td><code>%r8b</code></td></tr>\n    <tr><td>Tham số 6</td><td><code>%r9</code></td><td><code>%r9d</code></td><td><code>%r9w</code></td><td><code>%r9b</code></td></tr>\n  </tbody>\n</table>\n<ul>\n  <li><b>Tham số thứ 7 trở đi:</b> Được đẩy lên ngăn xếp (Stack) trước khi gọi <code>call</code>.</li>\n  <li><b>Giá trị trả về của hàm:</b> Luôn được đặt trong thanh ghi <code>%rax</code> (và <code>%rdx</code> nếu trả về dữ liệu 128-bit).</li>\n</ul>\n"
      },
      {
        "title": "3. Bảo toàn thanh ghi: Caller-Saved vs Callee-Saved",
        "content": "\n<p>Để các hàm có thể phối hợp gọi nhau mà không ghi đè dữ liệu của nhau, ABI quy định rõ:</p>\n<table class=\"table-theory\">\n  <thead><tr><th>Loại</th><th>Danh sách thanh ghi</th><th>Quy ước trách nhiệm</th></tr></thead>\n  <tbody>\n    <tr>\n      <td><b>Caller-Saved</b><br>(Tạm thời / Temporary)</td>\n      <td>\n        <code>%rax</code> (return val)<br>\n        <code>%rdi, %rsi, %rdx, %rcx, %r8, %r9</code> (arguments)<br>\n        <code>%r10, %r11</code>\n      </td>\n      <td>Hàm gọi (Caller) phải tự cất vào stack nếu muốn giữ lại giá trị trước khi gọi hàm khác. Hàm được gọi (Callee) có quyền ghi đè tự do mà không cần phục hồi!</td>\n    </tr>\n    <tr>\n      <td><b>Callee-Saved</b><br>(Được bảo tồn)</td>\n      <td>\n        <code>%rbx</code><br>\n        <code>%rbp</code> (frame pointer)<br>\n        <code>%r12, %r13, %r14, %r15</code><br>\n        <code>%rsp</code> (stack pointer)\n      </td>\n      <td>Hàm được gọi (Callee) <b>BẮT BUỘC</b> phải bảo tồn giá trị gốc. Nếu Callee muốn dùng thanh ghi này, nó phải <code>push</code> cất đi ở đầu hàm và <code>pop</code> khôi phục lại nguyên vẹn trước khi <code>ret</code>.</td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>3.3. Khung ngăn xếp (Stack Frame) & Vùng đỏ (Red Zone)</h4>\n<ul>\n  <li><b>Khung ngăn xếp (Stack Frame):</b> Vùng nhớ riêng biệt trên stack cấp phát cho mỗi lần gọi hàm. Cấp phát bằng <code>subq $N, %rsp</code> và giải phóng bằng <code>addq $N, %rsp</code>.</li>\n  <li><b>Khi nào hàm cần cấp phát Stack Frame:</b>\n    <ol>\n      <li>Có quá nhiều biến cục bộ không đủ thanh ghi chứa.</li>\n      <li>Biến cục bộ là mảng hoặc struct.</li>\n      <li>Cần lấy địa chỉ của biến cục bộ (dùng toán tử <code>&</code> trong C).</li>\n      <li>Hàm gọi một hàm khác có nhiều hơn 6 tham số.</li>\n      <li>Cần cất giữ các thanh ghi Callee-saved.</li>\n    </ol>\n  </li>\n  <li><b>Vùng đỏ (Red Zone 128 byte):</b> Vùng nhớ 128 byte phía dưới <code>%rsp</code> trong x86-64 System V ABI. Các hàm lá (leaf functions - không gọi hàm nào khác) có thể tận dụng vùng này để chứa biến tạm mà không cần thay đổi con trỏ <code>%rsp</code>.</li>\n</ul>\n"
      },
      {
        "title": "4. Lỗ hổng Tràn bộ đệm (Buffer Overflow) & Các biện pháp bảo vệ",
        "content": "\n<h4>4.1. Bản chất lỗ hổng Buffer Overflow</h4>\n<ul>\n  <li>Trong C, các hàm nhập dữ liệu không an toàn như <code>gets()</code>, <code>strcpy()</code>, <code>sprintf()</code>, <code>scanf(\"%s\")</code> không kiểm tra độ dài dữ liệu nhập vào so với kích thước mảng được cấp phát trên stack.</li>\n  <li>Khi người dùng nhập chuỗi dài vượt quá kích thước mảng:\n    <br><code>Mảng cục bộ &rarr; Thanh ghi Callee-saved đã lưu &rarr; Địa chỉ trả về (Return Address)</code>\n  </li>\n  <li>Dữ liệu nhập tràn sẽ <b>ghi đè lên Return Address</b>! Kẻ tấn công thay đổi Return Address thành địa chỉ của mã độc (Shellcode) hoặc chuỗi ROP (Return-Oriented Programming) để chiếm quyền điều khiển thực thi chương trình.</li>\n</ul>\n\n<h4>4.2. Các cơ chế phòng vệ hiện đại</h4>\n<table class=\"table-theory\">\n  <thead><tr><th>Cơ chế bảo vệ</th><th>Cách thức hoạt động</th><th>Cờ GCC / Hệ thống</th></tr></thead>\n  <tbody>\n    <tr>\n      <td><b>1. Stack Canary (Stack Protector)</b></td>\n      <td>Trình biên dịch chèn một giá trị ngẫu nhiên bí mật (Canary) ngay giữa mảng cục bộ và Return Address. Trước khi lệnh <code>ret</code> chạy, chương trình kiểm tra xem Canary có bị sửa đổi không. Nếu có &rarr; lập tức ngắt chương trình (<code>__stack_chk_fail</code>).</td>\n      <td><code>-fstack-protector</code> (mặc định bật)</td>\n    </tr>\n    <tr>\n      <td><b>2. ASLR (Address Space Layout Randomization)</b></td>\n      <td>Hệ điều hành ngẫu nhiên hóa vị trí không gian địa chỉ bộ nhớ (Stack, Heap, Thư viện chia sẻ libc, Mã lệnh) mỗi lần chương trình khởi chạy, khiến kẻ tấn công không thể đoán trước địa chỉ tuyệt đối để nhảy vào.</td>\n      <td>Hệ điều hành Linux kernel quản lý</td>\n    </tr>\n    <tr>\n      <td><b>3. Non-Executable Stack (NX / W^X)</b></td>\n      <td>Phần cứng MMU đánh dấu trang nhớ vùng Stack là không có quyền thực thi (No-Execute bit). Ngăn chặn mã độc shellcode nằm trên stack được CPU thực thi trực tiếp.</td>\n      <td>Phần cứng CPU & Trình liên kết (GNU_STACK)</td>\n    </tr>\n  </tbody>\n</table>\n"
      }
    ]
  }
];

const MCQ_DATA = [
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
  },
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
  },
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
  },
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
  },
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
];

const FILL_DATA = [
  {
    "id": 1,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Chương trình tiền xử lý trong bộ công cụ GNU thực hiện việc chèn header và mở rộng macro có tên gọi là gì?",
    "answer": [
      "cpp",
      "C Preprocessor"
    ],
    "hint": "Tên viết tắt của C Preprocessor (3 chữ cái)",
    "explanation": "cpp (C Preprocessor) là trình tiền xử lý trong bộ công cụ GNU, xử lý các chỉ thị #include, #define và sinh ra file .i."
  },
  {
    "id": 2,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Tên trình biên dịch thực thụ của GCC chịu trách nhiệm chuyển đổi mã C (file .i) sang mã hợp ngữ (file .s) là gì?",
    "answer": [
      "cc1"
    ],
    "hint": "Tên chương trình compiler nội bộ của GCC (3 ký tự: cc...)",
    "explanation": "cc1 là trình biên dịch C cốt lõi của GCC nhận file .i và tạo ra file hợp ngữ .s."
  },
  {
    "id": 3,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Cờ lệnh GCC dùng để yêu cầu dừng lại ngay sau giai đoạn biên dịch sinh mã hợp ngữ (tạo file .s) là gì?",
    "answer": [
      "-S"
    ],
    "hint": "Một chữ cái viết hoa kèm dấu gạch ngang (ví dụ: -X)",
    "explanation": "Cờ `-S` chỉ đạo GCC biên dịch mã C thành mã hợp ngữ (.s) rồi dừng lại."
  },
  {
    "id": 4,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Chương trình hợp dịch (Assembler) trong bộ công cụ GNU nhận file hợp ngữ .s và sinh ra file nhị phân .o có tên là gì?",
    "answer": [
      "as"
    ],
    "hint": "Từ viết tắt của assembler (2 chữ cái)",
    "explanation": "as (GNU Assembler) thực hiện hợp dịch mã assembly .s thành object file .o."
  },
  {
    "id": 5,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Cờ lệnh GCC dùng để yêu cầu chỉ biên dịch ra file đối tượng (.o) mà không thực hiện liên kết (linking) là gì?",
    "answer": [
      "-c"
    ],
    "hint": "Dấu gạch ngang kèm một chữ cái thường",
    "explanation": "Cờ `-c` yêu cầu gcc tạo file object .o rồi dừng mà không gọi linker."
  },
  {
    "id": 6,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Chương trình liên kết (Linker) trong GNU ghép nối các file .o và thư viện thành file thực thi có tên là gì?",
    "answer": [
      "ld"
    ],
    "hint": "Tên viết tắt của Linker (2 chữ cái)",
    "explanation": "ld (GNU Linker) là trình liên kết tạo file thực thi hoàn chỉnh."
  },
  {
    "id": 7,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Lệnh dòng lệnh Linux dùng để dịch ngược mã máy nhị phân (.o hoặc executable) về lại mã hợp ngữ là gì?",
    "answer": [
      "objdump",
      "objdump -d"
    ],
    "hint": "Tiện ích bắt đầu bằng obj...",
    "explanation": "`objdump -d` (disassemble) dịch ngược mã máy thành các chỉ thị hợp ngữ x86-64."
  },
  {
    "id": 8,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Cấp bộ nhớ đệm (Cache) nhanh nhất nằm trực tiếp bên trong nhân vi xử lý có tên gọi là gì?",
    "answer": [
      "L1",
      "L1 Cache",
      "L1Cache"
    ],
    "hint": "L kèm một chữ số",
    "explanation": "L1 Cache (Level 1) nằm ngay sát ALU trong nhân CPU, có tốc độ truy xuất nhanh nhất (1-4 chu kỳ)."
  },
  {
    "id": 9,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Nguyên lý cục bộ khi một ô nhớ vừa được truy xuất có khả năng cao sẽ được truy xuất lại trong tương lai gần gọi là cục bộ theo gì?",
    "answer": [
      "thời gian",
      "temporal",
      "temporal locality"
    ],
    "hint": "Thời gian hay Không gian?",
    "explanation": "Temporal locality (cục bộ theo thời gian): dữ liệu vừa dùng sẽ sớm được tái sử dụng."
  },
  {
    "id": 10,
    "chapter": 1,
    "chapterName": "Tổng quan & Biên dịch",
    "question": "Tầng trừu tượng của Hệ điều hành đại diện cho tất cả các thiết bị Nhập/Xuất (I/O) dưới dạng một chuỗi byte gọi là gì?",
    "answer": [
      "tập tin",
      "file",
      "tệp tin"
    ],
    "hint": "Từ tiếng Anh bắt đầu bằng F (hoặc tiếng Việt: tập...)",
    "explanation": "File (Tập tin) là sự trừu tượng hóa của các thiết bị I/O trong hệ điều hành."
  },
  {
    "id": 11,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Số thập lục phân 0x2A khi chuyển đổi sang hệ thập phân (cơ số 10) có giá trị bằng bao nhiêu?",
    "answer": [
      "42"
    ],
    "hint": "Một số nguyên (2 * 16 + 10)",
    "explanation": "0x2A = 2 * 16^1 + 10 * 16^0 = 32 + 10 = 42."
  },
  {
    "id": 12,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Một Byte trong kiến trúc máy tính tiêu chuẩn bao gồm bao nhiêu bits?",
    "answer": [
      "8",
      "8 bits",
      "8 bit"
    ],
    "hint": "Một chữ số",
    "explanation": "1 Byte = 8 bits."
  },
  {
    "id": 13,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Kết quả của phép toán bit-wise XOR `0x55 ^ 0x55` biểu diễn dưới dạng thập lục phân là gì?",
    "answer": [
      "0x00",
      "0x0",
      "0",
      "00"
    ],
    "hint": "Dạng hex 0x...",
    "explanation": "Một số XOR với chính nó luôn luôn bằng 0 (0x00)."
  },
  {
    "id": 14,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Giá trị nhỏ nhất (TMin) của kiểu số nguyên có dấu 8-bit bù 2 trong hệ thập phân là bao nhiêu?",
    "answer": [
      "-128"
    ],
    "hint": "Số âm có 3 chữ số",
    "explanation": "TMin8 = -2^7 = -128 (0x80)."
  },
  {
    "id": 15,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Giá trị lớn nhất (TMax) của kiểu số nguyên có dấu 8-bit bù 2 trong hệ thập phân là bao nhiêu?",
    "answer": [
      "127"
    ],
    "hint": "Một số nguyên dương (2^7 - 1)",
    "explanation": "TMax8 = 2^7 - 1 = 127 (0x7F)."
  },
  {
    "id": 16,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Biểu diễn thập lục phân (đầy đủ 8 ký số hex) của số nguyên có dấu bù 2 mang giá trị -1 trên hệ thống 32-bit là gì?",
    "answer": [
      "0xFFFFFFFF",
      "0xffffffff"
    ],
    "hint": "0x kèm 8 chữ cái F",
    "explanation": "-1 trong hệ bù 2 có tất cả các bit là 1: 0xFFFFFFFF."
  },
  {
    "id": 17,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Biểu diễn thập lục phân (đầy đủ 8 ký số hex) của giá trị TMin trên hệ thống 32-bit bù 2 là gì?",
    "answer": [
      "0x80000000"
    ],
    "hint": "0x kèm số 8 và bảy số 0",
    "explanation": "TMin32 = -2^31 = 0x80000000 (bit MSB là 1, các bit còn lại bằng 0)."
  },
  {
    "id": 18,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Trong hệ bù 2, số đối của x được tính theo công thức: `-x = ~x + ?`. Dấu hỏi chấm là số mấy?",
    "answer": [
      "1"
    ],
    "hint": "Một chữ số",
    "explanation": "Quy tắc lấy số đối bù 2: đảo bit và cộng 1 (-x = ~x + 1)."
  },
  {
    "id": 19,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Phép toán dịch trái `x << 3` tương đương với phép nhân số nguyên x với bao nhiêu?",
    "answer": [
      "8"
    ],
    "hint": "2 lũy thừa 3",
    "explanation": "x << 3 tương đương nhân với 2^3 = 8."
  },
  {
    "id": 20,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Trong ngôn ngữ C, kết quả của biểu thức so sánh `-1 < 0U` trả về giá trị số là bao nhiêu (0 hay 1)?",
    "answer": [
      "0",
      "false"
    ],
    "hint": "Nhập 0 hoặc 1",
    "explanation": "C ép ngầm định -1 sang unsigned thành UMax (4,294,967,295). Vì 4294967295 < 0 là sai nên kết quả là 0."
  },
  {
    "id": 21,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Phép dịch phải nào lấp các vị trí trống bên trái bằng bản sao của bit dấu (MSB): Dịch phải số học hay Dịch phải logic?",
    "answer": [
      "số học",
      "dịch phải số học",
      "arithmetic",
      "arithmetic shift"
    ],
    "hint": "Số học hay Logic?",
    "explanation": "Dịch phải số học (Arithmetic right shift) giữ nguyên dấu bằng cách điền bit MSB vào các vị trí trống."
  },
  {
    "id": 22,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Trên hệ thống Little-Endian, khi lưu số 16-bit 0x1234, byte nào (0x12 hay 0x34) sẽ nằm ở địa chỉ bộ nhớ thấp hơn?",
    "answer": [
      "0x34",
      "34"
    ],
    "hint": "0x12 hoặc 0x34",
    "explanation": "Little-endian lưu byte trọng số thấp (LSB = 0x34) tại địa chỉ nhỏ nhất."
  },
  {
    "id": 23,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Mặt nạ hex 8-bit nào dùng để trích xuất 4 bit thấp (low nibble) của một byte qua phép toán AND?",
    "answer": [
      "0x0F",
      "0x0f",
      "0F",
      "0f"
    ],
    "hint": "0x0...",
    "explanation": "0x0F (nhị phân 0000 1111) giữ nguyên 4 bit thấp và xóa 4 bit cao."
  },
  {
    "id": 24,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Khi ép kiểu số nguyên từ 32-bit về 16-bit, kết quả toán học tương đương lấy số ban đầu chia lấy dư (modulo) cho 2 lũy thừa bao nhiêu?",
    "answer": [
      "16",
      "2^16"
    ],
    "hint": "Số bit của kiểu mới",
    "explanation": "Cắt gọt bit giữ lại 16 bit thấp, tương đương phép tính x mod 2^16."
  },
  {
    "id": 25,
    "chapter": 2,
    "chapterName": "Bits, Bytes & Integers",
    "question": "Khi cộng hai số nguyên có dấu cùng dương (x > 0, y > 0) mà kết quả thu được lại là số âm (s <= 0), hiện tượng này gọi là tràn số gì?",
    "answer": [
      "tràn số dương",
      "positive overflow",
      "dương"
    ],
    "hint": "Tràn số âm hay Tràn số dương?",
    "explanation": "Dương + Dương ra Âm là biểu hiện của Tràn số dương (Positive Overflow)."
  },
  {
    "id": 26,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Kiến trúc vi xử lý x86-64 cung cấp tổng cộng bao nhiêu thanh ghi đa năng 64-bit?",
    "answer": [
      "16",
      "16 thanh ghi"
    ],
    "hint": "Một số nguyên",
    "explanation": "x86-64 mở rộng tập thanh ghi lên 16 thanh ghi đa năng (%rax..%r15)."
  },
  {
    "id": 27,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Tên gọi của phần 32-bit thấp của thanh ghi 64-bit %rax là gì?",
    "answer": [
      "%eax",
      "eax"
    ],
    "hint": "%e...",
    "explanation": "%eax là 32-bit thấp của %rax."
  },
  {
    "id": 28,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Hậu tố kích thước dữ liệu trong hợp ngữ AT&T đại diện cho kích thước Double Word (4 byte) là chữ cái nào?",
    "answer": [
      "l"
    ],
    "hint": "Một chữ cái thường (viết tắt của long)",
    "explanation": "l = long / double word (4 byte)."
  },
  {
    "id": 29,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Hậu tố kích thước dữ liệu trong hợp ngữ AT&T đại diện cho kích thước Quad Word (8 byte) là chữ cái nào?",
    "answer": [
      "q"
    ],
    "hint": "Một chữ cái thường (viết tắt của quadword)",
    "explanation": "q = quadword (8 byte / 64 bit)."
  },
  {
    "id": 30,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Thanh ghi nào trong x86-64 luôn luôn trỏ tới đỉnh của ngăn xếp (Stack Pointer)?",
    "answer": [
      "%rsp",
      "rsp"
    ],
    "hint": "%r...",
    "explanation": "%rsp (Stack Pointer) luôn trỏ tới đỉnh ngăn xếp."
  },
  {
    "id": 31,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Thanh ghi nào theo quy ước ABI được sử dụng để lưu trữ giá trị trả về của một hàm?",
    "answer": [
      "%rax",
      "rax"
    ],
    "hint": "%r...",
    "explanation": "%rax lưu giá trị trả về của hàm."
  },
  {
    "id": 32,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Cho %rdx = 0x2000, %rcx = 0x10. Địa chỉ tính được của toán hạng `(%rdx, %rcx, 4)` biểu diễn dưới dạng hex là gì?",
    "answer": [
      "0x2040"
    ],
    "hint": "0x2000 + 0x10 * 4",
    "explanation": "Địa chỉ = 0x2000 + 0x10 * 4 = 0x2000 + 0x40 = 0x2040."
  },
  {
    "id": 33,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Hệ số tỉ lệ s trong toán hạng bộ nhớ Imm(Rb, Ri, s) chỉ được nhận 1 trong 4 giá trị là 1, 2, 4 hoặc mấy?",
    "answer": [
      "8"
    ],
    "hint": "Một chữ số",
    "explanation": "Hệ số tỉ lệ s chỉ có thể là 1, 2, 4, hoặc 8."
  },
  {
    "id": 34,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Thanh ghi nào bị cấm tuyệt đối không được dùng làm thanh ghi chỉ mục Ri trong toán hạng bộ nhớ?",
    "answer": [
      "%rsp",
      "rsp"
    ],
    "hint": "Thanh ghi con trỏ ngăn xếp",
    "explanation": "Kiến trúc x86 cấm sử dụng %rsp làm thanh ghi chỉ mục Ri."
  },
  {
    "id": 35,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Lệnh hợp ngữ nào tính địa chỉ hiệu dụng và nạp vào thanh ghi đích mà hoàn toàn KHÔNG truy xuất vào bộ nhớ RAM?",
    "answer": [
      "leaq",
      "lea"
    ],
    "hint": "Lệnh 4 chữ cái bắt đầu bằng lea...",
    "explanation": "leaq (Load Effective Address Quadword) chỉ tính toán địa chỉ mà không đọc bộ nhớ."
  },
  {
    "id": 36,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Cho %rdi = x. Lệnh `leaq (%rdi, %rdi, 4), %rax` gán vào thanh ghi %rax giá trị bằng mấy lần x?",
    "answer": [
      "5",
      "5 lần",
      "5x"
    ],
    "hint": "Một chữ số: x + x * 4",
    "explanation": "%rax = x + 4*x = 5*x."
  },
  {
    "id": 37,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Trong cú pháp AT&T, câu lệnh `subq %rsi, %rdi` thực hiện phép toán lấy thanh ghi nào trừ đi thanh ghi nào?",
    "answer": [
      "%rdi - %rsi",
      "rdi - rsi"
    ],
    "hint": "Đích trừ Nguồn hay Nguồn trừ Đích?",
    "explanation": "`subq S, D` thực hiện D = D - S, tức lấy %rdi trừ %rsi."
  },
  {
    "id": 38,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Cách tối ưu nhất (2 byte) để xóa thanh ghi %rax về 0 là dùng lệnh `xorl %eax, ?`. Dấu hỏi chấm là thanh ghi nào?",
    "answer": [
      "%eax",
      "eax"
    ],
    "hint": "Chính thanh ghi đó",
    "explanation": "`xorl %eax, %eax` là cách tối ưu nhất để đặt toàn bộ %rax về 0."
  },
  {
    "id": 39,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Lệnh hợp ngữ đặc biệt nào thực hiện mở rộng dấu (sign-extend) nội dung của %eax thành %rax?",
    "answer": [
      "cltq"
    ],
    "hint": "Lệnh 4 chữ cái bắt đầu bằng c...",
    "explanation": "cltq (Convert Long to Quad) mở rộng dấu từ %eax lên %rax."
  },
  {
    "id": 40,
    "chapter": 3,
    "chapterName": "Machine Basics & Registers",
    "question": "Tên lệnh thực hiện dịch phải số học (Arithmetic right shift) cho dữ liệu kích thước 64-bit là gì?",
    "answer": [
      "sarq",
      "sar"
    ],
    "hint": "sarq hay shrq?",
    "explanation": "sarq = Shift Arithmetic Right Quadword."
  },
  {
    "id": 41,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Tên viết tắt (2 chữ cái) của cờ nhớ trong thanh ghi trạng thái vi xử lý là gì?",
    "answer": [
      "CF",
      "cờ CF"
    ],
    "hint": "Carry Flag",
    "explanation": "CF (Carry Flag) là cờ nhớ, báo hiệu tràn số nguyên không dấu."
  },
  {
    "id": 42,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Tên viết tắt (2 chữ cái) của cờ zero (bật lên 1 khi kết quả bằng 0) là gì?",
    "answer": [
      "ZF",
      "cờ ZF"
    ],
    "hint": "Zero Flag",
    "explanation": "ZF (Zero Flag) bật lên 1 khi kết quả phép tính bằng 0."
  },
  {
    "id": 43,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Tên viết tắt (2 chữ cái) của cờ dấu (bật lên 1 khi kết quả là số âm) là gì?",
    "answer": [
      "SF",
      "cờ SF"
    ],
    "hint": "Sign Flag",
    "explanation": "SF (Sign Flag) bằng 1 khi bit MSB của kết quả là 1 (số âm)."
  },
  {
    "id": 44,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Tên viết tắt (2 chữ cái) của cờ tràn số có dấu bù 2 là gì?",
    "answer": [
      "OF",
      "cờ OF"
    ],
    "hint": "Overflow Flag",
    "explanation": "OF (Overflow Flag) bật lên 1 khi xảy ra tràn số nguyên có dấu."
  },
  {
    "id": 45,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Lệnh so sánh trong x86 thực hiện tính hiệu số S1 - S2 để thiết lập cờ mà không lưu kết quả là lệnh gì?",
    "answer": [
      "cmp",
      "cmpq",
      "cmpl"
    ],
    "hint": "Từ viết tắt của Compare (3 chữ cái)",
    "explanation": "cmp (compare) tính S1 - S2 và cập nhật cờ trạng thái."
  },
  {
    "id": 46,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Lệnh `testq %rax, %rax` thực hiện phép toán logic nào giữa hai toán hạng?",
    "answer": [
      "AND",
      "&"
    ],
    "hint": "AND, OR hay XOR?",
    "explanation": "Lệnh test thực hiện phép toán bit-wise AND để thiết lập ZF và SF."
  },
  {
    "id": 47,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Lệnh nhảy có điều kiện nào trong x86 nhảy khi hai giá trị so sánh bằng nhau (cờ ZF = 1)?",
    "answer": [
      "je",
      "jz"
    ],
    "hint": "Jump if Equal",
    "explanation": "je (Jump if Equal) hoặc jz (Jump if Zero) nhảy khi ZF = 1."
  },
  {
    "id": 48,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Lệnh nhảy có điều kiện nào trong x86 nhảy khi hai giá trị so sánh khác nhau (cờ ZF = 0)?",
    "answer": [
      "jne",
      "jnz"
    ],
    "hint": "Jump if Not Equal",
    "explanation": "jne (Jump if Not Equal) hoặc jnz (Jump if Not Zero) nhảy khi ZF = 0."
  },
  {
    "id": 49,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Lệnh nhảy cho số CÓ DẤU 'Lớn hơn' (Greater) trong x86 là lệnh gì?",
    "answer": [
      "jg"
    ],
    "hint": "Jump if Greater (2 chữ cái)",
    "explanation": "jg (Jump if Greater) dùng cho so sánh số có dấu."
  },
  {
    "id": 50,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Lệnh nhảy cho số KHÔNG DẤU 'Lớn hơn' (Above) trong x86 là lệnh gì?",
    "answer": [
      "ja"
    ],
    "hint": "Jump if Above (2 chữ cái)",
    "explanation": "ja (Jump if Above) dùng cho so sánh số không dấu."
  },
  {
    "id": 51,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Tên viết tắt của lệnh di chuyển dữ liệu có điều kiện (Conditional Move) là gì?",
    "answer": [
      "cmov",
      "cmovcc"
    ],
    "hint": "4 chữ cái ghép từ c và mov",
    "explanation": "cmov (Conditional Move) sao chép dữ liệu dựa trên trạng thái cờ."
  },
  {
    "id": 52,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Tổn thất hiệu năng khi bộ dự đoán nhánh của CPU dự đoán sai đường rẽ gọi là Branch gì Penalty?",
    "answer": [
      "Misprediction",
      "Branch Misprediction",
      "misprediction"
    ],
    "hint": "Từ tiếng Anh bắt đầu bằng M...",
    "explanation": "Branch Misprediction Penalty (hình phạt đoán sai nhánh) làm tốn 15-30 chu kỳ."
  },
  {
    "id": 53,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Cấu trúc bảng chứa danh sách các con trỏ địa chỉ mã lệnh dùng để tối ưu câu lệnh switch gọi là Bảng gì?",
    "answer": [
      "bảng nhảy",
      "jump table",
      "Jump Table"
    ],
    "hint": "Bảng...",
    "explanation": "Bảng nhảy (Jump Table) cho phép thực thi câu lệnh switch với độ phức tạp O(1)."
  },
  {
    "id": 54,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Khi một case trong switch không có lệnh break, hiện tượng luồng thực thi tự động chạy tiếp xuống case bên dưới gọi là gì?",
    "answer": [
      "fall-through",
      "fall through",
      "fallthrough"
    ],
    "hint": "Thuật ngữ tiếng Anh gồm 2 từ: Fall-...",
    "explanation": "Fall-through là hiện tượng thực thi trượt xuống mã của case tiếp theo."
  },
  {
    "id": 55,
    "chapter": 4,
    "chapterName": "Control Flow & Jumps",
    "question": "Dạng vòng lặp nào trong C có cấu trúc tự nhiên nhất khi dịch sang hợp ngữ (thân lặp chạy trước, kiểm tra ở cuối)?",
    "answer": [
      "do-while",
      "do while"
    ],
    "hint": "Vòng lặp do...",
    "explanation": "Vòng lặp do-while chỉ cần một phép kiểm tra và nhảy ngược lên đầu vòng lặp."
  },
  {
    "id": 56,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Lệnh nào đẩy một giá trị 8-byte lên đỉnh ngăn xếp và tự động giảm %rsp đi 8 byte?",
    "answer": [
      "pushq",
      "push"
    ],
    "hint": "Lệnh bắt đầu bằng push...",
    "explanation": "pushq Src: giảm %rsp đi 8 và ghi Src vào *(%rsp)."
  },
  {
    "id": 57,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Lệnh nào lấy một giá trị 8-byte từ đỉnh ngăn xếp ra thanh ghi và tự động tăng %rsp lên 8 byte?",
    "answer": [
      "popq",
      "pop"
    ],
    "hint": "Lệnh bắt đầu bằng pop...",
    "explanation": "popq Dest: đọc *(%rsp) vào Dest và tăng %rsp lên 8."
  },
  {
    "id": 58,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Lệnh gọi hàm `call` tự động đẩy thông tin gì của lệnh tiếp theo vào đỉnh ngăn xếp?",
    "answer": [
      "địa chỉ trả về",
      "return address",
      "Địa chỉ trả về"
    ],
    "hint": "Địa chỉ...",
    "explanation": "call đẩy Return Address (địa chỉ lệnh ngay sau call) lên stack."
  },
  {
    "id": 59,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Lệnh kết thúc hàm lấy Return Address từ stack ra để chuyển luồng thực thi trở về hàm gọi là lệnh gì?",
    "answer": [
      "ret",
      "rep ret"
    ],
    "hint": "Từ 3 chữ cái viết tắt của Return",
    "explanation": "ret (return) lấy địa chỉ từ đỉnh stack nạp vào %rip."
  },
  {
    "id": 60,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ NHẤT (tham số 1)?",
    "answer": [
      "%rdi",
      "rdi"
    ],
    "hint": "%r...",
    "explanation": "Tham số 1 truyền qua %rdi."
  },
  {
    "id": 61,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ HAI (tham số 2)?",
    "answer": [
      "%rsi",
      "rsi"
    ],
    "hint": "%r...",
    "explanation": "Tham số 2 truyền qua %rsi."
  },
  {
    "id": 62,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ BA (tham số 3)?",
    "answer": [
      "%rdx",
      "rdx"
    ],
    "hint": "%r...",
    "explanation": "Tham số 3 truyền qua %rdx."
  },
  {
    "id": 63,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ TƯ (tham số 4)?",
    "answer": [
      "%rcx",
      "rcx"
    ],
    "hint": "%r...",
    "explanation": "Tham số 4 truyền qua %rcx."
  },
  {
    "id": 64,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ NĂM (tham số 5)?",
    "answer": [
      "%r8",
      "r8"
    ],
    "hint": "%r...",
    "explanation": "Tham số 5 truyền qua %r8."
  },
  {
    "id": 65,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Theo chuẩn System V ABI trên Linux x86-64, thanh ghi nào dùng để truyền THAM SỐ THỨ SÁU (tham số 6)?",
    "answer": [
      "%r9",
      "r9"
    ],
    "hint": "%r...",
    "explanation": "Tham số 6 truyền qua %r9."
  },
  {
    "id": 66,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Vùng không gian bộ nhớ trên stack dành riêng cho một lần thực thi hàm gọi là Khung gì?",
    "answer": [
      "khung ngăn xếp",
      "stack frame",
      "khung stack"
    ],
    "hint": "Khung...",
    "explanation": "Khung ngăn xếp (Stack Frame) lưu trữ biến cục bộ, thanh ghi callee-saved và địa chỉ trả về."
  },
  {
    "id": 67,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Vùng nhớ 128 byte nằm ngay dưới %rsp mà các hàm lá có thể tự do sử dụng gọi là Vùng gì (Red...)?",
    "answer": [
      "Red Zone",
      "vùng đỏ",
      "red zone"
    ],
    "hint": "Red...",
    "explanation": "Red Zone là 128 byte dưới %rsp trong System V ABI dành cho hàm lá."
  },
  {
    "id": 68,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Hàm nhập chuỗi nào trong thư viện chuẩn C cực kỳ nguy hiểm và bị khai tử vì không kiểm soát kích thước đệm?",
    "answer": [
      "gets",
      "gets()"
    ],
    "hint": "Hàm 4 chữ cái bắt đầu bằng g...",
    "explanation": "gets() không giới hạn số ký tự đọc vào, là nguyên nhân gây ra nhiều lỗ hổng buffer overflow."
  },
  {
    "id": 69,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Giá trị bí mật ngẫu nhiên được chèn vào stack để phát hiện việc ghi đè Return Address gọi là Stack gì?",
    "answer": [
      "Canary",
      "Stack Canary",
      "canary"
    ],
    "hint": "Tên loài chim hoàng yến",
    "explanation": "Stack Canary (chim hoàng yến báo động mỏ than) dùng để phát hiện tràn bộ đệm."
  },
  {
    "id": 70,
    "chapter": 5,
    "chapterName": "Procedures, Stack & Security",
    "question": "Kỹ thuật của Hệ điều hành ngẫu nhiên hóa vị trí các vùng nhớ (Stack, Heap, Libc) mỗi lần chạy viết tắt là gì?",
    "answer": [
      "ASLR"
    ],
    "hint": "4 chữ cái viết hoa (Address Space Layout...)",
    "explanation": "ASLR (Address Space Layout Randomization) ngẫu nhiên hóa địa chỉ bộ nhớ."
  }
];
