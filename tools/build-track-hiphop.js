// tools/build-track-hiphop.js
const fs = require('fs');
const path = require('path');

const data = {
  "hiphop-boom-bap": {
    "tagline": "Boom Bap cổ điển — âm thanh đường phố New York thập niên 90",
    "bodyHtml": "<p>Tên gọi <strong>\"Boom Bap\"</strong> bắt nguồn từ chính âm thanh biểu tượng của nó: tiếng <strong>\"Boom\"</strong> trầm ấm, nặng nề của quả trống bass và tiếng <strong>\"Bap\"</strong> đanh nổ, dứt khoát như một phát súng của chiếc trống snare ở phách 2 và 4. Đây là thứ âm thanh đã kiến tạo nên thời kỳ hoàng kim (Golden Era) của Hip-Hop bờ Đông nước Mỹ với DJ Premier, Pete Rock, Nas, The Notorious B.I.G. và Wu-Tang Clan.</p><h2 class=\"section-label\">Linh hồn từ những chiếc máy Sampler</h2><p>Mặc dù ban đầu được lập trình trên máy Akai MPC hoặc E-mu SP-1200, các rãnh nhịp Boom Bap thực chất đều bắt nguồn từ các đoạn cắt mẫu (drum breaks) của các bản thu Funk và Soul thập niên 60 và 70. Khi chơi trên bộ trống mộc, bí quyết là <strong>giữ cho từng cú gõ thật dứt khoát, âm thanh nén chặt và chiếc túi thời gian (pocket) đầm chắc như một khối bê tông</strong>.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Boom Bap cơ bản (Bài 1) giữ đều đặn ở ♩=90 suốt 2 phút mà không bị trôi nhịp",
      "Tiếng trống Snare nổ đanh giòn như mẫu cắt SP-1200 ở phách 2 và 4",
      "Cú kick đảo phách ở nốt & của 3 dậm dứt khoát làm bệ phóng cho cú snare ở phách 4"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp Boom Bap New York kinh điển",
        "tip": "Kick ở 1 và &amp; của 3, Snare đanh giòn ở 2 và 4, Hi-Hat nốt móc đơn thẳng. Đánh dứt khoát và điềm tĩnh ở ♩=90."
      },
      {
        "title": "2 — Thêm nốt Kick đón đầu ở cuối ô nhịp",
        "tip": "Dậm thêm một cú kick ở nốt <em>&amp;</em> của 4 để đẩy ô nhịp tiếp theo lao về phía trước."
      },
      {
        "title": "3 — Cú mở Hi-Hat tinh tế phong cách DJ Premier",
        "tip": "Mở hé hi-hat đúng nốt &amp; của 4 rồi dập đóng sập lại ở phách 1. Tạo điểm nhấn sắc lạnh đặc trưng của hip-hop bờ Đông."
      },
      {
        "title": "4 — Rãnh nhịp Boom Bap hoàn chỉnh với Ghost Notes",
        "tip": "Thêm một nốt ghost note êm ái trên snare ngay trước cú backbeat. Tái hiện nguyên vẹn hơi thở đường phố Brooklyn."
      }
    ]
  },
  "hiphop-pocket-time": {
    "tagline": "Giữ nhịp Pocket trong Hip-Hop — kiên định, đầm chắc, làm nền cho ca từ rap",
    "bodyHtml": "<p>Trong một bài hát Hip-Hop, ngôi sao chính là người Rapper và những câu từ (lyrics) đầy trí tuệ của họ. Nhiệm vụ tối thượng của người chơi trống không phải là đánh những câu fill hoa mỹ tranh giành sự chú ý, mà là <strong>tạo ra một chiếc 'Pocket' thời gian bất biến, đầm chắc để Rapper có thể tự tin thả vần điệu (flow) lên trên</strong>.</p><h2 class=\"section-label\">Khái niệm 'The Human MPC' (Cỗ máy MPC biết thở)</h2><p>Đánh trống hip-hop đòi hỏi sự kiên định thép: bạn phải giữ một vòng lặp nhịp điệu hoàn toàn giống nhau từ phút thứ 1 đến phút thứ 4. Người nghe không muốn nhịp trống thay đổi; họ muốn nhịp trống thôi miên họ trong một trạng thái gật đầu liên tục không thể dứt ra.</p>",
    "graduationCriteria": [
      "Giữ vững một rãnh nhịp hip-hop duy nhất ở ♩=86 suốt 3 phút không hề thêm câu fill hay biến tấu nốt",
      "Âm sắc và lực tay của từng cú snare giống hệt nhau như được phát ra từ một mẫu sampler",
      "Tốc độ tempo không dao động dù chỉ một phần nghìn giây"
    ],
    "exercises": [
      {
        "title": "1 — Vòng lặp Hip-Hop Pocket cơ bản",
        "tip": "Tốc độ ♩=85. Hãy nhắm mắt lại, cảm nhận chiếc túi thời gian và hòa mình vào từng tiếng gõ mộc mạc."
      },
      {
        "title": "2 — Pocket với tiếng Hi-Hat lướt nhẹ",
        "tip": "Đánh hi-hat rất nhẹ nhàng, để tiếng kick trầm và tiếng snare nổ trở thành hai cực nam châm hút chặt bài hát."
      },
      {
        "title": "3 — Thử thách 16 ô nhịp Hip-Hop bất biến",
        "tip": "Chơi trọn vẹn 16 ô nhịp không thêm bớt nốt nào. Rèn luyện kỷ luật của một tay trống phòng thu hàng đầu."
      },
      {
        "title": "4 — Duy trì Pocket cùng tiếng Rap lặp lại",
        "tip": "Tưởng tượng một câu rap đang tuôn trào trên nền trống của bạn. Giữ vững ngọn hải đăng cho con tàu ca từ lướt đi."
      }
    ]
  },
  "hiphop-classic": {
    "tagline": "Các câu breakbeat kinh điển của Thời kỳ hoàng kim Hip-Hop",
    "bodyHtml": "<p>Lịch sử Hip-Hop được viết nên trên những đĩa nhựa vinyl cổ: các DJ tìm kiếm những đoạn chỉ có tiếng trống mộc đơn độc kéo dài vài giây — gọi là <strong>\"The Break\"</strong> — và dùng hai bàn xoay đĩa để lặp lại đoạn đó mãi mãi.</p><h2 class=\"section-label\">Những câu Breakbeat bất tử</h2><p>Từ đoạn break <em>Amen Brother</em> của The Winstons, <em>Apache</em> của Incredible Bongo Band, cho đến <em>Impeach the President</em> của The Honey Drippers — những rãnh nhịp này là DNA của toàn bộ nền văn hóa Hip-Hop. Khi chơi lại chúng trên bộ trống mộc, bạn đang chạm tay vào chính lịch sử âm nhạc.</p>",
    "graduationCriteria": [
      "Chơi thành thạo câu breakbeat phong cách 'Impeach the President' ở ♩=88",
      "Sự kết hợp giữa cú kick kép và tiếng snare rimshot mang lại độ nảy chân thực của đĩa vinyl thập niên 70",
      "Vòng lặp 4 ô nhịp tuôn chảy tự nhiên không bị gượng gạo"
    ],
    "exercises": [
      {
        "title": "1 — Câu Breakbeat 'Impeach the President'",
        "tip": "Kick ở 1 và nốt &amp; của 2, snare ở 2 và 4. Rãnh nhịp breakbeat được lấy mẫu nhiều bậc nhất lịch sử."
      },
      {
        "title": "2 — Câu Breakbeat 'Skull Snaps' (It's a New Day)",
        "tip": "Hi-hat đánh móc kép hai tay với những cú mở hi-hat xèo xèo cực kỳ sống động và bốc lửa."
      },
      {
        "title": "3 — Câu Breakbeat 'Apache' của Incredible Bongo Band",
        "tip": "Nhịp điệu dồn dập, hoang dã của các trận đấu B-Boy breaking huyền thoại."
      },
      {
        "title": "4 — Chuỗi Breakbeat Hip-Hop cổ điển 4 ô nhịp",
        "tip": "Ghép các đoạn breakbeat kinh điển lại thành một tác phẩm biểu diễn trọn vẹn ở ♩=92."
      }
    ]
  },
  "hiphop-r-and-b-basic": {
    "tagline": "R&B cơ bản — sự mượt mà và nhịp nảy êm ái",
    "bodyHtml": "<p>Trong khi Hip-Hop đường phố chuộng sự gai góc và đanh thép, thì <strong>R&amp;B (Rhythm and Blues)</strong> lại tìm kiếm <strong>sự mượt mà, gợi cảm và độ êm ái như dải lụa</strong>.</p><h2 class=\"section-label\">Âm thanh nén chặt và không gian rộng mở</h2><p>Tiếng trống bass được dập êm và tròn trịa, tiếng snare thường chuyển sang gõ vành cross-stick hoặc một cú đánh có dán băng dính giảm âm, và bàn tay hi-hat giữ nhịp nốt móc đơn mềm mại nhường trọn vẹn sân khấu cho những hòa âm vocal tuyệt mỹ.</p>",
    "graduationCriteria": [
      "Rãnh nhịp R&B cơ bản (Bài 1) giữ được độ êm ái, gợi cảm ở ♩=80 suốt 2 phút",
      "Tiếng gõ Cross-stick phát ra âm thanh 'cốc' ấm áp, hòa quyện tự nhiên với tiếng kick",
      "Chuyển đoạn từ Verse êm dịu sang Chorus dày dặn một cách mượt mà"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp R&B êm ái với Cross-Stick",
        "tip": "Gõ cross-stick ở phách 2 và 4, kick dậm nhẹ ở 1 và nốt &amp; của 3. Đánh thật êm và thư thái ở ♩=78."
      },
      {
        "title": "2 — R&B nảy hạt với Hi-Hat nốt móc kép",
        "tip": "Tay hi-hat tăng mật độ lên nốt móc kép gõ nhẹ bằng ngón tay. Âm thanh mượt mà như nhung."
      },
      {
        "title": "3 — Chân Kick đón đầu kiểu R&B thập niên 90",
        "tip": "Cú kick dậm đón đầu ở nốt 'a' của phách 2, tạo độ lún nhún nhảy đặc trưng của TLC và Boyz II Men."
      },
      {
        "title": "4 — Rãnh nhịp R&B hoàn chỉnh cho đoạn Điệp khúc",
        "tip": "Mở rộng không gian trên lá Ride hoặc mở hé hi-hat. Cảm nhận sự dâng trào cảm xúc ngọt ngào."
      }
    ]
  },
  "hiphop-quiet-storm": {
    "tagline": "Phong cách Quiet Storm — êm đềm, lãng mạn của đêm muộn thập niên 80 và 90",
    "bodyHtml": "<p><strong>Quiet Storm</strong> là định dạng âm nhạc radio đêm muộn nổi tiếng của Mỹ — nơi những bản nhạc Soul, R&amp;B và Smooth Jazz lãng mạn của Sade, Anita Baker, Luther Vandross và Smokey Robinson làm say đắm lòng người.</p><h2 class=\"section-label\">Nghệ thuật chơi trống như lời thì thầm</h2><p>Tại đây, tay trống chơi với âm lượng cực kỳ nhỏ (Pianissimo): tiếng cross-stick mộc mạc như tiếng giọt nước rơi, tiếng dập chân hi-hat êm ru và những cú dậm kick như nhịp tim đập chậm rãi trong căn phòng đêm khuya tĩnh lặng.</p>",
    "graduationCriteria": [
      "Duy trì rãnh nhịp Quiet Storm ở mức âm lượng pp suốt 2 phút ở ♩=72",
      "Tiếng cross-stick và kick không hề có bất kỳ cú đánh nào bị lỡ tay đánh mạnh",
      "Tạo ra bầu không khí lãng mạn, thư giãn sâu sắc cho người nghe"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Quiet Storm đêm muộn cơ bản",
        "tip": "Tốc độ chậm ♩=72. Gõ cross-stick ở 2 và 4 cực êm. Hãy để không gian tĩnh mịch bao bọc lấy từng nốt gõ."
      },
      {
        "title": "2 — Hi-Hat nốt đen thưa thớt phong cách Sade",
        "tip": "Hi-hat chỉ đánh ở các phách nốt đen. Tối giản đến mức tối đa để giọng hát của ca sĩ cất cánh."
      },
      {
        "title": "3 — Chân Hi-Hat dập êm ái ở phách 2 và 4",
        "tip": "Dập chân trái thật khẽ, tạo tiếng 'chick' mịn màng hòa vào tiếng gõ vành của tay trái."
      },
      {
        "title": "4 — Khúc tình ca Quiet Storm hoàn chỉnh",
        "tip": "Làm chủ khả năng kiểm soát âm lượng nhỏ — một kỹ năng tối quan trọng của tay trống chuyên nghiệp."
      }
    ]
  },
  "hiphop-trap": {
    "tagline": "Trap Music — Hi-Hat nốt liên ba, nốt móc tam mươi hai và tiếng Kick 808 trầm sâu",
    "bodyHtml": "<p>Xuất phát từ đường phố Atlanta, <strong>Trap Music</strong> đã trở thành dòng nhạc thống trị toàn cầu trong thế kỷ 21. Đặc trưng không thể nhầm lẫn của Trap là sự tương phản tột bậc giữa <strong>tiếng trống Bass 808 siêu trầm chậm rãi (Half-Time ở phách 3)</strong> và <strong>những câu Hi-Hat nốt liên ba, nốt móc tam mươi hai (32nd notes) chạy nhanh như tên bắn</strong>.</p><h2 class=\"section-label\">Tái hiện Trap trên bộ trống mộc</h2><p>Chơi Trap trên trống mộc là một thử thách ngoạn mục: tay trái dằn một cú Rimshot cực đanh ở phách 3, chân phải dậm kick 808 dài hơi, trong khi tay phải sử dụng kỹ thuật ngón tay (finger control) điêu luyện để tung ra những tràng hi-hat liên ba cuộn trào biến ảo.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Half-time Trap (snare ở phách 3) giữ vững ở ♩=130 (hoặc 65 BPM) suốt 2 phút",
      "Thực hiện các tràng Hi-Hat liên ba và nốt móc kép luân phiên mượt mà không vấp",
      "Tiếng snare rimshot ở phách 3 nổ sắc bén như một tia sét rạch ngang bầu trời"
    ],
    "exercises": [
      {
        "title": "1 — Khung nhịp Trap cơ bản: Snare chỉ ở phách 3",
        "tip": "Tốc độ ♩=130 (cảm nhận half-time ở 65 BPM). Kick ở 1, Snare rimshot ở phách 3. Không gian rộng thênh thang."
      },
      {
        "title": "2 — Hi-Hat nốt móc đơn kết hợp các tràng liên ba (Triplet Rolls)",
        "tip": "Chèn những cụm 3 nốt liên ba nhanh như chớp vào giữa dòng chảy hi-hat. Dùng ngón tay búng nhẹ dùi."
      },
      {
        "title": "3 — Tràng Hi-Hat nốt móc tam mươi hai (32nd-Note Roll)",
        "tip": "Tung ra tràng 4 nốt siêu nhanh bằng kỹ thuật đánh đôi hoặc búng ngón tay trước khi rơi vào cú snare."
      },
      {
        "title": "4 — Rãnh nhịp Trap Atlanta hoàn chỉnh trên trống mộc",
        "tip": "Kết hợp chân kick đảo phách, snare đanh thép và hi-hat chạy ngón ảo diệu. Tràn đầy năng lượng hiện đại."
      }
    ]
  },
  "hiphop-neo-soul": {
    "tagline": "Hip-Hop Neo-Soul — nhịp điệu hữu cơ, ấm áp và sâu lắng",
    "bodyHtml": "<p>Khi văn hóa Hip-Hop giao thoa với linh hồn sâu lắng của nhạc Soul, <strong>Neo-Soul</strong> ra đời với những nghệ sĩ tiên phong như Erykah Badu, Lauryn Hill, Common và D'Angelo. Trống trong Neo-Soul mang tính <strong>hữu cơ (organic)</strong> tuyệt đối — nơi từng thớ gỗ, từng sợi dây tem và sự ấm áp của bàn tay con người được tôn vinh.</p><h2 class=\"section-label\">Độ nảy lỏng tay (Loose &amp; Greasy)</h2><p>Khác với sự cứng nhắc của máy tính, nhịp trống Neo-Soul hơi nhún nhảy nhẹ giữa ranh giới của nốt thẳng và nốt swing. Tiếng kick trầm ấm dậm sau phách, snare có dán khăn vải mỏng giảm âm (tea towel damping) cho ra âm thanh cộc, béo và cực kỳ ấm áp.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Neo-Soul hữu cơ giữ được độ nhún nhảy sâu lắng ở ♩=82",
      "Âm sắc trống snare cộc ấm, tròn trịa chuẩn phong cách Erykah Badu",
      "Các nốt ghost note đan cài tự nhiên như những hạt mưa rơi trên lá"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Neo-Soul phong cách Erykah Badu",
        "tip": "Dán một miếng vải mỏng lên mặt snare. Đánh nhẹ nhàng ở ♩=80, cảm nhận âm thanh cộc ấm đầy hoài niệm."
      },
      {
        "title": "2 — Hi-Hat nhấp nhô lỏng tay (Slight Swing)",
        "tip": "Không đánh móc đơn thẳng đơ, hơi nghiêng nhẹ sang cảm giác swing một chút. Nhịp điệu lập tức bắt đầu nhún nhảy."
      },
      {
        "title": "3 — Cú Kick trễ nhịp sâu lắng",
        "tip": "Chân kick dậm chậm hơn tiếng click một phần mười giây. Cảm giác bài hát chìm vào một chiếc ghế bành nhung êm ái."
      },
      {
        "title": "4 — Khúc ca Hip-Hop Neo-Soul hoàn chỉnh",
        "tip": "Làm chủ trọn vẹn phong cách âm nhạc đã làm say đắm hàng triệu trái tim yêu nghệ thuật trên toàn thế giới."
      }
    ]
  },
  "hiphop-modern-r-and-b": {
    "tagline": "R&B đương đại — nhịp điệu điện tử kết hợp nhạc cụ sống",
    "bodyHtml": "<p>Trong nền âm nhạc đương đại của The Weeknd, Frank Ocean, SZA và H.E.R., ranh giới giữa một cỗ máy tạo nhịp trong phòng thu và một tay trống sống thực thụ đã hoàn toàn bị xóa nhòa. Bạn cần phải học cách <strong>chơi trên bộ trống mộc nhưng mang lại độ chính xác, sự gọn gàng và âm sắc tinh xảo như một bản phối điện tử triệu đô</strong>.</p><h2 class=\"section-label\">Kiểm soát độ dài âm thanh (Sound Length Control)</h2><p>Mỗi tiếng mở hi-hat, mỗi cú chạm cymbal đều phải được ngắt âm chính xác đúng thời điểm. Âm thanh khô ráo, sắc nét và nén chặt tạo nên vẻ đẹp sang trọng, bóng bẩy của các bản hit Top 40 toàn cầu.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Modern R&B giữ được sự chính xác cơ học ở ♩=88 suốt 2 phút",
      "Tiếng ngắt âm của lá hi-hat và cymbal diễn ra dứt khoát không một chút đuôi vang thừa",
      "Mẫu hình phối khí hòa quyện hoàn hảo với các dòng synth bass điện tử"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Modern R&B tối giản",
        "tip": "Hi-hat đóng chặt gõ nốt móc đơn, snare rimshot nén chặt ở phách 2 và 4, kick đầm chắc ở 1 và nốt &amp; của 3."
      },
      {
        "title": "2 — Cú mở Hi-Hat ngắt âm tức thì (Choke Hat)",
        "tip": "Mở hi-hat ở nốt &amp; rồi dập chân đóng chặt lại ngay phách tiếp theo. Âm thanh khô giòn như máy tính lập trình."
      },
      {
        "title": "3 — Rãnh nhịp phong cách Frank Ocean / SZA",
        "tip": "Tốc độ chậm rãi, sâu lắng. Từng cú gõ đều toát lên vẻ cô đơn và sự tinh tế tột bậc."
      },
      {
        "title": "4 — Modern R&B Groove hoàn chỉnh",
        "tip": "Tái hiện âm thanh đẳng cấp của những sản phẩm âm nhạc đoạt giải Grammy danh giá."
      }
    ]
  },
  "hiphop-southern": {
    "tagline": "Southern Hip-Hop / Dirty South — nhịp nảy Atlanta, 808 đầm ấm",
    "bodyHtml": "<p>Miền Nam nước Mỹ — từ Atlanta, Houston đến New Orleans — đã cống hiến cho Hip-Hop một phong cách không thể trộn lẫn: <strong>Dirty South</strong> với những tượng đài như Outkast, UGK, T.I. và Ludacris.</p><h2 class=\"section-label\">Cú nảy nốt móc kép đặc trưng (The Southern Bounce)</h2><p>Âm nhạc miền Nam ngập tràn những cú kick 808 dậm kép dồn dập, tiếng vỗ tay (claps) hoặc snare đanh giòn ở phách 2 và 4, kết hợp cùng các câu hi-hat nốt móc kép nảy tưng bừng tạo nên một nguồn năng lượng khiêu vũ sôi sục.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Southern Bounce (Bài 1) giữ được độ bốc lửa ở ♩=82 suốt 2 phút",
      "Cú kick kép dậm nhanh dứt khoát không bị dính chân",
      "Tái hiện trọn vẹn cảm giác phóng khoáng, tự tin của âm nhạc miền Nam nước Mỹ"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp Southern Bounce cơ bản phong cách Outkast",
        "tip": "Kick dậm đúp ở đầu ô nhịp, snare nổ đanh ở 2 và 4. Âm thanh tươi vui, nhún nhảy."
      },
      {
        "title": "2 — Thêm tiếng mở Hi-Hat đảo phách",
        "tip": "Mở hé hi-hat ở các nốt lệch để tạo cú đẩy tưng bừng cho rãnh nhịp khiêu vũ."
      },
      {
        "title": "3 — Cú Kick dậm dồn 3 nốt liên tiếp kiểu Atlanta",
        "tip": "Chân phải dậm nhanh ba tiếng kick liên tiếp: <em>1 e &amp;</em>. Dùng kỹ thuật trượt bàn chân (slide)."
      },
      {
        "title": "4 — Rãnh nhịp Dirty South hoàn chỉnh",
        "tip": "Tốc độ đẩy lên ♩=88. Cảm nhận chiếc xe mui trần đang lướt đi dưới ánh nắng rực rỡ của Atlanta."
      }
    ]
  },
  "hiphop-questlove": {
    "tagline": "Phong cách Questlove trong Hip-Hop — cỗ máy máy đếm nhịp con người của The Roots",
    "bodyHtml": "<p>Trong khi hầu hết các ban nhạc hip-hop biểu diễn cùng một chiếc máy tính hoặc DJ xoay đĩa, <strong>The Roots</strong> đã chinh phục cả thế giới suốt 30 năm qua bằng âm nhạc sống 100% — và linh hồn của cỗ máy đó chính là <strong>Ahmir \"?uestlove\" Thompson</strong>.</p><h2 class=\"section-label\">Bậc thầy của sự kiên định</h2><p>Questlove chơi trống với một thái độ tôn kính tuyệt đối đối với thời gian: không bao giờ đẩy nhanh tempo khi bài hát hưng phấn, không bao giờ chậm lại khi bài hát lắng dịu. Từng cú snare rimshot của ông đều rơi xuống đúng một tọa độ không gian duy nhất, tạo nên một chiếc neo vững như núi Thái Sơn cho cả ban nhạc.</p>",
    "graduationCriteria": [
      "Chơi câu groove bài 'You Got Me' ở ♩=80 suốt 3 phút không hề lay chuyển",
      "Âm thanh của tiếng snare rimshot có độ nổ và sắc thái đồng nhất 100%",
      "Kiểm soát được lực tay hi-hat luôn êm ái hơn tiếng snare và kick"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp bài 'You Got Me' kinh điển",
        "tip": "Mộc mạc, sâu lắng, đĩnh đạc. Từng phách nốt đen đều được giữ vững với kỷ luật thép."
      },
      {
        "title": "2 — Hi-Hat nốt móc đơn phong cách The Roots",
        "tip": "Tay hi-hat đánh rất nhẹ, nhường toàn bộ không gian cho tiếng rimshot đanh nổ ở phách 2 và 4."
      },
      {
        "title": "3 — Biến tấu Kick tinh tế dưới chân Questlove",
        "tip": "Chân kick chỉ dậm thêm một nốt đón đầu ở cuối ô nhịp thứ hai. Tối giản nhưng đắt giá vô cùng."
      },
      {
        "title": "4 — Thử thách kiên định: Khóa chặt nhịp trong 3 phút",
        "tip": "Trở thành cỗ máy thời gian sống của chính mình. Làm chủ nghệ thuật giữ nhịp đỉnh cao của Questlove."
      }
    ]
  },
  "hiphop-studio-translation": {
    "tagline": "Chuyển dịch âm thanh điện tử sang bộ trống mộc trong phòng thu",
    "bodyHtml": "<p>Một trong những kỹ năng đắt giá nhất của một tay trống phòng thu thế kỷ 21 là khả năng <strong>nghe một bản beat được lập trình hoàn toàn bằng máy tính, rồi ngồi vào bộ trống mộc và chơi lại nó y hệt với trọn vẹn linh hồn con người</strong>.</p><h2 class=\"section-label\">Kỹ thuật xử lý âm học (Acoustic Emulation)</h2><p>Để bộ trống mộc nghe giống như một bản thu hip-hop điện tử: bạn đặt một chiếc ví tiền hoặc một tấm khăn mỏng lên mặt trống snare để triệt tiêu tiếng ngân thừa; dán băng dính giảm âm lên lá cymbal để ngắt đuôi vang; và đạp chân kick dính chặt vào mặt trống để tạo tiếng đấm gọn gàng.</p>",
    "graduationCriteria": [
      "Tạo ra âm sắc snare cộc, đanh như tiếng sample điện tử bằng kỹ thuật giảm âm mặt trống",
      "Chơi chính xác bản beat điện tử mẫu trên bộ trống mộc ở ♩=92",
      "Khóa chặt từng cú đánh vào lưới thời gian của phần mềm thu âm DAW"
    ],
    "exercises": [
      {
        "title": "1 — Mô phỏng tiếng Snare điện tử có giảm âm",
        "tip": "Đặt một tấm khăn mỏng hoặc ví tiền lên góc mặt snare. Đánh rimshot: âm thanh cộc, chắc nịch như máy tính."
      },
      {
        "title": "2 — Mô phỏng tiếng Kick điện tử gọn gàng",
        "tip": "Dùng kỹ thuật dậm dùi dính mặt trống (buried beater). Triệt tiêu độ ngân, tạo tiếng 'bịch' uy lực."
      },
      {
        "title": "3 — Mô phỏng lá Hi-Hat nén âm thanh phòng thu",
        "tip": "Ép chặt chân trái, dùng đầu dùi gõ nhẹ vào tâm mặt lá hi-hat. Âm thanh sắc sảo, không có tạp âm."
      },
      {
        "title": "4 — Bản thu âm Hip-Hop phòng thu hoàn chỉnh",
        "tip": "Hòa quyện toàn bộ kỹ thuật xử lý âm học vào một rãnh nhịp hoàn hảo sẵn sàng để phát hành đĩa đơn."
      }
    ]
  },
  "hiphop-displacement": {
    "tagline": "Dịch chuyển nhịp trong Hip-Hop tạo sự lơ lửng",
    "bodyHtml": "<p>Trong khi Hip-Hop truyền thống luôn đặt cú snare vững chãi ở phách 2 và 4, các nhà sản xuất âm nhạc tiên phong luôn tìm cách làm mới bằng kỹ thuật <strong>dịch chuyển nhịp điệu (Rhythmic Displacement)</strong>.</p><h2 class=\"section-label\">Cảm giác hẫng một nhịp đầy mê hoặc</h2><p>Bằng cách dịch chuyển cú snare hoặc tiếng kick sang nốt lệch <em>&amp;</em> hoặc nốt <em>e</em>, bạn tạo ra một khoảnh khắc hẫng hụt kỳ ảo khiến người nghe phải chú ý ngay lập tức. Đây là vũ khí bí mật trong các sản phẩm của Kendrick Lamar, Tyler, the Creator và J. Cole.</p>",
    "graduationCriteria": [
      "Rãnh nhịp hip-hop bị dịch chuyển giữ vững ở ♩=84 mà không bị phản xạ tự nhiên kéo về phách cũ",
      "Máy đếm nhịp vẫn giữ nguyên vị trí phách 1 trong khi rãnh nhịp lơ lửng xung quanh",
      "Chuyển đổi giữa nhịp chuẩn và nhịp dịch chuyển mượt mà không vấp"
    ],
    "exercises": [
      {
        "title": "1 — Dịch chuyển tiếng Snare sang nốt & của 2",
        "tip": "Cú snare thứ nhất rơi trễ nửa phách ở nốt <em>&amp;</em>, cú snare thứ hai vẫn ở phách 4. Cảm giác nhịp bị hẫng đầy mê hoặc."
      },
      {
        "title": "2 — Dịch chuyển tiếng Kick sang nốt 'e' của 1",
        "tip": "Trống bass không dậm ở phách 1 mà dậm ngay nốt móc kép thứ hai. Cú giật bất ngờ cho ban nhạc."
      },
      {
        "title": "3 — Rãnh nhịp Hip-Hop Displacement phong cách Kendrick Lamar",
        "tip": "Sự biến ảo nhịp điệu thông minh tạo nên chiếc thảm hoàn hảo cho những câu flow rap phức tạp."
      },
      {
        "title": "4 — Ứng dụng Displacement trong chuyển đoạn",
        "tip": "Dùng một ô nhịp dịch chuyển để làm người nghe ngạc nhiên trước khi trở về nhịp boom bap vững chãi."
      }
    ]
  },
  "hiphop-808-translation": {
    "tagline": "Chơi lại tiếng trống Roland TR-808 trên trống Bass và Floor Tom mộc",
    "bodyHtml": "<p>Chiếc máy tạo nhịp <strong>Roland TR-808</strong> (ra mắt năm 1980) là nhạc cụ có tầm ảnh hưởng lớn nhất trong lịch sử âm nhạc hiện đại. Tiếng trống bass 808 siêu trầm, ngân dài rền rĩ đã trở thành nền tảng của Trap, Hip-Hop và Pop toàn cầu.</p><h2 class=\"section-label\">Cách mô phỏng tiếng 808 trên dàn trống mộc</h2><p>Làm sao để một bộ trống mộc có thể tái hiện được tiếng trầm rung chuyển mặt đất của 808? Bí quyết là <strong>chỉnh trống Bass ở cao độ cực thấp với màng trống hơi chùng, hoặc sử dụng chiếc Floor Tom to nhất</strong> kết hợp cùng kỹ thuật dùi nảy tự nhiên (rebound) để trống ngân rền tối đa.</p>",
    "graduationCriteria": [
      "Tạo ra âm thanh kick trầm ngân dài tự nhiên mô phỏng tiếng 808 trên bộ trống mộc",
      "Các câu trượt cao độ (808 slides) được mô phỏng khéo léo qua sự kết hợp giữa kick và floor tom",
      "Rãnh nhịp 808 mộc (Bài 4) giữ vững độ đầm chắc ở ♩=128 (half-time 64 BPM)"
    ],
    "exercises": [
      {
        "title": "1 — Tiếng Kick ngân dài tự do kiểu 808 Sub",
        "tip": "Nhấc chân ngay sau khi đạp để mặt trống bass ngân vang trầm ấm tối đa. Không ấn dính dùi đạp vào mặt trống."
      },
      {
        "title": "2 — Kết hợp Floor Tom mô phỏng nốt 808 cao độ",
        "tip": "Đánh vào Floor tom được giảm âm để tạo nốt trầm có giai điệu đi theo câu bass của bài hát."
      },
      {
        "title": "3 — Cú dậm đúp 808 phong cách Trap hiện đại",
        "tip": "Hai cú kick dậm dứt khoát ở các nốt đảo phách vi mô bên dưới cú snare đanh giòn."
      },
      {
        "title": "4 — Rãnh nhịp 808 Acoustic Translation hoàn chỉnh",
        "tip": "Tái hiện âm thanh triệu đô của chiếc máy Roland TR-808 huyền thoại ngay trên bộ trống mộc của bạn."
      }
    ]
  },
  "hiphop-chris-dave": {
    "tagline": "Chris Dave — quái kiệt của những rãnh nhịp bất quy tắc, Polyrhythm và Micro-Timing",
    "bodyHtml": "<p>Được mệnh danh là \"nhà khoa học điên\" của nghệ thuật đánh trống thế kỷ 21, <strong>Chris \"Daddy\" Dave</strong> (người chơi cùng D'Angelo, Robert Glasper, Adele và Justin Bieber) đã tái định nghĩa hoàn toàn những gì một con người có thể làm được trên bộ trống.</p><h2 class=\"section-label\">Phá vỡ mọi quy tắc truyền thống</h2><p>Chris Dave sử dụng bộ trống độc nhất vô nhị với hàng chục chiếc cymbal bị đục lỗ, xích sắt, trống snare nhỏ tí hon và cách chơi <strong>nhịp đa tầng (polyrhythms) kết hợp nhịp trượt vi mô</strong> đến mức người nghe cảm giác như nhịp điệu có thể sụp đổ bất kỳ lúc nào nhưng kỳ diệu thay lại luôn tiếp đất hoàn hảo.</p>",
    "graduationCriteria": [
      "Chơi câu groove phong cách Chris Dave ở ♩=82 mà không bị mất dấu phách 1",
      "Sự kết hợp giữa nhịp liên ba trên hi-hat và nhịp nốt móc kép trên snare thể hiện rõ ràng",
      "Cảm nhận được độ co giãn thời gian (elastic time) độc đáo mà vẫn giữ vững nhịp tim của bài hát"
    ],
    "exercises": [
      {
        "title": "1 — Mẫu hình tay Chris Dave: Phân nhịp đa tầng trên Hi-Hat",
        "tip": "Tay hi-hat chơi nhịp liên ba trong khi tay snare gõ các nốt ghost note nốt móc kép. Sự hòa quyện giữa 3 và 4."
      },
      {
        "title": "2 — Cú Snare lệch tâm đầy ma thuật",
        "tip": "Tiếng snare rimshot xuất hiện ở những vị trí không ai ngờ tới nhưng lại ăn khớp kỳ diệu với giai điệu."
      },
      {
        "title": "3 — Rãnh nhịp bài 'Black Radio' phong cách Robert Glasper Experiment",
        "tip": "Tái hiện âm thanh đỉnh cao của phong trào Jazz-Hip-Hop thế kỷ 21."
      },
      {
        "title": "4 — Chris Dave Groove toàn lực",
        "tip": "Thả lỏng toàn bộ định kiến, bước vào thế giới nhịp điệu phi tuyến tính đầy mê hoặc của quái kiệt Chris Dave."
      }
    ]
  },
  "hiphop-anderson-paak": {
    "tagline": "Anderson .Paak — tay trống kiêm ca sĩ thiên tài với nụ cười tỏa nắng và rãnh nhịp nảy lửa",
    "bodyHtml": "<p>Vừa ngồi sau bộ trống mộc vừa hát chính với chất giọng khàn đầy mê hoặc, <strong>Anderson .Paak</strong> là hiện thân rực rỡ nhất của sự kết hợp giữa kỹ năng nhạc cụ đỉnh cao và phong thái ngôi sao giải trí thế giới.</p><h2 class=\"section-label\">Năng lượng cuộn trào và nụ cười rạng rỡ</h2><p>Lối chơi của Anderson .Paak mang đậm phong cách Funk và Soul bờ Tây: rãnh nhịp nảy tưng bừng, cú snare rimshot xé rách không gian, những cú mở hi-hat sắc lẹm và một nguồn năng lượng tích cực khiến cả khán phòng bừng sáng.</p>",
    "graduationCriteria": [
      "Chơi rãnh nhịp bài 'Come Down' ở ♩=98 với đầy đủ năng lượng bốc lửa và độ nảy dứt khoát",
      "Tiếng snare rimshot nổ giòn tan ở phách 2 và 4, kết hợp mượt mà cùng các cú mở hi-hat",
      "Vừa chơi trống vừa có thể mỉm cười hoặc hát theo nhịp mà không bị hụt hơi"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp bài 'Come Down' kinh điển",
        "tip": "Hi-hat mở liên tục ở các nốt lệch, kick dậm dồn dập, snare nổ đanh. Rãnh nhịp sôi sục năng lượng."
      },
      {
        "title": "2 — Cú mở Hi-Hat kép phong cách bờ Tây",
        "tip": "Mở hé hi-hat hai lần liên tiếp tạo cú nảy tưng bừng cho đoạn điệp khúc bùng nổ."
      },
      {
        "title": "3 — Rãnh nhịp Silk Sonic phong cách Anderson .Paak",
        "tip": "Hào hoa, lịch lãm, đậm chất hoài niệm thập niên 70 kết hợp vẻ bóng bẩy của thế kỷ 21."
      },
      {
        "title": "4 — Anderson .Paak Live Performance Groove",
        "tip": "Chơi với nụ cười trên môi và sự tự tin rực rỡ của một nghệ sĩ sân khấu hàng đầu."
      }
    ]
  },
  "hiphop-j-dilla": {
    "tagline": "J Dilla & điệu 'Dilla Time' — nhịp trượt vi mô không lượng tử hóa (Unquantized Swing)",
    "bodyHtml": "<p>Nhà sản xuất âm nhạc huyền thoại <strong>J Dilla (James Dewitt Yancey)</strong> đã tạo nên một cuộc cách mạng vĩ đại nhất trong lịch sử tiết tấu hiện đại. Bằng cách <strong>tắt tính năng tự động làm tròn nhịp (Quantize) trên máy Akai MPC3000</strong>, Dilla đã tạo ra một cảm giác nhịp điệu hoàn toàn mới: <strong>Dilla Time</strong>.</p><h2 class=\"section-label\">Nghệ thuật nhịp trượt vi mô (Micro-Timing Swing)</h2><p>Trong điệu Dilla Time, các nốt nhạc không nằm trên lưới thẳng (straight), cũng không nằm trên lưới liên ba (triplet) — chúng nằm <strong>ở khoảng giữa hai thế giới đó</strong>! Tiếng hi-hat hơi vội về phía trước trong khi tiếng snare và kick lại lững thững kéo lùi về phía sau. Âm thanh nghe say khướt, lắc lư như say sóng, ấm áp và ngập tràn chất con người.</p>",
    "graduationCriteria": [
      "Biểu diễn được cảm giác 'Dilla Time' ở ♩=86 — nhịp trượt lơ lửng mà không làm mất tiếng click của phách 1",
      "Sự kết hợp giữa cú kick lười biếng và tiếng snare kéo lùi tạo nên cảm giác gật đầu đặc trưng",
      "Hiểu rõ bản chất toán học của việc chơi không lượng tử hóa (unquantized playing)"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp Dilla Time cơ bản: Lưới nốt móc kép không lượng tử hóa",
        "tip": "Chơi rãnh nhịp với nốt hi-hat hơi lơi lỏng, tiếng snare trễ nhẹ. Đừng cố gắng quá hoàn hảo — hãy để nhịp điệu thở."
      },
      {
        "title": "2 — Chân Kick 'say khướt' (The Drunken Kick)",
        "tip": "Chân kick dậm những nốt lệch không đều đặn một cách có chủ đích. Cảm nhận độ lảo đảo quyến rũ."
      },
      {
        "title": "3 — Rãnh nhịp bài 'Donuts' phong cách J Dilla bất hủ",
        "tip": "Tái hiện kiệt tác album 'Donuts'. Bản thánh ca của toàn bộ giới hip-hop và jazz hiện đại."
      },
      {
        "title": "4 — Dilla Groove toàn diện trên bộ trống mộc",
        "tip": "Làm chủ 'Dilla Time' — một trong những thành tựu nhịp điệu vĩ đại nhất của nhân loại trong 50 năm qua."
      }
    ]
  },
  "hiphop-modern-production": {
    "tagline": "Kỹ thuật chơi trống cho khâu sản xuất âm nhạc hiện đại",
    "bodyHtml": "<p>Trong các phòng thu âm hiện đại của Drake, Travis Scott hay Post Malone, người chơi trống không chỉ đơn thuần là người biểu diễn — họ phải tư duy như một <strong>nhà sản xuất âm nhạc (producer)</strong>.</p><h2 class=\"section-label\">Phân tầng không gian âm thanh (Layering)</h2><p>Bạn phải biết cách phân tầng các chi để kỹ sư âm thanh có thể xử lý dễ dàng: tiếng kick phải thật gọn gàng để nhường chỗ cho dải siêu trầm Sub-bass; tiếng snare phải nén chặt để không đè lên dải trung của giọng hát; và cymbal phải được kiểm soát độ vang để không làm đục bản mix.</p>",
    "graduationCriteria": [
      "Rãnh nhịp sản xuất hiện đại (Bài 1) đạt độ gọn gàng và tách bạch âm sắc tuyệt đối ở ♩=120 (half-time 60 BPM)",
      "Kiểm soát được độ nảy của từng mặt trống không để lại tạp âm thừa",
      "Thực hiện các cú ngắt âm chuyển đoạn chuẩn xác theo từng vạch nhịp của phần mềm DAW"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp nén chặt cho khâu sản xuất hiện đại",
        "tip": "Từng cú gõ đều gọn gàng, dứt khoát như một mẫu âm thanh đã được xử lý qua EQ và Compressor."
      },
      {
        "title": "2 — Cú dằn ngắt âm sạch sẽ (The Clean Cut)",
        "tip": "Đột ngột dừng toàn bộ các chi ở cuối ô nhịp để tạo khoảng lặng tuyệt đối cho ca từ rap."
      },
      {
        "title": "3 — Phối hợp cùng âm thanh điện tử kích hoạt (Triggering)",
        "tip": "Đánh trống mộc kết hợp cùng các âm thanh mẫu điện tử kích hoạt song song."
      },
      {
        "title": "4 — Bản phối Hip-Hop sản xuất hoàn chỉnh",
        "tip": "Làm chủ tư duy của một tay trống phòng thu thế kỷ 21."
      }
    ]
  },
  "hiphop-sampling": {
    "tagline": "Tái hiện những đoạn Sample cắt gọt của máy MPC trên dàn trống mộc",
    "bodyHtml": "<p>Trong nghệ thuật lấy mẫu (sampling), các nhà sản xuất dùng máy Akai MPC cắt rời một đoạn rãnh nhịp cổ thành từng mẩu nhỏ (chop) rồi sắp xếp lại theo một trật tự hoàn toàn mới. Kết quả là những <strong>cú giật nhịp, ngắt âm đột ngột và sự kết hợp kỳ lạ</strong> không bao giờ xuất hiện trong cách chơi tự nhiên của con người.</p><h2 class=\"section-label\">Mô phỏng máy móc bằng bàn tay con người</h2><p>Học cách chơi lại những đoạn sample bị cắt gọt là một bài tập tuyệt vời cho não bộ: bạn phải dừng một tiếng cymbal ngay giữa chừng (choke), dậm hai tiếng kick sát sạt nhau ở vị trí bất thường, và ngắt âm tiếng snare như thể ai đó vừa bấm nút Mute.</p>",
    "graduationCriteria": [
      "Tái hiện được cảm giác ngắt âm đột ngột (chopped feel) của máy sampler trên bộ trống mộc",
      "Các nốt ngắt âm cymbal bằng tay (chokes) diễn ra chính xác mà không làm rơi nhịp máy đếm nhịp",
      "Rãnh nhịp bài 'Chopped Sample Groove' (Bài 4) tuôn chảy tự nhiên ở ♩=86"
    ],
    "exercises": [
      {
        "title": "1 — Cú ngắt âm Cymbal bằng tay (Cymbal Choke)",
        "tip": "Tay phải đánh lá Crash, tay trái lập tức chụp lấy mép lá cymbal để dập tắt tiếng ngân ngay tức khắc."
      },
      {
        "title": "2 — Mẫu Kick bị cắt gọt (Chopped Kick Pattern)",
        "tip": "Chân kick dậm những nốt bất đối xứng mô phỏng các mẩu sample bị xếp lệch vị trí."
      },
      {
        "title": "3 — Cú vấp nhịp có chủ đích kiểu Akai MPC",
        "tip": "Cố tình tạo ra một cú vấp nhịp ngắn ngủi ở cuối ô nhịp trước khi quay lại phách 1."
      },
      {
        "title": "4 — Rãnh nhịp Chopped Sample hoàn chỉnh",
        "tip": "Biến cơ thể bạn thành một chiếc máy sampler sống động đầy ma thuật."
      }
    ]
  },
  "hiphop-louis-cole": {
    "tagline": "Louis Cole — năng lượng điên cuồng, tốc độ chóng mặt và sự hài hước độc đáo",
    "bodyHtml": "<p>Là người đồng sáng lập ban nhạc KNOWER và là hiện tượng âm nhạc toàn cầu, <strong>Louis Cole</strong> đại diện cho trường phái Funk-Hip-Hop thế hệ mới: <strong>tốc độ siêu thanh, kỹ thuật ngón tay siêu phàm, và một nguồn năng lượng bùng nổ không giới hạn</strong>.</p><h2 class=\"section-label\">Sức mạnh của nhịp nốt móc kép tốc độ cao</h2><p>Louis Cole kết hợp nhịp điệu trò chơi điện tử 8-bit, Funk cổ điển và sự nổi loạn của Punk Rock. Các bài tập của ông đòi hỏi đôi bàn tay phải đánh nốt móc kép liên tục ở tốc độ ♩=130+ mà vẫn giữ được sự chuẩn xác từng milimet và sự hài hước tươi vui.</p>",
    "graduationCriteria": [
      "Duy trì dòng chảy nốt móc kép tốc độ cao kiểu Louis Cole ở ♩=125 suốt 1 phút",
      "Các nốt ghost note và rimshot trên snare chuyển đổi chớp nhoáng không bị vấp tay",
      "Chân kick dậm chính xác trên các nốt đảo phách tốc độ cao"
    ],
    "exercises": [
      {
        "title": "1 — Dòng chảy nốt móc kép tốc độ cao hai tay",
        "tip": "Hai tay luân phiên chạy nốt móc kép trên hi-hat ở ♩=120. Thả lỏng tối đa các khớp ngón tay."
      },
      {
        "title": "2 — Cú Rimshot nổ nhanh như điện xẹt",
        "tip": "Tay phải giáng nhanh xuống snare tạo tiếng backbeat rồi bay ngược lại hi-hat trong chớp mắt."
      },
      {
        "title": "3 — Rãnh nhịp Funk điện tử phong cách KNOWER",
        "tip": "Sự kết hợp giữa nhịp game 8-bit và funk điên cuồng. Đòi hỏi phản xạ thần kinh cực nhạy."
      },
      {
        "title": "4 — Louis Cole Drum Workout toàn lực",
        "tip": "Đẩy tốc độ lên ♩=130. Cháy hết mình với nguồn năng lượng vô tận và niềm vui thuần khiết."
      }
    ]
  },
  "hiphop-future-r-and-b": {
    "tagline": "Tương lai của R&B — những rãnh nhịp đa tầng không gian",
    "bodyHtml": "<p>Âm nhạc R&amp;B của tương lai (Future R&amp;B) — với những nghệ sĩ như Kaytranada, Kelela và FKA Twigs — mở ra một chân trời mới nơi nhịp điệu được giải phóng khỏi mọi quy ước cứng nhắc: <strong>sự kết hợp giữa nhịp khiêu vũ House 4-on-the-floor, nhịp Swing của Hip-Hop và không gian ảo ảnh đa chiều</strong>.</p><h2 class=\"section-label\">Khả năng biến hóa đa thể loại</h2><p>Là một tay trống hiện đại, bạn cần làm chủ khả năng di chuyển linh hoạt giữa các thể loại âm nhạc trong cùng một ca khúc: đang từ một nhịp Hip-Hop trôi chậm rãi có thể chuyển số ngay sang một điệu House dồn dập hoặc một câu Funk đầy ma mị mà dòng chảy năng lượng không bao giờ bị gián đoạn.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Future R&B phong cách Kaytranada (Bài 1) giữ được độ nhún nhảy sâu sắc ở ♩=108",
      "Sự kết hợp giữa Four-on-the-floor chân kick và snare đảo phách thực hiện hoàn hảo",
      "Chuyển đổi nhịp điệu đa tầng không gian mượt mà giữa các phân đoạn"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Future R&B phong cách Kaytranada",
        "tip": "Chân kick dậm four-on-the-floor ở mọi phách, tay chơi rãnh nhịp hip-hop đảo phách ở trên. Cực kỳ cuốn hút."
      },
      {
        "title": "2 — Cú mở Hi-Hat đa tầng không gian",
        "tip": "Mở hi-hat ở những vị trí vi mô bất ngờ tạo độ rung rinh huyền ảo cho bản hòa âm."
      },
      {
        "title": "3 — Rãnh nhịp Afro-Future R&B",
        "tip": "Hòa quyện tiết tấu đa nhịp Châu Phi với âm hưởng hiện đại của R&amp;B thế kỷ 21."
      },
      {
        "title": "4 — Tác phẩm Future R&B hoàn chỉnh",
        "tip": "Chào mừng bạn đến với tương lai của âm nhạc nhịp điệu thế giới. Sáng tạo, tự do và bất tận."
      }
    ]
  }
};

const targetPath = path.join(__dirname, '../src/_data/i18n/vi/lessons/hiphop.json');
fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully wrote', Object.keys(data).length, 'hiphop lessons to', targetPath);
