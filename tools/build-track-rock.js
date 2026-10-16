// tools/build-track-rock.js
const fs = require('fs');
const path = require('path');

const data = {
  "rock-quarter-hat": {
    "tagline": "Rãnh nhịp kinh tế và quyền lực nhất của Rock — mỗi phách một tiếng Hi-Hat",
    "bodyHtml": "<p>Thay vì chơi nốt móc đơn dồn dập, rãnh nhịp <strong>Hi-Hat nốt đen (Quarter-Hat Groove)</strong> chỉ gõ đúng một tiếng hi-hat ở mỗi phách: <em>1, 2, 3, 4</em>. Đây là rãnh nhịp trứ danh đã làm nên thương hiệu của AC/DC, The Rolling Stones và hàng trăm ban nhạc Rock cổ điển vĩ đại.</p><h2 class=\"section-label\">Khoảng không gian tạo nên sức nặng</h2><p>Khi bớt đi các nốt hi-hat phụ, khoảng trống giữa các phách mở toang ra, khiến cho tiếng trống Bass ở phách 1, 3 và tiếng trống Snare ở phách 2, 4 trở nên khổng lồ, uy lực và nặng tựa nghìn cân. Tuy nhiên, nó đòi hỏi chiếc đồng hồ thời gian bên trong bạn phải cực kỳ vững vàng vì không còn các nốt móc đơn làm điểm tựa.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Backbeat Hi-Hat nốt đen (Bài 1) giữ đều đặn suốt 2 phút ở ♩=104",
      "Câu dằn Snare ở phách 4 (Bài 2) vang lên có chủ đích rõ ràng, không bị ngỡ như một nốt đánh hụt",
      "Biến thể Kick kép (Bài 3) chơi chắc chắn ở ♩=100 với tiếng hi-hat nốt đen không bị lay chuyển"
    ],
    "exercises": [
      {
        "title": "1 — Backbeat với Hi-Hat nốt đen",
        "tip": "Mỗi phách gõ một tiếng hi-hat. Kick ở 1 và 3, snare ở 2 và 4. Đánh dứt khoát, để không gian tĩnh lặng giữa các nốt tỏa sáng."
      },
      {
        "title": "2 — Snare chỉ ở phách 4 (Câu nhịp 3 phách tĩnh lặng)",
        "tip": "Bỏ cú snare ở phách 2, chỉ giáng mạnh một cú ở phách 4. Tạo cảm giác hồi hộp dồn nén trước khi bùng nổ."
      },
      {
        "title": "3 — Hi-Hat nốt đen kết hợp Kick kép ở đầu ô nhịp",
        "tip": "Chân phải dậm nhanh hai cú kick ở <em>1 &amp;</em> trong khi tay hi-hat vẫn giữ đúng nhịp nốt đen đơn lẻ ở trên."
      }
    ]
  },
  "rock-cross-stick": {
    "tagline": "Người anh em êm ái của Backbeat — tiếng gõ vành lách cách thay vì cú giáng mặt Snare",
    "bodyHtml": "<p>Không phải bản nhạc rock nào cũng gầm rú với âm lượng cực đại. Trong các đoạn Verse tự sự, các bản Power Ballad hoặc Country Rock, <strong>tiếng gõ vành Cross-Stick (Side-Stick)</strong> mang lại sự mộc mạc, gần gũi và lịch lãm tuyệt vời.</p><h2 class=\"section-label\">Nghệ thuật tạo tiếng 'Cốc' hoàn hảo</h2><p>Úp đầu dùi xuống mặt trống, đặt cườm tay đè nhẹ lên màng trống để chặn độ rung, và dùng thân dùi gõ vào vành kim loại ở phách 2 và 4. Khi bài hát bùng nổ sang đoạn Điệp khúc (Chorus), bạn chỉ cần xoay nhanh cây dùi lại và giáng một cú Rimshot toàn lực — sự tương phản đó sẽ khiến cả khán phòng phải sởn gai ốc.</p>",
    "graduationCriteria": [
      "Tiếng Cross-stick ở phách 2 và 4 (Bài 1) giữ ổn định ở ♩=80 với tiếng gõ gỗ chắc nịch — không bị vang rè mặt trống",
      "Phiên bản Ballad kết hợp Hi-Hat nốt đen (Bài 2) mang lại cảm giác đầm ấm, sâu lắng chứ không bị chậm chạp",
      "Khoảnh khắc chuyển đoạn từ Verse sang Chorus (Bài 4) đưa cú Snare toàn lực tiếp đất chính xác ở phách 2"
    ],
    "exercises": [
      {
        "title": "1 — Cross-Stick ở 2 và 4 + Hi-Hat nốt móc đơn",
        "tip": "Gõ thân dùi vào vành trống ở 2 và 4. Tìm vị trí tiếp xúc trên vành để tiếng gõ phát ra âm thanh 'cốc' giòn và đanh nhất."
      },
      {
        "title": "2 — Cross-Stick kết hợp Hi-Hat nốt đen (Ballad feel)",
        "tip": "Hi-hat chuyển sang đánh nốt đen thưa thớt, tạo không gian êm đềm cho giọng ca chính cất lên."
      },
      {
        "title": "3 — Cross-Stick chỉ ở phách 4",
        "tip": "Khoảng lặng ở phách 2 nhường chỗ cho một cú lướt guitar hoặc tiếng thở dài của giai điệu."
      },
      {
        "title": "4 — Từ Verse sang Chorus: Cross-Stick chuyển sang Snare toàn lực",
        "tip": "Ô nhịp 1 gõ cross-stick nhẹ nhàng; sang ô nhịp 2 lật nhanh dùi giáng cú Rimshot bùng nổ ở phách 2."
      }
    ]
  },
  "rock-basic-fills": {
    "tagline": "Bốn hoặc năm câu báo trống mà mọi tay trống Rock đều chơi trong năm đầu tiên",
    "bodyHtml": "<p>Bạn không cần phải là Neil Peart hay Mike Portnoy mới có thể tạo ra những câu fill rock đắt giá. Trong lịch sử âm nhạc, 90% các bản thu âm rock kinh điển chỉ sử dụng <strong>vài mẫu câu báo trống cơ bản</strong> được chơi với thái độ dứt khoát, đúng thời điểm và sự tự tin tuyệt đối.</p><h2 class=\"section-label\">Bộ từ vựng kinh điển</h2><p>Bài học này rèn luyện cho bạn phản xạ tung ra các câu fill mẫu mực: cú gõ 4 nốt đen trên snare, cú lăn nốt móc đơn từ Snare xuống dàn Tom, câu fill đón đầu đảo phách và cú pickup dẫn đường bùng nổ vào lá Crash ở đầu đoạn điệp khúc.</p>",
    "graduationCriteria": [
      "Vòng lặp 3 ô nhịp groove + 1 ô nhịp fill (Bài 1) chơi sạch sẽ ở ♩=100 — câu fill kết thúc chính xác ở phách 1 ô tiếp theo",
      "Cú lăn qua dàn Tom (Bài 2) chuyển động mượt mà từ Snare → High Tom → Mid Tom → Floor Tom không bị vấp tay",
      "Câu fill Pickup (Bài 4) dẫn đường đầy thuyết phục vào cú Crash ở phách 1 của ô nhịp mới"
    ],
    "exercises": [
      {
        "title": "1 — Ba ô nhịp Groove + Một ô nhịp 4 nốt đen trên Snare",
        "tip": "Chơi rãnh nhịp vững vàng suốt 3 ô nhịp, ô nhịp thứ 4 chuyển tay gõ 4 nốt đen trên snare rồi giáng Crash ở phách 1."
      },
      {
        "title": "2 — Câu Fill lăn dàn Tom đi xuống (Snare → High → Mid → Floor)",
        "tip": "Mỗi trống nhận 2 nốt móc đơn: chuyển động lượn vòng từ trái qua phải của dàn trống mộc."
      },
      {
        "title": "3 — Câu Fill đảo phách nốt móc kép",
        "tip": "Bốn nốt móc kép chớp nhoáng ở cuối ô nhịp tạo cú phóng lao đầy bất ngờ trước khi tiếp đất."
      },
      {
        "title": "4 — Cú đón đầu dẫn vào Điệp khúc (Phách cuối + Crash ở phách 1)",
        "tip": "Chỉ dùng đúng phách thứ 4 để tung cú gõ kép trên snare, dẫn vào tiếng nổ Crash huy hoàng ở phách 1."
      }
    ]
  },
  "rock-sixteenth-hats": {
    "tagline": "Nghệ thuật phòng thu Pop — Hi-Hat nốt móc kép trên nền Backbeat Rock",
    "bodyHtml": "<p>Khi bạn nghe các bản hit Pop-Rock kinh điển của Michael Jackson, Toto, Blondie hay Bruno Mars, bạn sẽ nghe thấy một tiếng xào xạc dồn dập, mượt mà và cực kỳ lôi cuốn trên lá hi-hat: đó chính là <strong>Hi-Hat nốt móc kép (16th-Note Hi-Hats)</strong>.</p><h2 class=\"section-label\">Kỹ thuật hai tay luân phiên (Two-Handed 16ths)</h2><p>Vì tốc độ nốt móc kép rất nhanh, cách tiếp cận phổ biến nhất là <strong>chơi bằng cả hai tay luân phiên trên hi-hat (R L R L)</strong>. Nhưng điều kỳ diệu là: ở phách 2 và 4, tay phải (hoặc tay trái) phải nhanh chóng rời hi-hat để giáng xuống trống snare tạo tiếng backbeat mà không làm đứt quãng dòng chảy nốt móc kép.</p>",
    "graduationCriteria": [
      "Hi-hat hai tay (Bài 1) giữ vững ở ♩=88 suốt 2 phút với tiếng backbeat đanh gọn — không bị chạy nhanh khi tay phải mỏi",
      "Hi-hat một tay (Bài 3) duy trì ở ♩=80 suốt 1 phút mà không bị chuột rút cơ cẳng tay",
      "Mẫu hình Kick phong cách Toto (Bài 4) ở ♩=92 — các cú kick đáp chính xác trên lưới nốt móc kép"
    ],
    "exercises": [
      {
        "title": "1 — Hi-Hat móc kép hai tay (RLRL) + Backbeat",
        "tip": "Hai tay luân phiên gõ trên hi-hat. Ở phách 2 và 4, tay phải giáng xuống snare trong khi tay trái tiếp tục giữ nhịp."
      },
      {
        "title": "2 — Thế tay luân phiên liên tục suốt ô nhịp",
        "tip": "Duy trì dòng chảy 16 nốt móc kép đều như bắp hạt. Thả lỏng cổ tay để không bị gồng cứng cơ."
      },
      {
        "title": "3 — Hi-Hat móc kép một tay (Chỉ tay phải) + Backbeat",
        "tip": "Thử thách sức bền: chỉ dùng một tay phải gõ nốt móc kép. Tận dụng kỹ thuật Moeller và độ nảy của mặt cymbal."
      },
      {
        "title": "4 — Mẫu Kick nốt móc kép phong cách ban nhạc Toto",
        "tip": "Chân kick kết hợp các nốt đảo phách vi mô bên dưới tấm thảm hi-hat móc kép. Rãnh nhịp phòng thu đỉnh cao."
      }
    ]
  },
  "rock-open-hats": {
    "tagline": "Mở Hi-Hat ở nốt & — điểm nhấn đảo phách nằm ở trung tâm của Rock",
    "bodyHtml": "<p>Không có âm thanh nào mang đậm chất Rock &amp; Roll hơn tiếng <strong>mở lá Hi-Hat ở nốt lệch '&amp;'</strong>: tiếng kim loại xèo vang lên đầy hoang dại rồi bị dập tắt ngay tức khắc ở phách chính tiếp theo.</p><h2 class=\"section-label\">Sự phối hợp giữa tay và chân trái</h2><p>Bí quyết của cú mở hi-hat nằm ở bàn chân trái: nhấc nhẹ gót chân để hai lá tách nhau khoảng 1 cm ngay khi tay đánh xuống, rồi dậm chặt chân trái xuống ngay phách 1 tiếp theo để tạo tiếng ngắt âm (choke) dứt khoát. Sự co bóp nhịp nhàng này mang lại độ nảy và sinh khí bất tận cho bài hát.</p>",
    "graduationCriteria": [
      "Mở hi-hat ở mọi nốt '&' (Bài 1) ở ♩=100 — tiếng mở và đóng phân biệt rạch ròi, rõ nét",
      "Mẫu hình kết hợp đóng/mở (Bài 3) ở ♩=104 mà chân trái không bị lúng túng",
      "Mẫu hình 4 ô nhịp kiểu The Police (Bài 4) lặp lại mượt mà mà không làm mất nhịp dập chân"
    ],
    "exercises": [
      {
        "title": "1 — Mở Hi-Hat ở mọi nốt &",
        "tip": "Đóng ở các số (1, 2, 3, 4), mở ở mọi dấu &amp;: <em>1 mở, 2 mở, 3 mở, 4 mở</em>. Rãnh nhịp Disco-Rock kinh điển."
      },
      {
        "title": "2 — Chỉ mở Hi-Hat ở nốt & của 4",
        "tip": "Giữ hi-hat đóng chặt suốt cả ô nhịp, chỉ mở đúng nốt &amp; cuối cùng để hít một hơi thở dài trước khi quay vòng."
      },
      {
        "title": "3 — Đan xen đóng và mở trong cùng một ô nhịp",
        "tip": "Mở ở &amp; của 2 và &amp; của 4. Cảm nhận lực đẩy hai nhịp nhún nhảy của Funk-Rock."
      },
      {
        "title": "4 — Mẫu hình 4 ô nhịp mở ở nốt & (Phong cách The Police / Stewart Copeland)",
        "tip": "Những cú mở hi-hat đảo phách đầy ma mị của Stewart Copeland. Tinh tế, sắc sảo và ngập tràn không gian."
      }
    ]
  },
  "rock-shuffle-rock": {
    "tagline": "Cảm giác Shuffle áp dụng cho nhịp Backbeat Rock nặng đô",
    "bodyHtml": "<p>Khi điệu Shuffle của người da màu vùng châu thổ Mississippi va chạm với những dàn amply Marshall gầm rú của Rock &amp; Roll, <strong>Rock Shuffle</strong> ra đời — thứ âm nhạc đã làm nên tên tuổi của Led Zeppelin, ZZ Top và Stevie Ray Vaughan.</p><h2 class=\"section-label\">Độ nảy liên ba kết hợp sức nặng ngàn cân</h2><p>Khác với shuffle jazz nhẹ nhàng, rock shuffle đòi hỏi bàn chân kick phải dậm cực kỳ đầm chắc, tiếng snare backbeat phải nổ giòn tan như súng cối, trong khi tay hi-hat vẫn giữ được độ nảy nhún nhảy dập dềnh của chùm liên ba khuyết nốt giữa.</p>",
    "graduationCriteria": [
      "Nhịp backbeat shuffle cơ bản (Bài 1) giữ vững ở ♩=92 — mỗi cú snare đều đáp trúng nốt dài của liên ba",
      "Shuffle kick nặng đô (Bài 2) ở ♩=88 — kick ở 1 và 3 bám chặt bên dưới nhịp hi-hat",
      "Tiếng snare kiểu Texas (Bài 3) — cú snare phụ rơi chính xác vào nốt thứ ba của chùm liên ba ở phách 2"
    ],
    "exercises": [
      {
        "title": "1 — Backbeat Shuffle cơ bản (Âm lượng nặng)",
        "tip": "Tay hi-hat chơi nhịp shuffle: <em>1-(trip)-let 2-(trip)-let</em>. Snare ở phách 2 và 4 đánh mạnh bằng rimshot."
      },
      {
        "title": "2 — Mẫu Kick nặng đô (Kick kép ở đầu ô nhịp)",
        "tip": "Dậm đúp kick ở đầu ô nhịp theo phân nhịp liên ba: <em>1... let</em>. Tạo độ nặng trĩu cho cả ban nhạc."
      },
      {
        "title": "3 — Texas Shuffle (Thêm Snare phụ ở nốt thứ 3 của phách 2)",
        "tip": "Gõ thêm một nốt ghost note nhẹ trên snare ở cuối phách 2. Đặc sản của Texas blues-rock."
      },
      {
        "title": "4 — Rãnh nhịp Shuffle hoàn chỉnh phong cách ZZ Top",
        "tip": "Đẩy tốc độ lên ♩=100. Cảm nhận chiếc xe phân khối lớn đang gầm rú lao đi trên xa lộ sa mạc."
      }
    ]
  },
  "rock-power-ballad": {
    "tagline": "Khởi đầu chậm rãi, điệp khúc bùng nổ — cỗ máy động lực của Arena Rock thập niên 80",
    "bodyHtml": "<p>Một bản <strong>Power Ballad</strong> kinh điển luôn bắt đầu trong bóng tối: ánh đèn rọi vào ca sĩ, tiếng guitar rải nhẹ, và người chơi trống gõ từng tiếng cross-stick mộc mạc, cô đơn. Nhưng khi đoạn Điệp khúc ập đến, cả sân vận động nổ tung: lá Crash rền vang, trống Snare gầm thét và những quả tom trầm rung chuyển mặt đất.</p><h2 class=\"section-label\">Làm chủ sự tương phản động học</h2><p>Bài học này rèn luyện khả năng chuyển đổi sắc thái cực đại: từ tiếng thì thầm kín đáo của đoạn Verse sang sự bùng nổ hoành tráng của đoạn Chorus mà tốc độ tempo ♩=72 vẫn giữ vững như một tượng đài.</p>",
    "graduationCriteria": [
      "Đoạn Verse gõ cross-stick (Bài 1) ở ♩=72 giữ được độ êm ái, tĩnh lặng suốt 2 phút",
      "Đoạn Chorus chơi snare toàn lực (Bài 2) ở cùng tốc độ và mẫu kick — chỉ có lực tay thay đổi",
      "Câu fill chuyển đoạn từ Verse sang Chorus (Bài 3) đưa lá Crash tiếp đất hoàn hảo ở phách 1",
      "Cấu trúc 4 ô nhịp trọn vẹn (Bài 4) mang lại cảm xúc của một ca khúc thực thụ chứ không phải một bài tập"
    ],
    "exercises": [
      {
        "title": "1 — Verse: Cross-Stick kết hợp Hi-Hat nốt đen",
        "tip": "Giữ âm lượng ở mức Piano (p). Từng tiếng gõ vành lách cách vang lên trong không gian tĩnh mịch."
      },
      {
        "title": "2 — Chorus: Cùng mẫu hình, chuyển sang Snare toàn lực + Hi-Hat móc đơn",
        "tip": "Bùng nổ sang Forte (f). Snare đánh rimshot uy lực, hi-hat mở hé tạo năng lượng cuộn trào."
      },
      {
        "title": "3 — Câu Fill chuyển đoạn từ Verse sang Chorus",
        "tip": "Một câu fill dàn tom trầm hùng ở ô nhịp cuối cùng, phóng thẳng vào tiếng nổ lá Crash ở phách 1 của Chorus."
      },
      {
        "title": "4 — Cấu trúc 4 ô nhịp hoàn chỉnh: Verse, Verse, Fill, Chorus",
        "tip": "Trải nghiệm trọn vẹn sự thăng hoa cảm xúc của một bản Rock ballad đỉnh cao."
      }
    ]
  },
  "rock-tom-grooves": {
    "tagline": "Khi dàn Tom — chứ không phải Snare — gánh vác toàn bộ rãnh nhịp",
    "bodyHtml": "<p>Hầu hết thời gian, dàn tom chỉ được dùng để đánh câu fill rồi lại chìm vào quên lãng. Nhưng khi một tay trống quyết định chuyển bàn tay dẫn nhịp sang dàn tom, một thứ âm nhạc nguyên thủy, hoang dại và đầy tính thôi miên sẽ trỗi dậy — như trong bản hit kinh điển <em>In the Air Tonight</em> của Phil Collins hay các bài hát của U2 và Fleetwood Mac.</p><h2 class=\"section-label\">Âm thanh bộ lạc đầy mê hoặc</h2><p>Chơi groove trên dàn tom đòi hỏi sự cân bằng lực tay tinh tế: tiếng tom trầm ấm phải dẫn dắt bài hát, trong khi tiếng kick và các nốt snare phụ đan cài bên dưới để giữ vững chiếc khung thời gian.</p>",
    "graduationCriteria": [
      "Rãnh nhịp thuần Tom và Kick (Bài 1) giữ vững ở ♩=88 — dàn tom là xương sống chứ không phải trang trí",
      "Rãnh nhịp Tom kèm ghost note trên Snare (Bài 2) — nốt ghost note êm hơn hẳn tiếng tom",
      "Câu fill huyền thoại kiểu 'In the Air Tonight' (Bài 3) nằm gọn gàng trong khuôn khổ 1 ô nhịp",
      "Mẫu hình bộ lạc 4 ô nhịp (Bài 4) tạo thành một dòng chảy âm nhạc liền mạch"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Tom và Kick (Không dùng Snare)",
        "tip": "Hai tay luân phiên chơi trên Floor Tom và High Tom, chân kick dậm ở 1 và 3. Âm thanh trầm ấm, huyền bí."
      },
      {
        "title": "2 — Rãnh nhịp Tom kèm Ghost note Snare ở 2 và 4",
        "tip": "Đưa các nốt ghost note êm ái trên snare vào phách 2 và 4 để giữ nhịp tim cho ban nhạc."
      },
      {
        "title": "3 — Câu Fill biến thành Groove kiểu 'In the Air Tonight'",
        "tip": "Cú dằn tom đi xuống kinh điển nhất lịch sử âm nhạc. Đánh dứt khoát với sự tự tin tuyệt đối."
      },
      {
        "title": "4 — Mẫu hình bộ lạc 4 ô nhịp (Tribal Pattern)",
        "tip": "Phát triển rãnh nhịp tom qua chu kỳ 4 ô nhịp. Tạo nên bầu không khí lễ hội cuồng nhiệt."
      }
    ]
  },
  "rock-half-time": {
    "tagline": "Snare ở phách 3 — khi một câu nhạc 4 ô nhịp mang cảm giác đầm chắc như chỉ có 2",
    "bodyHtml": "<p>Khi bài hát cần một cú dằn nặng nề khiến toàn bộ khán giả phải gật gù theo từng bước chân khổng lồ, người chơi trống sẽ tung ra vũ khí tối thượng: <strong>cảm giác Half-Time</strong>.</p><h2 class=\"section-label\">Ảo ảnh thời gian</h2><p>Máy đếm nhịp vẫn chạy ở cùng một tốc độ ♩=100, nhưng thay vì đánh snare ở phách 2 và 4 như thông thường, bạn <strong>chỉ đánh duy nhất một cú snare ở phách 3</strong>. Cảm giác nhịp điệu lập tức chậm lại một nửa, không gian nở rộng mênh mông và từng cú dậm kick trở nên uy lực gấp bội phần.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Half-time (snare chỉ ở phách 3) giữ vững ở ♩=100 suốt 2 phút không bị trôi về nhịp 2 và 4",
      "Hi-hat nốt móc kép dưới cú snare half-time vẫn giữ đều đặn — cú snare ở phách 3 không làm giật tay hi-hat",
      "Chuyển đổi từ Full-time sang Half-time diễn ra mượt mà ngay tại đầu ô nhịp",
      "Ô nhịp Half-time mang lại cảm giác chậm bằng một nửa ô nhịp Full-time ở cùng một tốc độ tempo"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Half-Time cơ bản",
        "tip": "Kick ở phách 1, Snare chỉ ở phách 3. Tay hi-hat vẫn giữ nốt móc đơn đều đặn: <em>1 (kick), 2, 3 (SNARE), 4</em>."
      },
      {
        "title": "2 — Trống Kick thưa hơn (Cách một ô nhịp mới dậm)",
        "tip": "Giảm mật độ kick để mở rộng không gian tối đa. Cảm giác bài hát chìm vào một vùng nước sâu thẳm."
      },
      {
        "title": "3 — Half-Time kết hợp Hi-Hat nốt móc kép",
        "tip": "Tay hi-hat chạy nốt móc kép dồn dập trong khi snare vẫn đĩnh đạc giáng xuống ở phách 3. Sự tương phản đầy quyến rũ."
      },
      {
        "title": "4 — Chuyển đổi: Từ Full-Time sang Half-Time",
        "tip": "Ô nhịp 1 chơi rock thông thường (snare ở 2 và 4), ô nhịp 2 chuyển sang half-time (snare ở 3). Làm chủ kỹ năng điều khiển thời gian."
      }
    ]
  },
  "rock-train-beat": {
    "tagline": "Cảm giác đoàn tàu xình xịch lao đi của nhạc Country và Rockabilly",
    "bodyHtml": "<p>Tiếng đầu máy xe lửa hơi nước xình xịch lao trên đường ray là một trong những âm thanh định hình nên nền văn hóa âm nhạc Mỹ: từ Johnny Cash, Elvis Presley cho đến dòng nhạc Country hiện đại — đó chính là <strong>Train Beat</strong>.</p><h2 class=\"section-label\">Dòng chảy liên tục trên mặt trống Snare</h2><p>Cả hai bàn tay đánh luân phiên nốt móc đơn liên tục trên mặt trống snare, trong đó các phách 2 và 4 được nhấn mạnh (accents) bằng cú rimshot hoặc cú gõ mạnh, các nốt còn lại gõ nhẹ thì thầm (taps) kết hợp cùng tiếng dậm kick chắc nịch ở mọi phách.</p>",
    "graduationCriteria": [
      "Dòng chảy nốt móc đơn luân phiên trên snare giữ vững ở ♩=120 suốt 2 phút không bị vấp tay",
      "Nốt nhấn backbeat ở 2 và 4 to rõ vượt trội so với các nốt snare đệm ở giữa",
      "Phiên bản đánh bằng chổi (brushes) duy trì được tiếng quét xào xạc liên tục",
      "Mẫu hình 2 ô nhịp thực hiện các cú break mà nhịp tàu hỏa không hề bị khựng lại"
    ],
    "exercises": [
      {
        "title": "1 — Train Beat cơ bản (Dòng chảy nốt móc đơn trên Snare)",
        "tip": "Hai tay gõ nốt móc đơn liên tục trên snare: nhấn mạnh ở 2 và 4. Chân dậm kick ở 1 và 3."
      },
      {
        "title": "2 — Train Beat chơi bằng Chổi (Brushes)",
        "tip": "Tay trái quét tròn tạo tiếng xào xạc như hơi nước xả ra, tay phải gõ nhịp lách cách dồn dập."
      },
      {
        "title": "3 — Cảm giác bài hát 'Folsom Prison Blues'",
        "tip": "Tốc độ nâng lên ♩=110. Cảm nhận tiếng đoàn tàu chở tù nhân lao đi trong đêm lạnh."
      },
      {
        "title": "4 — Mẫu hình Train Beat 2 ô nhịp có nốt đón đầu Pickup",
        "tip": "Thêm các cú đón đầu tinh tế ở cuối ô nhịp thứ 2 mà không làm đứt quãng động cơ xe lửa."
      }
    ]
  },
  "rock-linear-fills": {
    "tagline": "Những câu Fill tuyến tính không bao giờ trùng nốt — ảnh hưởng từ Steve Gadd và Vinnie Colaiuta",
    "bodyHtml": "<p>Trong một câu fill truyền thống, tay và chân thường đánh cùng lúc (ví dụ crash đánh cùng kick). Nhưng trong một <strong>câu fill tuyến tính (Linear Fill)</strong>, có một quy tắc thép bất biến: <strong>Không bao giờ có hai chi đánh xuống cùng một thời điểm!</strong></p><h2 class=\"section-label\">Từng nốt nối tiếp nhau như chuỗi ngọc</h2><p>Mỗi nốt nhạc được chia sẻ lần lượt cho tay phải, tay trái và chân phải: ví dụ <em>Tay Phải - Tay Trái - Chân Kick - Tay Trái (R L K L)</em>. Âm thanh phát ra cực kỳ sắc nét, hiện đại, gãy gọn và không hề có sự đục ngầu của các nốt chồng chéo lên nhau.</p>",
    "graduationCriteria": [
      "Một cụm ô tuyến tính 1 phách (RLRK hoặc RLKL) lặp lại mượt mà ở ♩=100",
      "Câu fill tuyến tính 4 phách thực hiện hoàn hảo mà không có hai chi nào chạm mặt trống cùng lúc",
      "Phối khí tuyến tính di chuyển liên tục qua snare, toms và kick",
      "Đoạn nối tuyến tính 2 ô nhịp nằm vừa vặn giữa hai ô nhịp backbeat mà không làm xô lệch nhịp"
    ],
    "exercises": [
      {
        "title": "1 — Cụm ô tuyến tính 1 phách (RLRK)",
        "tip": "Bốn nốt móc kép: Tay Phải (snare) → Tay Trái (snare) → Tay Phải (tom) → Chân Kick. Không nốt nào đánh đôi."
      },
      {
        "title": "2 — Câu Fill tuyến tính 4 phách (Trộn lẫn các cụm ô)",
        "tip": "Ghép 4 cụm ô tuyến tính lại với nhau thành một câu fill trọn vẹn cả ô nhịp. Cực kỳ bắt tai và hiện đại."
      },
      {
        "title": "3 — Phối khí tuyến tính chạy quanh dàn trống",
        "tip": "Phân bổ các nốt tay lên dàn Tom và Cymbal, chân kick chen vào giữa làm điểm tựa nhịp đập."
      },
      {
        "title": "4 — Cầu nối tuyến tính 2 ô nhịp",
        "tip": "Phát triển câu fill tuyến tính dài 2 ô nhịp đầy kịch tính trước khi giải phóng bằng cú Crash ở phách 1."
      }
    ]
  },
  "rock-double-time": {
    "tagline": "Snare ở mọi phách lệch — khi ban nhạc tăng tốc sang số cao",
    "bodyHtml": "<p>Nếu Half-Time làm mọi thứ chậm lại một nửa, thì <strong>Double-Time</strong> chính là cú đạp ga lút sàn: ban nhạc lao vút đi với cảm giác tốc độ tăng gấp đôi mà máy đếm nhịp thực chất không hề thay đổi!</p><h2 class=\"section-label\">Bản sắc của Punk Rock và Thrash</h2><p>Trong nhịp Double-Time, tiếng trống Snare không chỉ đánh ở 2 và 4, mà đánh ở <strong>mọi nốt lệch phách (&amp;)</strong> hoặc xuất hiện với tần suất dày đặc gấp đôi: <em>Kick ở 1, Snare ở &amp;, Kick ở 2, Snare ở &amp;...</em>. Đây là cỗ máy tạo nên năng lượng điên cuồng của Punk Rock, Skate Punk và Hardcore.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Double-time giữ vững ở ♩=90 suốt 2 phút mà tiếng snare không bị trôi về phách chính",
      "Hi-hat nốt móc kép kết hợp snare double-time khóa chặt nhịp ở ♩=85",
      "Biến thể Punk Rock (snare ở mọi nốt &) duy trì thể lực ở ♩=130",
      "Chuyển đổi từ Regular sang Double-time diễn ra gãy gọn ngay trên vạch nhịp"
    ],
    "exercises": [
      {
        "title": "1 — Từ ô nhịp Half-Time sang ô nhịp Double-Time",
        "tip": "Ô nhịp 1: snare ở phách 3 (chậm). Ô nhịp 2: snare đánh ở mọi nốt &amp; (phóng lao). Cảm nhận sự bùng nổ gia tốc."
      },
      {
        "title": "2 — Hi-Hat móc kép + Snare Double-Time",
        "tip": "Tay hi-hat chạy nốt móc kép dồn dập, snare giáng liên tục ở các nốt lệch. Năng lượng cuồn cuộn."
      },
      {
        "title": "3 — Cú đấm Double-Time phong cách Punk Rock",
        "tip": "Đẩy tốc độ lên ♩=125. Dậm kick ở các phách chính, snare nổ đanh ở các nốt lệch. Nhịp điệu nổi loạn tràn đầy nhiệt huyết."
      },
      {
        "title": "4 — Chuyển đoạn: Từ nhịp Rock thông thường sang Double-Time",
        "tip": "Rèn luyện khả năng chuyển số tức thì khi ca sĩ hô hiệu lệnh tăng tốc ở đoạn cao trào."
      }
    ]
  },
  "rock-stadium-anthem": {
    "tagline": "Dàn Tom vang dội, Crash ở mọi phách 1 — triết lý đánh ít hiệu quả nhiều của Arena Rock",
    "bodyHtml": "<p>Khi bạn biểu diễn trước 50.000 khán giả trong một sân vận động khổng lồ với độ vang âm kéo dài 3 giây, những câu fill móc kép rườm rà sẽ biến thành một đống bùn âm thanh hỗn độn. Những tay trống sân vận động vĩ đại hiểu rằng: <strong>Chơi càng ít nốt, âm thanh càng to và càng uy lực</strong>.</p><h2 class=\"section-label\">Khúc tráng ca của những cú Crash</h2><p>Đánh một cú Crash trời giáng cùng lúc với tiếng trống Kick ở đúng phách 1 của mỗi ô nhịp, sau đó để không gian ngân vang tự do. Tiếng snare nổ như sấm sét ở phách 2 và 4. Đơn giản, kỷ luật, nhưng làm rung chuyển cả cầu trường.</p>",
    "graduationCriteria": [
      "Rãnh nhịp Anthem (kick + crash ở 1, snare ở 2 và 4) chơi với sự tự tin thép ở ♩=110",
      "Cú dồn dập 4 nốt đen trên dàn Tom (Bài 2) hoàn toàn đồng đều — không có quả tom nào to hơn hay sớm hơn quả khác",
      "Tiếng Crash + Kick ở phách 1 xuyên suốt 4 ô nhịp điệp khúc giữ được âm lượng khổng lồ ổn định",
      "Cấu trúc 4 ô nhịp Arena (Verse → Tom Build → Chorus) tiếp đất hoàn hảo không bị nôn nóng"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp khúc ca sân vận động cơ bản (Basic Anthem Groove)",
        "tip": "Phách 1: Crash + Kick cực mạnh. Phách 2: Snare rimshot. Phách 3: Kick. Phách 4: Snare. Uy lực và đĩnh đạc."
      },
      {
        "title": "2 — Cú dồn dập dàn Tom (The Tom Build)",
        "tip": "Bốn nốt đen dồn trên dàn tom ở ô nhịp chuyển đoạn: <em>BÙM - BÙM - BÙM - BÙM</em> kéo cả sân vận động đứng dậy."
      },
      {
        "title": "3 — Điệp khúc: Crash ở mọi phách 1",
        "tip": "Mỗi khi bước sang ô nhịp mới, giáng một cú Crash cùng kick ở phách 1 để tái khẳng định năng lượng đỉnh cao."
      },
      {
        "title": "4 — Cấu trúc 4 ô nhịp Arena (Verse → Tom Build → Chorus)",
        "tip": "Trải nghiệm cảm giác của một ngôi sao nhạc Rock thực thụ đứng trên sân khấu hàng chục ngàn người."
      }
    ]
  },
  "rock-prog": {
    "tagline": "John Bonham, Bill Bruford, Neil Peart — bộ trống như một dàn nhạc giao hưởng",
    "bodyHtml": "<p>Progressive Rock (Prog Rock) là nơi nghệ thuật đánh trống vượt ra khỏi khuôn khổ của một người giữ nhịp thông thường để trở thành một <strong>nhà soạn nhạc thực thụ</strong>. Những tượng đài như John Bonham (Led Zeppelin), Neil Peart (Rush) và Bill Bruford (Yes, King Crimson) đã biến bộ trống thành một dàn nhạc giao hưởng thu nhỏ.</p><h2 class=\"section-label\">Từ vựng kỹ thuật đỉnh cao</h2><p>Prog Rock thách thức bạn với những cú kick liên ba nặng tựa núi non của Bonham, những câu snare bất đối xứng kỳ ảo của Bruford, và những câu fill được dàn dựng tỉ mỉ đến từng mili-giây của Neil Peart.</p>",
    "graduationCriteria": [
      "Rãnh nhịp kick liên ba phong cách Bonham (Bài 1) giữ vững ở ♩=85 suốt 2 phút không bị kéo rê chân",
      "Câu snare bất đối xứng của Bruford (snare ở 1.5 và 4.5) lặp lại mượt mà không bị phản xạ 2 và 4 hút về",
      "Câu fill dàn dựng kiểu Neil Peart di chuyển qua snare và 3 tom không bị dính nốt",
      "Sự kết hợp tay - chân (R-L trên snare, K-K trên kick) duy trì liên tục như một câu nhạc 4 phách"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Kick liên ba phong cách John Bonham",
        "tip": "Chân kick thực hiện các chùm liên ba sấm sét bên dưới rãnh nhịp rock nặng. Kỹ thuật chân phải huyền thoại của Bonzo."
      },
      {
        "title": "2 — Câu nhịp bất đối xứng phong cách Bill Bruford",
        "tip": "Đặt tiếng snare vào những vị trí kỳ lạ nhất: nốt lệch của 1 và nốt lệch của 4. Độc đáo và trí tuệ."
      },
      {
        "title": "3 — Câu Fill dàn dựng kinh điển kiểu Neil Peart",
        "tip": "Một câu fill được tính toán chuẩn xác như một phương trình toán học qua khắp dàn tom và cymbal."
      },
      {
        "title": "4 — Sự kết hợp Tay - Chân phong cách Carl Palmer",
        "tip": "Mẫu hình 4 nốt: Tay Phải → Tay Trái (snare) → Chân Kick → Chân Kick. Vòng xoay liên hoàn uy lực."
      }
    ]
  },
  "rock-odd-meter": {
    "tagline": "5/4, 7/8, 9/8 — khi nhạc Rock rời xa chiếc lồng 4/4",
    "bodyHtml": "<p>Hầu hết âm nhạc đại chúng giam mình trong chiếc hộp 4/4 an toàn. Nhưng các ban nhạc Rock vĩ đại — từ Pink Floyd (<em>Money</em> - 7/4), Rush (<em>Tom Sawyer</em> - 7/8) cho đến Tool và Soundgarden — luôn tìm kiếm sự tự do ở những <strong>số chỉ nhịp lẻ (Odd Meters)</strong>.</p><h2 class=\"section-label\">Gom nhóm nhịp điệu (Rhythmic Grouping)</h2><p>Bí quyết để chơi các nhịp lẻ mà không bị đếm nhầm là <strong>chia nhỏ chúng thành các nhóm 2 và 3 nốt</strong>:</p><ul class=\"bulleted\"><li><strong>5/4</strong> = 3 phách + 2 phách (hoặc 2 + 3)</li><li><strong>7/8</strong> = 2 + 2 + 3 nốt móc đơn (hai bước ngắn, một bước dài nhún nhảy)</li><li><strong>9/8</strong> = 2 + 2 + 2 + 3 nốt móc đơn</li></ul>",
    "graduationCriteria": [
      "Rãnh nhịp 5/4 (nhóm 3+2 kiểu 'Money') giữ vững ở ♩=100 suốt 2 phút không bị mất nhóm",
      "Rãnh nhịp 7/8 (2+2+3) phân biệt rõ ràng nhóm 3 nốt dài ở cuối với hai nhóm 2 nốt ngắn ở đầu",
      "Rãnh nhịp 9/8 (2+2+2+3) lặp lại ổn định mà không bị co cụm thành 8/8 hay 10/8",
      "Chuyển đổi nhịp đo (Metric modulation) giữa 4/4 và 5/4 diễn ra thanh thoát, không ngập ngừng"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp Rock 5/4 (Nhóm 3+2 kiểu bài 'Money')",
        "tip": "Đếm: <em>1-2-3 · 1-2</em>. Cảm nhận phách 1 dậm kick, phách 4 dằn snare. Rãnh nhịp kỳ lạ nhưng cuốn hút lạ kỳ."
      },
      {
        "title": "2 — Rãnh nhịp Rock 7/8 (Nhóm 2+2+3)",
        "tip": "Bảy nốt móc đơn gom thành: <em>Ngắn - Ngắn - Dài</em> (1-2 · 3-4 · 5-6-7). Nhóm 3 nốt ở cuối tạo cú nhún đặc trưng."
      },
      {
        "title": "3 — Rãnh nhịp Rock 9/8 (Nhóm 2+2+2+3)",
        "tip": "Chín nốt móc đơn: ba nhóm ngắn theo sau bởi một nhóm dài. Đếm to các đầu nhóm để không bị lạc."
      },
      {
        "title": "4 — Chuyển đổi nhịp đo: Ô nhịp 4/4 sang 5/4",
        "tip": "Tập chuyển đổi qua lại giữa ô nhịp chẵn 4 phách và ô nhịp lẻ 5 phách. Khả năng thích ứng của các tay trống đẳng cấp."
      }
    ]
  },
  "rock-hybrid-grooves": {
    "tagline": "Rock vay mượn từ Funk, Jazz và Latin",
    "bodyHtml": "<p>Nhạc Rock thuần túy vốn mạnh mẽ và trực diện. Nhưng khi các tay trống rock bắt đầu đưa những yếu tố của <strong>Funk (ghost notes vi mô), Jazz (dòng chảy ride mềm mại) và Latin (tiết tấu clave nhảy múa)</strong> vào bộ khung rock, họ tạo ra những rãnh nhịp lai (Hybrid Grooves) có sức sống mãnh liệt và vẻ đẹp mê hoặc lòng người.</p><h2 class=\"section-label\">Sự kết hợp đa văn hóa</h2><p>Hãy nghĩ đến John Bonham trong bài <em>Fool in the Rain</em> (Rock kết hợp Samba), Chad Smith của Red Hot Chili Peppers (Rock kết hợp Funk), hay Stewart Copeland của The Police (Rock kết hợp Reggae). Đó là những rãnh nhịp vừa có sức công phá của rock, vừa có độ dẻo dai quyến rũ của các dòng nhạc màu sắc.</p>",
    "graduationCriteria": [
      "Rãnh nhịp lai Rock-Funk (backbeat rock + ghost notes móc kép) giữ vững ở ♩=95",
      "Rãnh nhịp lai Rock-Jazz (lá ride jazz với cú backbeat rock mạnh) không bị cứng tay",
      "Rãnh nhịp lai Rock-Latin (tiết tấu Clave trên cross-stick + kick rock) lặp lại mượt mà",
      "Cấu trúc 4 ô nhịp kết hợp cả ba sắc thái chuyển đoạn gãy gọn trên từng vạch nhịp"
    ],
    "exercises": [
      {
        "title": "1 — Rãnh nhịp lai Rock-Funk",
        "tip": "Khung nhịp backbeat rock chắc nịch được thêu dệt bằng vô số nốt ghost note thì thầm trên snare. Vừa bốc lửa vừa nhún nhảy."
      },
      {
        "title": "2 — Rãnh nhịp lai Rock-Jazz",
        "tip": "Tay phải chơi tiết tấu swing dập dềnh trên lá Ride, nhưng tay trái giáng cú Rimshot backbeat thẳng thắn của rock ở phách 2 và 4."
      },
      {
        "title": "3 — Rãnh nhịp lai Rock-Latin (Son Clave + Kick Rock)",
        "tip": "Tay trái gõ tiết tấu Clave 3-2 bằng kỹ thuật cross-stick trên vành snare trong khi chân phải dậm kick rock uy lực."
      },
      {
        "title": "4 — Câu nhạc 4 ô nhịp kết hợp cả ba phong cách",
        "tip": "Hòa quyện Funk, Jazz và Latin vào một tác phẩm hoàn chỉnh. Đỉnh cao của sự sáng tạo phong cách cá nhân."
      }
    ]
  },
  "rock-studio-polish": {
    "tagline": "Móc kép sắc bén, kỷ luật bám click tuyệt đối, và nghệ thuật biết khi nào nên lược bỏ nốt",
    "bodyHtml": "<p>Trong phòng thu chuyên nghiệp, một chiếc micro thu âm nhạy bén sẽ soi từng mili-giây trong tiếng đánh của bạn dưới kính hiển vi. Tại đây, tiêu chuẩn không phải là chơi được bao nhiêu nốt — mà là <strong>từng nốt đánh ra phải chuẩn xác, sạch sẽ và nằm khóa chặt vào lưới thời gian (the grid)</strong>.</p><h2 class=\"section-label\">Nghệ thuật lược bỏ (The Art of Subtraction)</h2><p>Các nhà sản xuất âm nhạc huyền thoại thường nói với tay trống: <em>\"Đoạn này hãy bỏ bớt một nửa số nốt bạn vừa đánh đi\"</em>. Khi bạn can đảm lược bỏ những nốt thừa thãi, bài hát sẽ có không gian để thở, giọng hát sẽ tỏa sáng, và những nốt còn lại của bạn sẽ mang sức nặng ngàn vàng.</p>",
    "graduationCriteria": [
      "Backbeat cơ bản ở ♩=100 bám chặt máy đếm nhịp suốt 16 ô nhịp không có sai số nghe thấy được (được ghi âm và kiểm chứng)",
      "Nhận diện được ô nhịp nào là 'cố tình để trống' bên trong cấu trúc 4 ô nhịp ngay lần nghe đầu tiên",
      "Mô phỏng cấu trúc 16 ô nhịp (Verse → Chorus → Verse → Chorus) tiếp đất hoàn hảo ở mọi điểm chuyển đoạn",
      "Chứng minh khả năng lược bỏ có thể đo lường được — phiên bản 2 ít nốt hơn phiên bản 1 nhưng bài hát vẫn nguyên vẹn sức hút"
    ],
    "exercises": [
      {
        "title": "1 — Nhịp Backbeat 'Hoàn hảo' suốt 16 ô nhịp (Bài kiểm tra phòng thu)",
        "tip": "Đeo tai nghe, bật click ở ♩=100. Giữ đúng một rãnh nhịp duy nhất suốt 16 ô nhịp với độ chính xác cơ học tuyệt đối."
      },
      {
        "title": "2 — Nghệ thuật lược bỏ: Câu nhạc 4 ô nhịp có một ô nhịp tĩnh lặng",
        "tip": "Ô nhịp thứ 3 hoàn toàn giữ yên lặng không đánh nốt nào. Cảm nhận sức mạnh của khoảng lặng trước khi quay lại."
      },
      {
        "title": "3 — Mô phỏng cấu trúc bài hát 16 ô nhịp (Verse → Chorus × 2)",
        "tip": "Thực hiện trọn vẹn quy trình phòng thu: kiểm soát âm lượng, chuyển đoạn sạch sẽ, không một cử động thừa."
      }
    ]
  },
  "rock-dynamics": {
    "tagline": "Verse pp, Chorus mf, Bridge ff — đánh trống theo cấu trúc hòa âm phối khí",
    "bodyHtml": "<p>Một bài hát là một hành trình cảm xúc có núi cao, có thung lũng, có bão tố và có nắng ấm. Người chơi trống là người thuyền trưởng lèo lái con tàu cảm xúc đó bằng <strong>sức mạnh của sắc thái cường độ (Dynamics)</strong>.</p><h2 class=\"section-label\">Vẽ nên bức tranh âm nhạc</h2><p>Nếu bạn chơi từ đầu đến cuối bài hát ở cùng một mức âm lượng ầm ĩ (Forte), người nghe sẽ bị mệt mỏi và điệp khúc sẽ không còn chút sức nặng nào. Nhưng nếu bạn biết cách hạ âm lượng xuống thật nhỏ (Pianissimo) ở đoạn Verse, người nghe sẽ phải lắng tai lại — và khi bạn bùng nổ sang Fortissimo ở đoạn Bridge, cả khán phòng sẽ vỡ òa cảm xúc.</p>",
    "graduationCriteria": [
      "Tám ô nhịp ở mức pp giữ ổn định âm lượng nhỏ — không có cú đánh nào bị lỡ tay chạm mức mf",
      "Chiếc thang cường độ (ppp → fff qua 8 ô nhịp) thể hiện rõ ràng 6 mức âm lượng phân biệt bằng tai",
      "Đoạn chuyển Verse - Chorus đưa đoạn Chorus lên mức âm lượng cao hơn rõ rệt ngay đúng phách 1",
      "Đoạn 'Build' dồn dập dẫn vào Bridge đạt mức ff chính xác ở phách 1 của Bridge, không sớm hơn, không muộn hơn"
    ],
    "exercises": [
      {
        "title": "1 — Tám ô nhịp ở mức Pianissimo (pp)",
        "tip": "Chơi rãnh nhịp rock thật nhỏ, thật êm ái nhưng vẫn giữ trọn vẹn độ nảy và sự tự tin. Dùi chỉ cách mặt trống vài cm."
      },
      {
        "title": "2 — Chiếc thang sắc thái: ppp → fff",
        "tip": "Tám ô nhịp leo dần đều qua 6 cấp độ âm lượng: <em>ppp → pp → p → mf → f → ff</em>. Kiểm soát độ cao dùi tăng dần từng centimet."
      },
      {
        "title": "3 — Cấu trúc tương phản Verse - Chorus (8 ô Verse + 8 ô Chorus)",
        "tip": "Verse chơi êm ái ở mức p, Chorus bùng nổ rimshot ở mức f. Ranh giới rực rỡ phân định giữa hai thế giới."
      },
      {
        "title": "4 — Cú dồn dập xây dựng dẫn vào Bridge (Crescendo 8 ô nhịp vào ff)",
        "tip": "Tích lũy năng lượng từ xa xăm, cuộn trào như cơn sóng thần và vỗ bờ sấm sét ở mức ff đúng phách 1 của Bridge."
      }
    ]
  }
};

const targetPath = path.join(__dirname, '../src/_data/i18n/vi/lessons/rock.json');
fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully wrote', Object.keys(data).length, 'rock lessons to', targetPath);
