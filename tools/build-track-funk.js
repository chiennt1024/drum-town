// tools/build-track-funk.js
const fs = require('fs');
const path = require('path');

const data = {
  "funk-ghost-notes": {
    "tagline": "Nốt chạm nhẹ thì thầm — linh hồn đưa rãnh nhịp Funk vào đời thực",
    "bodyHtml": "<p>Trong nhạc rock, trống snare chủ yếu đóng vai trò giáng những cú nện backbeat đanh thép ở phách 2 và 4. Nhưng trong <strong>nhạc Funk</strong>, trống snare là một sinh vật sống động với hai cuộc đời song song: những cú rimshot nổ vang như sấm sét ở phách backbeat, và ở giữa các phách đó là <strong>những nốt ghost note (nốt ma) thì thầm êm ái</strong>.</p><h2 class=\"section-label\">Bí quyết: Hai tầng độ cao dùi (Two Stick Heights)</h2><p>Điều phân biệt một tay trống funk thực thụ với người mới bắt đầu chính là <em>tỷ lệ tương phản âm lượng</em>. Một cú backbeat giơ cao 25-30 cm tạo lực va đập mạnh; trong khi nốt ghost note chỉ được phép cách mặt trống từ <strong>2 đến 3 cm</strong>. Bạn không dùng lực cơ cánh tay — bạn chỉ thả lỏng cổ tay và dùng ba ngón tay sau đón bắt độ nảy tự nhiên của mặt trống.</p>",
    "graduationCriteria": [
      "Tỷ lệ âm lượng giữa tiếng rimshot backbeat và nốt ghost note đạt ít nhất 5:1",
      "Dòng chảy ghost note nốt móc kép (Bài 2) không làm xô lệch tiếng kick và hi-hat",
      "Rãnh nhịp Funk hoàn chỉnh (Bài 4) giữ vững độ nảy và sự thư thái ở ♩=90 suốt 2 phút"
    ],
    "exercises": [
      {
        "title": "1 — Luyện độ cao dùi: Nốt thì thầm và Tiếng tát",
        "tip": "Tay trái luân phiên: một cú chạm cực nhẹ (ghost) cách mặt trống 2 cm, rồi một cú giáng mạnh (accent). Đừng gồng cơ."
      },
      {
        "title": "2 — Dòng chảy Ghost note nốt móc kép giữa hai cú Backbeat",
        "tip": "Sau cú backbeat ở phách 2, tay trái gõ nhẹ các nốt móc kép thì thầm lấp đầy khoảng trống hướng về phách 4."
      },
      {
        "title": "3 — Cặp Ghost note trước cú Backbeat (Cú đẩy kép)",
        "tip": "Gõ hai nốt ghost note liên tiếp ngay sát trước cú snare mạnh ở phách 2 và 4: <em>(e &amp;) CHÁCH</em>. Tạo lực đẩy tưng bừng."
      },
      {
        "title": "4 — Rãnh nhịp Funk hoàn chỉnh với Ghost Notes",
        "tip": "Kết hợp chân kick đảo phách, tay hi-hat móc đơn thẳng và snare đầy sắc thái. Nhịp trống lập tức tỏa sáng rực rỡ."
      }
    ]
  },
  "funk-sixteenth-feel": {
    "tagline": "Lưới nốt móc kép vi mô — cỗ máy thời gian điều khiển mọi bước nhảy Funk",
    "bodyHtml": "<p>Âm nhạc Funk không vận hành trên những phách nốt đen đơn giản; nó sống và thở trên <strong>lưới phân nhịp nốt móc kép vi mô (16th-note grid)</strong>. Mọi cú dậm kick, mọi nốt mở hi-hat và từng nốt ghost note đều được căn chuẩn xác trên 16 vị trí vi mô của mỗi ô nhịp.</p><h2 class=\"section-label\">Cảm giác nhịp 'Pocket' nảy hạt</h2><p>Dù bàn tay bạn đang đánh hi-hat nốt đen hay móc đơn, trong đầu bạn phải luôn vang lên dòng chảy <em>1-e-&amp;-a, 2-e-&amp;-a</em>. Khi chiếc đồng hồ vi mô đó đã vận hành bên trong tiềm thức, bạn có thể đặt bất kỳ cú gõ nào vào đúng vị trí của nó với độ chính xác tuyệt đối.</p>",
    "graduationCriteria": [
      "Có thể đếm to rõ 1-e-&-a trong khi chơi rãnh nhịp funk mà không bị vấp miệng",
      "Các nốt kick vi mô rơi chính xác vào nốt 'e' hoặc 'a' mà không bị lệch sang nốt móc đơn",
      "Giữ vững độ nảy dẻo dai ở ♩=95 suốt 2 phút"
    ],
    "exercises": [
      {
        "title": "1 — Hi-Hat nốt móc kép hai tay trên nền Kick Funk",
        "tip": "Hai tay chia sẻ dòng chảy nốt móc kép trên hi-hat, chân kick đệm các nốt đảo phách bên dưới."
      },
      {
        "title": "2 — Kick rơi vào nốt 'e' (Ngay sau phách chính)",
        "tip": "Cú kick xuất hiện ở nốt móc kép thứ hai: <em>1 (e-KICK) &amp; a</em>. Cú thúc bất ngờ tạo độ nhún nhảy cực mạnh."
      },
      {
        "title": "3 — Kick rơi vào nốt 'a' (Đón đầu phách tiếp theo)",
        "tip": "Cú kick xuất hiện ở nốt móc kép thứ tư: <em>1 e &amp; (a-KICK) 2</em>. Phóng thẳng vào cú backbeat của snare."
      },
      {
        "title": "4 — Rãnh nhịp Funk nốt móc kép hoàn chỉnh",
        "tip": "Tổng hòa các nốt vi mô: kick ở 'e' và 'a', snare có ghost note. Rãnh nhịp funk đậm đặc chất rãnh."
      }
    ]
  },
  "funk-pocket-drumming": {
    "tagline": "Đánh trong 'Pocket' — cảm giác đặt nhịp chắc nịch, không nhanh không chậm",
    "bodyHtml": "<p>Trong giới nhạc sĩ chuyên nghiệp, lời khen tặng cao quý nhất dành cho một tay trống không phải là \"bạn đánh nhanh thế\", mà là <strong>\"Bạn đánh trúng Pocket tuyệt vời!\"</strong></p><h2 class=\"section-label\">Pocket thực sự là gì?</h2><p>\"Pocket\" là trạng thái kỳ diệu khi nhịp trống của bạn đầm chắc, vững vàng và hòa quyện hoàn hảo với tiếng đàn bass guitar đến mức người nghe không thể ngồi yên mà buộc phải lắc lư theo. Bạn không kéo nhanh về phía trước (rushing), cũng không bị ì ạch trôi về phía sau (dragging) — bạn đặt từng nốt nhạc vào đúng chiếc túi không gian êm ái nhất của thời gian.</p>",
    "graduationCriteria": [
      "Duy trì một rãnh nhịp pocket duy nhất ở ♩=88 suốt 2 phút với âm sắc và độ đầm chắc không đổi",
      "Tiếng trống Kick khóa chặt tuyệt đối vào tiếng đàn Bass trong bản nhạc mẫu",
      "Không hề có cảm giác nôn nóng muốn thêm thắt câu fill hay nốt thừa"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Pocket cơ bản: Sự điềm tĩnh tối thượng",
        "tip": "Chơi rãnh nhịp funk mộc mạc nhất ở ♩=85. Tập trung toàn bộ tâm trí vào sự gắn kết hoàn hảo giữa kick và snare."
      },
      {
        "title": "2 — Pocket với tiếng mở Hi-Hat tinh tế",
        "tip": "Thêm một cú mở hé hi-hat nhẹ nhàng ở nốt &amp; của 4. Đóng chặt lại ngay phách 1 không chút do dự."
      },
      {
        "title": "3 — Rãnh nhịp Pocket nốt đen trên lá Hi-Hat",
        "tip": "Hi-hat đánh thưa ở nốt đen, buộc bạn phải cảm nhận trọn vẹn chiếc túi thời gian bằng trực giác nội tại."
      },
      {
        "title": "4 — Thử thách 2 phút Pocket không lay chuyển",
        "tip": "Khóa chặt vào máy đếm nhịp. Hãy biến mình thành chiếc neo vững chắc nhất cho cả ban nhạc tựa vào."
      }
    ]
  },
  "funk-clyde-stubblefield": {
    "tagline": "Clyde Stubblefield — người sáng tạo ra điệu Funky Drummer huyền thoại của James Brown",
    "bodyHtml": "<p>Nếu có một đoạn trống được lấy mẫu (sampled) nhiều nhất trong lịch sử âm nhạc nhân loại — xuất hiện trong hàng ngàn bài hát hip-hop từ Public Enemy, N.W.A đến Beastie Boys — đó chính là đoạn breakbeat dài 8 ô nhịp của <strong>Clyde Stubblefield</strong> trong ca khúc <em>Funky Drummer</em> (1970) của James Brown.</p><h2 class=\"section-label\">Vũ điệu của đôi bàn tay</h2><p>Điều làm nên ma thuật của Clyde không phải là sức mạnh cơ bắp, mà là <strong>sự uyển chuyển vô song của đôi bàn tay</strong>: tiếng hi-hat nốt móc đơn nhấp nhô sống động, kết hợp cùng mạng lưới ghost note tinh xảo như tiếng thì thầm của gió trên mặt trống snare.</p>",
    "graduationCriteria": [
      "Chơi câu breakbeat 'Funky Drummer' ở ♩=96 với đầy đủ các nốt ghost note và cú mở hi-hat đặc trưng",
      "Cú mở hi-hat ở nốt 'e của 4' rơi chính xác không bị trượt",
      "Các nốt ghost note giữ được độ êm ái, thanh thoát chuẩn phong cách Clyde Stubblefield"
    ],
    "exercises": [
      {
        "title": "1 — Khung sườn Funky Drummer (Chưa có Ghost Notes)",
        "tip": "Luyện bộ khung kick, snare và hi-hat trước. Chú ý cú kick đón đầu ở nốt &amp; của 3."
      },
      {
        "title": "2 — Đưa mạng lưới Ghost Note của Clyde vào vị trí",
        "tip": "Thêm các nốt ghost note êm ái trên snare. Tay trái lướt nhẹ như đang vuốt ve mặt trống."
      },
      {
        "title": "3 — Cú mở Hi-Hat tinh tế ở nốt 'e của 4'",
        "tip": "Đặc sản của Funky Drummer: nhấc nhẹ hi-hat ở nốt 'e' của phách 4 rồi dập đóng lại ngay nốt '&'."
      },
      {
        "title": "4 — Câu Funky Drummer Breakbeat hoàn chỉnh",
        "tip": "Tái hiện nguyên vẹn một trong những di sản vĩ đại nhất của văn hóa âm nhạc thế giới ở ♩=96."
      }
    ]
  },
  "funk-the-meters-intro": {
    "tagline": "Ban nhạc The Meters & Zigaboo Modeliste — tiết tấu New Orleans Funk giòn giã",
    "bodyHtml": "<p>Tại thành phố New Orleans đầy nắng gió, ban nhạc <strong>The Meters</strong> cùng tay trống huyền thoại <strong>Joseph \"Zigaboo\" Modeliste</strong> đã khai sinh ra một trường phái Funk hoàn toàn khác biệt: không cứng nhắc như máy móc, mà <strong>lỏng lẻo, nhún nhảy và ngập tràn cảm xúc đường phố</strong>.</p><h2 class=\"section-label\">Sự hòa quyện giữa Marching và R&amp;B</h2><p>Phong cách của Zigaboo bắt nguồn từ các đội trống diễu hành Second Line của New Orleans: các nốt nhấn hi-hat đảo phách liên tục, tiếng snare đánh vành lách cách và những cú kick dậm ngẫu hứng đầy ma thuật.</p>",
    "graduationCriteria": [
      "Rãnh nhịp phong cách The Meters (Bài 1) giữ được độ nhún nhảy đặc trưng ở ♩=86",
      "Các cú mở hi-hat đảo phách ăn khớp tự nhiên với bước chân kick",
      "Cảm nhận rõ nét độ 'lỏng tay' (loose feel) mà không làm rớt nhịp máy đếm nhịp"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp 'Cissy Strut' cơ bản: Bộ khung của Zigaboo",
        "tip": "Rãnh nhịp trứ danh của bài 'Cissy Strut'. Chú ý khoảng trống rộng mở giữa các nốt gõ."
      },
      {
        "title": "2 — Biến tấu Hi-Hat nhấp nhô kiểu New Orleans",
        "tip": "Hi-hat không đánh thẳng đuỗn mà nhấn nhá từng phách lệch. Âm thanh mang đậm mùi vị lễ hội Mardi Gras."
      },
      {
        "title": "3 — Cú Kick trượt đón đầu",
        "tip": "Chân kick dậm những nốt lệch kỳ lạ nhưng cuốn hút không thể cưỡng lại."
      },
      {
        "title": "4 — Rãnh nhịp The Meters hoàn chỉnh",
        "tip": "Thả lỏng toàn bộ cơ thể. Chơi với nụ cười trên môi và sự hào sảng của miền Nam nước Mỹ."
      }
    ]
  },
  "funk-james-brown": {
    "tagline": "Nhịp 'The One' của James Brown — nhấn mạnh tuyệt đối vào phách 1",
    "bodyHtml": "<p>Ông hoàng nhạc Soul James Brown có một triết lý bất di bất dịch đã thay đổi vĩnh viễn lịch sử âm nhạc: <strong>\"Give me THE ONE!\" (Hãy trao cho ta Phách 1!)</strong>.</p><h2 class=\"section-label\">Sức mạnh tối thượng của Phách 1</h2><p>Trong quan niệm của James Brown, bạn có thể biến tấu, đảo phách, nhào lộn hay chơi bất kỳ thứ gì kỳ quái ở phách 2, 3 và 4 — nhưng <strong>khi Phách 1 của ô nhịp mới xuất hiện, toàn bộ ban nhạc phải cùng giáng một cú đòn sấm sét xuống đúng một điểm</strong>. Đó là nơi mọi năng lượng hội tụ, nơi người nghe tìm thấy mặt đất vững chắc để tiếp tục khiêu vũ cuồng nhiệt.</p>",
    "graduationCriteria": [
      "Cú giáng ở Phách 1 (Kick + Crash/Hat) nổ vang dứt khoát với uy lực tối đa",
      "Phần còn lại của ô nhịp (phách 2, 3, 4) chơi nhún nhảy đảo phách mà không làm mờ nhạt phách 1",
      "Giữ vững kỷ luật 'The One' suốt 16 ô nhịp liên tục ở ♩=108"
    ],
    "exercises": [
      {
        "title": "1 — Khẳng định 'The One': Cú giáng sấm sét ở phách 1",
        "tip": "Phách 1 nổ vang toàn lực. Phách 2, 3, 4 chơi rãnh nhịp funk êm dịu hơn nhường chỗ cho ca sĩ."
      },
      {
        "title": "2 — Đảo phách ở phách 3 và 4 nhưng luôn trở về 'The One'",
        "tip": "Cho phép chân kick nhảy múa ở nửa sau ô nhịp, nhưng tái lập trật tự tuyệt đối khi bước sang phách 1."
      },
      {
        "title": "3 — Cảm giác bài hát 'Cold Sweat' kinh điển",
        "tip": "Rãnh nhịp bài 'Cold Sweat' (1967) do Jabo Starks chơi — một trong những bản ghi âm funk đầu tiên của nhân loại."
      },
      {
        "title": "4 — Cú dằn 'The One' chuyển đoạn",
        "tip": "Cả ban nhạc cùng dừng lại ở phách 4 rồi đồng thanh giáng xuống ở Phách 1 của ô nhịp mới."
      }
    ]
  },
  "funk-linear-funk": {
    "tagline": "Tiết tấu tuyến tính trong nhạc Funk — không chi nào đánh trùng nhau",
    "bodyHtml": "<p><strong>Funk tuyến tính (Linear Funk)</strong> là đỉnh cao của sự phối khí gãy gọn: không bao giờ có tiếng hi-hat đánh trùng cùng lúc với tiếng snare, và không có tiếng snare đánh trùng với tiếng kick. Từng nốt nối tiếp nhau như một chuỗi domino hoàn hảo.</p><h2 class=\"section-label\">Độ trong trẻo và sắc sảo</h2><p>Khi các chi không đè lên nhau, bài hát không bao giờ bị đục tiếng. Rãnh nhịp nghe nhẹ nhàng, trong veo nhưng lại có độ nảy vô cùng sắc nét và cuốn hút — phong cách được đưa lên tầm nghệ thuật bởi Mike Clark và David Garibaldi.</p>",
    "graduationCriteria": [
      "Rãnh nhịp tuyến tính 1 ô nhịp (Bài 1) chơi sạch sẽ ở ♩=90 mà không có hai chi nào chạm mặt trống cùng lúc",
      "Âm lượng giữa nốt tay và nốt chân cân bằng hoàn hảo",
      "Câu Linear Funk hoàn chỉnh (Bài 4) tuôn chảy tự nhiên ở ♩=100"
    ],
    "exercises": [
      {
        "title": "1 — Mẫu hình Linear Funk 1 phách cơ bản",
        "tip": "Bốn nốt móc kép: Hi-Hat → Snare (ghost) → Kick → Hi-Hat. Từng nốt xuất hiện độc lập."
      },
      {
        "title": "2 — Mở rộng chuỗi Linear qua 2 phách",
        "tip": "Kết hợp cú backbeat snare vào chuỗi tuyến tính mà không để hi-hat gõ đè lên cú snare."
      },
      {
        "title": "3 — Mẫu hình Linear Funk phong cách Mike Clark",
        "tip": "Rãnh nhịp trứ danh của bài 'Actual Proof'. Chân kick và tay trái đan xen tinh xảo."
      },
      {
        "title": "4 — Rãnh nhịp Linear Funk trọn vẹn cả ô nhịp",
        "tip": "Mười sáu nốt móc kép nối đuôi nhau không một khoảnh khắc trùng nốt. Đỉnh cao của sự độc lập chi."
      }
    ]
  },
  "funk-the-meters": {
    "tagline": "Nâng cao với phong cách Zigaboo Modeliste của The Meters",
    "bodyHtml": "<p>Đi sâu vào thế giới của <strong>Zigaboo Modeliste</strong> là khám phá cách một tay trống có thể biến bộ trống mộc thành một cỗ máy trò chuyện bằng ngôn ngữ cơ thể. Nhịp điệu của Zigaboo vừa mang tính kỷ luật của diễu hành quân đội, vừa mang sự phóng khoáng hoang dã của vùng đầm lầy Louisiana.</p><h2 class=\"section-label\">Nghệ thuật nhả nhịp vi mô</h2><p>Các nốt đánh của Zigaboo thường nằm hơi trễ nhẹ (behind the beat), tạo ra cảm giác lững thững, nhàn nhã nhưng không bao giờ bị mất đà. Từng cú gõ vành rim-click và nốt mở hi-hat như đang cười đùa cùng người nghe.</p>",
    "graduationCriteria": [
      "Chơi câu groove bài 'Look-Ka Py Py' chuẩn xác ở ♩=84",
      "Các nốt nhấn hi-hat lệch phách vang lên tự nhiên không bị gượng gạo",
      "Duy trì được cảm giác 'nửa swing nửa straight' đặc trưng của New Orleans"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp bài 'Look-Ka Py Py'",
        "tip": "Hi-hat mở ở các nốt lệch bất ngờ, snare chơi rimshot đanh giòn, kick dậm ngẫu hứng."
      },
      {
        "title": "2 — Tiết tấu gõ vành Snare kiểu New Orleans Second Line",
        "tip": "Tay phải chơi trên hi-hat, tay trái chuyển sang gõ cross-stick kết hợp ghost note."
      },
      {
        "title": "3 — Cú Kick đảo phách lơ lửng của Zigaboo",
        "tip": "Chân kick bỏ qua phách 1, dậm vào nốt 'e' của 1 và nốt &amp; của 2. Đầy sự bất ngờ thú vị."
      },
      {
        "title": "4 — Rãnh nhịp Zigaboo nâng cao hoàn chỉnh",
        "tip": "Hòa quyện toàn bộ các yếu tố đường phố New Orleans vào một rãnh nhịp sống động."
      }
    ]
  },
  "funk-purdie-intro": {
    "tagline": "Bernard Purdie — tay trống phòng thu được thu âm nhiều nhất lịch sử",
    "bodyHtml": "<p>Với hơn 4.000 album thu âm cùng những huyền thoại như Aretha Franklin, Steely Dan, B.B. King và James Brown, <strong>Bernard \"Pretty\" Purdie</strong> là vị thánh sống của nghệ thuật đệm trống phòng thu.</p><h2 class=\"section-label\">Nụ cười và sự tự tin thép</h2><p>Purdie nổi tiếng với câu nói: <em>\"If you don't groove, you don't move!\"</em>. Lối chơi của ông là sự kết hợp hoàn hảo giữa nhịp đập chắc nịch như bức tường thành, những nốt ghost note êm như nhung và một sự tự tin ngút trời trong từng cú gõ.</p>",
    "graduationCriteria": [
      "Rãnh nhịp phòng thu kiểu Purdie (Bài 1) giữ đều đặn suốt 2 phút ở ♩=92",
      "Cú rimshot ở phách 2 và 4 có âm lượng và độ đanh vang tuyệt đối đồng nhất",
      "Tiếng hi-hat mở nhả êm ái đúng phong cách Aretha Franklin"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Funk phòng thu cơ bản của Bernard Purdie",
        "tip": "Đơn giản, chắc nịch, không một nốt thừa. Từng cú gõ đều mang giá trị vàng ngọc."
      },
      {
        "title": "2 — Cú mở Hi-Hat mang thương hiệu Purdie",
        "tip": "Mở hé hi-hat ở nốt lệch rồi dập đóng êm ru như tiếng thì thầm."
      },
      {
        "title": "3 — Phối hợp cùng tiếng đàn Bass kiểu Aretha Franklin",
        "tip": "Chân kick đi theo từng bước chạy của guitar bass. Khóa chặt hai nhạc cụ thành một khối thống nhất."
      },
      {
        "title": "4 — Rãnh nhịp Purdie Groove hoàn chỉnh",
        "tip": "Chơi với nụ cười trên môi và sự tự tin tuyệt đối của một huyền thoại phòng thu."
      }
    ]
  },
  "funk-ghost-displacement": {
    "tagline": "Dịch chuyển nốt Ghost note qua các vị trí vi mô",
    "bodyHtml": "<p>Khi bạn đã quen với việc đặt nốt ghost note ở các vị trí mặc định, bước tiến tiếp theo để trở thành một tay trống funk bậc thầy là <strong>dịch chuyển (displace) nốt ghost note qua các vị trí nốt móc kép khác nhau</strong>.</p><h2 class=\"section-label\">Sự biến ảo khôn lường</h2><p>Bằng cách dịch chuyển nốt ghost note sang vị trí nốt 'e' hoặc nốt 'a', bạn tạo ra những ảo giác tiết tấu kỳ ảo: rãnh nhịp vẫn giữ nguyên tốc độ và nhịp backbeat ở 2 và 4, nhưng cảm giác chuyển động bên dưới liên tục nhấp nhô biến hóa.</p>",
    "graduationCriteria": [
      "Có thể chuyển đổi vị trí nốt ghost note từ nốt 'e' sang nốt 'a' mà không làm trôi tiếng backbeat",
      "Độ cao của dùi nốt ghost note luôn giữ dưới 3 cm trong suốt quá trình dịch chuyển",
      "Bài tập tổng hợp (Bài 4) chơi mượt mà ở ♩=88"
    ],
    "exercises": [
      {
        "title": "1 — Ghost note ở vị trí nốt 'e' (Ngay sau phách chính)",
        "tip": "Gõ nhẹ nốt ghost note ngay nốt móc kép thứ hai: <em>1 (e-ghost) &amp; a</em>."
      },
      {
        "title": "2 — Ghost note ở vị trí nốt 'a' (Ngay trước phách chính)",
        "tip": "Gõ nhẹ nốt ghost note ở nốt móc kép thứ tư: <em>1 e &amp; (a-ghost) 2</em>."
      },
      {
        "title": "3 — Ghost note kẹp đôi: Cả ở 'e' và 'a'",
        "tip": "Hai nốt ghost note kẹp hai bên nốt hi-hat ở giữa: <em>1 (e) &amp; (a)</em>."
      },
      {
        "title": "4 — Rãnh nhịp dịch chuyển Ghost note biến ảo",
        "tip": "Trộn lẫn các vị trí ghost note khác nhau trong cùng một ô nhịp. Đỉnh cao của sự tinh tế bàn tay trái."
      }
    ]
  },
  "funk-new-orleans": {
    "tagline": "Nhịp điệu đường phố New Orleans Second Line",
    "bodyHtml": "<p>Tại các lễ hội đường phố New Orleans, đoàn người diễu hành nhảy múa theo sau ban nhạc kèn đồng được gọi là <strong>\"Second Line\"</strong>. Tiết tấu Second Line là cội nguồn của toàn bộ âm nhạc Funk hiện đại.</p><h2 class=\"section-label\">Điệu nhảy giữa hành khúc và Swing</h2><p>Second line là sự giao thoa kỳ diệu giữa tính kỷ luật của điệu hành khúc quân đội (marching cadence) với sự lơi lả nhún nhảy của nhạc Swing Châu Phi. Trống snare gõ các nốt nhấn đảo phách liên tục trên nền dậm chân kick bốc lửa.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Second Line cơ bản (Bài 1) giữ được độ nhún nhảy hào sảng ở ♩=95",
      "Phân biệt rõ ràng giữa nốt nhấn và nốt tap trên mặt trống snare",
      "Mẫu hình diễu hành hoàn chỉnh (Bài 4) đưa người nghe bước vào không gian lễ hội đường phố"
    ],
    "exercises": [
      {
        "title": "1 — Tiết tấu Second Line cơ bản trên Snare",
        "tip": "Mẫu hình nốt nhấn diễu hành đặc trưng: <em>MỘT, hai, và-ba, bốn-và</em>."
      },
      {
        "title": "2 — Thêm tiếng dậm Kick và chân Hi-Hat",
        "tip": "Chân kick dậm nhịp ở 1 và phách lệch, chân trái dập hi-hat ở phách 4."
      },
      {
        "title": "3 — Chuyển một phần tiết tấu sang gõ vành kim loại",
        "tip": "Tay phải gõ trên vành trống hoặc lá cymbal, tay trái tiếp tục nhấn nhá trên snare."
      },
      {
        "title": "4 — Điệu New Orleans Second Line hoàn chỉnh",
        "tip": "Hòa mình vào không khí cuồng nhiệt của lễ hội New Orleans. Đầy sức sống và niềm vui thuần khiết."
      }
    ]
  },
  "funk-displacement": {
    "tagline": "Dịch chuyển toàn bộ nhịp điệu (Rhythmic Displacement)",
    "bodyHtml": "<p><strong>Dịch chuyển nhịp điệu (Rhythmic Displacement)</strong> là một kỹ thuật tư duy nâng cao: bạn lấy một rãnh nhịp quen thuộc và <strong>dịch chuyển toàn bộ các nốt của nó sang bên cạnh đúng một nốt móc kép (hoặc nửa phách)</strong>.</p><h2 class=\"section-label\">Thử thách thần kinh tối thượng</h2><p>Cú backbeat của trống snare vốn nằm ở phách 2 và 4 nay bị đẩy sang nốt <em>&amp; của 2</em> hoặc nốt <em>e của 2</em>! Đối với người nghe chưa quen, họ sẽ cảm thấy như sàn nhà bị nghiêng ngả; nhưng đối với người sành điệu, đó là một trải nghiệm âm nhạc nghẹt thở và đầy phấn khích.</p>",
    "graduationCriteria": [
      "Chơi rãnh nhịp bị dịch chuyển 1 nốt móc kép ở ♩=80 mà không bị phản xạ tự nhiên kéo về nhịp cũ",
      "Máy đếm nhịp vẫn giữ nguyên vị trí phách 1 trong khi rãnh nhịp lơ lửng xung quanh",
      "Biểu diễn sự chuyển giao từ nhịp thẳng sang nhịp dịch chuyển một cách mượt mà"
    ],
    "exercises": [
      {
        "title": "1 — Dịch chuyển cú Snare sang nốt & của 2",
        "tip": "Snare không rơi ở phách 2 nữa mà rơi trễ nửa phách ở nốt <em>&amp;</em>. Giữ vững tiếng kick ở phách 1."
      },
      {
        "title": "2 — Dịch chuyển toàn bộ rãnh nhịp sang nửa phách",
        "tip": "Mọi nốt kick, snare và hi-hat đều bị đẩy lùi nửa phách. Cảm giác như toàn bộ thế giới đang nhảy lùi."
      },
      {
        "title": "3 — Dịch chuyển vi mô: Sang một nốt móc kép (vị trí 'e')",
        "tip": "Thử thách khó nhất: dịch chuyển 1/16 phách. Đòi hỏi sự tập trung cao độ của não bộ."
      },
      {
        "title": "4 — Ứng dụng Displacement trong câu chuyển đoạn",
        "tip": "Dùng một ô nhịp dịch chuyển để làm người nghe ngạc nhiên trước khi trở về rãnh nhịp vững chãi ở phách 1."
      }
    ]
  },
  "funk-purdie-shuffle": {
    "tagline": "Bernard Purdie Shuffle huyền thoại — đỉnh cao của nhịp điệu liên ba và Ghost Notes",
    "bodyHtml": "<p>Được coi là <strong>chén thánh của các rãnh nhịp trống</strong>, <strong>Purdie Shuffle</strong> là sáng tạo vĩ đại nhất của Bernard Purdie — xuất hiện trong bài hát bất hủ <em>Home at Last</em> và <em>Babylon Sisters</em> của ban nhạc Steely Dan, đồng thời là nguồn cảm hứng trực tiếp cho John Bonham tạo ra điệu <em>Fool in the Rain</em> và Jeff Porcaro tạo ra <em>Rosanna</em>.</p><h2 class=\"section-label\">Sự kết hợp giữa Half-Time và Ghost Note liên ba</h2><p>Purdie Shuffle vận hành trên nền nhịp liên ba (triplets) với cảm giác Half-Time (snare dằn ở phách 3). Điều làm nên sự ma thuật của nó là: <strong>tay trái chơi các nốt ghost note thì thầm lấp đầy tất cả các nốt ở giữa của chùm liên ba</strong>, tạo thành một dòng chảy xào xạc cuồn cuộn êm đềm như một dòng suối ngầm.</p>",
    "graduationCriteria": [
      "Chơi đúng thế tay Purdie Shuffle ở ♩=80 suốt 2 phút liên tục",
      "Các nốt ghost note liên ba trên snare thì thầm êm ái, làm nổi bật cú dằn backbeat ở phách 3",
      "Tiếng mở hi-hat ở nốt thứ ba của chùm liên ba vang lên ngọt ngào đúng chất Steely Dan"
    ],
    "exercises": [
      {
        "title": "1 — Khung sườn Purdie Shuffle (Chưa có Ghost Notes)",
        "tip": "Tay phải chơi nhịp shuffle trên hi-hat, snare dằn ở phách 3, kick ở phách 1 và nốt cuối của phách 2."
      },
      {
        "title": "2 — Đưa các nốt Ghost Note liên ba vào tay trái",
        "tip": "Tay trái lấp đầy nốt giữa của chùm liên ba bằng tiếng ghost note êm ái: <em>1-(ghost)-let 2-(ghost)-let</em>."
      },
      {
        "title": "3 — Thêm cú mở Hi-Hat mang thương hiệu Bernard Purdie",
        "tip": "Mở nhẹ hi-hat ở nốt cuối của phách 1 rồi đóng sập lại ở phách 2. Tiếng 'xèo... chách' lộng lẫy."
      },
      {
        "title": "4 — Bernard Purdie Shuffle hoàn chỉnh",
        "tip": "Thả lỏng toàn thân và tận hưởng cảm giác chơi một trong những rãnh nhịp trống đẹp nhất từng được tạo ra."
      }
    ]
  },
  "funk-david-garibaldi": {
    "tagline": "David Garibaldi & Tower of Power — đỉnh cao của Funk vùng Vịnh (Oakland Funk)",
    "bodyHtml": "<p>Tại vùng vịnh San Francisco, ban nhạc kèn đồng huyền thoại <strong>Tower of Power</strong> cùng tay trống <strong>David Garibaldi</strong> đã nâng nghệ thuật đánh trống Funk lên một tầm cao mới về độ phức tạp và sự tinh xảo: trường phái <strong>Oakland Funk</strong>.</p><h2 class=\"section-label\">Khái niệm 'Two-Sound Levels' và nốt móc kép tuyến tính</h2><p>Garibaldi loại bỏ hoàn toàn lối đánh dậm chân thô kệch. Lối chơi của ông là sự kết hợp chuẩn xác giữa hai cấp độ âm lượng (cực mạnh và cực nhẹ), những câu kick đảo phách vi mô và cách chia sẻ tiết tấu tuyến tính giữa hi-hat, snare và dàn tom (như trong bài hát kinh điển <em>What Is Hip?</em> và <em>Soul Vaccination</em>).</p>",
    "graduationCriteria": [
      "Chơi câu groove phong cách David Garibaldi ở ♩=88 với độ sắc nét tuyệt đối",
      "Các nốt ghost note và nốt accent trên snare thể hiện rõ ràng hai thế giới âm lượng",
      "Câu kick đảo phách vi mô không bị chệch khỏi tiếng click của máy đếm nhịp"
    ],
    "exercises": [
      {
        "title": "1 — Mẫu hình tay phong cách Tower of Power",
        "tip": "Tay phải trên hi-hat, tay trái trên snare: đan xen nốt nhấn và ghost note theo lưới móc kép vi mô."
      },
      {
        "title": "2 — Thêm chân Kick đảo phách kiểu Garibaldi",
        "tip": "Chân kick dậm vào những nốt lệch kỳ ảo, tạo nên rãnh nhịp nhún nhảy không ngừng nghỉ."
      },
      {
        "title": "3 — Rãnh nhịp kinh điển bài 'What Is Hip?'",
        "tip": "Tốc độ đẩy lên ♩=100. Đòi hỏi sự thư giãn cơ bắp và sự tập trung cao độ của đôi bàn tay."
      },
      {
        "title": "4 — Rãnh nhịp Oakland Funk hoàn chỉnh",
        "tip": "Sự kết hợp hoàn hảo giữa kỹ thuật siêu đẳng và rãnh nhịp bốc lửa khiến người nghe không thể ngồi yên."
      }
    ]
  },
  "funk-quarter-pulse": {
    "tagline": "Giữ xung nhịp nốt đen vững chãi trong khi các chi nhảy múa",
    "bodyHtml": "<p>Trong những câu funk phức tạp nhất với hàng chục nốt đảo phách vi mô, điều gì giữ cho ban nhạc không bị rơi vào cảnh hỗn loạn? Đó chính là <strong>xung nhịp nốt đen bất biến (The Quarter-Note Pulse)</strong>.</p><h2 class=\"section-label\">Chiếc mỏ neo thời gian</h2><p>Dù tay trái và chân phải có đang nhào lộn tinh xảo đến đâu, nếu bàn tay phải trên lá Ride (hoặc chân trái hi-hat) giữ vững tiếng gõ nốt đen <em>1, 2, 3, 4</em> đĩnh đạc như một chiếc mỏ neo cắm sâu xuống đáy biển, toàn bộ bài hát sẽ luôn giữ được sự vững vàng tuyệt đối.</p>",
    "graduationCriteria": [
      "Xung nốt đen trên Ride giữ đều đặn ở ♩=95 trong khi snare và kick chơi câu funk phức tạp bên dưới",
      "Không bị cuốn tay Ride theo các nốt đảo phách của chân kick",
      "Duy trì rãnh nhịp ổn định suốt 2 phút liên tục"
    ],
    "exercises": [
      {
        "title": "1 — Xung nốt đen trên Hi-Hat kết hợp Kick đảo phách",
        "tip": "Tay gõ nốt đen thưa thớt: <em>1, 2, 3, 4</em>. Chân dậm các nốt lệch nốt móc kép bên dưới."
      },
      {
        "title": "2 — Thêm nốt Ghost Note trên Snare",
        "tip": "Tay trái đệm các nốt ghost note êm ái mà không làm xao động tiếng gõ nốt đen của tay phải."
      },
      {
        "title": "3 — Chuyển xung nốt đen sang núm chuông lá Ride (Bell)",
        "tip": "Gõ vào núm chuông lá Ride ở mỗi phách nốt đen. Âm thanh đanh thép dẫn đường cho cả ban nhạc."
      },
      {
        "title": "4 — Rãnh nhịp Funk hoàn chỉnh trên nền xung nốt đen",
        "tip": "Sự kết hợp giữa chiếc mỏ neo nốt đen vững chắc và sự tự do bay bổng của các chi còn lại."
      }
    ]
  },
  "funk-d-angelo": {
    "tagline": "Nhịp Neo-Soul trễ nhịp kiểu D'Angelo và album Voodoo",
    "bodyHtml": "<p>Năm 2000, album <em>Voodoo</em> của D'Angelo ra đời cùng tiếng trống của Ahmir \"?uestlove\" Thompson đã tạo nên một cơn địa chấn làm thay đổi vĩnh viễn tư duy nhịp điệu hiện đại: phong cách <strong>đánh trễ nhịp (Drunk Beat / Laid Back)</strong>.</p><h2 class=\"section-label\">Nghệ thuật cố tình đánh sau tiếng click</h2><p>Thay vì đánh trùng khít vào tiếng máy đếm nhịp, tay trống cố tình <strong>đặt cú snare và kick chậm hơn tiếng click vài phần mười giây</strong>, trong khi lá hi-hat vẫn giữ nhịp thẳng. Cảm giác nhịp điệu nghe lảo đảo, say khướt, thư thái và ngập tràn chất men quyến rũ.</p>",
    "graduationCriteria": [
      "Có thể biểu diễn rõ ràng sự khác biệt giữa đánh đúng phách và đánh trễ phách (laid-back)",
      "Cú snare ở phách 2 và 4 rơi trễ nhẹ nhàng mà không làm tụt tốc độ tempo tổng thể của bài hát",
      "Rãnh nhịp Neo-Soul phong cách D'Angelo (Bài 4) tuôn chảy êm ái ở ♩=75"
    ],
    "exercises": [
      {
        "title": "1 — Hi-Hat thẳng, Snare trễ nhẹ sau phách",
        "tip": "Tay hi-hat giữ thẳng cùng tiếng click, tay snare cố tình thả rơi chậm hơn một tích tắc cực nhỏ."
      },
      {
        "title": "2 — Chân Kick lười biếng (Laid-Back Kick)",
        "tip": "Chân kick cũng dậm trễ nhẹ sau tiếng click phách 1. Cảm giác như bước chân đang lững thững dạo phố."
      },
      {
        "title": "3 — Rãnh nhịp bài 'Left & Right' kiểu D'Angelo",
        "tip": "Tốc độ chậm ♩=72. Cảm nhận độ lún sâu của chiếc ghế nệm Neo-Soul êm ái."
      },
      {
        "title": "4 — Rãnh nhịp Voodoo Drum Groove hoàn chỉnh",
        "tip": "Làm chủ cảm giác đánh trễ nhịp đỉnh cao — một trong những kỹ năng thời thượng nhất của tay trống hiện đại."
      }
    ]
  },
  "funk-modern-neo-soul": {
    "tagline": "Phong cách Neo-Soul hiện đại — laid back, kéo lùi nhịp sau tiếng click",
    "bodyHtml": "<p>Phát triển từ nền tảng của D'Angelo và J Dilla, <strong>Modern Neo-Soul</strong> kết hợp cảm giác đánh trễ nhịp hữu cơ của con người với sự chuẩn xác vi mô của những cỗ máy tạo nhịp MPC.</p><h2 class=\"section-label\">Sự tinh tế của các nốt vi mô</h2><p>Các nốt hi-hat không chỉ thẳng đơ, mà được nhấn nhá lúc lơi lỏng lúc dồn nén. Tiếng snare đánh rimshot thật đanh nhưng lại rơi vào một thời điểm bất ngờ, kết hợp cùng những nốt ghost note thì thầm tạo nên một bức tranh âm nhạc vô cùng quyến rũ.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Modern Neo-Soul (Bài 1) giữ được độ thư thái sâu lắng ở ♩=78",
      "Tiếng snare rimshot rơi chuẩn xác vào vị trí kéo lùi (behind the beat) ổn định qua từng ô nhịp",
      "Các nốt ghost note vi mô đan xen tự nhiên mà không làm mất cảm giác trôi chảy"
    ],
    "exercises": [
      {
        "title": "1 — Khung nhịp Neo-Soul hiện đại cơ bản",
        "tip": "Tốc độ ♩=78. Thả lỏng toàn bộ cơ thể, để từng nốt nhạc rơi vào không gian một cách lười biếng có chủ đích."
      },
      {
        "title": "2 — Thêm nốt Ghost Note vi mô kiểu máy sampler MPC",
        "tip": "Các nốt ghost note lướt nhẹ trên snare như những tiếng lách cách của đĩa than cổ."
      },
      {
        "title": "3 — Biến tấu chân Kick đảo phách trễ",
        "tip": "Chân kick dậm những nốt syncopation sâu lắng kết hợp cùng tiếng dập chân hi-hat."
      },
      {
        "title": "4 — Rãnh nhịp Modern Neo-Soul hoàn chỉnh",
        "tip": "Tái hiện âm thanh sang trọng, quyến rũ của dòng nhạc R&amp;B và Neo-Soul đương đại."
      }
    ]
  },
  "funk-questlove": {
    "tagline": "Ahmir '?uestlove' Thompson — cỗ máy thời gian sống của Hip-Hop và Neo-Soul",
    "bodyHtml": "<p>Là thủ lĩnh của ban nhạc huyền thoại The Roots, <strong>Ahmir \"?uestlove\" Thompson</strong> là tượng đài sống đã định hình nên âm thanh của Hip-Hop chơi bằng nhạc cụ mộc. Ông được cả thế giới kính nể vì khả năng <strong>giữ nhịp chuẩn xác như một cỗ máy điện tử nhưng lại tràn ngập linh hồn con người</strong>.</p><h2 class=\"section-label\">Kỷ luật thép của sự tối giản</h2><p>Questlove có thể chơi đúng một rãnh nhịp duy nhất suốt 10 phút mà không hề thêm một câu fill nào, không thay đổi âm lượng dù chỉ một decibel, và không xê dịch một phần nghìn giây. Đó là sự hy sinh cái tôi cá nhân vì lợi ích tối thượng của bài hát.</p>",
    "graduationCriteria": [
      "Giữ vững rãnh nhịp kiểu Questlove ở ♩=84 suốt 3 phút liên tục không thêm câu fill",
      "Âm thanh của tiếng snare rimshot có độ nổ và âm sắc giống hệt nhau ở mọi ô nhịp",
      "Khóa chặt vào tiếng click như thể bạn chính là chiếc máy đếm nhịp"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp Backbeat tối giản phong cách Questlove",
        "tip": "Mộc mạc, chắc chắn, không phô trương. Từng cú gõ đều mang trọng lượng của một lời tuyên ngôn."
      },
      {
        "title": "2 — Hi-Hat nốt móc đơn nhấp nhô nhẹ nhàng",
        "tip": "Hi-hat đánh rất êm, để tiếng snare rimshot và kick trở thành hai cột trụ vững chắc duy nhất."
      },
      {
        "title": "3 — Rãnh nhịp The Roots Hip-Hop Groove",
        "tip": "Tiếng kick dậm theo từng câu vần điệu của rapper. Đơn giản đến mức hoàn hảo."
      },
      {
        "title": "4 — Thử thách kỷ luật thép: 3 phút không xao động",
        "tip": "Rèn luyện phẩm chất quý giá nhất của một tay trống chuyên nghiệp: sự kiên định bất biến."
      }
    ]
  },
  "funk-vinnie-funk": {
    "tagline": "Vinnie Colaiuta trong phong cách Funk — kỹ thuật siêu phàm kết hợp rãnh nhịp bốc lửa",
    "bodyHtml": "<p><strong>Vinnie Colaiuta</strong> là một trong những tay trống vĩ đại nhất mọi thời đại, người có thể chơi những kỹ thuật đa nhịp phức tạp nhất của Frank Zappa nhưng khi bước vào nhạc Funk hay Pop (như với Sting hay Chaka Khan), ông tạo ra những rãnh nhịp có sức hút không thể cưỡng lại.</p><h2 class=\"section-label\">Sự kết hợp giữa trí tuệ và sự cuồng nhiệt</h2><p>Phong cách Funk của Vinnie là sự hòa quyện giữa các nốt ghost note tuyến tính siêu tốc, những cú đảo phách bất ngờ ở nốt 'e' và 'a', và một nguồn năng lượng bốc lửa cuộn trào khiến người nghe phải nghẹt thở.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Funk kiểu Vinnie Colaiuta (Bài 1) chơi sạch sẽ ở ♩=95",
      "Các câu nốt móc kép tuyến tính đan xen mượt mà giữa tay và chân",
      "Làm chủ được các nốt nhấn bất ngờ mà không làm gãy rãnh nhịp đang tuôn chảy"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Funk phức hợp phong cách Vinnie",
        "tip": "Kết hợp ghost note dày đặc, kick đảo phách vi mô và hi-hat sắc bén. Đầy thách thức."
      },
      {
        "title": "2 — Cụm ô tuyến tính nốt móc kép chen vào giữa nhịp",
        "tip": "Một câu lướt tuyến tính chớp nhoáng xuất hiện ở phách 3 rồi quay về backbeat ở phách 4."
      },
      {
        "title": "3 — Rãnh nhịp Funk phong cách Sting (bài 'Seven Days' feel)",
        "tip": "Sự biến ảo nhịp điệu đỉnh cao dưới bàn tay của bậc thầy âm nhạc."
      },
      {
        "title": "4 — Vinnie Funk Groove toàn lực",
        "tip": "Tốc độ đẩy lên ♩=102. Cháy hết mình với kỹ thuật siêu đẳng và cảm xúc thăng hoa."
      }
    ]
  },
  "funk-modern-r-and-b": {
    "tagline": "Funk R&B hiện đại — sự hòa quyện giữa nhạc cụ mộc và âm thanh điện tử",
    "bodyHtml": "<p>Âm nhạc R&amp;B và Funk thế kỷ 21 — từ Bruno Mars, Anderson .Paak cho đến Silk Sonic — là một sự tôn vinh lộng lẫy đối với di sản của thập niên 70 kết hợp cùng công nghệ sản xuất âm thanh hiện đại.</p><h2 class=\"section-label\">Âm thanh nén chặt và đanh giòn</h2><p>Người chơi trống hiện đại sử dụng mặt trống được dán băng dính giảm âm (damped head) để tạo âm thanh cộc, chắc nịch, kết hợp lá hi-hat nhỏ đanh giòn và những cú rimshot sắc như dao cạo. Từng nốt nhạc đều được chăm chút tỉ mỉ để tạo ra độ nảy khiêu vũ tối đa.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Modern R&B (Bài 1) giữ được độ nảy giòn tan ở ♩=96 suốt 2 phút",
      "Sự kết hợp giữa kick đảo phách và snare rimshot sắc bén chuẩn phong cách Silk Sonic",
      "Mẫu hình 4 ô nhịp có nốt đón đầu chuyển đoạn hoàn hảo"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Modern R&B cơ bản",
        "tip": "Hi-hat đóng chặt, snare rimshot đanh giòn, kick dậm dứt khoát. Âm thanh phòng thu hiện đại."
      },
      {
        "title": "2 — Cú mở Hi-Hat kép phong cách Bruno Mars",
        "tip": "Mở hi-hat hai lần liên tiếp ở các nốt lệch để tạo cú nảy tưng bừng cho đoạn điệp khúc."
      },
      {
        "title": "3 — Rãnh nhịp Silk Sonic Funk Groove",
        "tip": "Sự hòa quyện tuyệt mỹ giữa hoài niệm thập niên 70 và vẻ bóng bẩy của thế kỷ 21."
      },
      {
        "title": "4 — Câu Modern R&B hoàn chỉnh kèm nốt đón đầu",
        "tip": "Làm chủ trọn vẹn ngôn ngữ âm nhạc của dòng nhạc Funk &amp; R&amp;B thịnh hành nhất thế giới."
      }
    ]
  }
};

const targetPath = path.join(__dirname, '../src/_data/i18n/vi/lessons/funk.json');
fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully wrote', Object.keys(data).length, 'funk lessons to', targetPath);
