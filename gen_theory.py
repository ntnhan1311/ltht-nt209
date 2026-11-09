# gen_theory.py - Tóm tắt toàn diện lý thuyết môn NT209 Lập trình hệ thống
def get_theory_data():
    return [
        {
            "id": "ch1",
            "number": 1,
            "title": "Chương 1: Tổng Quan Hệ Thống & Quá Trình Biên Dịch",
            "badge": "Tổng quan & Biên dịch",
            "summary": "Các thực tế phần cứng, chu trình dịch mã nguồn C sang mã máy, kiến trúc phân cấp bộ nhớ và các lớp trừu tượng của Hệ điều hành.",
            "sections": [
                {
                    "title": "1. Các thực tế trong lập trình hệ thống",
                    "content": """
<h4>1.1. Ints không phải là số nguyên toán học, Floats không phải là số thực</h4>
<ul>
  <li><b>Số nguyên (Ints):</b> Bị giới hạn về số bit (thường 32-bit hoặc 64-bit). Có hiện tượng tràn số (overflow).
    <br><i>Ví dụ:</i> Trong kiểu <code>int</code> 32-bit có dấu, <code>40000 * 40000 = 1600000000</code>; nhưng <code>50000 * 50000 = -1794967296</code> (do tràn số dương thành âm).
    <br>Biểu thức <code>x * x >= 0</code> không phải lúc nào cũng đúng với số nguyên!
  </li>
  <li><b>Số thực dấu phẩy động (Floats):</b> Có miền giá trị lớn hơn nhưng độ chính xác hữu hạn (xấp xỉ). Không có tính chất kết hợp toán học tuyệt đối:
    <br><code>(3.14 + 1e20) - 1e20 = 0.0</code> (do 3.14 bị mất mát độ chính xác khi cộng với số quá lớn), nhưng <code>3.14 + (1e20 - 1e20) = 3.14</code>.
  </li>
</ul>

<h4>1.2. Lỗi tham chiếu bộ nhớ (Memory Referencing Bugs)</h4>
<ul>
  <li>C không kiểm tra biên mảng (no bounds checking). Ghi vượt biên mảng có thể làm hỏng biến lân cận, làm sai lệch trạng thái hoặc crash chương trình (Segmentation Fault).</li>
  <li>Hiện tượng lỗi có thể phụ thuộc vào cờ tối ưu hóa của trình biên dịch (ví dụ chạy bình thường ở <code>-O0</code> nhưng crash ở <code>-O2</code> hoặc ngược lại).</li>
  <li>Bộ nhớ động (Dynamic memory): rò rỉ bộ nhớ (memory leak), giải phóng 2 lần (double free), sử dụng con trỏ lơ lửng (dangling pointer / use-after-free).</li>
</ul>

<h4>1.3. Hiệu suất hệ thống & Tối ưu hóa</h4>
<ul>
  <li>Tối ưu thuật toán là chưa đủ; cấu trúc truy cập bộ nhớ ảnh hưởng cực lớn đến tốc độ do bộ nhớ đệm (Cache).</li>
  <li>Truy cập tuần tự theo dòng (Row-major) tận dụng tốt tính cục bộ không gian (Spatial locality), nhanh hơn gấp nhiều lần so với truy cập theo cột (Column-major) gây cache miss liên tục.</li>
</ul>
"""
                },
                {
                    "title": "2. Quá trình biên dịch chương trình C (Compilation Pipeline)",
                    "content": """
<p>Lệnh <code>gcc -O2 -o hello hello.c</code> trải qua 4 giai đoạn chính:</p>
<table class="table-theory">
  <thead>
    <tr><th>Giai đoạn</th><th>Công cụ</th><th>Đầu vào</th><th>Đầu ra</th><th>Ý nghĩa</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><b>1. Tiền xử lý (Preprocessing)</b></td>
      <td><code>cpp</code> (gcc -E)</td>
      <td><code>hello.c</code></td>
      <td><code>hello.i</code> (Text)</td>
      <td>Chèn nội dung các header <code>#include</code>, mở rộng macro <code>#define</code>, bỏ chú thích.</td>
    </tr>
    <tr>
      <td><b>2. Biên dịch (Compilation)</b></td>
      <td><code>cc1</code> (gcc -S)</td>
      <td><code>hello.i</code></td>
      <td><code>hello.s</code> (Text)</td>
      <td>Dịch mã nguồn C sang mã hợp ngữ (Assembly language, ví dụ x86-64).</td>
    </tr>
    <tr>
      <td><b>3. Hợp dịch (Assembly)</b></td>
      <td><code>as</code> (gcc -c)</td>
      <td><code>hello.s</code></td>
      <td><code>hello.o</code> (Binary)</td>
      <td>Chuyển mã hợp ngữ thành mã máy nhị phân có thể tái định vị (Relocatable Object Program).</td>
    </tr>
    <tr>
      <td><b>4. Liên kết (Linking)</b></td>
      <td><code>ld</code> (gcc -o)</td>
      <td><code>hello.o</code> + libs</td>
      <td><code>hello</code> (Binary)</td>
      <td>Kết hợp các file object và thư viện chuẩn (như <code>printf</code>) thành file thực thi hoàn chỉnh (Executable).</td>
    </tr>
  </tbody>
</table>
<div class="note-box">
  <b>💡 Lệnh hữu ích:</b>
  <ul>
    <li><code>gcc -E hello.c -o hello.i</code> : Dừng sau bước tiền xử lý</li>
    <li><code>gcc -S hello.c -o hello.s</code> : Dừng sau bước sinh mã hợp ngữ</li>
    <li><code>gcc -c hello.c -o hello.o</code> : Dừng sau bước sinh object code nhị phân</li>
    <li><code>objdump -d hello.o</code> hoặc <code>objdump -d hello</code> : Dịch ngược (Disassemble) mã máy về hợp ngữ</li>
  </ul>
</div>
"""
                },
                {
                    "title": "3. Kiến trúc phần cứng & Phân cấp bộ nhớ (Memory Hierarchy)",
                    "content": """
<h4>3.1. Các thành phần phần cứng cơ bản</h4>
<ul>
  <li><b>CPU (Central Processing Unit):</b> Chứa PC (Program Counter), Register File (tập thanh ghi), ALU (Arithmetic Logic Unit).</li>
  <li><b>Buses:</b> Kênh truyền dữ liệu (thường chuyển theo cụm từ nhớ - word: 4 byte hoặc 8 byte).</li>
  <li><b>Main Memory (Bộ nhớ chính):</b> Mảng các byte liên tiếp lưu trữ chương trình và dữ liệu khi chạy.</li>
</ul>

<h4>3.2. Kim tự tháp phân cấp bộ nhớ (Memory Hierarchy)</h4>
<p>Bộ nhớ càng gần CPU thì tốc độ càng nhanh, dung lượng càng nhỏ và chi phí trên mỗi bit càng đắt:</p>
<ol>
  <li><b>L0 - Registers:</b> Nằm ngay trong CPU, truy xuất trong 0 chu kỳ xung nhịp.</li>
  <li><b>L1 Cache (SRAM):</b> Nằm trong lõi CPU, truy xuất 1-4 chu kỳ, vài chục KB.</li>
  <li><b>L2 Cache (SRAM):</b> Nằm gần lõi, truy xuất ~10 chu kỳ, vài trăm KB đến vài MB.</li>
  <li><b>L3 Cache (SRAM):</b> Dùng chung giữa các lõi, truy xuất 30-50 chu kỳ, vài chục MB.</li>
  <li><b>L4 - Main Memory (DRAM):</b> Truy xuất ~100-200 chu kỳ, vài GB đến hàng chục GB.</li>
  <li><b>L5 - Secondary Storage (SSD / HDD):</b> Truy xuất hàng trăm ngàn đến hàng triệu chu kỳ xung nhịp.</li>
</ol>

<h4>3.3. Nguyên lý cục bộ (Locality)</h4>
<ul>
  <li><b>Tính cục bộ theo thời gian (Temporal Locality):</b> Một ô nhớ vừa được truy xuất có khả năng cao sẽ được truy xuất lại trong tương lai gần (ví dụ biến đếm vòng lặp).</li>
  <li><b>Tính cục bộ theo không gian (Spatial Locality):</b> Nếu một ô nhớ được truy xuất, các ô nhớ có địa chỉ kế cận nó sẽ có khả năng cao được truy xuất tiếp theo (ví dụ duyệt mảng liên tục theo thứ tự tăng dần).</li>
</ul>
"""
                },
                {
                    "title": "4. Các tầng trừu tượng của Hệ điều hành",
                    "content": """
<p>Hệ điều hành đóng vai trò trung gian giữa phần mềm và phần cứng thông qua các tầng trừu tượng:</p>
<ul>
  <li><b>Tập tin (Files):</b> Là sự trừu tượng hóa của các thiết bị Nhập/Xuất (I/O Devices). Mọi thiết bị (bàn phím, màn hình, mạng, đĩa) đều được xem là một chuỗi các byte.</li>
  <li><b>Bộ nhớ ảo (Virtual Memory):</b> Trừu tượng hóa bộ nhớ chính và thiết bị I/O. Cung cấp cho mỗi tiến trình một không gian địa chỉ ảo liên tục, riêng biệt và đồng nhất.</li>
  <li><b>Tiến trình (Processes):</b> Trừu tượng hóa toàn bộ hệ thống gồm CPU, bộ nhớ chính và thiết bị I/O. Cho mỗi chương trình cảm giác nó đang độc chiếm toàn bộ máy tính.</li>
  <li><b>Tiểu trình (Threads):</b> Đơn vị thực thi nhỏ hơn nằm trong một tiến trình, dùng chung không gian địa chỉ và tài nguyên của tiến trình đó.</li>
  <li><b>Chế độ thực thi:</b> <i>Kernel Mode</i> (đặc quyền, truy xuất toàn bộ phần cứng) và <i>User Mode</i> (hạn chế). Chương trình người dùng muốn truy xuất phần cứng phải thông qua Lời gọi hệ thống (System Calls).</li>
</ul>
"""
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
                    "content": """
<h4>1.1. Byte và Hệ Thập Lục Phân (Hexadecimal)</h4>
<ul>
  <li>1 Byte = 8 bits. Trong hệ Hex, 1 ký số đại diện cho đúng 4 bits (nibble).</li>
  <li>1 Byte có giá trị từ <code>0x00</code> (0) đến <code>0xFF</code> (255 nhị phân <code>11111111_2</code>).</li>
  <li>Mẹo chuyển đổi: <code>0xA = 10 (1010)</code>, <code>0xB = 11 (1011)</code>, <code>0xC = 12 (1100)</code>, <code>0xD = 13 (1101)</code>, <code>0xE = 14 (1110)</code>, <code>0xF = 15 (1111)</code>.</li>
</ul>

<h4>1.2. Phép toán Bit-wise vs Logic trong C</h4>
<table class="table-theory">
  <thead><tr><th>Thao tác</th><th>Toán tử Bit-wise</th><th>Toán tử Logic (Boolean)</th></tr></thead>
  <tbody>
    <tr><td>AND</td><td><code>&</code> (từng bit)</td><td><code>&&</code> (kết quả 0 hoặc 1, short-circuit)</td></tr>
    <tr><td>OR</td><td><code>|</code> (từng bit)</td><td><code>||</code> (kết quả 0 hoặc 1, short-circuit)</td></tr>
    <tr><td>NOT</td><td><code>~</code> (đảo từng bit)</td><td><code>!</code> (0 thành 1, khác 0 thành 0)</td></tr>
    <tr><td>XOR</td><td><code>^</code> (từng bit)</td><td>Không có toán tử logic tương đương</td></tr>
  </tbody>
</table>
<div class="note-box">
  <b>Tính chất đặc biệt của XOR (^):</b>
  <ul>
    <li><code>x ^ 0 = x</code> ; <code>x ^ x = 0</code></li>
    <li>Hoán đổi 2 số không dùng biến phụ: <code>x = x ^ y; y = x ^ y; x = x ^ y;</code></li>
  </ul>
</div>

<h4>1.3. Phép Dịch Bit (Shift Operations)</h4>
<ul>
  <li><b>Dịch trái (<code>x &lt;&lt; k</code>):</b> Đẩy bit sang trái k vị trí, luôn lấp các vị trí trống bên phải bằng số <b>0</b>. Tương đương nhân với 2<sup>k</sup> (modulo 2<sup>w</sup>).</li>
  <li><b>Dịch phải logic (<code>x &gt;&gt; k</code>):</b> Lấp các vị trí trống bên trái bằng số <b>0</b>. Dùng cho số <b>không dấu (unsigned)</b>.</li>
  <li><b>Dịch phải số học (<code>x &gt;&gt; k</code>):</b> Lấp các vị trí trống bên trái bằng <b>bit dấu (MSB)</b>. Dùng cho số <b>có dấu (signed)</b> để giữ nguyên dấu âm/dương.</li>
  <li><b>Quy tắc mod w:</b> Với biến w-bit, nếu dịch k bit với k &gt;= w, vi xử lý x86-64 chỉ dịch <code>k mod w</code> bit (ví dụ kiểu int 32-bit thì <code>x &lt;&lt; 36</code> tương đương <code>x &lt;&lt; 4</code>).</li>
</ul>
"""
                },
                {
                    "title": "2. Biểu diễn số nguyên: Không dấu (B2U) & Bù 2 (B2T)",
                    "content": """
<h4>2.1. Công thức trọng số</h4>
<ul>
  <li><b>Không dấu (Unsigned - B2U):</b> 
    <br><code>B2U(X) = &sum;<sub>i=0</sub><sup>w-1</sup> x<sub>i</sub> &times; 2<sup>i</sup></code>
    <br>Miền giá trị: <code>[0, 2<sup>w</sup> - 1]</code> (UMin = 0, UMax = 2<sup>w</sup> - 1).
  </li>
  <li><b>Bù 2 (Two's Complement - B2T):</b>
    <br><code>B2T(X) = -x<sub>w-1</sub> &times; 2<sup>w-1</sup> + &sum;<sub>i=0</sub><sup>w-2</sup> x<sub>i</sub> &times; 2<sup>i</sup></code>
    <br>Bit cao nhất (MSB) có trọng số âm <code>-2<sup>w-1</sup></code> đóng vai trò là bit dấu (0 là dương, 1 là âm).
    <br>Miền giá trị: <code>[-2<sup>w-1</sup>, 2<sup>w-1</sup> - 1]</code> (TMin = -2<sup>w-1</sup>, TMax = 2<sup>w-1</sup> - 1).
  </li>
</ul>

<h4>2.2. Bảng giá trị cực trị theo số bit</h4>
<table class="table-theory">
  <thead><tr><th>Tham số</th><th>8-bit (Byte)</th><th>16-bit (Word)</th><th>32-bit (Int / DWord)</th><th>64-bit (Long / QWord)</th></tr></thead>
  <tbody>
    <tr><td><b>UMax</b></td><td>255 (0xFF)</td><td>65,535 (0xFFFF)</td><td>4,294,967,295 (0xFFFFFFFF)</td><td>2<sup>64</sup> - 1 (0xFFFF...FFFF)</td></tr>
    <tr><td><b>TMax</b></td><td>127 (0x7F)</td><td>32,767 (0x7FFF)</td><td>2,147,483,647 (0x7FFFFFFF)</td><td>2<sup>63</sup> - 1 (0x7FFF...FFFF)</td></tr>
    <tr><td><b>TMin</b></td><td>-128 (0x80)</td><td>-32,768 (0x8000)</td><td>-2,147,483,648 (0x80000000)</td><td>-2<sup>63</sup> (0x8000...0000)</td></tr>
    <tr><td><b>-1</b></td><td>0xFF</td><td>0xFFFF</td><td>0xFFFFFFFF</td><td>0xFFFFFFFF_FFFFFFFF</td></tr>
  </tbody>
</table>

<div class="note-box">
  <b>Các quan hệ cốt lõi:</b>
  <ul>
    <li><code>|TMin| = TMax + 1</code> (Bất đối xứng: số âm nhiều hơn số dương 1 đơn vị).</li>
    <li><code>UMax = 2 &times; TMax + 1</code>.</li>
    <li>Số đối bù 2: <code>-x = ~x + 1</code>.</li>
    <li><b>Trường hợp đặc biệt:</b> <code>-TMin = TMin</code> (do TMin không có số dương đối xứng trong phạm vi w bit, nên đảo dấu vẫn ra chính nó!).</li>
  </ul>
</div>
"""
                },
                {
                    "title": "3. Ép kiểu (Casting), Mở rộng & Cắt gọt bit",
                    "content": """
<h4>3.1. Ép kiểu giữa Signed và Unsigned</h4>
<ul>
  <li>Khi ép kiểu giữa Signed và Unsigned có <b>cùng kích thước bit</b>, chuỗi bit trong bộ nhớ <b>không đổi</b>, chỉ thay đổi cách vi xử lý diễn giải giá trị.</li>
  <li><b>Cạm bẫy ngầm định trong C:</b> Nếu một biểu thức chứa cả <code>signed</code> và <code>unsigned</code>, C sẽ <b>ngầm định ép signed sang unsigned</b>!
    <br><i>Ví dụ kinh điển:</i>
    <br><code>-1 &lt; 0U</code> &rarr; <b>SAI (False)!</b> Vì <code>-1</code> bị ép thành <code>unsigned int</code> mang giá trị <code>UMax = 4294967295</code>, mà <code>4294967295 &lt; 0</code> là sai.
    <br><code>2147483647U &gt; -2147483648</code> &rarr; <b>SAI!</b> Vì <code>-2147483648</code> ép sang unsigned thành <code>2147483648U</code> lớn hơn <code>2147483647U</code>.
  </li>
</ul>

<h4>3.2. Mở rộng bit (Expansion)</h4>
<ul>
  <li><b>Zero Extension (Số không dấu):</b> Thêm các bit 0 vào phía trước (bên trái). Giá trị số học không đổi.</li>
  <li><b>Sign Extension (Số có dấu bù 2):</b> Lặp lại bit dấu (MSB) vào toàn bộ các bit phía trước. Giá trị số học không đổi.
    <br><i>Ví dụ 8-bit lên 16-bit:</i> <code>-5</code> trong 8-bit là <code>0xFB</code> (<code>11111011</code>). Mở rộng dấu thành 16-bit là <code>0xFFFB</code> (vẫn là -5).
  </li>
  <li><b>Thứ tự ưu tiên:</b> Nếu vừa đổi kích thước vừa đổi kiểu (ví dụ từ <code>short</code> sang <code>unsigned int</code>), C thực hiện mở rộng kích thước trước (Sign Extension), sau đó mới chuyển đổi kiểu sang Unsigned.</li>
</ul>

<h4>3.3. Cắt gọt bit (Truncation)</h4>
<ul>
  <li>Khi ép từ kiểu kích thước lớn về kiểu nhỏ hơn (ví dụ <code>int</code> 32-bit về <code>short</code> 16-bit), hệ thống cắt bỏ các bit cao, chỉ giữ lại w bit thấp.</li>
  <li>Toán học: Giá trị mới = <code>Giá trị cũ mod 2<sup>w</sup></code>.</li>
</ul>
"""
                },
                {
                    "title": "4. Phép toán số học, Tràn số & Thứ tự Byte (Endianness)",
                    "content": """
<h4>4.1. Phát hiện tràn số (Overflow Detection)</h4>
<ul>
  <li><b>Cộng không dấu:</b> Tràn số xảy ra khi tổng <code>s = x + y &lt; x</code> (kết quả bị wrap-around quanh 2<sup>w</sup>).</li>
  <li><b>Cộng có dấu bù 2:</b>
    <ul>
      <li><i>Tràn số dương (Positive Overflow):</i> <code>x &gt; 0, y &gt; 0</code> nhưng kết quả <code>s &le; 0</code>.</li>
      <li><i>Tràn số âm (Negative Overflow):</i> <code>x &lt; 0, y &lt; 0</code> nhưng kết quả <code>s &ge; 0</code>.</li>
      <li><i>Không bao giờ tràn:</i> Khi hai số khác dấu (một dương, một âm).</li>
    </ul>
  </li>
</ul>

<h4>4.2. Phép nhân và chia với lũy thừa 2 (2<sup>k</sup>)</h4>
<ul>
  <li><b>Nhân với 2<sup>k</sup>:</b> <code>x * 2<sup>k</sup> = x &lt;&lt; k</code> (áp dụng cho cả signed và unsigned).</li>
  <li><b>Chia không dấu với 2<sup>k</sup>:</b> <code>x / 2<sup>k</sup> = x &gt;&gt; k</code> (dịch phải logic).</li>
  <li><b>Chia có dấu với 2<sup>k</sup> làm tròn về 0:</b>
    <ul>
      <li>Nếu <code>x &ge; 0</code>: <code>x &gt;&gt; k</code> (dịch phải số học).</li>
      <li>Nếu <code>x &lt; 0</code>: Dịch phải số học thông thường làm tròn xuống (-&infin;). Để làm tròn về 0 đúng chuẩn C, cần cộng thêm lượng thiên lệch (Bias): <code>bias = (1 &lt;&lt; k) - 1</code>.
        <br>Công thức chuẩn: <code>(x + (1 &lt;&lt; k) - 1) &gt;&gt; k</code>.
      </li>
    </ul>
  </li>
</ul>

<h4>4.3. Thứ tự Byte (Byte Ordering / Endianness)</h4>
<p>Xét số nguyên 32-bit (4 bytes): <code>0x01234567</code> lưu tại địa chỉ cơ sở <code>0x100</code>:</p>
<table class="table-theory">
  <thead><tr><th>Kiến trúc</th><th>Địa chỉ 0x100</th><th>Địa chỉ 0x101</th><th>Địa chỉ 0x102</th><th>Địa chỉ 0x103</th><th>Đặc điểm</th></tr></thead>
  <tbody>
    <tr><td><b>Little Endian</b> (x86, ARM)</td><td><b>0x67</b> (LSB)</td><td>0x45</td><td>0x23</td><td><b>0x01</b> (MSB)</td><td>Byte trọng số thấp (LSB) ở địa chỉ thấp nhất.</td></tr>
    <tr><td><b>Big Endian</b> (Network, SPARC)</td><td><b>0x01</b> (MSB)</td><td>0x23</td><td>0x45</td><td><b>0x67</b> (LSB)</td><td>Byte trọng số cao (MSB) ở địa chỉ thấp nhất.</td></tr>
  </tbody>
</table>
"""
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
                    "content": """
<h4>1.1. Khái niệm cơ bản</h4>
<ul>
  <li><b>ISA (Instruction Set Architecture):</b> Giao diện lập trình giữa phần cứng và phần mềm (tập lệnh, thanh ghi, quản lý bộ nhớ). x86 thuộc họ CISC (tập lệnh phức tạp, độ dài lệnh thay đổi).</li>
  <li><b>Quy ước cú pháp:</b> Cú pháp GNU / AT&T (dùng trong Linux/GCC): toán hạng nguồn đứng trước, toán hạng đích đứng sau: <code>op Source, Dest</code>; thanh ghi có tiền tố <code>%</code>, hằng số có tiền tố <code>$</code>.</li>
</ul>

<h4>1.2. Bảng 16 Thanh ghi đa năng x86-64</h4>
<table class="table-theory">
  <thead><tr><th>64-bit</th><th>32-bit thấp</th><th>16-bit thấp</th><th>8-bit thấp</th><th>Vai trò đặc biệt trong ABI</th></tr></thead>
  <tbody>
    <tr><td><code>%rax</code></td><td><code>%eax</code></td><td><code>%ax</code></td><td><code>%al</code></td><td>Giá trị trả về của hàm (Return value)</td></tr>
    <tr><td><code>%rdi</code></td><td><code>%edi</code></td><td><code>%di</code></td><td><code>%dil</code></td><td>Tham số 1 của hàm (1st Argument)</td></tr>
    <tr><td><code>%rsi</code></td><td><code>%esi</code></td><td><code>%si</code></td><td><code>%sil</code></td><td>Tham số 2 của hàm (2nd Argument)</td></tr>
    <tr><td><code>%rdx</code></td><td><code>%edx</code></td><td><code>%dx</code></td><td><code>%dl</code></td><td>Tham số 3 của hàm (3rd Argument)</td></tr>
    <tr><td><code>%rcx</code></td><td><code>%ecx</code></td><td><code>%cx</code></td><td><code>%cl</code></td><td>Tham số 4 của hàm (4th Argument)</td></tr>
    <tr><td><code>%r8</code></td><td><code>%r8d</code></td><td><code>%r8w</code></td><td><code>%r8b</code></td><td>Tham số 5 của hàm (5th Argument)</td></tr>
    <tr><td><code>%r9</code></td><td><code>%r9d</code></td><td><code>%r9w</code></td><td><code>%r9b</code></td><td>Tham số 6 của hàm (6th Argument)</td></tr>
    <tr><td><code>%rsp</code></td><td><code>%esp</code></td><td><code>%sp</code></td><td><code>%spl</code></td><td>Con trỏ đỉnh ngăn xếp (Stack Pointer)</td></tr>
    <tr><td><code>%rbp</code></td><td><code>%ebp</code></td><td><code>%bp</code></td><td><code>%bpl</code></td><td>Con trỏ khung ngăn xếp (Frame Pointer / Callee-saved)</td></tr>
    <tr><td><code>%rbx</code></td><td><code>%ebx</code></td><td><code>%bx</code></td><td><code>%bl</code></td><td>Callee-saved register</td></tr>
    <tr><td><code>%r10</code></td><td><code>%r10d</code></td><td><code>%r10w</code></td><td><code>%r10b</code></td><td>Caller-saved register</td></tr>
    <tr><td><code>%r11</code></td><td><code>%r11d</code></td><td><code>%r11w</code></td><td><code>%r11b</code></td><td>Caller-saved register</td></tr>
    <tr><td><code>%r12..15</code></td><td><code>%r12d..15d</code></td><td><code>%r12w..15w</code></td><td><code>%r12b..15b</code></td><td>Callee-saved registers</td></tr>
  </tbody>
</table>

<div class="note-box alert">
  <b>⚠️ QUY TẮC VÀNG VỀ GHI THANH GHI 32-BIT:</b>
  <br>Trong x86-64, bất kỳ lệnh nào ghi dữ liệu vào thanh ghi 32-bit (ví dụ <code>movl %edx, %eax</code>) sẽ <b>TỰ ĐỘNG XÓA (ZERO OUT) TOÀN BỘ 32-BIT CAO CỦA THANH GHI 64-BIT TƯƠNG ỨNG (%rax) VỀ 0!</b>
  <br>Ngược lại, lệnh ghi vào thanh ghi 8-bit hoặc 16-bit giữ nguyên các bit cao còn lại.
</div>
"""
                },
                {
                    "title": "2. Kích thước dữ liệu & Các dạng toán hạng",
                    "content": """
<h4>2.1. Hậu tố kích thước dữ liệu (Data Sizes)</h4>
<ul>
  <li><code>b</code>: Byte (1 byte = 8 bits, kiểu C: <code>char</code>)</li>
  <li><code>w</code>: Word (2 bytes = 16 bits, kiểu C: <code>short</code>)</li>
  <li><code>l</code>: Double Word / Long (4 bytes = 32 bits, kiểu C: <code>int</code>, con trỏ trong 32-bit)</li>
  <li><code>q</code>: Quad Word (8 bytes = 64 bits, kiểu C: <code>long</code>, <code>char*</code> - con trỏ trong 64-bit)</li>
</ul>

<h4>2.2. Các dạng toán hạng (Operand Forms)</h4>
<table class="table-theory">
  <thead><tr><th>Dạng toán hạng</th><th>Cú pháp AT&T</th><th>Giá trị / Địa chỉ</th><th>Ví dụ</th></tr></thead>
  <tbody>
    <tr><td><b>Immediate (Tức thì)</b></td><td><code>$Imm</code></td><td>Giá trị hằng số <code>Imm</code></td><td><code>$0x400</code>, <code>$-5</code></td></tr>
    <tr><td><b>Register (Thanh ghi)</b></td><td><code>E<sub>a</sub></code></td><td>Giá trị trong thanh ghi <code>R[E<sub>a</sub>]</code></td><td><code>%rax</code>, <code>%edx</code></td></tr>
    <tr><td><b>Memory: Tuyệt đối</b></td><td><code>Imm</code></td><td><code>M[Imm]</code></td><td><code>0x104</code></td></tr>
    <tr><td><b>Memory: Gián tiếp qua thanh ghi</b></td><td><code>(E<sub>b</sub>)</code></td><td><code>M[R[E<sub>b</sub>]]</code></td><td><code>(%rax)</code></td></tr>
    <tr><td><b>Memory: Cơ sở + Độ lệch</b></td><td><code>Imm(E<sub>b</sub>)</code></td><td><code>M[Imm + R[E<sub>b</sub>]]</code></td><td><code>8(%rbp)</code>, <code>-16(%rsp)</code></td></tr>
    <tr><td><b>Memory: Tổng quát đầy đủ</b></td><td><code>Imm(E<sub>b</sub>, E<sub>i</sub>, s)</code></td><td><code>M[Imm + R[E<sub>b</sub>] + R[E<sub>i</sub>] &times; s]</code></td><td><code>4(%rdx, %rcx, 8)</code></td></tr>
  </tbody>
</table>
<div class="note-box">
  <b>Hệ số tỉ lệ (Scale factor <code>s</code>):</b> Chỉ được phép nhận một trong bốn giá trị: <b>1, 2, 4, hoặc 8</b>. Thanh ghi chỉ mục <code>E<sub>i</sub></code> không được phép là <code>%rsp</code>.
</div>
"""
                },
                {
                    "title": "3. Lệnh MOV & Lệnh LEAQ",
                    "content": """
<h4>3.1. Lệnh MOV (Data Movement)</h4>
<ul>
  <li>Cú pháp: <code>mov[b|w|l|q] Source, Dest</code></li>
  <li><b>LUẬT BẤT THÀNH VĂN:</b> Hai toán hạng <b>KHÔNG THỂ</b> đồng thời là ô nhớ! Lệnh như <code>movq (%rax), (%rbx)</code> là không hợp lệ (phải dùng thanh ghi trung gian).</li>
  <li><b>Mở rộng bit khi copy:</b>
    <ul>
      <li><code>movzBW Src, Dest</code>: Zero-extension (lấp 0 vào các bit cao).</li>
      <li><code>movsBW Src, Dest</code>: Sign-extension (lặp lại bit dấu vào các bit cao).</li>
      <li><code>cltq</code>: Lệnh đặc biệt mở rộng dấu từ <code>%eax</code> thành <code>%rax</code> (tương đương <code>movslq %eax, %rax</code>).</li>
    </ul>
  </li>
</ul>

<h4>3.2. Lệnh LEAQ (Load Effective Address)</h4>
<ul>
  <li>Cú pháp: <code>leaq Src, Dest</code> (trong đó <code>Src</code> có cú pháp định vị địa chỉ bộ nhớ).</li>
  <li><b>KHÁC BIỆT CỐT LÕI VỚI MOV:</b> <code>leaq</code> chỉ <b>tính địa chỉ</b> và gán giá trị địa chỉ đó vào thanh ghi đích, <b>HOÀN TOÀN KHÔNG TRUY XUẤT VÀO BỘ NHỚ</b> (không dereference bộ nhớ)!</li>
  <li><b>Ứng dụng làm toán nhanh:</b> Trình biên dịch dùng <code>leaq</code> để thực hiện phép nhân với 2, 3, 4, 5, 8, 9 và phép cộng trong đúng 1 chu kỳ máy:
    <br><code>leaq (%rdi, %rdi, 2), %rax</code> &rarr; <code>%rax = %rdi + 2 * %rdi = 3 * %rdi</code>
    <br><code>leaq (%rdi, %rdi, 4), %rax</code> &rarr; <code>%rax = 5 * %rdi</code>
    <br><code>leaq 7(%rdi, %rsi, 4), %rax</code> &rarr; <code>%rax = %rdi + 4 * %rsi + 7</code>
  </li>
</ul>
"""
                },
                {
                    "title": "4. Các lệnh số học và logic",
                    "content": """
<table class="table-theory">
  <thead><tr><th>Lệnh</th><th>Ý nghĩa</th><th>Thao tác</th></tr></thead>
  <tbody>
    <tr><td><code>addq Src, Dest</code></td><td>Cộng</td><td><code>Dest = Dest + Src</code></td></tr>
    <tr><td><code>subq Src, Dest</code></td><td>Trừ</td><td><code>Dest = Dest - Src</code> (Chú ý: Đích trừ Nguồn!)</td></tr>
    <tr><td><code>imulq Src, Dest</code></td><td>Nhân có dấu</td><td><code>Dest = Dest &times; Src</code></td></tr>
    <tr><td><code>salq k, Dest</code> / <code>shlq</code></td><td>Dịch trái</td><td><code>Dest = Dest &lt;&lt; k</code></td></tr>
    <tr><td><code>sarq k, Dest</code></td><td>Dịch phải số học</td><td><code>Dest = Dest &gt;&gt; k</code> (chèn bit dấu)</td></tr>
    <tr><td><code>shrq k, Dest</code></td><td>Dịch phải logic</td><td><code>Dest = Dest &gt;&gt; k</code> (chèn bit 0)</td></tr>
    <tr><td><code>xorq Src, Dest</code></td><td>XOR</td><td><code>Dest = Dest ^ Src</code> (<code>xorl %eax, %eax</code> để reset về 0)</td></tr>
    <tr><td><code>andq Src, Dest</code></td><td>AND</td><td><code>Dest = Dest &amp; Src</code></td></tr>
    <tr><td><code>orq Src, Dest</code></td><td>OR</td><td><code>Dest = Dest | Src</code></td></tr>
    <tr><td><code>incq Dest</code></td><td>Tăng 1</td><td><code>Dest = Dest + 1</code></td></tr>
    <tr><td><code>decq Dest</code></td><td>Giảm 1</td><td><code>Dest = Dest - 1</code></td></tr>
    <tr><td><code>negq Dest</code></td><td>Đổi dấu bù 2</td><td><code>Dest = -Dest</code></td></tr>
    <tr><td><code>notq Dest</code></td><td>Đảo bit</td><td><code>Dest = ~Dest</code></td></tr>
  </tbody>
</table>
"""
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
                    "content": """
<h4>1.1. Bốn cờ trạng thái 1-bit đơn lẻ (Condition Codes)</h4>
<ul>
  <li><b>CF (Carry Flag):</b> Cờ nhớ. Bật lên 1 khi phép toán số học không dấu (unsigned) bị tràn (có nhớ hoặc mượn ở bit MSB).</li>
  <li><b>ZF (Zero Flag):</b> Cờ zero. Bật lên 1 khi kết quả của phép toán vừa thực hiện bằng 0.</li>
  <li><b>SF (Sign Flag):</b> Cờ dấu. Bật lên 1 khi kết quả phép toán là số âm (bit MSB = 1).</li>
  <li><b>OF (Overflow Flag):</b> Cờ tràn. Bật lên 1 khi phép toán số nguyên có dấu (signed bù 2) bị tràn số (dương + dương ra âm, hoặc âm + âm ra dương).</li>
</ul>
<div class="note-box">
  <b>Chú ý:</b> Lệnh <code>leaq</code> KHÔNG làm thay đổi bất kỳ cờ điều kiện nào!
</div>

<h4>1.2. Lệnh so sánh CMP và kiểm tra TEST</h4>
<table class="table-theory">
  <thead><tr><th>Lệnh</th><th>Thao tác ngầm định</th><th>Tác động lên cờ</th><th>Mục đích sử dụng</th></tr></thead>
  <tbody>
    <tr>
      <td><code>cmpq S<sub>2</sub>, S<sub>1</sub></code></td>
      <td>Tính <code>S<sub>1</sub> - S<sub>2</sub></code> (không lưu kết quả)</td>
      <td>Cập nhật CF, ZF, SF, OF theo hiệu số</td>
      <td>So sánh hai giá trị: kiểm tra bằng nhau, lớn hơn, nhỏ hơn</td>
    </tr>
    <tr>
      <td><code>testq S<sub>2</sub>, S<sub>1</sub></code></td>
      <td>Tính <code>S<sub>1</sub> &amp; S<sub>2</sub></code> (không lưu kết quả)</td>
      <td>Cập nhật ZF, SF (luôn xóa CF = 0, OF = 0)</td>
      <td><code>testq %rax, %rax</code> để kiểm tra âm/dương/bằng 0; hoặc kiểm tra bitmask</td>
    </tr>
  </tbody>
</table>
"""
                },
                {
                    "title": "2. Lệnh SET & Các lệnh nhảy JUMP",
                    "content": """
<h4>2.1. Nhóm lệnh SET (Gán 1 byte thấp dựa trên cờ)</h4>
<table class="table-theory">
  <thead><tr><th>Lệnh</th><th>Tên gọi</th><th>Điều kiện cờ</th><th>Diễn giải</th></tr></thead>
  <tbody>
    <tr><td><code>sete / setz</code></td><td>Equal / Zero</td><td><code>ZF</code></td><td>Bằng nhau / Kết quả bằng 0</td></tr>
    <tr><td><code>setne / setnz</code></td><td>Not Equal</td><td><code>~ZF</code></td><td>Khác nhau / Khác 0</td></tr>
    <tr><td><code>sets / setns</code></td><td>Sign / Not Sign</td><td><code>SF / ~SF</code></td><td>Số âm / Số không âm</td></tr>
    <tr><td><code>setg / setnle</code></td><td>Greater (Signed)</td><td><code>~(SF ^ OF) &amp; ~ZF</code></td><td>Lớn hơn (có dấu: &gt;)</td></tr>
    <tr><td><code>setge / setnl</code></td><td>Greater or Equal (Signed)</td><td><code>~(SF ^ OF)</code></td><td>Lớn hơn hoặc bằng (có dấu: &ge;)</td></tr>
    <tr><td><code>setl / setnge</code></td><td>Less (Signed)</td><td><code>SF ^ OF</code></td><td>Nhỏ hơn (có dấu: &lt;)</td></tr>
    <tr><td><code>setle / setng</code></td><td>Less or Equal (Signed)</td><td><code>(SF ^ OF) | ZF</code></td><td>Nhỏ hơn hoặc bằng (có dấu: &le;)</td></tr>
    <tr><td><code>seta / setnbe</code></td><td>Above (Unsigned)</td><td><code>~CF &amp; ~ZF</code></td><td>Lớn hơn (không dấu)</td></tr>
    <tr><td><code>setb / setc</code></td><td>Below (Unsigned)</td><td><code>CF</code></td><td>Nhỏ hơn (không dấu)</td></tr>
  </tbody>
</table>

<h4>2.2. Nhóm lệnh nhảy JUMP</h4>
<ul>
  <li><b>Nhảy không điều kiện:</b> <code>jmp Label</code> (trực tiếp), <code>jmp *Operand</code> (gián tiếp qua con trỏ hoặc ô nhớ).</li>
  <li><b>Nhảy có điều kiện (Jcc):</b> <code>je</code>, <code>jne</code>, <code>js</code>, <code>jns</code>, <code>jg</code>, <code>jge</code>, <code>jl</code>, <code>jle</code> (so sánh có dấu), <code>ja</code>, <code>jae</code>, <code>jb</code>, <code>jbe</code> (so sánh không dấu).</li>
</ul>
"""
                },
                {
                    "title": "3. Cấu trúc rẽ nhánh (If-Else) & Conditional Move (CMOV)",
                    "content": """
<h4>3.1. Chuyển dịch C sang Assembly theo mẫu Goto</h4>
<pre><code>// Mã C:
if (test)
    then-block;
else
    else-block;

// Mẫu Assembly tương đương:
    t = test;
    if (!t) goto false_label;
    then-block;
    goto done;
false_label:
    else-block;
done:</code></pre>

<h4>3.2. Lệnh Conditional Move (<code>cmov</code>)</h4>
<ul>
  <li>Thay vì rẽ nhánh bằng <code>jmp</code>, CPU tính toán sẵn kết quả của cả hai nhánh, sau đó dùng <code>cmovcc Src, Dest</code> để sao chép có điều kiện.</li>
  <li><b>Ưu điểm vượt trội:</b> Tránh hiện tượng đoán sai nhánh (Branch Misprediction Penalty) trên các vi xử lý hiện đại có đường ống sâu (deep pipeline). Đoán sai nhánh có thể làm tốn 15-30 chu kỳ xung nhịp!</li>
  <li><b>KHI NÀO KHÔNG DÙNG ĐƯỢC CMOV:</b>
    <ul>
      <li>Khi một nhánh có phép toán tiềm ẩn nguy cơ lỗi runtime, ví dụ: <code>val = p ? *p : 0;</code> &rarr; Không được tính sẵn <code>*p</code> vì nếu <code>p == NULL</code> sẽ gây crash chương trình (Segfault)!</li>
      <li>Khi phép toán ở một nhánh có chi phí quá nặng (side effects lớn hoặc tính toán lâu).</li>
    </ul>
  </li>
</ul>
"""
                },
                {
                    "title": "4. Vòng lặp (Loops) & Bảng nhảy Switch (Jump Tables)",
                    "content": """
<h4>4.1. Các dạng chuyển đổi vòng lặp</h4>
<ul>
  <li><b>Do-While:</b> Dạng tự nhiên nhất trong hợp ngữ: thân vòng lặp chạy trước, kiểm tra điều kiện ở cuối và <code>jcc</code> ngược lên đầu.</li>
  <li><b>While Loop:</b> Thường được dịch theo 2 chiến lược:
    <ol>
      <li><i>Jump-to-middle:</i> Nhảy không điều kiện xuống nhãn kiểm tra điều kiện ở giữa trước, nếu đúng thì nhảy lên thân lặp.</li>
      <li><i>Guarded-do (GCC -O1):</i> Kiểm tra điều kiện ngay đầu bằng một lệnh rẽ nhánh; nếu sai thì bỏ qua, nếu đúng thì chuyển thành cấu trúc do-while.</li>
    </ol>
  </li>
  <li><b>For Loop:</b> Được chuyển đổi trực tiếp về dạng <code>while</code> tương đương: khởi tạo &rarr; kiểm tra &rarr; thân lặp &rarr; cập nhật bước nhảy.</li>
</ul>

<h4>4.2. Cấu trúc Switch & Bảng nhảy (Jump Tables)</h4>
<ul>
  <li>Khi số lượng <code>case</code> lớn và nằm trong khoảng giá trị liên tục, trình biên dịch tạo một <b>Bảng nhảy (Jump Table)</b> - mảng các địa chỉ mã lệnh.</li>
  <li><b>Thực thi O(1):</b> Nhảy gián tiếp bằng lệnh <code>jmp *.L4(,%rdi,8)</code>, thời gian thực thi không phụ thuộc vào số lượng case!</li>
  <li><b>Xử lý trường hợp mặc định (default):</b> Trừ đi case nhỏ nhất, sau đó dùng phép so sánh không dấu <code>ja .Ldefault</code> để bắt cả giá trị âm và giá trị vượt quá khoảng giới hạn chỉ trong một phép kiểm tra.</li>
  <li><b>Fall-through:</b> Khi một case không có lệnh <code>break</code>, chương trình thực thi thẳng xuống mã của case tiếp theo.</li>
</ul>
"""
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
                    "content": """
<h4>1.1. Cấu trúc bộ nhớ Ngăn xếp</h4>
<ul>
  <li>Ngăn xếp tuân theo nguyên tắc LIFO (Last-In, First-Out).</li>
  <li><b>ĐẶC TÍNH QUAN TRỌNG:</b> Ngăn xếp trong kiến trúc x86-64 <b>phát triển về phía địa chỉ THẤP</b> (Top of stack có địa chỉ nhỏ nhất).</li>
  <li>Thanh ghi <code>%rsp</code> (Stack Pointer) luôn trỏ tới byte đầu tiên của phần tử nằm trên đỉnh ngăn xếp.</li>
</ul>

<h4>1.2. Thao tác PUSHQ và POPQ</h4>
<table class="table-theory">
  <thead><tr><th>Lệnh</th><th>Các bước thực thi bên dưới</th><th>Ảnh hưởng lên %rsp</th></tr></thead>
  <tbody>
    <tr>
      <td><code>pushq Src</code></td>
      <td>1. <code>%rsp = %rsp - 8</code><br>2. <code>*(%rsp) = Src</code></td>
      <td>Giảm <code>%rsp</code> đi 8 byte (đỉnh ngăn xếp dời xuống địa chỉ thấp)</td>
    </tr>
    <tr>
      <td><code>popq Dest</code></td>
      <td>1. <code>Dest = *(%rsp)</code><br>2. <code>%rsp = %rsp + 8</code></td>
      <td>Tăng <code>%rsp</code> lên 8 byte (đỉnh ngăn xếp dời lên địa chỉ cao)</td>
    </tr>
  </tbody>
</table>
"""
                },
                {
                    "title": "2. Cơ chế gọi hàm: CALL, RET & Truyền tham số",
                    "content": """
<h4>2.1. Lệnh CALL và RET</h4>
<ul>
  <li><b><code>call Label</code>:</b>
    <ol>
      <li>Đẩy địa chỉ trả về (Return Address - địa chỉ lệnh ngay sau lệnh call) vào đỉnh ngăn xếp (tương đương <code>pushq %rip</code>).</li>
      <li>Gán địa chỉ nhãn hàm <code>Label</code> vào <code>%rip</code> để nhảy tới thực thi hàm.</li>
    </ol>
  </li>
  <li><b><code>ret</code>:</b>
    <ol>
      <li>Lấy địa chỉ trả về từ đỉnh ngăn xếp ra (tương đương <code>popq %rip</code>).</li>
      <li>Nhảy về tiếp tục thực thi lệnh ngay sau lệnh call ở hàm gọi.</li>
    </ol>
  </li>
</ul>

<h4>2.2. Quy ước truyền tham số (System V AMD64 ABI)</h4>
<p>6 tham số số nguyên / con trỏ đầu tiên được truyền trực tiếp qua các thanh ghi theo thứ tự cố định:</p>
<table class="table-theory">
  <thead><tr><th>Thứ tự tham số</th><th>Thanh ghi 64-bit</th><th>Thanh ghi 32-bit</th><th>Thanh ghi 16-bit</th><th>Thanh ghi 8-bit</th></tr></thead>
  <tbody>
    <tr><td>Tham số 1</td><td><code>%rdi</code></td><td><code>%edi</code></td><td><code>%di</code></td><td><code>%dil</code></td></tr>
    <tr><td>Tham số 2</td><td><code>%rsi</code></td><td><code>%esi</code></td><td><code>%si</code></td><td><code>%sil</code></td></tr>
    <tr><td>Tham số 3</td><td><code>%rdx</code></td><td><code>%edx</code></td><td><code>%dx</code></td><td><code>%dl</code></td></tr>
    <tr><td>Tham số 4</td><td><code>%rcx</code></td><td><code>%ecx</code></td><td><code>%cx</code></td><td><code>%cl</code></td></tr>
    <tr><td>Tham số 5</td><td><code>%r8</code></td><td><code>%r8d</code></td><td><code>%r8w</code></td><td><code>%r8b</code></td></tr>
    <tr><td>Tham số 6</td><td><code>%r9</code></td><td><code>%r9d</code></td><td><code>%r9w</code></td><td><code>%r9b</code></td></tr>
  </tbody>
</table>
<ul>
  <li><b>Tham số thứ 7 trở đi:</b> Được đẩy lên ngăn xếp (Stack) trước khi gọi <code>call</code>.</li>
  <li><b>Giá trị trả về của hàm:</b> Luôn được đặt trong thanh ghi <code>%rax</code> (và <code>%rdx</code> nếu trả về dữ liệu 128-bit).</li>
</ul>
"""
                },
                {
                    "title": "3. Bảo toàn thanh ghi: Caller-Saved vs Callee-Saved",
                    "content": """
<p>Để các hàm có thể phối hợp gọi nhau mà không ghi đè dữ liệu của nhau, ABI quy định rõ:</p>
<table class="table-theory">
  <thead><tr><th>Loại</th><th>Danh sách thanh ghi</th><th>Quy ước trách nhiệm</th></tr></thead>
  <tbody>
    <tr>
      <td><b>Caller-Saved</b><br>(Tạm thời / Temporary)</td>
      <td>
        <code>%rax</code> (return val)<br>
        <code>%rdi, %rsi, %rdx, %rcx, %r8, %r9</code> (arguments)<br>
        <code>%r10, %r11</code>
      </td>
      <td>Hàm gọi (Caller) phải tự cất vào stack nếu muốn giữ lại giá trị trước khi gọi hàm khác. Hàm được gọi (Callee) có quyền ghi đè tự do mà không cần phục hồi!</td>
    </tr>
    <tr>
      <td><b>Callee-Saved</b><br>(Được bảo tồn)</td>
      <td>
        <code>%rbx</code><br>
        <code>%rbp</code> (frame pointer)<br>
        <code>%r12, %r13, %r14, %r15</code><br>
        <code>%rsp</code> (stack pointer)
      </td>
      <td>Hàm được gọi (Callee) <b>BẮT BUỘC</b> phải bảo tồn giá trị gốc. Nếu Callee muốn dùng thanh ghi này, nó phải <code>push</code> cất đi ở đầu hàm và <code>pop</code> khôi phục lại nguyên vẹn trước khi <code>ret</code>.</td>
    </tr>
  </tbody>
</table>

<h4>3.3. Khung ngăn xếp (Stack Frame) & Vùng đỏ (Red Zone)</h4>
<ul>
  <li><b>Khung ngăn xếp (Stack Frame):</b> Vùng nhớ riêng biệt trên stack cấp phát cho mỗi lần gọi hàm. Cấp phát bằng <code>subq $N, %rsp</code> và giải phóng bằng <code>addq $N, %rsp</code>.</li>
  <li><b>Khi nào hàm cần cấp phát Stack Frame:</b>
    <ol>
      <li>Có quá nhiều biến cục bộ không đủ thanh ghi chứa.</li>
      <li>Biến cục bộ là mảng hoặc struct.</li>
      <li>Cần lấy địa chỉ của biến cục bộ (dùng toán tử <code>&</code> trong C).</li>
      <li>Hàm gọi một hàm khác có nhiều hơn 6 tham số.</li>
      <li>Cần cất giữ các thanh ghi Callee-saved.</li>
    </ol>
  </li>
  <li><b>Vùng đỏ (Red Zone 128 byte):</b> Vùng nhớ 128 byte phía dưới <code>%rsp</code> trong x86-64 System V ABI. Các hàm lá (leaf functions - không gọi hàm nào khác) có thể tận dụng vùng này để chứa biến tạm mà không cần thay đổi con trỏ <code>%rsp</code>.</li>
</ul>
"""
                },
                {
                    "title": "4. Lỗ hổng Tràn bộ đệm (Buffer Overflow) & Các biện pháp bảo vệ",
                    "content": """
<h4>4.1. Bản chất lỗ hổng Buffer Overflow</h4>
<ul>
  <li>Trong C, các hàm nhập dữ liệu không an toàn như <code>gets()</code>, <code>strcpy()</code>, <code>sprintf()</code>, <code>scanf("%s")</code> không kiểm tra độ dài dữ liệu nhập vào so với kích thước mảng được cấp phát trên stack.</li>
  <li>Khi người dùng nhập chuỗi dài vượt quá kích thước mảng:
    <br><code>Mảng cục bộ &rarr; Thanh ghi Callee-saved đã lưu &rarr; Địa chỉ trả về (Return Address)</code>
  </li>
  <li>Dữ liệu nhập tràn sẽ <b>ghi đè lên Return Address</b>! Kẻ tấn công thay đổi Return Address thành địa chỉ của mã độc (Shellcode) hoặc chuỗi ROP (Return-Oriented Programming) để chiếm quyền điều khiển thực thi chương trình.</li>
</ul>

<h4>4.2. Các cơ chế phòng vệ hiện đại</h4>
<table class="table-theory">
  <thead><tr><th>Cơ chế bảo vệ</th><th>Cách thức hoạt động</th><th>Cờ GCC / Hệ thống</th></tr></thead>
  <tbody>
    <tr>
      <td><b>1. Stack Canary (Stack Protector)</b></td>
      <td>Trình biên dịch chèn một giá trị ngẫu nhiên bí mật (Canary) ngay giữa mảng cục bộ và Return Address. Trước khi lệnh <code>ret</code> chạy, chương trình kiểm tra xem Canary có bị sửa đổi không. Nếu có &rarr; lập tức ngắt chương trình (<code>__stack_chk_fail</code>).</td>
      <td><code>-fstack-protector</code> (mặc định bật)</td>
    </tr>
    <tr>
      <td><b>2. ASLR (Address Space Layout Randomization)</b></td>
      <td>Hệ điều hành ngẫu nhiên hóa vị trí không gian địa chỉ bộ nhớ (Stack, Heap, Thư viện chia sẻ libc, Mã lệnh) mỗi lần chương trình khởi chạy, khiến kẻ tấn công không thể đoán trước địa chỉ tuyệt đối để nhảy vào.</td>
      <td>Hệ điều hành Linux kernel quản lý</td>
    </tr>
    <tr>
      <td><b>3. Non-Executable Stack (NX / W^X)</b></td>
      <td>Phần cứng MMU đánh dấu trang nhớ vùng Stack là không có quyền thực thi (No-Execute bit). Ngăn chặn mã độc shellcode nằm trên stack được CPU thực thi trực tiếp.</td>
      <td>Phần cứng CPU & Trình liên kết (GNU_STACK)</td>
    </tr>
  </tbody>
</table>
"""
                }
            ]
        }
    ]
