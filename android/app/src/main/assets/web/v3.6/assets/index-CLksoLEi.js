(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ie={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE",LIGHTING_SHADOW:"LIGHTING_SHADOW",LIGHTING_HIGHLIGHT:"LIGHTING_HIGHLIGHT",LIGHTING_DYNAMICRANGE:"LIGHTING_DYNAMICRANGE",CONTRAST_NATURAL:"CONTRAST_NATURAL",COLOR_NATURALTONE:"COLOR_NATURALTONE",COLOR_BALANCE:"COLOR_BALANCE",DETAIL_PRESERVATION:"DETAIL_PRESERVATION",TEXTURE_PRESERVATION:"TEXTURE_PRESERVATION",NATURAL_PROCESSING:"NATURAL_PROCESSING",PERSPECTIVE_CORRECTION:"PERSPECTIVE_CORRECTION",LENS_CORRECTION:"LENS_CORRECTION",COMPOSITION_BALANCE:"COMPOSITION_BALANCE",IMAGE_HIGHDETAIL:"IMAGE_HIGHDETAIL"},xa={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},Fa=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]},{code:"/shadowrecovery",name:"Shadow Recovery & Black Level Lifting",category:"LIGHTING",target:"SHADOW_LIGHTING",description:"Mengangkat dan memulihkan detail bayangan yang terlalu gelap tanpa menimbulkan noise atau mencuci kontras.",semanticTriggers:["shadow recovery","shadow terlalu gelap","pulihkan bayangan","angkat bayangan gelap","recover shadows","dark shadows","bayangan terlalu pekat"],negativeTriggers:["bayangan pekat","gelapkan bayangan","crushed blacks"],conflicts:[],compatibleWith:["/highlightcontrol","/dynamicrange","/naturalcontrast","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika area bayangan pada subjek, pepohonan, atau latar belakang terlalu gelap sehingga kehilangan detail.",whenNotToUse:"Jangan gunakan jika kontras bayangan pekat sengaja diinginkan untuk gaya dramatis (chiaroscuro).",functionGroup:"LIGHTING_SHADOW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/liftshadows"],relationships:[{code:"/highlightcontrol",relationType:"COMPATIBLE",reason:"Sering dipadukan untuk menyeimbangkan rentang dinamis keseluruhan."}]},{code:"/highlightcontrol",name:"Highlight Control & Rolloff",category:"LIGHTING",target:"HIGHLIGHT_LIGHTING",description:"Mengendalikan area terang yang over-exposed atau blown-out agar detail tekstur cahaya tetap terjaga dengan gradasi halus.",semanticTriggers:["highlight control","highlight perlu dikendalikan","highlight terlalu terang","kendalikan highlight","kurangi overexposed","highlight recovery","blown highlights"],negativeTriggers:["tingkatkan highlight","blow out"],conflicts:[],compatibleWith:["/shadowrecovery","/dynamicrange","/naturalcontrast"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika langit, awan, atau pantulan cahaya terlalu terang hingga kehilangan detail tekstur.",whenNotToUse:"Jangan gunakan jika efek siluet atau flare cahaya terang sengaja diinginkan.",functionGroup:"LIGHTING_HIGHLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/highlightrolloff"],relationships:[{code:"/shadowrecovery",relationType:"COMPATIBLE",reason:"Bekerja bersama pemulihan shadow untuk menghasilkan eksposur seimbang."}]},{code:"/dynamicrange",name:"Dynamic Range Balancing",category:"LIGHTING",target:"DYNAMIC_RANGE",description:"Menyeimbangkan rentang dinamis antara area tergelap dan terang secara simultan untuk eksposur alami tanpa artefak HDR berlebihan.",semanticTriggers:["dynamic range","dynamic range perlu diseimbangkan","seimbangkan dynamic range","rentang dinamis seimbang","balance dynamic range","dynamic range expansion"],negativeTriggers:["kontras ekstrem"],conflicts:[],compatibleWith:["/shadowrecovery","/highlightcontrol","/naturaltone"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat foto memiliki perbedaan pencahayaan ekstrem antara area bayangan dan area terang.",whenNotToUse:"Jangan gunakan jika kontras siluet tinggi atau moody low-key lighting diinginkan.",functionGroup:"LIGHTING_DYNAMICRANGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balanceddynamicrange"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Rentang dinamis yang seimbang menjaga tone warna tetap autentik."}]},{code:"/naturalcontrast",name:"Natural Contrast Balancing",category:"IMAGE_QUALITY",target:"IMAGE_CONTRAST",description:"Menyesuaikan kurva kontras secara alami dan bertahap tanpa membuat warna jenuh berlebihan atau merusak tonal gradation.",semanticTriggers:["natural contrast","kontras alami","seimbangkan kontras","kontras terlalu tajam","kontras pudar","balanced contrast"],negativeTriggers:["kontras ekstrem","hyper contrast"],conflicts:[],compatibleWith:["/naturaltone","/detailpreservation","/colorbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika kontras gambar tampak terlalu keras atau sebaliknya terlihat washed-out/pudar.",whenNotToUse:"Jangan gunakan bila kontras gambar sudah natural dan seimbang.",functionGroup:"CONTRAST_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balancedcontrast"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Kontras alami menjaga nuansa warna tetap seimbang."}]},{code:"/naturaltone",name:"Natural Tonal Range & Skin Tone",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menjaga palet warna dan tonal range tetap natural, hangat, dan autentik sesuai persepsi mata manusia.",semanticTriggers:["natural tone","warna perlu dibuat lebih natural","warna lebih natural","tonal range alami","natural color","warna alami","natural skin tone"],negativeTriggers:["neon","warna over-saturated","fluorescent"],conflicts:["/cyberpunk"],compatibleWith:["/colorbalance","/texturepreservation","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk mengembalikan karakter warna asli lanskap, vegetasi, atau warna kulit subjek.",whenNotToUse:"Jangan gunakan jika grading warna stilistik ekstrem (seperti cyberpunk neon atau monochrome) ditargetkan.",functionGroup:"COLOR_NATURALTONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturaltonal"],relationships:[{code:"/colorbalance",relationType:"DIRECTLY_RELATED",reason:"Keseimbangan warna yang tepat menghasilkan tone alami."}]},{code:"/colorbalance",name:"Color Balance & White Balance Correction",category:"COLOR_TONE",target:"COLOR_BALANCE",description:"Mengoreksi tint dan temperatur warna yang menyimpang (color cast) agar titik netral putih dan abu-abu akurat.",semanticTriggers:["color balance","color balance perlu diperbaiki","koreksi white balance","keseimbangan warna","perbaiki warna","white balance correction","remove color cast"],negativeTriggers:[],conflicts:[],compatibleWith:["/naturaltone","/naturalcontrast","/rawphoto"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar memiliki color cast (misalnya terlalu kuning/hijau/kebiruan) yang tidak diinginkan.",whenNotToUse:"Jangan gunakan jika nuansa warna hangat matahari senja atau cahaya buatan bernuansa sengaja dipertahankan.",functionGroup:"COLOR_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/whitebalance"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"White balance yang netral mendukung pembentukan tone alami."}]},{code:"/detailpreservation",name:"Original Detail Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_DETAIL",description:"Mempertahankan detail mikro arsitektur, dedaunan, permukaan benda, dan elemen halus asli agar tidak terhapus selama proses penyempurnaan.",semanticTriggers:["detail preservation","detail asli perlu dipertahankan","pertahankan detail asli","keep original detail","preserve details","jangan hilangkan detail"],negativeTriggers:["blur","hapus detail"],conflicts:[],compatibleWith:["/texturepreservation","/naturalprocessing","/highdetail"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar sudah memiliki detail halus yang bernilai tinggi dan harus dilindungi dari over-smoothing.",whenNotToUse:"Jangan gunakan jika detail gambar rusak parah dan membutuhkan rekonstruksi ulang secara total.",functionGroup:"DETAIL_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservedetails"],relationships:[{code:"/texturepreservation",relationType:"DIRECTLY_RELATED",reason:"Preservasi detail bekerja berdampingan dengan penjagaan tekstur asli."}]},{code:"/texturepreservation",name:"Authentic Texture Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_TEXTURE",description:"Mencegah efek 'plastik' atau over-denoise dengan menjaga tekstur organik kulit, kain, kayu, batu, dan dedaunan tetap autentik.",semanticTriggers:["texture preservation","tekstur asli perlu dipertahankan","pertahankan tekstur asli","keep original texture","preserve texture","tekstur autentik"],negativeTriggers:["plastik","airbrushed"],conflicts:[],compatibleWith:["/detailpreservation","/rawphoto","/naturalprocessing"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tekstur permukaan benda dan kulit tampak nyata tanpa distorsi perataan buatan.",whenNotToUse:"Jangan gunakan jika efek grafis flat 2D atau render kartun halus diinginkan.",functionGroup:"TEXTURE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservetexture"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor mentah menjaga kejernihan mikrotekstur permukaan."}]},{code:"/naturalprocessing",name:"Natural Processing & Anti-Artifacts",category:"IMAGE_QUALITY",target:"PROCESSING_ARTIFACTS",description:"Memastikan hasil visual bebas dari haloing tepian, artifak kompresi, posterisasi warna, dan efek over-processed.",semanticTriggers:["natural processing","pemrosesan alami","tanpa artifak ai","bebas artifak pemrosesan","clean processing","anti artifacts","no haloing"],negativeTriggers:["over processed"],conflicts:[],compatibleWith:["/rawphoto","/detailpreservation","/texturepreservation"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga standar output tetap bersih dari artefak digital yang merusak kualitas fotografi.",whenNotToUse:"Jangan gunakan jika efek distorsi glitch atau seni digital disengaja.",functionGroup:"NATURAL_PROCESSING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cleanrender"],relationships:[{code:"/detailpreservation",relationType:"COMPATIBLE",reason:"Pemrosesan alami menjaga integritas detail asli."}]},{code:"/perspectivecorrection",name:"Perspective & Vertical Alignment Correction",category:"CAMERA_PHOTO",target:"PERSPECTIVE",description:"Mengoreksi distorsi keystone dan garis vertikal bangunan/ruangan yang miring agar tampak proporsional dan sejajar.",semanticTriggers:["perspective correction","koreksi perspektif","perbaiki sudut kemiringan","luruskan perspektif","keystone correction","garis miring"],negativeTriggers:[],conflicts:[],compatibleWith:["/lenscorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto arsitektur atau pemandangan dengan garis vertikal yang tampak condong atau miring secara tidak sengaja.",whenNotToUse:"Jangan gunakan jika sudut miring (Dutch angle) memang disengaja untuk alasan dramatisasi visual.",functionGroup:"PERSPECTIVE_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/keystonecorrection"],relationships:[{code:"/lenscorrection",relationType:"COMPATIBLE",reason:"Koreksi perspektif dan koreksi lensa saling melengkapi dalam merapikan geometri gambar."}]},{code:"/lenscorrection",name:"Lens Distortion & Vignette Correction",category:"CAMERA_PHOTO",target:"LENS_OPTICS",description:"Menghilangkan distorsi barrel/pincushion dan vignetting gelap pada sudut tepian lensa kamera.",semanticTriggers:["lens correction","koreksi distorsi lensa","hilangkan vignetting","perbaiki distorsi lensa","lens distortion correction","distorsi barrel"],negativeTriggers:[],conflicts:[],compatibleWith:["/perspectivecorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat optik lensa menghasilkan distorsi cembung atau tepian gambar menggelap secara tidak merata.",whenNotToUse:"Jangan gunakan jika efek lensa fish-eye atau vignette retro sengaja diinginkan.",functionGroup:"LENS_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/distortioncorrection"],relationships:[{code:"/perspectivecorrection",relationType:"COMPATIBLE",reason:"Membantu meluruskan batas-batas geometri foto."}]},{code:"/compositionbalance",name:"Composition & Framing Balance",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Menata ulang keseimbangan bobot visual, ruang negatif (negative space), dan penempatan elemen dalam bidang framing.",semanticTriggers:["composition balance","keseimbangan komposisi","seimbangkan framing","komposisi seimbang","balance composition","penataan framing"],negativeTriggers:[],conflicts:[],compatibleWith:["/ruleofthirds","/perspectivecorrection"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat tata letak visual terasa berat sebelah atau framing memotong elemen penting secara canggung.",whenNotToUse:"Jangan gunakan jika komposisi foto sudah seimbang dan proporsional.",functionGroup:"COMPOSITION_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/framingbalance"],relationships:[{code:"/ruleofthirds",relationType:"COMPATIBLE",reason:"Aturan sepertiga adalah salah satu kaidah utama untuk mencapai keseimbangan komposisi."}]},{code:"/highdetail",name:"High Fidelity Micro-Detail",category:"IMAGE_QUALITY",target:"IMAGE_DETAIL",description:"Meningkatkan kejernihan mikrotekstur dan ketajaman detail halus pada seluruh permukaan foto secara koheren.",semanticTriggers:["high detail","detail tinggi","mikro detail tajam","tingkatkan detail","high fidelity detail","detail jernih"],negativeTriggers:["blur","halus berlebih"],conflicts:[],compatibleWith:["/detailpreservation","/sharpen","/highresolution"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat elemen visual memerlukan peningkatan resolusi mikrotekstur tanpa menambahkan noise.",whenNotToUse:"Jangan gunakan jika gambar ditujukan untuk gaya lembut bertekstur minim.",functionGroup:"IMAGE_HIGHDETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/microdetail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Ketajaman mikrokontras mendukung tampilan detail tinggi."}]}];function _a(u,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),i=u.code.toLowerCase(),r=u.name.toLowerCase(),s=u.target.toLowerCase(),n=u.category.toLowerCase(),t=u.description.toLowerCase();if(i===e||i===`/${e}`)return 100;if(i.includes(e))return 75;if(u.semanticTriggers&&u.semanticTriggers.some(h=>h.toLowerCase()===e))return 95;if(u.negativeTriggers)for(const h of u.negativeTriggers){const l=h.toLowerCase(),b=e.indexOf(l);if(b!==-1){const g=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(l),m=e.slice(0,b).trim(),d=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(m);if(g||!d)return-50}}if(u.semanticTriggers)for(const h of u.semanticTriggers){const l=h.toLowerCase(),b=e.indexOf(l);if(b!==-1){const g=e.slice(0,b).trim(),m=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(g),d=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(l);if(!m||d)return 85}else if(l.includes(e))return 80}const o=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),c=e.split(/\s+/).filter(h=>h.length>2&&!o.has(h));let p=0;for(const h of u.semanticTriggers||[]){const l=h.toLowerCase();if(c.length>0&&c.every(m=>l.includes(m)))return 75;const g=c.filter(m=>l.includes(m)).length;g>p&&(p=g)}return p>1?40+p*5:r.includes(e)?50:s.includes(e)||n.includes(e)?40:t.includes(e)?30:0}function re(u,{category:a="ALL",target:e="ALL",recommendationLevel:i="ALL",searchQuery:r=""}={}){const s=u.filter(n=>!(a!=="ALL"&&n.category!==a||e!=="ALL"&&n.target!==e||i!=="ALL"&&n.recommendationLevel!==i));if(r&&r.trim()){const n=[];for(const t of s){const o=_a(t,r);o>0&&n.push({item:t,score:o})}return n.sort((t,o)=>o.score-t.score),n.map(t=>t.item)}return s}const se="psa_v2_catalog_db",oe=1,fa="user_shorthands";class le{constructor(a=Fa){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((e,i)=>{const r=window.indexedDB.open(se,oe);r.onupgradeneeded=s=>{const n=s.target.result;n.objectStoreNames.contains(fa)||n.createObjectStore(fa,{keyPath:"code"})},r.onsuccess=s=>e(s.target.result),r.onerror=s=>i(s.target.error)}),await this.loadFromIndexedDB()}catch(e){console.warn("IndexedDB unavailable, using memory fallback:",e)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,i)=>{const n=this.db.transaction([fa],"readonly").objectStore(fa).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>i(n.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const i of this.userCatalog.values()){const r=e.findIndex(s=>s.code===i.code);r!==-1?e[r]={...e[r],...i}:e.push(i)}return a?e:e.filter(i=>i.status!=="DISABLED")}searchShorthands(a,e={}){const i=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return i;const r=a.toLowerCase().trim(),s=[];for(const n of i){let t=_a(n,r);n.functionGroup&&n.functionGroup.toLowerCase().includes(r)&&(t=Math.max(t,60)),n.equivalentTo&&n.equivalentTo.some(o=>o.toLowerCase().includes(r))&&(t=Math.max(t,70)),n.relationships&&n.relationships.some(o=>{var c,p;return((c=o.code)==null?void 0:c.toLowerCase().includes(r))||((p=o.relationType)==null?void 0:p.toLowerCase().includes(r))})&&(t=Math.max(t,45)),t>0&&s.push({item:n,score:t})}return s.sort((n,t)=>t.score-n.score),s.map(n=>n.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(i=>i.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(i=>i.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(i=>i.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const i=this.getAll().find(r=>r.code===a||r.target===a);return!i||!i.relationships?[]:i.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),i=e.find(s=>s.code.toLowerCase()===a.code.toLowerCase());if(i)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:i,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const s=e.find(n=>n.functionGroup===a.functionGroup);if(s)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:s,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${s.code}).`}}const r=e.find(s=>s.equivalentTo&&s.equivalentTo.some(n=>n.toLowerCase()===a.code.toLowerCase()));return r?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:r,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${r.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((i,r)=>{const t=this.db.transaction([fa],"readwrite").objectStore(fa).put(e);t.onsuccess=()=>i(),t.onerror=()=>r(t.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(i=>i.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((i,r)=>{const t=this.db.transaction([fa],"readwrite").objectStore(fa).delete(a);t.onsuccess=()=>i(),t.onerror=()=>r(t.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:i,geminiKey:r,secret:s,password:n,...t}=e;return t});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let i=null;if(typeof a=="string")try{i=JSON.parse(a)}catch(n){throw new Error("Format JSON impor tidak valid: "+n.message)}else i=a;const r=Array.isArray(i)?i:i.entries||[];if(!Array.isArray(r))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((n,t)=>{const p=this.db.transaction([fa],"readwrite").objectStore(fa).clear();p.onsuccess=()=>n(),p.onerror=()=>t(p.error)}));let s=0;for(const n of r){if(!n||!n.code||this.coreCatalog.some(b=>b.code===n.code)&&e==="MERGE")continue;const{apiKey:o,geminiKey:c,secret:p,password:h,...l}=n;await this.add({...l,status:l.status||"APPROVED",source:l.source||"USER"}),s++}return{success:!0,count:s,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const s=this.db.transaction([fa],"readwrite").objectStore(fa).clear();s.onsuccess=()=>a(),s.onerror=()=>e(s.error)}),!0}}const Ta={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},V={getApiKey(){try{return localStorage.getItem(Ta.GEMINI_API_KEY)||""}catch{return""}},setApiKey(u){try{return u?localStorage.setItem(Ta.GEMINI_API_KEY,u.trim()):localStorage.removeItem(Ta.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(Ta.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{const u=(localStorage.getItem(Ta.GEMINI_MODEL)||"gemini-2.0-flash").trim().replace(/^models\//,"");return u.includes("1.5-pro")||u.includes("3.5")&&u!=="gemini-3.5-flash-lite"||u.includes("3.8")||u.includes("2.5-pro")?(localStorage.setItem(Ta.GEMINI_MODEL,"gemini-2.0-flash"),"gemini-2.0-flash"):u}catch{return"gemini-2.0-flash"}},setModel(u){try{const a=(u||"gemini-2.0-flash").trim().replace(/^models\//,"");return localStorage.setItem(Ta.GEMINI_MODEL,a),!0}catch{return!1}},getCustomCatalog(){try{const u=localStorage.getItem(Ta.CUSTOM_CATALOG);return u?JSON.parse(u):[]}catch{return[]}},saveCustomCatalog(u){try{return localStorage.setItem(Ta.CUSTOM_CATALOG,JSON.stringify(u)),!0}catch{return!1}},getUiPreferences(){try{const u=localStorage.getItem(Ta.UI_PREFS);return u?JSON.parse(u):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(u){try{return localStorage.setItem(Ta.UI_PREFS,JSON.stringify(u)),!0}catch{return!1}}};class de{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,i)=>i.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const i=this.patches.get(a);return i?(i.enabled=!!e,!0):!1}safeExecuteHook(a,e,i={}){let r=e;const s=this.getActivePatches(a);for(const n of s)try{const t=n.hooks[a];if(typeof t=="function"){const o=t(r,i);o!==void 0&&(r=o)}}catch(t){console.warn(`[PatchManager] Peringatan: Patch "${n.id}" pada hook "${a}" gagal dieksekusi:`,t),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:n.id,hookName:a,error:t.message,stack:t.stack})}return r}async safeExecuteHookAsync(a,e,i={}){let r=e;const s=this.getActivePatches(a);for(const n of s)try{const t=n.hooks[a];if(typeof t=="function"){const o=await t(r,i);o!==void 0&&(r=o)}}catch(t){console.warn(`[PatchManager] Peringatan: Async Patch "${n.id}" pada hook "${a}" gagal:`,t),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:n.id,hookName:a,error:t.message})}return r}}const Ya=new de,ce={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(u,a){return u&&{...u,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},ue={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(u){return u&&{...u,kamusStatus:{available:!0,version:"3.1.0"}}}}};Ya.registerPatch(ce);Ya.registerPatch(ue);class ge{constructor(a=Fa,e=Ya){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const i=this.normalize(a),r=this.extractExistingShorthands(a),s=this.stripShorthands(a),n=this.analyzeIntent(s),{editAreas:t,lockedAreas:o,unchangedAreas:c}=this.extractAreas(s,n),p=this.queryPrimaryShorthands(s,t,o,n),h=this.deduplicateByFunctionGroup(p).map(O=>({...O,isPrimary:!0,checked:!0,priority:"WAJIB"})),l=this.discoverRelatedShorthands(s,h,t,o),b=[...h,...l],g=this.detectConflicts(t,o,h,r),m=this.evaluateExclusions(b,h);let d=[];if(e&&Array.isArray(e))d=[...e];else{const O=h.sort((C,I)=>(C.promptIndex??999)-(I.promptIndex??999)).map(C=>C.code),A=new Set([...r,...O]);d=Array.from(A)}for(const O of b)O.checked=d.includes(O.code),O.active=O.checked;const k=this.generateVisualTransformation(t,o,s),f=this.buildOptimalPrompt(s,d),R={rawPrompt:a,normalizedPrompt:i,cleanText:s,intent:n,editAreas:t,lockedAreas:o,unchangedAreas:c,conflicts:g,primaryShorthands:h,relatedShorthands:l,recommendations:b,exclusions:m,installedShorthands:d,visualTransformation:k,optimalPrompt:f,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",R,{engine:this,patchManager:this.patchManager,rawPrompt:a}):R}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,i=[];let r;for(;(r=e.exec(a))!==null;)i.push(r[0]);return Array.from(new Set(i))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let i="MODIFIKASI_VISUAL",r="Gambar",s="Memproses instruksi visual pada gambar.",n="MEDIUM",t="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(i="PENINGKATAN_PENCAHAYAAN",r="Pencahayaan & Tata Cahaya",s="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",n="HIGH",t="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(i="PELEPASAN_PENUTUP_KEPALA",r="Hijab / Penutup Kepala",s="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",n="HIGH",t="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(i="PENGGANTIAN_BUSANA",r="Pakaian & Outfit",s="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",n="HIGH",t="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(i="PENAJAMAN_DETAIL",r="Mikrokontras & Detail",s="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",n="HIGH",t="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(i="PENGHAPUSAN_LATAR",r="Latar Belakang / Background",s="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",n="CRITICAL",t="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(i="PENGGANTIAN_LATAR",r="Latar Belakang / Background",s="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",n="HIGH",t="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(i="PENYESUAIAN_RASIO_KANVAS",r="Kanvas & Dimensi",s="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",n="HIGH",t="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(i="MODIFIKASI_RAMBUT",r="Rambut & Gaya Rambut",s="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",n="HIGH",t="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(i="MODIFIKASI_BENTUK_TUBUH",r="Bentuk Tubuh & Proporsi Lekuk",s="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",n="HIGH",t="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(i="PENYEMPURNAAN_ANATOMI_TANGAN",r="Tangan & Jari Subjek",s="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",n="HIGH",t="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(i="PENINGKATAN_RESOLUSI",r="Resolusi & Detail Gambar",s="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",n="HIGH",t="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(i="PERLUASAN_KANVAS_OUTPAINT",r="Bidang & Batas Kanvas Foto",s="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",n="HIGH",t="CANVAS_RATIO"),{primaryAction:i,primaryTarget:r,summary:s,priority:n,category:t}}extractAreas(a,e){const i=a.toLowerCase(),r=[],s=[],n=new Set,t=v=>{for(const S of v){if(!i.includes(S))continue;if([`jangan ubah ${S}`,`jangan ganti ${S}`,`jangan sentuh ${S}`,`jangan mengubah ${S}`,`pertahankan ${S}`,`kunci ${S}`,`jaga ${S}`,`${S} asli`,`${S} tetap`,`${S} sama`,`${S} harus tetap sama`,`keep ${S}`,`same ${S}`,`preserve ${S}`].some(T=>i.includes(T)))return!0}return!1},o=v=>{for(const S of v){if(!i.includes(S))continue;if([`ubah ${S}`,`ganti ${S}`,`hapus ${S}`,`hilangkan ${S}`,`perbaiki ${S}`,`tingkatkan ${S}`,`buat ${S}`,`lepas ${S}`,`lepaskan ${S}`,`buka ${S}`,`change ${S}`,`remove ${S}`].some(T=>i.includes(T))||S==="pencahayaan"&&(i.includes("perbaiki pencahayaan")||i.includes("lighting")||i.includes("terangkan"))||S==="hijab"&&(i.includes("hapus hijab")||i.includes("lepas hijab")||i.includes("lepaskan hijab")||i.includes("tanpa hijab"))||S==="baju"&&(i.includes("tanktop")||i.includes("kemeja")||i.includes("gaun")||i.includes("jaket"))||S==="rasio"&&(i.includes("9:16")||i.includes("16:9")||i.includes("1:1")||i.includes("4:5"))||S==="latar"&&(i.includes("latar baru")||i.includes("gunakan latar baru")||i.includes("hapus latar")))return!0}return!1},c=["wajah","muka","face","identitas","paras"];c.some(v=>i.includes(v))&&(n.add("FACE"),t(c)?s.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):o(c)&&r.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:i.includes("ganti wajah")?"/facechange":"/faceedit"}));const p=["hijab","kerudung","jilbab","penutup kepala","topi"];p.some(v=>i.includes(v))&&(n.add("HEADWEAR"),t(p)?s.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):r.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const h=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(h.some(v=>i.includes(v)))if(n.add("OUTFIT"),t(h))s.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let v="Pakaian subjek";i.includes("tanktop putih tali tipis")?v="Tanktop putih tali tipis":i.includes("tanktop")?v="Tanktop":i.includes("gaun")?v="Gaun":i.includes("kemeja")&&(v="Kemeja"),r.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${v}.`,shorthand:"/outfit"})}const l=["latar","background","backdrop","lingkungan"];if(l.some(v=>i.includes(v))&&(n.add("BACKGROUND"),t(l)?s.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):i.includes("hapus")||i.includes("transparan")||i.includes("hilangkan")||i.includes("buang")?r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(i.includes("ganti")||i.includes("ubah")||i.includes("baru")||i.includes("gunakan latar baru")||i.includes("studio"))&&r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(i.includes("pencahayaan")||i.includes("lighting")||i.includes("terangkan")||i.includes("cahaya"))&&(n.add("LIGHTING"),r.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(v=>i.includes(v))?(n.add("IMAGE_QUALITY"),r.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(i.includes("tajam")||i.includes("sharpen")||i.includes("perjelas")||i.includes("detail")||i.includes("ketajaman"))&&(n.add("IMAGE_QUALITY"),r.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),i.includes("rasio")||i.includes("9:16")||i.includes("16:9")||i.includes("1:1")||i.includes("4:5")||i.includes("format")){n.add("CANVAS_RATIO");let v="Rasio baru",S="/ar 9:16";i.includes("9:16")?(v="9:16 (Vertical)",S="/ar 9:16"):i.includes("16:9")?(v="16:9 (Landscape)",S="/ar 16:9"):i.includes("1:1")?(v="1:1 (Persegi)",S="/ar 1:1"):i.includes("4:5")&&(v="4:5 (Portrait)",S="/ar 4:5"),r.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${v}.`,shorthand:S})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(v=>i.includes(v))&&(n.add("CANVAS_RATIO"),r.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(i.includes("full body")||i.includes("seluruh tubuh")||i.includes("badan penuh"))&&(n.add("BODY_POSE"),r.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const d=["rambut","hair","botak","cukur"];if(d.some(v=>i.includes(v))){n.add("HAIR");const v=t(d),S=o(d)||i.includes("botak")||i.includes("merah")||i.includes("cat")||i.includes("gaya rambut");v&&S?(s.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),r.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:i.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):v?s.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):S&&r.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:i.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const k=["tubuh","badan","pose","postur"],f=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],R=f.some(v=>i.includes(v));(k.some(v=>i.includes(v))||R)&&(n.add("BODY_POSE"),t([...k,...f])?s.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):R&&r.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const A=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];A.some(v=>i.includes(v))&&(n.add("BODY_POSE"),t(A)?s.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):r.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const I=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(v=>!n.has(v.key)).map(v=>({entity:v.key,label:v.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${v.label.toLowerCase()}.`}));return{editAreas:r,lockedAreas:s,unchangedAreas:I}}findPromptIndex(a,e,i=[]){const r=a.toLowerCase();let s=999;const n=[...e.semanticTriggers||[],...i];for(const t of n){if(!t||t.length<3)continue;const o=r.indexOf(t.toLowerCase());o!==-1&&o<s&&(s=o)}return s}queryPrimaryShorthands(a,e,i,r){const s=new Map;for(const n of i)if(n.shorthand){const t=this.catalog.find(o=>o.code===n.shorthand);if(t){const o=this.findPromptIndex(a,t,[n.label,n.entity,"jangan","pertahankan","kunci"]);s.set(t.code,{item:t,code:t.code,name:t.name,category:t.category,target:n.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${n.description.toLowerCase()}`,score:100,promptIndex:o})}}for(const n of e)if(n.shorthand){const t=this.catalog.find(o=>o.code===n.shorthand);if(t){const o=this.findPromptIndex(a,t,[n.label,n.entity,"ubah","ganti","hapus"]);s.set(t.code,{item:t,code:t.code,name:t.name,category:n.category||t.category,target:n.label,priority:"WAJIB",reason:`Mendukung eksekusi ${n.description.toLowerCase()}`,score:95,promptIndex:o})}}if(e.some(n=>n.entity==="LIGHTING")&&!s.has("/enhance")){const n=this.catalog.find(t=>t.code==="/enhance");n&&s.set("/enhance",{item:n,code:n.code,name:n.name,category:n.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,n,["pencahayaan","lighting"])})}if(e.some(n=>n.entity==="IMAGE_QUALITY")&&!s.has("/sharpen")&&!s.has("/highresolution")){const n=this.catalog.find(t=>t.code==="/sharpen");n&&s.set("/sharpen",{item:n,code:n.code,name:n.name,category:n.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,n,["tajam","sharpen"])})}for(const n of this.catalog){if(s.has(n.code))continue;const t=_a(n,a);if(t>=70){if(i.some(h=>{if(h.shorthand&&n.conflicts&&n.conflicts.includes(h.shorthand))return!0;const l=this.catalog.find(b=>b.code===h.shorthand);return!!(l&&l.conflicts&&l.conflicts.includes(n.code))})||Array.from(s.values()).some(h=>{var l,b;return(b=(l=h.item)==null?void 0:l.relationships)==null?void 0:b.some(g=>g.code===n.code&&g.relationType==="ALTERNATIVE")}))continue;n.category;const p=this.findPromptIndex(a,n);s.set(n.code,{item:n,code:n.code,name:n.name,category:n.category,target:n.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${n.name}'.`,score:t,promptIndex:p})}}return Array.from(s.values())}deduplicateByFunctionGroup(a){var r,s,n;const e=new Map;for(const t of a){const o=((r=t.item)==null?void 0:r.functionGroup)||((s=t.item)==null?void 0:s.category)||t.code;e.has(o)?e.get(o).push(t):e.set(o,[t])}const i=[];for(const[t,o]of e.entries()){if(o.length===1){i.push(o[0]);continue}o.sort((l,b)=>{var R,O,A,C;const g=(R=l.item)!=null&&R.preferredRepresentative?1:0,m=(O=b.item)!=null&&O.preferredRepresentative?1:0;if(m!==g)return m-g;const d={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},k=d[(A=l.item)==null?void 0:A.status]||2,f=d[(C=b.item)==null?void 0:C.status]||2;return f!==k?f-k:(b.score||0)!==(l.score||0)?(b.score||0)-(l.score||0):l.code.length-b.code.length});const c={...o[0]},p=o.slice(1).map(l=>l.code),h=Array.from(new Set([...((n=c.item)==null?void 0:n.equivalentTo)||[],...p,...o.slice(1).flatMap(l=>{var b;return((b=l.item)==null?void 0:b.equivalentTo)||[]})])).filter(l=>l!==c.code);c.item={...c.item,equivalentTo:h},c.equivalentTo=h,i.push(c)}return i}hasConflict(a,e,i){if(!a)return!1;for(const r of e){if(a.code===r)continue;if(a.conflicts&&a.conflicts.includes(r))return!0;const s=this.catalog.find(n=>n.code===r);if(s&&s.conflicts&&s.conflicts.includes(a.code))return!0}for(const r of i){if(a.code===r)continue;if(a.conflicts&&a.conflicts.includes(r))return!0;const s=this.catalog.find(n=>n.code===r);if(s&&s.conflicts&&s.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,i,r){var b;const s=new Set(e.map(g=>g.code));for(const g of e)if(g.equivalentTo)for(const m of g.equivalentTo)s.add(m);const n=new Set(e.map(g=>{var m,d;return((m=g.item)==null?void 0:m.functionGroup)||((d=g.item)==null?void 0:d.category)})),t=new Set([...i.map(g=>g.entity),...r.map(g=>g.entity)]),o=new Set(r.map(g=>g.shorthand).filter(Boolean)),c=new Map;for(const g of e){const m=((b=g.item)==null?void 0:b.relationships)||[];for(const d of m){if(!d.code||s.has(d.code))continue;const k=this.catalog.find(R=>R.code===d.code);if(!k||this.hasConflict(k,o,s)||_a(k,a)<0)continue;const f=k.functionGroup||k.category;n.has(f)||k.category==="HEADWEAR"&&!t.has("HEADWEAR")||c.has(k.code)||c.set(k.code,{item:k,code:k.code,name:k.name,category:k.category,target:k.target,functionGroup:f,description:k.description,relationship:d.relationType||"DIRECTLY_RELATED",reason:d.reason||`Berhubungan dengan ${g.name}`,source:k.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const p={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const g of t){const m=p[g]||[];for(const d of m)for(const k of this.catalog){if(s.has(k.code)||c.has(k.code)||d.category&&k.category!==d.category||d.target&&k.target!==d.target||k.category==="HEADWEAR"&&!t.has("HEADWEAR")||k.category==="TRANSPARENCY"&&!t.has("BACKGROUND")||this.hasConflict(k,o,s)||_a(k,a)<0)continue;const f=k.functionGroup||k.category;n.has(f)||c.set(k.code,{item:k,code:k.code,name:k.name,category:k.category,target:k.target,functionGroup:f,description:k.description,relationship:d.relation||"CONTEXTUAL",reason:d.reason||`Berhubungan dengan area ${g}`,source:k.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const h=Array.from(c.values());return this.deduplicateByFunctionGroup(h).map(g=>({...g,isPrimary:!1,checked:!1,priority:g.priority||"DISARANKAN"}))}detectConflicts(a,e,i,r){const s=[];for(const o of a){const c=e.find(p=>p.entity===o.entity);if(c){const p={id:`conflict-${o.entity.toLowerCase()}`,entity:o.entity,label:o.label,type:"EDIT_VS_LOCK",shorthandA:c.shorthand||`[Lock ${o.entity}]`,shorthandB:o.shorthand||`[Ubah ${o.entity}]`,instructionA:c.description,instructionB:o.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${o.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};p.suggestion=this.generateConflictSuggestion(p),s.push(p)}}const n=Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.code):Array.from(i.keys?i.keys():[]),t=Array.from(new Set([...n,...r]));for(const o of t){const c=this.catalog.find(p=>p.code===o);if(!(!c||!c.conflicts||c.conflicts.length===0)){for(const p of c.conflicts)if(t.includes(p)){if(s.some(b=>b.shorthandA===o&&b.shorthandB===p||b.shorthandA===p&&b.shorthandB===o))continue;const l=`conflict-${[o,p].sort().join("-")}`;if(!s.some(b=>b.id===l)){const b=this.catalog.find(m=>m.code===p),g={id:l,entity:c.target,label:c.name,type:"SHORTHAND_CLASH",shorthandA:o,shorthandB:p,instructionA:c.description,instructionB:b?b.description:`Konflik dengan direktif ${p}`,reason:`Shorthand ${o} bertentangan langsung dengan ${p} pada target ${c.target}.`,options:[{id:"keep_a",label:`Gunakan ${o}`},{id:"keep_b",label:`Gunakan ${p}`}]};g.suggestion=this.generateConflictSuggestion(g,c,b),s.push(g)}}}}return s}generateConflictSuggestion(a,e=null,i=null){const r=(a.shorthandA||"").toLowerCase(),s=(a.shorthandB||"").toLowerCase(),n=[r,s].sort().join(" vs ");if(n==="/backgroundlock vs /bgblur"||r==="/backgroundlock"&&s==="/bgblur"||s==="/backgroundlock"&&r==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(n==="/backgroundlock vs /studiobg"||r==="/backgroundlock"&&s==="/studiobg"||s==="/backgroundlock"&&r==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(n==="/backgroundlock vs /bgreplace"||r==="/backgroundlock"&&s==="/bgreplace"||s==="/backgroundlock"&&r==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(n==="/backgroundlock vs /bgremove"||r==="/backgroundlock"&&s==="/bgremove"||s==="/backgroundlock"&&r==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(n==="/bgremove vs /bgreplace"||r==="/bgreplace"&&s==="/bgremove"||r==="/bgremove"&&s==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(n==="/bgblur vs /bgremove"||r==="/bgblur"&&s==="/bgremove"||r==="/bgremove"&&s==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(n==="/bgremove vs /studiobg"||r==="/studiobg"&&s==="/bgremove"||r==="/bgremove"&&s==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(n==="/bgblur vs /studiobg"||r==="/studiobg"&&s==="/bgblur"||r==="/bgblur"&&s==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(r==="/facelock"||s==="/facelock"){const o=r==="/facelock"?s:r;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${o}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${o}.`}if(r==="/outfitlock"||s==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${r==="/outfitlock"?s:r}.`;if(r==="/hairlock"||s==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${r==="/hairlock"?s:r}.`;if(r==="/headwearlock"||s==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${r==="/headwearlock"?s:r} jika ingin melepas atau mengganti penutup kepala.`;if(r==="/bodylock"||s==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${r==="/bodylock"?s:r}.`;if(n==="/cinematic vs /rawphoto"||r==="/cinematic"&&s==="/rawphoto"||r==="/rawphoto"&&s==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(n==="/rawphoto vs /vintage"||r==="/vintage"&&s==="/rawphoto"||r==="/rawphoto"&&s==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(n==="/cooltone vs /warmtone"||r==="/warmtone"&&s==="/cooltone"||r==="/cooltone"&&s==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(r==="/monochrome"||s==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${r==="/monochrome"?s:r} jika gambar harus tampil berwarna.`;if(n==="/bokeh vs /sharpen"||r==="/sharpen"&&s==="/bokeh"||r==="/bokeh"&&s==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const o=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${o}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${o}) dan batalkan instruksi ubah.`}const t=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${t}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const i=new Set(a.map(n=>n.code));for(const n of a)if(n.equivalentTo)for(const t of n.equivalentTo)i.add(t);const r=new Set(e.map(n=>n.code)),s=[];for(const n of this.catalog){if(i.has(n.code))continue;let t="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const o=e.find(c=>{var p;return!!(n.conflicts&&n.conflicts.includes(c.code)||(p=c.item)!=null&&p.conflicts&&c.item.conflicts.includes(n.code))});o?t=`Bertentangan dengan direktif aktif: ${o.code} (${o.name}).`:n.category==="LOCK_PRESERVATION"||n.category==="FACE_IDENTITY"?n.code==="/facelock"||n.code==="/faceedit"||n.code==="/facechange"?t="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":n.code==="/hairlock"?t="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":n.code==="/backgroundlock"?t="Latar belakang tidak diminta untuk dikunci secara eksplisit.":n.code==="/outfitlock"?t="Pakaian subjek tidak diminta untuk dikunci.":n.code==="/headwearlock"&&(t="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):n.category==="HAIR"?t="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":n.category==="OUTFIT"?r.has("/outfit")?n.code==="/outfit-remove"?t="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":n.code==="/outfit-color"?t="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":t="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":t="Tidak ada instruksi yang memodifikasi pakaian atau busana.":n.category==="HEADWEAR"?t="Tidak ada instruksi penutup kepala atau hijab.":n.category==="BACKGROUND"||n.category==="TRANSPARENCY"?n.code==="/bgremove"?t="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":n.code==="/bgreplace"?t="Tidak ada permintaan penggantian latar belakang ke scene baru.":t="Tidak ada permintaan manipulasi latar belakang.":n.category==="CANVAS_RATIO"?t="Tidak ada instruksi pengubahan rasio kanvas gambar.":n.category==="BODY_POSE"?t="Tidak ada permintaan perubahan pose atau framing seluruh badan.":n.category==="STYLE_EFFECT"||n.category==="CAMERA_PHOTO"?t="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":n.category==="EXPRESSION"?t="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":n.category==="OBJECT"&&(t="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),s.push({code:n.code,name:n.name,category:n.category,target:n.target,description:n.description,reason:t})}return s}generateVisualTransformation(a,e,i){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:i||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const r=a.map(o=>o.label).join(", "),s=e.map(o=>o.label).join(", ");let n="Elemen visual awal gambar",t="Elemen visual teroptimasi";if(a.some(o=>o.entity==="LIGHTING"))n="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",t="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(o=>o.entity==="HEADWEAR"))n="Subjek mengenakan penutup kepala / hijab asli",t="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(s?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(o=>o.entity==="OUTFIT")){const o=a.find(c=>c.entity==="OUTFIT");n="Busana awal subjek",t=`${o?o.description:"Busana baru terpasang"}`+(s?`; ${s} tetap terkunci aman.`:"")}else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REMOVE")))n="Foto subjek dengan latar belakang bawaan",t="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REPLACE")))n="Latar belakang awal foto",t="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(o=>o.entity==="CANVAS_RATIO")){const o=a.find(c=>c.entity==="CANVAS_RATIO");n="Dimensi kanvas bawaan foto",t=`${o?o.description:"Dimensi kanvas baru disesuaikan"}`}return{from:n,to:t,summary:`Transformasi pada [${r||"Tanpa Edit"}] dengan preservasi pada [${s||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let i=a.trim();i&&!i.endsWith(".")&&!i.endsWith("!")&&!i.endsWith("?")&&(i+=".");const r=e.join(" ");return i&&r?`${i} ${r}`:r||i}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",generatedPrompt:"",visionData:null,visualBreakdown:null,timestamp:null}}}function Ga(u,a=1,e=.5){if(a<.12)return e>.85?"putih bersih / krem netral":e>.65?"abu-abu terang netral":e>.35?"abu-abu netral":e>.15?"abu-abu arang gelap":"hitam pekat monokromatik";switch(u){case"cyan":case"teal":return"biru toska / cyan cerah / denim";case"blue":return"biru muda / denim cerah";case"navy":return"biru tua / biru kobalt";case"pink":return"merah muda / pink pastel lembut";case"purple":case"violet":return"ungu lavender / violet";case"red":return"merah menyala / crimson";case"orange":return"oranye hangat / amber";case"yellow":return"kuning cerah / pastel yellow";case"lime":return"hijau muda terang / lime";case"green":return"hijau zamrud / toska alami";default:return"netral harmonis"}}function $a(u,a=1,e=.5){if(a<.12)return e>.85?"clean white / soft cream":e>.65?"light neutral gray":e>.35?"medium neutral gray":e>.15?"dark charcoal gray":"deep monochromatic black";switch(u){case"cyan":case"teal":return"light cyan / vibrant teal / sky denim";case"blue":return"vivid denim blue / bright blue";case"navy":return"deep navy blue / royal cobalt";case"pink":return"soft pastel pink / rose";case"purple":case"violet":return"lavender / soft violet";case"red":return"vibrant crimson red";case"orange":return"warm amber orange";case"yellow":return"bright sunny yellow";case"lime":return"bright lime green";case"green":return"emerald green / mint";default:return"balanced neutral tone"}}const pe={"9:16":9/16,"2:3":2/3,"3:4":3/4,"1:1":1,"4:3":4/3,"3:2":3/2,"16:9":16/9};function Ka(u,a){if(!u||!a||u<=0||a<=0)return"1:1";const e=u/a;let i="1:1",r=1/0;for(const[s,n]of Object.entries(pe)){const t=Math.abs(e-n);t<r&&(r=t,i=s)}return i}function za(u,a={}){var l,b;const e=(a.filename||"").toLowerCase(),i=a.width||(u==null?void 0:u.width)||800,r=a.height||(u==null?void 0:u.height)||800,s=i/(r||1),n=Ka(i,r),o=(a.targetAspectRatio&&a.targetAspectRatio!=="Otomatis"&&a.targetAspectRatio!=="auto"?a.targetAspectRatio:null)||n;let c="square";s>1.15?c=s>1.6?"landscape-wide":"landscape":s<.88&&(c=s<.65?"portrait-tall":"portrait");const p=e.startsWith("unduhan")||e.includes("download")||e.includes("jfif"),h=e.includes("3d")||e.includes("chibi")||e.includes("doll")||e.includes("render")||e.includes("toy")||e.includes("figure")||e.includes("figurine")||e.includes("character")||e.includes("boneka")||e.includes("avatar")||e.includes("anime")||e.includes("kartun")||e.includes("cartoon")||e.includes("hoodie");if(!u||typeof u.getContext!="function"){const g=h||p&&e.endsWith(".jfif"),m=g?"cyan":"neutral";return{dimensions:{width:i,height:r,aspectRatio:o,orientation:c},styleType:g?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:g,dominantHue:m,dominantColorIndonesian:Ga(m,g?.4:.05,.5),dominantColorEnglish:$a(m,g?.4:.05,.5),secondaryColorIndonesian:g?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:g?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:g?"latar studio netral dengan pencahayaan gradasi halus":"latar belakang netral teratur",lightingStyleIndonesian:g?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:g?.38:.18,avgLum:.55,satRatio:g?.32:.12,edgeDensity:g?16:32,centerContrast:.25}}try{const m=document.createElement("canvas");m.width=64,m.height=64;const d=m.getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("Canvas 2D context unavailable");d.drawImage(u,0,0,64,64);const k=d.getImageData(0,0,64,64).data,f=4096;let R=0,O=0,A=0,C=0,I=0,v=0,S=0,B=0,T=0,j=0,w=0,G=0,L=0,H=0,P=0,Y=0;const W={cyan:0,blue:0,navy:0,pink:0,purple:0,red:0,orange:0,yellow:0,lime:0,green:0,white:0,gray:0,black:0},oa={},z={},U=new Float32Array(f);for(let q=0;q<64;q++)for(let J=0;J<64;J++){const F=(q*64+J)*4,_=k[F],ea=k[F+1],ya=k[F+2];R+=_,O+=ea,A+=ya;const ma=_/255,ba=ea/255,Aa=ya/255,Oa=Math.max(ma,ba,Aa),wa=Math.min(ma,ba,Aa);let Z=0,Pa=0,ha=(Oa+wa)/2;if(Oa!==wa){const ja=Oa-wa;switch(Pa=ha>.5?ja/(2-Oa-wa):ja/(Oa+wa),Oa){case ma:Z=(ba-Aa)/ja+(ba<Aa?6:0);break;case ba:Z=(Aa-ma)/ja+2;break;case Aa:Z=(ma-ba)/ja+4;break}Z*=60}U[q*64+J]=ha,C+=Pa,I+=ha,q<64/2?L+=ha:H+=ha,J<64/2?P+=ha:Y+=ha;let ta="gray";Pa<.14?ha>.82?ta="white":ha<.18?ta="black":ta="gray":(v++,Z>=345||Z<15?ta="red":Z>=15&&Z<45?ta="orange":Z>=45&&Z<70?ta="yellow":Z>=70&&Z<105?ta="lime":Z>=105&&Z<145?ta="green":Z>=145&&Z<195?ta="cyan":Z>=195&&Z<225?ta="blue":Z>=225&&Z<260?ta="navy":Z>=260&&Z<295?ta="purple":Z>=295&&Z<345&&(ta="pink")),W[ta]=(W[ta]||0)+1;const te=J>=16&&J<=48&&q>=14&&q<=50,ne=J<10||J>=54||q<8||q>=56;te&&(S+=Pa,B+=ha,T++,oa[ta]=(oa[ta]||0)+1),ne&&(j+=Pa,w+=ha,G++,z[ta]=(z[ta]||0)+1)}const X=C/f,aa=I/f,x=T?S/T:X,y=G?j/G:X,E=v/f;let N=0,M=0;for(let q=1;q<63;q++)for(let J=1;J<63;J++){const F=U[q*64+J],_=Math.abs(U[q*64+(J+1)]-U[q*64+(J-1)]),ea=Math.abs(U[(q+1)*64+J]-U[(q-1)*64+J]);N+=_+ea,M++}const K=Math.round(N/(M||1)*100),$=Object.entries(W).sort((q,J)=>J[1]-q[1]).map(q=>q[0]),D=$[0]||"neutral",Q=$[1]||"gray",ga=((l=Object.entries(z).sort((q,J)=>J[1]-q[1])[0])==null?void 0:l[0])||"white",pa=((b=Object.entries(oa).sort((q,J)=>J[1]-q[1])[0])==null?void 0:b[0])||D;let ca="pencahayaan studio terdistribusi seimbang dengan fill merata";const ka=(L-H)/(f/2),na=B/(T||1)-w/(G||1);na>.15?ca="pencahayaan studio terarah lembut pada subjek utama dengan vignette halus":na<-.12?ca="pencahayaan rim light kontur dengan pencahayaan latar belakang terdifusi":ka>.15?ca="pencahayaan softbox terarah dari sudut atas dengan gradasi bayangan natural":aa<.3?ca="pencahayaan dramatis low-key dengan aksen highlight tajam":aa>.7&&(ca="pencahayaan terang high-key bersih tanpa bayangan pekat");const la=D==="cyan"||D==="blue"||pa==="cyan"||pa==="blue"||W.cyan+W.blue>f*.1,da=K<22,Ea=E>.18||X>.22||la;let ua="REALISTIC_PHOTO";h||p&&(Ea||la)||da&&Ea?ua="STYLED_3D_CHARACTER":D==="green"&&s>1.2?ua="NATURE_LANDSCAPE":D==="gray"&&K>28&&(ua="URBAN_ARCHITECTURE");const La=Ga(pa,x,aa),Na=$a(pa,x,aa),va=Ga(Q,X,aa),Ra=$a(Q,X,aa),Ia=Ga(ga,y,w/(G||1));return{dimensions:{width:i,height:r,aspectRatio:o,orientation:c},styleType:ua,isStylizedOr3D:ua==="STYLED_3D_CHARACTER",dominantHue:pa,dominantColorIndonesian:La,dominantColorEnglish:Na,secondaryColorIndonesian:va,secondaryColorEnglish:Ra,backgroundColorIndonesian:Ia,lightingStyleIndonesian:ca,contrastLevel:Math.abs(na)>.1?"tinggi terarah":"seimbang lembut",avgSat:Number(X.toFixed(2)),avgLum:Number(aa.toFixed(2)),satRatio:Number(E.toFixed(2)),edgeDensity:K,centerContrast:Number((x-y).toFixed(2))}}catch(g){console.warn("Canvas deep pixel analysis error:",g);const m=h||p&&e.endsWith(".jfif"),d=m?"cyan":"neutral";return{dimensions:{width:i,height:r,aspectRatio:o,orientation:c},styleType:m?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:m,dominantHue:d,dominantColorIndonesian:Ga(d,m?.4:.05,.5),dominantColorEnglish:$a(d,m?.4:.05,.5),secondaryColorIndonesian:m?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:m?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:"latar studio bersih terdifusi",lightingStyleIndonesian:m?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:m?.35:.18,avgLum:.55,satRatio:m?.28:.12,edgeDensity:m?16:30,centerContrast:.2}}}function me(u,a={}){var B,T,j,w;const e=a.preferredLang==="en",i=u||{},r=(a.filename||"").toLowerCase(),s=(a.referencePrompt||"").trim(),n=s.toLowerCase(),t=`${r} ${n}`,o=a.targetAspectRatio||a.aspectRatio,c=o&&o!=="Otomatis"&&o!=="auto"?o:i.aspectRatio||((B=i.dimensions)==null?void 0:B.aspectRatio)||i.detectedRatio||"1:1",p=((T=i.dimensions)==null?void 0:T.orientation)||"square",h=i.dominantColorIndonesian||"biru toska / cyan cerah / denim",l=i.dominantColorEnglish||"light cyan / sky blue / denim",b=i.secondaryColorIndonesian||"krem / putih netral",g=i.secondaryColorEnglish||"soft cream / clean white",m=i.backgroundColorIndonesian||"latar studio bersih terdifusi",d=i.backgroundColorEnglish||"clean diffused studio backdrop",k=i.lightingStyleIndonesian||"pencahayaan studio terarah halus";if(!!(i.isStylizedOr3D||i.styleType==="STYLED_3D_CHARACTER"||t.includes("chibi")||t.includes("3d")||t.includes("doll")||t.includes("boneka")||t.includes("figurine")||t.includes("figure")||t.includes("toy")||t.includes("miniatur")||t.includes("render")||t.includes("avatar")||t.includes("karakter")||t.includes("character")||t.includes("anime")||t.includes("kartun")||t.includes("cartoon")||t.includes("hoodie")||r.startsWith("unduhan")&&(r.endsWith(".jfif")||(i.avgSat||0)>.15)))return{mainDescription:e?`Cute stylized 3D animated character figurine with expressive oversized eyes, dressed in an oversized hoodie jacket in ${l}, set against a clean studio backdrop with fine directional 3D illumination.`:`Karakter animasi 3D bergaya cute chibi doll figurine dengan mata besar ekspresif yang berbinar, mengenakan jaket hoodie berwarna ${h} bertekstur kain detail, dengan ${k}.`,subjectDescription:e?"Adorably proportioned 3D character doll featuring luminous stylized anime-like eyes, soft rosy cheeks, and smooth porcelain-grade subsurface scattering skin finish.":"Karakter figurin 3D imut (cute chibi doll) dengan proporsi wajah manis, tatapan mata besar jernih berbinar bergaya animasi 3D, pipi merona lembut, dan permukaan material kulit halus dengan subsurface scattering alami.",poseExpression:e?"Poised centered posture facing directly toward the camera, head charmingly tilted with a curious and serene expression.":"Postur tubuh imut terpusat menghadap ke arah kamera, kepala sedikit condong dengan ekspresi manis menggemaskan dan tatapan mata fokus.",identityPreservation:e?"Preserve the unique stylized 3D doll facial features, large anime eyes, and signature jacket tailoring.":"Pertahankan proporsi wajah karakter figurin 3D yang khas, bentuk mata besar berbinar, ekspresi imut, dan desain jaket asli.",outfitMaterial:e?`Cozy hoodie jacket crafted in ${l} with visible woven thread texture, refined hem stitching, hood drawstring accents, complemented by ${b}.`:`Jaket hoodie tebal berkerudung berwarna ${h} dengan kerapatan rajutan kain tampak jelas, jahitan tepi presisi, aksen tali hoodie, dan perpaduan aksen ${b}.`,environmentBackground:e?`Minimalist studio environment with soft diffused backdrop in ${m}, cleanly isolating the 3D figurine subject.`:`Latar belakang studio minimalis dengan nuansa ${m} terdifusi halus yang mengisolasi karakter secara bersih dan terfokus.`,compositionPerspective:e?`Medium closeup portrait centered framing in ${c} aspect ratio, eye-level perspective with measured shallow depth of field.`:`Komposisi medium portrait closeup terpusat dengan rasio aspek ${c}, sudut pandang kamera sejajar mata (eye-level), dan kedalaman bidang terukur (shallow depth of field).`,lightingColor:e?"Controlled 3D studio lighting with soft key fill, subtle rim highlights along the jacket contours, and clean ambient shadows.":`${k}, rim light tipis di sepanjang kontur jaket dan rambut, serta fill ambient lembut tanpa bayangan kasar.`,cameraLensDof:e?"Macro portrait perspective, crisp focus on the character's eyes and face with creamy studio background bokeh.":"Sudut pandang makro portrait, ketajaman kristal pada detail mata dan tekstur busana, dengan latar belakang bokeh studio yang lembut.",photoStyleRealism:e?"High-end 3D digital character render, Octane Render and Unreal Engine 5 aesthetic, smooth vinyl toy surface texture, extreme microcontrast.":"Gaya render digital 3D berkualitas tinggi (3D character / Octane Render aesthetic), tekstur material figurine halus, subsurface scattering lembut pada kulit, dan detail kain presisi.",aspectRatio:c,optimizationNeeds:["high detail","detail preservation","texture preservation","color balance","soft lighting","studio lighting","subsurface scattering"],suggestedShorthands:["/studio","/eyelevel","/softlight","/highdetail","/detailpreservation","/texturepreservation","/enhance"],contextualNegativePrompt:e?"real human photo, photorealistic real skin, wrinkled face, photographic grain, bad 3d render, distorted limbs, extra fingers, deformed eyes, blurry, low resolution, watermark, text":"real human photo, foto manusia asli, kulit berkerut, pori-pori kasar, photographic grain, render 3d cacat, anatomi rusak, jari ekstra, mata juling, buram, resolusi rendah, watermark, teks"};if(!!(i.styleType==="NATURE_LANDSCAPE"||t.includes("landscape")||t.includes("mountain")||t.includes("beach")||t.includes("lake")||t.includes("sunset")||t.includes("sunrise")||t.includes("forest")||t.includes("nature")||t.includes("gunung")||t.includes("pantai")||t.includes("danau")||t.includes("hutan")||t.includes("pemandangan")||t.includes("river")||t.includes("sungai")||t.includes("ocean")||t.includes("laut")||t.includes("valley")||i.dominantHue==="green"&&((j=i.dimensions)==null?void 0:j.width)/(((w=i.dimensions)==null?void 0:w.height)||1)>1.25)){const G=c==="1:1"?"16:9":c;return{mainDescription:e?`Expansive natural landscape photography capturing wide panoramic vistas, dominant ${l} earth tones, and atmospheric ambient illumination.`:`Pemandangan lanskap alam terbuka yang membentang luas dengan formasi horizon memukau, dominasi palet ${h}, dan atmosfer alam yang tenang.`,subjectDescription:e?`Layered geographical contours of undulating terrain with organic vegetation in the foreground and natural ${l} accents.`:`Hamparan bentang alam alami dengan kontur geografis berundak, vegetasi asri, dan aksen alami ${h} pada latar depan dan tengah.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Open scenic wilderness environment with expansive skyline, natural ${d}, and distant atmospheric haze.`:`Lingkungan alam terbuka dengan panorama cakrawala luas, batuan alami bernuansa ${m}, dan nuansa atmosfer yang jernih.`,compositionPerspective:e?`Wide-angle panoramic composition following rule-of-thirds framing, balanced horizontal perspective in ${G} aspect ratio, deep focus throughout.`:`Komposisi lanskap panorama sudut lebar (wide-angle shot) dengan rasio ${G}, garis horizon proporsional mengikuti kaidah rule of thirds, kedalaman ruang penuh (deep focus).`,lightingColor:e?`${k} with warm ambient glow, rich tonal dynamic range between bright skies and natural shadows.`:`${k}, rentang tonal dinamis yang seimbang antara langit terang dan bayangan alami.`,cameraLensDof:e?"24mm wide-angle lens, f/8 aperture, edge-to-edge sharpness from foreground rocks to distant horizon.":"Lensa sudut lebar (wide-angle 24mm f/8), seluruh bidang foto tajam menyeluruh dari foreground hingga cakrawala.",photoStyleRealism:e?"Realistic outdoor nature photography with microcontrast clarity, authentic earthy textures without synthetic saturation.":"Fotografi lanskap realistis dengan detail mikrokontras tinggi pada tekstur batuan dan dedaunan tanpa saturasi berlebih.",aspectRatio:G,optimizationNeeds:["shadow recovery","highlight control","dynamic range","natural tone","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/landscape","/wideangle","/deepfocus","/daylight","/rawphoto","/highdetail","/enhance"],contextualNegativePrompt:e?"people, text, buildings, cars, urban elements, low resolution, blurry, oversaturated colors, artificial clouds, chromatic aberration, digital noise, artifacts, watermark":"people, text, buildings, cars, manusia, perkotaan, low resolution, blur, oversaturated, awan sintetis, chromatic aberration, noise digital, artefak, watermark"}}if(!!(i.styleType==="URBAN_ARCHITECTURE"||t.includes("architecture")||t.includes("building")||t.includes("city")||t.includes("street")||t.includes("urban")||t.includes("tokyo")||t.includes("gedung")||t.includes("bangunan")||t.includes("jalan")||t.includes("kota")||t.includes("skyscraper")||t.includes("tower")||t.includes("facade")||t.includes("menara")||t.includes("interior")||t.includes("exterior")))return{mainDescription:e?`Contemporary urban architectural photography showcasing structural geometric lines, clean facades in ${l}, and ambient city illumination.`:`Struktur arsitektur modern dengan fasad geometris kontemporer, dominasi material bernuansa ${h}, dan garis struktural presisi.`,subjectDescription:e?`Modern architectural structure featuring precision vertical and diagonal geometry, reflective panels in ${l}, and clean structural lines.`:`Bangunan arsitektur dengan garis struktural presisi dan detail material fasad bernuansa ${h} berpadu dengan aksen ${b}.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Metropolitan urban environment with street-level pavement, architectural setting in ${d}, and clear perspective.`:`Kawasan urban perkotaan atau interior berlatar ${m} dengan perspektif geometris teratur.`,compositionPerspective:e?`Architectural perspective framed in ${c} aspect ratio with corrected converging lines, symmetrical framing, and balanced geometric balance.`:`Komposisi sudut presisi dalam rasio ${c} dengan penekanan pada garis tegak lurus, sudut pandang teratur, dan keseimbangan simetri.`,lightingColor:e?`${k} with clean highlights on structural surfaces and balanced shadows.`:`${k}, highlight teratur pada permukaan material, dan keseimbangan bayangan bersih.`,cameraLensDof:e?"35mm perspective-corrected tilt-shift lens, deep focus with maximum geometric fidelity.":"Lensa 35mm dengan koreksi distorsi perspektif (perspective correction) dan ketajaman merata menyeluruh (deep focus).",photoStyleRealism:e?"High-precision architectural documentary photography with crisp material textures and zero optic distortion.":"Fotografi arsitektur realistis dengan reproduksi tekstur material autentik dan distorsi minimal.",aspectRatio:c,optimizationNeeds:["perspective correction","lens correction","composition balance","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/architecture","/deepfocus","/naturalcontrast","/perspectivecorrection","/highdetail","/rawphoto"],contextualNegativePrompt:e?"distorted lines, bent architecture, blurry edges, heavy grain, bad reflection, overexposed, watermark, text":"garis melengkung, distorsi gedung, tepi buram, grain kasar, refleksi rusak, overexposed, watermark, teks"};if(!!(t.includes("animal")||t.includes("cat")||t.includes("dog")||t.includes("bird")||t.includes("wildlife")||t.includes("kucing")||t.includes("anjing")||t.includes("burung")||t.includes("hewan")||t.includes("satwa")))return{mainDescription:e?`Intimate wildlife portrait capturing authentic animal subject with coat tones in ${l}, sharp eye focus, and natural demeanor.`:`Potret satwa autentik dengan nuansa warna ${h}, fokus tajam pada mata, dan tekstur bulu alami.`,subjectDescription:e?`A captivating animal subject showcasing alert gaze, distinct coat patterns in ${l}, and organic vitality.`:`Seekor hewan dengan ekspresi lincah, tatapan mata jernih, dan bulu bernuansa ${h} berpadu ${b}.`,poseExpression:e?"Natural posture with head slightly angled, curious and calm demeanor directed toward the camera.":"Posisi tubuh alami dengan kepala condong proporsional dan tatapan mata fokus ke arah depan.",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Organic natural habitat or indoor setting in ${d} isolating the subject cleanly.`:`Lingkungan berlatar ${m} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Medium closeup shot framed in ${c} aspect ratio at eye-level with the animal, centered subject framing with shallow depth of field.`:`Closeup framing dalam rasio ${c} pada sudut pandang sejajar mata hewan (eye-level), komposisi terpusat proporsional.`,lightingColor:e?`${k} creating natural catchlights in the eyes and gentle coat highlights.`:`${k}, kilau alami pada mata, dan gradasi highlight lembut pada kontur tubuh.`,cameraLensDof:e?"135mm telephoto lens at f/2.8, shallow depth of field with creamy bokeh background.":"Lensa telephoto 135mm f/2.8, kedalaman bidang dangkal (shallow dof) dengan latar belakang blur halus.",photoStyleRealism:e?"Realistic wildlife photography preserving individual strands of fur, whiskers, and natural iris reflections.":"Fotografi satwa realistis dengan detail helai bulu yang tajam dan warna alami tanpa manipulasi sintetis.",aspectRatio:c,optimizationNeeds:["detail preservation","texture preservation","natural tone","high detail","natural processing","raw photo"],suggestedShorthands:["/eyelevel","/softlight","/telephoto","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"cartoon, illustration, 3d render, deformed anatomy, extra paws, blurry eyes, plastic fur, watermark, text":"kartun, ilustrasi, render 3d, anatomi cacat, cakar ekstra, mata buram, bulu plastik, watermark, teks"};if(!!(t.includes("product")||t.includes("food")||t.includes("coffee")||t.includes("watch")||t.includes("cake")||t.includes("produk")||t.includes("makanan")||t.includes("kopi")||t.includes("minuman")||t.includes("still-life")))return{mainDescription:e?`Commercial still-life photography featuring meticulous product placement in ${l}, balanced studio illumination, and tactile surface materiality.`:`Potret still-life komersial dengan penataan objek bernuansa ${h}, pencahayaan terukur, dan detail material berkualitas tinggi.`,subjectDescription:e?`Principal hero subject with distinct contours in ${l}, accented with ${g}, pristine surface finish, and refined craftsmanship details.`:`Objek utama dengan kontur presisi bernuansa ${h} berpadu aksen ${b}, dengan permukaan bersih dan detail pengerjaan rapi.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:e?`Tactile surface materials with subtle micro-reflections and authentic manufacturing texture in ${l}.`:`Tekstur permukaan material asli bernuansa ${h} dengan mikro-refleksi halus dan kerapatan tekstur autentik.`,environmentBackground:e?`Minimalist studio tabletop environment with backdrop in ${d} complementary to the subject.`:`Studio meja still-life dengan permukaan bernuansa ${m} dan penataan elemen pendukung minimalis.`,compositionPerspective:e?`Framed in ${c} aspect ratio at 45-degree elevated angle or eye-level tabletop framing, crisp geometric alignment and focused presentation.`:`Komposisi dalam rasio ${c} dengan sudut 45 derajat atau eye-level tabletop, framing terfokus pada objek utama.`,lightingColor:e?`${k} with controlled diffused softbox highlights and soft contact drop shadows.`:`${k}, softbox diffused illumination, dan gradasi bayangan kontak yang lembut.`,cameraLensDof:e?"90mm macro lens at f/5.6, measured depth of field keeping the critical product surfaces sharp.":"Lensa makro 90mm f/5.6, depth of field terukur dengan ketajaman tinggi pada produk.",photoStyleRealism:e?"Commercial product photography with extreme tactile sharpness, color fidelity, and authentic material finish.":"Fotografi produk profesional dengan kejernihan material dan akurasi warna tinggi.",aspectRatio:c,optimizationNeeds:["detail preservation","texture preservation","color balance","natural contrast","high detail","natural processing","raw photo"],suggestedShorthands:["/studio","/softlight","/macro","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"dust, scratches, harsh reflections, bad lighting, low resolution, blur, watermark, text":"debu, goresan, pantulan silau keras, pencahayaan buruk, resolusi rendah, blur, watermark, teks"};const I=t.includes("woman")||t.includes("wanita")||t.includes("cewek")||t.includes("girl")||t.includes("lady")||t.includes("female")||t.includes("hijab"),v=t.includes("man")||t.includes("pria")||t.includes("cowok")||t.includes("boy")||t.includes("gentleman")||t.includes("businessman")||t.includes("male");let S=e?"an authentic focal subject":"subjek potret autentik";return I?S=e?"an adult woman with natural facial features and poised expression":"seorang wanita dengan ekspresi tenang dan fitur wajah alami":v?S=e?"an adult man with natural facial features and composed demeanor":"seorang pria dewasa dengan ekspresi tenang dan pembawaan wajar":s&&(S=s),{mainDescription:e?`Authentic photograph capturing ${S} with natural posture, dressed in ${l}, framed with balanced composition and ${k}.`:`Potret fotografi autentik dengan framing ${p} terpusat, menampilkan ${S} dengan sentuhan warna ${h}, ${k}, dan karakter visual realistis.`,subjectDescription:e?`${S} featuring authentic facial proportions, crisp eye focus, and natural anatomical alignment.`:`${S} dengan proporsi wajah alami, fokus mata tajam, dan karakter visual nyata tanpa efek sintetis.`,poseExpression:e?"Poised natural posture framed at eye-level perspective, calm composed expression directed forward.":"Postur tubuh seimbang dengan sudut pandang kamera sejajar mata (eye-level perspective), ekspresi tenang bersahaja.",identityPreservation:e?"Preserve natural facial proportions, authentic skin tones, and genuine human contours.":"Pertahankan proporsi wajah alami, warna kulit natural, dan kontur wajah manusia asli.",outfitMaterial:e?`Neat attire featuring ${l} with visible fabric weave, fine seam texture, complemented by ${g}.`:`Busana rapi dengan dominasi warna ${h} dan aksen ${b}, tekstur kain tampak jelas.`,environmentBackground:e?`Cohesive setting in ${d} isolating the subject cleanly with gentle depth of field.`:`Latar belakang bernuansa ${m} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Centered portrait composition framed in ${c} aspect ratio following rule-of-thirds balance at eye-level perspective.`:`Komposisi terpusat dalam rasio aspek ${c}, sudut pandang kamera sejajar mata (eye-level), dan pembagian bidang seimbang.`,lightingColor:e?`${k} with balanced fill, natural shadow transition, and controlled highlights.`:`${k}, gradasi bayangan natural, dan highlight wajah terukur.`,cameraLensDof:e?"Prime portrait lens, shallow depth of field with creamy background bokeh separation.":"Lensa portrait prime, kedalaman bidang dangkal (shallow depth of field) dengan pemisahan latar belakang bokeh halus.",photoStyleRealism:e?"Realistic photographic style, authentic microcontrast, natural skin pore textures without artificial plastic smoothing.":"Gaya fotografi realistis dengan tekstur kulit asli tanpa efek penghalusan plastik berlebih.",aspectRatio:c,optimizationNeeds:["shadow recovery","natural contrast","natural tone","color balance","detail preservation","texture preservation","natural processing","raw photo"],suggestedShorthands:["/portrait","/studio","/eyelevel","/softlight","/rawphoto","/enhance","/highdetail"],contextualNegativePrompt:e?"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, bad eyes, plastic skin, oversaturated, blurry, watermark, text":"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, anatomi cacat, jari ekstra, mata rusak, kulit plastik, oversaturated, blur, watermark, text"}}const Ma={tpl_1:"Add a realistic human subject alongside existing subjects, with coordinating attire, actively engaging in context harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_2:"Add a realistic human subject with coordinating outfit, actively participating in the context of the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_3:"Add a realistic human subject while strictly preserving all existing subjects and characters within the image. Do not modify or remove original subjects or characters. Harmonize the background with the uploaded image.",tpl_4:"Add a new subject wearing an elegant hijab, harmonizing outfit styling and color palette with the uploaded image.",tpl_5:"Add a realistic human subject wearing a hijab, with coordinating outfit and engaging in activity harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal."},qa={gender:{"laki-laki":"Male",pria:"Male",cowok:"Male",perempuan:"Female",wanita:"Female",cewek:"Female"},ethnicity:{asia:"Asian",eropa:"European / Caucasian",afrika:"African","timur tengah":"Middle Eastern","asia selatan":"South Asian","asia timur":"East Asian","asia tenggara":"Southeast Asian","pasifik / oseania":"Pacific Islander / Oceanian",pasifik:"Pacific Islander",oseania:"Oceanian","amerika latin":"Latino / Hispanic"}},he=[[/Tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Ma.tpl_1],[/Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Ma.tpl_2],[/Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar\. Jangan memodifikasi atau menghilangkan subjek\/karakter asli\. Latar belakang menyesuaikan dengan gambar unggahan\.?/gi,Ma.tpl_3],[/Tambahkan subjek baru yang mengenakan hijab[,\s]+lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan\.?/gi,Ma.tpl_4],[/Tambahkan subjek manusia realistis yang mengenakan hijab[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,Ma.tpl_5],[/tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan/gi,"Add a realistic human subject alongside existing subjects, with coordinating attire"],[/tambahkan subjek manusia realistis/gi,"Add a realistic human subject"],[/tambahkan subjek baru/gi,"Add a new subject"],[/tambahkan subjek/gi,"Add a subject"],[/tambahkan/gi,"Add"],[/dua orang berada di taman tropis dengan latar belakang pemandangan alam/gi,"Two people in a lush tropical garden with a natural scenic landscape backdrop"],[/dua orang berada di taman tropis/gi,"Two people in a lush tropical garden"],[/dua orang berada di/gi,"Two people in"],[/dua orang/gi,"Two people"],[/di taman tropis/gi,"in a lush tropical garden"],[/taman tropis/gi,"tropical garden"],[/dengan latar belakang pemandangan alam/gi,"with a natural scenic landscape backdrop"],[/latar belakang pemandangan alam/gi,"scenic landscape backdrop"],[/pemandangan alam/gi,"scenic landscape"],[/detail subjek utama dengan pencahayaan alami dan warna cerah/gi,"Detail of main subjects with natural daylight illumination and vibrant vivid colors"],[/detail subjek utama/gi,"Detail of main subjects"],[/subjek utama/gi,"main subjects"],[/warna cerah/gi,"vibrant vivid colors"],[/perbaiki pencahayaan foto/gi,"enhance photo lighting with balanced exposure and natural illumination"],[/perbaiki pencahayaan/gi,"enhance lighting with balanced exposure and natural contrast"],[/hapus hijab[,\s]+jangan ubah wajah/gi,"remove headwear, preserve natural hair, preserve original facial identity"],[/hapus hijab/gi,"remove headwear, display natural hair"],[/jangan ubah wajah/gi,"strictly preserve original face and facial identity"],[/pertahankan wajah asli/gi,"maintain authentic original facial identity"],[/pertahankan wajah/gi,"preserve facial identity"],[/ganti baju menjadi tanktop putih tali tipis[,\s]+jangan ubah wajah/gi,"change outfit to a delicate white spaghetti strap tank top, strictly preserve original facial identity"],[/ganti baju menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti baju/gi,"change clothing outfit"],[/ganti pakaian menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti pakaian/gi,"change outfit styling"],[/hapus latar belakang/gi,"remove background, isolate subject on clean backdrop"],[/hapus background/gi,"remove background"],[/gunakan latar baru/gi,"place subject in a new scenic environment"],[/ganti latar/gi,"replace background setting"],[/pertahankan rambut asli tetapi ubah pakaian/gi,"preserve natural authentic hair, change clothing attire"],[/pertahankan rambut asli/gi,"preserve natural authentic hair"],[/ubah rasio menjadi 9:16/gi,"aspect ratio 9:16 vertical composition"],[/ubah rasio menjadi 16:9/gi,"aspect ratio 16:9 wide panoramic composition"],[/ubah rasio menjadi 1:1/gi,"aspect ratio 1:1 square framing"],[/ubah rasio/gi,"change canvas aspect ratio"],[/resolusi tinggi/gi,"high resolution, fine micro-details"],[/kualitas tinggi/gi,"masterpiece quality, ultra-detailed"],[/anatomi tangan natural/gi,"anatomically correct natural hands and fingers"],[/anatomi tangan/gi,"natural hand anatomy"],[/memperluas foto/gi,"outpaint and expand canvas seamlessly"],[/perluas gambar/gi,"expand image canvas with harmonious environment"],[/dokter bedah sedang operasi di rumah sakit futuristik/gi,"a skilled surgical doctor performing an operation inside a high-tech futuristic hospital"],[/dokter bedah/gi,"a professional surgical doctor"],[/rumah sakit futuristik/gi,"a futuristic high-tech hospital"],[/montok/gi,"voluptuous curvy feminine figure"],[/seorang wanita muda/gi,"a young woman"],[/seorang wanita dewasa/gi,"an adult woman"],[/seorang wanita/gi,"a woman"],[/wanita muda/gi,"young woman"],[/wanita cantik/gi,"beautiful woman"],[/wanita/gi,"woman"],[/seorang pria muda/gi,"a young man"],[/seorang pria dewasa/gi,"an adult man"],[/seorang pria/gi,"a man"],[/pria muda/gi,"young man"],[/pria tampan/gi,"handsome man"],[/pria/gi,"man"],[/seorang gadis muda/gi,"a young girl"],[/seorang gadis/gi,"a girl"],[/gadis muda/gi,"young girl"],[/gadis/gi,"girl"],[/anak perempuan/gi,"a young girl"],[/anak laki-laki/gi,"a young boy"],[/anak-anak/gi,"children"],[/dengan rambut hitam panjang/gi,"with long dark hair"],[/dengan rambut panjang/gi,"with long hair"],[/dengan rambut pendek/gi,"with short hair"],[/dengan rambut pirang/gi,"with blonde hair"],[/dengan rambut bergelombang/gi,"with wavy hair"],[/dengan rambut keriting/gi,"with curly textured hair"],[/rambut hitam/gi,"dark hair"],[/rambut cokelat/gi,"brown hair"],[/mata cokelat/gi,"warm brown eyes"],[/kulit cerah/gi,"fair radiant skin"],[/kulit sawo matang/gi,"warm tan golden skin"],[/kulit halus/gi,"smooth skin texture"],[/tekstur kulit/gi,"natural skin microtexture"],[/senyum manis/gi,"gentle charming smile"],[/tersenyum lembut/gi,"softly smiling"],[/ekspresi tenang/gi,"serene composed expression"],[/tatapan mata tajam/gi,"focused engaging gaze"],[/detail fokus pada mata dan tekstur kertas buku/gi,"focus detail on expressive eyes and tactile book paper texture"],[/fokus pada mata/gi,"focused on the eyes"],[/tekstur kertas buku/gi,"tactile book paper texture"],[/tekstur kertas/gi,"paper texture"],[/mengenakan hijab/gi,"wearing a stylish hijab"],[/berhijab/gi,"wearing an elegant hijab"],[/mengenakan jaket hoodie/gi,"wearing a cozy oversized hoodie jacket"],[/mengenakan hoodie/gi,"wearing a hoodie"],[/mengenakan kemeja/gi,"wearing a crisp button-up shirt"],[/mengenakan kaos/gi,"wearing a casual t-shirt"],[/mengenakan gaun/gi,"wearing an elegant dress"],[/mengenakan jas/gi,"wearing a tailored formal suit"],[/mengenakan celana jeans/gi,"wearing denim jeans"],[/berpakaian santai/gi,"dressed in casual attire"],[/berpakaian formal/gi,"dressed in formal attire"],[/memegang buku/gi,"holding a book"],[/memegang/gi,"holding"],[/berjalan di/gi,"walking through"],[/berjalan santai/gi,"strolling gracefully"],[/berdiri di/gi,"standing in"],[/berdiri tegak/gi,"standing confidently"],[/duduk di/gi,"sitting in"],[/duduk santai/gi,"relaxing comfortably"],[/menatap kamera/gi,"looking directly at the camera"],[/menoleh ke samping/gi,"turning head slightly toward the side"],[/di perpustakaan klasik/gi,"in a classic vintage library"],[/di perpustakaan/gi,"in a library"],[/perpustakaan klasik/gi,"classic vintage library"],[/perpustakaan/gi,"library"],[/buku/gi,"book"],[/di taman bunga/gi,"in a blooming flower garden"],[/taman bunga/gi,"blooming flower garden"],[/di pantai saat senja/gi,"on a scenic beach at golden hour sunset"],[/di pantai/gi,"on a picturesque tropical beach"],[/di taman kota/gi,"in a vibrant urban city park"],[/di taman/gi,"in a lush garden park"],[/di jalanan kota/gi,"on a busy modern city street"],[/di kafe/gi,"in a cozy ambient cafe"],[/di studio foto/gi,"in a minimalist photography studio"],[/di studio/gi,"in a professional studio"],[/di kantor modern/gi,"in a sleek contemporary office"],[/di alam terbuka/gi,"in an expansive outdoor landscape"],[/saat senja/gi,"during golden hour sunset"],[/saat malam hari/gi,"at night with atmospheric city lights"],[/saat malam/gi,"at night"],[/saat pagi hari/gi,"in the fresh morning daylight"],[/saat siang hari/gi,"under bright natural midday sun"],[/hujan gerimis/gi,"soft gentle drizzle rain"],[/hujan/gi,"rainy wet pavement atmosphere"],[/pencahayaan alami/gi,"natural daylight illumination"],[/pencahayaan studio/gi,"professional studio key and fill lighting"],[/pencahayaan lembut/gi,"soft diffused ambient lighting"],[/pencahayaan sinematik/gi,"cinematic volumetric illumination"],[/cahaya keemasan/gi,"warm golden hour glow"],[/latar belakang buram/gi,"smooth creamy background bokeh"],[/latar belakang kabur/gi,"shallow depth of field with soft bokeh"],[/sudut pandang sejajar mata/gi,"eye-level camera angle"],[/sudut pandang rendah/gi,"low-angle perspective"],[/sudut pandang tinggi/gi,"high-angle perspective"],[/lensa potret 85mm/gi,"85mm portrait lens with f/1.4 aperture"],[/lensa sudut lebar/gi,"wide-angle 24mm lens"],[/komposisi rule of thirds/gi,"rule of thirds composition"],[/potret jarak dekat/gi,"closeup intimate portrait"],[/potret setengah badan/gi,"medium shot portrait"],[/seluruh badan/gi,"full-length body shot"]];function sa(u){if(!u||typeof u!="string")return"";const a=u.trim();if(!a)return"";const e=[],i="___TOKEN_PH_";let r=a.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,n=>{const t=`${i}SH_${e.length}___`;return e.push({id:t,original:n}),t});r=r.replace(/--([a-zA-Z0-9_\-]+)(?:\s+([^-\s][^-\n]*))?/g,n=>{const t=`${i}FLAG_${e.length}___`;return e.push({id:t,original:n}),t});let s=!1;/^(\/imagine prompt:)/i.test(r)&&(s=!0,r=r.replace(/^(\/imagine prompt:\s*)/i,""));for(const[n,t]of he)r=r.replace(n,t);r=r.replace(/\bdengan tetap mempertahankan\b/gi,"while strictly preserving").replace(/\bdengan mempertahankan\b/gi,"while preserving").replace(/\btanpa perubahan atau penghapusan\b/gi,"without modification or removal").replace(/\btanpa mengubah\b/gi,"without modifying").replace(/\bserta terlibat dalam aktivitas\b/gi,"and engaging in activities").replace(/\bsesuai gambar unggahan\b/gi,"harmonious with the source image").replace(/\bsesuai gambar sumber\b/gi,"harmonious with the source image").replace(/\bdengan pakaian yang menyesuaikan\b/gi,"with coordinating attire").replace(/\bpakaian yang menyesuaikan\b/gi,"coordinating attire").replace(/\bdi luar subjek yang sudah ada\b/gi,"alongside existing subjects").replace(/\bsubjek manusia realistis\b/gi,"a realistic human subject").replace(/\bseluruh subjek dan karakter asli\b/gi,"all original subjects and characters").replace(/\bsubjek\/karakter asli\b/gi,"original subjects and characters").replace(/\blatar belakang menyesuaikan\b/gi,"background harmonized with").replace(/\bsesuaikan outfit dan warna\b/gi,"harmonizing outfit styling and color palette").replace(/\bagar harmonis dengan\b/gi,"to harmonize with").replace(/\bgambar unggahan\b/gi,"uploaded source image").replace(/\bgambar sumber\b/gi,"source image").replace(/\bsubjek baru\b/gi,"a new subject").replace(/\bsubjek adalah\b/gi,"the subject is").replace(/\bsubjek berupa\b/gi,"the subject is").replace(/\bdengan\b/gi,"with").replace(/\bdan\b/gi,"and").replace(/\bserta\b/gi,"and").replace(/\bdi\b/gi,"in").replace(/\bke\b/gi,"to").replace(/\bdari\b/gi,"from").replace(/\bpada\b/gi,"on").replace(/\byang\b/gi,"that is").replace(/\btetapi\b/gi,"but").replace(/\bnamun\b/gi,"however"),r=r.replace(/\s+/g," ").replace(/\s+,/g,",").replace(/\s+\./g,".").replace(/,\s*,/g,",").replace(/\.\s*\./g,".").trim();for(const n of e)r=r.replace(n.id,n.original);return s&&(r=`/imagine prompt: ${r}`),r}function ke(u,a=null){if(!u)return"";const{customRequest:e="",gender:i="Auto",age:r="Auto",ethnicity:s="Auto",subjectStyle:n="Auto",customSubjectStyle:t="",environmentStyle:o="Auto"}=u,c=[];if(e&&e.trim()){const m=sa(e.trim());c.push(`Additional Directive (Custom Request): ${m}`)}const p=i&&!i.toLowerCase().startsWith("auto"),h=r&&!r.toLowerCase().startsWith("auto"),l=s&&!s.toLowerCase().startsWith("auto");if(p||h||l){const m=[];if(p){const d=i.toLowerCase().trim(),k=qa.gender[d]||i;m.push(`Gender: ${k}`)}if(h){const d=parseInt(r,10),k=isNaN(d)?r:`${d} years old`;m.push(`Age: ${k}`)}if(l){const d=s.toLowerCase().trim(),k=qa.ethnicity[d]||s;m.push(`Ethnicity: ${k}`)}c.push(`Subject Character Parameters: ${m.join(", ")}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`)}if(n&&!n.toLowerCase().startsWith("auto")){const m=n==="Custom"?t?sa(t.trim()):"Custom Realistic":n;c.push(`Subject Style: Visual rendering, materiality, skin microtexture, and clothing adopt a ${m} aesthetic, prioritizing natural anatomical fidelity, authentic microtextures, and directional illumination on the subject.`)}return o&&!o.toLowerCase().startsWith("auto")&&c.push(`Environment Style: World-building, background setting, atmosphere, environmental materials, and global illumination apply ${o}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`),c.join(`

`)}function Ja(u=""){let a="Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, and preserve fine microtextures and natural skin details without overprocessing.";if(u&&u.trim()){const e=sa(u.trim());return`${a} User specific adjustment target: ${e}.`}return a}const Ha=[{id:"none",label:"-- Pilih Template Prompt (Opsional) --",text:""},{id:"tpl_1",label:"Template 1: Tambahkan subjek manusia realistis di luar subjek yang sudah ada...",text:"Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_2",label:"Template 2: Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan...",text:"Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_3",label:"Template 3: Tambahkan subjek manusia realistis dan pertahankan seluruh subjek...",text:"Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar. Jangan memodifikasi atau menghilangkan subjek/karakter asli. Latar belakang menyesuaikan dengan gambar unggahan."},{id:"tpl_4",label:"Template 4: Tambahkan subjek baru yang mengenakan hijab...",text:"Tambahkan subjek baru yang mengenakan hijab, lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan."},{id:"tpl_5",label:"Template 5: Tambahkan subjek manusia realistis yang mengenakan hijab...",text:"Tambahkan subjek manusia realistis yang mengenakan hijab, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."}],be=["Auto (Smart Detection) mengikuti gambar unggahan","Laki-Laki","Perempuan"],fe=["Auto (Smart Detection) mengikuti gambar unggahan",...Array.from({length:50},(u,a)=>`${a+1} tahun`)],ye=["Auto (Smart Detection)","Asia","Eropa","Afrika","Timur Tengah","Asia Selatan","Asia Timur","Asia Tenggara","Pasifik / Oseania","Amerika Latin"],Ae=["Auto (Smart Detection)","Raw Photography Realism","Realistic","Photorealistic","Ultra Photorealistic","Live-Action","Custom"],Ba=[{name:"Auto (Smart Detection)",description:"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."},{name:"Stylized 3D Cartoon",description:"Gaya kartun 3D yang sangat stilasi dengan warna berani dan proporsi ekspresif."},{name:"Pixar-style Lighting",description:"Pencahayaan hangat dan emosional khas film Pixar yang memberikan kedalaman pada karakter."},{name:"Nickelodeon Animation Style",description:"Gaya animasi enerjik dan berwarna cerah khas Nickelodeon."},{name:"SpongeBob Cinematic 3D",description:"Visual 3D sinematik bergaya dunia bawah laut SpongeBob yang ceria."},{name:"Soft Clay Render",description:"Render dengan tekstur tanah liat lembut yang memberikan kesan fisik dan taktil."},{name:"Smooth Plastic Material",description:"Material plastik halus dan mengkilap seperti mainan modern yang bersih."},{name:"Vibrant Pastel Colors",description:"Palet warna pastel yang cerah dan hidup untuk suasana yang positif."},{name:"Global Illumination",description:"Teknik pencahayaan realistis yang memantulkan cahaya di seluruh permukaan untuk kedalaman maksimal."},{name:"Clean 3D Render",description:"Hasil render 3D yang sangat bersih, tajam, dan bebas dari noise visual."},{name:"Whimsical Cartoon World",description:"Dunia kartun yang penuh keajaiban, bentuk imajinatif, dan atmosfer fantasi."},{name:"Raw Photography Realism",description:"Realisme murni seperti foto mentah kamera DSLR tanpa efek sinematik, menampilkan pori kulit, noise sensor, dan cahaya alami apa adanya."},{name:"True Camera Capture Realism",description:"Meniru hasil kamera sungguhan dengan parameter fotografi realistis seperti ISO, aperture, shutter, dan depth of field alami."},{name:"Documentary Photo Realism",description:"Gaya foto dokumenter yang jujur dan natural, komposisi tidak dibuat-buat seperti momen kehidupan nyata."},{name:"Natural Light Photorealism",description:"Meniru cahaya alami dengan warna kulit akurat dan bayangan lembut tanpa efek artistik."},{name:"Documentary Style",description:"Tampilan realistis dan informatif yang fokus pada keaslian visual."},{name:"Natural Lighting",description:"Pencahayaan alami tanpa dramatisasi atau efek berlebihan."},{name:"Realistic",description:"Tampilan natural yang mendekati dunia nyata."},{name:"Photorealistic",description:"Sangat realistis seperti hasil foto kamera modern dengan kualitas bersih."},{name:"Ultra Photorealistic Live-Action",description:"Detail sangat tajam dan bersih, masih realistis namun terasa sedikit dipoles."},{name:"Portrait Photography",description:"Fokus pada wajah dengan latar blur profesional dan pencahayaan kamera."},{name:"Photoreal Cinematic Character Study",description:"Studi karakter sangat realistis dengan sentuhan visual sinematik."},{name:"Live-Action Cinematic Photorealism",description:"Perpaduan realisme dunia nyata dengan mood dan atmosfer sinematik."},{name:"Hollywood Movie Still Realism",description:"Tampilan seperti cuplikan film Hollywood dengan color grading dramatis."},{name:"Cinematic Live-Action Portrait",description:"Potret manusia nyata dengan gaya sinema dan pencahayaan artistik."},{name:"Film Still",description:"Visual menyerupai satu frame adegan film."},{name:"Cinematic",description:"Nuansa film dengan framing dan warna dramatis."},{name:"Ultra Cinematic",description:"Cinematic tingkat tinggi dengan depth dan kontras kuat."},{name:"IMAX Look",description:"Visual megah berskala besar dengan detail tinggi."},{name:"Dramatic Lighting",description:"Pencahayaan kontras tinggi untuk emosi kuat dan tegas."},{name:"Moody Lighting",description:"Cahaya redup bernuansa emosional dan misterius."},{name:"Dark & Moody",description:"Nuansa gelap dengan atmosfer dramatis dan intens."},{name:"Hyper-Realistic",description:"Detail ekstrem dengan tekstur dan ketajaman sangat tinggi."},{name:"Hyper-Real Live-Action Character",description:"Sangat detail dan presisi namun sering terasa terlalu sempurna dan kurang alami."},{name:"Toy-like Characters",description:"Karakter dengan proporsi dan material seperti mainan koleksi."},{name:"Semi-Realistic 3D",description:"Perpaduan realisme dan gaya 3D yang masih terasa imut."},{name:"Toy Photography",description:"Foto realistis mainan dengan depth of field dan pencahayaan profesional."},{name:"Miniature World",description:"Dunia mini berskala kecil dengan detail tinggi dan perspektif makro."},{name:"Toy Diorama / Miniature World",description:"Adegan mini seperti diorama mainan dengan detail artistik."},{name:"Plastic Toy Cinematic",description:"Mainan plastik dengan sudut kamera dan pencahayaan sinematik."},{name:"Miniature / Diorama Style",description:"Tampilan dunia makro seperti diorama miniatur dengan efek tilt-shift dan detail kecil yang menakjubkan."},{name:"Hyper-Realistic Miniature / Diorama Action Style",description:"Diorama miniatur dengan detail hyper-realistic dan elemen aksi yang dinamis, memberikan kesan adegan film berskala kecil."},{name:"Miniature Diorama / LEGO Macro Photography",description:"Gaya fotografi makro dengan fokus tajam pada detail balok LEGO, bokeh latar belakang artistik, dan pencahayaan studio yang menonjolkan tekstur plastik serta skala miniatur."},{name:"Low Poly 3D",description:"Bentuk geometris sederhana dan minim detail."},{name:"Roblox-style 3D",description:"Proporsi kotak dengan wajah simpel khas game Roblox."},{name:"Stylized Roblox 3D",description:"Versi Roblox lebih halus dengan pencahayaan modern."},{name:"LEGO Style",description:"Karakter dan objek berbentuk balok LEGO berwarna cerah."},{name:"LEGO Diorama",description:"Adegan LEGO seperti miniatur pameran artistik."},{name:"LEGO Stop-Motion",description:"Tampilan LEGO dengan nuansa animasi stop-motion."},{name:"LEGO Cinematic Superhero",description:"Visual pahlawan super dalam dunia LEGO dengan pencahayaan dramatis, efek kekuatan yang bercahaya, dan komposisi epik."},{name:"LEGO Movie Action Style",description:"Gaya aksi dinamis khas film LEGO dengan motion blur, efek ledakan balok yang intens, dan sudut kamera sinematik."},{name:"LEGO Unreal Engine Cinematic",description:"Render LEGO ultra-detail menggunakan Unreal Engine, menampilkan pantulan cahaya realistis pada plastik dan atmosfer film berkualitas tinggi."},{name:"LEGO Blockbuster VFX",description:"Visual blockbuster dengan efek khusus (VFX) spektakuler seperti api, asap, dan partikel yang terintegrasi dalam estetika balok LEGO."},{name:"LEGO Epic Battle Scene",description:"Adegan pertempuran kolosal LEGO dengan ribuan minifigure, lingkungan yang hancur secara artistik, dan skala sinematik yang luar biasa."},{name:"Pixar-style Animation",description:"Animasi 3D ekspresif ala film keluarga Pixar."},{name:"Storybook 3D",description:"Visual 3D bernuansa buku cerita anak."},{name:"Whimsical Children Illustration",description:"Ilustrasi ceria, imajinatif, dan penuh fantasi anak-anak."},{name:"Cute Kawaii Style",description:"Estetika Kawaii yang sangat imut dengan elemen-elemen menggemaskan."},{name:"Chibi 3D",description:"Proporsi kecil dengan kepala besar, sangat imut."},{name:"Kawaii Style",description:"Visual super lucu dengan bentuk bulat dan ramah anak."},{name:"Cute 3D / Kawaii",description:"Karakter 3D imut dengan warna lembut."},{name:"Cute Toy Style",description:"Karakter seperti mainan dengan tekstur plastik halus."},{name:"Kids Fantasy 3D",description:"Gaya 3D fantasi ceria dan aman untuk anak."},{name:"Dreamy Pastel Fantasy",description:"Dunia fantasi dengan palet warna pastel yang lembut dan suasana seperti mimpi."},{name:"Pastel Soft Lighting",description:"Cahaya lembut bernuansa pastel yang hangat dan dreamy."},{name:"Dreamy Soft Lighting",description:"Pencahayaan halus dengan suasana seperti mimpi."},{name:"Pastel Fantasy",description:"Warna pastel lembut dengan nuansa fantasi."},{name:"Candy World",description:"Dunia fantasi manis seperti permen."},{name:"Candyland / Marshmallow World",description:"Lingkungan imajinatif penuh marshmallow dan warna cerah."},{name:"Candyland 3D Style",description:"Dunia 3D bertema permen dengan bentuk imut dan manis."},{name:"Pastel Candy Commercial Style",description:"Gaya visual seperti iklan permen anak-anak."},{name:"Hello Kitty Dessert World",description:"Dunia dessert pastel bertema Hello Kitty yang ceria."},{name:"Origami Diorama Style",description:"Visual adegan fantasi yang seluruh elemennya terbuat dari lipatan kertas origami presisi dengan tekstur kertas nyata."},{name:"Paper Craft Portrait",description:"Seni potret yang dibuat dari lapisan potongan kertas dan lipatan origami dengan efek kedalaman 3D."},{name:"Papercraft Origami",description:"Visual bergaya kerajinan kertas dengan lipatan origami yang presisi dan tekstur kertas yang nyata."},{name:"Origami Low-Poly",description:"Bentuk geometris rendah (low-poly) yang dipadukan dengan teknik lipat origami untuk tampilan artistik minimalis."},{name:"Pastel Origami Fantasy",description:"Dunia fantasi origami dengan warna-warna pastel lembut dan pencahayaan dreamy."},{name:"Plush Felt Texture",description:"Tekstur kain felt yang lembut dan empuk pada seluruh lingkungan."},{name:"Soft Fuzzy Material",description:"Material berbulu halus yang memberikan kesan hangat dan nyaman."},{name:"Kawaii Plush 3D Render",description:"Karakter 3D seperti boneka plush berbulu dan lembut."},{name:"Cute Felt Toy Aesthetic",description:"Tampilan seperti mainan kain felt buatan tangan."},{name:"Soft Toy Food Diorama",description:"Makanan yang divisualkan seperti boneka empuk."},{name:"Claymation Style",description:"Tampilan seperti animasi plastisin stop-motion."},{name:"Crochet / Knitted / Amigurumi Style",description:"Semua objek tampak dirajut dari benang."},{name:"Amigurumi 3D Style",description:"Boneka rajut imut dalam bentuk 3D."},{name:"3D Yarn World / Yarn Render",description:"Dunia 3D dengan tekstur benang di seluruh objek."},{name:"Clay + Knit Hybrid",description:"Perpaduan clay dan rajutan dengan tampilan boneka lembut."},{name:"Cozy Pastel Toy Cottage",description:"Rumah mini pastel seperti mainan rajut yang hangat."},{name:"Knitted Miniature World",description:"Dunia mini yang seluruh lingkungannya terlihat dirajut."},{name:"Crochet Dollhouse Render",description:"Rumah boneka mini berbahan rajutan crochet."},{name:"Cute Handmade Toy Aesthetic",description:"Estetika mainan buatan tangan yang hangat dan lucu."},{name:"Pastel Yarn Diorama",description:"Diorama kecil bernuansa pastel dengan tekstur benang."},{name:"Cute Pastel Diorama",description:"Diorama mini pastel dengan dunia fantasi yang sangat imut."}];function Te(u,a){return ke(u,a)}const Da=[{id:"AUTO",label:"✨ Auto (Adaptive AI)",description:"AI menganalisis foto secara individual, mendeteksi exposure, dynamic range, white balance, skin tone, dan menentukan treatment warna paling optimal."},{id:"SELECT_STYLE",label:"🎯 Select Style (Target Visual)",description:"Pilih arah visual / style kurasi. AI menghitung penyesuaian tonal & warna secara adaptif per-foto agar selaras dengan target style."},{id:"CUSTOM_STYLE",label:"⚙️ Custom Style (Parameter Pengguna)",description:"Atur warmth, tint, contrast, highlights, shadows, vibrance, dan tone bayangan/highlight secara presisi dengan koreksi adaptif AI."}];Da.AUTO="AUTO";Da.SELECT_STYLE="SELECT_STYLE";Da.CUSTOM_STYLE="CUSTOM_STYLE";const Va=[{category:"NATURAL / REALISTIC",icon:"🌿",styles:[{name:"Natural Vibrant",description:"Warna natural tetapi lebih hidup dan segar, dengan vibrance terarah dan color separation yang tetap realistis tanpa oversaturation."},{name:"Natural Clean",description:"Tampilan bersih, seimbang, dan realistis dengan white balance netral, contrast moderat, dan warna yang natural."},{name:"Natural DSLR",description:"Karakter foto DSLR modern dengan tonal kaya, detail natural, warna realistis, depth yang baik, dan highlight terkontrol."},{name:"Natural Film",description:"Tampilan natural dengan sentuhan film ringan, tonal lembut, highlight smooth, dan saturation terkontrol."},{name:"True to Life",description:"Memprioritaskan reproduksi warna yang paling mendekati kondisi asli dengan koreksi minimal dan akurat."},{name:"Soft Natural",description:"Tampilan natural yang lembut dengan contrast rendah hingga sedang, highlight halus, shadow tidak terlalu dalam, dan warna yang nyaman."}]},{category:"WARM / BRIGHT",icon:"☀️",styles:[{name:"Warm Cinematic",description:"Nuansa hangat dan cinematic dengan highlight warm, shadow sedikit lebih dalam, dan color separation elegan."},{name:"Golden Hour",description:"Karakter cahaya keemasan seperti golden hour dengan warmth adaptif, highlight keemasan, dan tonal hangat yang natural."},{name:"Sun-Kissed",description:"Kesan terkena cahaya matahari lembut dengan warmth ringan, highlight bercahaya, dan skin tone tetap natural."},{name:"Bright & Airy",description:"Tampilan terang, ringan, bersih, dan airy dengan shadow terangkat, contrast lembut, dan highlight tetap terkendali."},{name:"Warm Lifestyle",description:"Tampilan hangat, ramah, dan natural untuk foto lifestyle dengan warmth moderat dan warna kulit yang nyaman."},{name:"Soft Golden",description:"Nuansa keemasan yang lembut dengan highlight warm dan contrast rendah hingga sedang."}]},{category:"CINEMATIC",icon:"🎬",styles:[{name:"Moody Cinematic",description:"Atmosfer cinematic yang lebih dalam dengan shadow kaya, contrast terkontrol, saturation sedikit lebih tenang, dan mood dramatis."},{name:"Modern Cinematic",description:"Cinematic modern dengan tonal bersih, contrast elegan, warna terkontrol, dan color separation halus."},{name:"Teal & Orange Cinematic",description:"Separation cyan/teal pada area cool dan orange pada area warm secara selektif dengan perlindungan warna kulit."},{name:"Cinematic Contrast",description:"Menonjolkan depth melalui contrast lebih kuat, black lebih tegas, dan highlight tetap terjaga."},{name:"Dark Cinematic",description:"Cinematic dengan overall exposure dan shadow lebih rendah namun tetap mempertahankan detail penting pada area gelap."},{name:"Soft Cinematic",description:"Cinematic yang halus dengan contrast lembut, highlight smooth, shadow tidak crushed, dan warna tetap realistis."}]},{category:"VIBRANT / COLORFUL",icon:"🌈",styles:[{name:"Vivid Color",description:"Meningkatkan vibrance dan saturation secara selektif untuk warna yang lebih hidup tanpa oversaturation."},{name:"Rich Color",description:"Memberikan warna yang lebih kaya, dalam, dan memiliki depth dengan saturation yang dikontrol adaptif."},{name:"Color Pop",description:"Menonjolkan warna utama secara selektif sambil menjaga warna lain tetap seimbang."},{name:"Fresh Vibrant",description:"Tampilan segar, cerah, youthful, dan colorful dengan fokus pada vibrance dan clean color separation."},{name:"Deep Color",description:"Menghasilkan warna lebih pekat dan kaya dengan tonal depth lebih kuat tanpa membuat warna terlihat neon."}]},{category:"CLEAN / MODERN",icon:"✨",styles:[{name:"Clean & Fresh",description:"Warna bersih, segar, netral, dan modern dengan contrast moderat serta saturation terkontrol."},{name:"Modern Clean",description:"Tampilan modern dan polished dengan white balance akurat, tonal rapi, dan warna tidak berlebihan."},{name:"Crisp Detail",description:"Menonjolkan struktur tonal, local contrast, dan detail secara ringan tanpa menghasilkan sharpening berlebihan."},{name:"High Key Clean",description:"Tampilan dominan terang dengan shadow ringan, highlight bersih, dan contrast rendah hingga sedang."},{name:"Minimal Neutral",description:"Color grading sangat minimal dengan warna netral dan tonal natural untuk hasil profesional dan understated."}]},{category:"FILM / ARTISTIC",icon:"🎞️",styles:[{name:"Film Look",description:"Karakter film halus melalui tonal curve lembut, highlight roll-off, saturation terkontrol, dan color palette harmonis."},{name:"Vintage Film",description:"Nuansa film vintage dengan warna sedikit muted, contrast lembut, dan karakter warm/faded yang tetap mempertahankan detail."},{name:"Analog Film",description:"Karakter analog dengan tonal lembut, color response organik, saturation moderat, dan warna yang tidak terlalu digital."},{name:"Pastel Film",description:"Warna lebih lembut dan pastel dengan saturation lebih rendah, highlight airy, dan contrast ringan."},{name:"Faded Film",description:"Efek faded dengan black sedikit terangkat, contrast lembut, dan warna sedikit desaturated."},{name:"Retro Color",description:"Color palette bernuansa retro dengan karakter warna klasik tetap mempertahankan tonal dan detail foto."}]},{category:"DRAMATIC",icon:"🎭",styles:[{name:"Dark & Moody",description:"Nuansa gelap, atmospheric, dan emosional dengan shadow lebih dalam serta warna yang lebih subdued."},{name:"Dramatic Contrast",description:"Menonjolkan perbedaan terang dan gelap dengan contrast kuat namun tetap menjaga highlight dan shadow penting."},{name:"Deep Shadow",description:"Memprioritaskan depth melalui shadow lebih kaya dan pekat tanpa crushing detail penting."},{name:"Low Key Cinematic",description:"Overall image lebih gelap dengan fokus cahaya pada area utama, shadow dalam, dan karakter cinematic yang kuat."}]}],Ua=[...Va.flatMap(u=>u.styles.map(a=>({...a,category:u.category,categoryIcon:u.icon}))),{name:"Custom Style",description:"Style yang ditentukan pengguna melalui parameter color grading dengan adaptive correction berdasarkan kondisi masing-masing foto.",category:"CUSTOM",categoryIcon:"⚙️"}],Ee=[{value:0,label:"0% — Original",description:"Tampilan foto asli tanpa grading"},{value:25,label:"25% — Very Subtle",description:"Sentuhan sangat halus dan tipis"},{value:50,label:"50% — Balanced (Default)",description:"Keseimbangan optimal antara gaya & kealamian foto"},{value:75,label:"75% — Strong",description:"Karakter style tegas dan terasa"},{value:100,label:"100% — Full Style",description:"Penerapan style penuh dengan proteksi batas"}],Ca={mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,protections:{highlightProtection:!0,shadowProtection:!0,skinToneProtection:!0,oversaturationProtection:!0,clippingProtection:!0,naturalColorProtection:!0},custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}},ve=[{label:"Neutral (Alami)",value:"Neutral",color:"#64748b"},{label:"Cool Blue (Sinematik Dingin)",value:"Cool Blue",color:"#38bdf8"},{label:"Deep Teal (Teal & Orange)",value:"Deep Teal",color:"#14b8a6"},{label:"Warm Amber (Keemasan Hangat)",value:"Warm Amber",color:"#f59e0b"},{label:"Slate Gray (Matte Film)",value:"Slate Gray",color:"#94a3b8"}],Se=[{label:"Neutral (Alami)",value:"Neutral",color:"#e2e8f0"},{label:"Soft Gold (Golden Hour)",value:"Soft Gold",color:"#fde047"},{label:"Clean White (Modern Airy)",value:"Clean White",color:"#ffffff"},{label:"Warm Amber (Sunset Warmth)",value:"Warm Amber",color:"#fb923c"},{label:"Soft Rose (Pastel Aesthetic)",value:"Soft Rose",color:"#f472b6"}];function Qa(u=Ca,a=null){const e={...Ca,...u},i=e.mode||"AUTO",r=typeof e.intensity=="number"?e.intensity:50,s=[];if(s.push("STRICT PRESERVATION DIRECTIVE (ORIGINAL PHOTO IS SOURCE OF TRUTH): DO NOT regenerate the image. DO NOT use generative fill. DO NOT alter subject facial identity, face features, body structure, clothing, hair, pose, objects, or composition. Retain original source image geometry and perspective. Apply NON-DESTRUCTIVE AI COLOR GRADING and TONAL ENHANCEMENT ONLY."),i==="AUTO")s.push(`COLOUR GRADING MODE: AUTO ADAPTIVE AI. Individually assess the source photo's dynamic range, exposure, highlight roll-off, shadow depth, white balance, and skin tone. Apply intelligent, adaptive, photo-specific color correction and tonal harmonization tailored to this individual image's characteristics. Intensity: ${r}%.`);else if(i==="SELECT_STYLE"){const o=Ua.find(p=>p.name===e.selectedStyle)||{name:e.selectedStyle,description:"Visual style direction"},c=sa(o.description);s.push(`COLOUR GRADING STYLE TARGET: "${o.name}" (${o.category}). Description: ${c}. Adaptive execution: Use this style as a visual target/color direction. Calculate per-photo adaptive adjustments rather than static numeric presets. Intensity: ${r}%.`)}else if(i==="CUSTOM_STYLE"){const o=e.custom||{};s.push(`COLOUR GRADING CUSTOM SPECIFICATION: Warmth: ${o.warmth>0?"+":""}${o.warmth}, Tint: ${o.tint>0?"+":""}${o.tint}, Contrast: ${o.contrast>0?"+":""}${o.contrast}, Highlights: ${o.highlights>0?"+":""}${o.highlights}, Shadows: ${o.shadows>0?"+":""}${o.shadows}, Vibrance: ${o.vibrance>0?"+":""}${o.vibrance}, Saturation: ${o.saturation>0?"+":""}${o.saturation}, Clarity: ${o.clarity>0?"+":""}${o.clarity}, Shadow Tone: ${o.shadowTone||"Neutral"}, Highlight Tone: ${o.highlightTone||"Neutral"}. AI Adaptive Correction: Balance custom adjustments against the actual image telemetry. Intensity: ${r}%.`)}const n=e.protections||{},t=[];return n.skinToneProtection!==!1&&t.push("Natural Skin Tone Protection (prioritize healthy, authentic skin tones; strictly prevent unnatural orange/red/magenta/gray casts)"),n.highlightProtection!==!1&&t.push("Highlight Protection (prevent blown-out clipping, preserve highlight texture and roll-off)"),n.shadowProtection!==!1&&t.push("Shadow Protection (prevent crushed blacks, preserve low-end shadow detail)"),n.oversaturationProtection!==!1&&t.push("Oversaturation & Gamut Protection (maintain natural color boundaries)"),n.clippingProtection!==!1&&t.push("Dynamic Range Clipping Protection (keep RGB channels within broadcast-safe gamut)"),n.naturalColorProtection!==!1&&t.push("Natural Color Harmony (preserve realism of sky, foliage, and environmental textures)"),t.length>0&&s.push(`INTELLIGENT PROTECTIONS ACTIVE: ${t.join("; ")}.`),s.push("EXECUTION PRIORITY: NATURAL RESULT > STYLE ACCURACY > STRONG EFFECT. If the original photo already has optimal exposure or color, apply minimal fine-tuning. If heavily skewed, apply measured adaptive correction without artificial grading artifacts."),s.join(`

`)}function Ie(u){if(!u)return{brightness:128,contrast:50,colorTemp:"neutral",warmthScore:0,saturation:50,hasSkinTone:!1,skinTonePercentage:0,highlightClipping:0,shadowCrushing:0,dynamicRange:"normal",qualityScore:85};u.getContext("2d");const a=Math.min(u.width,320),e=Math.min(u.height,240),i=document.createElement("canvas");i.width=a,i.height=e;const r=i.getContext("2d");r.drawImage(u,0,0,a,e);const n=r.getImageData(0,0,a,e).data,t=a*e;let o=0,c=0,p=0,h=0,l=0,b=0,g=0,m=0;for(let B=0;B<n.length;B+=4){const T=n[B],j=n[B+1],w=n[B+2];o+=T,c+=j,p+=w;const G=.299*T+.587*j+.114*w;h+=G,G>242&&b++,G<15&&g++;const L=Math.max(T,j,w),H=Math.min(T,j,w),P=L===0?0:(L-H)/L;m+=P,T>j&&j>w&&T-j>=15&&j-w>=10&&G>40&&G<235&&l++}const d=o/t,k=c/t,f=p/t,R=h/t,O=m/t*100,A=d-f;let C="neutral";A>12?C="warm":A<-12&&(C="cool");const I=l/t*100,v=b/t*100,S=g/t*100;return i.width=0,i.height=0,{brightness:Math.round(R),contrast:Math.round(Math.abs(R-128)*.8+40),colorTemp:C,warmthScore:Math.round(A),avgR:Math.round(d),avgG:Math.round(k),avgB:Math.round(f),saturation:Math.round(O),hasSkinTone:I>1.2,skinTonePercentage:Number(I.toFixed(1)),highlightClipping:Number(v.toFixed(1)),shadowCrushing:Number(S.toFixed(1)),dynamicRange:v>5||S>5?"tinggi (perlu proteksi)":"seimbang",qualityScore:Math.max(50,Math.min(98,Math.round(100-v*2-S*2)))}}function Re(u,a=Ca){const e={...Ca,...a},i=e.mode||"AUTO",r=(typeof e.intensity=="number"?e.intensity:50)/100,s=e.protections||{};let n=0,t=0,o=0,c=0,p=0,h=0,l=0,b=0,g=0,m=e.selectedStyle||"Natural Vibrant";if(i==="AUTO")u.brightness<100?(n+=(115-u.brightness)/100,c+=22):u.brightness>165&&(n-=(u.brightness-150)/120,o-=25),u.colorTemp==="warm"&&u.warmthScore>18?p-=Math.min(18,Math.round(u.warmthScore*.5)):u.colorTemp==="cool"&&u.warmthScore<-18&&(p+=Math.min(18,Math.round(Math.abs(u.warmthScore)*.5))),t+=12,l+=15,m=u.hasSkinTone?"Natural Clean":"Natural Vibrant";else if(i==="SELECT_STYLE"){m=e.selectedStyle||"Natural Vibrant";const f=m.toLowerCase();typeof u.brightness=="number"&&(u.brightness<110?n+=Number(((120-u.brightness)/120).toFixed(2)):u.brightness>155&&(n-=Number(((u.brightness-150)/140).toFixed(2))));const R=u.colorTemp==="warm"||typeof u.warmthScore=="number"&&u.warmthScore>10,O=u.colorTemp==="cool"||typeof u.warmthScore=="number"&&u.warmthScore<-10;f.includes("warm")||f.includes("golden")||f.includes("sun-kissed")?(p+=R?10:O?32:22,o+=8,c+=12,l+=12):f.includes("cinematic")||f.includes("teal")?f.includes("teal")?(p+=8,h-=6,t+=22,c-=8,o+=10,l+=16):f.includes("dark")||f.includes("moody")?(t+=20,c-=15,o-=10,b-=8,l+=6):(t+=16,o+=6,c+=10,l+=14):f.includes("film")||f.includes("vintage")||f.includes("analog")||f.includes("retro")?(c+=18,o-=12,t-=5,p+=8,b-=6,l+=8):f.includes("vivid")||f.includes("color pop")||f.includes("vibrant")?(l+=28,t+=15,b+=u.saturation>60?4:14):f.includes("clean")||f.includes("crisp")||f.includes("airy")?(u.colorTemp!=="neutral"&&(p-=u.warmthScore*.3),n+=f.includes("airy")?.25:.08,o+=10,c+=14,t+=12,l+=10):f.includes("dramatic")?(t+=32,c-=18,o+=14,l+=10):(l+=15,t+=10,c+=8)}else if(i==="CUSTOM_STYLE"){const f=e.custom||{};m="Custom Style",p=(f.warmth||0)*.45,h=(f.tint||0)*.35,t=(f.contrast||0)*.4,o=(f.highlights||0)*.5,c=(f.shadows||0)*.5,b=(f.saturation||0)*.4,l=(f.vibrance||0)*.45,g=(f.clarity||0)*.35}const d=[];return s.highlightProtection!==!1&&u.highlightClipping>3&&(o-=Math.round(u.highlightClipping*5),n=Math.min(n,.05),d.push("Highlight Protection aktif: Mencegah highlight blown-out & menjaga detail tekstur putih.")),s.shadowProtection!==!1&&(u.shadowCrushing>3||c<0)&&(c=Math.max(c,5),d.push("Shadow Protection aktif: Mencegah black crushing & mempertahankan detail bayangan.")),s.skinToneProtection!==!1&&u.hasSkinTone&&(p=Math.max(-15,Math.min(18,p)),b=Math.max(-15,Math.min(12,b)),d.push("Skin Tone Protection aktif: Mempertahankan keaslian & rona alami warna kulit subjek.")),s.oversaturationProtection!==!1&&u.saturation>55&&(l=Math.min(l,12),b=Math.min(b,6),d.push("Oversaturation Protection aktif: Menahan saturasi dalam batas gamut alami foto.")),{exposure:Number((n*r).toFixed(2)),contrast:Math.round(t*r),highlights:Math.round(o*r),shadows:Math.round(c*r),warmth:Math.round(p*r),temperature:Math.round(p*r),tint:Math.round(h*r),vibrance:Math.round(l*r),saturation:Math.round(b*r),clarity:Math.round(g*r),intensityPercent:Math.round(r*100),targetStyle:m,protectionLogs:d}}const ia={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class Oe{constructor(a=[]){this.catalog=a,this.localEngine=new ge(a),this.status=ia.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){V.getApiKey()||(this.status=ia.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!V.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const i=e.indexOf("{"),r=e.lastIndexOf("}");if(i!==-1&&r>i){const t=e.substring(i,r+1);try{return JSON.parse(t)}catch{}}const s=e.indexOf("["),n=e.lastIndexOf("]");if(s!==-1&&n>s){const t=e.substring(s,n+1);try{return JSON.parse(t)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var c;const i=(a||V.getApiKey()).trim(),r=e||V.getModel()||"gemini-2.0-flash";if(!i)return this.status=ia.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:ia.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const n=[r.trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((p,h,l)=>p&&l.indexOf(p)===h&&!p.includes("1.5-pro")&&!p.includes("2.5-pro")&&(p==="gemini-3.5-flash-lite"||!p.includes("3.5")&&!p.includes("3.8")));let t="",o=null;for(const p of n)try{const h=`https://generativelanguage.googleapis.com/v1beta/models/${p}?key=${encodeURIComponent(i)}`,l=await fetch(h,{method:"GET",headers:{"Content-Type":"application/json"}});if(l.ok){o=p;break}else{if(t=((c=(await l.json().catch(()=>({}))).error)==null?void 0:c.message)||`HTTP ${l.status}: ${l.statusText}`,l.status===404)continue;if(l.status===400||l.status===403)break}}catch(h){t=h.message||"Koneksi jaringan gagal"}if(o)return this.status=ia.CONNECTED,this.lastError=null,o!==r&&V.setModel(o),{success:!0,status:ia.CONNECTED,message:`Berhasil terhubung ke model ${o}!`};try{const p=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(i)}`,h=await fetch(p);if(h.ok){const b=((await h.json().catch(()=>({}))).models||[]).filter(m=>{var d;return(d=m.supportedGenerationMethods)==null?void 0:d.includes("generateContent")}).map(m=>m.name.replace(/^models\//,"")).filter(m=>!m.includes("1.5-pro")&&!m.includes("2.5-pro")&&!m.includes("3.5")&&!m.includes("3.8")),g=b.find(m=>m.includes("2.0-flash"))||b.find(m=>m.includes("1.5-flash"))||b[0];if(g)return V.setModel(g),this.status=ia.CONNECTED,this.lastError=null,{success:!0,status:ia.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${g})!`}}}catch{}return this.status=ia.FAILED,this.lastError=t||"Koneksi gagal",{success:!1,status:ia.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const i=V.getApiKey().trim(),r=V.getModel()||"gemini-2.0-flash";if(!i){const t=this.localEngine.analyze(a,e),o=sa(t.optimalPrompt);return{...t,optimalPrompt:o,englishBasePrompt:sa(t.cleanText),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."}}try{const t=await this.callGeminiAPI(a,i,r);if(t){const o=this.mergeAiWithCatalog(t,a,e);this.status=ia.CONNECTED,this.lastError=null;const c=V.getModel()||r;return{...o,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${c}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(t){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",t),this.lastError=t.message}const s=this.localEngine.analyze(a,e),n=sa(s.optimalPrompt);return{...s,optimalPrompt:n,englishBasePrompt:sa(s.cleanText),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,i){const s=[(i||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((t,o,c)=>t&&c.indexOf(t)===o&&!t.includes("1.5-pro")&&!t.includes("2.5-pro")&&(t==="gemini-3.5-flash-lite"||!t.includes("3.5")&&!t.includes("3.8")));let n=null;for(const t of s)try{const o=await this.executeGenerateContent(a,e,t);if(o)return t!==i&&V.setModel(t),o}catch(o){n=o,console.warn(`Model ${t} tidak dapat digunakan (${o.message}), mencoba model alternatif...`);continue}throw n||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,i){var p,h,l,b,g;const r=`https://generativelanguage.googleapis.com/v1beta/models/${i}:generateContent?key=${encodeURIComponent(e)}`,n={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
Tugas Anda: Menganalisis SELURUH isi INPUT PROMPT pengguna secara semantik dan menemukan/merekomendasikan notasi visual shorthand AI yang paling tepat, profesional, dan relevan.

PRINSIP UTAMA: PENCARIAN SHORTHAND HARUS TERBUKA DAN TIDAK TERBATAS.
- JANGAN MEMBATASI pencarian hanya pada kategori, subkategori, daftar istilah, atau topik tertentu.
- SETIAP INPUT PENGGUNA HARUS DAPAT DIPROSES DAN DICARI, apa pun topik, objek, gaya seni, konsep visual, komposisi, rasio/perluasan kanvas (outpainting / uncrop / expand canvas), aktivitas, profesi, suasana, atau istilah baru yang digunakan.
- Analisis seluruh makna dan konteks prompt, bukan hanya pencocokan kata kaku.
- Tetap temukan shorthand untuk istilah atau konsep baru yang belum terdapat dalam daftar shorthand lokal.
- Tidak memberikan batasan pencarian berdasarkan kategori aset.
- Tidak memblokir pencarian hanya karena istilah tidak dikenal oleh katalog shorthand lokal.
- Tampilkan HANYA shorthand yang benar-benar relevan dengan fungsi atau konsep dalam prompt.

PANDUAN SHORTHAND & NOTASI VISUAL:
1. Awali setiap shorthand dengan garis miring "/" (contoh: /outpaint, /expandcanvas, /facelock, /hairlock, /curvy, /enhance, /sharpen, /cyberpunk, /surgeon, /macrolens, /bokeh, dsb.).
2. Jika konsep ada di katalog umum aplikasi (misal: /facelock, /hairlock, /backgroundlock, /outfitlock, /bodylock, /outfit, /bgremove, /bgreplace, /headwear-remove, /enhance, /sharpen, /highresolution, /ar 9:16, /ar 16:9, /ar 1:1, /fullbody, /cinematic, /rawphoto, /colorgrade, /bodyvoluptuous, /curvy, /fullfigured, /plussize, /voluptuous, /handperfect, /hands, /handanatomy, /fingerperfect, /handdetail, /handnatural, /outpaint), prioritaskan kode tersebut.
3. JIKA user memasukkan kata kunci / konsep baru di luar katalog dasar (contoh: "memperluas foto" -> /outpaint, "fotografer tokyo cyberpunk" -> /cyberpunk, "dokter bedah" -> /surgeon, "lensa makro" -> /macrolens, dsb.), Anda WAJIB membuat dan merekomendasikan notasi shorthand yang paling profesional, presisi, dan sesuai standar industri visual AI.
4. Struktur Rekomendasi:
   - primaryShorthands (Prioritas 'WAJIB', isPrimary: true, checked: true): Rekomendasi utama (1 atau 2 shorthand paling vital yang langsung terpasang di Prompt Optimal). Beri label source: "ONLINE".
   - relatedShorthands (Prioritas 'DISARANKAN', isPrimary: false, checked: false): Alternatif shorthand relevan lainnya (2 sampai 5 pilihan alternatif). Beri label source: "ONLINE".

Jawab HANYA dalam format JSON valid tanpa markdown formatting:
{
  "intent": {
    "primaryAction": "NAMA_AKSI_SEMANTIK",
    "primaryTarget": "Target visual",
    "summary": "Ringkasan maksud instruksi visual user dalam bahasa Indonesia",
    "priority": "HIGH" | "MEDIUM" | "LOW",
    "category": "BODY_POSE" | "FACE_IDENTITY" | "HAIR" | "HEADWEAR" | "OUTFIT" | "BACKGROUND" | "LIGHTING" | "IMAGE_QUALITY" | "COLOR_TONE" | "CANVAS_RATIO" | "TRANSPARENCY" | "OBJECT_EDITING" | "STYLE_EFFECT" | "CAMERA_PHOTO"
  },
  "editAreas": [
    {
      "entity": "KATEGORI_ENTITY",
      "label": "Nama Area",
      "action": "ACTION_CODE",
      "description": "Deskripsi perubahan",
      "shorthand": "/shorthandutama"
    }
  ],
  "lockedAreas": [],
  "primaryShorthands": [
    {
      "code": "/shorthandutama",
      "name": "Nama Shorthand Utama",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi shorthand utama",
      "priority": "WAJIB",
      "reason": "Alasan rekomendasi utama",
      "isPrimary": true,
      "checked": true
    }
  ],
  "relatedShorthands": [
    {
      "code": "/alternatif1",
      "name": "Nama Alternatif",
      "category": "KATEGORI",
      "target": "TARGET",
      "description": "Penjelasan fungsi alternatif",
      "priority": "DISARANKAN",
      "reason": "Alternatif untuk variasi kebutuhan",
      "isPrimary": false,
      "checked": false
    }
  ],
  "installedShorthands": ["/shorthandutama"],
  "optimalPrompt": "Natural, descriptive, AI-readable ENGLISH prompt optimized for generative image AI (Midjourney/SDXL/DALL-E), preserving all user intent, subjects, and visual attributes, followed by installed shorthands. Example: A young woman with long dark hair walking in a vibrant park during golden hour. /portrait /softlight",
  "visualTransformation": "Deskripsi efek visual yang terjadi pada gambar"
}

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},t=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok){const m=await t.text();throw new Error(`Gemini API error (${t.status}): ${m}`)}const c=(g=(b=(l=(h=(p=(await t.json()).candidates)==null?void 0:p[0])==null?void 0:h.content)==null?void 0:l.parts)==null?void 0:b[0])==null?void 0:g.text;if(!c)throw new Error("Respon Gemini kosong.");return this.extractJson(c)}mergeAiWithCatalog(a,e,i){var d,k,f,R,O;const r=this.localEngine.analyze(e,i);let s=[];const n=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const A of a.primaryShorthands){if(!A||!A.code)continue;const C=A.code.startsWith("/")?A.code:`/${A.code}`;if(n.has(C))continue;n.add(C);const I=this.catalog.find(v=>v.code.toLowerCase()===C.toLowerCase());s.push({item:I||null,code:C,name:A.name||(I==null?void 0:I.name)||C,category:A.category||(I==null?void 0:I.category)||"ONLINE_DISCOVERY",target:A.target||(I==null?void 0:I.target)||"Konsep Visual Prompt",description:A.description||(I==null?void 0:I.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:A.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:I?"CORE":"ONLINE",isOnline:!I,equivalentTo:(I==null?void 0:I.equivalentTo)||A.equivalentTo||[],functionGroup:(I==null?void 0:I.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(r.primaryShorthands&&r.primaryShorthands.length>0)for(const A of r.primaryShorthands)A.category==="LOCK_PRESERVATION"&&!n.has(A.code)&&(n.add(A.code),s.push({...A,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else r.primaryShorthands&&r.primaryShorthands.length>0&&(s=r.primaryShorthands);let t=[];const o=new Set([...s.map(A=>A.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const A of a.relatedShorthands){if(!A||!A.code)continue;const C=A.code.startsWith("/")?A.code:`/${A.code}`;if(o.has(C))continue;o.add(C);const I=this.catalog.find(v=>v.code.toLowerCase()===C.toLowerCase());t.push({item:I||null,code:C,name:A.name||(I==null?void 0:I.name)||C,category:A.category||(I==null?void 0:I.category)||"ONLINE_DISCOVERY",target:A.target||(I==null?void 0:I.target)||"Variasi Konsep Visual",description:A.description||(I==null?void 0:I.description)||"Alternatif shorthand hasil analisis semantik online.",priority:A.priority||"DISARANKAN",reason:A.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:I?"CORE":"ONLINE",isOnline:!I,equivalentTo:(I==null?void 0:I.equivalentTo)||A.equivalentTo||[],functionGroup:(I==null?void 0:I.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(r.relatedShorthands&&r.relatedShorthands.length>0)for(const A of r.relatedShorthands)o.has(A.code)||(o.add(A.code),t.push(A));let c=[];i&&Array.isArray(i)?c=i:s.length>0?c=s.map(A=>A.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?c=a.installedShorthands.map(A=>A.startsWith("/")?A:`/${A}`):r.installedShorthands&&r.installedShorthands.length>0&&(c=r.installedShorthands);const p=r.cleanText||e.trim();let h="",l="";if(a.optimalPrompt&&a.optimalPrompt.trim()){if(h=sa(a.optimalPrompt.trim()),l=h.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,"").trim(),c.length>0)for(const A of c)h.includes(A)||(h+=` ${A}`)}else l=sa(p),l&&!l.endsWith(".")&&!l.endsWith("!")&&!l.endsWith("?")&&(l+="."),h=c.length>0?`${l} ${c.join(" ")}`.trim():l;const b={primaryAction:(d=a.intent)!=null&&d.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:r.intent.primaryAction,primaryTarget:(k=a.intent)!=null&&k.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:r.intent.primaryTarget,summary:((f=a.intent)==null?void 0:f.summary)||a.summary||r.intent.summary,priority:((R=a.intent)==null?void 0:R.priority)||r.intent.priority,category:(O=a.intent)!=null&&O.category&&a.intent.category!=="GENERAL"?a.intent.category:r.intent.category},g=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:r.editAreas,m=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:r.lockedAreas;return{rawPrompt:e,normalizedPrompt:r.normalizedPrompt,cleanText:p,englishBasePrompt:l,intent:b,editAreas:g,lockedAreas:m,unchangedAreas:r.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:r.conflicts,primaryShorthands:s,relatedShorthands:t,recommendations:[...s,...t],exclusions:r.exclusions,installedShorthands:c,visualTransformation:a.visualTransformation||r.visualTransformation,optimalPrompt:h,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var t,o,c,p,h;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const e=V.getApiKey()?V.getApiKey().trim():"",i=V.getModel()||"gemini-2.0-flash";if(!e)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const r=[i,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((l,b,g)=>l&&g.indexOf(l)===b&&(l==="gemini-3.5-flash-lite"||!l.includes("3.5")&&!l.includes("3.8"))),n={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
Aturan:
1. Rekomendasikan 4 sampai 8 notasi shorthand yang paling relevan dengan kata kunci user.
2. Setiap kode shorthand WAJIB diawali garis miring (misal: /handperfect).
3. Berikan nama yang jelas dan deskripsi fungsi spesifik dalam bahasa Indonesia.
4. Format kembalian HANYA JSON array valid tanpa markdown wrapper:
[
  {
    "code": "/...",
    "name": "...",
    "description": "...",
    "category": "BODY_POSE"
  }
]

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const l of r)try{const b=`https://generativelanguage.googleapis.com/v1beta/models/${l}:generateContent?key=${encodeURIComponent(e)}`,g=await fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!g.ok)continue;const d=(h=(p=(c=(o=(t=(await g.json()).candidates)==null?void 0:t[0])==null?void 0:o.content)==null?void 0:c.parts)==null?void 0:p[0])==null?void 0:h.text;if(!d)continue;let k=[];try{k=this.extractJson(d)}catch{continue}if(!Array.isArray(k))continue;const f=k.filter(R=>R&&R.code&&typeof R.code=="string").map(R=>({code:R.code.startsWith("/")?R.code:`/${R.code}`,name:R.name||R.code,description:R.description||"Instruksi visual shorthand online",category:R.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:f,onlineAvailable:!0,message:f.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(b){console.warn(`Pencarian online dengan model ${l} gagal:`,b);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var l,b,g,m,d,k;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const i=V.getApiKey()?V.getApiKey().trim():"",r=V.getModel()||"gemini-2.0-flash";if(!i)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const s=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],n=[r,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((f,R,O)=>f&&O.indexOf(f)===R&&(f==="gemini-3.5-flash-lite"||!f.includes("3.5")&&!f.includes("3.8"))),t=`Anda adalah Prompt Shorthand Analyzer V3.3.5 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
Tugas Anda: Memperkaya Prompt Optimal pengguna dengan detail visual berkualitas tinggi tanpa mengubah makna atau maksud utamanya.

PRINSIP UTAMA: "ENRICH, NOT REPLACE" (Prompt Optimal asli adalah SOURCE OF TRUTH).

ATURAN WAJIB & BATASAN KETAT:
1. JANGAN PERNAH mengubah subjek utama, objek utama, aktivitas, konteks, maksud/intent, maupun konsep adegan.
2. JANGAN PERNAH menghapus informasi penting dari Prompt Optimal asli.
3. JANGAN PERNAH menghapus atau mengubah shorthand visual (kata atau kode berawalan '/'). Seluruh shorthand yang ada pada prompt asli WAJIB dipertahankan dan diletakkan di akhir prompt.
4. JANGAN mengubah instruksi identitas, lock, pose, outfit, background, atau constraint penting lainnya.
5. ANDA DIIZINKAN DAN DIANJURKAN MEMPERBAIKI:
   - Kejelasan deskripsi visual dan materialitas objek.
   - Komposisi gambar (framing, focal length, angle kamera jika relevan).
   - Pencahayaan alami atau sinematik (soft illumination, ambient rim light, directional shadow).
   - Atmosfer, kedalaman ruang (depth of field), dan tekstur realistis.
   - Urutan instruksi deskriptif agar optimal dipahami model generasi gambar AI.
6. JANGAN menambahkan detail sembarangan atau fantasi berlebihan hanya agar prompt menjadi panjang.
7. JANGAN mengubah prompt menjadi konsep baru.
8. BAHASA OUTPUT WAJIB BAHASA INGGRIS: Seluruh prompt yang diperkaya wajib ditulis dalam Bahasa Inggris yang natural, deskriptif, dan optimal untuk AI image generator, dengan seluruh shorthand asli dipertahankan di akhir.

Format respons HANYA berupa JSON valid:
{
  "enrichedPrompt": "teks prompt lengkap yang telah diperkaya dalam Bahasa Inggris beserta seluruh shorthand asli di akhir"
}`,o=((l=e==null?void 0:e.intent)==null?void 0:l.summary)||"",c=`Prompt Optimal Asli:
"${a.trim()}"
${o?`Konteks/Maksud Analisis:
"${o}"
`:""}Shorthand Terpasang Wajib Dipertahankan: ${s.length>0?s.join(" "):"(tidak ada)"}`,p={contents:[{role:"user",parts:[{text:`${t}

${c}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let h=null;for(const f of n)try{const R=`https://generativelanguage.googleapis.com/v1beta/models/${f}:generateContent?key=${encodeURIComponent(i)}`,O=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!O.ok){const S=await O.text();throw new Error(`HTTP ${O.status}: ${S}`)}const C=(k=(d=(m=(g=(b=(await O.json()).candidates)==null?void 0:b[0])==null?void 0:g.content)==null?void 0:m.parts)==null?void 0:d[0])==null?void 0:k.text;if(!C)throw new Error("Respon Gemini kosong.");const I=this.extractJson(C);let v=I.enrichedPrompt||I.prompt||(typeof I=="string"?I:"");if(!v||typeof v!="string"||!v.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");v=sa(v.trim());for(const S of s)v.includes(S)||(v+=` ${S}`);return{success:!0,enrichedPrompt:v,modelUsed:f}}catch(R){h=R,console.warn(`Enrich prompt dengan model ${f} gagal:`,R.message);continue}throw h||new Error("Gagal memperkaya prompt dengan Gemini.")}detectImageAspect(a=null,e=null){if(a!=null&&a.width&&(a!=null&&a.height)){const r=a.width/a.height;if(r>1.6)return{ar:"16:9",orientation:"landscape-wide"};if(r>1.25)return{ar:"4:3",orientation:"landscape"};if(r>.9&&r<1.1)return{ar:"1:1",orientation:"square"};if(r<.65)return{ar:"9:16",orientation:"portrait-tall"};if(r<.85)return{ar:"3:4",orientation:"portrait"}}if(e&&typeof e=="string")try{const r=e.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"");if(typeof atob=="function"){const s=atob(r.substring(0,4e3));if(s.charCodeAt(0)===137&&s.charCodeAt(1)===80&&s.charCodeAt(2)===78&&s.charCodeAt(3)===71){const n=s.charCodeAt(16)<<24|s.charCodeAt(17)<<16|s.charCodeAt(18)<<8|s.charCodeAt(19),t=s.charCodeAt(20)<<24|s.charCodeAt(21)<<16|s.charCodeAt(22)<<8|s.charCodeAt(23);if(n>0&&t>0){const o=n/t;return o>1.6?{ar:"16:9",orientation:"landscape-wide"}:o>1.2?{ar:"4:3",orientation:"landscape"}:o>.9&&o<1.1?{ar:"1:1",orientation:"square"}:o<.65?{ar:"9:16",orientation:"portrait-tall"}:{ar:"3:4",orientation:"portrait"}}}}}catch{}const i=((a==null?void 0:a.name)||"").toLowerCase();return i.includes("portrait")||i.includes("vertical")||i.includes("story")||i.includes("reel")?{ar:"9:16",orientation:"portrait-tall"}:i.includes("square")||i.includes("feed")||i.includes("profile")||i.includes("1x1")?{ar:"1:1",orientation:"square"}:{ar:"16:9",orientation:"landscape-wide"}}assembleStructuredImagePrompt(a){if(!a)return"";const e=(a.mainDescription||a.generatedPrompt||"").trim()||"Fotografi autentik dengan pencahayaan alami dan detail realistis.",i=e.startsWith("/imagine prompt:")?e:`/imagine prompt: ${e}`;let r=(a.visualDetails||"").trim();if(!r){const s=[];(a.subject||a.subjectDescription)&&s.push((a.subject||a.subjectDescription).trim()),(a.pose||a.poseExpression&&a.poseExpression!=="-")&&s.push((a.pose||a.poseExpression).trim()),a.identityPreservation&&a.identityPreservation!=="-"&&s.push(a.identityPreservation.trim()),(a.outfit||a.outfitMaterial&&a.outfitMaterial!=="-")&&s.push((a.outfit||a.outfitMaterial).trim()),(a.environment||a.environmentBackground&&a.environmentBackground!=="-")&&s.push((a.environment||a.environmentBackground).trim()),(a.composition||a.compositionPerspective&&a.compositionPerspective!=="-")&&s.push((a.composition||a.compositionPerspective).trim()),(a.lighting||a.lightingColor&&a.lightingColor!=="-")&&s.push((a.lighting||a.lightingColor).trim()),a.cameraLensDof&&a.cameraLensDof!=="-"&&s.push(a.cameraLensDof.trim()),(a.style||a.photoStyleRealism&&a.photoStyleRealism!=="-")&&s.push((a.style||a.photoStyleRealism).trim()),r=s.join(`

`)}return r?`${i}

${r}`:i}assembleOptimalImagePrompt(a,e=[],i=null){const r=((a==null?void 0:a.mainDescription)||(a==null?void 0:a.generatedPrompt)||"").trim()||"Authentic photography with natural lighting and realistic details.",s=sa(r),n=s.startsWith("/imagine prompt:")?s:`/imagine prompt: ${s}`;let t=((a==null?void 0:a.visualDetails)||"").trim();if(!t){const m=[];(a!=null&&a.subject||a!=null&&a.subjectDescription)&&m.push((a.subject||a.subjectDescription).trim()),(a!=null&&a.pose||a!=null&&a.poseExpression&&a.poseExpression!=="-")&&m.push((a.pose||a.poseExpression).trim()),a!=null&&a.identityPreservation&&a.identityPreservation!=="-"&&m.push(a.identityPreservation.trim()),(a!=null&&a.outfit||a!=null&&a.outfitMaterial&&a.outfitMaterial!=="-")&&m.push((a.outfit||a.outfitMaterial).trim()),(a!=null&&a.environment||a!=null&&a.environmentBackground&&a.environmentBackground!=="-")&&m.push((a.environment||a.environmentBackground).trim()),(a!=null&&a.composition||a!=null&&a.compositionPerspective&&a.compositionPerspective!=="-")&&m.push((a.composition||a.compositionPerspective).trim()),(a!=null&&a.lighting||a!=null&&a.lightingColor&&a.lightingColor!=="-")&&m.push((a.lighting||a.lightingColor).trim()),a!=null&&a.cameraLensDof&&a.cameraLensDof!=="-"&&m.push(a.cameraLensDof.trim()),(a!=null&&a.style||a!=null&&a.photoStyleRealism&&a.photoStyleRealism!=="-")&&m.push((a.style||a.photoStyleRealism).trim()),t=m.join(`

`)}const o=[n];if(t&&o.push(sa(t)),i){const m=Te(i,a);m&&o.push(m)}const c=(a==null?void 0:a.aspectRatio)||"16:9";let h=(e||[]).map(m=>m.startsWith("/")?m:`/${m}`).join(" ");h?h+=` --ar ${c} --style raw --v 6.1`:h=`--ar ${c} --style raw --v 6.1`,o.push(h);let l=((a==null?void 0:a.negativePrompt)||(a==null?void 0:a.contextualNegativePrompt)||"").trim();const b=!!(a!=null&&a.photoStyleRealism&&/3d|render|octane|chibi|doll|figurine|toy/i.test(a.photoStyleRealism)||a!=null&&a.subjectDescription&&/3d|chibi|doll|figurine|toy/i.test(a.subjectDescription)||a!=null&&a.mainDescription&&/3d|chibi|doll|figurine|toy/i.test(a.mainDescription));l||(l=b?"real human photo, photographic grain, wrinkled skin, bad 3d render, distorted limbs, extra fingers, blurry, watermark, text":"cartoon, 3d render, illustration, deformed, blurry, watermark, text");let g=sa(l.replace(/^--no\s+/i,"").trim());return b&&(g=g.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/illustration,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),g.includes("real human photo")||(g=`real human photo, photographic grain, ${g}`.replace(/^,\s*/,""))),o.push(`--no ${g}`),o.join(`

`)}matchImageShorthands(a,e=null){const i=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+((e==null?void 0:e.subject)||"")+" "+((e==null?void 0:e.subjectDescription)||"")+" "+((e==null?void 0:e.outfit)||"")+" "+((e==null?void 0:e.outfitMaterial)||"")+" "+((e==null?void 0:e.pose)||"")+" "+((e==null?void 0:e.poseExpression)||"")+" "+((e==null?void 0:e.environment)||"")+" "+((e==null?void 0:e.environmentBackground)||"")+" "+((e==null?void 0:e.composition)||"")+" "+((e==null?void 0:e.compositionPerspective)||"")+" "+((e==null?void 0:e.lighting)||"")+" "+((e==null?void 0:e.lightingColor)||"")+" "+((e==null?void 0:e.cameraLensDof)||"")+" "+((e==null?void 0:e.style)||"")+" "+((e==null?void 0:e.photoStyleRealism)||"")+" "+(Array.isArray(e==null?void 0:e.suggestedShorthands)?e.suggestedShorthands.join(" "):"")+" "+(Array.isArray(e==null?void 0:e.optimizationNeeds)?e.optimizationNeeds.join(" "):"")).toLowerCase(),r=[];if(Array.isArray(e==null?void 0:e.suggestedShorthands))for(const t of e.suggestedShorthands){const o=(t||"").trim();if(!o)continue;const c=o.startsWith("/")?o.toLowerCase():`/${o.toLowerCase()}`,p=this.catalog.find(h=>h.code.toLowerCase()===c);p&&r.push({code:p.code,name:p.name,category:p.category,functionGroup:p.functionGroup||`GROUP_${p.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:p.description,priority:"WAJIB",isPrimary:!0,checked:!0,reason:"Teridentifikasi langsung oleh Vision AI dari karakteristik gambar aktual",source:"IMAGE_VISION_AI"})}for(const t of this.catalog){const o=(t.negativeTriggers||[]).map(l=>l.toLowerCase());if(o.length>0&&o.some(l=>i.includes(l)))continue;const c=(t.semanticTriggers||[]).map(l=>l.toLowerCase());let p=!1,h="";i.includes(t.code.toLowerCase())?(p=!0,h=`Terdeteksi dari direktif visual: ${t.code}`):c.some(l=>i.includes(l))?(p=!0,h=`Teridentifikasi dari atribut visual gambar (${t.name})`):Array.isArray(e==null?void 0:e.optimizationNeeds)&&e.optimizationNeeds.some(l=>t.code.toLowerCase().includes(l.toLowerCase())||(t.name||"").toLowerCase().includes(l.toLowerCase())||c.some(b=>l.toLowerCase().includes(b)))&&(p=!0,h=`Direkomendasikan untuk optimasi visual gambar (${t.name})`),p&&r.push({code:t.code,name:t.name,category:t.category,functionGroup:t.functionGroup||`GROUP_${t.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:t.description,priority:t.priority||"WAJIB",isPrimary:!0,checked:!0,reason:h||t.whenToUse||"Sesuai dengan karakter visual gambar",source:"IMAGE_ANALYSIS"})}const s=new Set,n=[];for(const t of r)s.has(t.functionGroup)||(s.add(t.functionGroup),n.push(t));return n}getStandard13VisualBreakdown(a){const e=(a==null?void 0:a.aspectRatio)||"16:9",i=e==="9:16"||e==="3:4";return{Subject:((a==null?void 0:a.subject)||(a==null?void 0:a.subjectDescription)||(a==null?void 0:a.mainDescription)||"Subjek visual utama teridentifikasi").trim(),Pose:((a==null?void 0:a.pose)||(a==null?void 0:a.poseExpression)||"Postur alami terpusat").trim(),Framing:((a==null?void 0:a.framing)||(i?"Vertical portrait framing":"Eye-level balanced framing")).trim(),"Camera / Angle":((a==null?void 0:a.cameraAngle)||(a==null?void 0:a.camera)||(a==null?void 0:a.cameraLensDof)||"Eye-level angle, 50mm prime f/2.8").trim(),Lighting:((a==null?void 0:a.lighting)||(a==null?void 0:a.lightingColor)||"Pencahayaan terukur dengan gradasi bayangan natural").trim(),Environment:((a==null?void 0:a.environment)||(a==null?void 0:a.environmentBackground)||"Setting lingkungan terkoordinasi secara alami").trim(),Background:((a==null?void 0:a.background)||(a==null?void 0:a.environmentBackground)||"Latar belakang dengan separasi kedalaman terukur").trim(),Outfit:((a==null?void 0:a.outfit)||(a==null?void 0:a.outfitMaterial)||"Pakaian rapi dengan tekstur bahan autentik").trim(),Expression:((a==null?void 0:a.expression)||"Ekspresi wajar, fokus tenang, dan proporsi alami").trim(),Composition:((a==null?void 0:a.composition)||(a==null?void 0:a.compositionPerspective)||"Komposisi terpusat seimbang rule-of-thirds").trim(),Style:((a==null?void 0:a.style)||(a==null?void 0:a.photoStyleRealism)||"Fotografi realistis autentik").trim(),"Color / Tone":((a==null?void 0:a.colorTone)||"Palet warna alami dengan kontras seimbang").trim(),"Aspect Ratio":e}}analyzeImageShorthandsBlueprint(a,e){const i=new Set,r=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+Object.values(e||{}).filter(d=>typeof d=="string").join(" ")).toLowerCase(),s=new Map;Array.isArray(e==null?void 0:e.suggestedShorthands)&&e.suggestedShorthands.forEach(d=>{const k=(d||"").trim().toLowerCase(),f=k.startsWith("/")?k:`/${k}`;s.set(f,100)});for(const d of this.catalog){const k=d.code.toLowerCase();let f=s.get(k)||0;r.includes(k)&&(f+=35);const R=(d.semanticTriggers||[]).map(A=>A.toLowerCase());for(const A of R)A&&r.includes(A)&&(f+=20);if(Array.isArray(e==null?void 0:e.optimizationNeeds))for(const A of e.optimizationNeeds){const C=(A||"").toLowerCase();C&&(R.some(I=>C.includes(I))||(d.name||"").toLowerCase().includes(C))&&(f+=25)}(d.negativeTriggers||[]).map(A=>A.toLowerCase()).some(A=>A&&r.includes(A))&&(f=-100),f>0&&s.set(k,f)}const n=[];for(const d of this.catalog){const k=s.get(d.code.toLowerCase())||0;k>0&&n.push({item:d,score:k})}n.sort((d,k)=>k.score-d.score);const t=[],o=new Set;for(const{item:d}of n){const k=d.code.toLowerCase(),f=d.functionGroup||d.category;if(!o.has(f)&&!i.has(k)&&(o.add(f),i.add(k),t.push({code:d.code,name:d.name,category:d.category,functionGroup:f,description:d.description,target:d.target||"Visual Utama",priority:"WAJIB",isPrimary:!0,checked:!0,active:!0,reason:`Mewakili fungsi visual inti (${d.name}) dari analisis gambar aktual`,source:(s.get(k)||0)>=100?"VISION_AI":"IMAGE_ANALYSIS",equivalentTo:d.equivalentTo||[]}),t.length>=8))break}const c=[],p=new Set;for(const{item:d}of n){const k=d.code.toLowerCase(),f=d.functionGroup||d.category;if(!o.has(f)&&!p.has(f)&&!i.has(k)&&(p.add(f),i.add(k),c.push({code:d.code,name:d.name,category:d.category,functionGroup:f,description:d.description,target:d.target||"Visual Pendukung",priority:"OPSIONAL",isPrimary:!1,checked:!1,active:!1,relationship:"COMPLEMENTARY",reason:`Melengkapi fungsi visual pada domain ${d.category} (${d.name})`,source:"IMAGE_ANALYSIS",equivalentTo:d.equivalentTo||[]}),c.length>=8))break}const h=[],l=new Set([...t.map(d=>d.category),...c.map(d=>d.category)]),b=new Set([...o,...p]);for(const{item:d}of n){const k=d.code.toLowerCase(),f=d.functionGroup||d.category;if(!i.has(k)&&(b.has(f)||l.has(d.category))&&(i.add(k),h.push({code:d.code,name:d.name,category:d.category,functionGroup:f,description:d.description,target:d.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif sinonim untuk fungsi ${f} (${d.name})`,source:"IMAGE_ANALYSIS",equivalentTo:d.equivalentTo||[]}),h.length>=8))break}if(h.length<5)for(const d of this.catalog){const k=d.code.toLowerCase(),f=d.functionGroup||d.category;if(!i.has(k)&&(l.has(d.category)||b.has(f))){if((d.negativeTriggers||[]).map(O=>O.toLowerCase()).some(O=>O&&r.includes(O)))continue;if(i.add(k),h.push({code:d.code,name:d.name,category:d.category,functionGroup:f,description:d.description,target:d.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif variasi gaya dalam domain ${d.category}`,source:"CATALOG_ALTERNATIVE",equivalentTo:d.equivalentTo||[]}),h.length>=8)break}}const g=[],m=[];for(const d of this.catalog){const k=d.code.toLowerCase();if(i.has(k))continue;const R=(d.negativeTriggers||[]).map(A=>A.toLowerCase()).some(A=>A&&r.includes(A)),O=!l.has(d.category);if((R||O)&&(i.add(k),m.push({code:d.code,target:d.target||d.name,reason:R?`Bertentangan dengan kondisi visual gambar aktual (${d.name})`:`Tidak relevan dengan subjek atau medium gambar (${d.category})`}),m.length>=10))break}return{primaryShorthands:t,relatedShorthands:c,similarShorthands:h,conflicts:g,exclusions:m}}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:i="image/jpeg",referencePrompt:r="",preferredLang:s="id",visualTelemetry:n=null,targetAspectRatio:t="auto",isTwoWorlds:o=!1,twoWorldsConfig:c=null}){const p=V.getApiKey().trim(),h=V.getModel()||"gemini-2.0-flash";let l=null,b="LOCAL_ENGINE",g=!1,m="";if(p&&e)try{const w=await this.executeMultimodalImageAnalysis(e,i,r,p,h,s,t);w&&(w.mainDescription||w.subjectDescription)&&(l=w,b="GEMINI_AI",g=!0,this.status=ia.CONNECTED,this.lastError=null,m=`🌐 Analisa Gambar AI AKTIF (${V.getModel()||h}) — Vision analysis mendalam dari gambar aktual.`)}catch(w){console.warn("Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:",w),this.lastError=w.message}l||(l=this.generateDynamicImageAnalysis(a,e,r,s,n,t),b=p?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",g=!!p,m=g?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung)."),t&&t!=="auto"&&t!=="Otomatis"&&(l.aspectRatio=t);const d=this.assembleStructuredImagePrompt(l),k=this.getStandard13VisualBreakdown(l);l.aspectRatio&&(k["Aspect Ratio"]=l.aspectRatio);const{primaryShorthands:f,relatedShorthands:R,similarShorthands:O,conflicts:A,exclusions:C}=this.analyzeImageShorthandsBlueprint(d,l),I=f.map(w=>w.code),v=this.assembleOptimalImagePrompt(l,I,o?c:null),S={primaryAction:o?"REPRESENTASI_2_DUNIA":"REPRESENTASI_VISUAL",primaryTarget:o?"Karakteristik Visual & Dualitas Gambar Sumber":"Karakteristik Visual Gambar Aktual",summary:o?`Gambar ini merepresentasikan konsep 2 Dunia berbasis ${l.subjectDescription||l.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt representasi dualitas / dua dunia yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`:`Gambar ini merepresentasikan ${l.subjectDescription||l.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`,priority:"HIGH",category:o?"TWO_WORLDS":"IMAGE_TO_PROMPT"},B=[{entity:"STRUKTUR_PROMPT",label:"Penyesuaian Struktur Prompt",description:"Menyusun urutan deskripsi sistematis: subjek utama → atribut pose & busana → pencahayaan & suasana → framing kamera."},{entity:"PENJELASAN_KATA",label:"Penyederhanaan & Presisi Frasa",description:"Mengonversi elemen visual menjadi deskripsi spesifik dan bahasa alami yang langsung dipahami oleh engine generatif AI."},{entity:"PENEKANAN_VISUAL",label:"Penekanan Elemen Visual Kunci",description:"Mempertegas karakteristik pencahayaan, tekstur material, dan proporsi nyata dari gambar sumber."},{entity:"PENGUATAN_DETAIL",label:"Penguatan Detail Mikro",description:"Menambahkan detail resolusi tinggi, kedalaman ruang (DoF), dan mikrokontras natural untuk menghindari artefak."},{entity:"PARAMETER_TEKNIS",label:"Integrasi Parameter AI Generatif",description:`Menambahkan parameter teknis standar (--ar ${l.aspectRatio||"16:9"} --style raw --v 6.1) dan direktif negative prompt (--no) untuk stabilitas hasil visual.`}],T=[{entity:"SUBJEK_UTAMA",label:"Subjek Utama & Identitas Visual",description:l.subjectDescription||l.subject||l.mainDescription},{entity:"POSE_EKSPRESI",label:"Pose & Ekspresi",description:l.poseExpression||l.pose||"Postur alami dan ekspresi wajah subjek asli"},{entity:"PAKAIAN_BUSANA",label:"Pakaian & Aksesoris",description:l.outfitMaterial||l.outfit||"Gaya pakaian dan tekstur material busana"},{entity:"FRAMING_KAMERA",label:"Framing & Angle Kamera",description:l.cameraLensDof||l.camera||"Sudut pandang lensa kamera dan rasio framing"},{entity:"BACKGROUND_ENV",label:"Background & Environment",description:l.environmentBackground||l.environment||"Setting lokasi dan latar belakang asli"},{entity:"KOMPOSISI",label:"Komposisi Visual",description:l.compositionPerspective||l.composition||"Pusat perhatian visual dan keseimbangan bidang"},{entity:"PENCAHAYAAN",label:"Pencahayaan & Suasana",description:l.lightingColor||l.lighting||"Arah pencahayaan, kontras shadow-highlight, dan tone ambient"}],j={from:`Kondisi visual aktual dari file gambar sumber: ${l.mainDescription||"Subjek dan komposisi visual nyata"}`,to:`Spesifikasi prompt AI optimal terstruktur lengkap dengan shorthand terpasang (${I.join(" ")}), parameter teknis (--ar ${l.aspectRatio||"16:9"} --style raw --v 6.1), dan negative prompt.`,summary:"💡 Translasi analitis representasi visual: Gambar sumber dianalisis secara objektif menjadi spesifikasi prompt AI generatif tanpa melakukan editing atau perombakan gambar asli."};return{mode:o?"TWO_WORLDS":"IMAGE_TO_PROMPT",source:b,isOnlineActive:g,engineNotice:m,generatedPrompt:d,optimalPrompt:v,cleanText:d,visionData:l,visualBreakdown:k,primaryShorthands:f,relatedShorthands:R,similarShorthands:O,recommendations:[...f,...R,...O],installedShorthands:I,conflicts:A,exclusions:C,editAreas:B,lockedAreas:T,unchangedAreas:T.map(w=>w.description),visualTransformation:j,intent:S,referencePrompt:r||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:i,aspectRatio:l.aspectRatio||"16:9"},timestamp:new Date().toISOString()}}async executeMultimodalImageAnalysis(a,e,i,r,s,n="id",t="auto"){var d,k,f,R;const c=[(s||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((O,A,C)=>O&&C.indexOf(O)===A&&!O.includes("1.5-pro")&&!O.includes("2.5-pro")&&(O==="gemini-3.5-flash-lite"||!O.includes("3.5")&&!O.includes("3.8")));c.length===0&&c.push("gemini-2.0-flash","gemini-1.5-flash");const p=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!p||p.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let h=(e||"image/jpeg").toLowerCase().trim();h.includes("png")?h="image/png":h.includes("webp")?h="image/webp":h.includes("heic")?h="image/heic":h.includes("heif")?h="image/heif":h="image/jpeg";const l=`Anda adalah Ahli Analisis Gambar Vision AI & Prompt Engineering Profesional.
Tugas Anda: Menganalisis gambar yang diunggah secara objektif, mendalam, dan akurat sebagai SATU-SATUNYA SOURCE OF TRUTH.

ATURAN MUTLAK:
1. JANGAN PERNAH menggunakan template statis, data default, atau asumsi fiktif.
2. Analisis APA YANG BENAR-BENAR TERLIHAT pada gambar:
   - Subjek utama (siapa/apa: pria/wanita/anak/karakter 3D animasi/chibi doll figurine/hewan/objek; busana/hoodie/pakaian, warna nyata yang terlihat, tekstur, material).
   - Pose tubuh, posisi, gestur, arah pandangan, ekspresi wajah.
   - Komposisi, framing, sudut kamera (eye-level, low angle, closeup, medium shot, wide shot, dll.).
   - Pencahayaan (studio softbox, daylight alami, directional, ambient, highlight, shadow).
   - Lingkungan & latar belakang (studio foto, kantor, indoor, alam outdoor, warna background).
   - Palet warna, white balance, saturasi, tone.
    - Gaya fotografi atau gaya visual asli (realistis, karakter 3D animasi, chibi figurine, digital render).

3. ATURAN BAHASA MUTLAK (GLOBAL PROMPT OPTIMAL):
Seluruh atribut visual yang menjadi bagian dari prompt (mainDescription, visualDetails, subject, pose, outfit, environment, lighting, composition, cameraAngle, style, colorTone, negativePrompt) WAJIB ditulis dalam BAHASA INGGRIS yang natural, deskriptif, spesifik, dan siap digunakan untuk AI image generator (Midjourney/SDXL/DALL-E).

Kembalikan respons HANYA dalam format JSON valid dengan 13 atribut visual lengkap:
{
  "mainDescription": "Descriptive main image prompt in natural AI-readable English...",
  "visualDetails": "Comprehensive visual details in English covering subject, attire, pose, expression, composition, lighting, background, and photographic character...",
  "subject": "Subject description in English...",
  "pose": "Subject pose in English...",
  "framing": "Framing shot in English (e.g., medium shot, closeup, wide)...",
  "cameraAngle": "Camera angle and lens in English (e.g., eye-level angle, 50mm lens)...",
  "lighting": "Lighting characteristics in English...",
  "environment": "Surrounding environment in English...",
  "background": "Background setting in English...",
  "outfit": "Attire and clothing details in English...",
  "expression": "Facial expression in English...",
  "composition": "Visual composition in English...",
  "style": "Photographic or visual style in English...",
  "colorTone": "Dominant color palette and tone in English...",
  "aspectRatio": "16:9",
  "suggestedShorthands": ["/portrait", "/studio", "/suit", "/eyelevel", "/softlight", "/realistic", "/rawphoto"],
  "negativePrompt": "Relevant negative prompt in English (e.g., deformed, bad anatomy, blurry, watermark)"
}`,b=i&&i.trim()?`Analisis gambar ini dengan panduan pengguna: "${i.trim()}". Pastikan seluruh output prompt dalam Bahasa Inggris natural.`:"Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata dalam Bahasa Inggris natural untuk AI image generator.";let g=null;const m=[];for(const O of c){const A=`https://generativelanguage.googleapis.com/v1beta/models/${O}:generateContent?key=${encodeURIComponent(r)}`,C=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const I of C)try{const v={contents:[{role:"user",parts:[{text:`${l}

Instruksi: ${b}`},{inlineData:{mimeType:h,data:p}}]}],generationConfig:I},S=await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});if(!S.ok){const G=await S.text();if(S.status===400&&I.responseMimeType)continue;throw new Error(`HTTP ${S.status}: ${G}`)}const T=((f=(k=(d=(await S.json()).candidates)==null?void 0:d[0])==null?void 0:k.content)==null?void 0:f.parts)||[];let j="";for(const G of T)G.text&&!G.thought&&(j+=G.text);if(!j&&((R=T[0])!=null&&R.text)&&(j=T[0].text),!j)throw new Error("Respon Gemini kosong.");let w=null;try{w=this.extractJson(j)}catch{w={mainDescription:j.replace(/```[a-z]*\n?/gi,"").trim(),visualDetails:""}}if(w&&typeof w=="object"){const G=w.mainDescription||w.prompt||w.generatedPrompt||w.description||w.summary||w.subjectDescription||w.subject||w.visualDetails||w.details||w.analysis;if(G)return w.mainDescription||(w.mainDescription=String(G).trim()),w.mainDescription=sa(w.mainDescription),w.visualDetails&&(w.visualDetails=sa(w.visualDetails)),t&&t!=="auto"&&t!=="Otomatis"&&(w.aspectRatio=t),this.lastSuccessfulModel=O,O!==s&&V.setModel(O),w}}catch(v){g=v,m.push(`${O}: ${v.message}`),console.warn(`Model ${O} multimodal gagal:`,v.message);break}}throw g||new Error(`Gagal menganalisis gambar dengan Gemini API (${m.join(" | ")}).`)}generateDynamicImageAnalysis(a,e,i="",r="en",s=null,n="auto"){const t=s||(a==null?void 0:a.visualTelemetry)||za(null,{filename:a==null?void 0:a.name,width:a==null?void 0:a.width,height:a==null?void 0:a.height,targetAspectRatio:n});return me(t,{preferredLang:"en",referencePrompt:i,filename:a==null?void 0:a.name,targetAspectRatio:n})}async analyzeShorthandImprove(a,e=null,i={}){var o,c,p,h,l;const r=!!(i.isColourGrading||i.mode==="COLOUR_GRADING"),s=r?"COLOUR_GRADING":i.mode||"SHORTHAND_IMPROVE",n=await this.analyzePrompt(a,e),t={conflictCount:((o=n.conflicts)==null?void 0:o.length)||0,redundancyCount:(((c=n.recommendations)==null?void 0:c.length)||0)-(((p=n.primaryShorthands)==null?void 0:p.length)||0),isOptimized:(((h=n.conflicts)==null?void 0:h.length)||0)===0,improvementAdvice:((l=n.conflicts)==null?void 0:l.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":r?"Shorthand colour grading telah dianalisis dan diselaraskan secara semantik tanpa konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...n,mode:s,isColourGrading:r,isImageRepair:!1,diagnostics:t}}async analyzeImageRepair({imageFile:a=null,imageBase64:e=null,mimeType:i="image/jpeg",notesPrompt:r="",preferredLang:s="id",isColourGrading:n=!1,mode:t="SHORTHAND_IMPROVE",colourGradingConfig:o=null,telemetry:c=null}){const p=!!(n||t==="COLOUR_GRADING"),h=p?"COLOUR_GRADING":"SHORTHAND_IMPROVE",l=V.getApiKey().trim(),b=V.getModel()||"gemini-2.0-flash",g=p?o||Ca:null,m=p?Re(c||{},g):null;let d=null,k="LOCAL_ENGINE",f=!1,R="";if(l&&e)try{const L=await this.executeMultimodalImageRepairAnalysis(e,i,r,l,b,s,p,g);if(L&&(L.optimizationAreas||L.visualConditionSummary)){d=L,k="GEMINI_AI",f=!0,this.status=ia.CONNECTED,this.lastError=null;const H=V.getModel()||b;R=p?`🌐 Analisa Colour Grading AI AKTIF (${H}) — Diagnosis tone & warna komprehensif dari gambar asli.`:`🌐 Analisa Perbaikan AI AKTIF (${H}) — Diagnosis visual komprehensif dari gambar asli.`}}catch(L){console.warn("Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:",L),this.lastError=L.message}d||(d=this.generateHeuristicImageRepair(a,r,s,p,g),k=l?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",f=!!l,R=f?p?`🌐 Mode Analisa Colour Grading (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:`🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:p?"🖥️ Mode Analisa Colour Grading (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis warna AI langsung).":"🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).");const{visualConditionSummary:O=p?"Karakteristik warna gambar telah dianalisis secara visual.":"Gambar telah dianalisis secara visual.",optimizationAreas:A=[],goodAspects:C=[],repairInstructions:I=p?"Terapkan colour grading harmonis dan profesional pada foto.":"Optimalkan kualitas dan karakteristik visual foto."}=d,v={PRIMARY_ISSUE:1,SECONDARY_ISSUE:2,OPTIMIZATION:3,PRESERVATION:4,FINISHING:5},S=[];for(const L of A){const H=Array.isArray(L.recommendedCodes)?L.recommendedCodes:[];let P=null;for(const W of H){const oa=W.startsWith("/")?W:`/${W}`,z=this.catalog.find(U=>U.code.toLowerCase()===oa.toLowerCase());if(z){P=z;break}}if(!P){const W=`${L.aspect||""} ${L.problem||""} ${L.suggestedAction||""}`.toLowerCase();for(const oa of this.catalog)if((oa.semanticTriggers||[]).map(U=>U.toLowerCase()).some(U=>W.includes(U))||W.includes(oa.name.toLowerCase())){P=oa;break}}const Y=P?P.code:H[0]?H[0].startsWith("/")?H[0]:`/${H[0]}`:null;Y&&S.push({code:Y,name:(P==null?void 0:P.name)||Y.replace("/","").toUpperCase(),category:(P==null?void 0:P.category)||(p?"COLOR_GRADING":"IMAGE_QUALITY"),functionGroup:(P==null?void 0:P.functionGroup)||`GROUP_${Y.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:(P==null?void 0:P.description)||L.suggestedAction||(p?"Penyesuaian colour grading":"Optimasi visual gambar"),issuePriority:L.priority||"OPTIMIZATION",priorityWeight:v[L.priority]||3,aspect:L.aspect||(p?"Aspek Tone & Warna":"Aspek Visual"),problem:L.problem||"",reason:L.reason||`Diperlukan untuk ${L.suggestedAction||"mengoptimalkan aspek ini"}.`,priority:"WAJIB",isPrimary:!0,checked:!0,source:"DIAGNOSTIC_REPAIR"})}const B=new Set,T=[];for(const L of S){const H=L.functionGroup;B.has(H)||(B.add(H),T.push(L))}T.sort((L,H)=>{const P=(L.priorityWeight||3)-(H.priorityWeight||3);return P!==0?P:L.code.localeCompare(H.code)});const j=T.map(L=>L.code);let w="",G="";if(p){const L=Qa(g,m);G=L,w=j.length>0?`${L}

${j.join(" ")}`.trim():L.trim()}else{const L=Ja(I);G=L,w=j.length>0?`${L} ${j.join(" ")}`.trim():L}return{mode:h,isColourGrading:p,isImageRepair:!0,source:k,isOnlineActive:f,engineNotice:R,visualConditionSummary:O,optimizationAreas:A,goodAspects:C,repairInstructions:I,englishBasePrompt:G,colourGradingConfig:g,adaptiveAdjustments:m,telemetry:p?c:null,diagnosedShorthands:T,installedShorthands:j,optimalPrompt:w,primaryShorthands:T,relatedShorthands:[],recommendations:T,conflicts:[],exclusions:[],editAreas:A.map(L=>({entity:L.aspect||(p?"AREA_COLOUR_GRADING":"AREA_OPTIMASI"),description:L.problem||L.suggestedAction||""})),lockedAreas:C.map(L=>({entity:"ASPEK_SUDAH_BAIK",description:L})),unchangedAreas:C,intent:{primaryAction:p?"DIAGNOSIS_COLOUR_GRADING":"DIAGNOSIS_PERBAIKAN_GAMBAR",primaryTarget:p?"Tone & Palet Warna":"Kondisi Visual Foto",summary:O,priority:"HIGH",category:p?"COLOR_GRADING":"IMAGE_QUALITY"},diagnostics:{issueCount:A.length,goodCount:C.length,isOptimized:!1,improvementAdvice:p?`Ditemukan ${A.length} area warna & tone yang disesuaikan. Menampilkan ${T.length} shorthand rekomendasi tanpa batasan.`:`Ditemukan ${A.length} area visual yang membutuhkan perbaikan. Menampilkan ${T.length} shorthand rekomendasi tanpa batasan.`},imageInfo:{name:(a==null?void 0:a.name)||(p?"colour-grading-source.jpg":"repair-source.jpg"),size:(a==null?void 0:a.size)||0,type:i},timestamp:new Date().toISOString()}}async executeMultimodalImageRepairAnalysis(a,e,i,r,s,n="id",t=!1,o=null){var k,f,R,O,A,C,I,v;const p=[(s||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((S,B,T)=>S&&T.indexOf(S)===B&&!S.includes("1.5-pro")&&!S.includes("2.5-pro")&&(S==="gemini-3.5-flash-lite"||!S.includes("3.5")&&!S.includes("3.8")));p.length===0&&p.push("gemini-2.0-flash","gemini-1.5-flash");const h=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!h||h.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let l=(e||"image/jpeg").toLowerCase().trim();l.includes("png")?l="image/png":l.includes("webp")?l="image/webp":l.includes("heic")?l="image/heic":l.includes("heif")?l="image/heif":l="image/jpeg";const b=t?`Anda adalah Ahli Colour Grading & Visual Colorist profesional.
Tugas Anda: Menganalisis karakter warna, tonal curve, temperatur, saturasi, kontras warna, dan color harmony dari gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis karakteristik warna gambar dan menentukan SELURUH ASPEK penyesuaian colour grading yang dibutuhkan untuk menciptakan palet warna sinematik, harmonis, atau tone estetis yang diinginkan.
${o?`
TARGET ARAH VISUAL & STYLE:
- Mode: ${o.mode||"AUTO"}
- Target Style: ${o.selectedStyle||"Natural Vibrant"}
- Intensity: ${o.intensity??50}%
- Highlight Protection: ${((k=o.protections)==null?void 0:k.highlightProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Shadow Protection: ${((f=o.protections)==null?void 0:f.shadowProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Skin Tone Protection: ${((R=o.protections)==null?void 0:R.skinToneProtection)!==!1?"AKTIF (Prioritas Utama: pertahankan keaslian warna kulit alami manusia)":"NON-AKTIF"}
- Oversaturation Protection: ${((O=o.protections)==null?void 0:O.oversaturationProtection)!==!1?"AKTIF":"NON-AKTIF"}
`:""}
PRINSIP NON-DESTRUKTIF MUTLAK:
FOTO ASLI ADALAH SOURCE OF TRUTH. Proses ini murni AI IMAGE ENHANCEMENT / COLOR GRADING, BUKAN IMAGE REGENERATION. Wajib 100% mempertahankan subjek, wajah, identitas, proporsi tubuh, busana, rambut, pose, objek, latar belakang, dan struktur komposisi tanpa perubahan generatif.

Parameter analisis meliputi:
- Color temperature & white balance (warm, cool, neutral)
- Color cast / tint (pergeseran warna hijau/magenta/kuning/biru)
- Tonal curve / contrast / gamma (bayangan pekat, highlight lembut)
- Shadow tint & black point (cinematic lifted shadows, matte blacks, deep shadows)
- Highlight roll-off & highlight tint (warm highlights, golden glow, clean whites)
- Saturation, vibrance & color gamut (muted tone, vibrant pop, pastel, monochrome)
- Skin tone accuracy & natural color preservation (pada subjek manusia)
- Color harmony & palette style (teal and orange, moody cinematic, vintage retro, pastel aesthetics)
- Film look, texture & digital grain
- Dynamic range & color separation

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan penyesuaian warna/tone yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek warna yang SUDAH BAIK/OPTIMAL.
3. Sebutkan secara eksplisit aspek visual/warna yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah warna/tone utama (white balance bergeser, color cast ekstrem, kontras tidak seimbang).
   - SECONDARY_ISSUE: Penyesuaian saturasi, harmonisasi palet warna, tint bayangan/highlight.
   - OPTIMIZATION: Peningkatan tone sinematik, split toning, kurva gamma estetik.
   - PRESERVATION: Preservasi keaslian warna kulit (skin tone) & tekstur alami.
   - FINISHING: Sentuhan akhir grading film, look estetis, atau nuansa fotografi natural.
6. Cocokkan dengan shorthand yang tepat, contoh: /colorbalance, /naturaltone, /naturalcontrast, /shadowrecovery, /highlightcontrol, /dynamicrange, /rawphoto, /texturepreservation, /detailpreservation, /naturalprocessing.
7. Gunakan bahasa: ${n==="en"?"English":"Bahasa Indonesia"}.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif karakteristik warna dan tone foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek warna/tone (misal: Color Balance & Temperature)",
      "problem": "Deskripsi karakteristik atau kebutuhan penyesuaian spesifik",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan penyesuaian colour grading yang direkomendasikan",
      "recommendedCodes": ["/colorbalance"],
      "reason": "Alasan mengapa shorthand colour grading ini direkomendasikan"
    }
  ],
  "goodAspects": [
    "Aspek warna/visual yang dinilai sudah optimal 1",
    "Aspek warna/visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Natural, AI-readable ENGLISH prompt directives for color grading..."
}`:`Anda adalah Ahli Diagnosa Visual & Optimasi Fotografi Digital profesional.
Tugas Anda: Menganalisis kondisi aktual gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis kondisi visual gambar dan menentukan SELURUH ASPEK gambar yang membutuhkan perbaikan, peningkatan, atau optimasi.

Parameter analisis meliputi:
- Exposure / brightness / lighting
- Highlight (terlalu keras / blown / clipping)
- Shadow (terlalu gelap / detail hilang)
- Dynamic range (rentang dinamis terbatas)
- Contrast (terlalu keras / datar)
- White balance / color balance / color temperature / saturation
- Skin tone (jika terdapat subjek manusia)
- Sharpness / detail / texture / noise / focus
- Lens distortion / perspective
- Composition / framing
- Processing artifacts / realism / keaslian karakter foto

ATURAN WAJIB & KETENTUAN KHUSUS:
1. STRICT RELEVANCE: HANYA aspek yang berdasarkan analisis memang membutuhkan optimasi yang boleh menghasilkan rekomendasi.
2. JANGAN memunculkan rekomendasi untuk aspek yang SUDAH BAIK.
3. Sebutkan secara eksplisit aspek-aspek visual yang SUDAH BAIK pada array "goodAspects".
4. BEBAS JUMLAH / UNLIMITED: JANGAN batasi jumlah rekomendasi (jika ada 3 sebutkan 3, jika ada 8 sebutkan 8, jika ada 12 sebutkan 12).
5. Kelompokkan prioritas isu ke dalam:
   - PRIMARY_ISSUE: Masalah utama (pencahayaan, bayangan pekat, highlight silau, blur/fokus, distorsi).
   - SECONDARY_ISSUE: Masalah sekunder (kontras, saturasi, white balance, tone warna).
   - OPTIMIZATION: Kebutuhan peningkatan tambahan (dynamic range, high detail, kejernihan, komposisi).
   - PRESERVATION: Kebutuhan preservasi detail/tekstur/kulit.
   - FINISHING: Sentuhan akhir/realisme/karakter fotografi alami.
6. Cocokkan dengan shorthand yang tepat, contoh: /shadowrecovery, /highlightcontrol, /dynamicrange, /naturalcontrast, /naturaltone, /colorbalance, /detailpreservation, /texturepreservation, /naturalprocessing, /perspectivecorrection, /lenscorrection, /compositionbalance, /highdetail, /sharpen, /denoise, /enhance, /hdr, /rawphoto.
7. Gunakan bahasa: ${n==="en"?"English":"Bahasa Indonesia"}. Catatan Khusus: Bidang "repairInstructions" WAJIB dalam Bahasa Inggris natural untuk generative visual AI.

Format respons HANYA berupa JSON valid:
{
  "visualConditionSummary": "Ringkasan komprehensif kondisi visual foto aktual...",
  "optimizationAreas": [
    {
      "aspect": "Nama aspek visual (misal: Shadow / Bayangan)",
      "problem": "Deskripsi masalah spesifik yang ditemukan",
      "priority": "PRIMARY_ISSUE",
      "suggestedAction": "Tindakan perbaikan yang direkomendasikan",
      "recommendedCodes": ["/shadowrecovery"],
      "reason": "Alasan mengapa shorthand ini direkomendasikan untuk gambar ini"
    }
  ],
  "goodAspects": [
    "Aspek visual yang dinilai sudah optimal 1",
    "Aspek visual yang dinilai sudah optimal 2"
  ],
  "repairInstructions": "Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, while preserving authentic skin textures and micro-details without synthetic artifacts."
}`,g=t?i&&i.trim()?`Analisis karakteristik warna dan tone gambar ini untuk colour grading. Catatan/preferensi warna pengguna: "${i.trim()}".`:"Analisis karakteristik warna, kurva tonal, kontras, dan saturasi gambar ini secara menyeluruh untuk rekomendasi colour grading.":i&&i.trim()?`Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${i.trim()}".`:"Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.";let m=null;const d=[];for(const S of p){const B=`https://generativelanguage.googleapis.com/v1beta/models/${S}:generateContent?key=${encodeURIComponent(r)}`,T=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const j of T)try{const w={contents:[{role:"user",parts:[{text:`${b}

Instruksi: ${g}`},{inlineData:{mimeType:l,data:h}}]}],generationConfig:j},G=await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)});if(!G.ok){const W=await G.text();if(G.status===400&&j.responseMimeType)continue;throw new Error(`HTTP ${G.status}: ${W}`)}const H=((I=(C=(A=(await G.json()).candidates)==null?void 0:A[0])==null?void 0:C.content)==null?void 0:I.parts)||[];let P="";for(const W of H)W.text&&!W.thought&&(P+=W.text);if(!P&&((v=H[0])!=null&&v.text)&&(P=H[0].text),!P)throw new Error("Respon Gemini kosong.");let Y=null;try{Y=this.extractJson(P)}catch{Y={visualConditionSummary:P.replace(/```[a-z]*\n?/gi,"").trim(),optimizationAreas:[]}}if(Y&&typeof Y=="object"){const W=Y.visualConditionSummary||Y.summary||Y.diagnosis||Y.description;if(W||Array.isArray(Y.optimizationAreas)&&Y.optimizationAreas.length>0)return!Y.visualConditionSummary&&W&&(Y.visualConditionSummary=String(W).trim()),this.lastSuccessfulModel=S,S!==s&&V.setModel(S),Y}}catch(w){m=w,d.push(`${S}: ${w.message}`),console.warn(`Model ${S} multimodal repair gagal:`,w.message);break}}throw m||new Error(`Gagal menganalisis perbaikan gambar dengan Gemini API (${d.join(" | ")}).`)}generateHeuristicImageRepair(a,e="",i="id",r=!1,s=null){const n=(e||"").toLowerCase(),t=!!(e&&e.trim()),o=[],c=[];if(r){const b=(k,f)=>{t?k.some(R=>n.includes(R))&&o.push(f):o.push(f)};b(["suhu","temperature","warm","cool","hangat","dingin","kuning","biru","balance","cast","white balance"],{aspect:"Color Balance & Temperature",problem:"Suhu warna dan white balance memerlukan kalibrasi akurat agar nuansa visual harmonis.",priority:"PRIMARY_ISSUE",suggestedAction:"Penyelarasan suhu warna dan kalibrasi white balance netral",recommendedCodes:["/colorbalance"],reason:"Menyeimbangkan pergeseran suhu warna agar palet warna terlihat sinematik dan natural."}),b(["kontras","contrast","gamma","curve","kurva","keras","datar","flat"],{aspect:"Kurva Kontras & Tonal Gamma",problem:"Gradasi kontras antara highlight dan shadow memerlukan kurva transisi yang lebih halus dan sinematik.",priority:"PRIMARY_ISSUE",suggestedAction:"Penerapan kurva kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menciptakan kedalaman visual dengan rentang kontras organik khas film modern."}),b(["shadow","bayangan","gelap","hitam","lifted","pekat","black"],{aspect:"Shadow Toning & Black Point",problem:"Area bayangan gelap memerlukan pemulihan gradasi tonal agar tidak kehilangan nuansa warna.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan dan kontrol black point",recommendedCodes:["/shadowrecovery"],reason:"Mempertahankan kedalaman bayangan dengan detail tonal yang tetap terbaca bersih."}),b(["highlight","terang","silau","roll-off","roll off","putih","glow"],{aspect:"Highlight Roll-off & Tonal Rendah",problem:"Transisi area terang ke highlight paling tinggi memerlukan penataan yang lembut tanpa clipping keras.",priority:"SECONDARY_ISSUE",suggestedAction:"Pengendalian intensitas dan kelembutan highlight",recommendedCodes:["/highlightcontrol"],reason:"Menghindari highlight yang terlalu tajam/silau sehingga transisi pencahayaan tampak organik."}),b(["saturasi","saturation","vibrance","tone","warna","pucat","kusam","pekat","muted"],{aspect:"Rentang Tonal & Saturasi Warna",problem:"Intensitas warna dan kehangatan tonal memerlukan harmonisasi agar tidak over-saturated atau kusam.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan saturasi warna yang pas, estetis, dan nyaman dipandang."}),b(["dinamis","rentang","dynamic","range","hdr"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan dan kilau terang dapat diperluas untuk persepsi kedalaman maksimal.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Meningkatkan rentang tonal agar gradasi warna pada setiap tingkatan eksposur terpelihara utuh."}),b(["tekstur","kulit","skin","texture","asli","material"],{aspect:"Preservasi Tekstur & Warna Kulit Alami",problem:"Tekstur organik kulit dan material rentan terdistorsi oleh proses pewarnaan berlebih.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material dan keaslian warna kulit",recommendedCodes:["/texturepreservation"],reason:"Memastikan colour grading tidak mengubah pori-pori kulit, serat kain, atau tekstur alami objek."}),b(["alami","natural","realis","raw","film","sinematik","grade"],{aspect:"Karakter Pemrosesan Alami & Film Grade",problem:"Potensi terjadinya artefak digital berlebih selama proses penyesuaian grading warna.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Menjaga hasil akhir colour grading tetap memiliki nuansa fotografi autentik dan bernilai seni tinggi."}),c.length===0&&(c.push("Distribusi pencahayaan dasar dan kontras subjek utama sudah terdistribusi dengan baik."),c.push("Kerapatan detail dan tekstur dasar gambar sudah terjaga dengan jelas."),c.push("Tidak ditemukan pergeseran warna ekstrim (chromatic aberration) yang merusak kualitas gambar."));const g=(s==null?void 0:s.selectedStyle)||"Natural Vibrant",m=`Hasil diagnosis colour grading menunjukkan gambar memiliki fondasi visual yang kuat. Ditemukan ${o.length} area penyesuaian tonal curve, suhu warna, dan palet warna untuk mencapai grade estetis yang harmonis dan optimal (Arah visual: ${g}).`,d=Qa(s);return{visualConditionSummary:m,optimizationAreas:o,goodAspects:c,repairInstructions:d}}const p=(b,g)=>{t?b.some(m=>n.includes(m))&&o.push(g):o.push(g)};p(["shadow","gelap","bayangan","underexposed","pekat"],{aspect:"Shadow / Bayangan",problem:"Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan tanpa mencerahkan berlebih",recommendedCodes:["/shadowrecovery"],reason:"Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami."}),p(["highlight","terang","silau","blown","overexposed","putih"],{aspect:"Highlight / Pencahayaan Terang",problem:"Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.",priority:"PRIMARY_ISSUE",suggestedAction:"Pengendalian intensitas highlight",recommendedCodes:["/highlightcontrol"],reason:"Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus."}),n.includes("tajam")||n.includes("buram")||n.includes("blur")||n.includes("fokus")||n.includes("kabur")?o.push({aspect:"Ketajaman & Fokus",problem:"Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.",priority:"PRIMARY_ISSUE",suggestedAction:"Peningkatan ketajaman tepi dan kontur",recommendedCodes:["/sharpen"],reason:"Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih."}):t||c.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),n.includes("noise")||n.includes("bintik")||n.includes("grain")?o.push({aspect:"Noise & Grain",problem:"Terdapat gangguan bintik noise digital pada area bergradasi halus.",priority:"PRIMARY_ISSUE",suggestedAction:"Pembersihan noise digital secara selektif",recommendedCodes:["/denoise"],reason:"Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial."}):t||c.push("Tingkat noise digital berada dalam batas yang sangat rendah dan bersih."),n.includes("perspektif")||n.includes("miring")||n.includes("tilt")?o.push({aspect:"Perspektif Garis & Sudut",problem:"Garis bidang foto tampak miring atau mengalami distorsi perspektif.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi pelurusan perspektif",recommendedCodes:["/perspectivecorrection"],reason:"Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami."}):n.includes("distorsi")||n.includes("lensa")||n.includes("barrel")?o.push({aspect:"Distorsi Lensa",problem:"Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi distorsi lensa",recommendedCodes:["/lenscorrection"],reason:"Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural."}):t||c.push("Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung."),p(["kontras","contrast","keras","datar"],{aspect:"Kontras Visual",problem:"Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.",priority:"SECONDARY_ISSUE",suggestedAction:"Penerapan kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik."}),p(["balance","kuning","biru","cast","suhu","warna"],{aspect:"Keseimbangan Warna & White Balance",problem:"Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.",priority:"SECONDARY_ISSUE",suggestedAction:"Penyelarasan white balance dan netralisasi color cast",recommendedCodes:["/colorbalance"],reason:"Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna."}),(n.includes("pucat")||n.includes("kusam")||n.includes("tone")||!t&&!o.some(b=>b.recommendedCodes.includes("/naturaltone")))&&(t||o.length<8)&&o.push({aspect:"Rentang Tonal Warna",problem:"Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan."}),p(["dinamis","rentang","dynamic","range"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight."}),(n.includes("kualitas")||n.includes("detail tinggi")||n.includes("resolusi")||n.includes("definisi"))&&o.push({aspect:"Kerapatan Detail Visual",problem:"Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.",priority:"OPTIMIZATION",suggestedAction:"Peningkatan detail mikro berkualitas tinggi",recommendedCodes:["/highdetail"],reason:"Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar."}),p(["detail","pertahankan","preservasi","halus"],{aspect:"Preservasi Detail Halus",problem:"Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.",priority:"PRESERVATION",suggestedAction:"Penguncian dan perlindungan detail halus",recommendedCodes:["/detailpreservation"],reason:"Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi."}),p(["tekstur","texture","kulit","kain","permukaan"],{aspect:"Preservasi Tekstur Alami",problem:"Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material",recommendedCodes:["/texturepreservation"],reason:"Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik."}),p(["alami","natural","realis","asli","overprocess"],{aspect:"Karakter Pemrosesan Alami",problem:"Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing."}),c.length===0&&(c.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),c.push("Komposisi dan framing foto sudah proporsional."),c.push("Tidak ditemukan distorsi optik lensa yang mengganggu."));const h=`Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${o.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`,l=Ja(e);return{visualConditionSummary:h,optimizationAreas:o,goodAspects:c,repairInstructions:l}}}function ee(u){return!u||typeof u!="string"?0:u.trim().split(/\s+/).filter(Boolean).length}function we(u){if(!u||typeof u!="string")return 0;const a=u.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function Ce(u,a=[]){if(!u||a.length===0)return 0;const e=ee(u);if(e===0)return 0;const i=a.length;return Math.min(100,Math.round(i/e*100))}function Le(u){return!u||typeof u!="string"?"":u.trim()}function Ne(u,a,e,i){const{status:r}=a;let s="status-unconfigured",n="Gemini: Belum diuji";return r===ia.CONNECTED?(s="status-connected",n="Gemini: Tersambung"):r===ia.FAILED&&(s="status-failed",n="Gemini: Gagal"),{html:`
    <header class="app-header">
      <div class="header-container">
        <div class="brand-wrapper">
          <div class="brand-logo" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-text">
            <h1>
              PROMPT SHORTHAND ANALYZER
              <span class="version-tag">V3.6</span>
            </h1>
            <p>Contextual Shorthand Notation &amp; Semantic Preservation</p>
          </div>
        </div>

        <nav class="nav-menu" role="tablist">
          <button type="button" class="nav-item ${u==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${u==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${u==="dictionary"?"active":""}" data-tab="dictionary" role="tab" aria-selected="${u==="dictionary"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            Kamus Shorthand
          </button>
          <button type="button" class="nav-item ${u==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${u==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${u==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${u==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${u==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${u==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions" style="display: flex; align-items: center; gap: 0.5rem;">
          <a 
            href="./Prompt-Shorthand-Analyzer-v3.5-release.apk" 
            download="Prompt-Shorthand-Analyzer-v3.5-release.apk" 
            class="btn btn-primary btn-xs" 
            id="btn-download-apk" 
            style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 700; text-decoration: none; padding: 0.35rem 0.65rem;"
            title="Download file instalasi aplikasi Android APK V3.5"
          >
            📥 <span>Download APK</span>
          </a>
          <button type="button" class="status-badge ${s}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${n}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(o){o.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const h=p.getAttribute("data-tab");e&&e(h)})});const c=o.querySelector("#header-status-badge");c&&i&&c.addEventListener("click",()=>i())}}}const Xa=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function Pe(u){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${Xa.map(i=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${i.id}" title="${i.description}">
      <span style="font-weight: 700; color: #93c5fd;">${i.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(i){i.querySelectorAll(".btn-preset-chip").forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-preset-id"),n=Xa.find(t=>t.id===s);n&&u&&u(n.prompt)})})}}}function je({config:u,uploadedImage:a,onConfigChange:e,onResetGrading:i,batchImages:r=[],activeBatchIndex:s=0,onSelectBatchImage:n}){const t=u||{},o=t.mode||"AUTO",c=t.selectedStyle||"Natural Vibrant",p=typeof t.intensity=="number"?t.intensity:50,h=t.protections||{},l=t.custom||{},b=Ua.find(m=>m.name===c)||{category:"Target Visual",categoryIcon:"🎯"};return{html:`
    <div class="colour-grading-panel" id="colour-grading-panel" style="margin-top: 1rem; margin-bottom: 1.25rem;">
      <!-- FLOATING POPOVER TOOLTIP (Zero permanent layout space, follows hovered / focused Style) -->
      <div 
        id="cg-style-tooltip" 
        class="cg-style-tooltip" 
        role="tooltip" 
        aria-hidden="true" 
        style="display: none; position: fixed; z-index: 999999; max-width: 330px; background: rgba(15, 23, 42, 0.98); border: 1px solid #f472b6; border-radius: 6px; padding: 0.65rem 0.85rem; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85), 0 0 15px rgba(236, 72, 153, 0.25); pointer-events: none; backdrop-filter: blur(8px); transition: opacity 0.12s ease; opacity: 0;"
      >
        <div id="cg-tooltip-title" style="font-weight: 700; color: #f472b6; font-size: 0.825rem; margin-bottom: 0.15rem;"></div>
        <div id="cg-tooltip-cat" style="font-size: 0.68rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.35rem;"></div>
        <div id="cg-tooltip-desc" style="font-size: 0.775rem; color: #f1f5f9; line-height: 1.45;"></div>
      </div>

      <!-- 1. SOURCE IMAGE PROTECTION BANNER (NON-GENERATIVE GUARANTEE) -->
      <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 0.85rem; font-size: 0.825rem; line-height: 1.5; color: #fce7f3; display: flex; align-items: flex-start; gap: 0.65rem;">
        <span style="font-size: 1.2rem; line-height: 1;">🛡️</span>
        <div>
          <strong style="color: #f472b6; font-size: 0.85rem; display: block; margin-bottom: 0.2rem;">
            FOTO ASLI ADALAH SOURCE OF TRUTH — ENHANCEMENT NON-DESTRUKTIF
          </strong>
          <span>Color Grading hanya memengaruhi karakteristik <strong>warna, tonal, kontras &amp; pencahayaan</strong>. Subjek, wajah, identitas, proporsi tubuh, pakaian, rambut, pose, objek, latar belakang, dan komposisi <strong>100% DIPERTAHANKAN UTUH tanpa regenerasi citra</strong>.</span>
        </div>
      </div>

      <!-- 2. ACTION & STATUS BAR (RESET COLOR GRADING & BATCH INDICATOR) -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.55rem 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.825rem; font-weight: 700; color: #f472b6; display: flex; align-items: center; gap: 0.35rem;">
            <span>🎨</span>
            <span>KONTROL PARAMETER AI COLOR GRADING</span>
          </span>
          ${a?`
            <span style="font-size: 0.725rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 0.15rem 0.5rem; border-radius: 4px;">
              📷 Foto Terpasang (Source of Truth)
            </span>
          `:""}
          ${o==="SELECT_STYLE"?`
            <span style="font-size: 0.725rem; color: #e2e8f0; background: rgba(255, 255, 255, 0.08); padding: 0.15rem 0.5rem; border-radius: 4px;">
              Target: <strong>${c}</strong> (${p}%)
            </span>
          `:""}
        </div>

        <!-- Reset Color Grading Button -->
        <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-reset-colour-grading" style="font-size: 0.725rem; padding: 0.25rem 0.65rem;" title="Kembalikan seluruh parameter grading ke kondisi awal (Foto Asli)">
          🔄 RESET COLOR GRADING
        </button>
      </div>

      <!-- 3. BATCH THUMBNAIL SELECTOR (JIKA MULTI-FOTO DIUNGGAH) -->
      ${r&&r.length>1?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem;">
          <span style="font-size: 0.75rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">
            📚 Batch Processing (${r.length} Foto — Analisis &amp; Penyesuaian Adaptif Per-Foto):
          </span>
          <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.25rem;">
            ${r.map((m,d)=>`
              <button 
                type="button" 
                class="batch-thumb-btn ${d===s?"active":""}" 
                data-batch-idx="${d}" 
                style="border: 2px solid ${d===s?"#ec4899":"rgba(255,255,255,0.1)"}; background: transparent; padding: 2px; border-radius: 4px; cursor: pointer;"
                title="Pilih Foto ${d+1}"
              >
                <img src="${m.previewUrl}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 2px; display: block;" alt="Foto ${d+1}" />
              </button>
            `).join("")}
          </div>
        </div>
      `:""}

      <!-- 4. MODE SELECTOR (AUTO | SELECT STYLE | CUSTOM STYLE) -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
          <span>🎛️</span>
          <span>1. PILIHAN MODE COLOR GRADING:</span>
        </label>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.5rem;">
          ${Da.map(m=>`
            <button 
              type="button" 
              class="cg-mode-btn ${o===m.id?"active":""}" 
              data-cg-mode="${m.id}" 
              ${m.id==="CUSTOM_STYLE"?'data-style-name="Custom Style"':""}
              tabindex="0"
              style="display: flex; flex-direction: column; align-items: flex-start; text-align: left; padding: 0.65rem 0.85rem; border-radius: 6px; border: 1px solid ${o===m.id?"#ec4899":"rgba(255, 255, 255, 0.1)"}; background: ${o===m.id?"rgba(236, 72, 153, 0.15)":"rgba(30, 41, 59, 0.4)"}; color: #f8fafc; cursor: pointer; transition: all 0.2s ease;"
            >
              <strong style="font-size: 0.825rem; color: ${o===m.id?"#f472b6":"#f1f5f9"}; margin-bottom: 0.2rem;">
                ${m.label}
              </strong>
              <small style="font-size: 0.72rem; color: #94a3b8; line-height: 1.35;">
                ${m.description}
              </small>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- 5. SELECT STYLE SECTION (JIKA MODE === 'SELECT_STYLE') -->
      ${o==="SELECT_STYLE"?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
            <label id="cg-style-label" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>🎯</span>
              <span>2. TARGET VISUAL STYLE:</span>
            </label>
            <span style="font-size: 0.725rem; color: #f472b6; font-weight: 600;">
              Total ${Ua.length} Curated Styles
            </span>
          </div>

          <!-- CUSTOM DROPDOWN / LISTBOX WITH HOVER/FOCUS TOOLTIPS -->
          <div class="cg-custom-dropdown" id="cg-custom-dropdown" style="position: relative; width: 100%;">
            <!-- Trigger Button: Hanya menampilkan Style Name (Bersih, Tidak Memakan Ruang) -->
            <button 
              type="button" 
              id="cg-style-dropdown-btn" 
              class="cg-style-dropdown-btn" 
              aria-haspopup="listbox" 
              aria-expanded="false" 
              aria-labelledby="cg-style-label" 
              data-style-name="${c}"
              tabindex="0"
              style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.35); color: #f8fafc; padding: 0.6rem 0.85rem; border-radius: 6px; font-size: 0.825rem; cursor: pointer; text-align: left; transition: all 0.2s ease;"
            >
              <span style="display: flex; align-items: center; gap: 0.45rem;">
                <span style="font-size: 0.95rem;">${b.categoryIcon||"🎯"}</span>
                <strong style="color: #fce7f3; font-size: 0.825rem;">${c}</strong>
                <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.25rem;">(${b.category||"Target Visual"})</span>
              </span>
              <span id="cg-dropdown-arrow" style="font-size: 0.75rem; color: #f472b6; transition: transform 0.2s ease;">▼</span>
            </button>

            <!-- Hidden Standard Select Element (Dukungan Kompatibilitas Form & Test) -->
            <select id="cg-style-select" style="display: none;" aria-hidden="true" tabindex="-1">
              ${Va.map(m=>`
                <optgroup label="${m.icon} ${m.category}">
                  ${m.styles.map(d=>`
                    <option value="${d.name}" ${c===d.name?"selected":""}>
                      ${d.name}
                    </option>
                  `).join("")}
                </optgroup>
              `).join("")}
            </select>

            <!-- Custom Listbox Dropdown Menu (Grouped by Category) -->
            <div 
              id="cg-style-menu" 
              class="cg-style-menu" 
              role="listbox" 
              aria-labelledby="cg-style-label" 
              style="display: none; position: absolute; top: calc(100% + 4px); left: 0; right: 0; max-height: 290px; overflow-y: auto; background: #090d16; border: 1px solid rgba(236, 72, 153, 0.4); border-radius: 6px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.85); z-index: 1000; padding: 0.35rem 0;"
            >
              <!-- Search Filter Input -->
              <div style="padding: 0.4rem 0.65rem; border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; background: #090d16; z-index: 2;">
                <input 
                  type="text" 
                  id="cg-style-search" 
                  placeholder="🔍 Cari Style visual (misal: Film, Warm, Moody, Clean)..." 
                  style="width: 100%; background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.15); color: #f8fafc; padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.775rem; outline: none;"
                />
              </div>

              <!-- Listbox Options Container -->
              <div id="cg-style-list-items">
                ${Va.map(m=>`
                  <div class="cg-category-group" data-cat-name="${m.category}" style="padding: 0.25rem 0;">
                    <div style="padding: 0.25rem 0.75rem; font-size: 0.68rem; font-weight: 700; color: #f472b6; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.35rem; background: rgba(236, 72, 153, 0.06);">
                      <span>${m.icon}</span>
                      <span>${m.category}</span>
                    </div>
                    ${m.styles.map(d=>{const k=c===d.name;return`
                        <div 
                          class="cg-style-item ${k?"selected":""}" 
                          role="option" 
                          aria-selected="${k}" 
                          data-style-name="${d.name}" 
                          tabindex="0" 
                          style="padding: 0.45rem 0.85rem; font-size: 0.8rem; color: ${k?"#f472b6":"#e2e8f0"}; background: ${k?"rgba(236, 72, 153, 0.15)":"transparent"}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.15s ease;"
                        >
                          <span>${d.name}</span>
                          ${k?'<span style="font-size: 0.75rem; color: #f472b6; font-weight: 700;">✓</span>':""}
                        </div>
                      `}).join("")}
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <small style="color: #94a3b8; display: block; margin-top: 0.45rem; font-size: 0.725rem;">
            💡 <em>Arahkan kursor atau fokus keyboard ke nama Style untuk melihat deskripsi visual target.</em>
          </small>
        </div>
      `:""}

      <!-- 6. CUSTOM STYLE PARAMETERS (JIKA MODE === 'CUSTOM_STYLE') -->
      ${o==="CUSTOM_STYLE"?`
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.4rem;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚙️</span>
              <span>2. PARAMETER CUSTOM STYLE:</span>
            </label>
            <span 
              class="cg-custom-style-info"
              data-style-name="Custom Style" 
              tabindex="0"
              style="font-size: 0.725rem; color: #f472b6; cursor: help; border-bottom: 1px dashed rgba(244, 114, 182, 0.6); padding-bottom: 1px;"
              title="Arahkan kursor untuk info Custom Style"
            >
              ℹ️ Info Custom Style
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 0.85rem;">
            <!-- Warmth -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Warmth (Dingin / Hangat)</span>
                <span id="cg-val-warmth" style="color: #f472b6; font-weight: 600;">${l.warmth||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-warmth" min="-100" max="100" value="${l.warmth||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Tint -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Tint (Hijau / Magenta)</span>
                <span id="cg-val-tint" style="color: #f472b6; font-weight: 600;">${l.tint||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-tint" min="-100" max="100" value="${l.tint||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Contrast -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Contrast (Kontras)</span>
                <span id="cg-val-contrast" style="color: #f472b6; font-weight: 600;">${l.contrast||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-contrast" min="-100" max="100" value="${l.contrast||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Highlights -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Highlights</span>
                <span id="cg-val-highlights" style="color: #f472b6; font-weight: 600;">${l.highlights||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-highlights" min="-100" max="100" value="${l.highlights||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Shadows -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Shadows (Bayangan)</span>
                <span id="cg-val-shadows" style="color: #f472b6; font-weight: 600;">${l.shadows||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-shadows" min="-100" max="100" value="${l.shadows||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Vibrance -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Vibrance (Warna Cerdas)</span>
                <span id="cg-val-vibrance" style="color: #f472b6; font-weight: 600;">${l.vibrance||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-vibrance" min="-100" max="100" value="${l.vibrance||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Saturation -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Saturation (Saturasi)</span>
                <span id="cg-val-saturation" style="color: #f472b6; font-weight: 600;">${l.saturation||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-saturation" min="-100" max="100" value="${l.saturation||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Clarity -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Clarity (Mikro-Kontras)</span>
                <span id="cg-val-clarity" style="color: #f472b6; font-weight: 600;">${l.clarity||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-clarity" min="-100" max="100" value="${l.clarity||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>
          </div>

          <!-- Split Toning (Shadow Tone & Highlight Tone) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            <div>
              <label for="cg-custom-shadow-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Shadow Tone (Rona Bayangan):
              </label>
              <select id="cg-custom-shadow-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${ve.map(m=>`
                  <option value="${m.value}" ${l.shadowTone===m.value?"selected":""}>${m.label}</option>
                `).join("")}
              </select>
            </div>
            <div>
              <label for="cg-custom-highlight-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Highlight Tone (Rona Highlight):
              </label>
              <select id="cg-custom-highlight-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${Se.map(m=>`
                  <option value="${m.value}" ${l.highlightTone===m.value?"selected":""}>${m.label}</option>
                `).join("")}
              </select>
            </div>
          </div>
        </div>
      `:""}

      <!-- 7. COLOR GRADING INTENSITY CONTROL -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
          <label for="cg-intensity-range" style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
            <span>⚡</span>
            <span>3. COLOR GRADING INTENSITY:</span>
          </label>
          <span id="cg-intensity-badge" style="font-size: 0.8rem; font-weight: 700; color: #f472b6; background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.3); padding: 0.15rem 0.55rem; border-radius: 4px;">
            ${p}%
          </span>
        </div>

        <input 
          type="range" 
          id="cg-intensity-range" 
          min="0" 
          max="100" 
          step="1" 
          value="${p}" 
          style="width: 100%; accent-color: #ec4899; margin-bottom: 0.5rem;" 
        />

        <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
          ${Ee.map(m=>`
            <button 
              type="button" 
              class="btn btn-xs ${p===m.value?"btn-primary":"btn-outline"}" 
              data-cg-intensity="${m.value}"
              style="font-size: 0.725rem; padding: 0.25rem 0.55rem;"
              title="${m.description}"
            >
              ${m.label}
            </button>
          `).join("")}
        </div>
      </div>

      <!-- 8. INTELLIGENT PROTECTION SYSTEM -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.4rem;">
          <label style="font-size: 0.8rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 0.35rem;">
            <span>🛡️</span>
            <span>4. INTELLIGENT PROTECTIONS (Pelindung Kualitas Foto Asli):</span>
          </label>
          <span style="font-size: 0.725rem; color: #4ade80;">Semua Proteksi Aktif</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.45rem;">
          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-skin" ${h.skinToneProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Skin Tone Protection</strong> (Rona Kulit Alami)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-hl" ${h.highlightProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Highlight Protection</strong> (Anti-Blown/Clipping)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-sh" ${h.shadowProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Shadow Protection</strong> (Anti-Crushed Blacks)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-oversat" ${h.oversaturationProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Oversaturation Protection</strong> (Batas Gamut)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-clip" ${h.clippingProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Clipping Protection</strong> (Safe RGB 0-255)</span>
          </label>

          <label style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.775rem; color: #cbd5e1; cursor: pointer;">
            <input type="checkbox" id="cg-prot-natcolor" ${h.naturalColorProtection!==!1?"checked":""} style="accent-color: #ec4899;" />
            <span><strong>Natural Color Protection</strong> (Langit &amp; Daun)</span>
          </label>
        </div>
      </div>
    </div>
  `,bindEvents(m){const d=m.querySelector("#colour-grading-panel");if(!d)return;const k=d.querySelector("#cg-style-tooltip"),f=d.querySelector("#cg-tooltip-title"),R=d.querySelector("#cg-tooltip-cat"),O=d.querySelector("#cg-tooltip-desc"),A=(E,N)=>{if(!k||!E)return;const M=N||E.getAttribute("data-style-name");if(!M)return;const K=Ua.find(ga=>ga.name.toLowerCase()===M.toLowerCase())||{name:M,category:"Target Visual",categoryIcon:"🎯",description:"Arah visual colour grading adaptif."};f&&(f.textContent=K.name),R&&(R.textContent=`${K.categoryIcon||"🎯"} ${K.category||""}`),O&&(O.textContent=K.description),k.style.display="block",k.style.opacity="1",k.setAttribute("aria-hidden","false");const $=E.getBoundingClientRect(),D=k.getBoundingClientRect();let Q=$.top+$.height/2-D.height/2,ra=$.right+12;ra+D.width>window.innerWidth-12&&(ra=$.left-D.width-12),ra<12&&(ra=Math.max(12,Math.min(window.innerWidth-D.width-12,$.left)),Q=$.bottom+8),Q<12&&(Q=12),Q+D.height>window.innerHeight-12&&(Q=window.innerHeight-D.height-12),k.style.top=`${Math.round(Q)}px`,k.style.left=`${Math.round(ra)}px`},C=()=>{k&&(k.style.opacity="0",k.style.display="none",k.setAttribute("aria-hidden","true"))},I=(E,N)=>{E&&(E.addEventListener("mouseenter",()=>A(E,N)),E.addEventListener("mouseleave",C),E.addEventListener("focus",()=>A(E,N)),E.addEventListener("blur",C))},v=d.querySelector("#cg-style-dropdown-btn"),S=d.querySelector("#cg-style-menu"),B=d.querySelector("#cg-dropdown-arrow"),T=d.querySelector("#cg-style-search"),j=d.querySelector("#cg-style-select");let w=!1;const G=()=>{S&&(w=!0,S.style.display="block",v&&v.setAttribute("aria-expanded","true"),B&&(B.style.transform="rotate(180deg)"),T&&(T.value="",P(""),setTimeout(()=>T.focus(),50)))},L=()=>{S&&(w=!1,S.style.display="none",v&&v.setAttribute("aria-expanded","false"),B&&(B.style.transform="rotate(0deg)"),C())},H=()=>{w?L():G()};function P(E){const N=(E||"").toLowerCase().trim();d.querySelectorAll(".cg-category-group").forEach(M=>{let K=!1;M.querySelectorAll(".cg-style-item").forEach($=>{const D=($.getAttribute("data-style-name")||"").toLowerCase();!N||D.includes(N)?($.style.display="flex",K=!0):$.style.display="none"}),M.style.display=K?"block":"none"})}v&&(v.addEventListener("click",E=>{E.stopPropagation(),H()}),I(v,c),v.addEventListener("keydown",E=>{E.key==="ArrowDown"||E.key==="Enter"||E.key===" "?(E.preventDefault(),G()):E.key==="Escape"&&L()})),T&&(T.addEventListener("input",E=>{P(E.target.value)}),T.addEventListener("keydown",E=>{if(E.key==="Escape")L(),v&&v.focus();else if(E.key==="ArrowDown"){E.preventDefault();const N=d.querySelector('.cg-style-item:not([style*="display: none"])');N&&N.focus()}}));const Y=E=>{var N;w&&!((N=d.querySelector("#cg-custom-dropdown"))!=null&&N.contains(E.target))&&L()};document.addEventListener("click",Y),d.querySelectorAll(".cg-style-item").forEach(E=>{const N=E.getAttribute("data-style-name");I(E,N),E.addEventListener("click",()=>{e&&N&&e({...t,selectedStyle:N}),j&&(j.value=N),L(),v&&v.focus()}),E.addEventListener("keydown",M=>{if(M.key==="Enter"||M.key===" ")M.preventDefault(),E.click();else if(M.key==="Escape")M.preventDefault(),L(),v&&v.focus();else if(M.key==="ArrowDown"){M.preventDefault();const K=Array.from(d.querySelectorAll('.cg-style-item:not([style*="display: none"])')),$=K.indexOf(E);$>=0&&$<K.length-1&&K[$+1].focus()}else if(M.key==="ArrowUp"){M.preventDefault();const K=Array.from(d.querySelectorAll('.cg-style-item:not([style*="display: none"])')),$=K.indexOf(E);$>0?K[$-1].focus():T&&T.focus()}})}),j&&j.addEventListener("change",E=>{e&&e({...t,selectedStyle:E.target.value})});const W=d.querySelector(".cg-custom-style-info");W&&I(W,"Custom Style");const oa=d.querySelector('.cg-mode-btn[data-cg-mode="CUSTOM_STYLE"]');oa&&I(oa,"Custom Style"),d.querySelectorAll(".cg-mode-btn").forEach(E=>{E.addEventListener("click",()=>{const N=E.getAttribute("data-cg-mode");e&&N!==o&&e({...t,mode:N})})});const z=d.querySelector("#cg-intensity-range");z&&z.addEventListener("input",E=>{const N=Number(E.target.value),M=d.querySelector("#cg-intensity-badge");M&&(M.textContent=`${N}%`),e&&e({...t,intensity:N})}),d.querySelectorAll("[data-cg-intensity]").forEach(E=>{E.addEventListener("click",()=>{const N=Number(E.getAttribute("data-cg-intensity"));e&&e({...t,intensity:N})})});const U=d.querySelector("#btn-reset-colour-grading");U&&U.addEventListener("click",()=>{i?i():e&&e({...t,mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}})}),["warmth","tint","contrast","highlights","shadows","saturation","vibrance","clarity"].forEach(E=>{const N=d.querySelector(`#cg-custom-${E}`);N&&N.addEventListener("input",M=>{const K=Number(M.target.value),$=d.querySelector(`#cg-val-${E}`);$&&($.textContent=K),e&&e({...t,custom:{...t.custom,[E]:K}})})});const aa=d.querySelector("#cg-custom-shadow-tone");aa&&aa.addEventListener("change",E=>{e&&e({...t,custom:{...t.custom,shadowTone:E.target.value}})});const x=d.querySelector("#cg-custom-highlight-tone");x&&x.addEventListener("change",E=>{e&&e({...t,custom:{...t.custom,highlightTone:E.target.value}})}),[{id:"#cg-prot-skin",prop:"skinToneProtection"},{id:"#cg-prot-hl",prop:"highlightProtection"},{id:"#cg-prot-sh",prop:"shadowProtection"},{id:"#cg-prot-oversat",prop:"oversaturationProtection"},{id:"#cg-prot-clip",prop:"clippingProtection"},{id:"#cg-prot-natcolor",prop:"naturalColorProtection"}].forEach(({id:E,prop:N})=>{const M=d.querySelector(E);M&&M.addEventListener("change",K=>{e&&e({...t,protections:{...t.protections,[N]:K.target.checked}})})}),d.querySelectorAll("[data-batch-idx]").forEach(E=>{E.addEventListener("click",()=>{const N=Number(E.getAttribute("data-batch-idx"));n&&n(N)})})}}}function Ge({currentValue:u="",onAnalyze:a,onReset:e,onClear:i,onSelectPreset:r,isAnalyzing:s=!1,isOnlineActive:n=!1,activeMode:t="ANALISA_PROMPT",onModeChange:o,uploadedImage:c=null,onImageSelected:p,onImageRemoved:h,selectedAspectRatio:l="auto",onAspectRatioChange:b,twoWorldsConfig:g=null,onTwoWorldsConfigChange:m,colourGradingConfig:d=null,onColourGradingConfigChange:k,onResetGrading:f,batchImages:R=[],activeBatchIndex:O=0,onSelectBatchImage:A}){var B;const C=Pe(r),I=t==="COLOUR_GRADING"?je({config:d||Ca,uploadedImage:c,onConfigChange:k,onResetGrading:f,batchImages:R,activeBatchIndex:O,onSelectBatchImage:A}):null,v=c?c.detectedAspectRatio||(c.width&&c.height?Ka(c.width,c.height):"1:1"):null;return{html:`
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT &amp; MODE ANALISIS</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          ${t!=="IMAGE_TO_PROMPT"&&t!=="TWO_WORLDS"?`
            <button type="button" class="btn btn-outline btn-xs" id="btn-clear-prompt" title="Kosongkan teks">
              Kosongkan
            </button>
          `:""}
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-app" title="Kembalikan aplikasi ke keadaan awal">
            Reset
          </button>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="analysis-mode-selector" id="mode-tabs-container">
        <button type="button" class="mode-tab-btn ${t==="ANALISA_PROMPT"?"active":""}" data-mode="ANALISA_PROMPT">
          <span>📝</span>
          <span>Analisa Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${t==="IMAGE_TO_PROMPT"?"active":""}" data-mode="IMAGE_TO_PROMPT">
          <span>🔍</span>
          <span>Analisa Gambar → Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${t==="TWO_WORLDS"?"active":""}" data-mode="TWO_WORLDS">
          <span>🌐</span>
          <span>2 dunia</span>
        </button>
        <button type="button" class="mode-tab-btn ${t==="SHORTHAND_IMPROVE"?"active":""}" data-mode="SHORTHAND_IMPROVE">
          <span>🛠️</span>
          <span>Analisa Shorthand Perbaikan Gambar</span>
        </button>
        <button type="button" class="mode-tab-btn ${t==="COLOUR_GRADING"?"active":""}" data-mode="COLOUR_GRADING">
          <span>🎨</span>
          <span>colour grading</span>
        </button>
      </div>

      <!-- Online Shorthand Search Status Banner -->
      <div class="online-status-banner ${n?"banner-online-active":"banner-online-inactive"}" id="prompt-online-status-banner">
        <div class="banner-inner">
          ${n?`
            <div class="banner-content">
              <span class="status-pulse-dot"></span>
              <strong class="banner-title">🌐 Pencarian Online Shorthand: AKTIF</strong>
              <span class="banner-desc">Analisis terbuka &amp; tidak terbatas — Memetakan konsep, objek, aktivitas, gaya, kanvas/outpaint, atau istilah baru ke shorthand AI yang relevan.</span>
            </div>
          `:`
            <div class="banner-content">
              <span class="status-offline-dot">⚪</span>
              <strong class="banner-title">🖥️ Pencarian Online Shorthand: TIDAK AKTIF</strong>
              <span class="banner-desc">Berjalan dalam Mode Heuristik Lokal. Sambungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online AI terbuka tanpa batas.</span>
            </div>
          `}
        </div>
      </div>

      <!-- IMAGE UPLOAD SECTION (MODE 2, MODE 2 DUNIA, MODE 3 & MODE COLOUR GRADING) -->
      ${t==="IMAGE_TO_PROMPT"||t==="TWO_WORLDS"||t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          <input type="file" id="image-file-input" ${t==="COLOUR_GRADING"?"multiple":""} accept="image/*, .jfif, .jpg, .jpeg, .png, .webp" style="display: none;" />
          ${c?`
            <div class="image-preview-card">
              <img src="${c.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${c.name||"reference-source.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${c.size?(c.size/1024).toFixed(1)+" KB":"Gambar Sumber"} &bull;
                  <span style="color: ${t==="SHORTHAND_IMPROVE"?"#c084fc":t==="COLOUR_GRADING"?"#ec4899":"#38bdf8"};">
                    ${t==="SHORTHAND_IMPROVE"?"SOURCE OF TRUTH Diagnosis Perbaikan":t==="COLOUR_GRADING"?"SOURCE OF TRUTH Diagnosis Colour Grading":t==="TWO_WORLDS"?"SOURCE OF TRUTH Visual (2 Dunia)":"SOURCE OF TRUTH Visual"}
                  </span>
                </div>
              </div>
              <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                <button type="button" class="btn btn-outline btn-xs" id="btn-change-image" title="Ganti gambar dengan file lain">
                  🔄 Ganti Gambar
                </button>
                <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-remove-image" title="Hapus gambar">
                  ✕ Hapus Gambar
                </button>
              </div>
            </div>
          `:`
            <div class="image-dropzone" id="image-dropzone">
              <svg class="dropzone-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
              <div class="dropzone-text">
                ${t==="COLOUR_GRADING"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; di-colour grade di sini, atau klik untuk memilih file":t==="SHORTHAND_IMPROVE"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini, atau klik untuk memilih file":t==="TWO_WORLDS"?"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file (Mode 2 Dunia)":"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file"}
              </div>
              <div class="dropzone-hint">
                ${t==="COLOUR_GRADING"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis palet warna, tonal curve, temperature, kontras &amp; merekomendasikan shorthand colour grading (UNLIMITED)":t==="SHORTHAND_IMPROVE"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis kondisi visual &amp; merekomendasikan shorthand perbaikan (UNLIMITED)":t==="TWO_WORLDS"?"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual konsep 2 Dunia)":"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)"}
              </div>
            </div>
          `}
          <!-- ASPECT RATIO SELECTOR (V3.3.5) -->
          <div class="aspect-ratio-control-panel" id="aspect-ratio-control-panel">
            <div class="aspect-ratio-control-header">
              <div class="aspect-ratio-title">
                <span class="aspect-ratio-icon">📐</span>
                <span class="aspect-ratio-heading">Pilihan Rasio Aspek:</span>
                <span class="aspect-ratio-badge" id="aspect-ratio-badge">
                  ${l==="auto"||l==="Otomatis"||!l?v?`Otomatis (Asli: ${v})`:"Otomatis (Dimensi Asli)":`Target: ${l}`}
                </span>
              </div>
              <div class="aspect-ratio-hint">
                ${l==="auto"||l==="Otomatis"||!l?c?`Mendeteksi aspek rasio asli gambar (${c.width||"?"}×${c.height||"?"}px → ${v}). Proporsi subjek dipertahankan tanpa distorsi.`:"Mendeteksi rasio aspek otomatis dari dimensi asli gambar yang diunggah.":`Mengarahkan rasio target kanvas ke ${l} tanpa stretching atau perubahan proporsi subjek.`}
              </div>
            </div>
            <div class="aspect-ratio-btn-group" role="radiogroup" aria-label="Pilihan Rasio Aspek">
              ${["Otomatis","1:1","2:3","3:2","3:4","4:3","9:16","16:9"].map(T=>`
                  <button 
                    type="button" 
                    class="aspect-ratio-btn ${T==="Otomatis"&&(l==="auto"||l==="Otomatis"||!l)||l===T?"active":""}" 
                    data-ratio="${T}"
                    id="btn-aspect-${T.replace(":","-")}"
                    title="${T==="Otomatis"?"Deteksi otomatis dari dimensi asli gambar":`Pilih rasio target ${T}`}"
                  >
                    ${T==="Otomatis"?"🔄 Otomatis":T}
                  </button>
                `).join("")}
            </div>
          </div>
        </div>
      `:""}

      <!-- 2 DUNIA PARAMETER PANEL (V3.5 PATCH ONLY - KHUSUS TAB 2 DUNIA) -->
      ${t==="TWO_WORLDS"?`
        <div class="two-worlds-config-panel" id="two-worlds-config-panel">
          <div class="two-worlds-header">
            <div class="two-worlds-title">
              <span>🌐</span>
              <span>PARAMETER MODIFIKASI KHUSUS 2 DUNIA</span>
            </div>
            <span class="two-worlds-badge">SOURCE OF TRUTH V3.5</span>
          </div>

          <!-- 1. CUSTOM REQUEST -->
          <div class="two-worlds-field">
            <label class="two-worlds-label" for="tw-custom-request">
              <span>✍️</span>
              <span>1. CUSTOM REQUEST (Instruksi Tambahan)</span>
            </label>
            <div class="two-worlds-hint">
              Instruksi tambahan untuk memodifikasi <strong>PROMPT OPTIMAL</strong>. Karakter/subjek asli tetap dipertahankan utuh kecuali diminta secara eksplisit.
            </div>

            <!-- PROMPT TEMPLATES (Dropdown Pilihan Cepat Template) -->
            <div style="margin-top: 0.5rem; margin-bottom: 0.45rem;">
              <label class="two-worlds-label" for="tw-prompt-template" style="font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 0.25rem;">
                <span>📋</span>
                <span>PROMPT TEMPLATES:</span>
              </label>
              <select id="tw-prompt-template" class="two-worlds-select" style="font-size: 0.8rem; padding: 0.45rem 0.65rem;">
                ${Ha.map(T=>`
                  <option value="${T.id}">${T.label}</option>
                `).join("")}
              </select>
            </div>

            <textarea 
              id="tw-custom-request" 
              class="two-worlds-textarea" 
              rows="3" 
              placeholder="Contoh: Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."
            >${(g==null?void 0:g.customRequest)||""}</textarea>
          </div>

          <!-- DEMOGRAFI SUBJEK: JENIS KELAMIN, USIA, RAS/ETNIS -->
          <div class="two-worlds-grid-row">
            <!-- 2. JENIS KELAMIN SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-gender">
                <span>👤</span>
                <span>2. JENIS KELAMIN SUBYEK</span>
              </label>
              <select id="tw-gender" class="two-worlds-select">
                ${be.map(T=>`
                  <option value="${T}" ${(g==null?void 0:g.gender)===T||!(g!=null&&g.gender)&&T.startsWith("Auto")?"selected":""}>${T}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Diterapkan pada subjek/karakter tambahan atau karakter yang diminta.</div>
            </div>

            <!-- 3. USIA KARAKTER -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-age">
                <span>🎂</span>
                <span>3. USIA KARAKTER</span>
              </label>
              <select id="tw-age" class="two-worlds-select">
                ${fe.map(T=>`
                  <option value="${T}" ${(g==null?void 0:g.age)===T||!(g!=null&&g.age)&&T.startsWith("Auto")?"selected":""}>${T}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Pilihan Auto atau 1 s/d 50 tahun untuk karakter yang dibuat.</div>
            </div>

            <!-- 4. RAS / ETNIS -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-ethnicity">
                <span>🌍</span>
                <span>4. RAS / ETNIS</span>
              </label>
              <select id="tw-ethnicity" class="two-worlds-select">
                ${ye.map(T=>`
                  <option value="${T}" ${(g==null?void 0:g.ethnicity)===T||!(g!=null&&g.ethnicity)&&T.startsWith("Auto")?"selected":""}>${T}</option>
                `).join("")}
              </select>
              <div class="two-worlds-hint">Auto (Smart Detection) atau etnis spesifik karakter.</div>
            </div>
          </div>

          <!-- VISUAL STYLE: STYLE SUBYEK & ENVIRONMENT STYLE -->
          <div class="two-worlds-grid-row">
            <!-- 5. STYLE SUBYEK -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-subject-style">
                <span>🎨</span>
                <span>5. STYLE SUBYEK</span>
              </label>
              <select id="tw-subject-style" class="two-worlds-select">
                ${Ae.map(T=>`
                  <option value="${T}" ${(g==null?void 0:g.subjectStyle)===T||!(g!=null&&g.subjectStyle)&&T.startsWith("Auto")?"selected":""}>${T}</option>
                `).join("")}
              </select>
              <input 
                type="text" 
                id="tw-custom-subject-style" 
                class="two-worlds-input" 
                placeholder="Ketik style subjek custom (misal: Neo-Renaissance Oil Painting)..." 
                value="${(g==null?void 0:g.customSubjectStyle)||""}" 
                style="display: ${(g==null?void 0:g.subjectStyle)==="Custom"?"block":"none"}; margin-top: 0.35rem;" 
              />
              <div class="two-worlds-hint">Hanya mengontrol tampilan visual, materialitas, rendering, dan tekstur subjek.</div>
            </div>

            <!-- 6. ENVIRONMENT STYLE -->
            <div class="two-worlds-field">
              <label class="two-worlds-label" for="tw-env-style">
                <span>🏞️</span>
                <span>6. ENVIRONMENT STYLE</span>
              </label>
              <select id="tw-env-style" class="two-worlds-select">
                ${Ba.map(T=>`
                  <option value="${T.name}" ${(g==null?void 0:g.environmentStyle)===T.name||!(g!=null&&g.environmentStyle)&&T.name.startsWith("Auto")?"selected":""}>${T.name}</option>
                `).join("")}
              </select>
              <div class="two-worlds-desc-box" id="tw-env-desc">
                ${((B=Ba.find(T=>T.name===((g==null?void 0:g.environmentStyle)||"Auto (Smart Detection)")))==null?void 0:B.description)||"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."}
              </div>
              <div class="two-worlds-hint">Mengontrol estetika latar belakang &amp; atmosfer. Subjek asli tetap dipertahankan.</div>
            </div>
          </div>
        </div>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${t==="SHORTHAND_IMPROVE"?`
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan Gambar:</strong> 
          ${c?"Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: DIAGNOSTIC NOTICE -->
      ${t==="COLOUR_GRADING"?`
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #f472b6;">
          <strong>🎨 Mode Analisa Colour Grading:</strong> 
          ${c?"Gambar terpasang. Sistem akan mendiagnosis karakteristik warna (color balance, kurva kontras, shadow toning, highlight roll-off, saturasi, dll.) dan merekomendasikan shorthand colour grading profesional.":"Unggah gambar di atas untuk diagnosis karakter warna, kurva kontras, dan tone komprehensif, atau masukkan catatan preferensi colour grading di bawah."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: ADVANCED PANEL & PREVIEW (V3.6) -->
      ${t==="COLOUR_GRADING"&&I?I.html:""}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 / Colour Grading without image) -->
      ${t==="ANALISA_PROMPT"||(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&!c?`
        <div id="presets-container">
          ${C.html}
        </div>
      `:""}

      <!-- Textarea Input (Hanya untuk Mode 1, Mode 3, dan Colour Grading) -->
      ${t!=="IMAGE_TO_PROMPT"&&t!=="TWO_WORLDS"?`
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
            ${(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&c?t==="COLOUR_GRADING"?"B. Catatan Colour Grading (Opsional / Preferensi Warna):":"B. Prompt Pengguna (Opsional / Catatan Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
          </label>
          <textarea 
            id="prompt-textarea" 
            class="textarea-prompt font-mono" 
            placeholder="${(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&c?t==="COLOUR_GRADING"?"Ketik preferensi atau catatan colour grading yang diinginkan (opsional, misal: tone sinematik hangat, teal and orange, moody film grain, muted shadows)...":"Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
          >${u||""}</textarea>
        </div>
      `:""}

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${t==="TWO_WORLDS"?"💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk sintesis prompt 2 Dunia &amp; rekomendasi shorthand.":t==="IMAGE_TO_PROMPT"?"💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk menghasilkan deskripsi visual 13 atribut &amp; rekomendasi shorthand.":t==="COLOUR_GRADING"&&c?"💡 Mendiagnosis parameter warna, tone curve, saturasi &amp; merekomendasikan seluruh shorthand colour grading yang relevan tanpa batasan jumlah.":t==="SHORTHAND_IMPROVE"&&c?"💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik."}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${s?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${s?t==="TWO_WORLDS"?"🌐 Menganalisis 2 Dunia...":t==="IMAGE_TO_PROMPT"?"🔍 Menganalisis Gambar...":t==="COLOUR_GRADING"&&c?"🎨 Mendiagnosis Colour Grading...":t==="SHORTHAND_IMPROVE"&&c?"🛠️ Mendiagnosis Gambar...":t==="COLOUR_GRADING"?"🎨 Menganalisis Colour Grading...":n?"Mencari Online...":"Menganalisis...":t==="TWO_WORLDS"?"🌐 Analisa 2 Dunia → Prompt":t==="IMAGE_TO_PROMPT"?"🔍 Analisa Gambar → Prompt":t==="COLOUR_GRADING"&&c?"🎨 Analisa Colour Grading Gambar":t==="COLOUR_GRADING"?"🎨 Analisa Colour Grading":t==="SHORTHAND_IMPROVE"&&c?"🛠️ Analisa Perbaikan Gambar":t==="SHORTHAND_IMPROVE"?"🛠️ Analisa Shorthand &amp; Perbaikan":n?"🌐 Analisis Prompt":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(T){t==="COLOUR_GRADING"&&I&&I.bindEvents(T),(t==="ANALISA_PROMPT"||(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&!c)&&C.bindEvents(T);const j=T.querySelector("#prompt-textarea"),w=T.querySelector("#btn-run-analysis"),G=T.querySelector("#btn-clear-prompt"),L=T.querySelector("#btn-reset-app");T.querySelectorAll(".mode-tab-btn").forEach(U=>{U.addEventListener("click",()=>{const X=U.getAttribute("data-mode");o&&X!==t&&o(X)})});const H=T.querySelector("#image-dropzone"),P=T.querySelector("#image-file-input"),Y=T.querySelector("#btn-change-image"),W=T.querySelector("#btn-remove-image");if(P){let U=function(x){return new Promise(y=>{if(!x)return y(null);const E=x.type&&x.type.startsWith("image/"),N=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(x.name||"");if(!E&&!N)return y(null);const M=new FileReader;M.onload=K=>{const $=K.target.result,D=new Image;D.onload=()=>{const Q=D.naturalWidth||D.width||800,ra=D.naturalHeight||D.height||800;let ga=$,Sa=null,pa=null;try{let na=Q,la=ra;if(na>1280||la>1280){const ua=Math.min(1280/na,1280/la);na=Math.round(na*ua),la=Math.round(la*ua)}const da=document.createElement("canvas");da.width=na,da.height=la,da.getContext("2d").drawImage(D,0,0,na,la),Sa=za(da,{filename:x.name,targetAspectRatio:l}),t==="COLOUR_GRADING"&&(pa=Ie(da)),ga=da.toDataURL("image/jpeg",.88)}catch(ka){console.warn("Canvas processing fallback:",ka),ga=$,Sa=za(null,{filename:x.name,targetAspectRatio:l})}const ca=Ka(Q,ra);y({file:x,name:x.name,size:x.size,type:"image/jpeg",base64:ga,previewUrl:ga,width:Q,height:ra,aspectRatio:ca,detectedAspectRatio:ca,visualTelemetry:Sa,colorTelemetry:pa})},D.onerror=()=>{y({file:x,name:x.name,size:x.size,type:"image/jpeg",base64:$,previewUrl:$,width:0,height:0,visualTelemetry:null,colorTelemetry:null})},D.src=$},M.onerror=()=>y(null),M.readAsDataURL(x)})};var z=U;H&&(H.addEventListener("click",()=>{P.click()}),H.addEventListener("dragover",x=>{x.preventDefault(),H.classList.add("dragover")}),H.addEventListener("dragleave",()=>{H.classList.remove("dragover")}),H.addEventListener("drop",x=>{x.preventDefault(),H.classList.remove("dragover"),x.dataTransfer.files&&x.dataTransfer.files.length>0&&(t==="COLOUR_GRADING"&&x.dataTransfer.files.length>1?X(Array.from(x.dataTransfer.files)):aa(x.dataTransfer.files[0]))})),Y&&Y.addEventListener("click",()=>{P.click()}),P.addEventListener("change",()=>{P.files&&P.files.length>0&&(t==="COLOUR_GRADING"&&P.files.length>1?X(Array.from(P.files)):aa(P.files[0]),P.value="")});async function X(x){const y=x.filter(N=>{const M=N.type&&N.type.startsWith("image/"),K=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(N.name||"");return M||K});if(y.length===0){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const E=[];for(const N of y){const M=await U(N);M&&E.push(M)}E.length>0&&p&&p(E[0],E)}async function aa(x){if(!x)return;const y=x.type&&x.type.startsWith("image/"),E=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(x.name||"");if(!y&&!E){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const N=await U(x);N&&p&&p(N,[N])}}if(W&&W.addEventListener("click",()=>{h&&h()}),T.querySelectorAll(".aspect-ratio-btn").forEach(U=>{U.addEventListener("click",X=>{X.preventDefault();const aa=U.getAttribute("data-ratio");b&&b(aa)})}),w&&w.addEventListener("click",()=>{if(t==="IMAGE_TO_PROMPT"||t==="TWO_WORLDS"){if(!c){P&&P.click();return}a&&a("");return}const U=j?j.value:"";a&&a(U)}),G&&G.addEventListener("click",()=>{j&&(j.value=""),i&&i()}),L&&L.addEventListener("click",()=>{e&&e()}),j&&j.addEventListener("keydown",U=>{(U.ctrlKey||U.metaKey)&&U.key==="Enter"&&(U.preventDefault(),a&&a(j.value))}),t==="TWO_WORLDS"){const U=T.querySelector("#tw-prompt-template"),X=T.querySelector("#tw-custom-request"),aa=T.querySelector("#tw-gender"),x=T.querySelector("#tw-age"),y=T.querySelector("#tw-ethnicity"),E=T.querySelector("#tw-subject-style"),N=T.querySelector("#tw-custom-subject-style"),M=T.querySelector("#tw-env-style"),K=T.querySelector("#tw-env-desc"),$=()=>{m&&m({customRequest:X?X.value:"",gender:aa?aa.value:"Auto (Smart Detection) mengikuti gambar unggahan",age:x?x.value:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:y?y.value:"Auto (Smart Detection)",subjectStyle:E?E.value:"Auto (Smart Detection)",customSubjectStyle:N?N.value:"",environmentStyle:M?M.value:"Auto (Smart Detection)"})};U&&U.addEventListener("change",()=>{const D=U.value,Q=Ha.find(ra=>ra.id===D);Q&&Q.id!=="none"&&Q.text&&X&&(X.value=Q.text,$())}),X&&X.addEventListener("input",()=>{if(U&&U.value!=="none"){const D=Ha.find(Q=>Q.id===U.value);D&&X.value!==D.text&&(U.value="none")}$()}),aa&&aa.addEventListener("change",$),x&&x.addEventListener("change",$),y&&y.addEventListener("change",$),E&&E.addEventListener("change",()=>{const D=E.value==="Custom";N&&(N.style.display=D?"block":"none",D&&N.focus()),$()}),N&&N.addEventListener("input",$),M&&M.addEventListener("change",()=>{const D=M.value,Q=Ba.find(ra=>ra.name===D);K&&(K.textContent=Q?Q.description:""),$()})}}}}function Me(u=[],a,e="ANALISA_PROMPT"){const i=u&&u.length>0,r=e==="IMAGE_TO_PROMPT"?"D":"G",s=i?u.map(t=>{const o=t.type==="EDIT_VS_LOCK"||t.shorthandA&&t.shorthandA.includes("lock"),c=o?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${t.shorthandB} (Hapus ${t.shorthandA})`,p=o?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${t.shorthandA} (Hapus ${t.shorthandB})`,h=t.suggestion||_e(t);return`
    <div class="conflict-banner" data-conflict-id="${t.id}" style="margin-bottom: 0.75rem;">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>DETEKSI KONFLIK &mdash; CONFLICT DETECTED</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${t.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${t.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${t.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${t.instructionA||t.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${t.instructionB||t.shorthandB}"</em>
        </span>
      </div>

      <!-- SARAN SOLUSI KONFLIK -->
      <div class="conflict-suggestion-box">
        <div class="conflict-suggestion-header">
          <svg class="icon-sm" viewBox="0 0 24 24" width="16" height="16" style="vertical-align: middle;"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
          <span>💡 SARAN SOLUSI:</span>
        </div>
        <div class="conflict-suggestion-text">
          ${h}
        </div>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${t.id}">
          ${c}
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${t.id}">
          ${p}
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${t.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `}).join(""):"";return{html:`
    <!-- CARD SHORTHAND KONFLIK (CONFLICT DETECTED) -->
    <section class="panel analyzer-card" id="card-conflicts">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: ${i?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">${r}</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${i?"badge-wajib":"badge-neutral"}">
          ${i?`${u.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${i?`
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${s}
        </div>
      `:`
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik shorthand. Seluruh instruksi dan elemen visual konsisten.</span>
        </div>
      `}
    </section>
  `,bindEvents(t){t.querySelectorAll(".btn-resolve").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-action"),p=o.getAttribute("data-conflict-id");a&&a(p,c)})})}}}function _e(u){if(u.suggestion)return u.suggestion;const a=u.shorthandA||"",e=u.shorthandB||"";if(u.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const i=a.includes("lock")?a:e,r=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${i}) dan terapkan instruksi ubah (${r}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${i}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${u.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function xe({installedShorthands:u=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:i}){const r=u.length>0?u.map(t=>`
        <span class="shorthand-chip" data-code="${t}">
          <span>${t}</span>
          <button type="button" class="chip-remove-btn" data-code="${t}" title="Hapus ${t}">&times;</button>
        </span>
      `).join(""):'<span style="font-size: 0.8rem; color: var(--text-dim); font-style: italic;">Belum ada shorthand terpasang</span>';return{html:`
    <div class="installed-shorthands-bar">
      <div class="installed-title-row">
        <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.04em;">
          Shorthand Terpasang:
        </span>

        <!-- Add shorthand selector from catalog -->
        <div class="add-shorthand-controls">
          <select id="select-catalog-shorthand" class="select-input">
            <option value="">-- Pilih Shorthand dari Catalog --</option>
            ${a.filter(t=>!u.includes(t.code)).map(t=>`
      <option value="${t.code}">${t.code} - ${t.name}</option>
    `).join("")}
          </select>
          <button type="button" class="btn btn-secondary btn-xs" id="btn-add-shorthand" title="Pasang shorthand ke prompt">
            + Tambah
          </button>
        </div>
      </div>

      <div class="installed-chips-container" id="installed-chips-list">
        ${r}
      </div>
    </div>
  `,bindEvents(t){t.querySelectorAll(".chip-remove-btn").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation();const l=p.getAttribute("data-code");e&&e(l)})});const o=t.querySelector("#btn-add-shorthand"),c=t.querySelector("#select-catalog-shorthand");o&&c&&o.addEventListener("click",()=>{const p=c.value;p&&i&&i(p)})}}}function $e({optimalPrompt:u="",installedShorthands:a=[],catalog:e=[],isOnlineActive:i=!1,isEnriching:r=!1,onCopyPrompt:s,onEnrichPrompt:n,onRemoveShorthand:t,onAddShorthand:o}){const c=xe({installedShorthands:a,catalog:e,onRemoveShorthand:t,onAddShorthand:o}),p=ee(u),h=we(u);return Ce(u,a),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${p} kata &bull; ~${h} token
          </span>
          <button 
            type="button" 
            class="btn btn-enrich btn-sm" 
            id="btn-enrich-ai" 
            ${!i||r||!u?"disabled":""}
            title="${i?u?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
          >
            ${r?"⏳ MEMPERKAYA...":"✨ PERKAYA DENGAN AI"}
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-main-prompt" title="Hanya salin main prompt tanpa metadata">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            SALIN PROMPT
          </button>
        </div>
      </div>

      <!-- Optimal Output String Display -->
      <div class="optimal-output-box" id="optimal-prompt-display">
        <span>${u||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${c.html}
    </section>
  `,bindEvents(b){c.bindEvents(b);const g=b.querySelector("#btn-copy-main-prompt");g&&g.addEventListener("click",()=>{s&&s(u)});const m=b.querySelector("#btn-enrich-ai");m&&m.addEventListener("click",()=>{n&&!r&&i&&u&&n()})}}}function Ue(u){const{primaryAction:a="-",primaryTarget:e="-",summary:i="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:r="-",category:s="-"}=u||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${i}</p>
      </div>

      <div class="intent-grid">
        <div class="intent-meta-card">
          <span class="intent-meta-label">INTENT</span>
          <span class="intent-meta-value">${a}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">TARGET AREA</span>
          <span class="intent-meta-value">${e}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">KATEGORI</span>
          <span class="intent-meta-value">${s}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${r}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function De(u=[]){const a=u.length>0?u.map(i=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${i.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${i.label}</span>
              ${i.shorthand?`<span class="badge badge-blue font-mono">${i.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${i.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${u.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function He(u=[],a=[]){const e=u.length>0?u.map(r=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${r.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${r.label}</span>
              ${r.shorthand?`<span class="badge badge-wajib font-mono">${r.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${r.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Seluruh elemen visual selain instruksi edit dipertahankan secara otomatis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-locked-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">C</span>
          <h2>AREA YANG DIPERTAHANKAN / LOCKED</h2>
        </div>
        <span class="badge badge-blue">${u.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function Be(u){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:i=""}=u||{};return{html:`
    <section class="panel analyzer-card" id="card-transformation">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">D</span>
          <h2>TRANSFORMASI VISUAL FROM &rarr; TO</h2>
        </div>
      </div>

      <div class="transform-flow-card">
        <!-- FROM BOX -->
        <div class="transform-box">
          <span class="transform-box-label">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            KONDISI AWAL (FROM)
          </span>
          <p class="transform-box-content">${a}</p>
        </div>

        <!-- ARROW ICON -->
        <div class="transform-arrow-box">
          <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </div>

        <!-- TO BOX -->
        <div class="transform-box" style="border-left: 3px solid var(--accent-blue);">
          <span class="transform-box-label" style="color: #60a5fa;">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            KONDISI TARGET (TO)
          </span>
          <p class="transform-box-content">${e}</p>
        </div>
      </div>

      ${i?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${i}</p>`:""}
    </section>
  `,bindEvents(){}}}function Ke({primaryShorthands:u=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:i=[],activeMode:r="ANALISA_PROMPT",onToggleShorthand:s}){const n=r==="IMAGE_TO_PROMPT",t=n?"A":"E",o=n?"B":"F",c=u.length>0?u:e.filter(g=>g.isPrimary!==!1&&g.priority==="WAJIB"),p=a.length>0?a:e.filter(g=>g.isPrimary===!1||g.priority!=="WAJIB"),h=c.length>0?c.map(g=>{var f,R,O;const m=i.includes(g.code),d=g.equivalentTo||((f=g.item)==null?void 0:f.equivalentTo)||[],k=g.functionGroup||((R=g.item)==null?void 0:R.functionGroup)||g.category;return`
          <div class="rec-card primary-rec-card ${m?"rec-card-active":""}" data-code="${g.code}">
            <div>
              <div class="rec-card-header">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="rec-code" style="color: #60a5fa; font-size: 1rem; font-weight: 800;">✓ ${g.code}</span>
                  <span class="badge badge-wajib">WAJIB</span>
                  <span class="badge badge-blue font-mono" style="font-size: 0.675rem;">REPRESENTATIF UTAMA</span>
                  ${g.source==="ONLINE"||g.isOnline?'<span class="badge badge-online">🌐 ONLINE</span>':""}
                </div>
                <span class="badge badge-neutral" style="font-size: 0.7rem;">${g.category}</span>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${g.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${g.target}</span></div>
                <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #c084fc;">${k}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${g.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${g.source==="ONLINE"||g.isOnline?"ONLINE":((O=g.item)==null?void 0:O.status)||"CORE"}</span></div>
                ${d.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${d.map(A=>`<span class="alias-tag font-mono">${A}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${m?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${m?"✅ Aktif Otomatis di Prompt Optimal":"⚠️ Dilepas dari Prompt"}
              </span>
              <button 
                type="button" 
                class="btn ${m?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${g.code}"
                title="${m?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${m?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',l=p.length>0?p.map(g=>{var R;const m=i.includes(g.code),d=g.equivalentTo||((R=g.item)==null?void 0:R.equivalentTo)||[],k=g.relationship||"CONTEXTUAL",f=g.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${m?"rec-card-active":""}" data-code="${g.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${g.code}" 
                    ${m?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${g.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${k}</span>
                  ${g.source==="ONLINE"||g.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${f}" style="font-size: 0.675rem;">${g.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${g.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${g.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${g.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${k}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${g.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${g.source==="ONLINE"||g.isOnline?"ONLINE":g.source||"CORE"}</span></div>
                ${d.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${d.map(O=>`<span class="alias-tag font-mono">${O}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${m?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${m?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
              </span>
              <button 
                type="button" 
                class="btn ${m?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
                data-code="${g.code}"
                title="${m?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
              >
                ${m?"Batal Centang":"+ Centang & Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand berhubungan yang relevan.</div>';return{html:`
    <!-- CARD: SHORTHAND UTAMA (PRIMARY SHORTHAND) -->
    <section class="panel analyzer-card" id="card-primary-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${t}</span>
          <h2>SHORTHAND UTAMA (PRIMARY SHORTHAND)</h2>
        </div>
        <span class="badge badge-blue">${c.length} Aktif Otomatis</span>
      </div>

      ${c.length===0&&p.length===0?`
        <div class="empty-recs-notice" style="padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); color: #93c5fd; font-size: 0.85rem; margin-bottom: 0.85rem;">
          ℹ️ Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.
        </div>
      `:""}

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Mewakili instruksi langsung dari prompt user. Otomatis terpasang [✓] dan masuk ke Prompt Optimal dengan deduplikasi fungsi terbaik.
      </p>

      <div class="rec-grid">
        ${h}
      </div>
    </section>

    <!-- CARD: SHORTHAND BERHUBUNGAN (RELATED SHORTHAND) -->
    <section class="panel analyzer-card" id="card-related-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${o}</span>
          <h2>SHORTHAND BERHUBUNGAN (RELATED SHORTHAND)</h2>
        </div>
        <span class="badge badge-purple">${p.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${l}
      </div>
    </section>
  `,bindEvents(g){g.querySelectorAll(".btn-toggle-rec").forEach(m=>{m.addEventListener("click",d=>{d.stopPropagation();const k=m.getAttribute("data-code");s&&s(k)})}),g.querySelectorAll(".related-checkbox").forEach(m=>{m.addEventListener("change",d=>{d.stopPropagation();const k=m.getAttribute("data-code");s&&s(k)})})}}}function ze(u=[],a=[],e){const i=u.length>0?u.map(s=>{const n=a.includes(s.code),t=s.equivalentTo||[],o=s.functionGroup||s.category;return`
      <div class="rec-card similar-rec-card ${n?"rec-card-active":""}" data-code="${s.code}">
        <div class="related-item-content">
          <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                class="similar-checkbox" 
                data-code="${s.code}" 
                ${n?"checked":""} 
                style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #0ea5e9;"
              />
              <span class="rec-code" style="color: #38bdf8; font-size: 1rem; font-weight: 800;">${s.code}</span>
            </label>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <span class="badge badge-blue" style="font-size: 0.675rem; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.4); color: #38bdf8;">ALTERNATIF</span>
              <span class="badge badge-neutral" style="font-size: 0.7rem;">${s.category}</span>
            </div>
          </div>

          <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
            <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${s.name}</span></div>
            <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${s.target||"Visual"}</span></div>
            <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #38bdf8;">${o}</span></div>
            <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${s.reason}</span></div>
            ${t.length>0?`
              <div style="margin-top: 0.2rem;">
                <strong style="color: var(--text-muted);">Alias Setara:</strong>
                ${t.map(c=>`<span class="alias-tag font-mono">${c}</span>`).join(" ")}
              </div>
            `:""}
          </div>
        </div>

        <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: ${n?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
            ${n?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
          </span>
          <button 
            type="button" 
            class="btn ${n?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
            data-code="${s.code}"
            title="${n?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
          >
            ${n?"Batal Centang":"+ Centang & Pasang"}
          </button>
        </div>
      </div>
    `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand alternatif tambahan yang terdeteksi.</div>';return{html:`
    <!-- CARD C: SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND) -->
    <section class="panel analyzer-card" id="card-similar-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: #0ea5e9; color: #fff;">C</span>
          <h2>SHORTHAND ALTERNATIF / SERUPA (SIMILAR SHORTHAND)</h2>
        </div>
        <span class="badge badge-neutral">${u.length} Alternatif</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Shorthand alternatif atau sinonim yang memiliki kesamaan fungsi/kategori dengan shorthand utama atau pendukung. Nonaktif secara default <strong>[ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${i}
      </div>
    </section>
  `,bindEvents(s){s&&(s.querySelectorAll(".similar-checkbox").forEach(n=>{n.addEventListener("change",t=>{t.stopPropagation();const o=n.getAttribute("data-code");e&&e(o)})}),s.querySelectorAll("#card-similar-shorthands .btn-toggle-rec").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const o=n.getAttribute("data-code");e&&e(o)})}))}}}function Ve(u=[],a="ANALISA_PROMPT"){const e=u.length,i=a==="IMAGE_TO_PROMPT"?"E":"H",r=e>0?u.map(n=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${n.code}</span>
            <span class="exclusion-target">&bull; ${n.target}</span>
          </div>
          <p class="exclusion-reason">
            ${n.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header exclusions-toggle-header" id="header-exclusions" role="button" tabindex="0" title="Klik untuk menampilkan atau menyembunyikan daftar pengecualian">
        <div class="card-title">
          <span class="card-step-badge">${i}</span>
          <h2>SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <div class="exclusions-header-actions" style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="badge badge-neutral">${e} Dikecualikan</span>
          <button type="button" class="btn btn-secondary btn-xs btn-toggle-exclusions" id="btn-toggle-exclusions" aria-expanded="false" title="Tampilkan / Sembunyikan daftar">
            <svg class="icon-sm icon-eye" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          </button>
        </div>
      </div>

      <!-- DEFAULT HIDE: Konten tersembunyi secara default agar tidak mengambil ruang tampilan utama -->
      <div class="exclusions-content" id="exclusions-content" style="display: none;">
        <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0.75rem 0 0.85rem 0;">
          Engine secara cerdas mengecualikan shorthand di bawah ini karena tidak relevan dengan konteks prompt:
        </p>

        <div class="exclusions-grid">
          ${r}
        </div>
      </div>
    </section>
  `,bindEvents(n){if(!n)return;const t=n.querySelector("#btn-toggle-exclusions"),o=n.querySelector("#exclusions-content"),c=n.querySelector("#header-exclusions");if(!t||!o)return;const p=h=>{h&&(h.preventDefault(),h.stopPropagation()),o.style.display==="none"||!o.style.display?(o.style.display="block",t.setAttribute("aria-expanded","true"),t.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,t.classList.remove("btn-secondary"),t.classList.add("btn-outline")):(o.style.display="none",t.setAttribute("aria-expanded","false"),t.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,t.classList.remove("btn-outline"),t.classList.add("btn-secondary"))};t.addEventListener("click",p),c&&(c.addEventListener("click",h=>{h.target.closest("#btn-toggle-exclusions")||p(h)}),c.addEventListener("keydown",h=>{if(h.key==="Enter"||h.key===" "){if(h.target.closest("#btn-toggle-exclusions"))return;p(h)}}))}}}function We({analysisResult:u,currentPrompt:a,catalog:e,isAnalyzing:i,isOnlineActive:r=!1,isEnriching:s=!1,activeMode:n="ANALISA_PROMPT",uploadedImage:t=null,onModeChange:o,onImageSelected:c,onImageRemoved:p,onAnalyze:h,onReset:l,onClear:b,onSelectPreset:g,onCopyPrompt:m,onCopyGeneratedPrompt:d,onEnrichPrompt:k,onAddShorthand:f,onRemoveShorthand:R,onToggleRecommendation:O,onResolveConflict:A,selectedAspectRatio:C="auto",onAspectRatioChange:I,twoWorldsConfig:v=null,onTwoWorldsConfigChange:S,colourGradingConfig:B=null,onColourGradingConfigChange:T,onResetGrading:j,batchImages:w=[],activeBatchIndex:G=0,onSelectBatchImage:L}){var J;const{optimalPrompt:H="",generatedPrompt:P="",visualBreakdown:Y=null,isImageRepair:W=!1,visualConditionSummary:oa="",calculatedAdjustments:z=null,protectionLogs:U=[],colorGradingRecipe:X=null,optimizationAreas:aa=[],goodAspects:x=[],diagnosedShorthands:y=[],installedShorthands:E=[],conflicts:N=[],intent:M={},editAreas:K=[],lockedAreas:$=[],unchangedAreas:D=[],visualTransformation:Q={},primaryShorthands:ra=[],relatedShorthands:ga=[],similarShorthands:Sa=[],recommendations:pa=[],exclusions:ca=[]}=u||{};function ka(F){switch(F){case"PRIMARY_ISSUE":return'<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';case"SECONDARY_ISSUE":return'<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';case"OPTIMIZATION":return'<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';case"PRESERVATION":return'<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';case"FINISHING":return'<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';default:return'<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>'}}const na=Ge({currentValue:a,onAnalyze:h,onReset:l,onClear:b,onSelectPreset:g,isAnalyzing:i,isOnlineActive:r,activeMode:n,onModeChange:o,uploadedImage:t,onImageSelected:c,onImageRemoved:p,selectedAspectRatio:C,onAspectRatioChange:I,twoWorldsConfig:v,onTwoWorldsConfigChange:S,colourGradingConfig:B,onColourGradingConfigChange:T,onResetGrading:j,batchImages:w,activeBatchIndex:G,onSelectBatchImage:L}),la=Me(N,A,n),da=$e({optimalPrompt:H,installedShorthands:E,catalog:e,isOnlineActive:r,isEnriching:s,onCopyPrompt:m,onEnrichPrompt:k,onRemoveShorthand:R,onAddShorthand:f}),Ea=Ue(M),ua=De(K),La=He($,D),Na=Be(Q),va=Ke({primaryShorthands:ra,relatedShorthands:ga,recommendations:pa,installedShorthands:E,activeMode:n,onToggleShorthand:O}),Ra=ze(Sa,E,O),Ia=Ve(ca,n);return n==="IMAGE_TO_PROMPT"||n==="TWO_WORLDS"?P?{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${na.html}

        <!-- 2. PROMPT HASIL ANALISIS GAMBAR -->
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">
                ${n==="TWO_WORLDS"?"PROMPT HASIL ANALISA 2 DUNIA":"PROMPT HASIL ANALISA GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              ${n==="TWO_WORLDS"?'<span class="badge badge-purple" style="background: rgba(168, 85, 247, 0.15); border: 1px solid #c084fc; color: #c084fc;">🌐 Mode 2 Dunia</span>':""}
              ${(u==null?void 0:u.source)==="GEMINI_AI"?`<span class="badge badge-blue" style="background: rgba(14, 165, 233, 0.15); border: 1px solid #38bdf8; color: #38bdf8;">🌐 Vision AI Aktif (${((J=u.imageInfo)==null?void 0:J.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-blue">🤖 Source of Truth Visual</span>'}
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem; white-space: pre-wrap;">
              ${P}
            </p>
          </div>
          ${Y?`
            <div style="margin-top: 1rem;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📋</span> Rincian 13 Atribut Visual Gambar Aktual:
              </h3>
              <div class="visual-breakdown-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.55rem; font-size: 0.825rem;">
                ${Object.entries(Y).map(([_,ea],ya)=>`
                  <div style="background: rgba(15, 23, 42, 0.7); padding: 0.55rem 0.75rem; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2); display: flex; flex-direction: column; gap: 0.2rem;">
                    <strong style="color: #38bdf8; font-size: 0.8rem;">${ya+1}. ${_}</strong>
                    <span style="color: #f1f5f9; font-size: 0.8rem; line-height: 1.4;">${ea}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </section>

        <!-- 3. PROMPT OPTIMAL -->
        ${da.html}

        <!-- 4. MAKSUD PROMPT -->
        ${Ea.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${ua.html}
          ${La.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${Na.html}

        <!-- 7. SHORTHAND ANALYSIS (5 Kelompok Terpisah Sesuai Blueprint) -->
        <!-- A & B. Shorthand Utama & Shorthand Berhubungan -->
        ${va.html}

        <!-- C. Shorthand Alternatif / Serupa -->
        ${Ra.html}

        <!-- D. Shorthand Konflik -->
        ${la.html}

        <!-- E. Shorthand Tidak Diperlukan (Dikecualikan) -->
        ${Ia.html}
      </div>
    `,bindEvents(_){na.bindEvents(_),da.bindEvents(_),va.bindEvents(_),Ra.bindEvents(_),la.bindEvents(_),Ia.bindEvents(_);const ea=_.querySelector("#btn-copy-generated-prompt");ea&&ea.addEventListener("click",()=>{d&&d(P)})}}:{html:`
          <div class="analyzer-stream-container">
            ${na.html}
          </div>
        `,bindEvents(_){na.bindEvents(_)}}:{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${na.html}

      <!-- MODE 3 / COLOUR GRADING SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN / COLOUR GRADING GAMBAR CARD -->
      ${(n==="SHORTHAND_IMPROVE"||n==="COLOUR_GRADING")&&W?`
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: ${n==="COLOUR_GRADING"?"#ec4899":"#c084fc"};"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: ${n==="COLOUR_GRADING"?"#ec4899":"#c084fc"};">
                ${n==="COLOUR_GRADING"?"🎨 DIAGNOSIS &amp; REKOMENDASI COLOUR GRADING":"🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge ${n==="COLOUR_GRADING"?"badge-pink":"badge-purple"}">
                ${n==="COLOUR_GRADING"?"🎨 Diagnosis Tone & Palet Warna":"🔍 Diagnosis Visual Komprehensif"}
              </span>
              <span class="badge badge-blue">⚡ ${y.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual / Warna Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>${n==="COLOUR_GRADING"?"🎨":"📷"}</span> ${n==="COLOUR_GRADING"?"Ringkasan Karakter Warna & Tone Gambar:":"Ringkasan Kondisi Visual Gambar:"}
            </h3>
            <div style="background: ${n==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.08)":"rgba(168, 85, 247, 0.08)"}; border-left: 3px solid ${n==="COLOUR_GRADING"?"#ec4899":"#c084fc"}; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${oa}
            </div>
          </div>

          <!-- 1.5. HASIL PENYESUAIAN ADAPTIF PER-FOTO & PROTEKSI CERDAS (KHUSUS COLOUR GRADING) -->
          ${n==="COLOUR_GRADING"&&z?`
            <div style="margin-bottom: 1.15rem; background: rgba(30, 41, 59, 0.55); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 8px; padding: 0.85rem 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.55rem; flex-wrap: wrap; gap: 0.4rem;">
                <h3 style="font-size: 0.825rem; font-weight: 700; color: #f472b6; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                  <span>🎚️</span> Parameter Penyesuaian Adaptif Terhitung (Target: ${z.targetStyle||"Adaptive"} &bull; ${z.intensityPercent||50}%):
                </h3>
                <span class="badge badge-outline" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.4); font-size: 0.7rem;">
                  Non-Destructive &bull; Source Preserved
                </span>
              </div>

              <!-- Parameter Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 0.65rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Exposure</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.exposure>0?"+":""}${z.exposure} EV</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Contrast</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.contrast>0?"+":""}${z.contrast}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Highlights</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.highlights>0?"+":""}${z.highlights}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Shadows</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.shadows>0?"+":""}${z.shadows}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Warmth (Temp)</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.warmth>0?"+":""}${z.warmth}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Tint</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.tint>0?"+":""}${z.tint}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Vibrance</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.vibrance>0?"+":""}${z.vibrance}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Saturation</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${z.saturation>0?"+":""}${z.saturation}</strong>
                </div>
              </div>

              <!-- Proteksi Cerdas yang Diterapkan -->
              ${z.protectionLogs&&z.protectionLogs.length>0?`
                <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 0.5rem; font-size: 0.735rem; color: #a7f3d0; line-height: 1.45;">
                  <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🛡️ Proteksi Cerdas Diterapkan:</strong>
                  ${z.protectionLogs.map(F=>`<div>&bull; ${F}</div>`).join("")}
                </div>
              `:""}
            </div>
          `:""}

          <!-- 2. Area yang Membutuhkan Optimasi / Penyesuaian -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> ${n==="COLOUR_GRADING"?"Area Penyesuaian Tone & Warna":"Area yang Membutuhkan Optimasi"} (${aa.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${aa.map((F,_)=>`
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${_+1}. ${F.aspect}</strong>
                    ${ka(F.priority)}
                  </div>
                  <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0 0 0.4rem 0; line-height: 1.45;">
                    ${F.problem}
                  </p>
                  <div style="color: #38bdf8; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
                    <span>➔ Tindakan:</span> <span>${F.suggestedAction}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Aspek yang Sudah Baik -->
          ${x&&x.length>0?`
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${x.map(F=>`<li>${F}</li>`).join("")}
                </ul>
                <small style="color: #86efac; display: block; margin-top: 0.4rem; font-size: 0.75rem;">
                  💡 <em>Catatan: Aspek visual di atas sudah optimal pada foto asli, sehingga sistem secara cerdas tidak memunculkan shorthand yang tidak diperlukan untuk menjaga keaslian.</em>
                </small>
              </div>
            </div>
          `:""}

          <!-- 4. Rekomendasi Shorthand Perbaikan / Colour Grading (UNLIMITED) -->
          <div style="margin-bottom: 0.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                <span>🎯</span> ${n==="COLOUR_GRADING"?"Rekomendasi Shorthand Colour Grading":"Rekomendasi Shorthand Perbaikan"} (${y.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${y.map(F=>`
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${n==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.25)":"rgba(168, 85, 247, 0.25)"}; border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: ${n==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
                        ${F.code}
                      </code>
                      ${ka(F.issuePriority)}
                    </div>
                    <div style="font-weight: 600; color: #f1f5f9; font-size: 0.825rem; margin-bottom: 0.25rem;">
                      ${F.name}
                    </div>
                    <p style="color: #94a3b8; font-size: 0.775rem; margin: 0 0 0.45rem 0; line-height: 1.4;">
                      ${F.reason}
                    </p>
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.725rem; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 0.4rem; margin-top: 0.25rem;">
                    <span>Grup: <strong style="color: #cbd5e1;">${F.functionGroup}</strong></span>
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: ${n==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; border-color: ${n==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.4)":"rgba(168, 85, 247, 0.4)"};">TERPASANG</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${da.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${Ea.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${ua.html}
        ${La.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${Na.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${va.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${la.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${Ia.html}
    </div>
  `,bindEvents(F){na.bindEvents(F),da.bindEvents(F),va.bindEvents(F),la.bindEvents(F),Ia.bindEvents(F);const _=F.querySelector("#btn-copy-generated-prompt");_&&_.addEventListener("click",()=>{d&&d(P)})}}}function Fe({searchQuery:u="",searchResults:a=[],selectedShorthands:e=[],isSearching:i=!1,searchNotice:r=null,hasSearched:s=!1,onSearch:n,onAddShorthand:t,onRemoveShorthand:o,onClearAll:c,onCopyShorthands:p}){const h=new Set(e.map(d=>(d.code||d).toLowerCase())),l=e.length>0;let b="";l?b=e.map((d,k)=>{const f=typeof d=="string"?d:d.code,R=typeof d=="object"&&d.name?d.name:"";return`
          <div class="selected-shorthand-tag ${typeof d=="object"&&d.source==="ONLINE"?"tag-online":""}" title="${R?R+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${f}</span>
            <button type="button" class="btn-remove-tag" data-code="${f}" aria-label="Hapus ${f}">
              &times;
            </button>
          </div>
        `}).join(""):b=`
      <div class="empty-selected-notice">
        Belum ada shorthand yang dipilih. Cari shorthand di bawah lalu tekan tombol <strong>[ + ]</strong>.
      </div>
    `;let g="";return i?g=`
      <div class="searching-state">
        <div class="spinner"></div>
        <span>Mencari di katalog lokal &amp; online fallback...</span>
      </div>
    `:s&&a.length===0?g=`
      <div class="no-results-card">
        <div class="no-results-icon">🔍</div>
        <p class="no-results-text">
          ${r||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?g=`
      <div class="dictionary-results-grid">
        ${a.map(d=>{const k=h.has((d.code||"").toLowerCase()),f=d.source==="ONLINE",R=f?"badge-online":"badge-local",O=f?"🌐 ONLINE":"LOCAL";return`
              <div class="dictionary-card ${k?"card-selected":""}" data-code="${d.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${d.code}</span>
                    <span class="source-badge ${R}">${O}</span>
                  </div>
                  <div class="card-action">
                    ${k?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${d.code}" title="Tambahkan ${d.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${d.name||d.code}</div>
                  <div class="card-desc">${d.description||"Tidak ada deskripsi"}</div>
                  ${d.equivalentTo&&d.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${d.equivalentTo.slice(0,4).map(A=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${A}</span>`).join("")}
                      ${d.equivalentTo.length>4?`<span style="opacity: 0.6;">+${d.equivalentTo.length-4} lainnya</span>`:""}
                    </div>
                  `:""}
                </div>
              </div>
            `}).join("")}
      </div>
    `:g=`
      <div class="initial-search-hint">
        <p>Ketik kata kunci untuk mencari notasi shorthand visual. Contoh: <code>wajah</code>, <code>rambut</code>, <code>pencahayaan</code>, <code>ketajaman</code>, <code>cinematic</code>, <code>portrait</code>.</p>
      </div>
    `,{html:`
    <div class="dictionary-page-container">
      <!-- HEADER PANEL -->
      <section class="panel dictionary-header-panel">
        <div class="card-header">
          <div class="card-title">
            <span style="font-size: 1.4rem;">📚</span>
            <h2>KAMUS SHORTHAND</h2>
          </div>
        </div>
        <p class="panel-subtitle">
          Cari notasi shorthand satu per satu, kumpulkan dengan tombol <strong>[ + ]</strong>, dan salin seluruh shorthand yang terkumpul sekaligus. Pilihan Anda tetap aman saat mencari berulang kali.
        </p>

        <!-- PANEL SHORTHAND TERPILIH (SELALU MUNCUL DI ATAS) -->
        <div class="selected-shorthands-panel">
          <div class="selected-panel-header">
            <div class="selected-panel-title">
              <span>📌</span>
              <strong>SHORTHAND TERPILIH</strong>
              <span class="selected-count-badge">${e.length}</span>
            </div>
            <div class="selected-panel-actions">
              <button 
                type="button" 
                class="btn btn-secondary btn-sm" 
                id="btn-clear-all-shorthands" 
                ${l?"":"disabled"} 
                title="Kosongkan seluruh shorthand terpilih">
                🗑 Hapus Semua
              </button>
              <button 
                type="button" 
                class="btn btn-primary btn-sm" 
                id="btn-copy-selected-shorthands" 
                ${l?"":"disabled"} 
                title="Salin seluruh shorthand terpilih ke clipboard">
                📋 COPY SHORTHAND
              </button>
            </div>
          </div>

          <div class="selected-tags-container" id="selected-tags-container">
            ${b}
          </div>
        </div>
      </section>

      <!-- SEARCH SECTION -->
      <section class="panel dictionary-search-panel">
        <form id="dictionary-search-form" class="dictionary-search-form" onsubmit="return false;">
          <div class="search-input-wrapper">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              id="dictionary-search-input" 
              class="dictionary-search-input" 
              placeholder="Cari shorthand, fungsi, atau keyword (misal: wajah, rambut, pencahayaan)..." 
              value="${u||""}"
              autocomplete="off"
              spellcheck="false"
            />
            ${u?'<button type="button" class="btn-clear-search" id="btn-clear-search" title="Bersihkan pencarian">&times;</button>':""}
          </div>
          <button type="submit" class="btn btn-primary btn-search-submit" id="btn-search-submit">
            CARI
          </button>
        </form>

        <!-- Search Status Info -->
        ${s&&a.length>0?`
              <div class="search-status-bar">
                <span>Ditemukan <strong>${a.length}</strong> shorthand relevan untuk "<em>${u}</em>"</span>
                <span class="search-priority-hint">Prioritas: 1. Katalog Lokal &bull; 2. Online Fallback</span>
              </div>
            `:""}

        <!-- RESULTS LIST -->
        <div class="results-wrapper">
          ${g}
        </div>
      </section>
    </div>
  `,bindEvents(d){const k=d.querySelector("#dictionary-search-form"),f=d.querySelector("#dictionary-search-input"),R=d.querySelector("#btn-clear-search"),O=d.querySelector("#btn-copy-selected-shorthands"),A=d.querySelector("#btn-clear-all-shorthands");k&&f&&k.addEventListener("submit",C=>{C.preventDefault();const I=f.value.trim();n&&n(I)}),R&&f&&R.addEventListener("click",()=>{f.value="",f.focus(),n&&n("")}),d.querySelectorAll(".btn-add-shorthand").forEach(C=>{C.addEventListener("click",()=>{const I=C.getAttribute("data-code"),v=a.find(S=>S.code===I);v&&t&&t(v)})}),d.querySelectorAll(".btn-remove-tag").forEach(C=>{C.addEventListener("click",()=>{const I=C.getAttribute("data-code");I&&o&&o(I)})}),O&&O.addEventListener("click",()=>{p&&p()}),A&&A.addEventListener("click",()=>{c&&c()})}}}function Ye({analysisResult:u,onCopyJson:a,onRunCustomJson:e}){var p,h,l;const i=JSON.stringify({rawPrompt:(u==null?void 0:u.rawPrompt)||"",cleanText:(u==null?void 0:u.cleanText)||"",installedShorthands:(u==null?void 0:u.installedShorthands)||[]},null,2),r=JSON.stringify(u||{},null,2),s=((p=u==null?void 0:u.conflicts)==null?void 0:p.length)>0,n=!!((h=u==null?void 0:u.intent)!=null&&h.primaryAction&&u.intent.primaryAction!=="-"),t=((l=u==null?void 0:u.installedShorthands)==null?void 0:l.length)||0,o=(u==null?void 0:u.source)||"LOCAL_ENGINE";return{html:`
    <section class="panel">
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">TEST (JSON) &mdash; PIPELINE DATA INSPECTOR</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Inspeksi representasi data JSON terstruktur untuk pengujian developer, integrasi API, dan validasi kepatuhan.
          </p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" id="btn-copy-output-json">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          Salin Output JSON
        </button>
      </div>

      <!-- Validation Checklist Bar -->
      <div class="validation-row">
        <div class="val-item" style="border-left: 3px solid ${n?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${n?"✅ Ya":"⚪ Menunggu Input"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid ${s?"var(--status-danger)":"var(--status-success)"};">
          <span>Status Konflik:</span>
          <strong>${s?"⚠️ Terdeteksi":"✅ Aman"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-blue);">
          <span>Shorthand Aktif:</span>
          <strong>${t} Item</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-purple);">
          <span>Sumber Engine:</span>
          <strong>${o}</strong>
        </div>
      </div>

      <!-- JSON Dual Viewer Grid -->
      <div class="json-viewer-container">
        <!-- Input JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #93c5fd; text-transform: uppercase;">
              INPUT JSON
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Payload Masukan</span>
          </div>
          <pre class="json-box" id="json-input-view">${i}</pre>
        </div>

        <!-- Output JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7; text-transform: uppercase;">
              OUTPUT JSON (PIPELINE RESULT)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Hasil Analisis Lengkap</span>
          </div>
          <pre class="json-box" id="json-output-view">${r}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(b){const g=b.querySelector("#btn-copy-output-json");g&&g.addEventListener("click",()=>{a&&a(r)})}}}function qe({catalog:u=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:i="ALL",searchQuery:r="",currentPage:s=1,pageSize:n=12,selectedDetailCode:t=null,isAddModalOpen:o=!1,isImportModalOpen:c=!1,duplicateWarning:p=null,onSelectCategory:h,onSelectTarget:l,onSelectRecLevel:b,onSearchChange:g,onPageChange:m,onOpenDetail:d,onCloseDetail:k,onOpenAddModal:f,onCloseAddModal:R,onSubmitAddShorthand:O,onOpenImportModal:A,onCloseImportModal:C,onSubmitImport:I,onExportCatalog:v,onResetUserCatalog:S,onAddShorthandToPrompt:B}){const T=re(u,{category:a,target:e,recommendationLevel:i,searchQuery:r}),j=T.length,w=Math.max(1,Math.ceil(j/n)),G=Math.min(Math.max(1,s),w),L=(G-1)*n,H=T.slice(L,L+n),P=Array.from(new Set(u.map(y=>y.target))).sort(),W=["ALL",...Object.keys(xa)].map(y=>{const E=xa[y],N=y==="ALL"?"Semua Kategori":`${E.code}. ${E.label}`;return`
      <button type="button" class="category-tab-btn ${a===y?"active":""}" data-cat="${y}">
        ${N}
      </button>
    `}).join(""),oa=H.length>0?H.map(y=>{let E="badge-opsional";y.recommendationLevel==="WAJIB"||y.priority==="HIGH"?E="badge-wajib":y.recommendationLevel==="DISARANKAN"&&(E="badge-disarankan");const N=y.source==="USER"?"badge-purple":"badge-neutral",M=(y.semanticTriggers||[]).slice(0,3).map(D=>`<span class="compat-pill">"${D}"</span>`).join(" "),K=y.equivalentTo||[],$=y.relationships||[];return`
          <div class="catalog-item-card" data-code="${y.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${y.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${N}">${y.source||"CORE"}</span>
                  <span class="badge ${E}">${y.recommendationLevel||y.priority}</span>
                  <span class="badge badge-neutral">${y.category}</span>
                </div>
              </div>
              <h3 class="catalog-item-name">${y.name}</h3>
              <p class="catalog-item-desc" style="margin-top: 0.4rem;">${y.description}</p>
            </div>

            <!-- Structured Metadata Section -->
            <div class="catalog-meta-list" style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <div><strong>Target:</strong> <span style="color: #93c5fd;">${y.target}</span></div>
              ${y.functionGroup?`<div><strong>Fungsi:</strong> <span style="color: #c084fc; font-size: 0.75rem;">${y.functionGroup}</span></div>`:""}
              ${K.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${K.map(D=>`<span class="alias-tag font-mono">${D}</span>`).join(" ")}
                </div>
              `:""}
              ${$.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${$.length} terhubung (${$.map(D=>D.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${M||"-"}</div>
            </div>

            <!-- Card Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 0.75rem;">
              <button type="button" class="btn btn-outline btn-xs btn-open-detail" data-code="${y.code}" title="Lihat detail lengkap direktif">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Detail
              </button>
              <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${y.code}">
                + Tambah ke Prompt
              </button>
            </div>
          </div>
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',z=w>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${G<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${G} dari ${w} (${j} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${G>=w?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let U="";if(t){const y=u.find(E=>E.code===t);y&&(U=`
        <div class="modal-backdrop" id="modal-detail-backdrop">
          <div class="modal-card" style="max-width: 680px;" role="dialog" aria-modal="true">
            <div class="modal-header">
              <div>
                <span class="catalog-item-code" style="font-size: 1.35rem;">${y.code}</span>
                <h3 style="font-size: 1rem; color: #ffffff; margin-top: 0.2rem;">${y.name}</h3>
              </div>
              <button type="button" class="modal-close" id="btn-close-detail-modal" aria-label="Tutup">&times;</button>
            </div>

            <div class="modal-body" style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto;">
              <!-- Meta Row -->
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-neutral">Sumber: ${y.source||"CORE"}</span>
                <span class="badge badge-blue">Kategori: ${y.category}</span>
                <span class="badge badge-purple">Target: ${y.target}</span>
                <span class="badge badge-wajib">Level: ${y.recommendationLevel||y.priority}</span>
                ${y.preferredRepresentative?'<span class="badge badge-blue font-mono">REPRESENTATIF UTAMA</span>':""}
              </div>

              <!-- Function Group & Equivalents -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-card); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>Function Group:</strong> <span style="color: #c084fc;">${y.functionGroup||"-"}</span>
                </div>
                ${y.equivalentTo&&y.equivalentTo.length>0?`
                  <div style="margin-top: 0.4rem; font-size: 0.8rem;">
                    <strong>Alias Setara (Equivalent To):</strong>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.25rem;">
                      ${y.equivalentTo.map(E=>`<span class="alias-tag font-mono">${E}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${y.relationships&&y.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${y.relationships.map(E=>`
                      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 0.4rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                        <span class="font-mono" style="color: #c4b5fd; font-weight: 700;">${E.code}</span>
                        <span class="badge badge-purple" style="font-size: 0.65rem; margin-left: 0.35rem;">${E.relationType}</span>
                        <div style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.2rem;">${E.reason}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Deskripsi -->
              <div>
                <span class="detail-label">DESKRIPSI:</span>
                <p class="detail-value" style="margin-top: 0.25rem;">${y.description}</p>
              </div>

              <!-- Kapan Digunakan -->
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #6ee7b7; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${y.whenToUse||"Sesuai dengan instruksi user yang relevan."}</p>
              </div>

              <!-- Kapan Tidak Digunakan -->
              <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #fca5a5; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN TIDAK DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${y.whenNotToUse||"Jika bertentangan dengan preferensi user."}</p>
              </div>

              <!-- Semantic Triggers -->
              <div>
                <span class="detail-label">SEMANTIC TRIGGERS:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                  ${(y.semanticTriggers||[]).map(E=>`<span class="compat-pill">"${E}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${y.conflicts&&y.conflicts.length>0?y.conflicts.map(E=>`<span class="conflict-pill">${E}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${y.compatibleWith&&y.compatibleWith.length>0?y.compatibleWith.map(E=>`<span class="compat-pill">${E}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-close-detail-footer">Tutup</button>
              <button type="button" class="btn btn-primary btn-sm btn-add-from-modal" data-code="${y.code}">
                + Tambah ${y.code} ke Prompt
              </button>
            </div>
          </div>
        </div>
      `)}let X="";if(o){const y=Object.keys(ie);X=`
      <div class="modal-backdrop" id="modal-add-backdrop">
        <div class="modal-card" style="max-width: 620px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">+ Tambah Shorthand Baru (User Catalog)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Tersimpan permanen di browser (IndexedDB). Tidak akan terhapus saat Analyzer di-reset.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-add-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-add-shorthand">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 65vh; overflow-y: auto;">
              ${p?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${p.message}</p>
                  <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
                    Disarankan menambahkan kode ini sebagai <em>Alias Setara (Equivalent To)</em> atau klik Simpan Kembali jika tetap ingin membuat entri baru.
                  </p>
                </div>
              `:""}

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-code">KODE SHORTHAND *</label>
                  <input type="text" id="add-code" class="input-primary" placeholder="/customtag" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
                <div>
                  <label class="detail-label" for="add-name">NAMA SHORTHAND *</label>
                  <input type="text" id="add-name" class="input-primary" placeholder="Nama representatif" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div class="grid-2">
                <div>
                  <label class="detail-label" for="add-category">KATEGORI *</label>
                  <select id="add-category" class="select-input" style="width: 100%; margin-top: 0.25rem;">
                    ${Object.keys(xa).map(E=>`<option value="${E}">${E} - ${xa[E].label}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label class="detail-label" for="add-target">TARGET AREA *</label>
                  <input type="text" id="add-target" class="input-primary" placeholder="Misal: Wajah, Pakaian, Latar" required style="width: 100%; margin-top: 0.25rem;" />
                </div>
              </div>

              <div>
                <label class="detail-label" for="add-func-group">FUNCTION GROUP (SEMANTIC DEDUPLICATION) *</label>
                <input type="text" id="add-func-group" class="input-primary" placeholder="Misal: CUSTOM_ACTION atau pilih group standar" list="list-func-groups" style="width: 100%; margin-top: 0.25rem;" />
                <datalist id="list-func-groups">
                  ${y.map(E=>`<option value="${E}">`).join("")}
                </datalist>
              </div>

              <div>
                <label class="detail-label" for="add-desc">DESKRIPSI *</label>
                <textarea id="add-desc" class="input-primary" rows="2" placeholder="Fungsi dan cara kerja shorthand ini..." required style="width: 100%; margin-top: 0.25rem;"></textarea>
              </div>

              <div>
                <label class="detail-label" for="add-triggers">SEMANTIC TRIGGERS (Pisahkan dengan koma)</label>
                <input type="text" id="add-triggers" class="input-primary" placeholder="kata kunci 1, kata kunci 2, pemicu semantik" style="width: 100%; margin-top: 0.25rem;" />
              </div>

              <div>
                <label class="detail-label" for="add-equivalent">ALIAS SETARA (EQUIVALENT TO, pisahkan dengan koma)</label>
                <input type="text" id="add-equivalent" class="input-primary" placeholder="/alias1, /alias2" style="width: 100%; margin-top: 0.25rem;" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-add">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Simpan Shorthand</button>
            </div>
          </form>
        </div>
      </div>
    `}let aa="";return c&&(aa=`
      <div class="modal-backdrop" id="modal-import-backdrop">
        <div class="modal-card" style="max-width: 580px;" role="dialog" aria-modal="true">
          <div class="modal-header">
            <div>
              <h3 style="font-size: 1.1rem; color: #ffffff;">⬆️ Impor Katalog (JSON)</h3>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
                Impor data shorthand. Format JSON aman tanpa API key atau kredensial rahasia.
              </p>
            </div>
            <button type="button" class="modal-close" id="btn-close-import-modal" aria-label="Tutup">&times;</button>
          </div>

          <form id="form-import-catalog">
            <div class="modal-body" style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div>
                <label class="detail-label">MODE IMPOR:</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.35rem;">
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="MERGE" checked />
                    <strong>MERGE</strong> (Gabungkan tanpa menimpa CORE)
                  </label>
                  <label style="font-size: 0.825rem; color: #e2e8f0; display: flex; align-items: center; gap: 0.35rem; cursor: pointer;">
                    <input type="radio" name="import-mode" value="REPLACE" />
                    <strong>REPLACE</strong> (Ganti User Catalog)
                  </label>
                </div>
              </div>

              <div>
                <label class="detail-label" for="import-json-textarea">PASTE JSON ATAU PILIH FILE:</label>
                <textarea id="import-json-textarea" class="input-primary font-mono" rows="6" placeholder='{ "catalogVersion": "2.1", "entries": [...] }' style="width: 100%; margin-top: 0.25rem; font-size: 0.775rem;"></textarea>
              </div>

              <div>
                <input type="file" id="import-file-input" accept=".json" style="font-size: 0.8rem; color: var(--text-muted);" />
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-cancel-import">Batal</button>
              <button type="submit" class="btn btn-primary btn-sm">Mulai Impor</button>
            </div>
          </form>
        </div>
      </div>
    `),{html:`
    <section class="panel">
      <!-- Page Header -->
      <div class="card-header">
        <div>
          <h2 style="font-size: 1.25rem;">SEMANTIC SHORTHAND KNOWLEDGE BASE</h2>
          <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.2rem;">
            Basis pengetahuan semantik shorthand yang terintegrasi langsung dengan Semantic Engine, Deduplikasi Fungsi, dan Relasi Antar-Domain.
          </p>
        </div>
        <span class="badge badge-blue font-mono">${u.length} Shorthand Terdaftar</span>
      </div>

      <!-- Action Bar: Add, Export, Import, Reset User Catalog -->
      <div class="catalog-action-bar">
        <div style="font-size: 0.825rem; color: var(--text-muted);">
          CORE CATALOG: <strong>Read-Only</strong> &bull; USER CATALOG: <strong>IndexedDB Persistent</strong>
        </div>
        <div class="catalog-actions-group">
          <button type="button" class="btn btn-primary btn-xs" id="btn-open-add-shorthand">
            + Tambah Shorthand
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-export-catalog" title="Download sanitized catalog JSON">
            ⬇️ Ekspor JSON
          </button>
          <button type="button" class="btn btn-outline btn-xs" id="btn-open-import-catalog" title="Import catalog JSON">
            ⬆️ Impor JSON
          </button>
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-user-catalog" title="Reset hanya entri user, core tetap utuh">
            🔄 Reset User Katalog
          </button>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="category-tabs" id="catalog-category-tabs" style="margin-bottom: 1rem;">
        ${W}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${P.map(y=>`<option value="${y}" ${e===y?"selected":""}>Target: ${y}</option>`).join("")}
          </select>

          <!-- Filter Recommendation Level -->
          <select id="select-filter-rec-level" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Level Rekomendasi --</option>
            <option value="WAJIB" ${i==="WAJIB"?"selected":""}>Level: WAJIB</option>
            <option value="DISARANKAN" ${i==="DISARANKAN"?"selected":""}>Level: DISARANKAN</option>
            <option value="OPSIONAL" ${i==="OPSIONAL"?"selected":""}>Level: OPSIONAL</option>
          </select>
        </div>

        <!-- Semantic Search Input -->
        <div style="flex: 1; max-width: 380px; min-width: 250px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari semantik: misal 'jangan ubah wajah', 'ganti baju', 'latar baru'..."
            value="${r||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${oa}
      </div>

      <!-- Pagination -->
      ${z}

      <!-- Modals -->
      ${U}
      ${X}
      ${aa}
    </section>
  `,bindEvents(y){y.querySelectorAll(".category-tab-btn").forEach(_=>{_.addEventListener("click",()=>{const ea=_.getAttribute("data-cat");h&&h(ea)})});const E=y.querySelector("#select-filter-target");E&&E.addEventListener("change",_=>{l&&l(_.target.value)});const N=y.querySelector("#select-filter-rec-level");N&&N.addEventListener("change",_=>{b&&b(_.target.value)});const M=y.querySelector("#catalog-search-input");M&&M.addEventListener("input",_=>{g&&g(_.target.value)});const K=y.querySelector(".btn-prev-page");K&&K.addEventListener("click",()=>{m&&m(G-1)});const $=y.querySelector(".btn-next-page");$&&$.addEventListener("click",()=>{m&&m(G+1)});const D=y.querySelector("#btn-open-add-shorthand");D&&f&&D.addEventListener("click",f);const Q=y.querySelector("#btn-export-catalog");Q&&v&&Q.addEventListener("click",v);const ra=y.querySelector("#btn-open-import-catalog");ra&&A&&ra.addEventListener("click",A);const ga=y.querySelector("#btn-reset-user-catalog");ga&&S&&ga.addEventListener("click",S),y.querySelectorAll(".btn-open-detail").forEach(_=>{_.addEventListener("click",()=>{const ea=_.getAttribute("data-code");d&&d(ea)})});const Sa=y.querySelector("#btn-close-detail-modal"),pa=y.querySelector("#btn-close-detail-footer"),ca=y.querySelector("#modal-detail-backdrop"),ka=()=>{k&&k()};Sa&&Sa.addEventListener("click",ka),pa&&pa.addEventListener("click",ka),ca&&ca.addEventListener("click",_=>{_.target===ca&&ka()});const na=y.querySelector("#btn-close-add-modal"),la=y.querySelector("#btn-cancel-add"),da=y.querySelector("#modal-add-backdrop"),Ea=()=>{R&&R()};na&&na.addEventListener("click",Ea),la&&la.addEventListener("click",Ea),da&&da.addEventListener("click",_=>{_.target===da&&Ea()});const ua=y.querySelector("#form-add-shorthand");ua&&O&&ua.addEventListener("submit",_=>{_.preventDefault();let ea=y.querySelector("#add-code").value.trim();ea.startsWith("/")||(ea="/"+ea);const ya=y.querySelector("#add-name").value.trim(),ma=y.querySelector("#add-category").value,ba=y.querySelector("#add-target").value.trim(),Aa=y.querySelector("#add-func-group").value.trim()||ma,Oa=y.querySelector("#add-desc").value.trim(),wa=y.querySelector("#add-triggers").value.trim(),Z=y.querySelector("#add-equivalent").value.trim(),Pa=wa?wa.split(",").map(ta=>ta.trim()).filter(Boolean):[],ha=Z?Z.split(",").map(ta=>ta.trim().startsWith("/")?ta.trim():"/"+ta.trim()).filter(Boolean):[];O({code:ea,name:ya,category:ma,target:ba,functionGroup:Aa,description:Oa,semanticTriggers:Pa,equivalentTo:ha,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${ba.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const La=y.querySelector("#btn-close-import-modal"),Na=y.querySelector("#btn-cancel-import"),va=y.querySelector("#modal-import-backdrop"),Ra=()=>{C&&C()};La&&La.addEventListener("click",Ra),Na&&Na.addEventListener("click",Ra),va&&va.addEventListener("click",_=>{_.target===va&&Ra()});const Ia=y.querySelector("#import-file-input"),q=y.querySelector("#import-json-textarea");Ia&&q&&Ia.addEventListener("change",_=>{const ea=_.target.files[0];if(ea){const ya=new FileReader;ya.onload=ma=>{q.value=ma.target.result},ya.readAsText(ea)}});const J=y.querySelector("#form-import-catalog");J&&I&&J.addEventListener("submit",_=>{var ma,ba,Aa;_.preventDefault();const ea=((ma=y.querySelector('input[name="import-mode"]:checked'))==null?void 0:ma.value)||"MERGE",ya=(Aa=(ba=y.querySelector("#import-json-textarea"))==null?void 0:ba.value)==null?void 0:Aa.trim();I(ya,ea)}),y.querySelectorAll(".btn-add-from-catalog").forEach(_=>{_.addEventListener("click",()=>{const ea=_.getAttribute("data-code");B&&B(ea)})});const F=y.querySelector(".btn-add-from-modal");F&&F.addEventListener("click",()=>{const _=F.getAttribute("data-code");B&&B(_),ka()})}}}function Je({geminiStatusInfo:u,onTestConnection:a,onSaveSettings:e,onClearKey:i}){const r=V.getApiKey(),s=V.getModel(),{status:n,error:t}=u;let o="status-unconfigured",c="🟡 Gemini: Belum diuji / konfigurasi";return n===ia.CONNECTED?(o="status-connected",c="🟢 Gemini: Tersambung"):n===ia.FAILED&&(o="status-failed",c="🔴 Gemini: Gagal"),{html:`
    <div class="settings-container">
      <section class="panel">
        <div class="card-header">
          <div class="card-title">
            <svg class="icon" viewBox="0 0 24 24" style="color: var(--accent-blue);"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <h2>API &amp; PENGATURAN (BYOK)</h2>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
          Aplikasi beroperasi dengan sistem <strong>BYOK (Bring Your Own Key)</strong>. 
          API key disimpan hanya di browser lokal Anda (<code>localStorage</code>) dan tidak pernah dikirim ke server developer.
        </p>

        <!-- FORM BYOK -->
        <form id="settings-form" onsubmit="return false;">
          <!-- API Key Input with Show/Hide -->
          <div class="form-group">
            <label class="form-label" for="setting-api-key">Gemini API Key:</label>
            <div class="password-input-group">
              <input 
                type="password" 
                id="setting-api-key" 
                placeholder="AIzaSy..." 
                value="${r||""}" 
                autocomplete="off"
                spellcheck="false"
              />
              <button type="button" class="password-toggle-btn" id="btn-toggle-key-visibility" title="Tampilkan/Sembunyikan Key">
                <svg class="icon-sm" id="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>
            <p class="form-help">
              Dapatkan API Key gratis di <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue);">Google AI Studio</a>.
            </p>
          </div>

          <!-- Model Selector -->
          <div class="form-group">
            <label class="form-label" for="setting-model-select">Model Gemini:</label>
            <select id="setting-model-select" class="select-input" style="width: 100%; padding: 0.65rem 0.85rem;">
              <option value="gemini-2.0-flash" ${s==="gemini-2.0-flash"?"selected":""}>gemini-2.0-flash (Rekomendasi Utama &bull; Multimodal Cepat &amp; Akurat)</option>
              <option value="gemini-3.5-flash-lite" ${s==="gemini-3.5-flash-lite"?"selected":""}>gemini-3.5-flash-lite (Flash-Lite &bull; Cepat, Ringan &amp; Hemat Kuota)</option>
              <option value="gemini-1.5-flash" ${s==="gemini-1.5-flash"?"selected":""}>gemini-1.5-flash (Flash &bull; Ringan &amp; Stabil)</option>
              <option value="gemini-2.5-flash" ${s==="gemini-2.5-flash"?"selected":""}>gemini-2.5-flash (Penalaran Hibrida &bull; Flash)</option>
              <option value="gemini-1.5-flash-8b" ${s==="gemini-1.5-flash-8b"?"selected":""}>gemini-1.5-flash-8b (Ultra Cepat &amp; Hemat Kuota)</option>
            </select>
          </div>

          <!-- Connection Status Card -->
          <div class="connection-status-card">
            <div style="flex: 1;">
              <div style="font-size: 0.825rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">
                Status Koneksi:
              </div>
              <div class="status-badge ${o}" id="settings-status-badge">
                <span class="status-dot"></span>
                <span>${c}</span>
              </div>
              ${t?`<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${t}</div>`:""}
            </div>
            <div>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-test-connection">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
                Test Connection
              </button>
            </div>
          </div>

          <!-- Action Buttons: Save & Clear -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; gap: 0.75rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-danger btn-sm" id="btn-clear-key" title="Hapus API Key dari browser">
              Clear Key
            </button>
            <button type="button" class="btn btn-primary" id="btn-save-settings">
              Save / Apply
            </button>
          </div>
        </form>

        <!-- Fallback notice -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
          <strong>🛡️ Mode Offline &amp; Heuristic Fallback:</strong>
          Jika API Key tidak diisi atau koneksi offline, aplikasi tidak akan pernah crash. Engine Semantik Lokal otomatis aktif memproses prompt, mendeteksi entity lock, dan merumuskan shorthand.
        </div>

        <!-- V3 Safe Patch Architecture Panel -->
        <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 8px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); font-size: 0.8rem; line-height: 1.6;">
          <div style="font-weight: 700; color: var(--accent-blue); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>🛡️</span>
            <span>V3 SAFE PATCH-ONLY ARCHITECTURE</span>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: 0.6rem;">
            Basis / Source of Truth: <strong>Prompt Shorthand Analyzer V2 (Immutable)</strong>. 
            Semua penambahan fitur di V3 beroperasi melalui layer patch independen tanpa memodifikasi kode inti.
          </p>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle); color: var(--text-secondary);">
            • Core Patch: v3-core-architecture (Active &bull; Priority 1000)<br/>
            • Safe Execution Wrapper: ENABLED (Zero-Crash Fallback Active)<br/>
            • Baseline V2 Knowledge Base: 15 Kategori A-O &bull; 46 Core Shorthands (Preserved)
          </div>
        </div>
      </section>
    </div>
  `,bindEvents(h){const l=h.querySelector("#setting-api-key"),b=h.querySelector("#setting-model-select"),g=h.querySelector("#btn-toggle-key-visibility"),m=h.querySelector("#btn-test-connection"),d=h.querySelector("#btn-save-settings"),k=h.querySelector("#btn-clear-key");g&&l&&g.addEventListener("click",()=>{const f=l.type==="password";l.type=f?"text":"password"}),m&&m.addEventListener("click",()=>{a&&a(l.value,b.value)}),d&&d.addEventListener("click",()=>{e&&e(l.value,b.value)}),k&&k.addEventListener("click",()=>{l.value="",i&&i()})}}}const Za={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class ae{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const i=a.trim().toLowerCase(),r=i.startsWith("/")?i.slice(1):i,s=i.split(/\s+/).filter(Boolean),n=new Set(s);for(const o of s)if(Za[o])for(const c of Za[o])n.add(c.toLowerCase());const t=[];for(const o of e){if(!o||!o.code)continue;let c=0;const p=(o.code||"").toLowerCase(),h=p.startsWith("/")?p.slice(1):p,l=(o.name||"").toLowerCase(),b=(o.description||"").toLowerCase(),g=(o.category||"").toLowerCase(),m=Array.isArray(o.semanticTriggers)?o.semanticTriggers.map(k=>(k||"").toLowerCase()):[],d=(o.whenToUse||"").toLowerCase();p===i||h===r?c+=1e3:h.startsWith(r)?c+=600:h.includes(r)&&(c+=350);for(const k of m)if(k===i)c+=400;else if(k.includes(i))c+=250;else for(const f of n)if(f.length>2&&k.includes(f)){c+=100;break}if(l===i)c+=300;else if(l.includes(i))c+=200;else for(const k of n)if(k.length>2&&l.includes(k)){c+=80;break}if(b.includes(i))c+=150;else for(const k of n)if(k.length>2&&b.includes(k)){c+=60;break}g.includes(i)&&(c+=50),d.includes(i)&&(c+=40),c>0&&t.push({...o,score:c,source:"LOCAL",isOnline:!1})}return t.sort((o,c)=>c.score-o.score),this.deduplicateResultsByFunction(t)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,i=new Map;for(const s of a){if(!s||!s.code)continue;const n=s.code.toLowerCase();let t=i.get(n);if(!t){t=s.functionGroup||s.category||n;for(const[o,c]of e.entries())if(c.some(h=>(h.equivalentTo||[]).map(b=>typeof b=="string"?b.toLowerCase():"").includes(n))){t=o;break}}if(i.set(n,t),Array.isArray(s.equivalentTo))for(const o of s.equivalentTo)typeof o=="string"&&i.set(o.toLowerCase(),t);e.has(t)?e.get(t).push(s):e.set(t,[s])}const r=[];for(const[s,n]of e.entries()){if(n.length===1){r.push(n[0]);continue}n.sort((p,h)=>{if(p.preferredRepresentative&&!h.preferredRepresentative)return-1;if(!p.preferredRepresentative&&h.preferredRepresentative)return 1;if((h.score||0)!==(p.score||0))return(h.score||0)-(p.score||0);const l={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},b=l[p.status]||(p.source==="LOCAL"?3:1),g=l[h.status]||(h.source==="LOCAL"?3:1);return g!==b?g-b:(p.code||"").length-(h.code||"").length});const t=n[0],o=n.slice(1).map(p=>p.code),c=Array.from(new Set([...t.equivalentTo||[],...o]));r.push({...t,equivalentTo:c})}return r.sort((s,n)=>(n.score||0)-(s.score||0)),r}static async search(a,e=[],i=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const r=a.trim();let s=[];try{s=this.searchLocal(r,e)}catch(l){console.warn("[DictionaryService] Error pencarian lokal:",l),s=[]}let n=[],t=null;const o=s.some(l=>l.score>=600);if((s.length<4||!o)&&i)try{const l=await i.searchOnlineShorthand(r);if(l&&Array.isArray(l.results)){const b=new Set(s.map(g=>g.code.toLowerCase()));n=l.results.filter(g=>!b.has(g.code.toLowerCase()))}l&&l.message&&s.length===0&&(t=l.message)}catch(l){console.warn("[DictionaryService] Online fallback error:",l)}const p=this.deduplicateResultsByFunction([...s,...n]);let h=null;return p.length===0&&(h=t||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:r,results:p,localCount:s.length,onlineCount:n.length,notice:h}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class Qe{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new le(Fa),this.catalog=this.catalogRepo.getAll(),this.geminiService=new Oe(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.selectedAspectRatio="auto",this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1},this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.colourGradingConfig={...Ca},this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=V.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let i=document.getElementById("toast-container");i||(i=document.createElement("div"),i.id="toast-container",i.className="toast-container",document.body.appendChild(i));const r=document.createElement("div");r.className=`toast toast-${e}`,r.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,i.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(10px)",r.style.transition="all 0.3s ease",setTimeout(()=>r.remove(),300)},2800)}async runAnalysis(a,e=null){if(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const i=this.uploadedImage.file?Object.assign(this.uploadedImage.file,{width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry}):{name:this.uploadedImage.name,size:this.uploadedImage.size,width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry},r=this.selectedAspectRatio&&this.selectedAspectRatio!=="auto"&&this.selectedAspectRatio!=="Otomatis"?this.selectedAspectRatio:this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio||"auto",s=await this.geminiService.analyzeImageToPrompt({imageFile:i,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry,targetAspectRatio:r,isTwoWorlds:this.activeMode==="TWO_WORLDS",twoWorldsConfig:this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null});if(s.mode=this.activeMode,this.analysisResult=s,s.source==="GEMINI_AI")this.showToast(this.activeMode==="TWO_WORLDS"?"✅ Analisa 2 Dunia Vision AI berhasil!":"✅ Analisa Vision AI berhasil berdasarkan gambar aktual!","success");else if(s.source==="LOCAL_ENGINE_FALLBACK"){const n=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${n}, menggunakan analisis visual lokal.`,"warning")}else this.showToast(this.activeMode==="TWO_WORLDS"?"Analisa 2 dunia & pemetaan shorthand berhasil!":"Analisa gambar & pemetaan shorthand berhasil!")}catch(i){this.showToast(`Gagal menganalisis gambar: ${i.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(this.activeMode==="SHORTHAND_IMPROVE"||this.activeMode==="COLOUR_GRADING"){const i=this.activeMode==="COLOUR_GRADING";if(this.uploadedImage){this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const r=await this.geminiService.analyzeImageRepair({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,notesPrompt:a,isColourGrading:i,mode:this.activeMode,colourGradingConfig:i?this.colourGradingConfig:null,telemetry:i&&(this.uploadedImage.colorTelemetry||this.uploadedImage.visualTelemetry)||null});if(r.mode=this.activeMode,this.analysisResult=r,r.source==="GEMINI_AI")this.showToast(i?"✅ Diagnosis visual Vision AI & rekomendasi colour grading selesai!":"✅ Diagnosis visual Vision AI & rekomendasi perbaikan selesai!","success");else if(r.source==="LOCAL_ENGINE_FALLBACK"){const s=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${s}, menggunakan diagnosis visual lokal.`,"warning")}else this.showToast(i?"Diagnosis visual & rekomendasi colour grading selesai!":"Diagnosis visual & rekomendasi perbaikan gambar selesai!")}catch(r){this.showToast(`Gagal menganalisis ${i?"colour grading":"perbaikan gambar"}: ${r.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast(i?"Silakan unggah gambar atau masukkan preferensi colour grading yang diinginkan.":"Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const r=await this.geminiService.analyzeShorthandImprove(a,e,{isColourGrading:i,mode:this.activeMode});r.mode=this.activeMode,this.analysisResult=r,this.showToast(i?"Analisa shorthand colour grading selesai!":"Analisa shorthand perbaikan selesai!")}catch(r){this.showToast(`Gagal menganalisis: ${r.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const i=await this.geminiService.analyzePrompt(a,e);this.analysisResult=i,this.showToast("Analisis prompt selesai!")}catch(i){this.showToast(`Gagal menganalisis: ${i.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleTwoWorldsConfigChange(a){this.twoWorldsConfig={...this.twoWorldsConfig,...a},this.activeMode==="TWO_WORLDS"&&this.analysisResult&&this.analysisResult.visionData&&typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.twoWorldsConfig),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt),this.render()}handleColourGradingConfigChange(a){this.colourGradingConfig={...this.colourGradingConfig,...a},this.activeMode==="COLOUR_GRADING"&&this.analysisResult&&this.analysisResult.isColourGrading&&(this.analysisResult.colourGradingConfig=this.colourGradingConfig),this.render()}handleResetGrading(){this.colourGradingConfig={...Ca},this.render(),this.showToast("Pengaturan Colour Grading telah di-reset ke nilai default (Foto Asli).")}handleSelectBatchImage(a){this.batchGradingImages&&this.batchGradingImages[a]&&(this.activeGradingBatchIndex=a,this.uploadedImage=this.batchGradingImages[a],this.render())}handleAspectRatioChange(a){this.selectedAspectRatio=a;const e=a==="auto"||a==="Otomatis"?this.uploadedImage&&(this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio)||"1:1":a;this.analysisResult&&this.analysisResult.visionData&&(this.analysisResult.visionData.aspectRatio=e,this.analysisResult.visualBreakdown&&(this.analysisResult.visualBreakdown["Aspect Ratio"]=e),typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt)),a==="auto"||a==="Otomatis"?this.showToast(`📐 Rasio Aspek: Otomatis (Asli: ${e})`):this.showToast(`📐 Rasio Aspek Target: ${a} (Proporsi subjek dipertahankan)`),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a){const e=Le(a);if(!e){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(e).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const i=document.createElement("textarea");i.value=e,document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}async handleEnrichPrompt(){var i;const a=((i=this.analysisResult)==null?void 0:i.optimalPrompt)||"";if(!a||!a.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!!!(V.getApiKey()&&V.getApiKey().trim())||this.geminiService.status===ia.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const r=await this.geminiService.enrichPrompt(a,this.analysisResult);if(r&&r.success&&r.enrichedPrompt)this.analysisResult.optimalPrompt=r.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}catch(r){console.warn("Enrich prompt error:",r),this.showToast(`Gagal memperkaya prompt: ${r.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const i=[...e,a];this.updateInstalledShorthands(i),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const i=(this.analysisResult.installedShorthands||[]).filter(r=>r!==a);this.updateInstalledShorthands(i),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){if(this.analysisResult.installedShorthands=a,(this.analysisResult.mode==="IMAGE_TO_PROMPT"||this.analysisResult.mode==="TWO_WORLDS")&&this.analysisResult.visionData)this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,a,this.analysisResult.mode==="TWO_WORLDS"?this.twoWorldsConfig:null);else if(this.analysisResult.isColourGrading){if(typeof this.geminiService.assembleImageRepairPrompt=="function"){const e=this.uploadedImagesList[this.activeUploadedImageIndex],i=(e==null?void 0:e.colorTelemetry)||(e==null?void 0:e.visualTelemetry)||this.analysisResult.telemetry||null,r=this.geminiService.assembleImageRepairPrompt({...this.analysisResult,colourGradingConfig:this.colourGradingConfig,telemetry:i,installedOverrides:a});this.analysisResult.optimalPrompt=r.optimalPrompt}}else if(this.analysisResult.isImageRepair&&this.analysisResult.repairInstructions){const e=this.analysisResult.englishBasePrompt||sa(this.analysisResult.repairInstructions.trim());this.analysisResult.optimalPrompt=a.length>0?`${e} ${a.join(" ")}`.trim():e}else{const e=this.analysisResult.englishBasePrompt||sa(this.analysisResult.cleanText||"");this.analysisResult.optimalPrompt=a.length>0?`${e}. ${a.join(" ")}`.trim():e}if(this.analysisResult.recommendations)for(const e of this.analysisResult.recommendations)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.primaryShorthands)for(const e of this.analysisResult.primaryShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.relatedShorthands)for(const e of this.analysisResult.relatedShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.similarShorthands)for(const e of this.analysisResult.similarShorthands)e.checked=a.includes(e.code),e.active=e.checked;this.render()}handleResolveConflict(a,e){const i=this.analysisResult.conflicts.find(n=>n.id===a);if(!i)return;let r=[...this.analysisResult.installedShorthands||[]];const s=i.type==="EDIT_VS_LOCK"||i.shorthandA&&i.shorthandA.includes("lock");if(e==="use_user_edit"){r=r.filter(t=>t!==i.shorthandA);const n=s?`Kunci ${i.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${i.shorthandB}, ${i.shorthandA} dihapus.`;this.showToast(n)}else if(e==="keep_lock"){r=r.filter(t=>t!==i.shorthandB),r.includes(i.shorthandA)||r.push(i.shorthandA);const n=s?`Lock ${i.shorthandA} dipertahankan.`:`Memilih ${i.shorthandA}, ${i.shorthandB} dihapus.`;this.showToast(n)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(n=>n.id!==a),this.updateInstalledShorthands(r)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const i=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${i.count} shorthand (${e})!`),this.render()}catch(i){this.showToast(`Gagal impor: ${i.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const i=await this.geminiService.testConnection(a,e);i.success?this.showToast(i.message,"success"):this.showToast(i.message,"error"),this.render()}handleSaveSettings(a,e){V.setApiKey(a),V.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){V.clearApiKey(),this.geminiService.status=ia.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await ae.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();if(!e)return;this.dictionaryState.selectedShorthands.some(r=>(typeof r=="string"?r:r.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render())}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=ae.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}render(){const a=this.geminiService.getStatus(),e=Ne(this.activeTab,a,r=>{this.activeTab=r,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let i=null;if(this.activeTab==="analyzer"){const s=!!(V.getApiKey()&&V.getApiKey().trim())&&this.geminiService.status!==ia.FAILED;i=We({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:s,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,selectedAspectRatio:this.selectedAspectRatio,onAspectRatioChange:n=>this.handleAspectRatioChange(n),twoWorldsConfig:this.twoWorldsConfig,onTwoWorldsConfigChange:n=>this.handleTwoWorldsConfigChange(n),colourGradingConfig:this.colourGradingConfig,onColourGradingConfigChange:n=>this.handleColourGradingConfigChange(n),onResetGrading:()=>this.handleResetGrading(),batchImages:this.batchGradingImages,activeBatchIndex:this.activeGradingBatchIndex,onSelectBatchImage:n=>this.handleSelectBatchImage(n),onModeChange:n=>{this.activeMode!==n&&(this.activeMode=n,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render())},onImageSelected:(n,t)=>{this.uploadedImage=n,t&&Array.isArray(t)&&t.length>0?(this.batchGradingImages=t,this.activeGradingBatchIndex=0):n?(this.batchGradingImages=[n],this.activeGradingBatchIndex=0):(this.batchGradingImages=[],this.activeGradingBatchIndex=0),this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render(),(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS")&&this.runAnalysis(this.currentPrompt)},onImageRemoved:()=>{this.uploadedImage=null,this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onAnalyze:n=>this.runAnalysis(n),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:n=>this.handleSelectPreset(n),onCopyPrompt:n=>this.handleCopyPrompt(n),onCopyGeneratedPrompt:n=>this.handleCopyPrompt(n),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:n=>this.handleAddShorthand(n),onRemoveShorthand:n=>this.handleRemoveShorthand(n),onToggleRecommendation:n=>this.handleToggleRecommendation(n),onResolveConflict:(n,t)=>this.handleResolveConflict(n,t)})}else this.activeTab==="json-test"?i=Ye({analysisResult:this.analysisResult,onCopyJson:r=>{navigator.clipboard.writeText(r),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?i=qe({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:r=>{this.catalogCategory=r,this.catalogCurrentPage=1,this.render()},onSelectTarget:r=>{this.catalogTarget=r,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:r=>{this.catalogRecLevel=r,this.catalogCurrentPage=1,this.render()},onSearchChange:r=>{this.catalogSearchQuery=r,this.catalogCurrentPage=1,this.render()},onPageChange:r=>{this.catalogCurrentPage=r,this.render()},onOpenDetail:r=>{this.selectedDetailCode=r,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async r=>{await this.handleAddShorthandSubmit(r)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(r,s)=>{await this.handleImportCatalog(r,s)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:r=>{this.handleAddShorthand(r),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${r} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?i=Fe({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,onSearch:r=>this.handleDictionarySearch(r),onAddShorthand:r=>this.handleDictionaryAddShorthand(r),onRemoveShorthand:r=>this.handleDictionaryRemoveShorthand(r),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy()}):this.activeTab==="settings"&&(i=Je({geminiStatusInfo:a,onTestConnection:(r,s)=>this.handleTestConnection(r,s),onSaveSettings:(r,s)=>this.handleSaveSettings(r,s),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
      <div class="app-container">
        ${e.html}
        <main class="main-content">
          ${i.html}
        </main>
        <footer class="app-footer">
          <div class="footer-container">
            <div>
              <strong>PROMPT SHORTHAND ANALYZER V3.0</strong> &mdash; Safe Patch-Only Architecture
            </div>
            <div>
              BYOK Gemini API &bull; Fallback Offline Heuristic &bull; Kamus Shorthand Enabled
            </div>
          </div>
        </footer>
      </div>
    `,e.bindEvents(this.appRoot),i.bindEvents&&i.bindEvents(this.appRoot)}}function Wa(){if(window.__PSA_APP__)return;document.getElementById("app")&&(window.__PSA_APP__=new Qe,window.__PSA_APP__.render())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Wa):Wa();window.addEventListener("load",Wa);
//# sourceMappingURL=index-CLksoLEi.js.map
