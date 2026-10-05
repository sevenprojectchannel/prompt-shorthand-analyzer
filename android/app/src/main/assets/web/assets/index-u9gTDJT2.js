(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const Ha={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE",LIGHTING_SHADOW:"LIGHTING_SHADOW",LIGHTING_HIGHLIGHT:"LIGHTING_HIGHLIGHT",LIGHTING_DYNAMICRANGE:"LIGHTING_DYNAMICRANGE",CONTRAST_NATURAL:"CONTRAST_NATURAL",COLOR_NATURALTONE:"COLOR_NATURALTONE",COLOR_BALANCE:"COLOR_BALANCE",DETAIL_PRESERVATION:"DETAIL_PRESERVATION",TEXTURE_PRESERVATION:"TEXTURE_PRESERVATION",NATURAL_PROCESSING:"NATURAL_PROCESSING",PERSPECTIVE_CORRECTION:"PERSPECTIVE_CORRECTION",LENS_CORRECTION:"LENS_CORRECTION",COMPOSITION_BALANCE:"COMPOSITION_BALANCE",IMAGE_HIGHDETAIL:"IMAGE_HIGHDETAIL"},sa={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},ya=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]},{code:"/shadowrecovery",name:"Shadow Recovery & Black Level Lifting",category:"LIGHTING",target:"SHADOW_LIGHTING",description:"Mengangkat dan memulihkan detail bayangan yang terlalu gelap tanpa menimbulkan noise atau mencuci kontras.",semanticTriggers:["shadow recovery","shadow terlalu gelap","pulihkan bayangan","angkat bayangan gelap","recover shadows","dark shadows","bayangan terlalu pekat"],negativeTriggers:["bayangan pekat","gelapkan bayangan","crushed blacks"],conflicts:[],compatibleWith:["/highlightcontrol","/dynamicrange","/naturalcontrast","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika area bayangan pada subjek, pepohonan, atau latar belakang terlalu gelap sehingga kehilangan detail.",whenNotToUse:"Jangan gunakan jika kontras bayangan pekat sengaja diinginkan untuk gaya dramatis (chiaroscuro).",functionGroup:"LIGHTING_SHADOW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/liftshadows"],relationships:[{code:"/highlightcontrol",relationType:"COMPATIBLE",reason:"Sering dipadukan untuk menyeimbangkan rentang dinamis keseluruhan."}]},{code:"/highlightcontrol",name:"Highlight Control & Rolloff",category:"LIGHTING",target:"HIGHLIGHT_LIGHTING",description:"Mengendalikan area terang yang over-exposed atau blown-out agar detail tekstur cahaya tetap terjaga dengan gradasi halus.",semanticTriggers:["highlight control","highlight perlu dikendalikan","highlight terlalu terang","kendalikan highlight","kurangi overexposed","highlight recovery","blown highlights"],negativeTriggers:["tingkatkan highlight","blow out"],conflicts:[],compatibleWith:["/shadowrecovery","/dynamicrange","/naturalcontrast"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika langit, awan, atau pantulan cahaya terlalu terang hingga kehilangan detail tekstur.",whenNotToUse:"Jangan gunakan jika efek siluet atau flare cahaya terang sengaja diinginkan.",functionGroup:"LIGHTING_HIGHLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/highlightrolloff"],relationships:[{code:"/shadowrecovery",relationType:"COMPATIBLE",reason:"Bekerja bersama pemulihan shadow untuk menghasilkan eksposur seimbang."}]},{code:"/dynamicrange",name:"Dynamic Range Balancing",category:"LIGHTING",target:"DYNAMIC_RANGE",description:"Menyeimbangkan rentang dinamis antara area tergelap dan terang secara simultan untuk eksposur alami tanpa artefak HDR berlebihan.",semanticTriggers:["dynamic range","dynamic range perlu diseimbangkan","seimbangkan dynamic range","rentang dinamis seimbang","balance dynamic range","dynamic range expansion"],negativeTriggers:["kontras ekstrem"],conflicts:[],compatibleWith:["/shadowrecovery","/highlightcontrol","/naturaltone"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat foto memiliki perbedaan pencahayaan ekstrem antara area bayangan dan area terang.",whenNotToUse:"Jangan gunakan jika kontras siluet tinggi atau moody low-key lighting diinginkan.",functionGroup:"LIGHTING_DYNAMICRANGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balanceddynamicrange"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Rentang dinamis yang seimbang menjaga tone warna tetap autentik."}]},{code:"/naturalcontrast",name:"Natural Contrast Balancing",category:"IMAGE_QUALITY",target:"IMAGE_CONTRAST",description:"Menyesuaikan kurva kontras secara alami dan bertahap tanpa membuat warna jenuh berlebihan atau merusak tonal gradation.",semanticTriggers:["natural contrast","kontras alami","seimbangkan kontras","kontras terlalu tajam","kontras pudar","balanced contrast"],negativeTriggers:["kontras ekstrem","hyper contrast"],conflicts:[],compatibleWith:["/naturaltone","/detailpreservation","/colorbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika kontras gambar tampak terlalu keras atau sebaliknya terlihat washed-out/pudar.",whenNotToUse:"Jangan gunakan bila kontras gambar sudah natural dan seimbang.",functionGroup:"CONTRAST_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balancedcontrast"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Kontras alami menjaga nuansa warna tetap seimbang."}]},{code:"/naturaltone",name:"Natural Tonal Range & Skin Tone",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menjaga palet warna dan tonal range tetap natural, hangat, dan autentik sesuai persepsi mata manusia.",semanticTriggers:["natural tone","warna perlu dibuat lebih natural","warna lebih natural","tonal range alami","natural color","warna alami","natural skin tone"],negativeTriggers:["neon","warna over-saturated","fluorescent"],conflicts:["/cyberpunk"],compatibleWith:["/colorbalance","/texturepreservation","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk mengembalikan karakter warna asli lanskap, vegetasi, atau warna kulit subjek.",whenNotToUse:"Jangan gunakan jika grading warna stilistik ekstrem (seperti cyberpunk neon atau monochrome) ditargetkan.",functionGroup:"COLOR_NATURALTONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturaltonal"],relationships:[{code:"/colorbalance",relationType:"DIRECTLY_RELATED",reason:"Keseimbangan warna yang tepat menghasilkan tone alami."}]},{code:"/colorbalance",name:"Color Balance & White Balance Correction",category:"COLOR_TONE",target:"COLOR_BALANCE",description:"Mengoreksi tint dan temperatur warna yang menyimpang (color cast) agar titik netral putih dan abu-abu akurat.",semanticTriggers:["color balance","color balance perlu diperbaiki","koreksi white balance","keseimbangan warna","perbaiki warna","white balance correction","remove color cast"],negativeTriggers:[],conflicts:[],compatibleWith:["/naturaltone","/naturalcontrast","/rawphoto"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar memiliki color cast (misalnya terlalu kuning/hijau/kebiruan) yang tidak diinginkan.",whenNotToUse:"Jangan gunakan jika nuansa warna hangat matahari senja atau cahaya buatan bernuansa sengaja dipertahankan.",functionGroup:"COLOR_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/whitebalance"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"White balance yang netral mendukung pembentukan tone alami."}]},{code:"/detailpreservation",name:"Original Detail Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_DETAIL",description:"Mempertahankan detail mikro arsitektur, dedaunan, permukaan benda, dan elemen halus asli agar tidak terhapus selama proses penyempurnaan.",semanticTriggers:["detail preservation","detail asli perlu dipertahankan","pertahankan detail asli","keep original detail","preserve details","jangan hilangkan detail"],negativeTriggers:["blur","hapus detail"],conflicts:[],compatibleWith:["/texturepreservation","/naturalprocessing","/highdetail"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar sudah memiliki detail halus yang bernilai tinggi dan harus dilindungi dari over-smoothing.",whenNotToUse:"Jangan gunakan jika detail gambar rusak parah dan membutuhkan rekonstruksi ulang secara total.",functionGroup:"DETAIL_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservedetails"],relationships:[{code:"/texturepreservation",relationType:"DIRECTLY_RELATED",reason:"Preservasi detail bekerja berdampingan dengan penjagaan tekstur asli."}]},{code:"/texturepreservation",name:"Authentic Texture Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_TEXTURE",description:"Mencegah efek 'plastik' atau over-denoise dengan menjaga tekstur organik kulit, kain, kayu, batu, dan dedaunan tetap autentik.",semanticTriggers:["texture preservation","tekstur asli perlu dipertahankan","pertahankan tekstur asli","keep original texture","preserve texture","tekstur autentik"],negativeTriggers:["plastik","airbrushed"],conflicts:[],compatibleWith:["/detailpreservation","/rawphoto","/naturalprocessing"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tekstur permukaan benda dan kulit tampak nyata tanpa distorsi perataan buatan.",whenNotToUse:"Jangan gunakan jika efek grafis flat 2D atau render kartun halus diinginkan.",functionGroup:"TEXTURE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservetexture"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor mentah menjaga kejernihan mikrotekstur permukaan."}]},{code:"/naturalprocessing",name:"Natural Processing & Anti-Artifacts",category:"IMAGE_QUALITY",target:"PROCESSING_ARTIFACTS",description:"Memastikan hasil visual bebas dari haloing tepian, artifak kompresi, posterisasi warna, dan efek over-processed.",semanticTriggers:["natural processing","pemrosesan alami","tanpa artifak ai","bebas artifak pemrosesan","clean processing","anti artifacts","no haloing"],negativeTriggers:["over processed"],conflicts:[],compatibleWith:["/rawphoto","/detailpreservation","/texturepreservation"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga standar output tetap bersih dari artefak digital yang merusak kualitas fotografi.",whenNotToUse:"Jangan gunakan jika efek distorsi glitch atau seni digital disengaja.",functionGroup:"NATURAL_PROCESSING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cleanrender"],relationships:[{code:"/detailpreservation",relationType:"COMPATIBLE",reason:"Pemrosesan alami menjaga integritas detail asli."}]},{code:"/perspectivecorrection",name:"Perspective & Vertical Alignment Correction",category:"CAMERA_PHOTO",target:"PERSPECTIVE",description:"Mengoreksi distorsi keystone dan garis vertikal bangunan/ruangan yang miring agar tampak proporsional dan sejajar.",semanticTriggers:["perspective correction","koreksi perspektif","perbaiki sudut kemiringan","luruskan perspektif","keystone correction","garis miring"],negativeTriggers:[],conflicts:[],compatibleWith:["/lenscorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto arsitektur atau pemandangan dengan garis vertikal yang tampak condong atau miring secara tidak sengaja.",whenNotToUse:"Jangan gunakan jika sudut miring (Dutch angle) memang disengaja untuk alasan dramatisasi visual.",functionGroup:"PERSPECTIVE_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/keystonecorrection"],relationships:[{code:"/lenscorrection",relationType:"COMPATIBLE",reason:"Koreksi perspektif dan koreksi lensa saling melengkapi dalam merapikan geometri gambar."}]},{code:"/lenscorrection",name:"Lens Distortion & Vignette Correction",category:"CAMERA_PHOTO",target:"LENS_OPTICS",description:"Menghilangkan distorsi barrel/pincushion dan vignetting gelap pada sudut tepian lensa kamera.",semanticTriggers:["lens correction","koreksi distorsi lensa","hilangkan vignetting","perbaiki distorsi lensa","lens distortion correction","distorsi barrel"],negativeTriggers:[],conflicts:[],compatibleWith:["/perspectivecorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat optik lensa menghasilkan distorsi cembung atau tepian gambar menggelap secara tidak merata.",whenNotToUse:"Jangan gunakan jika efek lensa fish-eye atau vignette retro sengaja diinginkan.",functionGroup:"LENS_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/distortioncorrection"],relationships:[{code:"/perspectivecorrection",relationType:"COMPATIBLE",reason:"Membantu meluruskan batas-batas geometri foto."}]},{code:"/compositionbalance",name:"Composition & Framing Balance",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Menata ulang keseimbangan bobot visual, ruang negatif (negative space), dan penempatan elemen dalam bidang framing.",semanticTriggers:["composition balance","keseimbangan komposisi","seimbangkan framing","komposisi seimbang","balance composition","penataan framing"],negativeTriggers:[],conflicts:[],compatibleWith:["/ruleofthirds","/perspectivecorrection"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat tata letak visual terasa berat sebelah atau framing memotong elemen penting secara canggung.",whenNotToUse:"Jangan gunakan jika komposisi foto sudah seimbang dan proporsional.",functionGroup:"COMPOSITION_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/framingbalance"],relationships:[{code:"/ruleofthirds",relationType:"COMPATIBLE",reason:"Aturan sepertiga adalah salah satu kaidah utama untuk mencapai keseimbangan komposisi."}]},{code:"/highdetail",name:"High Fidelity Micro-Detail",category:"IMAGE_QUALITY",target:"IMAGE_DETAIL",description:"Meningkatkan kejernihan mikrotekstur dan ketajaman detail halus pada seluruh permukaan foto secara koheren.",semanticTriggers:["high detail","detail tinggi","mikro detail tajam","tingkatkan detail","high fidelity detail","detail jernih"],negativeTriggers:["blur","halus berlebih"],conflicts:[],compatibleWith:["/detailpreservation","/sharpen","/highresolution"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat elemen visual memerlukan peningkatan resolusi mikrotekstur tanpa menambahkan noise.",whenNotToUse:"Jangan gunakan jika gambar ditujukan untuk gaya lembut bertekstur minim.",functionGroup:"IMAGE_HIGHDETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/microdetail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Ketajaman mikrokontras mendukung tampilan detail tinggi."}]}];function X(d,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),n=d.code.toLowerCase(),t=d.name.toLowerCase(),r=d.target.toLowerCase(),i=d.category.toLowerCase(),s=d.description.toLowerCase();if(n===e||n===`/${e}`)return 100;if(n.includes(e))return 75;if(d.semanticTriggers&&d.semanticTriggers.some(u=>u.toLowerCase()===e))return 95;if(d.negativeTriggers)for(const u of d.negativeTriggers){const p=u.toLowerCase(),g=e.indexOf(p);if(g!==-1){const m=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p),v=e.slice(0,g).trim(),b=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(v);if(m||!b)return-50}}if(d.semanticTriggers)for(const u of d.semanticTriggers){const p=u.toLowerCase(),g=e.indexOf(p);if(g!==-1){const m=e.slice(0,g).trim(),v=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(m),b=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p);if(!v||b)return 85}else if(p.includes(e))return 80}const o=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),l=e.split(/\s+/).filter(u=>u.length>2&&!o.has(u));let c=0;for(const u of d.semanticTriggers||[]){const p=u.toLowerCase();if(l.length>0&&l.every(v=>p.includes(v)))return 75;const m=l.filter(v=>p.includes(v)).length;m>c&&(c=m)}return c>1?40+c*5:t.includes(e)?50:r.includes(e)||i.includes(e)?40:s.includes(e)?30:0}function xa(d,{category:a="ALL",target:e="ALL",recommendationLevel:n="ALL",searchQuery:t=""}={}){const r=d.filter(i=>!(a!=="ALL"&&i.category!==a||e!=="ALL"&&i.target!==e||n!=="ALL"&&i.recommendationLevel!==n));if(t&&t.trim()){const i=[];for(const s of r){const o=X(s,t);o>0&&i.push({item:s,score:o})}return i.sort((s,o)=>o.score-s.score),i.map(s=>s.item)}return r}const Ba="psa_v2_catalog_db",$a=1,D="user_shorthands";class Ka{constructor(a=ya){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((e,n)=>{const t=window.indexedDB.open(Ba,$a);t.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains(D)||i.createObjectStore(D,{keyPath:"code"})},t.onsuccess=r=>e(r.target.result),t.onerror=r=>n(r.target.error)}),await this.loadFromIndexedDB()}catch(e){console.warn("IndexedDB unavailable, using memory fallback:",e)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,n)=>{const i=this.db.transaction([D],"readonly").objectStore(D).getAll();i.onsuccess=()=>e(i.result||[]),i.onerror=()=>n(i.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const n of this.userCatalog.values()){const t=e.findIndex(r=>r.code===n.code);t!==-1?e[t]={...e[t],...n}:e.push(n)}return a?e:e.filter(n=>n.status!=="DISABLED")}searchShorthands(a,e={}){const n=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return n;const t=a.toLowerCase().trim(),r=[];for(const i of n){let s=X(i,t);i.functionGroup&&i.functionGroup.toLowerCase().includes(t)&&(s=Math.max(s,60)),i.equivalentTo&&i.equivalentTo.some(o=>o.toLowerCase().includes(t))&&(s=Math.max(s,70)),i.relationships&&i.relationships.some(o=>{var l,c;return((l=o.code)==null?void 0:l.toLowerCase().includes(t))||((c=o.relationType)==null?void 0:c.toLowerCase().includes(t))})&&(s=Math.max(s,45)),s>0&&r.push({item:i,score:s})}return r.sort((i,s)=>s.score-i.score),r.map(i=>i.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(n=>n.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(n=>n.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(n=>n.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const n=this.getAll().find(t=>t.code===a||t.target===a);return!n||!n.relationships?[]:n.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),n=e.find(r=>r.code.toLowerCase()===a.code.toLowerCase());if(n)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:n,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const r=e.find(i=>i.functionGroup===a.functionGroup);if(r)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:r,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${r.code}).`}}const t=e.find(r=>r.equivalentTo&&r.equivalentTo.some(i=>i.toLowerCase()===a.code.toLowerCase()));return t?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:t,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${t.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((n,t)=>{const s=this.db.transaction([D],"readwrite").objectStore(D).put(e);s.onsuccess=()=>n(),s.onerror=()=>t(s.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(n=>n.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((n,t)=>{const s=this.db.transaction([D],"readwrite").objectStore(D).delete(a);s.onsuccess=()=>n(),s.onerror=()=>t(s.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:n,geminiKey:t,secret:r,password:i,...s}=e;return s});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let n=null;if(typeof a=="string")try{n=JSON.parse(a)}catch(i){throw new Error("Format JSON impor tidak valid: "+i.message)}else n=a;const t=Array.isArray(n)?n:n.entries||[];if(!Array.isArray(t))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((i,s)=>{const c=this.db.transaction([D],"readwrite").objectStore(D).clear();c.onsuccess=()=>i(),c.onerror=()=>s(c.error)}));let r=0;for(const i of t){if(!i||!i.code||this.coreCatalog.some(g=>g.code===i.code)&&e==="MERGE")continue;const{apiKey:o,geminiKey:l,secret:c,password:u,...p}=i;await this.add({...p,status:p.status||"APPROVED",source:p.source||"USER"}),r++}return{success:!0,count:r,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const r=this.db.transaction([D],"readwrite").objectStore(D).clear();r.onsuccess=()=>a(),r.onerror=()=>e(r.error)}),!0}}const H={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},C={getApiKey(){try{return localStorage.getItem(H.GEMINI_API_KEY)||""}catch{return""}},setApiKey(d){try{return d?localStorage.setItem(H.GEMINI_API_KEY,d.trim()):localStorage.removeItem(H.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(H.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{return localStorage.getItem(H.GEMINI_MODEL)||"gemini-2.0-flash"}catch{return"gemini-2.0-flash"}},setModel(d){try{return localStorage.setItem(H.GEMINI_MODEL,d),!0}catch{return!1}},getCustomCatalog(){try{const d=localStorage.getItem(H.CUSTOM_CATALOG);return d?JSON.parse(d):[]}catch{return[]}},saveCustomCatalog(d){try{return localStorage.setItem(H.CUSTOM_CATALOG,JSON.stringify(d)),!0}catch{return!1}},getUiPreferences(){try{const d=localStorage.getItem(H.UI_PREFS);return d?JSON.parse(d):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(d){try{return localStorage.setItem(H.UI_PREFS,JSON.stringify(d)),!0}catch{return!1}}};class Va{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,n)=>n.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const n=this.patches.get(a);return n?(n.enabled=!!e,!0):!1}safeExecuteHook(a,e,n={}){let t=e;const r=this.getActivePatches(a);for(const i of r)try{const s=i.hooks[a];if(typeof s=="function"){const o=s(t,n);o!==void 0&&(t=o)}}catch(s){console.warn(`[PatchManager] Peringatan: Patch "${i.id}" pada hook "${a}" gagal dieksekusi:`,s),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:i.id,hookName:a,error:s.message,stack:s.stack})}return t}async safeExecuteHookAsync(a,e,n={}){let t=e;const r=this.getActivePatches(a);for(const i of r)try{const s=i.hooks[a];if(typeof s=="function"){const o=await s(t,n);o!==void 0&&(t=o)}}catch(s){console.warn(`[PatchManager] Peringatan: Async Patch "${i.id}" pada hook "${a}" gagal:`,s),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:i.id,hookName:a,error:s.message})}return t}}const Aa=new Va,za={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(d,a){return d&&{...d,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},Wa={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(d){return d&&{...d,kamusStatus:{available:!0,version:"3.1.0"}}}}};Aa.registerPatch(za);Aa.registerPatch(Wa);class Ya{constructor(a=ya,e=Aa){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const n=this.normalize(a),t=this.extractExistingShorthands(a),r=this.stripShorthands(a),i=this.analyzeIntent(r),{editAreas:s,lockedAreas:o,unchangedAreas:l}=this.extractAreas(r,i),c=this.queryPrimaryShorthands(r,s,o,i),u=this.deduplicateByFunctionGroup(c).map(A=>({...A,isPrimary:!0,checked:!0,priority:"WAJIB"})),p=this.discoverRelatedShorthands(r,u,s,o),g=[...u,...p],m=this.detectConflicts(s,o,u,t),v=this.evaluateExclusions(g,u);let b=[];if(e&&Array.isArray(e))b=[...e];else{const A=u.sort((k,I)=>(k.promptIndex??999)-(I.promptIndex??999)).map(k=>k.code),O=new Set([...t,...A]);b=Array.from(O)}for(const A of g)A.checked=b.includes(A.code),A.active=A.checked;const f=this.generateVisualTransformation(s,o,r),E=this.buildOptimalPrompt(r,b),T={rawPrompt:a,normalizedPrompt:n,cleanText:r,intent:i,editAreas:s,lockedAreas:o,unchangedAreas:l,conflicts:m,primaryShorthands:u,relatedShorthands:p,recommendations:g,exclusions:v,installedShorthands:b,visualTransformation:f,optimalPrompt:E,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",T,{engine:this,patchManager:this.patchManager,rawPrompt:a}):T}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,n=[];let t;for(;(t=e.exec(a))!==null;)n.push(t[0]);return Array.from(new Set(n))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let n="MODIFIKASI_VISUAL",t="Gambar",r="Memproses instruksi visual pada gambar.",i="MEDIUM",s="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(n="PENINGKATAN_PENCAHAYAAN",t="Pencahayaan & Tata Cahaya",r="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",i="HIGH",s="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(n="PELEPASAN_PENUTUP_KEPALA",t="Hijab / Penutup Kepala",r="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",i="HIGH",s="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(n="PENGGANTIAN_BUSANA",t="Pakaian & Outfit",r="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",i="HIGH",s="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(n="PENAJAMAN_DETAIL",t="Mikrokontras & Detail",r="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",i="HIGH",s="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(n="PENGHAPUSAN_LATAR",t="Latar Belakang / Background",r="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",i="CRITICAL",s="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(n="PENGGANTIAN_LATAR",t="Latar Belakang / Background",r="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",i="HIGH",s="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(n="PENYESUAIAN_RASIO_KANVAS",t="Kanvas & Dimensi",r="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",i="HIGH",s="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(n="MODIFIKASI_RAMBUT",t="Rambut & Gaya Rambut",r="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",i="HIGH",s="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(n="MODIFIKASI_BENTUK_TUBUH",t="Bentuk Tubuh & Proporsi Lekuk",r="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",i="HIGH",s="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(n="PENYEMPURNAAN_ANATOMI_TANGAN",t="Tangan & Jari Subjek",r="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",i="HIGH",s="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(n="PENINGKATAN_RESOLUSI",t="Resolusi & Detail Gambar",r="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",i="HIGH",s="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(n="PERLUASAN_KANVAS_OUTPAINT",t="Bidang & Batas Kanvas Foto",r="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",i="HIGH",s="CANVAS_RATIO"),{primaryAction:n,primaryTarget:t,summary:r,priority:i,category:s}}extractAreas(a,e){const n=a.toLowerCase(),t=[],r=[],i=new Set,s=h=>{for(const R of h){if(!n.includes(R))continue;if([`jangan ubah ${R}`,`jangan ganti ${R}`,`jangan sentuh ${R}`,`jangan mengubah ${R}`,`pertahankan ${R}`,`kunci ${R}`,`jaga ${R}`,`${R} asli`,`${R} tetap`,`${R} sama`,`${R} harus tetap sama`,`keep ${R}`,`same ${R}`,`preserve ${R}`].some(L=>n.includes(L)))return!0}return!1},o=h=>{for(const R of h){if(!n.includes(R))continue;if([`ubah ${R}`,`ganti ${R}`,`hapus ${R}`,`hilangkan ${R}`,`perbaiki ${R}`,`tingkatkan ${R}`,`buat ${R}`,`lepas ${R}`,`lepaskan ${R}`,`buka ${R}`,`change ${R}`,`remove ${R}`].some(L=>n.includes(L))||R==="pencahayaan"&&(n.includes("perbaiki pencahayaan")||n.includes("lighting")||n.includes("terangkan"))||R==="hijab"&&(n.includes("hapus hijab")||n.includes("lepas hijab")||n.includes("lepaskan hijab")||n.includes("tanpa hijab"))||R==="baju"&&(n.includes("tanktop")||n.includes("kemeja")||n.includes("gaun")||n.includes("jaket"))||R==="rasio"&&(n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("4:5"))||R==="latar"&&(n.includes("latar baru")||n.includes("gunakan latar baru")||n.includes("hapus latar")))return!0}return!1},l=["wajah","muka","face","identitas","paras"];l.some(h=>n.includes(h))&&(i.add("FACE"),s(l)?r.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):o(l)&&t.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:n.includes("ganti wajah")?"/facechange":"/faceedit"}));const c=["hijab","kerudung","jilbab","penutup kepala","topi"];c.some(h=>n.includes(h))&&(i.add("HEADWEAR"),s(c)?r.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):t.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const u=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(u.some(h=>n.includes(h)))if(i.add("OUTFIT"),s(u))r.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let h="Pakaian subjek";n.includes("tanktop putih tali tipis")?h="Tanktop putih tali tipis":n.includes("tanktop")?h="Tanktop":n.includes("gaun")?h="Gaun":n.includes("kemeja")&&(h="Kemeja"),t.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${h}.`,shorthand:"/outfit"})}const p=["latar","background","backdrop","lingkungan"];if(p.some(h=>n.includes(h))&&(i.add("BACKGROUND"),s(p)?r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):n.includes("hapus")||n.includes("transparan")||n.includes("hilangkan")||n.includes("buang")?t.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(n.includes("ganti")||n.includes("ubah")||n.includes("baru")||n.includes("gunakan latar baru")||n.includes("studio"))&&t.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(n.includes("pencahayaan")||n.includes("lighting")||n.includes("terangkan")||n.includes("cahaya"))&&(i.add("LIGHTING"),t.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(h=>n.includes(h))?(i.add("IMAGE_QUALITY"),t.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(n.includes("tajam")||n.includes("sharpen")||n.includes("perjelas")||n.includes("detail")||n.includes("ketajaman"))&&(i.add("IMAGE_QUALITY"),t.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),n.includes("rasio")||n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("4:5")||n.includes("format")){i.add("CANVAS_RATIO");let h="Rasio baru",R="/ar 9:16";n.includes("9:16")?(h="9:16 (Vertical)",R="/ar 9:16"):n.includes("16:9")?(h="16:9 (Landscape)",R="/ar 16:9"):n.includes("1:1")?(h="1:1 (Persegi)",R="/ar 1:1"):n.includes("4:5")&&(h="4:5 (Portrait)",R="/ar 4:5"),t.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${h}.`,shorthand:R})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(h=>n.includes(h))&&(i.add("CANVAS_RATIO"),t.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(n.includes("full body")||n.includes("seluruh tubuh")||n.includes("badan penuh"))&&(i.add("BODY_POSE"),t.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const b=["rambut","hair","botak","cukur"];if(b.some(h=>n.includes(h))){i.add("HAIR");const h=s(b),R=o(b)||n.includes("botak")||n.includes("merah")||n.includes("cat")||n.includes("gaya rambut");h&&R?(r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),t.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:n.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):h?r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):R&&t.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:n.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const f=["tubuh","badan","pose","postur"],E=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],T=E.some(h=>n.includes(h));(f.some(h=>n.includes(h))||T)&&(i.add("BODY_POSE"),s([...f,...E])?r.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):T&&t.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const O=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];O.some(h=>n.includes(h))&&(i.add("BODY_POSE"),s(O)?r.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):t.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const I=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(h=>!i.has(h.key)).map(h=>({entity:h.key,label:h.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${h.label.toLowerCase()}.`}));return{editAreas:t,lockedAreas:r,unchangedAreas:I}}findPromptIndex(a,e,n=[]){const t=a.toLowerCase();let r=999;const i=[...e.semanticTriggers||[],...n];for(const s of i){if(!s||s.length<3)continue;const o=t.indexOf(s.toLowerCase());o!==-1&&o<r&&(r=o)}return r}queryPrimaryShorthands(a,e,n,t){const r=new Map;for(const i of n)if(i.shorthand){const s=this.catalog.find(o=>o.code===i.shorthand);if(s){const o=this.findPromptIndex(a,s,[i.label,i.entity,"jangan","pertahankan","kunci"]);r.set(s.code,{item:s,code:s.code,name:s.name,category:s.category,target:i.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${i.description.toLowerCase()}`,score:100,promptIndex:o})}}for(const i of e)if(i.shorthand){const s=this.catalog.find(o=>o.code===i.shorthand);if(s){const o=this.findPromptIndex(a,s,[i.label,i.entity,"ubah","ganti","hapus"]);r.set(s.code,{item:s,code:s.code,name:s.name,category:i.category||s.category,target:i.label,priority:"WAJIB",reason:`Mendukung eksekusi ${i.description.toLowerCase()}`,score:95,promptIndex:o})}}if(e.some(i=>i.entity==="LIGHTING")&&!r.has("/enhance")){const i=this.catalog.find(s=>s.code==="/enhance");i&&r.set("/enhance",{item:i,code:i.code,name:i.name,category:i.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,i,["pencahayaan","lighting"])})}if(e.some(i=>i.entity==="IMAGE_QUALITY")&&!r.has("/sharpen")&&!r.has("/highresolution")){const i=this.catalog.find(s=>s.code==="/sharpen");i&&r.set("/sharpen",{item:i,code:i.code,name:i.name,category:i.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,i,["tajam","sharpen"])})}for(const i of this.catalog){if(r.has(i.code))continue;const s=X(i,a);if(s>=70){if(n.some(u=>{if(u.shorthand&&i.conflicts&&i.conflicts.includes(u.shorthand))return!0;const p=this.catalog.find(g=>g.code===u.shorthand);return!!(p&&p.conflicts&&p.conflicts.includes(i.code))})||Array.from(r.values()).some(u=>{var p,g;return(g=(p=u.item)==null?void 0:p.relationships)==null?void 0:g.some(m=>m.code===i.code&&m.relationType==="ALTERNATIVE")}))continue;i.category;const c=this.findPromptIndex(a,i);r.set(i.code,{item:i,code:i.code,name:i.name,category:i.category,target:i.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${i.name}'.`,score:s,promptIndex:c})}}return Array.from(r.values())}deduplicateByFunctionGroup(a){var t,r,i;const e=new Map;for(const s of a){const o=((t=s.item)==null?void 0:t.functionGroup)||((r=s.item)==null?void 0:r.category)||s.code;e.has(o)?e.get(o).push(s):e.set(o,[s])}const n=[];for(const[s,o]of e.entries()){if(o.length===1){n.push(o[0]);continue}o.sort((p,g)=>{var T,A,O,k;const m=(T=p.item)!=null&&T.preferredRepresentative?1:0,v=(A=g.item)!=null&&A.preferredRepresentative?1:0;if(v!==m)return v-m;const b={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},f=b[(O=p.item)==null?void 0:O.status]||2,E=b[(k=g.item)==null?void 0:k.status]||2;return E!==f?E-f:(g.score||0)!==(p.score||0)?(g.score||0)-(p.score||0):p.code.length-g.code.length});const l={...o[0]},c=o.slice(1).map(p=>p.code),u=Array.from(new Set([...((i=l.item)==null?void 0:i.equivalentTo)||[],...c,...o.slice(1).flatMap(p=>{var g;return((g=p.item)==null?void 0:g.equivalentTo)||[]})])).filter(p=>p!==l.code);l.item={...l.item,equivalentTo:u},l.equivalentTo=u,n.push(l)}return n}hasConflict(a,e,n){if(!a)return!1;for(const t of e){if(a.code===t)continue;if(a.conflicts&&a.conflicts.includes(t))return!0;const r=this.catalog.find(i=>i.code===t);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}for(const t of n){if(a.code===t)continue;if(a.conflicts&&a.conflicts.includes(t))return!0;const r=this.catalog.find(i=>i.code===t);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,n,t){var g;const r=new Set(e.map(m=>m.code));for(const m of e)if(m.equivalentTo)for(const v of m.equivalentTo)r.add(v);const i=new Set(e.map(m=>{var v,b;return((v=m.item)==null?void 0:v.functionGroup)||((b=m.item)==null?void 0:b.category)})),s=new Set([...n.map(m=>m.entity),...t.map(m=>m.entity)]),o=new Set(t.map(m=>m.shorthand).filter(Boolean)),l=new Map;for(const m of e){const v=((g=m.item)==null?void 0:g.relationships)||[];for(const b of v){if(!b.code||r.has(b.code))continue;const f=this.catalog.find(T=>T.code===b.code);if(!f||this.hasConflict(f,o,r)||X(f,a)<0)continue;const E=f.functionGroup||f.category;i.has(E)||f.category==="HEADWEAR"&&!s.has("HEADWEAR")||l.has(f.code)||l.set(f.code,{item:f,code:f.code,name:f.name,category:f.category,target:f.target,functionGroup:E,description:f.description,relationship:b.relationType||"DIRECTLY_RELATED",reason:b.reason||`Berhubungan dengan ${m.name}`,source:f.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const c={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const m of s){const v=c[m]||[];for(const b of v)for(const f of this.catalog){if(r.has(f.code)||l.has(f.code)||b.category&&f.category!==b.category||b.target&&f.target!==b.target||f.category==="HEADWEAR"&&!s.has("HEADWEAR")||f.category==="TRANSPARENCY"&&!s.has("BACKGROUND")||this.hasConflict(f,o,r)||X(f,a)<0)continue;const E=f.functionGroup||f.category;i.has(E)||l.set(f.code,{item:f,code:f.code,name:f.name,category:f.category,target:f.target,functionGroup:E,description:f.description,relationship:b.relation||"CONTEXTUAL",reason:b.reason||`Berhubungan dengan area ${m}`,source:f.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const u=Array.from(l.values());return this.deduplicateByFunctionGroup(u).map(m=>({...m,isPrimary:!1,checked:!1,priority:m.priority||"DISARANKAN"}))}detectConflicts(a,e,n,t){const r=[];for(const o of a){const l=e.find(c=>c.entity===o.entity);if(l){const c={id:`conflict-${o.entity.toLowerCase()}`,entity:o.entity,label:o.label,type:"EDIT_VS_LOCK",shorthandA:l.shorthand||`[Lock ${o.entity}]`,shorthandB:o.shorthand||`[Ubah ${o.entity}]`,instructionA:l.description,instructionB:o.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${o.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};c.suggestion=this.generateConflictSuggestion(c),r.push(c)}}const i=Array.isArray(n)?n.map(o=>typeof o=="string"?o:o.code):Array.from(n.keys?n.keys():[]),s=Array.from(new Set([...i,...t]));for(const o of s){const l=this.catalog.find(c=>c.code===o);if(!(!l||!l.conflicts||l.conflicts.length===0)){for(const c of l.conflicts)if(s.includes(c)){if(r.some(g=>g.shorthandA===o&&g.shorthandB===c||g.shorthandA===c&&g.shorthandB===o))continue;const p=`conflict-${[o,c].sort().join("-")}`;if(!r.some(g=>g.id===p)){const g=this.catalog.find(v=>v.code===c),m={id:p,entity:l.target,label:l.name,type:"SHORTHAND_CLASH",shorthandA:o,shorthandB:c,instructionA:l.description,instructionB:g?g.description:`Konflik dengan direktif ${c}`,reason:`Shorthand ${o} bertentangan langsung dengan ${c} pada target ${l.target}.`,options:[{id:"keep_a",label:`Gunakan ${o}`},{id:"keep_b",label:`Gunakan ${c}`}]};m.suggestion=this.generateConflictSuggestion(m,l,g),r.push(m)}}}}return r}generateConflictSuggestion(a,e=null,n=null){const t=(a.shorthandA||"").toLowerCase(),r=(a.shorthandB||"").toLowerCase(),i=[t,r].sort().join(" vs ");if(i==="/backgroundlock vs /bgblur"||t==="/backgroundlock"&&r==="/bgblur"||r==="/backgroundlock"&&t==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(i==="/backgroundlock vs /studiobg"||t==="/backgroundlock"&&r==="/studiobg"||r==="/backgroundlock"&&t==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(i==="/backgroundlock vs /bgreplace"||t==="/backgroundlock"&&r==="/bgreplace"||r==="/backgroundlock"&&t==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(i==="/backgroundlock vs /bgremove"||t==="/backgroundlock"&&r==="/bgremove"||r==="/backgroundlock"&&t==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(i==="/bgremove vs /bgreplace"||t==="/bgreplace"&&r==="/bgremove"||t==="/bgremove"&&r==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(i==="/bgblur vs /bgremove"||t==="/bgblur"&&r==="/bgremove"||t==="/bgremove"&&r==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(i==="/bgremove vs /studiobg"||t==="/studiobg"&&r==="/bgremove"||t==="/bgremove"&&r==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(i==="/bgblur vs /studiobg"||t==="/studiobg"&&r==="/bgblur"||t==="/bgblur"&&r==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(t==="/facelock"||r==="/facelock"){const o=t==="/facelock"?r:t;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${o}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${o}.`}if(t==="/outfitlock"||r==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${t==="/outfitlock"?r:t}.`;if(t==="/hairlock"||r==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${t==="/hairlock"?r:t}.`;if(t==="/headwearlock"||r==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${t==="/headwearlock"?r:t} jika ingin melepas atau mengganti penutup kepala.`;if(t==="/bodylock"||r==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${t==="/bodylock"?r:t}.`;if(i==="/cinematic vs /rawphoto"||t==="/cinematic"&&r==="/rawphoto"||t==="/rawphoto"&&r==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(i==="/rawphoto vs /vintage"||t==="/vintage"&&r==="/rawphoto"||t==="/rawphoto"&&r==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(i==="/cooltone vs /warmtone"||t==="/warmtone"&&r==="/cooltone"||t==="/cooltone"&&r==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(t==="/monochrome"||r==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${t==="/monochrome"?r:t} jika gambar harus tampil berwarna.`;if(i==="/bokeh vs /sharpen"||t==="/sharpen"&&r==="/bokeh"||t==="/bokeh"&&r==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const o=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${o}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${o}) dan batalkan instruksi ubah.`}const s=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${s}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const n=new Set(a.map(i=>i.code));for(const i of a)if(i.equivalentTo)for(const s of i.equivalentTo)n.add(s);const t=new Set(e.map(i=>i.code)),r=[];for(const i of this.catalog){if(n.has(i.code))continue;let s="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const o=e.find(l=>{var c;return!!(i.conflicts&&i.conflicts.includes(l.code)||(c=l.item)!=null&&c.conflicts&&l.item.conflicts.includes(i.code))});o?s=`Bertentangan dengan direktif aktif: ${o.code} (${o.name}).`:i.category==="LOCK_PRESERVATION"||i.category==="FACE_IDENTITY"?i.code==="/facelock"||i.code==="/faceedit"||i.code==="/facechange"?s="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":i.code==="/hairlock"?s="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":i.code==="/backgroundlock"?s="Latar belakang tidak diminta untuk dikunci secara eksplisit.":i.code==="/outfitlock"?s="Pakaian subjek tidak diminta untuk dikunci.":i.code==="/headwearlock"&&(s="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):i.category==="HAIR"?s="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":i.category==="OUTFIT"?t.has("/outfit")?i.code==="/outfit-remove"?s="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":i.code==="/outfit-color"?s="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":s="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":s="Tidak ada instruksi yang memodifikasi pakaian atau busana.":i.category==="HEADWEAR"?s="Tidak ada instruksi penutup kepala atau hijab.":i.category==="BACKGROUND"||i.category==="TRANSPARENCY"?i.code==="/bgremove"?s="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":i.code==="/bgreplace"?s="Tidak ada permintaan penggantian latar belakang ke scene baru.":s="Tidak ada permintaan manipulasi latar belakang.":i.category==="CANVAS_RATIO"?s="Tidak ada instruksi pengubahan rasio kanvas gambar.":i.category==="BODY_POSE"?s="Tidak ada permintaan perubahan pose atau framing seluruh badan.":i.category==="STYLE_EFFECT"||i.category==="CAMERA_PHOTO"?s="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":i.category==="EXPRESSION"?s="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":i.category==="OBJECT"&&(s="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),r.push({code:i.code,name:i.name,category:i.category,target:i.target,description:i.description,reason:s})}return r}generateVisualTransformation(a,e,n){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:n||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const t=a.map(o=>o.label).join(", "),r=e.map(o=>o.label).join(", ");let i="Elemen visual awal gambar",s="Elemen visual teroptimasi";if(a.some(o=>o.entity==="LIGHTING"))i="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",s="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(o=>o.entity==="HEADWEAR"))i="Subjek mengenakan penutup kepala / hijab asli",s="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(r?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(o=>o.entity==="OUTFIT")){const o=a.find(l=>l.entity==="OUTFIT");i="Busana awal subjek",s=`${o?o.description:"Busana baru terpasang"}`+(r?`; ${r} tetap terkunci aman.`:"")}else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REMOVE")))i="Foto subjek dengan latar belakang bawaan",s="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REPLACE")))i="Latar belakang awal foto",s="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(o=>o.entity==="CANVAS_RATIO")){const o=a.find(l=>l.entity==="CANVAS_RATIO");i="Dimensi kanvas bawaan foto",s=`${o?o.description:"Dimensi kanvas baru disesuaikan"}`}return{from:i,to:s,summary:`Transformasi pada [${t||"Tanpa Edit"}] dengan preservasi pada [${r||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let n=a.trim();n&&!n.endsWith(".")&&!n.endsWith("!")&&!n.endsWith("?")&&(n+=".");const t=e.join(" ");return n&&t?`${n} ${t}`:t||n}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",generatedPrompt:"",visionData:null,visualBreakdown:null,timestamp:null}}}const j={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class Fa{constructor(a=[]){this.catalog=a,this.localEngine=new Ya(a),this.status=j.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){C.getApiKey()||(this.status=j.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!C.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const n=e.indexOf("{"),t=e.lastIndexOf("}");if(n!==-1&&t>n){const s=e.substring(n,t+1);try{return JSON.parse(s)}catch{}}const r=e.indexOf("["),i=e.lastIndexOf("]");if(r!==-1&&i>r){const s=e.substring(r,i+1);try{return JSON.parse(s)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var o;const n=(a||C.getApiKey()).trim(),t=e||C.getModel()||"gemini-2.0-flash";if(!n)return this.status=j.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:j.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const r=[t,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((l,c,u)=>l&&u.indexOf(l)===c);let i="",s=null;for(const l of r)try{const c=`https://generativelanguage.googleapis.com/v1beta/models/${l}?key=${encodeURIComponent(n)}`,u=await fetch(c,{method:"GET",headers:{"Content-Type":"application/json"}});if(u.ok){s=l;break}else{if(i=((o=(await u.json().catch(()=>({}))).error)==null?void 0:o.message)||`HTTP ${u.status}: ${u.statusText}`,u.status===404)continue;if(u.status===400||u.status===403)break}}catch(c){i=c.message||"Koneksi jaringan gagal"}if(s)return this.status=j.CONNECTED,this.lastError=null,s!==t&&C.setModel(s),{success:!0,status:j.CONNECTED,message:`Berhasil terhubung ke model ${s}!`};try{const l=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(n)}`,c=await fetch(l);if(c.ok){const p=((await c.json().catch(()=>({}))).models||[]).find(g=>{var m;return(m=g.supportedGenerationMethods)==null?void 0:m.includes("generateContent")});if(p){const g=p.name.replace(/^models\//,"");return C.setModel(g),this.status=j.CONNECTED,this.lastError=null,{success:!0,status:j.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${g})!`}}}}catch{}return this.status=j.FAILED,this.lastError=i||"Koneksi gagal",{success:!1,status:j.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const n=C.getApiKey().trim(),t=C.getModel()||"gemini-2.0-flash";if(!n)return{...this.localEngine.analyze(a,e),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."};try{const i=await this.callGeminiAPI(a,n,t);if(i){const s=this.mergeAiWithCatalog(i,a,e);this.status=j.CONNECTED,this.lastError=null;const o=C.getModel()||t;return{...s,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${o}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(i){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",i),this.lastError=i.message}return{...this.localEngine.analyze(a,e),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,n){const t=[n,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((i,s,o)=>i&&o.indexOf(i)===s);let r=null;for(const i of t)try{const s=await this.executeGenerateContent(a,e,i);if(s)return i!==n&&C.setModel(i),s}catch(s){r=s,console.warn(`Model ${i} tidak dapat digunakan (${s.message}), mencoba model alternatif...`);continue}throw r||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,n){var c,u,p,g,m;const t=`https://generativelanguage.googleapis.com/v1beta/models/${n}:generateContent?key=${encodeURIComponent(e)}`,i={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
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
  "optimalPrompt": "prompt user bersih. /shorthandutama",
  "visualTransformation": "Deskripsi efek visual yang terjadi pada gambar"
}

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},s=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const v=await s.text();throw new Error(`Gemini API error (${s.status}): ${v}`)}const l=(m=(g=(p=(u=(c=(await s.json()).candidates)==null?void 0:c[0])==null?void 0:u.content)==null?void 0:p.parts)==null?void 0:g[0])==null?void 0:m.text;if(!l)throw new Error("Respon Gemini kosong.");return this.extractJson(l)}mergeAiWithCatalog(a,e,n){var v,b,f,E,T;const t=this.localEngine.analyze(e,n);let r=[];const i=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const A of a.primaryShorthands){if(!A||!A.code)continue;const O=A.code.startsWith("/")?A.code:`/${A.code}`;if(i.has(O))continue;i.add(O);const k=this.catalog.find(I=>I.code.toLowerCase()===O.toLowerCase());r.push({item:k||null,code:O,name:A.name||(k==null?void 0:k.name)||O,category:A.category||(k==null?void 0:k.category)||"ONLINE_DISCOVERY",target:A.target||(k==null?void 0:k.target)||"Konsep Visual Prompt",description:A.description||(k==null?void 0:k.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:A.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:k?"CORE":"ONLINE",isOnline:!k,equivalentTo:(k==null?void 0:k.equivalentTo)||A.equivalentTo||[],functionGroup:(k==null?void 0:k.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(t.primaryShorthands&&t.primaryShorthands.length>0)for(const A of t.primaryShorthands)A.category==="LOCK_PRESERVATION"&&!i.has(A.code)&&(i.add(A.code),r.push({...A,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else t.primaryShorthands&&t.primaryShorthands.length>0&&(r=t.primaryShorthands);let s=[];const o=new Set([...r.map(A=>A.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const A of a.relatedShorthands){if(!A||!A.code)continue;const O=A.code.startsWith("/")?A.code:`/${A.code}`;if(o.has(O))continue;o.add(O);const k=this.catalog.find(I=>I.code.toLowerCase()===O.toLowerCase());s.push({item:k||null,code:O,name:A.name||(k==null?void 0:k.name)||O,category:A.category||(k==null?void 0:k.category)||"ONLINE_DISCOVERY",target:A.target||(k==null?void 0:k.target)||"Variasi Konsep Visual",description:A.description||(k==null?void 0:k.description)||"Alternatif shorthand hasil analisis semantik online.",priority:A.priority||"DISARANKAN",reason:A.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:k?"CORE":"ONLINE",isOnline:!k,equivalentTo:(k==null?void 0:k.equivalentTo)||A.equivalentTo||[],functionGroup:(k==null?void 0:k.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(t.relatedShorthands&&t.relatedShorthands.length>0)for(const A of t.relatedShorthands)o.has(A.code)||(o.add(A.code),s.push(A));let l=[];n&&Array.isArray(n)?l=n:r.length>0?l=r.map(A=>A.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?l=a.installedShorthands.map(A=>A.startsWith("/")?A:`/${A}`):t.installedShorthands&&t.installedShorthands.length>0&&(l=t.installedShorthands);const c=t.cleanText||e.trim();let u=t.optimalPrompt;l.length>0?u=`${c}. ${l.join(" ")}`:a.optimalPrompt&&a.optimalPrompt.trim()&&(u=a.optimalPrompt);const p={primaryAction:(v=a.intent)!=null&&v.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:t.intent.primaryAction,primaryTarget:(b=a.intent)!=null&&b.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:t.intent.primaryTarget,summary:((f=a.intent)==null?void 0:f.summary)||a.summary||t.intent.summary,priority:((E=a.intent)==null?void 0:E.priority)||t.intent.priority,category:(T=a.intent)!=null&&T.category&&a.intent.category!=="GENERAL"?a.intent.category:t.intent.category},g=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:t.editAreas,m=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:t.lockedAreas;return{rawPrompt:e,normalizedPrompt:t.normalizedPrompt,cleanText:c,intent:p,editAreas:g,lockedAreas:m,unchangedAreas:t.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:t.conflicts,primaryShorthands:r,relatedShorthands:s,recommendations:[...r,...s],exclusions:t.exclusions,installedShorthands:l,visualTransformation:a.visualTransformation||t.visualTransformation,optimalPrompt:u,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var s,o,l,c,u;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const e=C.getApiKey()?C.getApiKey().trim():"",n=C.getModel()||"gemini-2.0-flash";if(!e)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const t=[n,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((p,g,m)=>p&&m.indexOf(p)===g),i={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
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

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const p of t)try{const g=`https://generativelanguage.googleapis.com/v1beta/models/${p}:generateContent?key=${encodeURIComponent(e)}`,m=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!m.ok)continue;const b=(u=(c=(l=(o=(s=(await m.json()).candidates)==null?void 0:s[0])==null?void 0:o.content)==null?void 0:l.parts)==null?void 0:c[0])==null?void 0:u.text;if(!b)continue;let f=[];try{f=this.extractJson(b)}catch{continue}if(!Array.isArray(f))continue;const E=f.filter(T=>T&&T.code&&typeof T.code=="string").map(T=>({code:T.code.startsWith("/")?T.code:`/${T.code}`,name:T.name||T.code,description:T.description||"Instruksi visual shorthand online",category:T.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:E,onlineAvailable:!0,message:E.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(g){console.warn(`Pencarian online dengan model ${p} gagal:`,g);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var p,g,m,v,b,f;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const n=C.getApiKey()?C.getApiKey().trim():"",t=C.getModel()||"gemini-2.0-flash";if(!n)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const r=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],i=[t,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((E,T,A)=>E&&A.indexOf(E)===T),s=`Anda adalah Prompt Shorthand Analyzer V3.3 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
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
8. Pertahankan bahasa utama prompt asli (jika bahasa Inggris tetap bahasa Inggris; jika bahasa Indonesia tetap bahasa Indonesia).

Format respons HANYA berupa JSON valid:
{
  "enrichedPrompt": "teks prompt lengkap yang telah diperkaya beserta seluruh shorthand asli di akhir"
}`,o=((p=e==null?void 0:e.intent)==null?void 0:p.summary)||"",l=`Prompt Optimal Asli:
"${a.trim()}"
${o?`Konteks/Maksud Analisis:
"${o}"
`:""}Shorthand Terpasang Wajib Dipertahankan: ${r.length>0?r.join(" "):"(tidak ada)"}`,c={contents:[{role:"user",parts:[{text:`${s}

${l}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let u=null;for(const E of i)try{const T=`https://generativelanguage.googleapis.com/v1beta/models/${E}:generateContent?key=${encodeURIComponent(n)}`,A=await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!A.ok){const R=await A.text();throw new Error(`HTTP ${A.status}: ${R}`)}const k=(f=(b=(v=(m=(g=(await A.json()).candidates)==null?void 0:g[0])==null?void 0:m.content)==null?void 0:v.parts)==null?void 0:b[0])==null?void 0:f.text;if(!k)throw new Error("Respon Gemini kosong.");const I=this.extractJson(k);let h=I.enrichedPrompt||I.prompt||(typeof I=="string"?I:"");if(!h||typeof h!="string"||!h.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");h=h.trim();for(const R of r)h.includes(R)||(h+=` ${R}`);return{success:!0,enrichedPrompt:h,modelUsed:E}}catch(T){u=T,console.warn(`Enrich prompt dengan model ${E} gagal:`,T.message);continue}throw u||new Error("Gagal memperkaya prompt dengan Gemini.")}detectImageAspect(a=null,e=null){if(a!=null&&a.width&&(a!=null&&a.height)){const t=a.width/a.height;if(t>1.6)return{ar:"16:9",orientation:"landscape-wide"};if(t>1.25)return{ar:"4:3",orientation:"landscape"};if(t>.9&&t<1.1)return{ar:"1:1",orientation:"square"};if(t<.65)return{ar:"9:16",orientation:"portrait-tall"};if(t<.85)return{ar:"3:4",orientation:"portrait"}}if(e&&typeof e=="string")try{const t=e.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"");if(typeof atob=="function"){const r=atob(t.substring(0,4e3));if(r.charCodeAt(0)===137&&r.charCodeAt(1)===80&&r.charCodeAt(2)===78&&r.charCodeAt(3)===71){const i=r.charCodeAt(16)<<24|r.charCodeAt(17)<<16|r.charCodeAt(18)<<8|r.charCodeAt(19),s=r.charCodeAt(20)<<24|r.charCodeAt(21)<<16|r.charCodeAt(22)<<8|r.charCodeAt(23);if(i>0&&s>0){const o=i/s;return o>1.6?{ar:"16:9",orientation:"landscape-wide"}:o>1.2?{ar:"4:3",orientation:"landscape"}:o>.9&&o<1.1?{ar:"1:1",orientation:"square"}:o<.65?{ar:"9:16",orientation:"portrait-tall"}:{ar:"3:4",orientation:"portrait"}}}}}catch{}const n=((a==null?void 0:a.name)||"").toLowerCase();return n.includes("portrait")||n.includes("vertical")||n.includes("story")||n.includes("reel")?{ar:"9:16",orientation:"portrait-tall"}:n.includes("square")||n.includes("feed")||n.includes("profile")||n.includes("1x1")?{ar:"1:1",orientation:"square"}:{ar:"16:9",orientation:"landscape-wide"}}assembleStructuredImagePrompt(a){if(!a)return"";const e=[];return a.mainDescription&&a.mainDescription.trim()?e.push(`/imagine prompt: ${a.mainDescription.trim()}`):e.push("/imagine prompt: Visual photograph captured with authentic realism and natural illumination."),a.subjectDescription&&a.subjectDescription.trim()&&e.push(a.subjectDescription.trim()),a.poseExpression&&a.poseExpression.trim()&&a.poseExpression.trim()!=="-"&&e.push(a.poseExpression.trim()),a.identityPreservation&&a.identityPreservation.trim()&&a.identityPreservation.trim()!=="-"&&e.push(a.identityPreservation.trim()),a.outfitMaterial&&a.outfitMaterial.trim()&&a.outfitMaterial.trim()!=="-"&&e.push(a.outfitMaterial.trim()),a.environmentBackground&&a.environmentBackground.trim()&&a.environmentBackground.trim()!=="-"&&e.push(a.environmentBackground.trim()),a.compositionPerspective&&a.compositionPerspective.trim()&&a.compositionPerspective.trim()!=="-"&&e.push(a.compositionPerspective.trim()),a.lightingColor&&a.lightingColor.trim()&&a.lightingColor.trim()!=="-"&&e.push(a.lightingColor.trim()),a.cameraLensDof&&a.cameraLensDof.trim()&&a.cameraLensDof.trim()!=="-"&&e.push(a.cameraLensDof.trim()),a.photoStyleRealism&&a.photoStyleRealism.trim()&&a.photoStyleRealism.trim()!=="-"&&e.push(a.photoStyleRealism.trim()),e.join(`

`)}assembleOptimalImagePrompt(a,e=[]){const t=[this.assembleStructuredImagePrompt(a)];if(e&&e.length>0){const s=e.map(o=>o.startsWith("/")?o:`/${o}`);t.push(s.join(`
`))}const r=(a==null?void 0:a.aspectRatio)||"16:9";t.push(`--ar ${r}
--style raw
--v 6.1`);const i=(a==null?void 0:a.contextualNegativePrompt)||"cartoon, 3d render, illustration, deformed, blurry, watermark, text";return t.push(`--no ${i}`),t.join(`

`)}matchImageShorthands(a,e=null){const n=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.subjectDescription)||"")+" "+((e==null?void 0:e.environmentBackground)||"")+" "+((e==null?void 0:e.compositionPerspective)||"")+" "+((e==null?void 0:e.lightingColor)||"")+" "+((e==null?void 0:e.cameraLensDof)||"")+" "+((e==null?void 0:e.photoStyleRealism)||"")+" "+(Array.isArray(e==null?void 0:e.optimizationNeeds)?e.optimizationNeeds.join(" "):"")).toLowerCase(),t=[];for(const s of this.catalog){const o=(s.negativeTriggers||[]).map(p=>p.toLowerCase());if(o.length>0&&o.some(p=>n.includes(p)))continue;const l=(s.semanticTriggers||[]).map(p=>p.toLowerCase());let c=!1,u="";n.includes(s.code.toLowerCase())?(c=!0,u=`Terdeteksi dari direktif visual: ${s.code}`):l.some(p=>n.includes(p))?(c=!0,u=`Teridentifikasi dari atribut visual gambar (${s.name})`):Array.isArray(e==null?void 0:e.optimizationNeeds)&&e.optimizationNeeds.some(p=>s.code.toLowerCase().includes(p.toLowerCase())||(s.name||"").toLowerCase().includes(p.toLowerCase())||l.some(g=>p.toLowerCase().includes(g)))&&(c=!0,u=`Direkomendasikan untuk optimasi visual gambar (${s.name})`),c&&t.push({code:s.code,name:s.name,category:s.category,functionGroup:s.functionGroup||`GROUP_${s.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:s.description,priority:s.priority||"WAJIB",isPrimary:!0,checked:!0,reason:u||s.whenToUse||"Sesuai dengan karakter visual gambar",source:"IMAGE_ANALYSIS"})}const r=new Set,i=[];for(const s of t)r.has(s.functionGroup)||(r.add(s.functionGroup),i.push(s));return i}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:n="image/jpeg",referencePrompt:t="",preferredLang:r="id"}){const i=C.getApiKey().trim(),s=C.getModel()||"gemini-2.0-flash";let o=null,l="LOCAL_ENGINE",c=!1,u="";if(i&&e)try{const f=await this.executeMultimodalImageAnalysis(e,n,t,i,s,r);f&&(f.mainDescription||f.subjectDescription)&&(o=f,l="GEMINI_AI",c=!0,u=`🌐 Analisa Gambar AI AKTIF (${s}) — Vision analysis mendalam dari gambar aktual.`)}catch(f){console.warn("Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:",f),this.lastError=f.message}o||(o=this.generateDynamicImageAnalysis(a,e,t,r),l=i?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",c=!!i,u=c?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung).");const p=this.assembleStructuredImagePrompt(o),g=this.matchImageShorthands(p,o),m=g.map(f=>f.code),v=this.assembleOptimalImagePrompt(o,m),b={subject:o.subjectDescription||o.mainDescription,pose:o.poseExpression||"-",framing:o.compositionPerspective||"-",lighting:o.lightingColor||"-",environment:o.environmentBackground||"-",camera:o.cameraLensDof||"-",style:o.photoStyleRealism||"-",aspectRatio:o.aspectRatio||"16:9"};return{mode:"IMAGE_TO_PROMPT",source:l,isOnlineActive:c,engineNotice:u,generatedPrompt:p,optimalPrompt:v,cleanText:p,visionData:o,visualBreakdown:b,primaryShorthands:g,relatedShorthands:[],recommendations:g,installedShorthands:m,conflicts:[],exclusions:[],editAreas:[{entity:"VISUAL_SUBJECT",description:o.subjectDescription||o.mainDescription},{entity:"ENVIRONMENT",description:o.environmentBackground||"-"},{entity:"LIGHTING",description:o.lightingColor||"-"}],lockedAreas:o.identityPreservation&&o.identityPreservation!=="-"?[{entity:"IDENTITY_PRESERVATION",description:o.identityPreservation}]:[],unchangedAreas:o.identityPreservation&&o.identityPreservation!=="-"?[o.identityPreservation]:[],intent:{primaryAction:"ANALISIS_GAMBAR_KE_PROMPT",primaryTarget:"Karakteristik Visual Gambar Aktual",summary:o.mainDescription||"Deskripsi visual lengkap hasil analisis gambar sumber.",priority:"HIGH",category:"CAMERA_PHOTO"},referencePrompt:t||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:n,aspectRatio:o.aspectRatio||"16:9"},timestamp:new Date().toISOString()}}async executeMultimodalImageAnalysis(a,e,n,t,r,i="id"){var g,m,v,b,f;const s=[r,"gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((E,T,A)=>E&&A.indexOf(E)===T),o=a.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,""),l=`Anda adalah Ahli Analisis Gambar Visual AI & Prompt Engineering Profesional.
Tugas Anda: Menganalisis gambar referensi yang diunggah secara objektif dan mendalam sebagai SATU-SATUNYA SOURCE OF TRUTH.
JANGAN menggunakan deskripsi template atau asumsi generik. Analisis apa yang BENAR-BENAR TERLIHAT pada gambar secara rinci.

Identifikasi seluruh elemen visual yang terlihat pada gambar:
1. mainDescription: Deskripsi utama yang merangkum keseluruhan konsep visual gambar secara akurat dan mengalir.
2. subjectDescription: Deskripsi spesifik subjek utama (apakah orang, hewan, objek, lanskap, atau arsitektur; jumlah subjek, gender, penampilan).
3. poseExpression: Pose tubuh, posisi, gestur, arah pandangan, ekspresi wajah (isi "-" jika tidak ada subjek makhluk hidup).
4. identityPreservation: Karakteristik unik subjek yang perlu diproteksi/dipertahankan (isi "-" jika tidak relevan).
5. outfitMaterial: Detail pakaian/busana, warna busana, atau tekstur/material permukaan objek utama (isi "-" jika tidak relevan).
6. environmentBackground: Lingkungan, setting visual, foreground, midground, background, suasana lokasi.
7. compositionPerspective: Shot type (closeup, medium shot, wide shot, dll.), camera angle (eye-level, low angle, dll.), framing, rule of thirds, perspektif pandangan.
8. lightingColor: Karakter pencahayaan (daylight, natural, golden hour, studio, dll.), arah cahaya, bayangan (shadow), highlight, palet warna, white balance, kontras.
9. cameraLensDof: Estimasi lensa (focal length), depth of field (shallow blur/bokeh vs deep focus tajam menyeluruh).
10. photoStyleRealism: Gaya fotografi, tekstur mikrokontras, detail alami, tingkat realisme fotografi.
11. aspectRatio: Rasio aspek visual gambar (misal: "16:9", "9:16", "1:1", "4:3", "3:2").
12. optimizationNeeds: Daftar kebutuhan optimasi/perbaikan visual yang nyata (misal: "shadow recovery", "highlight control", "natural contrast", "natural tone", "color balance", "detail preservation", "texture preservation", "natural processing", "raw photo").
13. contextualNegativePrompt: Negative prompt kontekstual untuk mencegah cacat/artefak yang tidak diinginkan pada jenis gambar ini.

Bahasa: ${i==="en"?"Bahasa Inggris":"Bahasa Indonesia"}.
Format respons HANYA berupa JSON valid:
{
  "mainDescription": "...",
  "subjectDescription": "...",
  "poseExpression": "...",
  "identityPreservation": "...",
  "outfitMaterial": "...",
  "environmentBackground": "...",
  "compositionPerspective": "...",
  "lightingColor": "...",
  "cameraLensDof": "...",
  "photoStyleRealism": "...",
  "aspectRatio": "16:9",
  "optimizationNeeds": ["shadow recovery", "natural contrast"],
  "contextualNegativePrompt": "cartoon, 3d render, deformed, blurry, watermark"
}`,c=n&&n.trim()?`Analisis gambar ini dengan panduan konteks pengguna: "${n.trim()}".`:"Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata.",u={contents:[{role:"user",parts:[{inlineData:{mimeType:e||"image/jpeg",data:o}},{text:`${l}

Instruksi: ${c}`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};let p=null;for(const E of s)try{const T=`https://generativelanguage.googleapis.com/v1beta/models/${E}:generateContent?key=${encodeURIComponent(t)}`,A=await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!A.ok){const h=await A.text();throw new Error(`HTTP ${A.status}: ${h}`)}const k=(f=(b=(v=(m=(g=(await A.json()).candidates)==null?void 0:g[0])==null?void 0:m.content)==null?void 0:v.parts)==null?void 0:b[0])==null?void 0:f.text;if(!k)throw new Error("Respon Gemini kosong.");const I=this.extractJson(k);if(I&&(I.mainDescription||I.subjectDescription||I.generatedPrompt))return I.generatedPrompt&&!I.mainDescription&&(I.mainDescription=I.generatedPrompt),I}catch(T){p=T,console.warn(`Model ${E} multimodal gagal:`,T.message);continue}throw p||new Error("Gagal menganalisis gambar dengan Gemini API.")}generateDynamicImageAnalysis(a,e,n="",t="id"){const r=this.detectImageAspect(a,e),i=((a==null?void 0:a.name)||"").toLowerCase(),s=(n||"").toLowerCase(),o=`${i} ${s}`,l=t==="en";if(o.includes("landscape")||o.includes("mountain")||o.includes("beach")||o.includes("lake")||o.includes("sunset")||o.includes("sunrise")||o.includes("forest")||o.includes("nature")||o.includes("gunung")||o.includes("pantai")||o.includes("danau")||o.includes("hutan")||o.includes("pemandangan")||o.includes("river")||o.includes("sungai")||o.includes("ocean")||o.includes("laut")||o.includes("valley"))return{mainDescription:l?"Expansive natural landscape photography capturing wide horizon lines, natural geological formations, and serene outdoor atmosphere.":"Pemandangan lanskap alam terbuka yang membentang luas dengan formasi horizon megah dan atmosfer alam yang tenang.",subjectDescription:l?"Layered geographical contours of undulating terrain with organic vegetation in the foreground and midground.":"Hamparan bentang alam alami dengan kontur geografis berundak dan vegetasi asri pada latar depan dan tengah.",poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:l?"Open scenic wilderness environment with expansive skyline, natural earth tones, and distant atmospheric haze.":"Lingkungan alam terbuka dengan panorama cakrawala luas, batuan alami, dan nuansa atmosfer yang jernih.",compositionPerspective:l?"Wide-angle panoramic composition following rule of thirds framing, balanced horizontal perspective, deep focus throughout.":"Komposisi lanskap panorama sudut lebar (wide-angle shot), garis horizon proporsional mengikuti kaidah rule of thirds, kedalaman ruang penuh (deep focus).",lightingColor:l?"Natural daylight with warm ambient glow, rich tonal dynamic range between bright skies and shadowed valleys.":"Pencahayaan alami siang hari (daylight) yang hangat merata, rentang tonal dinamis yang seimbang antara langit terang dan bayangan lembah.",cameraLensDof:l?"24mm wide-angle lens, f/8 aperture, edge-to-edge sharpness from foreground rocks to distant horizon.":"Lensa sudut lebar (wide-angle 24mm f/8), seluruh bidang foto tajam menyeluruh dari foreground hingga cakrawala.",photoStyleRealism:l?"Realistic outdoor nature photography with microcontrast clarity, authentic earthy textures without synthetic saturation.":"Fotografi lanskap realistis dengan detail mikrokontras tinggi pada tekstur batuan dan dedaunan tanpa saturasi berlebih.",aspectRatio:r.ar||"16:9",optimizationNeeds:["shadow recovery","highlight control","dynamic range","natural tone","natural contrast","high detail","detail preservation","natural processing","raw photo"],contextualNegativePrompt:l?"people, text, buildings, cars, urban elements, low resolution, blurry, oversaturated colors, artificial clouds, chromatic aberration, digital noise, artifacts, watermark":"people, text, buildings, cars, manusia, perkotaan, low resolution, blur, oversaturated, awan sintetis, chromatic aberration, noise digital, artefak, watermark"};if(o.includes("architecture")||o.includes("building")||o.includes("city")||o.includes("street")||o.includes("urban")||o.includes("tokyo")||o.includes("gedung")||o.includes("bangunan")||o.includes("jalan")||o.includes("kota")||o.includes("skyscraper")||o.includes("tower")||o.includes("facade")||o.includes("menara")||o.includes("interior")||o.includes("exterior"))return{mainDescription:l?"Contemporary urban architectural photography showcasing structural geometric lines, clean facades, and ambient city illumination.":"Struktur arsitektur perkotaan modern dengan fasad geometris kontemporer, garis struktural presisi, dan pencahayaan ambient kota.",subjectDescription:l?"Modern architectural structure featuring precision vertical and diagonal geometry, reflective glass panels, and steel beams.":"Bangunan arsitektur dengan garis struktural presisi dan detail material fasad kaca, beton, dan baja.",poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:l?"Metropolitan urban environment with street-level pavement, clear cityscape skyline, and ambient outdoor air.":"Kawasan urban perkotaan metropolitan dengan elemen jalanan dan latar langit terbuka.",compositionPerspective:l?"Eye-level architectural perspective with corrected converging lines, symmetrical framing, and balanced geometric balance.":"Komposisi sudut presisi dengan penekanan pada garis tegak lurus, sudut pandang sejajar mata (eye-level), dan keseimbangan simetri.",lightingColor:l?"Diffused daylight reflection on glass and metallic surfaces, neutral color balance with clean shadows.":"Pencahayaan ambient kota yang bersih dengan highlight teratur pada permukaan kaca dan logam, keseimbangan warna netral.",cameraLensDof:l?"35mm perspective-corrected tilt-shift lens, deep focus with maximum geometric fidelity.":"Lensa 35mm dengan koreksi distorsi perspektif (perspective correction) dan ketajaman merata menyeluruh (deep focus).",photoStyleRealism:l?"High-precision architectural documentary photography with crisp material textures and zero optic distortion.":"Fotografi arsitektur realistis dengan reproduksi tekstur material beton, kaca, dan logam yang autentik.",aspectRatio:r.ar||"16:9",optimizationNeeds:["perspective correction","lens correction","composition balance","natural contrast","high detail","detail preservation","natural processing","raw photo"],contextualNegativePrompt:l?"distorted lines, bent architecture, blurry edges, heavy grain, bad reflection, overexposed, watermark, text":"garis melengkung, distorsi gedung, tepi buram, grain kasar, refleksi rusak, overexposed, watermark, teks"};if(o.includes("animal")||o.includes("cat")||o.includes("dog")||o.includes("bird")||o.includes("wildlife")||o.includes("kucing")||o.includes("anjing")||o.includes("burung")||o.includes("hewan"))return{mainDescription:l?"Intimate wildlife portrait capturing authentic animal behavior with sharp eye focus and natural coat texture.":"Potret satwa autentik yang tertangkap dengan fokus tajam pada mata dan tekstur bulu alami.",subjectDescription:l?"A captivating animal subject showcasing alert gaze, delicate whiskers, and distinctive organic fur patterns.":"Seekor hewan dengan ekspresi lincah, tatapan mata jernih, dan karakter visual yang khas.",poseExpression:l?"Natural posture with head slightly angled, curious and calm demeanor directed toward the camera.":"Posisi tubuh alami dengan kepala sedikit condong dan tatapan mata fokus ke arah depan.",identityPreservation:"-",outfitMaterial:"-",environmentBackground:l?"Organic indoor or outdoor setting with soft diffused background textures isolating the subject.":"Lingkungan tempat tinggal atau alam terbuka dengan latar belakang bertekstur lembut.",compositionPerspective:l?"Medium closeup shot at eye-level with the animal, centered subject framing with shallow depth of field.":"Closeup framing pada sudut pandang sejajar mata hewan (eye-level), komposisi terpusat proporsional.",lightingColor:l?"Soft directional ambient lighting creating natural catchlights in the eyes and gentle rim highlights.":"Pencahayaan alami terarah yang menghasilkan kilau alami pada mata dan kontur tubuh yang lembut.",cameraLensDof:l?"135mm telephoto lens at f/2.8, shallow depth of field with creamy bokeh background.":"Lensa telephoto 135mm f/2.8, kedalaman bidang dangkal (shallow dof) dengan latar belakang blur halus.",photoStyleRealism:l?"Realistic wildlife photography preserving individual strands of fur, whiskers, and natural iris reflections.":"Fotografi satwa realistis dengan detail helai bulu yang tajam dan warna alami tanpa manipulasi sintetis.",aspectRatio:r.ar||"1:1",optimizationNeeds:["detail preservation","texture preservation","natural tone","high detail","natural processing","raw photo"],contextualNegativePrompt:l?"cartoon, illustration, 3d render, deformed anatomy, extra paws, blurry eyes, plastic fur, watermark, text":"kartun, ilustrasi, render 3d, anatomi cacat, cakar ekstra, mata buram, bulu plastik, watermark, teks"};if(o.includes("product")||o.includes("food")||o.includes("coffee")||o.includes("watch")||o.includes("cake")||o.includes("produk")||o.includes("makanan")||o.includes("kopi"))return{mainDescription:l?"Commercial still-life photography featuring meticulous product placement, balanced studio lighting, and tactile surface materiality.":"Potret still-life komersial dengan penataan objek yang rapi, pencahayaan terukur, dan detail material berkualitas tinggi.",subjectDescription:l?"Principal hero subject with distinct contours, pristine surface finish, and refined craftsmanship details.":"Objek utama dengan bentuk proporsional dan fokus tajam pada permukaan esensial.",poseExpression:"-",identityPreservation:"-",outfitMaterial:l?"Tactile surface materials with subtle micro-reflections and authentic manufacturing texture.":"Tekstur permukaan material asli dengan mikro-refleksi halus dan kerapatan tekstur autentik.",environmentBackground:l?"Minimalist studio tabletop environment with neutral textured backdrop complementary to the subject.":"Studio meja still-life dengan permukaan bertekstur netral dan penataan elemen pendukung minimalis.",compositionPerspective:l?"45-degree elevated angle or eye-level tabletop framing, crisp geometric alignment and focused presentation.":"Komposisi sudut 45 derajat atau eye-level dengan framing terfokus pada objek utama.",lightingColor:l?"Controlled diffused studio softbox lighting, gentle gradient highlights, and soft contact drop shadows.":"Pencahayaan studio terarah dengan softbox diffused illumination dan highlight lembut.",cameraLensDof:l?"90mm macro lens at f/5.6, measured depth of field keeping the critical product surfaces sharp.":"Lensa makro 90mm f/5.6, depth of field terukur dengan ketajaman tinggi pada produk.",photoStyleRealism:l?"Commercial product photography with extreme tactile sharpness, color fidelity, and authentic material finish.":"Fotografi produk profesional dengan kejernihan material dan akurasi warna tinggi.",aspectRatio:r.ar||"1:1",optimizationNeeds:["detail preservation","texture preservation","color balance","natural contrast","high detail","natural processing","raw photo"],contextualNegativePrompt:l?"dust, scratches, harsh reflections, bad lighting, low resolution, blur, watermark, text":"debu, goresan, pantulan silau keras, pencahayaan buruk, resolusi rendah, blur, watermark, teks"};const u=o.includes("man")||o.includes("pria")||o.includes("cowok")||o.includes("boy")?l?"an adult man":"seorang pria":l?"an adult woman":"seorang wanita",p=o.includes("duduk")||o.includes("seated")||o.includes("sit")||!o.includes("berdiri")&&!o.includes("standing");return{mainDescription:l?`Authentic portrait of ${u} in a natural outdoor setting, captured with calm expression and natural daylight.`:`Potret autentik ${u} di lingkungan luar ruangan dengan pencahayaan alami dan ekspresi tenang.`,subjectDescription:l?`${u} with natural facial features, composed posture, and relaxed authentic demeanor.`:`${u} dengan fitur wajah alami, postur tenang, dan pembawaan rileks bersahaja.`,poseExpression:l?`${p?"Seated comfortably with upright posture":"Standing naturally with poised gesture"}, calm and peaceful expression, direct eye-level gaze.`:`${p?"Duduk santai dengan postur tegak dan stabil":"Berdiri alami dengan gestur tenang"}, ekspresi tenang dan damai, sudut pandang tatapan sejajar.`,identityPreservation:l?"Preserve natural facial proportions, authentic skin tones, and genuine human facial contours.":"Pertahankan proporsi wajah alami, warna kulit natural, dan kontur wajah manusia asli.",outfitMaterial:l?"Casual elegant attire made of comfortable breathable fabric with natural soft color tones.":"Busana kasual elegan berbahan kain nyaman dengan palet warna lembut dan tekstur alami.",environmentBackground:l?"Natural outdoor environment with green botanical elements, garden path, and open airy background.":"Lingkungan luar ruangan (outdoor) dengan pepohonan hijau alami, jalan setapak, dan latar terbuka.",compositionPerspective:l?"Medium shot portrait framed at eye-level perspective, balanced center subject placement.":"Medium shot portrait dengan sudut pandang kamera sejajar mata (eye-level perspective), komposisi seimbang.",lightingColor:l?"Natural daylight illumination with soft diffused light, subtle natural shadows without harsh facial clipping.":"Pencahayaan alami siang hari (daylight) yang lembut merata, tanpa bayangan keras pada wajah.",cameraLensDof:l?"85mm portrait prime lens, shallow depth of field with gentle background blur (creamy bokeh).":"Lensa 85mm portrait, kedalaman bidang dangkal (shallow depth of field) dengan latar belakang sedikit blur (bokeh halus).",photoStyleRealism:l?"Authentic realistic photography, natural microcontrast, real skin pore textures without artificial plastic smoothing.":"Gaya fotografi realistis dengan tekstur kulit asli tanpa efek penghalusan plastik berlebih.",aspectRatio:r.ar||"16:9",optimizationNeeds:["shadow recovery","natural contrast","natural tone","color balance","detail preservation","texture preservation","natural processing","raw photo"],contextualNegativePrompt:l?"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, bad eyes, plastic skin, oversaturated, blurry, watermark, text":"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, anatomi cacat, jari ekstra, mata rusak, kulit plastik, oversaturated, blur, watermark, text"}}async analyzeShorthandImprove(a,e=null){var r,i,s,o,l;const n=await this.analyzePrompt(a,e),t={conflictCount:((r=n.conflicts)==null?void 0:r.length)||0,redundancyCount:(((i=n.recommendations)==null?void 0:i.length)||0)-(((s=n.primaryShorthands)==null?void 0:s.length)||0),isOptimized:(((o=n.conflicts)==null?void 0:o.length)||0)===0,improvementAdvice:((l=n.conflicts)==null?void 0:l.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...n,mode:"SHORTHAND_IMPROVE",isImageRepair:!1,diagnostics:t}}async analyzeImageRepair({imageFile:a=null,imageBase64:e=null,mimeType:n="image/jpeg",notesPrompt:t="",preferredLang:r="id"}){const i=C.getApiKey().trim(),s=C.getModel()||"gemini-2.0-flash";let o=null,l="LOCAL_ENGINE",c=!1,u="";if(i&&e)try{const k=await this.executeMultimodalImageRepairAnalysis(e,n,t,i,s,r);k&&(k.optimizationAreas||k.visualConditionSummary)&&(o=k,l="GEMINI_AI",c=!0,u=`🌐 Analisa Perbaikan AI AKTIF (${s}) — Diagnosis visual komprehensif dari gambar asli.`)}catch(k){console.warn("Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:",k),this.lastError=k.message}o||(o=this.generateHeuristicImageRepair(a,t,r),l=i?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",c=!!i,u=c?`🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).");const{visualConditionSummary:p="Gambar telah dianalisis secara visual.",optimizationAreas:g=[],goodAspects:m=[],repairInstructions:v="Optimalkan kualitas dan karakteristik visual foto."}=o,b={PRIMARY_ISSUE:1,SECONDARY_ISSUE:2,OPTIMIZATION:3,PRESERVATION:4,FINISHING:5},f=[];for(const k of g){const I=Array.isArray(k.recommendedCodes)?k.recommendedCodes:[];let h=null;for(const M of I){const L=M.startsWith("/")?M:`/${M}`,P=this.catalog.find(G=>G.code.toLowerCase()===L.toLowerCase());if(P){h=P;break}}if(!h){const M=`${k.aspect||""} ${k.problem||""} ${k.suggestedAction||""}`.toLowerCase();for(const L of this.catalog)if((L.semanticTriggers||[]).map(G=>G.toLowerCase()).some(G=>M.includes(G))||M.includes(L.name.toLowerCase())){h=L;break}}const R=h?h.code:I[0]?I[0].startsWith("/")?I[0]:`/${I[0]}`:null;R&&f.push({code:R,name:(h==null?void 0:h.name)||R.replace("/","").toUpperCase(),category:(h==null?void 0:h.category)||"IMAGE_QUALITY",functionGroup:(h==null?void 0:h.functionGroup)||`GROUP_${R.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:(h==null?void 0:h.description)||k.suggestedAction||"Optimasi visual gambar",issuePriority:k.priority||"OPTIMIZATION",priorityWeight:b[k.priority]||3,aspect:k.aspect||"Aspek Visual",problem:k.problem||"",reason:k.reason||`Diperlukan untuk ${k.suggestedAction||"mengoptimalkan aspek ini"}.`,priority:"WAJIB",isPrimary:!0,checked:!0,source:"DIAGNOSTIC_REPAIR"})}const E=new Set,T=[];for(const k of f){const I=k.functionGroup;E.has(I)||(E.add(I),T.push(k))}T.sort((k,I)=>{const h=(k.priorityWeight||3)-(I.priorityWeight||3);return h!==0?h:k.code.localeCompare(I.code)});const A=T.map(k=>k.code);let O=v.trim();return A.length>0&&(O=`${O} ${A.join(" ")}`.trim()),{mode:"SHORTHAND_IMPROVE",isImageRepair:!0,source:l,isOnlineActive:c,engineNotice:u,visualConditionSummary:p,optimizationAreas:g,goodAspects:m,repairInstructions:v,diagnosedShorthands:T,installedShorthands:A,optimalPrompt:O,primaryShorthands:T,relatedShorthands:[],recommendations:T,conflicts:[],exclusions:[],editAreas:g.map(k=>({entity:k.aspect||"AREA_OPTIMASI",description:k.problem||k.suggestedAction||""})),lockedAreas:m.map(k=>({entity:"ASPEK_SUDAH_BAIK",description:k})),unchangedAreas:m,intent:{primaryAction:"DIAGNOSIS_PERBAIKAN_GAMBAR",primaryTarget:"Kondisi Visual Foto",summary:p,priority:"HIGH",category:"IMAGE_QUALITY"},diagnostics:{issueCount:g.length,goodCount:m.length,isOptimized:!1,improvementAdvice:`Ditemukan ${g.length} area visual yang membutuhkan perbaikan. Menampilkan ${T.length} shorthand rekomendasi tanpa batasan.`},imageInfo:{name:(a==null?void 0:a.name)||"repair-source.jpg",size:(a==null?void 0:a.size)||0,type:n},timestamp:new Date().toISOString()}}async executeMultimodalImageRepairAnalysis(a,e,n,t,r,i="id"){var g,m,v,b,f;const s=[r,"gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((E,T,A)=>E&&A.indexOf(E)===T),o=a.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,""),l=`Anda adalah Ahli Diagnosa Visual & Optimasi Fotografi Digital profesional.
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
7. Gunakan bahasa: ${i==="en"?"English":"Bahasa Indonesia"}.

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
  "repairInstructions": "Teks instruksi perbaikan komprehensif..."
}`,c=n&&n.trim()?`Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${n.trim()}".`:"Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.",u={contents:[{role:"user",parts:[{inlineData:{mimeType:e||"image/jpeg",data:o}},{text:`${l}

Instruksi: ${c}`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};let p=null;for(const E of s)try{const T=`https://generativelanguage.googleapis.com/v1beta/models/${E}:generateContent?key=${encodeURIComponent(t)}`,A=await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!A.ok){const h=await A.text();throw new Error(`HTTP ${A.status}: ${h}`)}const k=(f=(b=(v=(m=(g=(await A.json()).candidates)==null?void 0:g[0])==null?void 0:m.content)==null?void 0:v.parts)==null?void 0:b[0])==null?void 0:f.text;if(!k)throw new Error("Respon Gemini kosong.");const I=this.extractJson(k);if(I&&(I.optimizationAreas||I.visualConditionSummary))return I}catch(T){p=T,console.warn(`Model ${E} multimodal repair gagal:`,T.message);continue}throw p||new Error("Gagal menganalisis perbaikan gambar dengan Gemini API.")}generateHeuristicImageRepair(a,e="",n="id"){const t=(e||"").toLowerCase(),r=!!(e&&e.trim()),i=[],s=[],o=(u,p)=>{r?u.some(g=>t.includes(g))&&i.push(p):i.push(p)};return o(["shadow","gelap","bayangan","underexposed","pekat"],{aspect:"Shadow / Bayangan",problem:"Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan tanpa mencerahkan berlebih",recommendedCodes:["/shadowrecovery"],reason:"Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami."}),o(["highlight","terang","silau","blown","overexposed","putih"],{aspect:"Highlight / Pencahayaan Terang",problem:"Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.",priority:"PRIMARY_ISSUE",suggestedAction:"Pengendalian intensitas highlight",recommendedCodes:["/highlightcontrol"],reason:"Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus."}),t.includes("tajam")||t.includes("buram")||t.includes("blur")||t.includes("fokus")||t.includes("kabur")?i.push({aspect:"Ketajaman & Fokus",problem:"Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.",priority:"PRIMARY_ISSUE",suggestedAction:"Peningkatan ketajaman tepi dan kontur",recommendedCodes:["/sharpen"],reason:"Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih."}):r||s.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),t.includes("noise")||t.includes("bintik")||t.includes("grain")?i.push({aspect:"Noise & Grain",problem:"Terdapat gangguan bintik noise digital pada area bergradasi halus.",priority:"PRIMARY_ISSUE",suggestedAction:"Pembersihan noise digital secara selektif",recommendedCodes:["/denoise"],reason:"Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial."}):r||s.push("Tingkat noise digital berada dalam batas yang sangat rendah dan bersih."),t.includes("perspektif")||t.includes("miring")||t.includes("tilt")?i.push({aspect:"Perspektif Garis & Sudut",problem:"Garis bidang foto tampak miring atau mengalami distorsi perspektif.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi pelurusan perspektif",recommendedCodes:["/perspectivecorrection"],reason:"Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami."}):t.includes("distorsi")||t.includes("lensa")||t.includes("barrel")?i.push({aspect:"Distorsi Lensa",problem:"Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi distorsi lensa",recommendedCodes:["/lenscorrection"],reason:"Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural."}):r||s.push("Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung."),o(["kontras","contrast","keras","datar"],{aspect:"Kontras Visual",problem:"Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.",priority:"SECONDARY_ISSUE",suggestedAction:"Penerapan kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik."}),o(["balance","kuning","biru","cast","suhu","warna"],{aspect:"Keseimbangan Warna & White Balance",problem:"Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.",priority:"SECONDARY_ISSUE",suggestedAction:"Penyelarasan white balance dan netralisasi color cast",recommendedCodes:["/colorbalance"],reason:"Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna."}),(t.includes("pucat")||t.includes("kusam")||t.includes("tone")||!r&&!i.some(u=>u.recommendedCodes.includes("/naturaltone")))&&(r||i.length<8)&&i.push({aspect:"Rentang Tonal Warna",problem:"Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan."}),o(["dinamis","rentang","dynamic","range"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight."}),(t.includes("kualitas")||t.includes("detail tinggi")||t.includes("resolusi")||t.includes("definisi"))&&i.push({aspect:"Kerapatan Detail Visual",problem:"Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.",priority:"OPTIMIZATION",suggestedAction:"Peningkatan detail mikro berkualitas tinggi",recommendedCodes:["/highdetail"],reason:"Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar."}),o(["detail","pertahankan","preservasi","halus"],{aspect:"Preservasi Detail Halus",problem:"Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.",priority:"PRESERVATION",suggestedAction:"Penguncian dan perlindungan detail halus",recommendedCodes:["/detailpreservation"],reason:"Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi."}),o(["tekstur","texture","kulit","kain","permukaan"],{aspect:"Preservasi Tekstur Alami",problem:"Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material",recommendedCodes:["/texturepreservation"],reason:"Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik."}),o(["alami","natural","realis","asli","overprocess"],{aspect:"Karakter Pemrosesan Alami",problem:"Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing."}),s.length===0&&(s.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),s.push("Komposisi dan framing foto sudah proporsional."),s.push("Tidak ditemukan distorsi optik lensa yang mengganggu.")),{visualConditionSummary:`Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${i.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`,optimizationAreas:i,goodAspects:s,repairInstructions:"Lakukan perbaikan terpadu pada foto asli: pulihkan detail bayangan, kontrol highlight, seimbangkan kontras dan warna alami, serta lindungi tekstur dan detail halus dari pemrosesan berlebih."}}}function _a(d){return!d||typeof d!="string"?0:d.trim().split(/\s+/).filter(Boolean).length}function Ja(d){if(!d||typeof d!="string")return 0;const a=d.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function qa(d,a=[]){if(!d||a.length===0)return 0;const e=_a(d);if(e===0)return 0;const n=a.length;return Math.min(100,Math.round(n/e*100))}function Qa(d){return!d||typeof d!="string"?"":d.trim()}function Xa(d,a,e,n){const{status:t}=a;let r="status-unconfigured",i="Gemini: Belum diuji";return t===j.CONNECTED?(r="status-connected",i="Gemini: Tersambung"):t===j.FAILED&&(r="status-failed",i="Gemini: Gagal"),{html:`
    <header class="app-header">
      <div class="header-container">
        <div class="brand-wrapper">
          <div class="brand-logo" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-text">
            <h1>
              PROMPT SHORTHAND ANALYZER
              <span class="version-tag">V3.3.1</span>
            </h1>
            <p>Contextual Shorthand Notation &amp; Semantic Preservation</p>
          </div>
        </div>

        <nav class="nav-menu" role="tablist">
          <button type="button" class="nav-item ${d==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${d==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${d==="dictionary"?"active":""}" data-tab="dictionary" role="tab" aria-selected="${d==="dictionary"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            Kamus Shorthand
          </button>
          <button type="button" class="nav-item ${d==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${d==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${d==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${d==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${d==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${d==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions">
          <button type="button" class="status-badge ${r}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${i}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(o){o.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-tab");e&&e(u)})});const l=o.querySelector("#header-status-badge");l&&n&&l.addEventListener("click",()=>n())}}}const Pa=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function Za(d){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${Pa.map(n=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${n.id}" title="${n.description}">
      <span style="font-weight: 700; color: #93c5fd;">${n.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(n){n.querySelectorAll(".btn-preset-chip").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-preset-id"),i=Pa.find(s=>s.id===r);i&&d&&d(i.prompt)})})}}}function ae({currentValue:d="",onAnalyze:a,onReset:e,onClear:n,onSelectPreset:t,isAnalyzing:r=!1,isOnlineActive:i=!1,activeMode:s="ANALISA_PROMPT",onModeChange:o,uploadedImage:l=null,onImageSelected:c,onImageRemoved:u}){const p=Za(t);return{html:`
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT &amp; MODE ANALISIS</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          <button type="button" class="btn btn-outline btn-xs" id="btn-clear-prompt" title="Kosongkan teks">
            Kosongkan
          </button>
          <button type="button" class="btn btn-danger btn-xs" id="btn-reset-app" title="Kembalikan aplikasi ke keadaan awal">
            Reset
          </button>
        </div>
      </div>

      <!-- Mode Selector Tabs -->
      <div class="analysis-mode-selector" id="mode-tabs-container">
        <button type="button" class="mode-tab-btn ${s==="ANALISA_PROMPT"?"active":""}" data-mode="ANALISA_PROMPT">
          <span>📝</span>
          <span>Analisa Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="IMAGE_TO_PROMPT"?"active":""}" data-mode="IMAGE_TO_PROMPT">
          <span>🔍</span>
          <span>Analisa Gambar → Prompt</span>
        </button>
        <button type="button" class="mode-tab-btn ${s==="SHORTHAND_IMPROVE"?"active":""}" data-mode="SHORTHAND_IMPROVE">
          <span>🛠️</span>
          <span>Analisa Shorthand Perbaikan Gambar</span>
        </button>
      </div>

      <!-- Online Shorthand Search Status Banner -->
      <div class="online-status-banner ${i?"banner-online-active":"banner-online-inactive"}" id="prompt-online-status-banner">
        <div class="banner-inner">
          ${i?`
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

      <!-- IMAGE UPLOAD SECTION (MODE 2 & MODE 3) -->
      ${s==="IMAGE_TO_PROMPT"||s==="SHORTHAND_IMPROVE"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          ${l?`
            <div class="image-preview-card">
              <img src="${l.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${l.name||"repair-source.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${l.size?(l.size/1024).toFixed(1)+" KB":"Gambar Sumber"} &bull;
                  <span style="color: ${s==="SHORTHAND_IMPROVE"?"#c084fc":"#38bdf8"};">
                    ${s==="SHORTHAND_IMPROVE"?"SOURCE OF TRUTH Diagnosis Perbaikan":"SOURCE OF TRUTH Visual"}
                  </span>
                </div>
              </div>
              <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-remove-image" title="Hapus gambar">
                ✕ Hapus Gambar
              </button>
            </div>
          `:`
            <div class="image-dropzone" id="image-dropzone">
              <svg class="dropzone-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
              <div class="dropzone-text">
                ${s==="SHORTHAND_IMPROVE"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini, atau klik untuk memilih file":"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file"}
              </div>
              <div class="dropzone-hint">
                ${s==="SHORTHAND_IMPROVE"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis kondisi visual &amp; merekomendasikan shorthand perbaikan (UNLIMITED)":"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)"}
              </div>
              <input type="file" id="image-file-input" accept="image/png, image/jpeg, image/webp" style="display: none;" />
            </div>
          `}
        </div>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${s==="SHORTHAND_IMPROVE"?`
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan Gambar:</strong> 
          ${l?"Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt."}
        </div>
      `:""}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 without image) -->
      ${s==="ANALISA_PROMPT"||s==="SHORTHAND_IMPROVE"&&!l?`
        <div id="presets-container">
          ${p.html}
        </div>
      `:""}

      <!-- Textarea Input -->
      <div class="form-group" style="margin-bottom: 0.85rem;">
        <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
          ${s==="IMAGE_TO_PROMPT"||s==="SHORTHAND_IMPROVE"&&l?"B. Prompt Pengguna (Opsional / Catatan Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
        </label>
        <textarea 
          id="prompt-textarea" 
          class="textarea-prompt font-mono" 
          placeholder="${s==="IMAGE_TO_PROMPT"?"Ketik konteks atau instruksi spesifik untuk gambar referensi di atas (opsional)...":s==="SHORTHAND_IMPROVE"&&l?"Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
        >${d||""}</textarea>
      </div>

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${s==="IMAGE_TO_PROMPT"?"💡 Gambar dianalisis untuk menghasilkan Prompt Deskriptif &amp; Shorthand Rekomendasi Terpadu.":s==="SHORTHAND_IMPROVE"&&l?"💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik."}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${r?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${r?s==="IMAGE_TO_PROMPT"?"🔍 Menganalisis Gambar...":s==="SHORTHAND_IMPROVE"&&l?"🛠️ Mendiagnosis Gambar...":i?"Mencari Online...":"Menganalisis...":s==="IMAGE_TO_PROMPT"?"🔍 Analisa Gambar → Prompt":s==="SHORTHAND_IMPROVE"&&l?"🛠️ Analisa Perbaikan Gambar":s==="SHORTHAND_IMPROVE"?"🛠️ Analisa Shorthand &amp; Perbaikan":i?"🌐 Analisis Prompt":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(m){(s==="ANALISA_PROMPT"||s==="SHORTHAND_IMPROVE"&&!l)&&p.bindEvents(m);const v=m.querySelector("#prompt-textarea"),b=m.querySelector("#btn-run-analysis"),f=m.querySelector("#btn-clear-prompt"),E=m.querySelector("#btn-reset-app");m.querySelectorAll(".mode-tab-btn").forEach(I=>{I.addEventListener("click",()=>{const h=I.getAttribute("data-mode");o&&h!==s&&o(h)})});const T=m.querySelector("#image-dropzone"),A=m.querySelector("#image-file-input"),O=m.querySelector("#btn-remove-image");if(T&&A){let I=function(h){if(!h||!h.type.startsWith("image/")){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP).");return}const R=new FileReader;R.onload=M=>{const L=M.target.result,P=new Image;P.onload=()=>{c&&c({file:h,name:h.name,size:h.size,type:h.type,base64:L,previewUrl:L,width:P.naturalWidth||P.width,height:P.naturalHeight||P.height})},P.onerror=()=>{c&&c({file:h,name:h.name,size:h.size,type:h.type,base64:L,previewUrl:L,width:0,height:0})},P.src=L},R.readAsDataURL(h)};var k=I;T.addEventListener("click",()=>{A.click()}),T.addEventListener("dragover",h=>{h.preventDefault(),T.classList.add("dragover")}),T.addEventListener("dragleave",()=>{T.classList.remove("dragover")}),T.addEventListener("drop",h=>{h.preventDefault(),T.classList.remove("dragover"),h.dataTransfer.files&&h.dataTransfer.files[0]&&I(h.dataTransfer.files[0])}),A.addEventListener("change",()=>{A.files&&A.files[0]&&I(A.files[0])})}O&&O.addEventListener("click",()=>{u&&u()}),b&&b.addEventListener("click",()=>{a&&a(v.value)}),f&&f.addEventListener("click",()=>{v.value="",n&&n()}),E&&E.addEventListener("click",()=>{e&&e()}),v&&v.addEventListener("keydown",I=>{(I.ctrlKey||I.metaKey)&&I.key==="Enter"&&(I.preventDefault(),a&&a(v.value))})}}}function ee(d=[],a){const e=d&&d.length>0,n=e?d.map(r=>{const i=r.type==="EDIT_VS_LOCK"||r.shorthandA&&r.shorthandA.includes("lock"),s=i?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${r.shorthandB} (Hapus ${r.shorthandA})`,o=i?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${r.shorthandA} (Hapus ${r.shorthandB})`,l=r.suggestion||te(r);return`
    <div class="conflict-banner" data-conflict-id="${r.id}" style="margin-bottom: 0.75rem;">
      <div class="conflict-header">
        <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10h2v4h-2zm0 6h2v2h-2z"/></svg>
        <span>DETEKSI KONFLIK &mdash; CONFLICT DETECTED</span>
      </div>

      <div class="conflict-vs-box">
        <span class="conflict-code-badge">${r.shorthandA}</span>
        <span class="conflict-vs-text">VS</span>
        <span class="conflict-code-badge">${r.shorthandB}</span>
      </div>

      <div class="conflict-reason">
        <strong>Alasan:</strong> ${r.reason}
        <br>
        <span style="font-size: 0.8rem; color: #fca5a5;">
          Instruksi A: <em>"${r.instructionA||r.shorthandA}"</em> &bull; 
          Instruksi B: <em>"${r.instructionB||r.shorthandB}"</em>
        </span>
      </div>

      <!-- SARAN SOLUSI KONFLIK -->
      <div class="conflict-suggestion-box">
        <div class="conflict-suggestion-header">
          <svg class="icon-sm" viewBox="0 0 24 24" width="16" height="16" style="vertical-align: middle;"><path fill="currentColor" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
          <span>💡 SARAN SOLUSI:</span>
        </div>
        <div class="conflict-suggestion-text">
          ${l}
        </div>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${r.id}">
          ${s}
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${r.id}">
          ${o}
        </button>
        <button type="button" class="btn btn-outline btn-xs btn-resolve" data-action="dismiss" data-conflict-id="${r.id}">
          Abaikan Peringatan
        </button>
      </div>
    </div>
  `}).join(""):"";return{html:`
    <!-- CARD G: SHORTHAND KONFLIK (CONFLICT DETECTED) -->
    <section class="panel analyzer-card" id="card-conflicts">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge" style="background: ${e?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">G</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${e?"badge-wajib":"badge-neutral"}">
          ${e?`${d.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${e?`
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${n}
        </div>
      `:`
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik direktif yang terdeteksi. Seluruh instruksi prompt konsisten.</span>
        </div>
      `}
    </section>
  `,bindEvents(r){r.querySelectorAll(".btn-resolve").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-action"),o=i.getAttribute("data-conflict-id");a&&a(o,s)})})}}}function te(d){if(d.suggestion)return d.suggestion;const a=d.shorthandA||"",e=d.shorthandB||"";if(d.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const n=a.includes("lock")?a:e,t=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${n}) dan terapkan instruksi ubah (${t}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${n}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${d.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function ne({installedShorthands:d=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:n}){const t=d.length>0?d.map(s=>`
        <span class="shorthand-chip" data-code="${s}">
          <span>${s}</span>
          <button type="button" class="chip-remove-btn" data-code="${s}" title="Hapus ${s}">&times;</button>
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
            ${a.filter(s=>!d.includes(s.code)).map(s=>`
      <option value="${s.code}">${s.code} - ${s.name}</option>
    `).join("")}
          </select>
          <button type="button" class="btn btn-secondary btn-xs" id="btn-add-shorthand" title="Pasang shorthand ke prompt">
            + Tambah
          </button>
        </div>
      </div>

      <div class="installed-chips-container" id="installed-chips-list">
        ${t}
      </div>
    </div>
  `,bindEvents(s){s.querySelectorAll(".chip-remove-btn").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const p=c.getAttribute("data-code");e&&e(p)})});const o=s.querySelector("#btn-add-shorthand"),l=s.querySelector("#select-catalog-shorthand");o&&l&&o.addEventListener("click",()=>{const c=l.value;c&&n&&n(c)})}}}function ie({optimalPrompt:d="",installedShorthands:a=[],catalog:e=[],isOnlineActive:n=!1,isEnriching:t=!1,onCopyPrompt:r,onEnrichPrompt:i,onRemoveShorthand:s,onAddShorthand:o}){const l=ne({installedShorthands:a,catalog:e,onRemoveShorthand:s,onAddShorthand:o}),c=_a(d),u=Ja(d);return qa(d,a),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${c} kata &bull; ~${u} token
          </span>
          <button 
            type="button" 
            class="btn btn-enrich btn-sm" 
            id="btn-enrich-ai" 
            ${!n||t||!d?"disabled":""}
            title="${n?d?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
          >
            ${t?"⏳ MEMPERKAYA...":"✨ PERKAYA DENGAN AI"}
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-copy-main-prompt" title="Hanya salin main prompt tanpa metadata">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            SALIN PROMPT
          </button>
        </div>
      </div>

      <!-- Optimal Output String Display -->
      <div class="optimal-output-box" id="optimal-prompt-display">
        <span>${d||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${l.html}
    </section>
  `,bindEvents(g){l.bindEvents(g);const m=g.querySelector("#btn-copy-main-prompt");m&&m.addEventListener("click",()=>{r&&r(d)});const v=g.querySelector("#btn-enrich-ai");v&&v.addEventListener("click",()=>{i&&!t&&n&&d&&i()})}}}function re(d){const{primaryAction:a="-",primaryTarget:e="-",summary:n="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:t="-",category:r="-"}=d||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${n}</p>
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
          <span class="intent-meta-value">${r}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${t}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function se(d=[]){const a=d.length>0?d.map(n=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${n.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${n.label}</span>
              ${n.shorthand?`<span class="badge badge-blue font-mono">${n.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${n.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${d.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function oe(d=[],a=[]){const e=d.length>0?d.map(t=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${t.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${t.label}</span>
              ${t.shorthand?`<span class="badge badge-wajib font-mono">${t.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${t.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Seluruh elemen visual selain instruksi edit dipertahankan secara otomatis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-locked-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">C</span>
          <h2>AREA YANG DIPERTAHANKAN / LOCKED</h2>
        </div>
        <span class="badge badge-blue">${d.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function le(d){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:n=""}=d||{};return{html:`
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

      ${n?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${n}</p>`:""}
    </section>
  `,bindEvents(){}}}function ce({primaryShorthands:d=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:n=[],onToggleShorthand:t}){const r=d.length>0?d:e.filter(c=>c.isPrimary!==!1&&c.priority==="WAJIB"),i=a.length>0?a:e.filter(c=>c.isPrimary===!1||c.priority!=="WAJIB"),s=r.length>0?r.map(c=>{var m,v,b;const u=n.includes(c.code),p=c.equivalentTo||((m=c.item)==null?void 0:m.equivalentTo)||[],g=c.functionGroup||((v=c.item)==null?void 0:v.functionGroup)||c.category;return`
          <div class="rec-card primary-rec-card ${u?"rec-card-active":""}" data-code="${c.code}">
            <div>
              <div class="rec-card-header">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="rec-code" style="color: #60a5fa; font-size: 1rem; font-weight: 800;">✓ ${c.code}</span>
                  <span class="badge badge-wajib">WAJIB</span>
                  <span class="badge badge-blue font-mono" style="font-size: 0.675rem;">REPRESENTATIF UTAMA</span>
                  ${c.source==="ONLINE"||c.isOnline?'<span class="badge badge-online">🌐 ONLINE</span>':""}
                </div>
                <span class="badge badge-neutral" style="font-size: 0.7rem;">${c.category}</span>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${c.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${c.target}</span></div>
                <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #c084fc;">${g}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${c.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${c.source==="ONLINE"||c.isOnline?"ONLINE":((b=c.item)==null?void 0:b.status)||"CORE"}</span></div>
                ${p.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${p.map(f=>`<span class="alias-tag font-mono">${f}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${u?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${u?"✅ Aktif Otomatis di Prompt Optimal":"⚠️ Dilepas dari Prompt"}
              </span>
              <button 
                type="button" 
                class="btn ${u?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${c.code}"
                title="${u?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${u?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',o=i.length>0?i.map(c=>{var v;const u=n.includes(c.code),p=c.equivalentTo||((v=c.item)==null?void 0:v.equivalentTo)||[],g=c.relationship||"CONTEXTUAL",m=c.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${u?"rec-card-active":""}" data-code="${c.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${c.code}" 
                    ${u?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${c.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${g}</span>
                  ${c.source==="ONLINE"||c.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${m}" style="font-size: 0.675rem;">${c.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${c.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${c.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${c.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${g}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${c.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${c.source==="ONLINE"||c.isOnline?"ONLINE":c.source||"CORE"}</span></div>
                ${p.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${p.map(b=>`<span class="alias-tag font-mono">${b}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${u?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${u?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
              </span>
              <button 
                type="button" 
                class="btn ${u?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
                data-code="${c.code}"
                title="${u?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
              >
                ${u?"Batal Centang":"+ Centang & Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ada shorthand berhubungan yang relevan.</div>';return{html:`
    <!-- CARD E: SHORTHAND UTAMA (PRIMARY SHORTHAND) -->
    <section class="panel analyzer-card" id="card-primary-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">E</span>
          <h2>SHORTHAND UTAMA (PRIMARY SHORTHAND)</h2>
        </div>
        <span class="badge badge-blue">${r.length} Aktif Otomatis</span>
      </div>

      ${r.length===0&&i.length===0?`
        <div class="empty-recs-notice" style="padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); color: #93c5fd; font-size: 0.85rem; margin-bottom: 0.85rem;">
          ℹ️ Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.
        </div>
      `:""}

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Mewakili instruksi langsung dari prompt user. Otomatis terpasang [✓] dan masuk ke Prompt Optimal dengan deduplikasi fungsi terbaik.
      </p>

      <div class="rec-grid">
        ${s}
      </div>
    </section>

    <!-- CARD F: SHORTHAND BERHUBUNGAN (RELATED SHORTHAND) -->
    <section class="panel analyzer-card" id="card-related-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">F</span>
          <h2>SHORTHAND BERHUBUNGAN (RELATED SHORTHAND)</h2>
        </div>
        <span class="badge badge-purple">${i.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${o}
      </div>
    </section>
  `,bindEvents(c){c.querySelectorAll(".btn-toggle-rec").forEach(u=>{u.addEventListener("click",p=>{p.stopPropagation();const g=u.getAttribute("data-code");t&&t(g)})}),c.querySelectorAll(".related-checkbox").forEach(u=>{u.addEventListener("change",p=>{p.stopPropagation();const g=u.getAttribute("data-code");t&&t(g)})})}}}function de(d=[]){const a=d.length,e=a>0?d.map(t=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${t.code}</span>
            <span class="exclusion-target">&bull; ${t.target}</span>
          </div>
          <p class="exclusion-reason">
            ${t.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header exclusions-toggle-header" id="header-exclusions" role="button" tabindex="0" title="Klik untuk menampilkan atau menyembunyikan daftar pengecualian">
        <div class="card-title">
          <span class="card-step-badge">H</span>
          <h2>SHORTHAND TIDAK DIPERLUKAN (DIKECUALIKAN)</h2>
        </div>
        <div class="exclusions-header-actions" style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="badge badge-neutral">${a} Dikecualikan</span>
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
          ${e}
        </div>
      </div>
    </section>
  `,bindEvents(t){if(!t)return;const r=t.querySelector("#btn-toggle-exclusions"),i=t.querySelector("#exclusions-content"),s=t.querySelector("#header-exclusions");if(!r||!i)return;const o=l=>{l&&(l.preventDefault(),l.stopPropagation()),i.style.display==="none"||!i.style.display?(i.style.display="block",r.setAttribute("aria-expanded","true"),r.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,r.classList.remove("btn-secondary"),r.classList.add("btn-outline")):(i.style.display="none",r.setAttribute("aria-expanded","false"),r.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,r.classList.remove("btn-outline"),r.classList.add("btn-secondary"))};r.addEventListener("click",o),s&&(s.addEventListener("click",l=>{l.target.closest("#btn-toggle-exclusions")||o(l)}),s.addEventListener("keydown",l=>{if(l.key==="Enter"||l.key===" "){if(l.target.closest("#btn-toggle-exclusions"))return;o(l)}}))}}}function ue({analysisResult:d,currentPrompt:a,catalog:e,isAnalyzing:n,isOnlineActive:t=!1,isEnriching:r=!1,activeMode:i="ANALISA_PROMPT",uploadedImage:s=null,onModeChange:o,onImageSelected:l,onImageRemoved:c,onAnalyze:u,onReset:p,onClear:g,onSelectPreset:m,onCopyPrompt:v,onCopyGeneratedPrompt:b,onEnrichPrompt:f,onAddShorthand:E,onRemoveShorthand:T,onToggleRecommendation:A,onResolveConflict:O}){const{optimalPrompt:k="",generatedPrompt:I="",visualBreakdown:h=null,isImageRepair:R=!1,visualConditionSummary:M="",optimizationAreas:L=[],goodAspects:P=[],diagnosedShorthands:G=[],installedShorthands:x=[],conflicts:Z=[],intent:aa={},editAreas:oa=[],lockedAreas:Ta=[],unchangedAreas:la=[],visualTransformation:ca={},primaryShorthands:da=[],relatedShorthands:ea=[],recommendations:ta=[],exclusions:na=[]}=d||{};function ua(N){switch(N){case"PRIMARY_ISSUE":return'<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';case"SECONDARY_ISSUE":return'<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';case"OPTIMIZATION":return'<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';case"PRESERVATION":return'<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';case"FINISHING":return'<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';default:return'<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>'}}const y=ae({currentValue:a,onAnalyze:u,onReset:p,onClear:g,onSelectPreset:m,isAnalyzing:n,isOnlineActive:t,activeMode:i,onModeChange:o,uploadedImage:s,onImageSelected:l,onImageRemoved:c}),S=ee(Z,O),B=ie({optimalPrompt:k,installedShorthands:x,catalog:e,isOnlineActive:t,isEnriching:r,onCopyPrompt:v,onEnrichPrompt:f,onRemoveShorthand:T,onAddShorthand:E}),V=re(aa),z=se(oa),K=oe(Ta,la),U=le(ca),F=ce({primaryShorthands:da,relatedShorthands:ea,recommendations:ta,installedShorthands:x,onToggleShorthand:A}),J=de(na);return{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${y.html}

      <!-- MODE 2 SPECIFIC: PROMPT HASIL ANALISA GAMBAR CARD -->
      ${i==="IMAGE_TO_PROMPT"&&I?`
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">PROMPT HASIL ANALISA GAMBAR</h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-blue">🤖 Source of Truth Visual</span>
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem;">
              ${I}
            </p>
          </div>
          ${h?`
            <div class="visual-breakdown-grid" style="margin-top: 0.85rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.8rem;">
              ${Object.entries(h).map(([N,$])=>`
                <div style="background: rgba(255,255,255,0.03); padding: 0.45rem 0.65rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
                  <strong style="color: #38bdf8; text-transform: capitalize;">${N}:</strong>
                  <span style="color: #cbd5e1; margin-left: 0.35rem;">${$}</span>
                </div>
              `).join("")}
            </div>
          `:""}
        </section>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN GAMBAR CARD -->
      ${i==="SHORTHAND_IMPROVE"&&R?`
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #c084fc;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: #c084fc;">🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR</h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-purple">🔍 Diagnosis Visual Komprehensif</span>
              <span class="badge badge-blue">⚡ ${G.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>📷</span> Ringkasan Kondisi Visual Gambar:
            </h3>
            <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #c084fc; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${M}
            </div>
          </div>

          <!-- 2. Area yang Membutuhkan Optimasi -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> Area yang Membutuhkan Optimasi (${L.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${L.map((N,$)=>`
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${$+1}. ${N.aspect}</strong>
                    ${ua(N.priority)}
                  </div>
                  <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0 0 0.4rem 0; line-height: 1.45;">
                    ${N.problem}
                  </p>
                  <div style="color: #38bdf8; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
                    <span>➔ Tindakan:</span> <span>${N.suggestedAction}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Aspek yang Sudah Baik -->
          ${P&&P.length>0?`
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${P.map(N=>`<li>${N}</li>`).join("")}
                </ul>
                <small style="color: #86efac; display: block; margin-top: 0.4rem; font-size: 0.75rem;">
                  💡 <em>Catatan: Aspek visual di atas sudah optimal pada foto asli, sehingga sistem secara cerdas tidak memunculkan shorthand yang tidak diperlukan untuk menjaga keaslian.</em>
                </small>
              </div>
            </div>
          `:""}

          <!-- 4. Rekomendasi Shorthand Perbaikan (UNLIMITED) -->
          <div style="margin-bottom: 0.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem; flex-wrap: wrap; gap: 0.5rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                <span>🎯</span> Rekomendasi Shorthand Perbaikan (${G.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${G.map(N=>`
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: #a855f7; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
                        ${N.code}
                      </code>
                      ${ua(N.issuePriority)}
                    </div>
                    <div style="font-weight: 600; color: #f1f5f9; font-size: 0.825rem; margin-bottom: 0.25rem;">
                      ${N.name}
                    </div>
                    <p style="color: #94a3b8; font-size: 0.775rem; margin: 0 0 0.45rem 0; line-height: 1.4;">
                      ${N.reason}
                    </p>
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.725rem; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 0.4rem; margin-top: 0.25rem;">
                    <span>Grup: <strong style="color: #cbd5e1;">${N.functionGroup}</strong></span>
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: #a855f7; border-color: rgba(168, 85, 247, 0.4);">TERPASANG</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${B.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${V.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${z.html}
        ${K.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${U.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${F.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${S.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${J.html}
    </div>
  `,bindEvents(N){y.bindEvents(N),B.bindEvents(N),F.bindEvents(N),S.bindEvents(N),J.bindEvents(N);const $=N.querySelector("#btn-copy-generated-prompt");$&&$.addEventListener("click",()=>{b&&b(I)})}}}function pe({searchQuery:d="",searchResults:a=[],selectedShorthands:e=[],isSearching:n=!1,searchNotice:t=null,hasSearched:r=!1,onSearch:i,onAddShorthand:s,onRemoveShorthand:o,onClearAll:l,onCopyShorthands:c}){const u=new Set(e.map(b=>(b.code||b).toLowerCase())),p=e.length>0;let g="";p?g=e.map((b,f)=>{const E=typeof b=="string"?b:b.code,T=typeof b=="object"&&b.name?b.name:"";return`
          <div class="selected-shorthand-tag ${typeof b=="object"&&b.source==="ONLINE"?"tag-online":""}" title="${T?T+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${E}</span>
            <button type="button" class="btn-remove-tag" data-code="${E}" aria-label="Hapus ${E}">
              &times;
            </button>
          </div>
        `}).join(""):g=`
      <div class="empty-selected-notice">
        Belum ada shorthand yang dipilih. Cari shorthand di bawah lalu tekan tombol <strong>[ + ]</strong>.
      </div>
    `;let m="";return n?m=`
      <div class="searching-state">
        <div class="spinner"></div>
        <span>Mencari di katalog lokal &amp; online fallback...</span>
      </div>
    `:r&&a.length===0?m=`
      <div class="no-results-card">
        <div class="no-results-icon">🔍</div>
        <p class="no-results-text">
          ${t||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?m=`
      <div class="dictionary-results-grid">
        ${a.map(b=>{const f=u.has((b.code||"").toLowerCase()),E=b.source==="ONLINE",T=E?"badge-online":"badge-local",A=E?"🌐 ONLINE":"LOCAL";return`
              <div class="dictionary-card ${f?"card-selected":""}" data-code="${b.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${b.code}</span>
                    <span class="source-badge ${T}">${A}</span>
                  </div>
                  <div class="card-action">
                    ${f?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${b.code}" title="Tambahkan ${b.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${b.name||b.code}</div>
                  <div class="card-desc">${b.description||"Tidak ada deskripsi"}</div>
                  ${b.equivalentTo&&b.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${b.equivalentTo.slice(0,4).map(O=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${O}</span>`).join("")}
                      ${b.equivalentTo.length>4?`<span style="opacity: 0.6;">+${b.equivalentTo.length-4} lainnya</span>`:""}
                    </div>
                  `:""}
                </div>
              </div>
            `}).join("")}
      </div>
    `:m=`
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
                ${p?"":"disabled"} 
                title="Kosongkan seluruh shorthand terpilih">
                🗑 Hapus Semua
              </button>
              <button 
                type="button" 
                class="btn btn-primary btn-sm" 
                id="btn-copy-selected-shorthands" 
                ${p?"":"disabled"} 
                title="Salin seluruh shorthand terpilih ke clipboard">
                📋 COPY SHORTHAND
              </button>
            </div>
          </div>

          <div class="selected-tags-container" id="selected-tags-container">
            ${g}
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
              value="${d||""}"
              autocomplete="off"
              spellcheck="false"
            />
            ${d?'<button type="button" class="btn-clear-search" id="btn-clear-search" title="Bersihkan pencarian">&times;</button>':""}
          </div>
          <button type="submit" class="btn btn-primary btn-search-submit" id="btn-search-submit">
            CARI
          </button>
        </form>

        <!-- Search Status Info -->
        ${r&&a.length>0?`
              <div class="search-status-bar">
                <span>Ditemukan <strong>${a.length}</strong> shorthand relevan untuk "<em>${d}</em>"</span>
                <span class="search-priority-hint">Prioritas: 1. Katalog Lokal &bull; 2. Online Fallback</span>
              </div>
            `:""}

        <!-- RESULTS LIST -->
        <div class="results-wrapper">
          ${m}
        </div>
      </section>
    </div>
  `,bindEvents(b){const f=b.querySelector("#dictionary-search-form"),E=b.querySelector("#dictionary-search-input"),T=b.querySelector("#btn-clear-search"),A=b.querySelector("#btn-copy-selected-shorthands"),O=b.querySelector("#btn-clear-all-shorthands");f&&E&&f.addEventListener("submit",k=>{k.preventDefault();const I=E.value.trim();i&&i(I)}),T&&E&&T.addEventListener("click",()=>{E.value="",E.focus(),i&&i("")}),b.querySelectorAll(".btn-add-shorthand").forEach(k=>{k.addEventListener("click",()=>{const I=k.getAttribute("data-code"),h=a.find(R=>R.code===I);h&&s&&s(h)})}),b.querySelectorAll(".btn-remove-tag").forEach(k=>{k.addEventListener("click",()=>{const I=k.getAttribute("data-code");I&&o&&o(I)})}),A&&A.addEventListener("click",()=>{c&&c()}),O&&O.addEventListener("click",()=>{l&&l()})}}}function ge({analysisResult:d,onCopyJson:a,onRunCustomJson:e}){var c,u,p;const n=JSON.stringify({rawPrompt:(d==null?void 0:d.rawPrompt)||"",cleanText:(d==null?void 0:d.cleanText)||"",installedShorthands:(d==null?void 0:d.installedShorthands)||[]},null,2),t=JSON.stringify(d||{},null,2),r=((c=d==null?void 0:d.conflicts)==null?void 0:c.length)>0,i=!!((u=d==null?void 0:d.intent)!=null&&u.primaryAction&&d.intent.primaryAction!=="-"),s=((p=d==null?void 0:d.installedShorthands)==null?void 0:p.length)||0,o=(d==null?void 0:d.source)||"LOCAL_ENGINE";return{html:`
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
        <div class="val-item" style="border-left: 3px solid ${i?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${i?"✅ Ya":"⚪ Menunggu Input"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid ${r?"var(--status-danger)":"var(--status-success)"};">
          <span>Status Konflik:</span>
          <strong>${r?"⚠️ Terdeteksi":"✅ Aman"}</strong>
        </div>
        <div class="val-item" style="border-left: 3px solid var(--accent-blue);">
          <span>Shorthand Aktif:</span>
          <strong>${s} Item</strong>
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
          <pre class="json-box" id="json-input-view">${n}</pre>
        </div>

        <!-- Output JSON -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #6ee7b7; text-transform: uppercase;">
              OUTPUT JSON (PIPELINE RESULT)
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Hasil Analisis Lengkap</span>
          </div>
          <pre class="json-box" id="json-output-view">${t}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(g){const m=g.querySelector("#btn-copy-output-json");m&&m.addEventListener("click",()=>{a&&a(t)})}}}function me({catalog:d=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:n="ALL",searchQuery:t="",currentPage:r=1,pageSize:i=12,selectedDetailCode:s=null,isAddModalOpen:o=!1,isImportModalOpen:l=!1,duplicateWarning:c=null,onSelectCategory:u,onSelectTarget:p,onSelectRecLevel:g,onSearchChange:m,onPageChange:v,onOpenDetail:b,onCloseDetail:f,onOpenAddModal:E,onCloseAddModal:T,onSubmitAddShorthand:A,onOpenImportModal:O,onCloseImportModal:k,onSubmitImport:I,onExportCatalog:h,onResetUserCatalog:R,onAddShorthandToPrompt:M}){const L=xa(d,{category:a,target:e,recommendationLevel:n,searchQuery:t}),P=L.length,G=Math.max(1,Math.ceil(P/i)),x=Math.min(Math.max(1,r),G),Z=(x-1)*i,aa=L.slice(Z,Z+i),oa=Array.from(new Set(d.map(y=>y.target))).sort(),la=["ALL",...Object.keys(sa)].map(y=>{const S=sa[y],B=y==="ALL"?"Semua Kategori":`${S.code}. ${S.label}`;return`
      <button type="button" class="category-tab-btn ${a===y?"active":""}" data-cat="${y}">
        ${B}
      </button>
    `}).join(""),ca=aa.length>0?aa.map(y=>{let S="badge-opsional";y.recommendationLevel==="WAJIB"||y.priority==="HIGH"?S="badge-wajib":y.recommendationLevel==="DISARANKAN"&&(S="badge-disarankan");const B=y.source==="USER"?"badge-purple":"badge-neutral",V=(y.semanticTriggers||[]).slice(0,3).map(U=>`<span class="compat-pill">"${U}"</span>`).join(" "),z=y.equivalentTo||[],K=y.relationships||[];return`
          <div class="catalog-item-card" data-code="${y.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${y.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${B}">${y.source||"CORE"}</span>
                  <span class="badge ${S}">${y.recommendationLevel||y.priority}</span>
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
              ${z.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${z.map(U=>`<span class="alias-tag font-mono">${U}</span>`).join(" ")}
                </div>
              `:""}
              ${K.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${K.length} terhubung (${K.map(U=>U.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${V||"-"}</div>
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
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',da=G>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${x<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${x} dari ${G} (${P} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${x>=G?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let ea="";if(s){const y=d.find(S=>S.code===s);y&&(ea=`
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
                      ${y.equivalentTo.map(S=>`<span class="alias-tag font-mono">${S}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${y.relationships&&y.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${y.relationships.map(S=>`
                      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 0.4rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                        <span class="font-mono" style="color: #c4b5fd; font-weight: 700;">${S.code}</span>
                        <span class="badge badge-purple" style="font-size: 0.65rem; margin-left: 0.35rem;">${S.relationType}</span>
                        <div style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.2rem;">${S.reason}</div>
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
                  ${(y.semanticTriggers||[]).map(S=>`<span class="compat-pill">"${S}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${y.conflicts&&y.conflicts.length>0?y.conflicts.map(S=>`<span class="conflict-pill">${S}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${y.compatibleWith&&y.compatibleWith.length>0?y.compatibleWith.map(S=>`<span class="compat-pill">${S}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
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
      `)}let ta="";if(o){const y=Object.keys(Ha);ta=`
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
              ${c?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${c.message}</p>
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
                    ${Object.keys(sa).map(S=>`<option value="${S}">${S} - ${sa[S].label}</option>`).join("")}
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
                  ${y.map(S=>`<option value="${S}">`).join("")}
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
    `}let na="";return l&&(na=`
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
        <span class="badge badge-blue font-mono">${d.length} Shorthand Terdaftar</span>
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
        ${la}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${oa.map(y=>`<option value="${y}" ${e===y?"selected":""}>Target: ${y}</option>`).join("")}
          </select>

          <!-- Filter Recommendation Level -->
          <select id="select-filter-rec-level" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Level Rekomendasi --</option>
            <option value="WAJIB" ${n==="WAJIB"?"selected":""}>Level: WAJIB</option>
            <option value="DISARANKAN" ${n==="DISARANKAN"?"selected":""}>Level: DISARANKAN</option>
            <option value="OPSIONAL" ${n==="OPSIONAL"?"selected":""}>Level: OPSIONAL</option>
          </select>
        </div>

        <!-- Semantic Search Input -->
        <div style="flex: 1; max-width: 380px; min-width: 250px;">
          <input 
            type="search" 
            id="catalog-search-input" 
            class="search-input" 
            placeholder="Cari semantik: misal 'jangan ubah wajah', 'ganti baju', 'latar baru'..."
            value="${t||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${ca}
      </div>

      <!-- Pagination -->
      ${da}

      <!-- Modals -->
      ${ea}
      ${ta}
      ${na}
    </section>
  `,bindEvents(y){y.querySelectorAll(".category-tab-btn").forEach(w=>{w.addEventListener("click",()=>{const _=w.getAttribute("data-cat");u&&u(_)})});const S=y.querySelector("#select-filter-target");S&&S.addEventListener("change",w=>{p&&p(w.target.value)});const B=y.querySelector("#select-filter-rec-level");B&&B.addEventListener("change",w=>{g&&g(w.target.value)});const V=y.querySelector("#catalog-search-input");V&&V.addEventListener("input",w=>{m&&m(w.target.value)});const z=y.querySelector(".btn-prev-page");z&&z.addEventListener("click",()=>{v&&v(x-1)});const K=y.querySelector(".btn-next-page");K&&K.addEventListener("click",()=>{v&&v(x+1)});const U=y.querySelector("#btn-open-add-shorthand");U&&E&&U.addEventListener("click",E);const F=y.querySelector("#btn-export-catalog");F&&h&&F.addEventListener("click",h);const J=y.querySelector("#btn-open-import-catalog");J&&O&&J.addEventListener("click",O);const pa=y.querySelector("#btn-reset-user-catalog");pa&&R&&pa.addEventListener("click",R),y.querySelectorAll(".btn-open-detail").forEach(w=>{w.addEventListener("click",()=>{const _=w.getAttribute("data-code");b&&b(_)})});const N=y.querySelector("#btn-close-detail-modal"),$=y.querySelector("#btn-close-detail-footer"),ga=y.querySelector("#modal-detail-backdrop"),ia=()=>{f&&f()};N&&N.addEventListener("click",ia),$&&$.addEventListener("click",ia),ga&&ga.addEventListener("click",w=>{w.target===ga&&ia()});const va=y.querySelector("#btn-close-add-modal"),Ea=y.querySelector("#btn-cancel-add"),ma=y.querySelector("#modal-add-backdrop"),ha=()=>{T&&T()};va&&va.addEventListener("click",ha),Ea&&Ea.addEventListener("click",ha),ma&&ma.addEventListener("click",w=>{w.target===ma&&ha()});const Ia=y.querySelector("#form-add-shorthand");Ia&&A&&Ia.addEventListener("submit",w=>{w.preventDefault();let _=y.querySelector("#add-code").value.trim();_.startsWith("/")||(_="/"+_);const Y=y.querySelector("#add-name").value.trim(),W=y.querySelector("#add-category").value,q=y.querySelector("#add-target").value.trim(),ra=y.querySelector("#add-func-group").value.trim()||W,Ga=y.querySelector("#add-desc").value.trim(),Na=y.querySelector("#add-triggers").value.trim(),La=y.querySelector("#add-equivalent").value.trim(),Da=Na?Na.split(",").map(Q=>Q.trim()).filter(Boolean):[],Ua=La?La.split(",").map(Q=>Q.trim().startsWith("/")?Q.trim():"/"+Q.trim()).filter(Boolean):[];A({code:_,name:Y,category:W,target:q,functionGroup:ra,description:Ga,semanticTriggers:Da,equivalentTo:Ua,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${q.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const Ra=y.querySelector("#btn-close-import-modal"),Oa=y.querySelector("#btn-cancel-import"),ka=y.querySelector("#modal-import-backdrop"),ba=()=>{k&&k()};Ra&&Ra.addEventListener("click",ba),Oa&&Oa.addEventListener("click",ba),ka&&ka.addEventListener("click",w=>{w.target===ka&&ba()});const Sa=y.querySelector("#import-file-input"),Ca=y.querySelector("#import-json-textarea");Sa&&Ca&&Sa.addEventListener("change",w=>{const _=w.target.files[0];if(_){const Y=new FileReader;Y.onload=W=>{Ca.value=W.target.result},Y.readAsText(_)}});const wa=y.querySelector("#form-import-catalog");wa&&I&&wa.addEventListener("submit",w=>{var W,q,ra;w.preventDefault();const _=((W=y.querySelector('input[name="import-mode"]:checked'))==null?void 0:W.value)||"MERGE",Y=(ra=(q=y.querySelector("#import-json-textarea"))==null?void 0:q.value)==null?void 0:ra.trim();I(Y,_)}),y.querySelectorAll(".btn-add-from-catalog").forEach(w=>{w.addEventListener("click",()=>{const _=w.getAttribute("data-code");M&&M(_)})});const fa=y.querySelector(".btn-add-from-modal");fa&&fa.addEventListener("click",()=>{const w=fa.getAttribute("data-code");M&&M(w),ia()})}}}function he({geminiStatusInfo:d,onTestConnection:a,onSaveSettings:e,onClearKey:n}){const t=C.getApiKey(),r=C.getModel(),{status:i,error:s}=d;let o="status-unconfigured",l="🟡 Gemini: Belum diuji / konfigurasi";return i===j.CONNECTED?(o="status-connected",l="🟢 Gemini: Tersambung"):i===j.FAILED&&(o="status-failed",l="🔴 Gemini: Gagal"),{html:`
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
                value="${t||""}" 
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
              <option value="gemini-3.5-flash-lite" ${r==="gemini-3.5-flash-lite"?"selected":""}>gemini-3.5-flash-lite (Flash-Lite &bull; Cepat, Ringan &amp; Hemat Kuota)</option>
              <option value="gemini-3.8-flash" ${r==="gemini-3.8-flash"?"selected":""}>gemini-3.8-flash (Terbaru &bull; Cerdas &amp; Andal)</option>
              <option value="gemini-2.0-flash" ${r==="gemini-2.0-flash"?"selected":""}>gemini-2.0-flash (Standar Stabil &bull; Cepat &amp; Akurat)</option>
              <option value="gemini-2.5-flash" ${r==="gemini-2.5-flash"?"selected":""}>gemini-2.5-flash (Flash &bull; Penalaran Hibrida)</option>
              <option value="gemini-2.5-pro" ${r==="gemini-2.5-pro"?"selected":""}>gemini-2.5-pro (Penalaran Kompleks)</option>
              <option value="gemini-1.5-flash" ${r==="gemini-1.5-flash"?"selected":""}>gemini-1.5-flash (Generasi Sebelumnya)</option>
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
                <span>${l}</span>
              </div>
              ${s?`<div style="font-size: 0.775rem; color: #fca5a5; margin-top: 0.4rem;">Detail: ${s}</div>`:""}
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
  `,bindEvents(u){const p=u.querySelector("#setting-api-key"),g=u.querySelector("#setting-model-select"),m=u.querySelector("#btn-toggle-key-visibility"),v=u.querySelector("#btn-test-connection"),b=u.querySelector("#btn-save-settings"),f=u.querySelector("#btn-clear-key");m&&p&&m.addEventListener("click",()=>{const E=p.type==="password";p.type=E?"text":"password"}),v&&v.addEventListener("click",()=>{a&&a(p.value,g.value)}),b&&b.addEventListener("click",()=>{e&&e(p.value,g.value)}),f&&f.addEventListener("click",()=>{p.value="",n&&n()})}}}const ja={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class Ma{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const n=a.trim().toLowerCase(),t=n.startsWith("/")?n.slice(1):n,r=n.split(/\s+/).filter(Boolean),i=new Set(r);for(const o of r)if(ja[o])for(const l of ja[o])i.add(l.toLowerCase());const s=[];for(const o of e){if(!o||!o.code)continue;let l=0;const c=(o.code||"").toLowerCase(),u=c.startsWith("/")?c.slice(1):c,p=(o.name||"").toLowerCase(),g=(o.description||"").toLowerCase(),m=(o.category||"").toLowerCase(),v=Array.isArray(o.semanticTriggers)?o.semanticTriggers.map(f=>(f||"").toLowerCase()):[],b=(o.whenToUse||"").toLowerCase();c===n||u===t?l+=1e3:u.startsWith(t)?l+=600:u.includes(t)&&(l+=350);for(const f of v)if(f===n)l+=400;else if(f.includes(n))l+=250;else for(const E of i)if(E.length>2&&f.includes(E)){l+=100;break}if(p===n)l+=300;else if(p.includes(n))l+=200;else for(const f of i)if(f.length>2&&p.includes(f)){l+=80;break}if(g.includes(n))l+=150;else for(const f of i)if(f.length>2&&g.includes(f)){l+=60;break}m.includes(n)&&(l+=50),b.includes(n)&&(l+=40),l>0&&s.push({...o,score:l,source:"LOCAL",isOnline:!1})}return s.sort((o,l)=>l.score-o.score),this.deduplicateResultsByFunction(s)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,n=new Map;for(const r of a){if(!r||!r.code)continue;const i=r.code.toLowerCase();let s=n.get(i);if(!s){s=r.functionGroup||r.category||i;for(const[o,l]of e.entries())if(l.some(u=>(u.equivalentTo||[]).map(g=>typeof g=="string"?g.toLowerCase():"").includes(i))){s=o;break}}if(n.set(i,s),Array.isArray(r.equivalentTo))for(const o of r.equivalentTo)typeof o=="string"&&n.set(o.toLowerCase(),s);e.has(s)?e.get(s).push(r):e.set(s,[r])}const t=[];for(const[r,i]of e.entries()){if(i.length===1){t.push(i[0]);continue}i.sort((c,u)=>{if(c.preferredRepresentative&&!u.preferredRepresentative)return-1;if(!c.preferredRepresentative&&u.preferredRepresentative)return 1;if((u.score||0)!==(c.score||0))return(u.score||0)-(c.score||0);const p={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},g=p[c.status]||(c.source==="LOCAL"?3:1),m=p[u.status]||(u.source==="LOCAL"?3:1);return m!==g?m-g:(c.code||"").length-(u.code||"").length});const s=i[0],o=i.slice(1).map(c=>c.code),l=Array.from(new Set([...s.equivalentTo||[],...o]));t.push({...s,equivalentTo:l})}return t.sort((r,i)=>(i.score||0)-(r.score||0)),t}static async search(a,e=[],n=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const t=a.trim();let r=[];try{r=this.searchLocal(t,e)}catch(p){console.warn("[DictionaryService] Error pencarian lokal:",p),r=[]}let i=[],s=null;const o=r.some(p=>p.score>=600);if((r.length<4||!o)&&n)try{const p=await n.searchOnlineShorthand(t);if(p&&Array.isArray(p.results)){const g=new Set(r.map(m=>m.code.toLowerCase()));i=p.results.filter(m=>!g.has(m.code.toLowerCase()))}p&&p.message&&r.length===0&&(s=p.message)}catch(p){console.warn("[DictionaryService] Online fallback error:",p)}const c=this.deduplicateResultsByFunction([...r,...i]);let u=null;return c.length===0&&(u=s||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:t,results:c,localCount:r.length,onlineCount:i.length,notice:u}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class ke{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new Ka(ya),this.catalog=this.catalogRepo.getAll(),this.geminiService=new Fa(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=C.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="toast-container",document.body.appendChild(n));const t=document.createElement("div");t.className=`toast toast-${e}`,t.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,n.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(10px)",t.style.transition="all 0.3s ease",setTimeout(()=>t.remove(),300)},2800)}async runAnalysis(a,e=null){if(this.activeMode==="IMAGE_TO_PROMPT"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const n=this.uploadedImage.file?Object.assign(this.uploadedImage.file,{width:this.uploadedImage.width,height:this.uploadedImage.height}):{name:this.uploadedImage.name,size:this.uploadedImage.size,width:this.uploadedImage.width,height:this.uploadedImage.height},t=await this.geminiService.analyzeImageToPrompt({imageFile:n,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a});this.analysisResult=t,this.showToast("Analisa gambar & pemetaan shorthand berhasil!")}catch(n){this.showToast(`Gagal menganalisis gambar: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(this.activeMode==="SHORTHAND_IMPROVE"){if(this.uploadedImage){this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const n=await this.geminiService.analyzeImageRepair({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,notesPrompt:a});this.analysisResult=n,this.showToast("Diagnosis visual & rekomendasi perbaikan gambar selesai!")}catch(n){this.showToast(`Gagal menganalisis perbaikan gambar: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const n=await this.geminiService.analyzeShorthandImprove(a,e);this.analysisResult=n,this.showToast("Analisa shorthand perbaikan selesai!")}catch(n){this.showToast(`Gagal menganalisis: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const n=await this.geminiService.analyzePrompt(a,e);this.analysisResult=n,this.showToast("Analisis prompt selesai!")}catch(n){this.showToast(`Gagal menganalisis: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a){const e=Qa(a);if(!e){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(e).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}async handleEnrichPrompt(){var n;const a=((n=this.analysisResult)==null?void 0:n.optimalPrompt)||"";if(!a||!a.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!!!(C.getApiKey()&&C.getApiKey().trim())||this.geminiService.status===j.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const t=await this.geminiService.enrichPrompt(a,this.analysisResult);if(t&&t.success&&t.enrichedPrompt)this.analysisResult.optimalPrompt=t.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}catch(t){console.warn("Enrich prompt error:",t),this.showToast(`Gagal memperkaya prompt: ${t.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const n=[...e,a];this.updateInstalledShorthands(n),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const n=(this.analysisResult.installedShorthands||[]).filter(t=>t!==a);this.updateInstalledShorthands(n),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){if(this.analysisResult.installedShorthands=a,this.analysisResult.mode==="IMAGE_TO_PROMPT"&&this.analysisResult.visionData)this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,a);else if(this.analysisResult.isImageRepair&&this.analysisResult.repairInstructions){let e=this.analysisResult.repairInstructions.trim();a.length>0&&(e=`${e} ${a.join(" ")}`.trim()),this.analysisResult.optimalPrompt=e}else this.analysisResult.optimalPrompt=this.geminiService.localEngine.buildOptimalPrompt(this.analysisResult.cleanText,a);if(this.analysisResult.recommendations)for(const e of this.analysisResult.recommendations)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.primaryShorthands)for(const e of this.analysisResult.primaryShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.relatedShorthands)for(const e of this.analysisResult.relatedShorthands)e.checked=a.includes(e.code),e.active=e.checked;this.render()}handleResolveConflict(a,e){const n=this.analysisResult.conflicts.find(i=>i.id===a);if(!n)return;let t=[...this.analysisResult.installedShorthands||[]];const r=n.type==="EDIT_VS_LOCK"||n.shorthandA&&n.shorthandA.includes("lock");if(e==="use_user_edit"){t=t.filter(s=>s!==n.shorthandA);const i=r?`Kunci ${n.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${n.shorthandB}, ${n.shorthandA} dihapus.`;this.showToast(i)}else if(e==="keep_lock"){t=t.filter(s=>s!==n.shorthandB),t.includes(n.shorthandA)||t.push(n.shorthandA);const i=r?`Lock ${n.shorthandA} dipertahankan.`:`Memilih ${n.shorthandA}, ${n.shorthandB} dihapus.`;this.showToast(i)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(i=>i.id!==a),this.updateInstalledShorthands(t)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(e),t=document.createElement("a");t.href=n,t.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(n),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const n=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${n.count} shorthand (${e})!`),this.render()}catch(n){this.showToast(`Gagal impor: ${n.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const n=await this.geminiService.testConnection(a,e);n.success?this.showToast(n.message,"success"):this.showToast(n.message,"error"),this.render()}handleSaveSettings(a,e){C.setApiKey(a),C.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){C.clearApiKey(),this.geminiService.status=j.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await Ma.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();if(!e)return;this.dictionaryState.selectedShorthands.some(t=>(typeof t=="string"?t:t.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render())}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=Ma.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}render(){const a=this.geminiService.getStatus(),e=Xa(this.activeTab,a,t=>{this.activeTab=t,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let n=null;if(this.activeTab==="analyzer"){const r=!!(C.getApiKey()&&C.getApiKey().trim())&&this.geminiService.status!==j.FAILED;n=ue({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:r,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,onModeChange:i=>{this.activeMode!==i&&(this.activeMode=i,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render())},onImageSelected:i=>{this.uploadedImage=i,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onImageRemoved:()=>{this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onAnalyze:i=>this.runAnalysis(i),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:i=>this.handleSelectPreset(i),onCopyPrompt:i=>this.handleCopyPrompt(i),onCopyGeneratedPrompt:i=>this.handleCopyPrompt(i),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:i=>this.handleAddShorthand(i),onRemoveShorthand:i=>this.handleRemoveShorthand(i),onToggleRecommendation:i=>this.handleToggleRecommendation(i),onResolveConflict:(i,s)=>this.handleResolveConflict(i,s)})}else this.activeTab==="json-test"?n=ge({analysisResult:this.analysisResult,onCopyJson:t=>{navigator.clipboard.writeText(t),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?n=me({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:t=>{this.catalogCategory=t,this.catalogCurrentPage=1,this.render()},onSelectTarget:t=>{this.catalogTarget=t,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:t=>{this.catalogRecLevel=t,this.catalogCurrentPage=1,this.render()},onSearchChange:t=>{this.catalogSearchQuery=t,this.catalogCurrentPage=1,this.render()},onPageChange:t=>{this.catalogCurrentPage=t,this.render()},onOpenDetail:t=>{this.selectedDetailCode=t,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async t=>{await this.handleAddShorthandSubmit(t)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(t,r)=>{await this.handleImportCatalog(t,r)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:t=>{this.handleAddShorthand(t),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${t} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?n=pe({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,onSearch:t=>this.handleDictionarySearch(t),onAddShorthand:t=>this.handleDictionaryAddShorthand(t),onRemoveShorthand:t=>this.handleDictionaryRemoveShorthand(t),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy()}):this.activeTab==="settings"&&(n=he({geminiStatusInfo:a,onTestConnection:(t,r)=>this.handleTestConnection(t,r),onSaveSettings:(t,r)=>this.handleSaveSettings(t,r),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
      <div class="app-container">
        ${e.html}
        <main class="main-content">
          ${n.html}
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
    `,e.bindEvents(this.appRoot),n.bindEvents&&n.bindEvents(this.appRoot)}}document.addEventListener("DOMContentLoaded",()=>{window.__PSA_APP__=new ke,window.__PSA_APP__.render()});
//# sourceMappingURL=index-u9gTDJT2.js.map
