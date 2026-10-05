(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Ka={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE",LIGHTING_SHADOW:"LIGHTING_SHADOW",LIGHTING_HIGHLIGHT:"LIGHTING_HIGHLIGHT",LIGHTING_DYNAMICRANGE:"LIGHTING_DYNAMICRANGE",CONTRAST_NATURAL:"CONTRAST_NATURAL",COLOR_NATURALTONE:"COLOR_NATURALTONE",COLOR_BALANCE:"COLOR_BALANCE",DETAIL_PRESERVATION:"DETAIL_PRESERVATION",TEXTURE_PRESERVATION:"TEXTURE_PRESERVATION",NATURAL_PROCESSING:"NATURAL_PROCESSING",PERSPECTIVE_CORRECTION:"PERSPECTIVE_CORRECTION",LENS_CORRECTION:"LENS_CORRECTION",COMPOSITION_BALANCE:"COMPOSITION_BALANCE",IMAGE_HIGHDETAIL:"IMAGE_HIGHDETAIL"},ja={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},Ua=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]},{code:"/shadowrecovery",name:"Shadow Recovery & Black Level Lifting",category:"LIGHTING",target:"SHADOW_LIGHTING",description:"Mengangkat dan memulihkan detail bayangan yang terlalu gelap tanpa menimbulkan noise atau mencuci kontras.",semanticTriggers:["shadow recovery","shadow terlalu gelap","pulihkan bayangan","angkat bayangan gelap","recover shadows","dark shadows","bayangan terlalu pekat"],negativeTriggers:["bayangan pekat","gelapkan bayangan","crushed blacks"],conflicts:[],compatibleWith:["/highlightcontrol","/dynamicrange","/naturalcontrast","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika area bayangan pada subjek, pepohonan, atau latar belakang terlalu gelap sehingga kehilangan detail.",whenNotToUse:"Jangan gunakan jika kontras bayangan pekat sengaja diinginkan untuk gaya dramatis (chiaroscuro).",functionGroup:"LIGHTING_SHADOW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/liftshadows"],relationships:[{code:"/highlightcontrol",relationType:"COMPATIBLE",reason:"Sering dipadukan untuk menyeimbangkan rentang dinamis keseluruhan."}]},{code:"/highlightcontrol",name:"Highlight Control & Rolloff",category:"LIGHTING",target:"HIGHLIGHT_LIGHTING",description:"Mengendalikan area terang yang over-exposed atau blown-out agar detail tekstur cahaya tetap terjaga dengan gradasi halus.",semanticTriggers:["highlight control","highlight perlu dikendalikan","highlight terlalu terang","kendalikan highlight","kurangi overexposed","highlight recovery","blown highlights"],negativeTriggers:["tingkatkan highlight","blow out"],conflicts:[],compatibleWith:["/shadowrecovery","/dynamicrange","/naturalcontrast"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika langit, awan, atau pantulan cahaya terlalu terang hingga kehilangan detail tekstur.",whenNotToUse:"Jangan gunakan jika efek siluet atau flare cahaya terang sengaja diinginkan.",functionGroup:"LIGHTING_HIGHLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/highlightrolloff"],relationships:[{code:"/shadowrecovery",relationType:"COMPATIBLE",reason:"Bekerja bersama pemulihan shadow untuk menghasilkan eksposur seimbang."}]},{code:"/dynamicrange",name:"Dynamic Range Balancing",category:"LIGHTING",target:"DYNAMIC_RANGE",description:"Menyeimbangkan rentang dinamis antara area tergelap dan terang secara simultan untuk eksposur alami tanpa artefak HDR berlebihan.",semanticTriggers:["dynamic range","dynamic range perlu diseimbangkan","seimbangkan dynamic range","rentang dinamis seimbang","balance dynamic range","dynamic range expansion"],negativeTriggers:["kontras ekstrem"],conflicts:[],compatibleWith:["/shadowrecovery","/highlightcontrol","/naturaltone"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat foto memiliki perbedaan pencahayaan ekstrem antara area bayangan dan area terang.",whenNotToUse:"Jangan gunakan jika kontras siluet tinggi atau moody low-key lighting diinginkan.",functionGroup:"LIGHTING_DYNAMICRANGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balanceddynamicrange"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Rentang dinamis yang seimbang menjaga tone warna tetap autentik."}]},{code:"/naturalcontrast",name:"Natural Contrast Balancing",category:"IMAGE_QUALITY",target:"IMAGE_CONTRAST",description:"Menyesuaikan kurva kontras secara alami dan bertahap tanpa membuat warna jenuh berlebihan atau merusak tonal gradation.",semanticTriggers:["natural contrast","kontras alami","seimbangkan kontras","kontras terlalu tajam","kontras pudar","balanced contrast"],negativeTriggers:["kontras ekstrem","hyper contrast"],conflicts:[],compatibleWith:["/naturaltone","/detailpreservation","/colorbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika kontras gambar tampak terlalu keras atau sebaliknya terlihat washed-out/pudar.",whenNotToUse:"Jangan gunakan bila kontras gambar sudah natural dan seimbang.",functionGroup:"CONTRAST_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balancedcontrast"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Kontras alami menjaga nuansa warna tetap seimbang."}]},{code:"/naturaltone",name:"Natural Tonal Range & Skin Tone",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menjaga palet warna dan tonal range tetap natural, hangat, dan autentik sesuai persepsi mata manusia.",semanticTriggers:["natural tone","warna perlu dibuat lebih natural","warna lebih natural","tonal range alami","natural color","warna alami","natural skin tone"],negativeTriggers:["neon","warna over-saturated","fluorescent"],conflicts:["/cyberpunk"],compatibleWith:["/colorbalance","/texturepreservation","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk mengembalikan karakter warna asli lanskap, vegetasi, atau warna kulit subjek.",whenNotToUse:"Jangan gunakan jika grading warna stilistik ekstrem (seperti cyberpunk neon atau monochrome) ditargetkan.",functionGroup:"COLOR_NATURALTONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturaltonal"],relationships:[{code:"/colorbalance",relationType:"DIRECTLY_RELATED",reason:"Keseimbangan warna yang tepat menghasilkan tone alami."}]},{code:"/colorbalance",name:"Color Balance & White Balance Correction",category:"COLOR_TONE",target:"COLOR_BALANCE",description:"Mengoreksi tint dan temperatur warna yang menyimpang (color cast) agar titik netral putih dan abu-abu akurat.",semanticTriggers:["color balance","color balance perlu diperbaiki","koreksi white balance","keseimbangan warna","perbaiki warna","white balance correction","remove color cast"],negativeTriggers:[],conflicts:[],compatibleWith:["/naturaltone","/naturalcontrast","/rawphoto"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar memiliki color cast (misalnya terlalu kuning/hijau/kebiruan) yang tidak diinginkan.",whenNotToUse:"Jangan gunakan jika nuansa warna hangat matahari senja atau cahaya buatan bernuansa sengaja dipertahankan.",functionGroup:"COLOR_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/whitebalance"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"White balance yang netral mendukung pembentukan tone alami."}]},{code:"/detailpreservation",name:"Original Detail Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_DETAIL",description:"Mempertahankan detail mikro arsitektur, dedaunan, permukaan benda, dan elemen halus asli agar tidak terhapus selama proses penyempurnaan.",semanticTriggers:["detail preservation","detail asli perlu dipertahankan","pertahankan detail asli","keep original detail","preserve details","jangan hilangkan detail"],negativeTriggers:["blur","hapus detail"],conflicts:[],compatibleWith:["/texturepreservation","/naturalprocessing","/highdetail"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar sudah memiliki detail halus yang bernilai tinggi dan harus dilindungi dari over-smoothing.",whenNotToUse:"Jangan gunakan jika detail gambar rusak parah dan membutuhkan rekonstruksi ulang secara total.",functionGroup:"DETAIL_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservedetails"],relationships:[{code:"/texturepreservation",relationType:"DIRECTLY_RELATED",reason:"Preservasi detail bekerja berdampingan dengan penjagaan tekstur asli."}]},{code:"/texturepreservation",name:"Authentic Texture Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_TEXTURE",description:"Mencegah efek 'plastik' atau over-denoise dengan menjaga tekstur organik kulit, kain, kayu, batu, dan dedaunan tetap autentik.",semanticTriggers:["texture preservation","tekstur asli perlu dipertahankan","pertahankan tekstur asli","keep original texture","preserve texture","tekstur autentik"],negativeTriggers:["plastik","airbrushed"],conflicts:[],compatibleWith:["/detailpreservation","/rawphoto","/naturalprocessing"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tekstur permukaan benda dan kulit tampak nyata tanpa distorsi perataan buatan.",whenNotToUse:"Jangan gunakan jika efek grafis flat 2D atau render kartun halus diinginkan.",functionGroup:"TEXTURE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservetexture"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor mentah menjaga kejernihan mikrotekstur permukaan."}]},{code:"/naturalprocessing",name:"Natural Processing & Anti-Artifacts",category:"IMAGE_QUALITY",target:"PROCESSING_ARTIFACTS",description:"Memastikan hasil visual bebas dari haloing tepian, artifak kompresi, posterisasi warna, dan efek over-processed.",semanticTriggers:["natural processing","pemrosesan alami","tanpa artifak ai","bebas artifak pemrosesan","clean processing","anti artifacts","no haloing"],negativeTriggers:["over processed"],conflicts:[],compatibleWith:["/rawphoto","/detailpreservation","/texturepreservation"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga standar output tetap bersih dari artefak digital yang merusak kualitas fotografi.",whenNotToUse:"Jangan gunakan jika efek distorsi glitch atau seni digital disengaja.",functionGroup:"NATURAL_PROCESSING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cleanrender"],relationships:[{code:"/detailpreservation",relationType:"COMPATIBLE",reason:"Pemrosesan alami menjaga integritas detail asli."}]},{code:"/perspectivecorrection",name:"Perspective & Vertical Alignment Correction",category:"CAMERA_PHOTO",target:"PERSPECTIVE",description:"Mengoreksi distorsi keystone dan garis vertikal bangunan/ruangan yang miring agar tampak proporsional dan sejajar.",semanticTriggers:["perspective correction","koreksi perspektif","perbaiki sudut kemiringan","luruskan perspektif","keystone correction","garis miring"],negativeTriggers:[],conflicts:[],compatibleWith:["/lenscorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto arsitektur atau pemandangan dengan garis vertikal yang tampak condong atau miring secara tidak sengaja.",whenNotToUse:"Jangan gunakan jika sudut miring (Dutch angle) memang disengaja untuk alasan dramatisasi visual.",functionGroup:"PERSPECTIVE_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/keystonecorrection"],relationships:[{code:"/lenscorrection",relationType:"COMPATIBLE",reason:"Koreksi perspektif dan koreksi lensa saling melengkapi dalam merapikan geometri gambar."}]},{code:"/lenscorrection",name:"Lens Distortion & Vignette Correction",category:"CAMERA_PHOTO",target:"LENS_OPTICS",description:"Menghilangkan distorsi barrel/pincushion dan vignetting gelap pada sudut tepian lensa kamera.",semanticTriggers:["lens correction","koreksi distorsi lensa","hilangkan vignetting","perbaiki distorsi lensa","lens distortion correction","distorsi barrel"],negativeTriggers:[],conflicts:[],compatibleWith:["/perspectivecorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat optik lensa menghasilkan distorsi cembung atau tepian gambar menggelap secara tidak merata.",whenNotToUse:"Jangan gunakan jika efek lensa fish-eye atau vignette retro sengaja diinginkan.",functionGroup:"LENS_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/distortioncorrection"],relationships:[{code:"/perspectivecorrection",relationType:"COMPATIBLE",reason:"Membantu meluruskan batas-batas geometri foto."}]},{code:"/compositionbalance",name:"Composition & Framing Balance",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Menata ulang keseimbangan bobot visual, ruang negatif (negative space), dan penempatan elemen dalam bidang framing.",semanticTriggers:["composition balance","keseimbangan komposisi","seimbangkan framing","komposisi seimbang","balance composition","penataan framing"],negativeTriggers:[],conflicts:[],compatibleWith:["/ruleofthirds","/perspectivecorrection"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat tata letak visual terasa berat sebelah atau framing memotong elemen penting secara canggung.",whenNotToUse:"Jangan gunakan jika komposisi foto sudah seimbang dan proporsional.",functionGroup:"COMPOSITION_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/framingbalance"],relationships:[{code:"/ruleofthirds",relationType:"COMPATIBLE",reason:"Aturan sepertiga adalah salah satu kaidah utama untuk mencapai keseimbangan komposisi."}]},{code:"/highdetail",name:"High Fidelity Micro-Detail",category:"IMAGE_QUALITY",target:"IMAGE_DETAIL",description:"Meningkatkan kejernihan mikrotekstur dan ketajaman detail halus pada seluruh permukaan foto secara koheren.",semanticTriggers:["high detail","detail tinggi","mikro detail tajam","tingkatkan detail","high fidelity detail","detail jernih"],negativeTriggers:["blur","halus berlebih"],conflicts:[],compatibleWith:["/detailpreservation","/sharpen","/highresolution"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat elemen visual memerlukan peningkatan resolusi mikrotekstur tanpa menambahkan noise.",whenNotToUse:"Jangan gunakan jika gambar ditujukan untuk gaya lembut bertekstur minim.",functionGroup:"IMAGE_HIGHDETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/microdetail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Ketajaman mikrokontras mendukung tampilan detail tinggi."}]}];function Ca(u,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),n=u.code.toLowerCase(),i=u.name.toLowerCase(),s=u.target.toLowerCase(),r=u.category.toLowerCase(),t=u.description.toLowerCase();if(n===e||n===`/${e}`)return 100;if(n.includes(e))return 75;if(u.semanticTriggers&&u.semanticTriggers.some(m=>m.toLowerCase()===e))return 95;if(u.negativeTriggers)for(const m of u.negativeTriggers){const p=m.toLowerCase(),h=e.indexOf(p);if(h!==-1){const g=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p),A=e.slice(0,h).trim(),c=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(A);if(g||!c)return-50}}if(u.semanticTriggers)for(const m of u.semanticTriggers){const p=m.toLowerCase(),h=e.indexOf(p);if(h!==-1){const g=e.slice(0,h).trim(),A=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(g),c=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p);if(!A||c)return 85}else if(p.includes(e))return 80}const o=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),l=e.split(/\s+/).filter(m=>m.length>2&&!o.has(m));let d=0;for(const m of u.semanticTriggers||[]){const p=m.toLowerCase();if(l.length>0&&l.every(A=>p.includes(A)))return 75;const g=l.filter(A=>p.includes(A)).length;g>d&&(d=g)}return d>1?40+d*5:i.includes(e)?50:s.includes(e)||r.includes(e)?40:t.includes(e)?30:0}function za(u,{category:a="ALL",target:e="ALL",recommendationLevel:n="ALL",searchQuery:i=""}={}){const s=u.filter(r=>!(a!=="ALL"&&r.category!==a||e!=="ALL"&&r.target!==e||n!=="ALL"&&r.recommendationLevel!==n));if(i&&i.trim()){const r=[];for(const t of s){const o=Ca(t,i);o>0&&r.push({item:t,score:o})}return r.sort((t,o)=>o.score-t.score),r.map(t=>t.item)}return s}const Va="psa_v2_catalog_db",Wa=1,ra="user_shorthands";class Ya{constructor(a=Ua){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((e,n)=>{const i=window.indexedDB.open(Va,Wa);i.onupgradeneeded=s=>{const r=s.target.result;r.objectStoreNames.contains(ra)||r.createObjectStore(ra,{keyPath:"code"})},i.onsuccess=s=>e(s.target.result),i.onerror=s=>n(s.target.error)}),await this.loadFromIndexedDB()}catch(e){console.warn("IndexedDB unavailable, using memory fallback:",e)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,n)=>{const r=this.db.transaction([ra],"readonly").objectStore(ra).getAll();r.onsuccess=()=>e(r.result||[]),r.onerror=()=>n(r.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const n of this.userCatalog.values()){const i=e.findIndex(s=>s.code===n.code);i!==-1?e[i]={...e[i],...n}:e.push(n)}return a?e:e.filter(n=>n.status!=="DISABLED")}searchShorthands(a,e={}){const n=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return n;const i=a.toLowerCase().trim(),s=[];for(const r of n){let t=Ca(r,i);r.functionGroup&&r.functionGroup.toLowerCase().includes(i)&&(t=Math.max(t,60)),r.equivalentTo&&r.equivalentTo.some(o=>o.toLowerCase().includes(i))&&(t=Math.max(t,70)),r.relationships&&r.relationships.some(o=>{var l,d;return((l=o.code)==null?void 0:l.toLowerCase().includes(i))||((d=o.relationType)==null?void 0:d.toLowerCase().includes(i))})&&(t=Math.max(t,45)),t>0&&s.push({item:r,score:t})}return s.sort((r,t)=>t.score-r.score),s.map(r=>r.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(n=>n.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(n=>n.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(n=>n.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const n=this.getAll().find(i=>i.code===a||i.target===a);return!n||!n.relationships?[]:n.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),n=e.find(s=>s.code.toLowerCase()===a.code.toLowerCase());if(n)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:n,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const s=e.find(r=>r.functionGroup===a.functionGroup);if(s)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:s,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${s.code}).`}}const i=e.find(s=>s.equivalentTo&&s.equivalentTo.some(r=>r.toLowerCase()===a.code.toLowerCase()));return i?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:i,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${i.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((n,i)=>{const t=this.db.transaction([ra],"readwrite").objectStore(ra).put(e);t.onsuccess=()=>n(),t.onerror=()=>i(t.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(n=>n.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((n,i)=>{const t=this.db.transaction([ra],"readwrite").objectStore(ra).delete(a);t.onsuccess=()=>n(),t.onerror=()=>i(t.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:n,geminiKey:i,secret:s,password:r,...t}=e;return t});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let n=null;if(typeof a=="string")try{n=JSON.parse(a)}catch(r){throw new Error("Format JSON impor tidak valid: "+r.message)}else n=a;const i=Array.isArray(n)?n:n.entries||[];if(!Array.isArray(i))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((r,t)=>{const d=this.db.transaction([ra],"readwrite").objectStore(ra).clear();d.onsuccess=()=>r(),d.onerror=()=>t(d.error)}));let s=0;for(const r of i){if(!r||!r.code||this.coreCatalog.some(h=>h.code===r.code)&&e==="MERGE")continue;const{apiKey:o,geminiKey:l,secret:d,password:m,...p}=r;await this.add({...p,status:p.status||"APPROVED",source:p.source||"USER"}),s++}return{success:!0,count:s,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const s=this.db.transaction([ra],"readwrite").objectStore(ra).clear();s.onsuccess=()=>a(),s.onerror=()=>e(s.error)}),!0}}const da={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},P={getApiKey(){try{return localStorage.getItem(da.GEMINI_API_KEY)||""}catch{return""}},setApiKey(u){try{return u?localStorage.setItem(da.GEMINI_API_KEY,u.trim()):localStorage.removeItem(da.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(da.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{const u=(localStorage.getItem(da.GEMINI_MODEL)||"gemini-2.0-flash").trim().replace(/^models\//,"");return u.includes("1.5-pro")||u.includes("3.5")&&u!=="gemini-3.5-flash-lite"||u.includes("3.8")||u.includes("2.5-pro")?(localStorage.setItem(da.GEMINI_MODEL,"gemini-2.0-flash"),"gemini-2.0-flash"):u}catch{return"gemini-2.0-flash"}},setModel(u){try{const a=(u||"gemini-2.0-flash").trim().replace(/^models\//,"");return localStorage.setItem(da.GEMINI_MODEL,a),!0}catch{return!1}},getCustomCatalog(){try{const u=localStorage.getItem(da.CUSTOM_CATALOG);return u?JSON.parse(u):[]}catch{return[]}},saveCustomCatalog(u){try{return localStorage.setItem(da.CUSTOM_CATALOG,JSON.stringify(u)),!0}catch{return!1}},getUiPreferences(){try{const u=localStorage.getItem(da.UI_PREFS);return u?JSON.parse(u):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(u){try{return localStorage.setItem(da.UI_PREFS,JSON.stringify(u)),!0}catch{return!1}}};class Fa{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,n)=>n.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const n=this.patches.get(a);return n?(n.enabled=!!e,!0):!1}safeExecuteHook(a,e,n={}){let i=e;const s=this.getActivePatches(a);for(const r of s)try{const t=r.hooks[a];if(typeof t=="function"){const o=t(i,n);o!==void 0&&(i=o)}}catch(t){console.warn(`[PatchManager] Peringatan: Patch "${r.id}" pada hook "${a}" gagal dieksekusi:`,t),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:r.id,hookName:a,error:t.message,stack:t.stack})}return i}async safeExecuteHookAsync(a,e,n={}){let i=e;const s=this.getActivePatches(a);for(const r of s)try{const t=r.hooks[a];if(typeof t=="function"){const o=await t(i,n);o!==void 0&&(i=o)}}catch(t){console.warn(`[PatchManager] Peringatan: Async Patch "${r.id}" pada hook "${a}" gagal:`,t),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:r.id,hookName:a,error:t.message})}return i}}const $a=new Fa,Ja={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(u,a){return u&&{...u,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},qa={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(u){return u&&{...u,kamusStatus:{available:!0,version:"3.1.0"}}}}};$a.registerPatch(Ja);$a.registerPatch(qa);class Qa{constructor(a=Ua,e=$a){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const n=this.normalize(a),i=this.extractExistingShorthands(a),s=this.stripShorthands(a),r=this.analyzeIntent(s),{editAreas:t,lockedAreas:o,unchangedAreas:l}=this.extractAreas(s,r),d=this.queryPrimaryShorthands(s,t,o,r),m=this.deduplicateByFunctionGroup(d).map(y=>({...y,isPrimary:!0,checked:!0,priority:"WAJIB"})),p=this.discoverRelatedShorthands(s,m,t,o),h=[...m,...p],g=this.detectConflicts(t,o,m,i),A=this.evaluateExclusions(h,m);let c=[];if(e&&Array.isArray(e))c=[...e];else{const y=m.sort((f,O)=>(f.promptIndex??999)-(O.promptIndex??999)).map(f=>f.code),R=new Set([...i,...y]);c=Array.from(R)}for(const y of h)y.checked=c.includes(y.code),y.active=y.checked;const k=this.generateVisualTransformation(t,o,s),v=this.buildOptimalPrompt(s,c),T={rawPrompt:a,normalizedPrompt:n,cleanText:s,intent:r,editAreas:t,lockedAreas:o,unchangedAreas:l,conflicts:g,primaryShorthands:m,relatedShorthands:p,recommendations:h,exclusions:A,installedShorthands:c,visualTransformation:k,optimalPrompt:v,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",T,{engine:this,patchManager:this.patchManager,rawPrompt:a}):T}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,n=[];let i;for(;(i=e.exec(a))!==null;)n.push(i[0]);return Array.from(new Set(n))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let n="MODIFIKASI_VISUAL",i="Gambar",s="Memproses instruksi visual pada gambar.",r="MEDIUM",t="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(n="PENINGKATAN_PENCAHAYAAN",i="Pencahayaan & Tata Cahaya",s="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",r="HIGH",t="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(n="PELEPASAN_PENUTUP_KEPALA",i="Hijab / Penutup Kepala",s="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",r="HIGH",t="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(n="PENGGANTIAN_BUSANA",i="Pakaian & Outfit",s="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",r="HIGH",t="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(n="PENAJAMAN_DETAIL",i="Mikrokontras & Detail",s="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",r="HIGH",t="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(n="PENGHAPUSAN_LATAR",i="Latar Belakang / Background",s="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",r="CRITICAL",t="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(n="PENGGANTIAN_LATAR",i="Latar Belakang / Background",s="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",r="HIGH",t="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(n="PENYESUAIAN_RASIO_KANVAS",i="Kanvas & Dimensi",s="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",r="HIGH",t="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(n="MODIFIKASI_RAMBUT",i="Rambut & Gaya Rambut",s="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",r="HIGH",t="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(n="MODIFIKASI_BENTUK_TUBUH",i="Bentuk Tubuh & Proporsi Lekuk",s="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",r="HIGH",t="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(n="PENYEMPURNAAN_ANATOMI_TANGAN",i="Tangan & Jari Subjek",s="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",r="HIGH",t="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(n="PENINGKATAN_RESOLUSI",i="Resolusi & Detail Gambar",s="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",r="HIGH",t="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(n="PERLUASAN_KANVAS_OUTPAINT",i="Bidang & Batas Kanvas Foto",s="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",r="HIGH",t="CANVAS_RATIO"),{primaryAction:n,primaryTarget:i,summary:s,priority:r,category:t}}extractAreas(a,e){const n=a.toLowerCase(),i=[],s=[],r=new Set,t=b=>{for(const I of b){if(!n.includes(I))continue;if([`jangan ubah ${I}`,`jangan ganti ${I}`,`jangan sentuh ${I}`,`jangan mengubah ${I}`,`pertahankan ${I}`,`kunci ${I}`,`jaga ${I}`,`${I} asli`,`${I} tetap`,`${I} sama`,`${I} harus tetap sama`,`keep ${I}`,`same ${I}`,`preserve ${I}`].some(N=>n.includes(N)))return!0}return!1},o=b=>{for(const I of b){if(!n.includes(I))continue;if([`ubah ${I}`,`ganti ${I}`,`hapus ${I}`,`hilangkan ${I}`,`perbaiki ${I}`,`tingkatkan ${I}`,`buat ${I}`,`lepas ${I}`,`lepaskan ${I}`,`buka ${I}`,`change ${I}`,`remove ${I}`].some(N=>n.includes(N))||I==="pencahayaan"&&(n.includes("perbaiki pencahayaan")||n.includes("lighting")||n.includes("terangkan"))||I==="hijab"&&(n.includes("hapus hijab")||n.includes("lepas hijab")||n.includes("lepaskan hijab")||n.includes("tanpa hijab"))||I==="baju"&&(n.includes("tanktop")||n.includes("kemeja")||n.includes("gaun")||n.includes("jaket"))||I==="rasio"&&(n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("4:5"))||I==="latar"&&(n.includes("latar baru")||n.includes("gunakan latar baru")||n.includes("hapus latar")))return!0}return!1},l=["wajah","muka","face","identitas","paras"];l.some(b=>n.includes(b))&&(r.add("FACE"),t(l)?s.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):o(l)&&i.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:n.includes("ganti wajah")?"/facechange":"/faceedit"}));const d=["hijab","kerudung","jilbab","penutup kepala","topi"];d.some(b=>n.includes(b))&&(r.add("HEADWEAR"),t(d)?s.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):i.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const m=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(m.some(b=>n.includes(b)))if(r.add("OUTFIT"),t(m))s.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let b="Pakaian subjek";n.includes("tanktop putih tali tipis")?b="Tanktop putih tali tipis":n.includes("tanktop")?b="Tanktop":n.includes("gaun")?b="Gaun":n.includes("kemeja")&&(b="Kemeja"),i.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${b}.`,shorthand:"/outfit"})}const p=["latar","background","backdrop","lingkungan"];if(p.some(b=>n.includes(b))&&(r.add("BACKGROUND"),t(p)?s.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):n.includes("hapus")||n.includes("transparan")||n.includes("hilangkan")||n.includes("buang")?i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(n.includes("ganti")||n.includes("ubah")||n.includes("baru")||n.includes("gunakan latar baru")||n.includes("studio"))&&i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(n.includes("pencahayaan")||n.includes("lighting")||n.includes("terangkan")||n.includes("cahaya"))&&(r.add("LIGHTING"),i.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(b=>n.includes(b))?(r.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(n.includes("tajam")||n.includes("sharpen")||n.includes("perjelas")||n.includes("detail")||n.includes("ketajaman"))&&(r.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),n.includes("rasio")||n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("4:5")||n.includes("format")){r.add("CANVAS_RATIO");let b="Rasio baru",I="/ar 9:16";n.includes("9:16")?(b="9:16 (Vertical)",I="/ar 9:16"):n.includes("16:9")?(b="16:9 (Landscape)",I="/ar 16:9"):n.includes("1:1")?(b="1:1 (Persegi)",I="/ar 1:1"):n.includes("4:5")&&(b="4:5 (Portrait)",I="/ar 4:5"),i.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${b}.`,shorthand:I})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(b=>n.includes(b))&&(r.add("CANVAS_RATIO"),i.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(n.includes("full body")||n.includes("seluruh tubuh")||n.includes("badan penuh"))&&(r.add("BODY_POSE"),i.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const c=["rambut","hair","botak","cukur"];if(c.some(b=>n.includes(b))){r.add("HAIR");const b=t(c),I=o(c)||n.includes("botak")||n.includes("merah")||n.includes("cat")||n.includes("gaya rambut");b&&I?(s.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:n.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):b?s.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):I&&i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:n.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const k=["tubuh","badan","pose","postur"],v=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],T=v.some(b=>n.includes(b));(k.some(b=>n.includes(b))||T)&&(r.add("BODY_POSE"),t([...k,...v])?s.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):T&&i.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const R=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];R.some(b=>n.includes(b))&&(r.add("BODY_POSE"),t(R)?s.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):i.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const O=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(b=>!r.has(b.key)).map(b=>({entity:b.key,label:b.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${b.label.toLowerCase()}.`}));return{editAreas:i,lockedAreas:s,unchangedAreas:O}}findPromptIndex(a,e,n=[]){const i=a.toLowerCase();let s=999;const r=[...e.semanticTriggers||[],...n];for(const t of r){if(!t||t.length<3)continue;const o=i.indexOf(t.toLowerCase());o!==-1&&o<s&&(s=o)}return s}queryPrimaryShorthands(a,e,n,i){const s=new Map;for(const r of n)if(r.shorthand){const t=this.catalog.find(o=>o.code===r.shorthand);if(t){const o=this.findPromptIndex(a,t,[r.label,r.entity,"jangan","pertahankan","kunci"]);s.set(t.code,{item:t,code:t.code,name:t.name,category:t.category,target:r.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${r.description.toLowerCase()}`,score:100,promptIndex:o})}}for(const r of e)if(r.shorthand){const t=this.catalog.find(o=>o.code===r.shorthand);if(t){const o=this.findPromptIndex(a,t,[r.label,r.entity,"ubah","ganti","hapus"]);s.set(t.code,{item:t,code:t.code,name:t.name,category:r.category||t.category,target:r.label,priority:"WAJIB",reason:`Mendukung eksekusi ${r.description.toLowerCase()}`,score:95,promptIndex:o})}}if(e.some(r=>r.entity==="LIGHTING")&&!s.has("/enhance")){const r=this.catalog.find(t=>t.code==="/enhance");r&&s.set("/enhance",{item:r,code:r.code,name:r.name,category:r.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,r,["pencahayaan","lighting"])})}if(e.some(r=>r.entity==="IMAGE_QUALITY")&&!s.has("/sharpen")&&!s.has("/highresolution")){const r=this.catalog.find(t=>t.code==="/sharpen");r&&s.set("/sharpen",{item:r,code:r.code,name:r.name,category:r.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,r,["tajam","sharpen"])})}for(const r of this.catalog){if(s.has(r.code))continue;const t=Ca(r,a);if(t>=70){if(n.some(m=>{if(m.shorthand&&r.conflicts&&r.conflicts.includes(m.shorthand))return!0;const p=this.catalog.find(h=>h.code===m.shorthand);return!!(p&&p.conflicts&&p.conflicts.includes(r.code))})||Array.from(s.values()).some(m=>{var p,h;return(h=(p=m.item)==null?void 0:p.relationships)==null?void 0:h.some(g=>g.code===r.code&&g.relationType==="ALTERNATIVE")}))continue;r.category;const d=this.findPromptIndex(a,r);s.set(r.code,{item:r,code:r.code,name:r.name,category:r.category,target:r.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${r.name}'.`,score:t,promptIndex:d})}}return Array.from(s.values())}deduplicateByFunctionGroup(a){var i,s,r;const e=new Map;for(const t of a){const o=((i=t.item)==null?void 0:i.functionGroup)||((s=t.item)==null?void 0:s.category)||t.code;e.has(o)?e.get(o).push(t):e.set(o,[t])}const n=[];for(const[t,o]of e.entries()){if(o.length===1){n.push(o[0]);continue}o.sort((p,h)=>{var T,y,R,f;const g=(T=p.item)!=null&&T.preferredRepresentative?1:0,A=(y=h.item)!=null&&y.preferredRepresentative?1:0;if(A!==g)return A-g;const c={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},k=c[(R=p.item)==null?void 0:R.status]||2,v=c[(f=h.item)==null?void 0:f.status]||2;return v!==k?v-k:(h.score||0)!==(p.score||0)?(h.score||0)-(p.score||0):p.code.length-h.code.length});const l={...o[0]},d=o.slice(1).map(p=>p.code),m=Array.from(new Set([...((r=l.item)==null?void 0:r.equivalentTo)||[],...d,...o.slice(1).flatMap(p=>{var h;return((h=p.item)==null?void 0:h.equivalentTo)||[]})])).filter(p=>p!==l.code);l.item={...l.item,equivalentTo:m},l.equivalentTo=m,n.push(l)}return n}hasConflict(a,e,n){if(!a)return!1;for(const i of e){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const s=this.catalog.find(r=>r.code===i);if(s&&s.conflicts&&s.conflicts.includes(a.code))return!0}for(const i of n){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const s=this.catalog.find(r=>r.code===i);if(s&&s.conflicts&&s.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,n,i){var h;const s=new Set(e.map(g=>g.code));for(const g of e)if(g.equivalentTo)for(const A of g.equivalentTo)s.add(A);const r=new Set(e.map(g=>{var A,c;return((A=g.item)==null?void 0:A.functionGroup)||((c=g.item)==null?void 0:c.category)})),t=new Set([...n.map(g=>g.entity),...i.map(g=>g.entity)]),o=new Set(i.map(g=>g.shorthand).filter(Boolean)),l=new Map;for(const g of e){const A=((h=g.item)==null?void 0:h.relationships)||[];for(const c of A){if(!c.code||s.has(c.code))continue;const k=this.catalog.find(T=>T.code===c.code);if(!k||this.hasConflict(k,o,s)||Ca(k,a)<0)continue;const v=k.functionGroup||k.category;r.has(v)||k.category==="HEADWEAR"&&!t.has("HEADWEAR")||l.has(k.code)||l.set(k.code,{item:k,code:k.code,name:k.name,category:k.category,target:k.target,functionGroup:v,description:k.description,relationship:c.relationType||"DIRECTLY_RELATED",reason:c.reason||`Berhubungan dengan ${g.name}`,source:k.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const d={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const g of t){const A=d[g]||[];for(const c of A)for(const k of this.catalog){if(s.has(k.code)||l.has(k.code)||c.category&&k.category!==c.category||c.target&&k.target!==c.target||k.category==="HEADWEAR"&&!t.has("HEADWEAR")||k.category==="TRANSPARENCY"&&!t.has("BACKGROUND")||this.hasConflict(k,o,s)||Ca(k,a)<0)continue;const v=k.functionGroup||k.category;r.has(v)||l.set(k.code,{item:k,code:k.code,name:k.name,category:k.category,target:k.target,functionGroup:v,description:k.description,relationship:c.relation||"CONTEXTUAL",reason:c.reason||`Berhubungan dengan area ${g}`,source:k.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const m=Array.from(l.values());return this.deduplicateByFunctionGroup(m).map(g=>({...g,isPrimary:!1,checked:!1,priority:g.priority||"DISARANKAN"}))}detectConflicts(a,e,n,i){const s=[];for(const o of a){const l=e.find(d=>d.entity===o.entity);if(l){const d={id:`conflict-${o.entity.toLowerCase()}`,entity:o.entity,label:o.label,type:"EDIT_VS_LOCK",shorthandA:l.shorthand||`[Lock ${o.entity}]`,shorthandB:o.shorthand||`[Ubah ${o.entity}]`,instructionA:l.description,instructionB:o.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${o.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};d.suggestion=this.generateConflictSuggestion(d),s.push(d)}}const r=Array.isArray(n)?n.map(o=>typeof o=="string"?o:o.code):Array.from(n.keys?n.keys():[]),t=Array.from(new Set([...r,...i]));for(const o of t){const l=this.catalog.find(d=>d.code===o);if(!(!l||!l.conflicts||l.conflicts.length===0)){for(const d of l.conflicts)if(t.includes(d)){if(s.some(h=>h.shorthandA===o&&h.shorthandB===d||h.shorthandA===d&&h.shorthandB===o))continue;const p=`conflict-${[o,d].sort().join("-")}`;if(!s.some(h=>h.id===p)){const h=this.catalog.find(A=>A.code===d),g={id:p,entity:l.target,label:l.name,type:"SHORTHAND_CLASH",shorthandA:o,shorthandB:d,instructionA:l.description,instructionB:h?h.description:`Konflik dengan direktif ${d}`,reason:`Shorthand ${o} bertentangan langsung dengan ${d} pada target ${l.target}.`,options:[{id:"keep_a",label:`Gunakan ${o}`},{id:"keep_b",label:`Gunakan ${d}`}]};g.suggestion=this.generateConflictSuggestion(g,l,h),s.push(g)}}}}return s}generateConflictSuggestion(a,e=null,n=null){const i=(a.shorthandA||"").toLowerCase(),s=(a.shorthandB||"").toLowerCase(),r=[i,s].sort().join(" vs ");if(r==="/backgroundlock vs /bgblur"||i==="/backgroundlock"&&s==="/bgblur"||s==="/backgroundlock"&&i==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(r==="/backgroundlock vs /studiobg"||i==="/backgroundlock"&&s==="/studiobg"||s==="/backgroundlock"&&i==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(r==="/backgroundlock vs /bgreplace"||i==="/backgroundlock"&&s==="/bgreplace"||s==="/backgroundlock"&&i==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(r==="/backgroundlock vs /bgremove"||i==="/backgroundlock"&&s==="/bgremove"||s==="/backgroundlock"&&i==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(r==="/bgremove vs /bgreplace"||i==="/bgreplace"&&s==="/bgremove"||i==="/bgremove"&&s==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(r==="/bgblur vs /bgremove"||i==="/bgblur"&&s==="/bgremove"||i==="/bgremove"&&s==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(r==="/bgremove vs /studiobg"||i==="/studiobg"&&s==="/bgremove"||i==="/bgremove"&&s==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(r==="/bgblur vs /studiobg"||i==="/studiobg"&&s==="/bgblur"||i==="/bgblur"&&s==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(i==="/facelock"||s==="/facelock"){const o=i==="/facelock"?s:i;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${o}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${o}.`}if(i==="/outfitlock"||s==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${i==="/outfitlock"?s:i}.`;if(i==="/hairlock"||s==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${i==="/hairlock"?s:i}.`;if(i==="/headwearlock"||s==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${i==="/headwearlock"?s:i} jika ingin melepas atau mengganti penutup kepala.`;if(i==="/bodylock"||s==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${i==="/bodylock"?s:i}.`;if(r==="/cinematic vs /rawphoto"||i==="/cinematic"&&s==="/rawphoto"||i==="/rawphoto"&&s==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(r==="/rawphoto vs /vintage"||i==="/vintage"&&s==="/rawphoto"||i==="/rawphoto"&&s==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(r==="/cooltone vs /warmtone"||i==="/warmtone"&&s==="/cooltone"||i==="/cooltone"&&s==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(i==="/monochrome"||s==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${i==="/monochrome"?s:i} jika gambar harus tampil berwarna.`;if(r==="/bokeh vs /sharpen"||i==="/sharpen"&&s==="/bokeh"||i==="/bokeh"&&s==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const o=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${o}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${o}) dan batalkan instruksi ubah.`}const t=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${t}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const n=new Set(a.map(r=>r.code));for(const r of a)if(r.equivalentTo)for(const t of r.equivalentTo)n.add(t);const i=new Set(e.map(r=>r.code)),s=[];for(const r of this.catalog){if(n.has(r.code))continue;let t="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const o=e.find(l=>{var d;return!!(r.conflicts&&r.conflicts.includes(l.code)||(d=l.item)!=null&&d.conflicts&&l.item.conflicts.includes(r.code))});o?t=`Bertentangan dengan direktif aktif: ${o.code} (${o.name}).`:r.category==="LOCK_PRESERVATION"||r.category==="FACE_IDENTITY"?r.code==="/facelock"||r.code==="/faceedit"||r.code==="/facechange"?t="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":r.code==="/hairlock"?t="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":r.code==="/backgroundlock"?t="Latar belakang tidak diminta untuk dikunci secara eksplisit.":r.code==="/outfitlock"?t="Pakaian subjek tidak diminta untuk dikunci.":r.code==="/headwearlock"&&(t="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):r.category==="HAIR"?t="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":r.category==="OUTFIT"?i.has("/outfit")?r.code==="/outfit-remove"?t="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":r.code==="/outfit-color"?t="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":t="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":t="Tidak ada instruksi yang memodifikasi pakaian atau busana.":r.category==="HEADWEAR"?t="Tidak ada instruksi penutup kepala atau hijab.":r.category==="BACKGROUND"||r.category==="TRANSPARENCY"?r.code==="/bgremove"?t="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":r.code==="/bgreplace"?t="Tidak ada permintaan penggantian latar belakang ke scene baru.":t="Tidak ada permintaan manipulasi latar belakang.":r.category==="CANVAS_RATIO"?t="Tidak ada instruksi pengubahan rasio kanvas gambar.":r.category==="BODY_POSE"?t="Tidak ada permintaan perubahan pose atau framing seluruh badan.":r.category==="STYLE_EFFECT"||r.category==="CAMERA_PHOTO"?t="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":r.category==="EXPRESSION"?t="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":r.category==="OBJECT"&&(t="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),s.push({code:r.code,name:r.name,category:r.category,target:r.target,description:r.description,reason:t})}return s}generateVisualTransformation(a,e,n){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:n||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const i=a.map(o=>o.label).join(", "),s=e.map(o=>o.label).join(", ");let r="Elemen visual awal gambar",t="Elemen visual teroptimasi";if(a.some(o=>o.entity==="LIGHTING"))r="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",t="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(o=>o.entity==="HEADWEAR"))r="Subjek mengenakan penutup kepala / hijab asli",t="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(s?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(o=>o.entity==="OUTFIT")){const o=a.find(l=>l.entity==="OUTFIT");r="Busana awal subjek",t=`${o?o.description:"Busana baru terpasang"}`+(s?`; ${s} tetap terkunci aman.`:"")}else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REMOVE")))r="Foto subjek dengan latar belakang bawaan",t="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REPLACE")))r="Latar belakang awal foto",t="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(o=>o.entity==="CANVAS_RATIO")){const o=a.find(l=>l.entity==="CANVAS_RATIO");r="Dimensi kanvas bawaan foto",t=`${o?o.description:"Dimensi kanvas baru disesuaikan"}`}return{from:r,to:t,summary:`Transformasi pada [${i||"Tanpa Edit"}] dengan preservasi pada [${s||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let n=a.trim();n&&!n.endsWith(".")&&!n.endsWith("!")&&!n.endsWith("?")&&(n+=".");const i=e.join(" ");return n&&i?`${n} ${i}`:i||n}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",generatedPrompt:"",visionData:null,visualBreakdown:null,timestamp:null}}}function wa(u,a=1,e=.5){if(a<.12)return e>.85?"putih bersih / krem netral":e>.65?"abu-abu terang netral":e>.35?"abu-abu netral":e>.15?"abu-abu arang gelap":"hitam pekat monokromatik";switch(u){case"cyan":case"teal":return"biru toska / cyan cerah / denim";case"blue":return"biru muda / denim cerah";case"navy":return"biru tua / biru kobalt";case"pink":return"merah muda / pink pastel lembut";case"purple":case"violet":return"ungu lavender / violet";case"red":return"merah menyala / crimson";case"orange":return"oranye hangat / amber";case"yellow":return"kuning cerah / pastel yellow";case"lime":return"hijau muda terang / lime";case"green":return"hijau zamrud / toska alami";default:return"netral harmonis"}}function Ma(u,a=1,e=.5){if(a<.12)return e>.85?"clean white / soft cream":e>.65?"light neutral gray":e>.35?"medium neutral gray":e>.15?"dark charcoal gray":"deep monochromatic black";switch(u){case"cyan":case"teal":return"light cyan / vibrant teal / sky denim";case"blue":return"vivid denim blue / bright blue";case"navy":return"deep navy blue / royal cobalt";case"pink":return"soft pastel pink / rose";case"purple":case"violet":return"lavender / soft violet";case"red":return"vibrant crimson red";case"orange":return"warm amber orange";case"yellow":return"bright sunny yellow";case"lime":return"bright lime green";case"green":return"emerald green / mint";default:return"balanced neutral tone"}}function Ga(u,a={}){var d,m;const e=(a.filename||"").toLowerCase(),n=a.width||(u==null?void 0:u.width)||800,i=a.height||(u==null?void 0:u.height)||800,s=n/(i||1);let r="1:1",t="square";s>1.6?(r="16:9",t="landscape-wide"):s>1.25?(r="4:3",t="landscape"):s<.65?(r="9:16",t="portrait-tall"):s<.85&&(r="3:4",t="portrait");const o=e.startsWith("unduhan")||e.includes("download")||e.includes("jfif"),l=e.includes("3d")||e.includes("chibi")||e.includes("doll")||e.includes("render")||e.includes("toy")||e.includes("figure")||e.includes("figurine")||e.includes("character")||e.includes("boneka")||e.includes("avatar")||e.includes("anime")||e.includes("kartun")||e.includes("cartoon")||e.includes("hoodie");if(!u||typeof u.getContext!="function"){const p=l||o&&e.endsWith(".jfif"),h=p?"cyan":"neutral";return{dimensions:{width:n,height:i,aspectRatio:r,orientation:t},styleType:p?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:p,dominantHue:h,dominantColorIndonesian:wa(h,p?.4:.05,.5),dominantColorEnglish:Ma(h,p?.4:.05,.5),secondaryColorIndonesian:p?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:p?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:p?"latar studio netral dengan pencahayaan gradasi halus":"latar belakang netral teratur",lightingStyleIndonesian:p?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:p?.38:.18,avgLum:.55,satRatio:p?.32:.12,edgeDensity:p?16:32,centerContrast:.25}}try{const h=document.createElement("canvas");h.width=64,h.height=64;const g=h.getContext("2d",{willReadFrequently:!0});if(!g)throw new Error("Canvas 2D context unavailable");g.drawImage(u,0,0,64,64);const A=g.getImageData(0,0,64,64).data,c=4096;let k=0,v=0,T=0,y=0,R=0,f=0,O=0,b=0,I=0,C=0,N=0,S=0,w=0,D=0,V=0,ma=0;const ea={cyan:0,blue:0,navy:0,pink:0,purple:0,red:0,orange:0,yellow:0,lime:0,green:0,white:0,gray:0,black:0},sa={},oa={},X=new Float32Array(c);for(let _=0;_<64;_++)for(let G=0;G<64;G++){const Ta=(_*64+G)*4,Ea=A[Ta],fa=A[Ta+1],j=A[Ta+2];k+=Ea,v+=fa,T+=j;const x=Ea/255,aa=fa/255,q=j/255,ia=Math.max(x,aa,q),ga=Math.min(x,aa,q);let U=0,ya=0,Q=(ia+ga)/2;if(ia!==ga){const Sa=ia-ga;switch(ya=Q>.5?Sa/(2-ia-ga):Sa/(ia+ga),ia){case x:U=(aa-q)/Sa+(aa<q?6:0);break;case aa:U=(q-x)/Sa+2;break;case q:U=(x-aa)/Sa+4;break}U*=60}X[_*64+G]=Q,y+=ya,R+=Q,_<64/2?w+=Q:D+=Q,G<64/2?V+=Q:ma+=Q;let H="gray";ya<.14?Q>.82?H="white":Q<.18?H="black":H="gray":(f++,U>=345||U<15?H="red":U>=15&&U<45?H="orange":U>=45&&U<70?H="yellow":U>=70&&U<105?H="lime":U>=105&&U<145?H="green":U>=145&&U<195?H="cyan":U>=195&&U<225?H="blue":U>=225&&U<260?H="navy":U>=260&&U<295?H="purple":U>=295&&U<345&&(H="pink")),ea[H]=(ea[H]||0)+1;const _a=G>=16&&G<=48&&_>=14&&_<=50,va=G<10||G>=54||_<8||_>=56;_a&&(O+=ya,b+=Q,I++,sa[H]=(sa[H]||0)+1),va&&(C+=ya,N+=Q,S++,oa[H]=(oa[H]||0)+1)}const z=y/c,K=R/c,Y=I?O/I:z,ha=S?C/S:z,ka=f/c;let E=0,L=0;for(let _=1;_<63;_++)for(let G=1;G<63;G++){const Ta=X[_*64+G],Ea=Math.abs(X[_*64+(G+1)]-X[_*64+(G-1)]),fa=Math.abs(X[(_+1)*64+G]-X[(_-1)*64+G]);E+=Ea+fa,L++}const W=Math.round(E/(L||1)*100),Z=Object.entries(ea).sort((_,G)=>G[1]-_[1]).map(_=>_[0]),F=Z[0]||"neutral",ta=Z[1]||"gray",Aa=((d=Object.entries(oa).sort((_,G)=>G[1]-_[1])[0])==null?void 0:d[0])||"white",la=((m=Object.entries(sa).sort((_,G)=>G[1]-_[1])[0])==null?void 0:m[0])||F;let J="pencahayaan studio terdistribusi seimbang dengan fill merata";const Ia=(w-D)/(c/2),ua=b/(I||1)-N/(S||1);ua>.15?J="pencahayaan studio terarah lembut pada subjek utama dengan vignette halus":ua<-.12?J="pencahayaan rim light kontur dengan pencahayaan latar belakang terdifusi":Ia>.15?J="pencahayaan softbox terarah dari sudut atas dengan gradasi bayangan natural":K<.3?J="pencahayaan dramatis low-key dengan aksen highlight tajam":K>.7&&(J="pencahayaan terang high-key bersih tanpa bayangan pekat");const M=F==="cyan"||F==="blue"||la==="cyan"||la==="blue"||ea.cyan+ea.blue>c*.1,$=W<22,pa=ka>.18||z>.22||M;let ca="REALISTIC_PHOTO";l||o&&(pa||M)||$&&pa?ca="STYLED_3D_CHARACTER":F==="green"&&s>1.2?ca="NATURE_LANDSCAPE":F==="gray"&&W>28&&(ca="URBAN_ARCHITECTURE");const Ra=wa(la,Y,K),Na=Ma(la,Y,K),La=wa(ta,z,K),Pa=Ma(ta,z,K),Oa=wa(Aa,ha,N/(S||1));return{dimensions:{width:n,height:i,aspectRatio:r,orientation:t},styleType:ca,isStylizedOr3D:ca==="STYLED_3D_CHARACTER",dominantHue:la,dominantColorIndonesian:Ra,dominantColorEnglish:Na,secondaryColorIndonesian:La,secondaryColorEnglish:Pa,backgroundColorIndonesian:Oa,lightingStyleIndonesian:J,contrastLevel:Math.abs(ua)>.1?"tinggi terarah":"seimbang lembut",avgSat:Number(z.toFixed(2)),avgLum:Number(K.toFixed(2)),satRatio:Number(ka.toFixed(2)),edgeDensity:W,centerContrast:Number((Y-ha).toFixed(2))}}catch(p){console.warn("Canvas deep pixel analysis error:",p);const h=l||o&&e.endsWith(".jfif"),g=h?"cyan":"neutral";return{dimensions:{width:n,height:i,aspectRatio:r,orientation:t},styleType:h?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:h,dominantHue:g,dominantColorIndonesian:wa(g,h?.4:.05,.5),dominantColorEnglish:Ma(g,h?.4:.05,.5),secondaryColorIndonesian:h?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:h?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:"latar studio bersih terdifusi",lightingStyleIndonesian:h?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:h?.35:.18,avgLum:.55,satRatio:h?.28:.12,edgeDensity:h?16:30,centerContrast:.2}}}function Xa(u,a={}){var I,C,N,S;const e=a.preferredLang==="en",n=u||{},i=(a.filename||"").toLowerCase(),s=(a.referencePrompt||"").trim(),r=s.toLowerCase(),t=`${i} ${r}`,o=((I=n.dimensions)==null?void 0:I.aspectRatio)||"1:1",l=((C=n.dimensions)==null?void 0:C.orientation)||"square",d=n.dominantColorIndonesian||"biru toska / cyan cerah / denim",m=n.dominantColorEnglish||"light cyan / sky blue / denim",p=n.secondaryColorIndonesian||"krem / putih netral",h=n.secondaryColorEnglish||"soft cream / clean white",g=n.backgroundColorIndonesian||"latar studio bersih terdifusi",A=n.backgroundColorEnglish||"clean diffused studio backdrop",c=n.lightingStyleIndonesian||"pencahayaan studio terarah halus";if(!!(n.isStylizedOr3D||n.styleType==="STYLED_3D_CHARACTER"||t.includes("chibi")||t.includes("3d")||t.includes("doll")||t.includes("boneka")||t.includes("figurine")||t.includes("figure")||t.includes("toy")||t.includes("miniatur")||t.includes("render")||t.includes("avatar")||t.includes("karakter")||t.includes("character")||t.includes("anime")||t.includes("kartun")||t.includes("cartoon")||t.includes("hoodie")||i.startsWith("unduhan")&&(i.endsWith(".jfif")||(n.avgSat||0)>.15)))return{mainDescription:e?`Cute stylized 3D animated character figurine with expressive oversized eyes, dressed in an oversized hoodie jacket in ${m}, set against a clean studio backdrop with fine directional 3D illumination.`:`Karakter animasi 3D bergaya cute chibi doll figurine dengan mata besar ekspresif yang berbinar, mengenakan jaket hoodie berwarna ${d} bertekstur kain detail, dengan ${c}.`,subjectDescription:e?"Adorably proportioned 3D character doll featuring luminous stylized anime-like eyes, soft rosy cheeks, and smooth porcelain-grade subsurface scattering skin finish.":"Karakter figurin 3D imut (cute chibi doll) dengan proporsi wajah manis, tatapan mata besar jernih berbinar bergaya animasi 3D, pipi merona lembut, dan permukaan material kulit halus dengan subsurface scattering alami.",poseExpression:e?"Poised centered posture facing directly toward the camera, head charmingly tilted with a curious and serene expression.":"Postur tubuh imut terpusat menghadap ke arah kamera, kepala sedikit condong dengan ekspresi manis menggemaskan dan tatapan mata fokus.",identityPreservation:e?"Preserve the unique stylized 3D doll facial features, large anime eyes, and signature jacket tailoring.":"Pertahankan proporsi wajah karakter figurin 3D yang khas, bentuk mata besar berbinar, ekspresi imut, dan desain jaket asli.",outfitMaterial:e?`Cozy hoodie jacket crafted in ${m} with visible woven thread texture, refined hem stitching, hood drawstring accents, complemented by ${p}.`:`Jaket hoodie tebal berkerudung berwarna ${d} dengan kerapatan rajutan kain tampak jelas, jahitan tepi presisi, aksen tali hoodie, dan perpaduan aksen ${p}.`,environmentBackground:e?`Minimalist studio environment with soft diffused backdrop in ${g}, cleanly isolating the 3D figurine subject.`:`Latar belakang studio minimalis dengan nuansa ${g} terdifusi halus yang mengisolasi karakter secara bersih dan terfokus.`,compositionPerspective:e?`Medium closeup portrait centered framing in ${o} aspect ratio, eye-level perspective with measured shallow depth of field.`:`Komposisi medium portrait closeup terpusat dengan rasio aspek ${o}, sudut pandang kamera sejajar mata (eye-level), dan kedalaman bidang terukur (shallow depth of field).`,lightingColor:e?"Controlled 3D studio lighting with soft key fill, subtle rim highlights along the jacket contours, and clean ambient shadows.":`${c}, rim light tipis di sepanjang kontur jaket dan rambut, serta fill ambient lembut tanpa bayangan kasar.`,cameraLensDof:e?"Macro portrait perspective, crisp focus on the character's eyes and face with creamy studio background bokeh.":"Sudut pandang makro portrait, ketajaman kristal pada detail mata dan tekstur busana, dengan latar belakang bokeh studio yang lembut.",photoStyleRealism:e?"High-end 3D digital character render, Octane Render and Unreal Engine 5 aesthetic, smooth vinyl toy surface texture, extreme microcontrast.":"Gaya render digital 3D berkualitas tinggi (3D character / Octane Render aesthetic), tekstur material figurine halus, subsurface scattering lembut pada kulit, dan detail kain presisi.",aspectRatio:o,optimizationNeeds:["high detail","detail preservation","texture preservation","color balance","soft lighting","studio lighting","subsurface scattering"],suggestedShorthands:["/studio","/eyelevel","/softlight","/highdetail","/detailpreservation","/texturepreservation","/enhance"],contextualNegativePrompt:e?"real human photo, photorealistic real skin, wrinkled face, photographic grain, bad 3d render, distorted limbs, extra fingers, deformed eyes, blurry, low resolution, watermark, text":"real human photo, foto manusia asli, kulit berkerut, pori-pori kasar, photographic grain, render 3d cacat, anatomi rusak, jari ekstra, mata juling, buram, resolusi rendah, watermark, teks"};if(!!(n.styleType==="NATURE_LANDSCAPE"||t.includes("landscape")||t.includes("mountain")||t.includes("beach")||t.includes("lake")||t.includes("sunset")||t.includes("sunrise")||t.includes("forest")||t.includes("nature")||t.includes("gunung")||t.includes("pantai")||t.includes("danau")||t.includes("hutan")||t.includes("pemandangan")||t.includes("river")||t.includes("sungai")||t.includes("ocean")||t.includes("laut")||t.includes("valley")||n.dominantHue==="green"&&((N=n.dimensions)==null?void 0:N.width)/(((S=n.dimensions)==null?void 0:S.height)||1)>1.25)){const w=o==="1:1"?"16:9":o;return{mainDescription:e?`Expansive natural landscape photography capturing wide panoramic vistas, dominant ${m} earth tones, and atmospheric ambient illumination.`:`Pemandangan lanskap alam terbuka yang membentang luas dengan formasi horizon memukau, dominasi palet ${d}, dan atmosfer alam yang tenang.`,subjectDescription:e?`Layered geographical contours of undulating terrain with organic vegetation in the foreground and natural ${m} accents.`:`Hamparan bentang alam alami dengan kontur geografis berundak, vegetasi asri, dan aksen alami ${d} pada latar depan dan tengah.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Open scenic wilderness environment with expansive skyline, natural ${A}, and distant atmospheric haze.`:`Lingkungan alam terbuka dengan panorama cakrawala luas, batuan alami bernuansa ${g}, dan nuansa atmosfer yang jernih.`,compositionPerspective:e?`Wide-angle panoramic composition following rule-of-thirds framing, balanced horizontal perspective in ${w} aspect ratio, deep focus throughout.`:`Komposisi lanskap panorama sudut lebar (wide-angle shot) dengan rasio ${w}, garis horizon proporsional mengikuti kaidah rule of thirds, kedalaman ruang penuh (deep focus).`,lightingColor:e?`${c} with warm ambient glow, rich tonal dynamic range between bright skies and natural shadows.`:`${c}, rentang tonal dinamis yang seimbang antara langit terang dan bayangan alami.`,cameraLensDof:e?"24mm wide-angle lens, f/8 aperture, edge-to-edge sharpness from foreground rocks to distant horizon.":"Lensa sudut lebar (wide-angle 24mm f/8), seluruh bidang foto tajam menyeluruh dari foreground hingga cakrawala.",photoStyleRealism:e?"Realistic outdoor nature photography with microcontrast clarity, authentic earthy textures without synthetic saturation.":"Fotografi lanskap realistis dengan detail mikrokontras tinggi pada tekstur batuan dan dedaunan tanpa saturasi berlebih.",aspectRatio:w,optimizationNeeds:["shadow recovery","highlight control","dynamic range","natural tone","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/landscape","/wideangle","/deepfocus","/daylight","/rawphoto","/highdetail","/enhance"],contextualNegativePrompt:e?"people, text, buildings, cars, urban elements, low resolution, blurry, oversaturated colors, artificial clouds, chromatic aberration, digital noise, artifacts, watermark":"people, text, buildings, cars, manusia, perkotaan, low resolution, blur, oversaturated, awan sintetis, chromatic aberration, noise digital, artefak, watermark"}}if(!!(n.styleType==="URBAN_ARCHITECTURE"||t.includes("architecture")||t.includes("building")||t.includes("city")||t.includes("street")||t.includes("urban")||t.includes("tokyo")||t.includes("gedung")||t.includes("bangunan")||t.includes("jalan")||t.includes("kota")||t.includes("skyscraper")||t.includes("tower")||t.includes("facade")||t.includes("menara")||t.includes("interior")||t.includes("exterior")))return{mainDescription:e?`Contemporary urban architectural photography showcasing structural geometric lines, clean facades in ${m}, and ambient city illumination.`:`Struktur arsitektur modern dengan fasad geometris kontemporer, dominasi material bernuansa ${d}, dan garis struktural presisi.`,subjectDescription:e?`Modern architectural structure featuring precision vertical and diagonal geometry, reflective panels in ${m}, and clean structural lines.`:`Bangunan arsitektur dengan garis struktural presisi dan detail material fasad bernuansa ${d} berpadu dengan aksen ${p}.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Metropolitan urban environment with street-level pavement, architectural setting in ${A}, and clear perspective.`:`Kawasan urban perkotaan atau interior berlatar ${g} dengan perspektif geometris teratur.`,compositionPerspective:e?`Architectural perspective framed in ${o} aspect ratio with corrected converging lines, symmetrical framing, and balanced geometric balance.`:`Komposisi sudut presisi dalam rasio ${o} dengan penekanan pada garis tegak lurus, sudut pandang teratur, dan keseimbangan simetri.`,lightingColor:e?`${c} with clean highlights on structural surfaces and balanced shadows.`:`${c}, highlight teratur pada permukaan material, dan keseimbangan bayangan bersih.`,cameraLensDof:e?"35mm perspective-corrected tilt-shift lens, deep focus with maximum geometric fidelity.":"Lensa 35mm dengan koreksi distorsi perspektif (perspective correction) dan ketajaman merata menyeluruh (deep focus).",photoStyleRealism:e?"High-precision architectural documentary photography with crisp material textures and zero optic distortion.":"Fotografi arsitektur realistis dengan reproduksi tekstur material autentik dan distorsi minimal.",aspectRatio:o,optimizationNeeds:["perspective correction","lens correction","composition balance","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/architecture","/deepfocus","/naturalcontrast","/perspectivecorrection","/highdetail","/rawphoto"],contextualNegativePrompt:e?"distorted lines, bent architecture, blurry edges, heavy grain, bad reflection, overexposed, watermark, text":"garis melengkung, distorsi gedung, tepi buram, grain kasar, refleksi rusak, overexposed, watermark, teks"};if(!!(t.includes("animal")||t.includes("cat")||t.includes("dog")||t.includes("bird")||t.includes("wildlife")||t.includes("kucing")||t.includes("anjing")||t.includes("burung")||t.includes("hewan")||t.includes("satwa")))return{mainDescription:e?`Intimate wildlife portrait capturing authentic animal subject with coat tones in ${m}, sharp eye focus, and natural demeanor.`:`Potret satwa autentik dengan nuansa warna ${d}, fokus tajam pada mata, dan tekstur bulu alami.`,subjectDescription:e?`A captivating animal subject showcasing alert gaze, distinct coat patterns in ${m}, and organic vitality.`:`Seekor hewan dengan ekspresi lincah, tatapan mata jernih, dan bulu bernuansa ${d} berpadu ${p}.`,poseExpression:e?"Natural posture with head slightly angled, curious and calm demeanor directed toward the camera.":"Posisi tubuh alami dengan kepala condong proporsional dan tatapan mata fokus ke arah depan.",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Organic natural habitat or indoor setting in ${A} isolating the subject cleanly.`:`Lingkungan berlatar ${g} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Medium closeup shot framed in ${o} aspect ratio at eye-level with the animal, centered subject framing with shallow depth of field.`:`Closeup framing dalam rasio ${o} pada sudut pandang sejajar mata hewan (eye-level), komposisi terpusat proporsional.`,lightingColor:e?`${c} creating natural catchlights in the eyes and gentle coat highlights.`:`${c}, kilau alami pada mata, dan gradasi highlight lembut pada kontur tubuh.`,cameraLensDof:e?"135mm telephoto lens at f/2.8, shallow depth of field with creamy bokeh background.":"Lensa telephoto 135mm f/2.8, kedalaman bidang dangkal (shallow dof) dengan latar belakang blur halus.",photoStyleRealism:e?"Realistic wildlife photography preserving individual strands of fur, whiskers, and natural iris reflections.":"Fotografi satwa realistis dengan detail helai bulu yang tajam dan warna alami tanpa manipulasi sintetis.",aspectRatio:o,optimizationNeeds:["detail preservation","texture preservation","natural tone","high detail","natural processing","raw photo"],suggestedShorthands:["/eyelevel","/softlight","/telephoto","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"cartoon, illustration, 3d render, deformed anatomy, extra paws, blurry eyes, plastic fur, watermark, text":"kartun, ilustrasi, render 3d, anatomi cacat, cakar ekstra, mata buram, bulu plastik, watermark, teks"};if(!!(t.includes("product")||t.includes("food")||t.includes("coffee")||t.includes("watch")||t.includes("cake")||t.includes("produk")||t.includes("makanan")||t.includes("kopi")||t.includes("minuman")||t.includes("still-life")))return{mainDescription:e?`Commercial still-life photography featuring meticulous product placement in ${m}, balanced studio illumination, and tactile surface materiality.`:`Potret still-life komersial dengan penataan objek bernuansa ${d}, pencahayaan terukur, dan detail material berkualitas tinggi.`,subjectDescription:e?`Principal hero subject with distinct contours in ${m}, accented with ${h}, pristine surface finish, and refined craftsmanship details.`:`Objek utama dengan kontur presisi bernuansa ${d} berpadu aksen ${p}, dengan permukaan bersih dan detail pengerjaan rapi.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:e?`Tactile surface materials with subtle micro-reflections and authentic manufacturing texture in ${m}.`:`Tekstur permukaan material asli bernuansa ${d} dengan mikro-refleksi halus dan kerapatan tekstur autentik.`,environmentBackground:e?`Minimalist studio tabletop environment with backdrop in ${A} complementary to the subject.`:`Studio meja still-life dengan permukaan bernuansa ${g} dan penataan elemen pendukung minimalis.`,compositionPerspective:e?`Framed in ${o} aspect ratio at 45-degree elevated angle or eye-level tabletop framing, crisp geometric alignment and focused presentation.`:`Komposisi dalam rasio ${o} dengan sudut 45 derajat atau eye-level tabletop, framing terfokus pada objek utama.`,lightingColor:e?`${c} with controlled diffused softbox highlights and soft contact drop shadows.`:`${c}, softbox diffused illumination, dan gradasi bayangan kontak yang lembut.`,cameraLensDof:e?"90mm macro lens at f/5.6, measured depth of field keeping the critical product surfaces sharp.":"Lensa makro 90mm f/5.6, depth of field terukur dengan ketajaman tinggi pada produk.",photoStyleRealism:e?"Commercial product photography with extreme tactile sharpness, color fidelity, and authentic material finish.":"Fotografi produk profesional dengan kejernihan material dan akurasi warna tinggi.",aspectRatio:o,optimizationNeeds:["detail preservation","texture preservation","color balance","natural contrast","high detail","natural processing","raw photo"],suggestedShorthands:["/studio","/softlight","/macro","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"dust, scratches, harsh reflections, bad lighting, low resolution, blur, watermark, text":"debu, goresan, pantulan silau keras, pencahayaan buruk, resolusi rendah, blur, watermark, teks"};const f=t.includes("woman")||t.includes("wanita")||t.includes("cewek")||t.includes("girl")||t.includes("lady")||t.includes("female")||t.includes("hijab"),O=t.includes("man")||t.includes("pria")||t.includes("cowok")||t.includes("boy")||t.includes("gentleman")||t.includes("businessman")||t.includes("male");let b=e?"an authentic focal subject":"subjek potret autentik";return f?b=e?"an adult woman with natural facial features and poised expression":"seorang wanita dengan ekspresi tenang dan fitur wajah alami":O?b=e?"an adult man with natural facial features and composed demeanor":"seorang pria dewasa dengan ekspresi tenang dan pembawaan wajar":s&&(b=s),{mainDescription:e?`Authentic photograph capturing ${b} with natural posture, dressed in ${m}, framed with balanced composition and ${c}.`:`Potret fotografi autentik dengan framing ${l} terpusat, menampilkan ${b} dengan sentuhan warna ${d}, ${c}, dan karakter visual realistis.`,subjectDescription:e?`${b} featuring authentic facial proportions, crisp eye focus, and natural anatomical alignment.`:`${b} dengan proporsi wajah alami, fokus mata tajam, dan karakter visual nyata tanpa efek sintetis.`,poseExpression:e?"Poised natural posture framed at eye-level perspective, calm composed expression directed forward.":"Postur tubuh seimbang dengan sudut pandang kamera sejajar mata (eye-level perspective), ekspresi tenang bersahaja.",identityPreservation:e?"Preserve natural facial proportions, authentic skin tones, and genuine human contours.":"Pertahankan proporsi wajah alami, warna kulit natural, dan kontur wajah manusia asli.",outfitMaterial:e?`Neat attire featuring ${m} with visible fabric weave, fine seam texture, complemented by ${h}.`:`Busana rapi dengan dominasi warna ${d} dan aksen ${p}, tekstur kain tampak jelas.`,environmentBackground:e?`Cohesive setting in ${A} isolating the subject cleanly with gentle depth of field.`:`Latar belakang bernuansa ${g} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Centered portrait composition framed in ${o} aspect ratio following rule-of-thirds balance at eye-level perspective.`:`Komposisi terpusat dalam rasio aspek ${o}, sudut pandang kamera sejajar mata (eye-level), dan pembagian bidang seimbang.`,lightingColor:e?`${c} with balanced fill, natural shadow transition, and controlled highlights.`:`${c}, gradasi bayangan natural, dan highlight wajah terukur.`,cameraLensDof:e?"Prime portrait lens, shallow depth of field with creamy background bokeh separation.":"Lensa portrait prime, kedalaman bidang dangkal (shallow depth of field) dengan pemisahan latar belakang bokeh halus.",photoStyleRealism:e?"Realistic photographic style, authentic microcontrast, natural skin pore textures without artificial plastic smoothing.":"Gaya fotografi realistis dengan tekstur kulit asli tanpa efek penghalusan plastik berlebih.",aspectRatio:o,optimizationNeeds:["shadow recovery","natural contrast","natural tone","color balance","detail preservation","texture preservation","natural processing","raw photo"],suggestedShorthands:["/portrait","/studio","/eyelevel","/softlight","/rawphoto","/enhance","/highdetail"],contextualNegativePrompt:e?"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, bad eyes, plastic skin, oversaturated, blurry, watermark, text":"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, anatomi cacat, jari ekstra, mata rusak, kulit plastik, oversaturated, blur, watermark, text"}}const B={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class Za{constructor(a=[]){this.catalog=a,this.localEngine=new Qa(a),this.status=B.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){P.getApiKey()||(this.status=B.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!P.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const n=e.indexOf("{"),i=e.lastIndexOf("}");if(n!==-1&&i>n){const t=e.substring(n,i+1);try{return JSON.parse(t)}catch{}}const s=e.indexOf("["),r=e.lastIndexOf("]");if(s!==-1&&r>s){const t=e.substring(s,r+1);try{return JSON.parse(t)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var l;const n=(a||P.getApiKey()).trim(),i=e||P.getModel()||"gemini-2.0-flash";if(!n)return this.status=B.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:B.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const r=[i.trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((d,m,p)=>d&&p.indexOf(d)===m&&!d.includes("1.5-pro")&&!d.includes("2.5-pro")&&(d==="gemini-3.5-flash-lite"||!d.includes("3.5")&&!d.includes("3.8")));let t="",o=null;for(const d of r)try{const m=`https://generativelanguage.googleapis.com/v1beta/models/${d}?key=${encodeURIComponent(n)}`,p=await fetch(m,{method:"GET",headers:{"Content-Type":"application/json"}});if(p.ok){o=d;break}else{if(t=((l=(await p.json().catch(()=>({}))).error)==null?void 0:l.message)||`HTTP ${p.status}: ${p.statusText}`,p.status===404)continue;if(p.status===400||p.status===403)break}}catch(m){t=m.message||"Koneksi jaringan gagal"}if(o)return this.status=B.CONNECTED,this.lastError=null,o!==i&&P.setModel(o),{success:!0,status:B.CONNECTED,message:`Berhasil terhubung ke model ${o}!`};try{const d=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(n)}`,m=await fetch(d);if(m.ok){const h=((await m.json().catch(()=>({}))).models||[]).filter(A=>{var c;return(c=A.supportedGenerationMethods)==null?void 0:c.includes("generateContent")}).map(A=>A.name.replace(/^models\//,"")).filter(A=>!A.includes("1.5-pro")&&!A.includes("2.5-pro")&&!A.includes("3.5")&&!A.includes("3.8")),g=h.find(A=>A.includes("2.0-flash"))||h.find(A=>A.includes("1.5-flash"))||h[0];if(g)return P.setModel(g),this.status=B.CONNECTED,this.lastError=null,{success:!0,status:B.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${g})!`}}}catch{}return this.status=B.FAILED,this.lastError=t||"Koneksi gagal",{success:!1,status:B.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const n=P.getApiKey().trim(),i=P.getModel()||"gemini-2.0-flash";if(!n)return{...this.localEngine.analyze(a,e),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."};try{const r=await this.callGeminiAPI(a,n,i);if(r){const t=this.mergeAiWithCatalog(r,a,e);this.status=B.CONNECTED,this.lastError=null;const o=P.getModel()||i;return{...t,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${o}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(r){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",r),this.lastError=r.message}return{...this.localEngine.analyze(a,e),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,n){const s=[(n||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((t,o,l)=>t&&l.indexOf(t)===o&&!t.includes("1.5-pro")&&!t.includes("2.5-pro")&&(t==="gemini-3.5-flash-lite"||!t.includes("3.5")&&!t.includes("3.8")));let r=null;for(const t of s)try{const o=await this.executeGenerateContent(a,e,t);if(o)return t!==n&&P.setModel(t),o}catch(o){r=o,console.warn(`Model ${t} tidak dapat digunakan (${o.message}), mencoba model alternatif...`);continue}throw r||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,n){var d,m,p,h,g;const i=`https://generativelanguage.googleapis.com/v1beta/models/${n}:generateContent?key=${encodeURIComponent(e)}`,r={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
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

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},t=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!t.ok){const A=await t.text();throw new Error(`Gemini API error (${t.status}): ${A}`)}const l=(g=(h=(p=(m=(d=(await t.json()).candidates)==null?void 0:d[0])==null?void 0:m.content)==null?void 0:p.parts)==null?void 0:h[0])==null?void 0:g.text;if(!l)throw new Error("Respon Gemini kosong.");return this.extractJson(l)}mergeAiWithCatalog(a,e,n){var A,c,k,v,T;const i=this.localEngine.analyze(e,n);let s=[];const r=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const y of a.primaryShorthands){if(!y||!y.code)continue;const R=y.code.startsWith("/")?y.code:`/${y.code}`;if(r.has(R))continue;r.add(R);const f=this.catalog.find(O=>O.code.toLowerCase()===R.toLowerCase());s.push({item:f||null,code:R,name:y.name||(f==null?void 0:f.name)||R,category:y.category||(f==null?void 0:f.category)||"ONLINE_DISCOVERY",target:y.target||(f==null?void 0:f.target)||"Konsep Visual Prompt",description:y.description||(f==null?void 0:f.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:y.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:f?"CORE":"ONLINE",isOnline:!f,equivalentTo:(f==null?void 0:f.equivalentTo)||y.equivalentTo||[],functionGroup:(f==null?void 0:f.functionGroup)||y.functionGroup||y.category||"ONLINE_EXTENSION"})}if(i.primaryShorthands&&i.primaryShorthands.length>0)for(const y of i.primaryShorthands)y.category==="LOCK_PRESERVATION"&&!r.has(y.code)&&(r.add(y.code),s.push({...y,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else i.primaryShorthands&&i.primaryShorthands.length>0&&(s=i.primaryShorthands);let t=[];const o=new Set([...s.map(y=>y.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const y of a.relatedShorthands){if(!y||!y.code)continue;const R=y.code.startsWith("/")?y.code:`/${y.code}`;if(o.has(R))continue;o.add(R);const f=this.catalog.find(O=>O.code.toLowerCase()===R.toLowerCase());t.push({item:f||null,code:R,name:y.name||(f==null?void 0:f.name)||R,category:y.category||(f==null?void 0:f.category)||"ONLINE_DISCOVERY",target:y.target||(f==null?void 0:f.target)||"Variasi Konsep Visual",description:y.description||(f==null?void 0:f.description)||"Alternatif shorthand hasil analisis semantik online.",priority:y.priority||"DISARANKAN",reason:y.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:f?"CORE":"ONLINE",isOnline:!f,equivalentTo:(f==null?void 0:f.equivalentTo)||y.equivalentTo||[],functionGroup:(f==null?void 0:f.functionGroup)||y.functionGroup||y.category||"ONLINE_EXTENSION"})}if(i.relatedShorthands&&i.relatedShorthands.length>0)for(const y of i.relatedShorthands)o.has(y.code)||(o.add(y.code),t.push(y));let l=[];n&&Array.isArray(n)?l=n:s.length>0?l=s.map(y=>y.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?l=a.installedShorthands.map(y=>y.startsWith("/")?y:`/${y}`):i.installedShorthands&&i.installedShorthands.length>0&&(l=i.installedShorthands);const d=i.cleanText||e.trim();let m=i.optimalPrompt;l.length>0?m=`${d}. ${l.join(" ")}`:a.optimalPrompt&&a.optimalPrompt.trim()&&(m=a.optimalPrompt);const p={primaryAction:(A=a.intent)!=null&&A.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:i.intent.primaryAction,primaryTarget:(c=a.intent)!=null&&c.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:i.intent.primaryTarget,summary:((k=a.intent)==null?void 0:k.summary)||a.summary||i.intent.summary,priority:((v=a.intent)==null?void 0:v.priority)||i.intent.priority,category:(T=a.intent)!=null&&T.category&&a.intent.category!=="GENERAL"?a.intent.category:i.intent.category},h=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:i.editAreas,g=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:i.lockedAreas;return{rawPrompt:e,normalizedPrompt:i.normalizedPrompt,cleanText:d,intent:p,editAreas:h,lockedAreas:g,unchangedAreas:i.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:i.conflicts,primaryShorthands:s,relatedShorthands:t,recommendations:[...s,...t],exclusions:i.exclusions,installedShorthands:l,visualTransformation:a.visualTransformation||i.visualTransformation,optimalPrompt:m,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var t,o,l,d,m;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const e=P.getApiKey()?P.getApiKey().trim():"",n=P.getModel()||"gemini-2.0-flash";if(!e)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const i=[n,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((p,h,g)=>p&&g.indexOf(p)===h&&(p==="gemini-3.5-flash-lite"||!p.includes("3.5")&&!p.includes("3.8"))),r={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
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

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const p of i)try{const h=`https://generativelanguage.googleapis.com/v1beta/models/${p}:generateContent?key=${encodeURIComponent(e)}`,g=await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!g.ok)continue;const c=(m=(d=(l=(o=(t=(await g.json()).candidates)==null?void 0:t[0])==null?void 0:o.content)==null?void 0:l.parts)==null?void 0:d[0])==null?void 0:m.text;if(!c)continue;let k=[];try{k=this.extractJson(c)}catch{continue}if(!Array.isArray(k))continue;const v=k.filter(T=>T&&T.code&&typeof T.code=="string").map(T=>({code:T.code.startsWith("/")?T.code:`/${T.code}`,name:T.name||T.code,description:T.description||"Instruksi visual shorthand online",category:T.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:v,onlineAvailable:!0,message:v.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(h){console.warn(`Pencarian online dengan model ${p} gagal:`,h);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var p,h,g,A,c,k;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const n=P.getApiKey()?P.getApiKey().trim():"",i=P.getModel()||"gemini-2.0-flash";if(!n)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const s=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],r=[i,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((v,T,y)=>v&&y.indexOf(v)===T&&(v==="gemini-3.5-flash-lite"||!v.includes("3.5")&&!v.includes("3.8"))),t=`Anda adalah Prompt Shorthand Analyzer V3.3 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
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
`:""}Shorthand Terpasang Wajib Dipertahankan: ${s.length>0?s.join(" "):"(tidak ada)"}`,d={contents:[{role:"user",parts:[{text:`${t}

${l}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let m=null;for(const v of r)try{const T=`https://generativelanguage.googleapis.com/v1beta/models/${v}:generateContent?key=${encodeURIComponent(n)}`,y=await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(!y.ok){const I=await y.text();throw new Error(`HTTP ${y.status}: ${I}`)}const f=(k=(c=(A=(g=(h=(await y.json()).candidates)==null?void 0:h[0])==null?void 0:g.content)==null?void 0:A.parts)==null?void 0:c[0])==null?void 0:k.text;if(!f)throw new Error("Respon Gemini kosong.");const O=this.extractJson(f);let b=O.enrichedPrompt||O.prompt||(typeof O=="string"?O:"");if(!b||typeof b!="string"||!b.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");b=b.trim();for(const I of s)b.includes(I)||(b+=` ${I}`);return{success:!0,enrichedPrompt:b,modelUsed:v}}catch(T){m=T,console.warn(`Enrich prompt dengan model ${v} gagal:`,T.message);continue}throw m||new Error("Gagal memperkaya prompt dengan Gemini.")}detectImageAspect(a=null,e=null){if(a!=null&&a.width&&(a!=null&&a.height)){const i=a.width/a.height;if(i>1.6)return{ar:"16:9",orientation:"landscape-wide"};if(i>1.25)return{ar:"4:3",orientation:"landscape"};if(i>.9&&i<1.1)return{ar:"1:1",orientation:"square"};if(i<.65)return{ar:"9:16",orientation:"portrait-tall"};if(i<.85)return{ar:"3:4",orientation:"portrait"}}if(e&&typeof e=="string")try{const i=e.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"");if(typeof atob=="function"){const s=atob(i.substring(0,4e3));if(s.charCodeAt(0)===137&&s.charCodeAt(1)===80&&s.charCodeAt(2)===78&&s.charCodeAt(3)===71){const r=s.charCodeAt(16)<<24|s.charCodeAt(17)<<16|s.charCodeAt(18)<<8|s.charCodeAt(19),t=s.charCodeAt(20)<<24|s.charCodeAt(21)<<16|s.charCodeAt(22)<<8|s.charCodeAt(23);if(r>0&&t>0){const o=r/t;return o>1.6?{ar:"16:9",orientation:"landscape-wide"}:o>1.2?{ar:"4:3",orientation:"landscape"}:o>.9&&o<1.1?{ar:"1:1",orientation:"square"}:o<.65?{ar:"9:16",orientation:"portrait-tall"}:{ar:"3:4",orientation:"portrait"}}}}}catch{}const n=((a==null?void 0:a.name)||"").toLowerCase();return n.includes("portrait")||n.includes("vertical")||n.includes("story")||n.includes("reel")?{ar:"9:16",orientation:"portrait-tall"}:n.includes("square")||n.includes("feed")||n.includes("profile")||n.includes("1x1")?{ar:"1:1",orientation:"square"}:{ar:"16:9",orientation:"landscape-wide"}}assembleStructuredImagePrompt(a){if(!a)return"";const e=(a.mainDescription||a.generatedPrompt||"").trim()||"Fotografi autentik dengan pencahayaan alami dan detail realistis.",n=e.startsWith("/imagine prompt:")?e:`/imagine prompt: ${e}`;let i=(a.visualDetails||"").trim();if(!i){const s=[];(a.subject||a.subjectDescription)&&s.push((a.subject||a.subjectDescription).trim()),(a.pose||a.poseExpression&&a.poseExpression!=="-")&&s.push((a.pose||a.poseExpression).trim()),a.identityPreservation&&a.identityPreservation!=="-"&&s.push(a.identityPreservation.trim()),(a.outfit||a.outfitMaterial&&a.outfitMaterial!=="-")&&s.push((a.outfit||a.outfitMaterial).trim()),(a.environment||a.environmentBackground&&a.environmentBackground!=="-")&&s.push((a.environment||a.environmentBackground).trim()),(a.composition||a.compositionPerspective&&a.compositionPerspective!=="-")&&s.push((a.composition||a.compositionPerspective).trim()),(a.lighting||a.lightingColor&&a.lightingColor!=="-")&&s.push((a.lighting||a.lightingColor).trim()),a.cameraLensDof&&a.cameraLensDof!=="-"&&s.push(a.cameraLensDof.trim()),(a.style||a.photoStyleRealism&&a.photoStyleRealism!=="-")&&s.push((a.style||a.photoStyleRealism).trim()),i=s.join(`

`)}return i?`${n}

${i}`:n}assembleOptimalImagePrompt(a,e=[]){const n=((a==null?void 0:a.mainDescription)||(a==null?void 0:a.generatedPrompt)||"").trim()||"Fotografi autentik dengan pencahayaan alami dan detail realistis.",i=n.startsWith("/imagine prompt:")?n:`/imagine prompt: ${n}`;let s=((a==null?void 0:a.visualDetails)||"").trim();if(!s){const h=[];(a!=null&&a.subject||a!=null&&a.subjectDescription)&&h.push((a.subject||a.subjectDescription).trim()),(a!=null&&a.pose||a!=null&&a.poseExpression&&a.poseExpression!=="-")&&h.push((a.pose||a.poseExpression).trim()),a!=null&&a.identityPreservation&&a.identityPreservation!=="-"&&h.push(a.identityPreservation.trim()),(a!=null&&a.outfit||a!=null&&a.outfitMaterial&&a.outfitMaterial!=="-")&&h.push((a.outfit||a.outfitMaterial).trim()),(a!=null&&a.environment||a!=null&&a.environmentBackground&&a.environmentBackground!=="-")&&h.push((a.environment||a.environmentBackground).trim()),(a!=null&&a.composition||a!=null&&a.compositionPerspective&&a.compositionPerspective!=="-")&&h.push((a.composition||a.compositionPerspective).trim()),(a!=null&&a.lighting||a!=null&&a.lightingColor&&a.lightingColor!=="-")&&h.push((a.lighting||a.lightingColor).trim()),a!=null&&a.cameraLensDof&&a.cameraLensDof!=="-"&&h.push(a.cameraLensDof.trim()),(a!=null&&a.style||a!=null&&a.photoStyleRealism&&a.photoStyleRealism!=="-")&&h.push((a.style||a.photoStyleRealism).trim()),s=h.join(`

`)}const r=[i];s&&r.push(s);const t=(a==null?void 0:a.aspectRatio)||"16:9";let l=(e||[]).map(h=>h.startsWith("/")?h:`/${h}`).join(" ");l?l+=` --ar ${t} --style raw --v 6.1`:l=`--ar ${t} --style raw --v 6.1`,r.push(l);let d=((a==null?void 0:a.negativePrompt)||(a==null?void 0:a.contextualNegativePrompt)||"").trim();const m=!!(a!=null&&a.photoStyleRealism&&/3d|render|octane|chibi|doll|figurine|toy/i.test(a.photoStyleRealism)||a!=null&&a.subjectDescription&&/3d|chibi|doll|figurine|toy/i.test(a.subjectDescription)||a!=null&&a.mainDescription&&/3d|chibi|doll|figurine|toy/i.test(a.mainDescription));d||(d=m?"real human photo, photographic grain, wrinkled skin, bad 3d render, distorted limbs, extra fingers, blurry, watermark, text":"cartoon, 3d render, illustration, deformed, blurry, watermark, text");let p=d.replace(/^--no\s+/i,"").trim();return m&&(p=p.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/illustration,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),p.includes("real human photo")||(p=`real human photo, photographic grain, ${p}`.replace(/^,\s*/,""))),r.push(`--no ${p}`),r.join(`

`)}matchImageShorthands(a,e=null){const n=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+((e==null?void 0:e.subject)||"")+" "+((e==null?void 0:e.subjectDescription)||"")+" "+((e==null?void 0:e.outfit)||"")+" "+((e==null?void 0:e.outfitMaterial)||"")+" "+((e==null?void 0:e.pose)||"")+" "+((e==null?void 0:e.poseExpression)||"")+" "+((e==null?void 0:e.environment)||"")+" "+((e==null?void 0:e.environmentBackground)||"")+" "+((e==null?void 0:e.composition)||"")+" "+((e==null?void 0:e.compositionPerspective)||"")+" "+((e==null?void 0:e.lighting)||"")+" "+((e==null?void 0:e.lightingColor)||"")+" "+((e==null?void 0:e.cameraLensDof)||"")+" "+((e==null?void 0:e.style)||"")+" "+((e==null?void 0:e.photoStyleRealism)||"")+" "+(Array.isArray(e==null?void 0:e.suggestedShorthands)?e.suggestedShorthands.join(" "):"")+" "+(Array.isArray(e==null?void 0:e.optimizationNeeds)?e.optimizationNeeds.join(" "):"")).toLowerCase(),i=[];if(Array.isArray(e==null?void 0:e.suggestedShorthands))for(const t of e.suggestedShorthands){const o=(t||"").trim();if(!o)continue;const l=o.startsWith("/")?o.toLowerCase():`/${o.toLowerCase()}`,d=this.catalog.find(m=>m.code.toLowerCase()===l);d&&i.push({code:d.code,name:d.name,category:d.category,functionGroup:d.functionGroup||`GROUP_${d.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:d.description,priority:"WAJIB",isPrimary:!0,checked:!0,reason:"Teridentifikasi langsung oleh Vision AI dari karakteristik gambar aktual",source:"IMAGE_VISION_AI"})}for(const t of this.catalog){const o=(t.negativeTriggers||[]).map(p=>p.toLowerCase());if(o.length>0&&o.some(p=>n.includes(p)))continue;const l=(t.semanticTriggers||[]).map(p=>p.toLowerCase());let d=!1,m="";n.includes(t.code.toLowerCase())?(d=!0,m=`Terdeteksi dari direktif visual: ${t.code}`):l.some(p=>n.includes(p))?(d=!0,m=`Teridentifikasi dari atribut visual gambar (${t.name})`):Array.isArray(e==null?void 0:e.optimizationNeeds)&&e.optimizationNeeds.some(p=>t.code.toLowerCase().includes(p.toLowerCase())||(t.name||"").toLowerCase().includes(p.toLowerCase())||l.some(h=>p.toLowerCase().includes(h)))&&(d=!0,m=`Direkomendasikan untuk optimasi visual gambar (${t.name})`),d&&i.push({code:t.code,name:t.name,category:t.category,functionGroup:t.functionGroup||`GROUP_${t.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:t.description,priority:t.priority||"WAJIB",isPrimary:!0,checked:!0,reason:m||t.whenToUse||"Sesuai dengan karakter visual gambar",source:"IMAGE_ANALYSIS"})}const s=new Set,r=[];for(const t of i)s.has(t.functionGroup)||(s.add(t.functionGroup),r.push(t));return r}getStandard13VisualBreakdown(a){const e=(a==null?void 0:a.aspectRatio)||"16:9",n=e==="9:16"||e==="3:4";return{Subject:((a==null?void 0:a.subject)||(a==null?void 0:a.subjectDescription)||(a==null?void 0:a.mainDescription)||"Subjek visual utama teridentifikasi").trim(),Pose:((a==null?void 0:a.pose)||(a==null?void 0:a.poseExpression)||"Postur alami terpusat").trim(),Framing:((a==null?void 0:a.framing)||(n?"Vertical portrait framing":"Eye-level balanced framing")).trim(),"Camera / Angle":((a==null?void 0:a.cameraAngle)||(a==null?void 0:a.camera)||(a==null?void 0:a.cameraLensDof)||"Eye-level angle, 50mm prime f/2.8").trim(),Lighting:((a==null?void 0:a.lighting)||(a==null?void 0:a.lightingColor)||"Pencahayaan terukur dengan gradasi bayangan natural").trim(),Environment:((a==null?void 0:a.environment)||(a==null?void 0:a.environmentBackground)||"Setting lingkungan terkoordinasi secara alami").trim(),Background:((a==null?void 0:a.background)||(a==null?void 0:a.environmentBackground)||"Latar belakang dengan separasi kedalaman terukur").trim(),Outfit:((a==null?void 0:a.outfit)||(a==null?void 0:a.outfitMaterial)||"Pakaian rapi dengan tekstur bahan autentik").trim(),Expression:((a==null?void 0:a.expression)||"Ekspresi wajar, fokus tenang, dan proporsi alami").trim(),Composition:((a==null?void 0:a.composition)||(a==null?void 0:a.compositionPerspective)||"Komposisi terpusat seimbang rule-of-thirds").trim(),Style:((a==null?void 0:a.style)||(a==null?void 0:a.photoStyleRealism)||"Fotografi realistis autentik").trim(),"Color / Tone":((a==null?void 0:a.colorTone)||"Palet warna alami dengan kontras seimbang").trim(),"Aspect Ratio":e}}analyzeImageShorthandsBlueprint(a,e){const n=new Set,i=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+Object.values(e||{}).filter(c=>typeof c=="string").join(" ")).toLowerCase(),s=new Map;Array.isArray(e==null?void 0:e.suggestedShorthands)&&e.suggestedShorthands.forEach(c=>{const k=(c||"").trim().toLowerCase(),v=k.startsWith("/")?k:`/${k}`;s.set(v,100)});for(const c of this.catalog){const k=c.code.toLowerCase();let v=s.get(k)||0;i.includes(k)&&(v+=35);const T=(c.semanticTriggers||[]).map(R=>R.toLowerCase());for(const R of T)R&&i.includes(R)&&(v+=20);if(Array.isArray(e==null?void 0:e.optimizationNeeds))for(const R of e.optimizationNeeds){const f=(R||"").toLowerCase();f&&(T.some(O=>f.includes(O))||(c.name||"").toLowerCase().includes(f))&&(v+=25)}(c.negativeTriggers||[]).map(R=>R.toLowerCase()).some(R=>R&&i.includes(R))&&(v=-100),v>0&&s.set(k,v)}const r=[];for(const c of this.catalog){const k=s.get(c.code.toLowerCase())||0;k>0&&r.push({item:c,score:k})}r.sort((c,k)=>k.score-c.score);const t=[],o=new Set;for(const{item:c}of r){const k=c.code.toLowerCase(),v=c.functionGroup||c.category;if(!o.has(v)&&!n.has(k)&&(o.add(v),n.add(k),t.push({code:c.code,name:c.name,category:c.category,functionGroup:v,description:c.description,target:c.target||"Visual Utama",priority:"WAJIB",isPrimary:!0,checked:!0,active:!0,reason:`Mewakili fungsi visual inti (${c.name}) dari analisis gambar aktual`,source:(s.get(k)||0)>=100?"VISION_AI":"IMAGE_ANALYSIS",equivalentTo:c.equivalentTo||[]}),t.length>=8))break}const l=[],d=new Set;for(const{item:c}of r){const k=c.code.toLowerCase(),v=c.functionGroup||c.category;if(!o.has(v)&&!d.has(v)&&!n.has(k)&&(d.add(v),n.add(k),l.push({code:c.code,name:c.name,category:c.category,functionGroup:v,description:c.description,target:c.target||"Visual Pendukung",priority:"OPSIONAL",isPrimary:!1,checked:!1,active:!1,relationship:"COMPLEMENTARY",reason:`Melengkapi fungsi visual pada domain ${c.category} (${c.name})`,source:"IMAGE_ANALYSIS",equivalentTo:c.equivalentTo||[]}),l.length>=8))break}const m=[],p=new Set([...t.map(c=>c.category),...l.map(c=>c.category)]),h=new Set([...o,...d]);for(const{item:c}of r){const k=c.code.toLowerCase(),v=c.functionGroup||c.category;if(!n.has(k)&&(h.has(v)||p.has(c.category))&&(n.add(k),m.push({code:c.code,name:c.name,category:c.category,functionGroup:v,description:c.description,target:c.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif sinonim untuk fungsi ${v} (${c.name})`,source:"IMAGE_ANALYSIS",equivalentTo:c.equivalentTo||[]}),m.length>=8))break}if(m.length<5)for(const c of this.catalog){const k=c.code.toLowerCase(),v=c.functionGroup||c.category;if(!n.has(k)&&(p.has(c.category)||h.has(v))){if((c.negativeTriggers||[]).map(y=>y.toLowerCase()).some(y=>y&&i.includes(y)))continue;if(n.add(k),m.push({code:c.code,name:c.name,category:c.category,functionGroup:v,description:c.description,target:c.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif variasi gaya dalam domain ${c.category}`,source:"CATALOG_ALTERNATIVE",equivalentTo:c.equivalentTo||[]}),m.length>=8)break}}const g=[],A=[];for(const c of this.catalog){const k=c.code.toLowerCase();if(n.has(k))continue;const T=(c.negativeTriggers||[]).map(R=>R.toLowerCase()).some(R=>R&&i.includes(R)),y=!p.has(c.category);if((T||y)&&(n.add(k),A.push({code:c.code,target:c.target||c.name,reason:T?`Bertentangan dengan kondisi visual gambar aktual (${c.name})`:`Tidak relevan dengan subjek atau medium gambar (${c.category})`}),A.length>=10))break}return{primaryShorthands:t,relatedShorthands:l,similarShorthands:m,conflicts:g,exclusions:A}}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:n="image/jpeg",referencePrompt:i="",preferredLang:s="id",visualTelemetry:r=null}){const t=P.getApiKey().trim(),o=P.getModel()||"gemini-2.0-flash";let l=null,d="LOCAL_ENGINE",m=!1,p="";if(t&&e)try{const C=await this.executeMultimodalImageAnalysis(e,n,i,t,o,s);C&&(C.mainDescription||C.subjectDescription)&&(l=C,d="GEMINI_AI",m=!0,this.status=B.CONNECTED,this.lastError=null,p=`🌐 Analisa Gambar AI AKTIF (${P.getModel()||o}) — Vision analysis mendalam dari gambar aktual.`)}catch(C){console.warn("Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:",C),this.lastError=C.message}l||(l=this.generateDynamicImageAnalysis(a,e,i,s,r),d=t?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",m=!!t,p=m?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung).");const h=this.assembleStructuredImagePrompt(l),g=this.getStandard13VisualBreakdown(l),{primaryShorthands:A,relatedShorthands:c,similarShorthands:k,conflicts:v,exclusions:T}=this.analyzeImageShorthandsBlueprint(h,l),y=A.map(C=>C.code),R=this.assembleOptimalImagePrompt(l,y),f={primaryAction:"REPRESENTASI_VISUAL",primaryTarget:"Karakteristik Visual Gambar Aktual",summary:`Gambar ini merepresentasikan ${l.subjectDescription||l.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`,priority:"HIGH",category:"IMAGE_TO_PROMPT"},O=[{entity:"STRUKTUR_PROMPT",label:"Penyesuaian Struktur Prompt",description:"Menyusun urutan deskripsi sistematis: subjek utama → atribut pose & busana → pencahayaan & suasana → framing kamera."},{entity:"PENJELASAN_KATA",label:"Penyederhanaan & Presisi Frasa",description:"Mengonversi elemen visual menjadi deskripsi spesifik dan bahasa alami yang langsung dipahami oleh engine generatif AI."},{entity:"PENEKANAN_VISUAL",label:"Penekanan Elemen Visual Kunci",description:"Mempertegas karakteristik pencahayaan, tekstur material, dan proporsi nyata dari gambar sumber."},{entity:"PENGUATAN_DETAIL",label:"Penguatan Detail Mikro",description:"Menambahkan detail resolusi tinggi, kedalaman ruang (DoF), dan mikrokontras natural untuk menghindari artefak."},{entity:"PARAMETER_TEKNIS",label:"Integrasi Parameter AI Generatif",description:`Menambahkan parameter teknis standar (--ar ${l.aspectRatio||"16:9"} --style raw --v 6.1) dan direktif negative prompt (--no) untuk stabilitas hasil visual.`}],b=[{entity:"SUBJEK_UTAMA",label:"Subjek Utama & Identitas Visual",description:l.subjectDescription||l.subject||l.mainDescription},{entity:"POSE_EKSPRESI",label:"Pose & Ekspresi",description:l.poseExpression||l.pose||"Postur alami dan ekspresi wajah subjek asli"},{entity:"PAKAIAN_BUSANA",label:"Pakaian & Aksesoris",description:l.outfitMaterial||l.outfit||"Gaya pakaian dan tekstur material busana"},{entity:"FRAMING_KAMERA",label:"Framing & Angle Kamera",description:l.cameraLensDof||l.camera||"Sudut pandang lensa kamera dan rasio framing"},{entity:"BACKGROUND_ENV",label:"Background & Environment",description:l.environmentBackground||l.environment||"Setting lokasi dan latar belakang asli"},{entity:"KOMPOSISI",label:"Komposisi Visual",description:l.compositionPerspective||l.composition||"Pusat perhatian visual dan keseimbangan bidang"},{entity:"PENCAHAYAAN",label:"Pencahayaan & Suasana",description:l.lightingColor||l.lighting||"Arah pencahayaan, kontras shadow-highlight, dan tone ambient"}],I={from:`Kondisi visual aktual dari file gambar sumber: ${l.mainDescription||"Subjek dan komposisi visual nyata"}`,to:`Spesifikasi prompt AI optimal terstruktur lengkap dengan shorthand terpasang (${y.join(" ")}), parameter teknis (--ar ${l.aspectRatio||"16:9"} --style raw --v 6.1), dan negative prompt.`,summary:"💡 Translasi analitis representasi visual: Gambar sumber dianalisis secara objektif menjadi spesifikasi prompt AI generatif tanpa melakukan editing atau perombakan gambar asli."};return{mode:"IMAGE_TO_PROMPT",source:d,isOnlineActive:m,engineNotice:p,generatedPrompt:h,optimalPrompt:R,cleanText:h,visionData:l,visualBreakdown:g,primaryShorthands:A,relatedShorthands:c,similarShorthands:k,recommendations:[...A,...c,...k],installedShorthands:y,conflicts:v,exclusions:T,editAreas:O,lockedAreas:b,unchangedAreas:b.map(C=>C.description),visualTransformation:I,intent:f,referencePrompt:i||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:n,aspectRatio:l.aspectRatio||"16:9"},timestamp:new Date().toISOString()}}async executeMultimodalImageAnalysis(a,e,n,i,s,r="id"){var A,c,k,v;const o=[(s||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((T,y,R)=>T&&R.indexOf(T)===y&&!T.includes("1.5-pro")&&!T.includes("2.5-pro")&&(T==="gemini-3.5-flash-lite"||!T.includes("3.5")&&!T.includes("3.8")));o.length===0&&o.push("gemini-2.0-flash","gemini-1.5-flash");const l=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!l||l.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let d=(e||"image/jpeg").toLowerCase().trim();d.includes("png")?d="image/png":d.includes("webp")?d="image/webp":d.includes("heic")?d="image/heic":d.includes("heif")?d="image/heif":d="image/jpeg";const m=`Anda adalah Ahli Analisis Gambar Vision AI & Prompt Engineering Profesional.
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

Kembalikan respons HANYA dalam format JSON valid dengan 13 atribut visual lengkap:
{
  "mainDescription": "Ringkasan prompt deskriptif utama dari gambar aktual...",
  "visualDetails": "Rincian visual komprehensif mencakup subjek, busana, pose, ekspresi, komposisi, pencahayaan, latar belakang, dan karakter fotografi...",
  "subject": "Deskripsi subjek...",
  "pose": "Pose subjek...",
  "framing": "Framing shot (misal: medium shot, closeup, wide)...",
  "cameraAngle": "Sudut dan lensa kamera (misal: eye-level angle, 50mm lens)...",
  "lighting": "Karakter pencahayaan...",
  "environment": "Lingkungan sekitar...",
  "background": "Latar belakang...",
  "outfit": "Detail busana/pakaian...",
  "expression": "Ekspresi wajah/karakter...",
  "composition": "Komposisi visual...",
  "style": "Gaya fotografi atau visual...",
  "colorTone": "Warna dominan dan tone...",
  "aspectRatio": "16:9",
  "suggestedShorthands": ["/portrait", "/studio", "/suit", "/eyelevel", "/softlight", "/realistic", "/rawphoto"],
  "negativePrompt": "negative prompt yang relevan (misal: deformed, bad anatomy, blurry, watermark; sesuaikan dengan jenis subjek)"
}`,p=n&&n.trim()?`Analisis gambar ini dengan panduan pengguna: "${n.trim()}".`:"Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata.";let h=null;const g=[];for(const T of o){const y=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(i)}`,R=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const f of R)try{const O={contents:[{role:"user",parts:[{text:`${m}

Instruksi: ${p}`},{inlineData:{mimeType:d,data:l}}]}],generationConfig:f},b=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(!b.ok){const w=await b.text();if(b.status===400&&f.responseMimeType)continue;throw new Error(`HTTP ${b.status}: ${w}`)}const C=((k=(c=(A=(await b.json()).candidates)==null?void 0:A[0])==null?void 0:c.content)==null?void 0:k.parts)||[];let N="";for(const w of C)w.text&&!w.thought&&(N+=w.text);if(!N&&((v=C[0])!=null&&v.text)&&(N=C[0].text),!N)throw new Error("Respon Gemini kosong.");let S=null;try{S=this.extractJson(N)}catch{S={mainDescription:N.replace(/```[a-z]*\n?/gi,"").trim(),visualDetails:""}}if(S&&typeof S=="object"){const w=S.mainDescription||S.prompt||S.generatedPrompt||S.description||S.summary||S.subjectDescription||S.subject||S.visualDetails||S.details||S.analysis;if(w)return S.mainDescription||(S.mainDescription=String(w).trim()),this.lastSuccessfulModel=T,T!==s&&P.setModel(T),S}}catch(O){h=O,g.push(`${T}: ${O.message}`),console.warn(`Model ${T} multimodal gagal:`,O.message);break}}throw h||new Error(`Gagal menganalisis gambar dengan Gemini API (${g.join(" | ")}).`)}generateDynamicImageAnalysis(a,e,n="",i="id",s=null){const r=s||(a==null?void 0:a.visualTelemetry)||Ga(null,{filename:a==null?void 0:a.name,width:a==null?void 0:a.width,height:a==null?void 0:a.height});return Xa(r,{preferredLang:i,referencePrompt:n,filename:a==null?void 0:a.name})}async analyzeShorthandImprove(a,e=null){var s,r,t,o,l;const n=await this.analyzePrompt(a,e),i={conflictCount:((s=n.conflicts)==null?void 0:s.length)||0,redundancyCount:(((r=n.recommendations)==null?void 0:r.length)||0)-(((t=n.primaryShorthands)==null?void 0:t.length)||0),isOptimized:(((o=n.conflicts)==null?void 0:o.length)||0)===0,improvementAdvice:((l=n.conflicts)==null?void 0:l.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...n,mode:"SHORTHAND_IMPROVE",isImageRepair:!1,diagnostics:i}}async analyzeImageRepair({imageFile:a=null,imageBase64:e=null,mimeType:n="image/jpeg",notesPrompt:i="",preferredLang:s="id"}){const r=P.getApiKey().trim(),t=P.getModel()||"gemini-2.0-flash";let o=null,l="LOCAL_ENGINE",d=!1,m="";if(r&&e)try{const f=await this.executeMultimodalImageRepairAnalysis(e,n,i,r,t,s);f&&(f.optimizationAreas||f.visualConditionSummary)&&(o=f,l="GEMINI_AI",d=!0,this.status=B.CONNECTED,this.lastError=null,m=`🌐 Analisa Perbaikan AI AKTIF (${P.getModel()||t}) — Diagnosis visual komprehensif dari gambar asli.`)}catch(f){console.warn("Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:",f),this.lastError=f.message}o||(o=this.generateHeuristicImageRepair(a,i,s),l=r?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",d=!!r,m=d?`🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).");const{visualConditionSummary:p="Gambar telah dianalisis secara visual.",optimizationAreas:h=[],goodAspects:g=[],repairInstructions:A="Optimalkan kualitas dan karakteristik visual foto."}=o,c={PRIMARY_ISSUE:1,SECONDARY_ISSUE:2,OPTIMIZATION:3,PRESERVATION:4,FINISHING:5},k=[];for(const f of h){const O=Array.isArray(f.recommendedCodes)?f.recommendedCodes:[];let b=null;for(const C of O){const N=C.startsWith("/")?C:`/${C}`,S=this.catalog.find(w=>w.code.toLowerCase()===N.toLowerCase());if(S){b=S;break}}if(!b){const C=`${f.aspect||""} ${f.problem||""} ${f.suggestedAction||""}`.toLowerCase();for(const N of this.catalog)if((N.semanticTriggers||[]).map(w=>w.toLowerCase()).some(w=>C.includes(w))||C.includes(N.name.toLowerCase())){b=N;break}}const I=b?b.code:O[0]?O[0].startsWith("/")?O[0]:`/${O[0]}`:null;I&&k.push({code:I,name:(b==null?void 0:b.name)||I.replace("/","").toUpperCase(),category:(b==null?void 0:b.category)||"IMAGE_QUALITY",functionGroup:(b==null?void 0:b.functionGroup)||`GROUP_${I.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:(b==null?void 0:b.description)||f.suggestedAction||"Optimasi visual gambar",issuePriority:f.priority||"OPTIMIZATION",priorityWeight:c[f.priority]||3,aspect:f.aspect||"Aspek Visual",problem:f.problem||"",reason:f.reason||`Diperlukan untuk ${f.suggestedAction||"mengoptimalkan aspek ini"}.`,priority:"WAJIB",isPrimary:!0,checked:!0,source:"DIAGNOSTIC_REPAIR"})}const v=new Set,T=[];for(const f of k){const O=f.functionGroup;v.has(O)||(v.add(O),T.push(f))}T.sort((f,O)=>{const b=(f.priorityWeight||3)-(O.priorityWeight||3);return b!==0?b:f.code.localeCompare(O.code)});const y=T.map(f=>f.code);let R=A.trim();return y.length>0&&(R=`${R} ${y.join(" ")}`.trim()),{mode:"SHORTHAND_IMPROVE",isImageRepair:!0,source:l,isOnlineActive:d,engineNotice:m,visualConditionSummary:p,optimizationAreas:h,goodAspects:g,repairInstructions:A,diagnosedShorthands:T,installedShorthands:y,optimalPrompt:R,primaryShorthands:T,relatedShorthands:[],recommendations:T,conflicts:[],exclusions:[],editAreas:h.map(f=>({entity:f.aspect||"AREA_OPTIMASI",description:f.problem||f.suggestedAction||""})),lockedAreas:g.map(f=>({entity:"ASPEK_SUDAH_BAIK",description:f})),unchangedAreas:g,intent:{primaryAction:"DIAGNOSIS_PERBAIKAN_GAMBAR",primaryTarget:"Kondisi Visual Foto",summary:p,priority:"HIGH",category:"IMAGE_QUALITY"},diagnostics:{issueCount:h.length,goodCount:g.length,isOptimized:!1,improvementAdvice:`Ditemukan ${h.length} area visual yang membutuhkan perbaikan. Menampilkan ${T.length} shorthand rekomendasi tanpa batasan.`},imageInfo:{name:(a==null?void 0:a.name)||"repair-source.jpg",size:(a==null?void 0:a.size)||0,type:n},timestamp:new Date().toISOString()}}async executeMultimodalImageRepairAnalysis(a,e,n,i,s,r="id"){var A,c,k,v;const o=[(s||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((T,y,R)=>T&&R.indexOf(T)===y&&!T.includes("1.5-pro")&&!T.includes("2.5-pro")&&(T==="gemini-3.5-flash-lite"||!T.includes("3.5")&&!T.includes("3.8")));o.length===0&&o.push("gemini-2.0-flash","gemini-1.5-flash");const l=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!l||l.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let d=(e||"image/jpeg").toLowerCase().trim();d.includes("png")?d="image/png":d.includes("webp")?d="image/webp":d.includes("heic")?d="image/heic":d.includes("heif")?d="image/heif":d="image/jpeg";const m=`Anda adalah Ahli Diagnosa Visual & Optimasi Fotografi Digital profesional.
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
7. Gunakan bahasa: ${r==="en"?"English":"Bahasa Indonesia"}.

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
}`,p=n&&n.trim()?`Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${n.trim()}".`:"Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.";let h=null;const g=[];for(const T of o){const y=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(i)}`,R=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const f of R)try{const O={contents:[{role:"user",parts:[{text:`${m}

Instruksi: ${p}`},{inlineData:{mimeType:d,data:l}}]}],generationConfig:f},b=await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)});if(!b.ok){const w=await b.text();if(b.status===400&&f.responseMimeType)continue;throw new Error(`HTTP ${b.status}: ${w}`)}const C=((k=(c=(A=(await b.json()).candidates)==null?void 0:A[0])==null?void 0:c.content)==null?void 0:k.parts)||[];let N="";for(const w of C)w.text&&!w.thought&&(N+=w.text);if(!N&&((v=C[0])!=null&&v.text)&&(N=C[0].text),!N)throw new Error("Respon Gemini kosong.");let S=null;try{S=this.extractJson(N)}catch{S={visualConditionSummary:N.replace(/```[a-z]*\n?/gi,"").trim(),optimizationAreas:[]}}if(S&&typeof S=="object"){const w=S.visualConditionSummary||S.summary||S.diagnosis||S.description;if(w||Array.isArray(S.optimizationAreas)&&S.optimizationAreas.length>0)return!S.visualConditionSummary&&w&&(S.visualConditionSummary=String(w).trim()),this.lastSuccessfulModel=T,T!==s&&P.setModel(T),S}}catch(O){h=O,g.push(`${T}: ${O.message}`),console.warn(`Model ${T} multimodal repair gagal:`,O.message);break}}throw h||new Error(`Gagal menganalisis perbaikan gambar dengan Gemini API (${g.join(" | ")}).`)}generateHeuristicImageRepair(a,e="",n="id"){const i=(e||"").toLowerCase(),s=!!(e&&e.trim()),r=[],t=[],o=(m,p)=>{s?m.some(h=>i.includes(h))&&r.push(p):r.push(p)};return o(["shadow","gelap","bayangan","underexposed","pekat"],{aspect:"Shadow / Bayangan",problem:"Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan tanpa mencerahkan berlebih",recommendedCodes:["/shadowrecovery"],reason:"Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami."}),o(["highlight","terang","silau","blown","overexposed","putih"],{aspect:"Highlight / Pencahayaan Terang",problem:"Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.",priority:"PRIMARY_ISSUE",suggestedAction:"Pengendalian intensitas highlight",recommendedCodes:["/highlightcontrol"],reason:"Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus."}),i.includes("tajam")||i.includes("buram")||i.includes("blur")||i.includes("fokus")||i.includes("kabur")?r.push({aspect:"Ketajaman & Fokus",problem:"Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.",priority:"PRIMARY_ISSUE",suggestedAction:"Peningkatan ketajaman tepi dan kontur",recommendedCodes:["/sharpen"],reason:"Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih."}):s||t.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),i.includes("noise")||i.includes("bintik")||i.includes("grain")?r.push({aspect:"Noise & Grain",problem:"Terdapat gangguan bintik noise digital pada area bergradasi halus.",priority:"PRIMARY_ISSUE",suggestedAction:"Pembersihan noise digital secara selektif",recommendedCodes:["/denoise"],reason:"Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial."}):s||t.push("Tingkat noise digital berada dalam batas yang sangat rendah dan bersih."),i.includes("perspektif")||i.includes("miring")||i.includes("tilt")?r.push({aspect:"Perspektif Garis & Sudut",problem:"Garis bidang foto tampak miring atau mengalami distorsi perspektif.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi pelurusan perspektif",recommendedCodes:["/perspectivecorrection"],reason:"Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami."}):i.includes("distorsi")||i.includes("lensa")||i.includes("barrel")?r.push({aspect:"Distorsi Lensa",problem:"Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi distorsi lensa",recommendedCodes:["/lenscorrection"],reason:"Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural."}):s||t.push("Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung."),o(["kontras","contrast","keras","datar"],{aspect:"Kontras Visual",problem:"Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.",priority:"SECONDARY_ISSUE",suggestedAction:"Penerapan kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik."}),o(["balance","kuning","biru","cast","suhu","warna"],{aspect:"Keseimbangan Warna & White Balance",problem:"Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.",priority:"SECONDARY_ISSUE",suggestedAction:"Penyelarasan white balance dan netralisasi color cast",recommendedCodes:["/colorbalance"],reason:"Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna."}),(i.includes("pucat")||i.includes("kusam")||i.includes("tone")||!s&&!r.some(m=>m.recommendedCodes.includes("/naturaltone")))&&(s||r.length<8)&&r.push({aspect:"Rentang Tonal Warna",problem:"Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan."}),o(["dinamis","rentang","dynamic","range"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight."}),(i.includes("kualitas")||i.includes("detail tinggi")||i.includes("resolusi")||i.includes("definisi"))&&r.push({aspect:"Kerapatan Detail Visual",problem:"Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.",priority:"OPTIMIZATION",suggestedAction:"Peningkatan detail mikro berkualitas tinggi",recommendedCodes:["/highdetail"],reason:"Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar."}),o(["detail","pertahankan","preservasi","halus"],{aspect:"Preservasi Detail Halus",problem:"Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.",priority:"PRESERVATION",suggestedAction:"Penguncian dan perlindungan detail halus",recommendedCodes:["/detailpreservation"],reason:"Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi."}),o(["tekstur","texture","kulit","kain","permukaan"],{aspect:"Preservasi Tekstur Alami",problem:"Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material",recommendedCodes:["/texturepreservation"],reason:"Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik."}),o(["alami","natural","realis","asli","overprocess"],{aspect:"Karakter Pemrosesan Alami",problem:"Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing."}),t.length===0&&(t.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),t.push("Komposisi dan framing foto sudah proporsional."),t.push("Tidak ditemukan distorsi optik lensa yang mengganggu.")),{visualConditionSummary:`Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${r.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`,optimizationAreas:r,goodAspects:t,repairInstructions:"Lakukan perbaikan terpadu pada foto asli: pulihkan detail bayangan, kontrol highlight, seimbangkan kontras dan warna alami, serta lindungi tekstur dan detail halus dari pemrosesan berlebih."}}}function Da(u){return!u||typeof u!="string"?0:u.trim().split(/\s+/).filter(Boolean).length}function ae(u){if(!u||typeof u!="string")return 0;const a=u.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function ee(u,a=[]){if(!u||a.length===0)return 0;const e=Da(u);if(e===0)return 0;const n=a.length;return Math.min(100,Math.round(n/e*100))}function te(u){return!u||typeof u!="string"?"":u.trim()}function ne(u,a,e,n){const{status:i}=a;let s="status-unconfigured",r="Gemini: Belum diuji";return i===B.CONNECTED?(s="status-connected",r="Gemini: Tersambung"):i===B.FAILED&&(s="status-failed",r="Gemini: Gagal"),{html:`
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

        <div class="header-actions">
          <button type="button" class="status-badge ${s}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${r}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(o){o.querySelectorAll(".nav-item").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-tab");e&&e(m)})});const l=o.querySelector("#header-status-badge");l&&n&&l.addEventListener("click",()=>n())}}}const xa=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function ie(u){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${xa.map(n=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${n.id}" title="${n.description}">
      <span style="font-weight: 700; color: #93c5fd;">${n.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(n){n.querySelectorAll(".btn-preset-chip").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-preset-id"),r=xa.find(t=>t.id===s);r&&u&&u(r.prompt)})})}}}function re({currentValue:u="",onAnalyze:a,onReset:e,onClear:n,onSelectPreset:i,isAnalyzing:s=!1,isOnlineActive:r=!1,activeMode:t="ANALISA_PROMPT",onModeChange:o,uploadedImage:l=null,onImageSelected:d,onImageRemoved:m}){const p=ie(i);return{html:`
    <section class="panel analyzer-card" id="card-input">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <h2>INPUT &amp; MODE ANALISIS</h2>
        </div>
        <div style="display: flex; gap: 0.4rem;">
          ${t!=="IMAGE_TO_PROMPT"?`
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
        <button type="button" class="mode-tab-btn ${t==="SHORTHAND_IMPROVE"?"active":""}" data-mode="SHORTHAND_IMPROVE">
          <span>🛠️</span>
          <span>Analisa Shorthand Perbaikan Gambar</span>
        </button>
      </div>

      <!-- Online Shorthand Search Status Banner -->
      <div class="online-status-banner ${r?"banner-online-active":"banner-online-inactive"}" id="prompt-online-status-banner">
        <div class="banner-inner">
          ${r?`
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
      ${t==="IMAGE_TO_PROMPT"||t==="SHORTHAND_IMPROVE"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          <input type="file" id="image-file-input" accept="image/*, .jfif, .jpg, .jpeg, .png, .webp" style="display: none;" />
          ${l?`
            <div class="image-preview-card">
              <img src="${l.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${l.name||"repair-source.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${l.size?(l.size/1024).toFixed(1)+" KB":"Gambar Sumber"} &bull;
                  <span style="color: ${t==="SHORTHAND_IMPROVE"?"#c084fc":"#38bdf8"};">
                    ${t==="SHORTHAND_IMPROVE"?"SOURCE OF TRUTH Diagnosis Perbaikan":"SOURCE OF TRUTH Visual"}
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
                ${t==="SHORTHAND_IMPROVE"?"Tarik &amp; lepas gambar yang ingin didiagnosis &amp; diperbaiki di sini, atau klik untuk memilih file":"Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file"}
              </div>
              <div class="dropzone-hint">
                ${t==="SHORTHAND_IMPROVE"?"Format: JPG, PNG, WEBP — Sistem mendiagnosis kondisi visual &amp; merekomendasikan shorthand perbaikan (UNLIMITED)":"Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)"}
              </div>
            </div>
          `}
        </div>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${t==="SHORTHAND_IMPROVE"?`
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan Gambar:</strong> 
          ${l?"Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt."}
        </div>
      `:""}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 without image) -->
      ${t==="ANALISA_PROMPT"||t==="SHORTHAND_IMPROVE"&&!l?`
        <div id="presets-container">
          ${p.html}
        </div>
      `:""}

      <!-- Textarea Input (Hanya untuk Mode 1 dan Mode 3) -->
      ${t!=="IMAGE_TO_PROMPT"?`
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
            ${t==="SHORTHAND_IMPROVE"&&l?"B. Prompt Pengguna (Opsional / Catatan Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
          </label>
          <textarea 
            id="prompt-textarea" 
            class="textarea-prompt font-mono" 
            placeholder="${t==="SHORTHAND_IMPROVE"&&l?"Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
          >${u||""}</textarea>
        </div>
      `:""}

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${t==="IMAGE_TO_PROMPT"?"💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk menghasilkan deskripsi visual 13 atribut &amp; rekomendasi shorthand.":t==="SHORTHAND_IMPROVE"&&l?"💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik."}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${s?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${s?t==="IMAGE_TO_PROMPT"?"🔍 Menganalisis Gambar...":t==="SHORTHAND_IMPROVE"&&l?"🛠️ Mendiagnosis Gambar...":r?"Mencari Online...":"Menganalisis...":t==="IMAGE_TO_PROMPT"?"🔍 Analisa Gambar → Prompt":t==="SHORTHAND_IMPROVE"&&l?"🛠️ Analisa Perbaikan Gambar":t==="SHORTHAND_IMPROVE"?"🛠️ Analisa Shorthand &amp; Perbaikan":r?"🌐 Analisis Prompt":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(g){(t==="ANALISA_PROMPT"||t==="SHORTHAND_IMPROVE"&&!l)&&p.bindEvents(g);const A=g.querySelector("#prompt-textarea"),c=g.querySelector("#btn-run-analysis"),k=g.querySelector("#btn-clear-prompt"),v=g.querySelector("#btn-reset-app");g.querySelectorAll(".mode-tab-btn").forEach(b=>{b.addEventListener("click",()=>{const I=b.getAttribute("data-mode");o&&I!==t&&o(I)})});const T=g.querySelector("#image-dropzone"),y=g.querySelector("#image-file-input"),R=g.querySelector("#btn-change-image"),f=g.querySelector("#btn-remove-image");if(y){let b=function(I){if(!I)return;const C=I.type&&I.type.startsWith("image/"),N=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(I.name||"");if(!C&&!N){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const S=new FileReader;S.onload=w=>{const D=w.target.result,V=new Image;V.onload=()=>{const ma=V.naturalWidth||V.width||800,ea=V.naturalHeight||V.height||800;let sa=D,oa=null;try{let z=ma,K=ea;if(z>1280||K>1280){const ka=Math.min(1280/z,1280/K);z=Math.round(z*ka),K=Math.round(K*ka)}const Y=document.createElement("canvas");Y.width=z,Y.height=K,Y.getContext("2d").drawImage(V,0,0,z,K),oa=Ga(Y,{filename:I.name}),sa=Y.toDataURL("image/jpeg",.88)}catch(X){console.warn("Canvas processing fallback:",X),sa=D,oa=Ga(null,{filename:I.name})}d&&d({file:I,name:I.name,size:I.size,type:"image/jpeg",base64:sa,previewUrl:sa,width:ma,height:ea,visualTelemetry:oa})},V.onerror=()=>{d&&d({file:I,name:I.name,size:I.size,type:"image/jpeg",base64:D,previewUrl:D,width:0,height:0,visualTelemetry:null})},V.src=D},S.readAsDataURL(I)};var O=b;T&&(T.addEventListener("click",()=>{y.click()}),T.addEventListener("dragover",I=>{I.preventDefault(),T.classList.add("dragover")}),T.addEventListener("dragleave",()=>{T.classList.remove("dragover")}),T.addEventListener("drop",I=>{I.preventDefault(),T.classList.remove("dragover"),I.dataTransfer.files&&I.dataTransfer.files[0]&&b(I.dataTransfer.files[0])})),R&&R.addEventListener("click",()=>{y.click()}),y.addEventListener("change",()=>{y.files&&y.files[0]&&(b(y.files[0]),y.value="")})}f&&f.addEventListener("click",()=>{m&&m()}),c&&c.addEventListener("click",()=>{if(t==="IMAGE_TO_PROMPT"){if(!l){y&&y.click();return}a&&a("");return}const b=A?A.value:"";a&&a(b)}),k&&k.addEventListener("click",()=>{A&&(A.value=""),n&&n()}),v&&v.addEventListener("click",()=>{e&&e()}),A&&A.addEventListener("keydown",b=>{(b.ctrlKey||b.metaKey)&&b.key==="Enter"&&(b.preventDefault(),a&&a(A.value))})}}}function se(u=[],a,e="ANALISA_PROMPT"){const n=u&&u.length>0,i=e==="IMAGE_TO_PROMPT"?"D":"G",s=n?u.map(t=>{const o=t.type==="EDIT_VS_LOCK"||t.shorthandA&&t.shorthandA.includes("lock"),l=o?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${t.shorthandB} (Hapus ${t.shorthandA})`,d=o?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${t.shorthandA} (Hapus ${t.shorthandB})`,m=t.suggestion||oe(t);return`
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
          ${m}
        </div>
      </div>

      <div class="conflict-actions">
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="use_user_edit" data-conflict-id="${t.id}">
          ${l}
        </button>
        <button type="button" class="btn btn-secondary btn-xs btn-resolve" data-action="keep_lock" data-conflict-id="${t.id}">
          ${d}
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
          <span class="card-step-badge" style="background: ${n?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">${i}</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${n?"badge-wajib":"badge-neutral"}">
          ${n?`${u.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${n?`
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
  `,bindEvents(t){t.querySelectorAll(".btn-resolve").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-action"),d=o.getAttribute("data-conflict-id");a&&a(d,l)})})}}}function oe(u){if(u.suggestion)return u.suggestion;const a=u.shorthandA||"",e=u.shorthandB||"";if(u.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const n=a.includes("lock")?a:e,i=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${n}) dan terapkan instruksi ubah (${i}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${n}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${u.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function le({installedShorthands:u=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:n}){const i=u.length>0?u.map(t=>`
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
        ${i}
      </div>
    </div>
  `,bindEvents(t){t.querySelectorAll(".chip-remove-btn").forEach(d=>{d.addEventListener("click",m=>{m.stopPropagation();const p=d.getAttribute("data-code");e&&e(p)})});const o=t.querySelector("#btn-add-shorthand"),l=t.querySelector("#select-catalog-shorthand");o&&l&&o.addEventListener("click",()=>{const d=l.value;d&&n&&n(d)})}}}function ce({optimalPrompt:u="",installedShorthands:a=[],catalog:e=[],isOnlineActive:n=!1,isEnriching:i=!1,onCopyPrompt:s,onEnrichPrompt:r,onRemoveShorthand:t,onAddShorthand:o}){const l=le({installedShorthands:a,catalog:e,onRemoveShorthand:t,onAddShorthand:o}),d=Da(u),m=ae(u);return ee(u,a),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${d} kata &bull; ~${m} token
          </span>
          <button 
            type="button" 
            class="btn btn-enrich btn-sm" 
            id="btn-enrich-ai" 
            ${!n||i||!u?"disabled":""}
            title="${n?u?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
          >
            ${i?"⏳ MEMPERKAYA...":"✨ PERKAYA DENGAN AI"}
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
      ${l.html}
    </section>
  `,bindEvents(h){l.bindEvents(h);const g=h.querySelector("#btn-copy-main-prompt");g&&g.addEventListener("click",()=>{s&&s(u)});const A=h.querySelector("#btn-enrich-ai");A&&A.addEventListener("click",()=>{r&&!i&&n&&u&&r()})}}}function de(u){const{primaryAction:a="-",primaryTarget:e="-",summary:n="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:i="-",category:s="-"}=u||{};return{html:`
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
          <span class="intent-meta-value">${s}</span>
        </div>
        <div class="intent-meta-card">
          <span class="intent-meta-label">PRIORITAS</span>
          <span class="intent-meta-value">${i}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function ue(u=[]){const a=u.length>0?u.map(n=>`
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
        <span class="badge badge-purple">${u.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function pe(u=[],a=[]){const e=u.length>0?u.map(i=>`
        <div class="area-item-card area-locked">
          <div class="area-icon-col">
            <span class="badge badge-blue">LOCKED: ${i.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${i.label}</span>
              ${i.shorthand?`<span class="badge badge-wajib font-mono">${i.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${i.description}</p>
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
  `,bindEvents(){}}}function ge(u){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:n=""}=u||{};return{html:`
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
  `,bindEvents(){}}}function me({primaryShorthands:u=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:n=[],activeMode:i="ANALISA_PROMPT",onToggleShorthand:s}){const r=i==="IMAGE_TO_PROMPT",t=r?"A":"E",o=r?"B":"F",l=u.length>0?u:e.filter(g=>g.isPrimary!==!1&&g.priority==="WAJIB"),d=a.length>0?a:e.filter(g=>g.isPrimary===!1||g.priority!=="WAJIB"),m=l.length>0?l.map(g=>{var v,T,y;const A=n.includes(g.code),c=g.equivalentTo||((v=g.item)==null?void 0:v.equivalentTo)||[],k=g.functionGroup||((T=g.item)==null?void 0:T.functionGroup)||g.category;return`
          <div class="rec-card primary-rec-card ${A?"rec-card-active":""}" data-code="${g.code}">
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
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${g.source==="ONLINE"||g.isOnline?"ONLINE":((y=g.item)==null?void 0:y.status)||"CORE"}</span></div>
                ${c.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${c.map(R=>`<span class="alias-tag font-mono">${R}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${A?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${A?"✅ Aktif Otomatis di Prompt Optimal":"⚠️ Dilepas dari Prompt"}
              </span>
              <button 
                type="button" 
                class="btn ${A?"btn-danger":"btn-primary"} btn-xs btn-toggle-rec" 
                data-code="${g.code}"
                title="${A?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${A?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',p=d.length>0?d.map(g=>{var T;const A=n.includes(g.code),c=g.equivalentTo||((T=g.item)==null?void 0:T.equivalentTo)||[],k=g.relationship||"CONTEXTUAL",v=g.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${A?"rec-card-active":""}" data-code="${g.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${g.code}" 
                    ${A?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${g.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${k}</span>
                  ${g.source==="ONLINE"||g.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${v}" style="font-size: 0.675rem;">${g.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${g.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${g.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${g.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${k}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${g.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${g.source==="ONLINE"||g.isOnline?"ONLINE":g.source||"CORE"}</span></div>
                ${c.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${c.map(y=>`<span class="alias-tag font-mono">${y}</span>`).join(" ")}
                  </div>
                `:""}
              </div>
            </div>

            <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: ${A?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
                ${A?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
              </span>
              <button 
                type="button" 
                class="btn ${A?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
                data-code="${g.code}"
                title="${A?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
              >
                ${A?"Batal Centang":"+ Centang & Pasang"}
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
        <span class="badge badge-blue">${l.length} Aktif Otomatis</span>
      </div>

      ${l.length===0&&d.length===0?`
        <div class="empty-recs-notice" style="padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.25); border-radius: var(--radius-sm); color: #93c5fd; font-size: 0.85rem; margin-bottom: 0.85rem;">
          ℹ️ Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.
        </div>
      `:""}

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Mewakili instruksi langsung dari prompt user. Otomatis terpasang [✓] dan masuk ke Prompt Optimal dengan deduplikasi fungsi terbaik.
      </p>

      <div class="rec-grid">
        ${m}
      </div>
    </section>

    <!-- CARD: SHORTHAND BERHUBUNGAN (RELATED SHORTHAND) -->
    <section class="panel analyzer-card" id="card-related-shorthands">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">${o}</span>
          <h2>SHORTHAND BERHUBUNGAN (RELATED SHORTHAND)</h2>
        </div>
        <span class="badge badge-purple">${d.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${p}
      </div>
    </section>
  `,bindEvents(g){g.querySelectorAll(".btn-toggle-rec").forEach(A=>{A.addEventListener("click",c=>{c.stopPropagation();const k=A.getAttribute("data-code");s&&s(k)})}),g.querySelectorAll(".related-checkbox").forEach(A=>{A.addEventListener("change",c=>{c.stopPropagation();const k=A.getAttribute("data-code");s&&s(k)})})}}}function he(u=[],a=[],e){const n=u.length>0?u.map(s=>{const r=a.includes(s.code),t=s.equivalentTo||[],o=s.functionGroup||s.category;return`
      <div class="rec-card similar-rec-card ${r?"rec-card-active":""}" data-code="${s.code}">
        <div class="related-item-content">
          <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                class="similar-checkbox" 
                data-code="${s.code}" 
                ${r?"checked":""} 
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
                ${t.map(l=>`<span class="alias-tag font-mono">${l}</span>`).join(" ")}
              </div>
            `:""}
          </div>
        </div>

        <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: ${r?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
            ${r?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
          </span>
          <button 
            type="button" 
            class="btn ${r?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
            data-code="${s.code}"
            title="${r?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
          >
            ${r?"Batal Centang":"+ Centang & Pasang"}
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
        ${n}
      </div>
    </section>
  `,bindEvents(s){s&&(s.querySelectorAll(".similar-checkbox").forEach(r=>{r.addEventListener("change",t=>{t.stopPropagation();const o=r.getAttribute("data-code");e&&e(o)})}),s.querySelectorAll("#card-similar-shorthands .btn-toggle-rec").forEach(r=>{r.addEventListener("click",t=>{t.stopPropagation();const o=r.getAttribute("data-code");e&&e(o)})}))}}}function ke(u=[],a="ANALISA_PROMPT"){const e=u.length,n=a==="IMAGE_TO_PROMPT"?"E":"H",i=e>0?u.map(r=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${r.code}</span>
            <span class="exclusion-target">&bull; ${r.target}</span>
          </div>
          <p class="exclusion-reason">
            ${r.reason}
          </p>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada shorthand yang dikecualikan.</div>';return{html:`
    <section class="panel analyzer-card" id="card-exclusions">
      <div class="card-header exclusions-toggle-header" id="header-exclusions" role="button" tabindex="0" title="Klik untuk menampilkan atau menyembunyikan daftar pengecualian">
        <div class="card-title">
          <span class="card-step-badge">${n}</span>
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
          ${i}
        </div>
      </div>
    </section>
  `,bindEvents(r){if(!r)return;const t=r.querySelector("#btn-toggle-exclusions"),o=r.querySelector("#exclusions-content"),l=r.querySelector("#header-exclusions");if(!t||!o)return;const d=m=>{m&&(m.preventDefault(),m.stopPropagation()),o.style.display==="none"||!o.style.display?(o.style.display="block",t.setAttribute("aria-expanded","true"),t.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,t.classList.remove("btn-secondary"),t.classList.add("btn-outline")):(o.style.display="none",t.setAttribute("aria-expanded","false"),t.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,t.classList.remove("btn-outline"),t.classList.add("btn-secondary"))};t.addEventListener("click",d),l&&(l.addEventListener("click",m=>{m.target.closest("#btn-toggle-exclusions")||d(m)}),l.addEventListener("keydown",m=>{if(m.key==="Enter"||m.key===" "){if(m.target.closest("#btn-toggle-exclusions"))return;d(m)}}))}}}function be({analysisResult:u,currentPrompt:a,catalog:e,isAnalyzing:n,isOnlineActive:i=!1,isEnriching:s=!1,activeMode:r="ANALISA_PROMPT",uploadedImage:t=null,onModeChange:o,onImageSelected:l,onImageRemoved:d,onAnalyze:m,onReset:p,onClear:h,onSelectPreset:g,onCopyPrompt:A,onCopyGeneratedPrompt:c,onEnrichPrompt:k,onAddShorthand:v,onRemoveShorthand:T,onToggleRecommendation:y,onResolveConflict:R}){var ua;const{optimalPrompt:f="",generatedPrompt:O="",visualBreakdown:b=null,isImageRepair:I=!1,visualConditionSummary:C="",optimizationAreas:N=[],goodAspects:S=[],diagnosedShorthands:w=[],installedShorthands:D=[],conflicts:V=[],intent:ma={},editAreas:ea=[],lockedAreas:sa=[],unchangedAreas:oa=[],visualTransformation:X={},primaryShorthands:z=[],relatedShorthands:K=[],similarShorthands:Y=[],recommendations:ha=[],exclusions:ka=[]}=u||{};function E(M){switch(M){case"PRIMARY_ISSUE":return'<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';case"SECONDARY_ISSUE":return'<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';case"OPTIMIZATION":return'<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';case"PRESERVATION":return'<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';case"FINISHING":return'<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';default:return'<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>'}}const L=re({currentValue:a,onAnalyze:m,onReset:p,onClear:h,onSelectPreset:g,isAnalyzing:n,isOnlineActive:i,activeMode:r,onModeChange:o,uploadedImage:t,onImageSelected:l,onImageRemoved:d}),W=se(V,R,r),Z=ce({optimalPrompt:f,installedShorthands:D,catalog:e,isOnlineActive:i,isEnriching:s,onCopyPrompt:A,onEnrichPrompt:k,onRemoveShorthand:T,onAddShorthand:v}),F=de(ma),ta=ue(ea),na=pe(sa,oa),Aa=ge(X),ba=me({primaryShorthands:z,relatedShorthands:K,recommendations:ha,installedShorthands:D,activeMode:r,onToggleShorthand:y}),la=he(Y,D,y),J=ke(ka,r);return r==="IMAGE_TO_PROMPT"?O?{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${L.html}

        <!-- 2. PROMPT HASIL ANALISIS GAMBAR -->
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">PROMPT HASIL ANALISA GAMBAR</h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              ${(u==null?void 0:u.source)==="GEMINI_AI"?`<span class="badge badge-blue" style="background: rgba(14, 165, 233, 0.15); border: 1px solid #38bdf8; color: #38bdf8;">🌐 Vision AI Aktif (${((ua=u.imageInfo)==null?void 0:ua.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-blue">🤖 Source of Truth Visual</span>'}
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem; white-space: pre-wrap;">
              ${O}
            </p>
          </div>
          ${b?`
            <div style="margin-top: 1rem;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📋</span> Rincian 13 Atribut Visual Gambar Aktual:
              </h3>
              <div class="visual-breakdown-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.55rem; font-size: 0.825rem;">
                ${Object.entries(b).map(([$,pa],ca)=>`
                  <div style="background: rgba(15, 23, 42, 0.7); padding: 0.55rem 0.75rem; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2); display: flex; flex-direction: column; gap: 0.2rem;">
                    <strong style="color: #38bdf8; font-size: 0.8rem;">${ca+1}. ${$}</strong>
                    <span style="color: #f1f5f9; font-size: 0.8rem; line-height: 1.4;">${pa}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </section>

        <!-- 3. PROMPT OPTIMAL -->
        ${Z.html}

        <!-- 4. MAKSUD PROMPT -->
        ${F.html}

        <!-- 5. AREA YANG DIUBAH vs AREA YANG DIPERTAHANKAN / LOCKED -->
        <div class="grid-2">
          ${ta.html}
          ${na.html}
        </div>

        <!-- 6. TRANSFORMASI VISUAL FROM -> TO -->
        ${Aa.html}

        <!-- 7. SHORTHAND ANALYSIS (5 Kelompok Terpisah Sesuai Blueprint) -->
        <!-- A & B. Shorthand Utama & Shorthand Berhubungan -->
        ${ba.html}

        <!-- C. Shorthand Alternatif / Serupa -->
        ${la.html}

        <!-- D. Shorthand Konflik -->
        ${W.html}

        <!-- E. Shorthand Tidak Diperlukan (Dikecualikan) -->
        ${J.html}
      </div>
    `,bindEvents($){L.bindEvents($),Z.bindEvents($),ba.bindEvents($),la.bindEvents($),W.bindEvents($),J.bindEvents($);const pa=$.querySelector("#btn-copy-generated-prompt");pa&&pa.addEventListener("click",()=>{c&&c(O)})}}:{html:`
          <div class="analyzer-stream-container">
            ${L.html}
          </div>
        `,bindEvents($){L.bindEvents($)}}:{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${L.html}

      <!-- MODE 3 SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN GAMBAR CARD -->
      ${r==="SHORTHAND_IMPROVE"&&I?`
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #c084fc;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: #c084fc;">🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR</h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-purple">🔍 Diagnosis Visual Komprehensif</span>
              <span class="badge badge-blue">⚡ ${w.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>📷</span> Ringkasan Kondisi Visual Gambar:
            </h3>
            <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #c084fc; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${C}
            </div>
          </div>

          <!-- 2. Area yang Membutuhkan Optimasi -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> Area yang Membutuhkan Optimasi (${N.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${N.map((M,$)=>`
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${$+1}. ${M.aspect}</strong>
                    ${E(M.priority)}
                  </div>
                  <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0 0 0.4rem 0; line-height: 1.45;">
                    ${M.problem}
                  </p>
                  <div style="color: #38bdf8; font-size: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
                    <span>➔ Tindakan:</span> <span>${M.suggestedAction}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Aspek yang Sudah Baik -->
          ${S&&S.length>0?`
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${S.map(M=>`<li>${M}</li>`).join("")}
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
                <span>🎯</span> Rekomendasi Shorthand Perbaikan (${w.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${w.map(M=>`
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: #a855f7; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
                        ${M.code}
                      </code>
                      ${E(M.issuePriority)}
                    </div>
                    <div style="font-weight: 600; color: #f1f5f9; font-size: 0.825rem; margin-bottom: 0.25rem;">
                      ${M.name}
                    </div>
                    <p style="color: #94a3b8; font-size: 0.775rem; margin: 0 0 0.45rem 0; line-height: 1.4;">
                      ${M.reason}
                    </p>
                  </div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.725rem; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 0.4rem; margin-top: 0.25rem;">
                    <span>Grup: <strong style="color: #cbd5e1;">${M.functionGroup}</strong></span>
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: #a855f7; border-color: rgba(168, 85, 247, 0.4);">TERPASANG</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${Z.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${F.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${ta.html}
        ${na.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${Aa.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${ba.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${W.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${J.html}
    </div>
  `,bindEvents(M){L.bindEvents(M),Z.bindEvents(M),ba.bindEvents(M),W.bindEvents(M),J.bindEvents(M);const $=M.querySelector("#btn-copy-generated-prompt");$&&$.addEventListener("click",()=>{c&&c(O)})}}}function fe({searchQuery:u="",searchResults:a=[],selectedShorthands:e=[],isSearching:n=!1,searchNotice:i=null,hasSearched:s=!1,onSearch:r,onAddShorthand:t,onRemoveShorthand:o,onClearAll:l,onCopyShorthands:d}){const m=new Set(e.map(c=>(c.code||c).toLowerCase())),p=e.length>0;let h="";p?h=e.map((c,k)=>{const v=typeof c=="string"?c:c.code,T=typeof c=="object"&&c.name?c.name:"";return`
          <div class="selected-shorthand-tag ${typeof c=="object"&&c.source==="ONLINE"?"tag-online":""}" title="${T?T+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${v}</span>
            <button type="button" class="btn-remove-tag" data-code="${v}" aria-label="Hapus ${v}">
              &times;
            </button>
          </div>
        `}).join(""):h=`
      <div class="empty-selected-notice">
        Belum ada shorthand yang dipilih. Cari shorthand di bawah lalu tekan tombol <strong>[ + ]</strong>.
      </div>
    `;let g="";return n?g=`
      <div class="searching-state">
        <div class="spinner"></div>
        <span>Mencari di katalog lokal &amp; online fallback...</span>
      </div>
    `:s&&a.length===0?g=`
      <div class="no-results-card">
        <div class="no-results-icon">🔍</div>
        <p class="no-results-text">
          ${i||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?g=`
      <div class="dictionary-results-grid">
        ${a.map(c=>{const k=m.has((c.code||"").toLowerCase()),v=c.source==="ONLINE",T=v?"badge-online":"badge-local",y=v?"🌐 ONLINE":"LOCAL";return`
              <div class="dictionary-card ${k?"card-selected":""}" data-code="${c.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${c.code}</span>
                    <span class="source-badge ${T}">${y}</span>
                  </div>
                  <div class="card-action">
                    ${k?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${c.code}" title="Tambahkan ${c.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${c.name||c.code}</div>
                  <div class="card-desc">${c.description||"Tidak ada deskripsi"}</div>
                  ${c.equivalentTo&&c.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${c.equivalentTo.slice(0,4).map(R=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${R}</span>`).join("")}
                      ${c.equivalentTo.length>4?`<span style="opacity: 0.6;">+${c.equivalentTo.length-4} lainnya</span>`:""}
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
            ${h}
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
  `,bindEvents(c){const k=c.querySelector("#dictionary-search-form"),v=c.querySelector("#dictionary-search-input"),T=c.querySelector("#btn-clear-search"),y=c.querySelector("#btn-copy-selected-shorthands"),R=c.querySelector("#btn-clear-all-shorthands");k&&v&&k.addEventListener("submit",f=>{f.preventDefault();const O=v.value.trim();r&&r(O)}),T&&v&&T.addEventListener("click",()=>{v.value="",v.focus(),r&&r("")}),c.querySelectorAll(".btn-add-shorthand").forEach(f=>{f.addEventListener("click",()=>{const O=f.getAttribute("data-code"),b=a.find(I=>I.code===O);b&&t&&t(b)})}),c.querySelectorAll(".btn-remove-tag").forEach(f=>{f.addEventListener("click",()=>{const O=f.getAttribute("data-code");O&&o&&o(O)})}),y&&y.addEventListener("click",()=>{d&&d()}),R&&R.addEventListener("click",()=>{l&&l()})}}}function ye({analysisResult:u,onCopyJson:a,onRunCustomJson:e}){var d,m,p;const n=JSON.stringify({rawPrompt:(u==null?void 0:u.rawPrompt)||"",cleanText:(u==null?void 0:u.cleanText)||"",installedShorthands:(u==null?void 0:u.installedShorthands)||[]},null,2),i=JSON.stringify(u||{},null,2),s=((d=u==null?void 0:u.conflicts)==null?void 0:d.length)>0,r=!!((m=u==null?void 0:u.intent)!=null&&m.primaryAction&&u.intent.primaryAction!=="-"),t=((p=u==null?void 0:u.installedShorthands)==null?void 0:p.length)||0,o=(u==null?void 0:u.source)||"LOCAL_ENGINE";return{html:`
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
        <div class="val-item" style="border-left: 3px solid ${r?"var(--status-success)":"var(--text-muted)"};">
          <span>Semantik Valid:</span>
          <strong>${r?"✅ Ya":"⚪ Menunggu Input"}</strong>
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
          <pre class="json-box" id="json-output-view">${i}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(h){const g=h.querySelector("#btn-copy-output-json");g&&g.addEventListener("click",()=>{a&&a(i)})}}}function Ae({catalog:u=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:n="ALL",searchQuery:i="",currentPage:s=1,pageSize:r=12,selectedDetailCode:t=null,isAddModalOpen:o=!1,isImportModalOpen:l=!1,duplicateWarning:d=null,onSelectCategory:m,onSelectTarget:p,onSelectRecLevel:h,onSearchChange:g,onPageChange:A,onOpenDetail:c,onCloseDetail:k,onOpenAddModal:v,onCloseAddModal:T,onSubmitAddShorthand:y,onOpenImportModal:R,onCloseImportModal:f,onSubmitImport:O,onExportCatalog:b,onResetUserCatalog:I,onAddShorthandToPrompt:C}){const N=za(u,{category:a,target:e,recommendationLevel:n,searchQuery:i}),S=N.length,w=Math.max(1,Math.ceil(S/r)),D=Math.min(Math.max(1,s),w),V=(D-1)*r,ma=N.slice(V,V+r),ea=Array.from(new Set(u.map(E=>E.target))).sort(),oa=["ALL",...Object.keys(ja)].map(E=>{const L=ja[E],W=E==="ALL"?"Semua Kategori":`${L.code}. ${L.label}`;return`
      <button type="button" class="category-tab-btn ${a===E?"active":""}" data-cat="${E}">
        ${W}
      </button>
    `}).join(""),X=ma.length>0?ma.map(E=>{let L="badge-opsional";E.recommendationLevel==="WAJIB"||E.priority==="HIGH"?L="badge-wajib":E.recommendationLevel==="DISARANKAN"&&(L="badge-disarankan");const W=E.source==="USER"?"badge-purple":"badge-neutral",Z=(E.semanticTriggers||[]).slice(0,3).map(na=>`<span class="compat-pill">"${na}"</span>`).join(" "),F=E.equivalentTo||[],ta=E.relationships||[];return`
          <div class="catalog-item-card" data-code="${E.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${E.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${W}">${E.source||"CORE"}</span>
                  <span class="badge ${L}">${E.recommendationLevel||E.priority}</span>
                  <span class="badge badge-neutral">${E.category}</span>
                </div>
              </div>
              <h3 class="catalog-item-name">${E.name}</h3>
              <p class="catalog-item-desc" style="margin-top: 0.4rem;">${E.description}</p>
            </div>

            <!-- Structured Metadata Section -->
            <div class="catalog-meta-list" style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <div><strong>Target:</strong> <span style="color: #93c5fd;">${E.target}</span></div>
              ${E.functionGroup?`<div><strong>Fungsi:</strong> <span style="color: #c084fc; font-size: 0.75rem;">${E.functionGroup}</span></div>`:""}
              ${F.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${F.map(na=>`<span class="alias-tag font-mono">${na}</span>`).join(" ")}
                </div>
              `:""}
              ${ta.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${ta.length} terhubung (${ta.map(na=>na.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${Z||"-"}</div>
            </div>

            <!-- Card Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 0.75rem;">
              <button type="button" class="btn btn-outline btn-xs btn-open-detail" data-code="${E.code}" title="Lihat detail lengkap direktif">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Detail
              </button>
              <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${E.code}">
                + Tambah ke Prompt
              </button>
            </div>
          </div>
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',z=w>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${D<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${D} dari ${w} (${S} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${D>=w?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let K="";if(t){const E=u.find(L=>L.code===t);E&&(K=`
        <div class="modal-backdrop" id="modal-detail-backdrop">
          <div class="modal-card" style="max-width: 680px;" role="dialog" aria-modal="true">
            <div class="modal-header">
              <div>
                <span class="catalog-item-code" style="font-size: 1.35rem;">${E.code}</span>
                <h3 style="font-size: 1rem; color: #ffffff; margin-top: 0.2rem;">${E.name}</h3>
              </div>
              <button type="button" class="modal-close" id="btn-close-detail-modal" aria-label="Tutup">&times;</button>
            </div>

            <div class="modal-body" style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto;">
              <!-- Meta Row -->
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-neutral">Sumber: ${E.source||"CORE"}</span>
                <span class="badge badge-blue">Kategori: ${E.category}</span>
                <span class="badge badge-purple">Target: ${E.target}</span>
                <span class="badge badge-wajib">Level: ${E.recommendationLevel||E.priority}</span>
                ${E.preferredRepresentative?'<span class="badge badge-blue font-mono">REPRESENTATIF UTAMA</span>':""}
              </div>

              <!-- Function Group & Equivalents -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-card); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>Function Group:</strong> <span style="color: #c084fc;">${E.functionGroup||"-"}</span>
                </div>
                ${E.equivalentTo&&E.equivalentTo.length>0?`
                  <div style="margin-top: 0.4rem; font-size: 0.8rem;">
                    <strong>Alias Setara (Equivalent To):</strong>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.25rem;">
                      ${E.equivalentTo.map(L=>`<span class="alias-tag font-mono">${L}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${E.relationships&&E.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${E.relationships.map(L=>`
                      <div style="background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 0.4rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                        <span class="font-mono" style="color: #c4b5fd; font-weight: 700;">${L.code}</span>
                        <span class="badge badge-purple" style="font-size: 0.65rem; margin-left: 0.35rem;">${L.relationType}</span>
                        <div style="color: #cbd5e1; font-size: 0.75rem; margin-top: 0.2rem;">${L.reason}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Deskripsi -->
              <div>
                <span class="detail-label">DESKRIPSI:</span>
                <p class="detail-value" style="margin-top: 0.25rem;">${E.description}</p>
              </div>

              <!-- Kapan Digunakan -->
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #6ee7b7; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${E.whenToUse||"Sesuai dengan instruksi user yang relevan."}</p>
              </div>

              <!-- Kapan Tidak Digunakan -->
              <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #fca5a5; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN TIDAK DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${E.whenNotToUse||"Jika bertentangan dengan preferensi user."}</p>
              </div>

              <!-- Semantic Triggers -->
              <div>
                <span class="detail-label">SEMANTIC TRIGGERS:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                  ${(E.semanticTriggers||[]).map(L=>`<span class="compat-pill">"${L}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${E.conflicts&&E.conflicts.length>0?E.conflicts.map(L=>`<span class="conflict-pill">${L}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${E.compatibleWith&&E.compatibleWith.length>0?E.compatibleWith.map(L=>`<span class="compat-pill">${L}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-close-detail-footer">Tutup</button>
              <button type="button" class="btn btn-primary btn-sm btn-add-from-modal" data-code="${E.code}">
                + Tambah ${E.code} ke Prompt
              </button>
            </div>
          </div>
        </div>
      `)}let Y="";if(o){const E=Object.keys(Ka);Y=`
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
              ${d?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${d.message}</p>
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
                    ${Object.keys(ja).map(L=>`<option value="${L}">${L} - ${ja[L].label}</option>`).join("")}
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
                  ${E.map(L=>`<option value="${L}">`).join("")}
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
    `}let ha="";return l&&(ha=`
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
        ${oa}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${ea.map(E=>`<option value="${E}" ${e===E?"selected":""}>Target: ${E}</option>`).join("")}
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
            value="${i||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${X}
      </div>

      <!-- Pagination -->
      ${z}

      <!-- Modals -->
      ${K}
      ${Y}
      ${ha}
    </section>
  `,bindEvents(E){E.querySelectorAll(".category-tab-btn").forEach(j=>{j.addEventListener("click",()=>{const x=j.getAttribute("data-cat");m&&m(x)})});const L=E.querySelector("#select-filter-target");L&&L.addEventListener("change",j=>{p&&p(j.target.value)});const W=E.querySelector("#select-filter-rec-level");W&&W.addEventListener("change",j=>{h&&h(j.target.value)});const Z=E.querySelector("#catalog-search-input");Z&&Z.addEventListener("input",j=>{g&&g(j.target.value)});const F=E.querySelector(".btn-prev-page");F&&F.addEventListener("click",()=>{A&&A(D-1)});const ta=E.querySelector(".btn-next-page");ta&&ta.addEventListener("click",()=>{A&&A(D+1)});const na=E.querySelector("#btn-open-add-shorthand");na&&v&&na.addEventListener("click",v);const Aa=E.querySelector("#btn-export-catalog");Aa&&b&&Aa.addEventListener("click",b);const ba=E.querySelector("#btn-open-import-catalog");ba&&R&&ba.addEventListener("click",R);const la=E.querySelector("#btn-reset-user-catalog");la&&I&&la.addEventListener("click",I),E.querySelectorAll(".btn-open-detail").forEach(j=>{j.addEventListener("click",()=>{const x=j.getAttribute("data-code");c&&c(x)})});const J=E.querySelector("#btn-close-detail-modal"),Ia=E.querySelector("#btn-close-detail-footer"),ua=E.querySelector("#modal-detail-backdrop"),M=()=>{k&&k()};J&&J.addEventListener("click",M),Ia&&Ia.addEventListener("click",M),ua&&ua.addEventListener("click",j=>{j.target===ua&&M()});const $=E.querySelector("#btn-close-add-modal"),pa=E.querySelector("#btn-cancel-add"),ca=E.querySelector("#modal-add-backdrop"),Ra=()=>{T&&T()};$&&$.addEventListener("click",Ra),pa&&pa.addEventListener("click",Ra),ca&&ca.addEventListener("click",j=>{j.target===ca&&Ra()});const Na=E.querySelector("#form-add-shorthand");Na&&y&&Na.addEventListener("submit",j=>{j.preventDefault();let x=E.querySelector("#add-code").value.trim();x.startsWith("/")||(x="/"+x);const aa=E.querySelector("#add-name").value.trim(),q=E.querySelector("#add-category").value,ia=E.querySelector("#add-target").value.trim(),ga=E.querySelector("#add-func-group").value.trim()||q,U=E.querySelector("#add-desc").value.trim(),ya=E.querySelector("#add-triggers").value.trim(),Q=E.querySelector("#add-equivalent").value.trim(),H=ya?ya.split(",").map(va=>va.trim()).filter(Boolean):[],_a=Q?Q.split(",").map(va=>va.trim().startsWith("/")?va.trim():"/"+va.trim()).filter(Boolean):[];y({code:x,name:aa,category:q,target:ia,functionGroup:ga,description:U,semanticTriggers:H,equivalentTo:_a,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${ia.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const La=E.querySelector("#btn-close-import-modal"),Pa=E.querySelector("#btn-cancel-import"),Oa=E.querySelector("#modal-import-backdrop"),_=()=>{f&&f()};La&&La.addEventListener("click",_),Pa&&Pa.addEventListener("click",_),Oa&&Oa.addEventListener("click",j=>{j.target===Oa&&_()});const G=E.querySelector("#import-file-input"),Ta=E.querySelector("#import-json-textarea");G&&Ta&&G.addEventListener("change",j=>{const x=j.target.files[0];if(x){const aa=new FileReader;aa.onload=q=>{Ta.value=q.target.result},aa.readAsText(x)}});const Ea=E.querySelector("#form-import-catalog");Ea&&O&&Ea.addEventListener("submit",j=>{var q,ia,ga;j.preventDefault();const x=((q=E.querySelector('input[name="import-mode"]:checked'))==null?void 0:q.value)||"MERGE",aa=(ga=(ia=E.querySelector("#import-json-textarea"))==null?void 0:ia.value)==null?void 0:ga.trim();O(aa,x)}),E.querySelectorAll(".btn-add-from-catalog").forEach(j=>{j.addEventListener("click",()=>{const x=j.getAttribute("data-code");C&&C(x)})});const fa=E.querySelector(".btn-add-from-modal");fa&&fa.addEventListener("click",()=>{const j=fa.getAttribute("data-code");C&&C(j),M()})}}}function Te({geminiStatusInfo:u,onTestConnection:a,onSaveSettings:e,onClearKey:n}){const i=P.getApiKey(),s=P.getModel(),{status:r,error:t}=u;let o="status-unconfigured",l="🟡 Gemini: Belum diuji / konfigurasi";return r===B.CONNECTED?(o="status-connected",l="🟢 Gemini: Tersambung"):r===B.FAILED&&(o="status-failed",l="🔴 Gemini: Gagal"),{html:`
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
                value="${i||""}" 
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
                <span>${l}</span>
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
  `,bindEvents(m){const p=m.querySelector("#setting-api-key"),h=m.querySelector("#setting-model-select"),g=m.querySelector("#btn-toggle-key-visibility"),A=m.querySelector("#btn-test-connection"),c=m.querySelector("#btn-save-settings"),k=m.querySelector("#btn-clear-key");g&&p&&g.addEventListener("click",()=>{const v=p.type==="password";p.type=v?"text":"password"}),A&&A.addEventListener("click",()=>{a&&a(p.value,h.value)}),c&&c.addEventListener("click",()=>{e&&e(p.value,h.value)}),k&&k.addEventListener("click",()=>{p.value="",n&&n()})}}}const Ha={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class Ba{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const n=a.trim().toLowerCase(),i=n.startsWith("/")?n.slice(1):n,s=n.split(/\s+/).filter(Boolean),r=new Set(s);for(const o of s)if(Ha[o])for(const l of Ha[o])r.add(l.toLowerCase());const t=[];for(const o of e){if(!o||!o.code)continue;let l=0;const d=(o.code||"").toLowerCase(),m=d.startsWith("/")?d.slice(1):d,p=(o.name||"").toLowerCase(),h=(o.description||"").toLowerCase(),g=(o.category||"").toLowerCase(),A=Array.isArray(o.semanticTriggers)?o.semanticTriggers.map(k=>(k||"").toLowerCase()):[],c=(o.whenToUse||"").toLowerCase();d===n||m===i?l+=1e3:m.startsWith(i)?l+=600:m.includes(i)&&(l+=350);for(const k of A)if(k===n)l+=400;else if(k.includes(n))l+=250;else for(const v of r)if(v.length>2&&k.includes(v)){l+=100;break}if(p===n)l+=300;else if(p.includes(n))l+=200;else for(const k of r)if(k.length>2&&p.includes(k)){l+=80;break}if(h.includes(n))l+=150;else for(const k of r)if(k.length>2&&h.includes(k)){l+=60;break}g.includes(n)&&(l+=50),c.includes(n)&&(l+=40),l>0&&t.push({...o,score:l,source:"LOCAL",isOnline:!1})}return t.sort((o,l)=>l.score-o.score),this.deduplicateResultsByFunction(t)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,n=new Map;for(const s of a){if(!s||!s.code)continue;const r=s.code.toLowerCase();let t=n.get(r);if(!t){t=s.functionGroup||s.category||r;for(const[o,l]of e.entries())if(l.some(m=>(m.equivalentTo||[]).map(h=>typeof h=="string"?h.toLowerCase():"").includes(r))){t=o;break}}if(n.set(r,t),Array.isArray(s.equivalentTo))for(const o of s.equivalentTo)typeof o=="string"&&n.set(o.toLowerCase(),t);e.has(t)?e.get(t).push(s):e.set(t,[s])}const i=[];for(const[s,r]of e.entries()){if(r.length===1){i.push(r[0]);continue}r.sort((d,m)=>{if(d.preferredRepresentative&&!m.preferredRepresentative)return-1;if(!d.preferredRepresentative&&m.preferredRepresentative)return 1;if((m.score||0)!==(d.score||0))return(m.score||0)-(d.score||0);const p={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},h=p[d.status]||(d.source==="LOCAL"?3:1),g=p[m.status]||(m.source==="LOCAL"?3:1);return g!==h?g-h:(d.code||"").length-(m.code||"").length});const t=r[0],o=r.slice(1).map(d=>d.code),l=Array.from(new Set([...t.equivalentTo||[],...o]));i.push({...t,equivalentTo:l})}return i.sort((s,r)=>(r.score||0)-(s.score||0)),i}static async search(a,e=[],n=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const i=a.trim();let s=[];try{s=this.searchLocal(i,e)}catch(p){console.warn("[DictionaryService] Error pencarian lokal:",p),s=[]}let r=[],t=null;const o=s.some(p=>p.score>=600);if((s.length<4||!o)&&n)try{const p=await n.searchOnlineShorthand(i);if(p&&Array.isArray(p.results)){const h=new Set(s.map(g=>g.code.toLowerCase()));r=p.results.filter(g=>!h.has(g.code.toLowerCase()))}p&&p.message&&s.length===0&&(t=p.message)}catch(p){console.warn("[DictionaryService] Online fallback error:",p)}const d=this.deduplicateResultsByFunction([...s,...r]);let m=null;return d.length===0&&(m=t||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:i,results:d,localCount:s.length,onlineCount:r.length,notice:m}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class Ee{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new Ya(Ua),this.catalog=this.catalogRepo.getAll(),this.geminiService=new Za(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=P.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="toast-container",document.body.appendChild(n));const i=document.createElement("div");i.className=`toast toast-${e}`,i.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,n.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 0.3s ease",setTimeout(()=>i.remove(),300)},2800)}async runAnalysis(a,e=null){if(this.activeMode==="IMAGE_TO_PROMPT"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const n=this.uploadedImage.file?Object.assign(this.uploadedImage.file,{width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry}):{name:this.uploadedImage.name,size:this.uploadedImage.size,width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry},i=await this.geminiService.analyzeImageToPrompt({imageFile:n,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry});if(this.analysisResult=i,i.source==="GEMINI_AI")this.showToast("✅ Analisa Vision AI berhasil berdasarkan gambar aktual!","success");else if(i.source==="LOCAL_ENGINE_FALLBACK"){const s=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${s}, menggunakan analisis visual lokal.`,"warning")}else this.showToast("Analisa gambar & pemetaan shorthand berhasil!")}catch(n){this.showToast(`Gagal menganalisis gambar: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(this.activeMode==="SHORTHAND_IMPROVE"){if(this.uploadedImage){this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const n=await this.geminiService.analyzeImageRepair({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,notesPrompt:a});if(this.analysisResult=n,n.source==="GEMINI_AI")this.showToast("✅ Diagnosis visual Vision AI & rekomendasi perbaikan selesai!","success");else if(n.source==="LOCAL_ENGINE_FALLBACK"){const i=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${i}, menggunakan diagnosis visual lokal.`,"warning")}else this.showToast("Diagnosis visual & rekomendasi perbaikan gambar selesai!")}catch(n){this.showToast(`Gagal menganalisis perbaikan gambar: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const n=await this.geminiService.analyzeShorthandImprove(a,e);this.analysisResult=n,this.showToast("Analisa shorthand perbaikan selesai!")}catch(n){this.showToast(`Gagal menganalisis: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const n=await this.geminiService.analyzePrompt(a,e);this.analysisResult=n,this.showToast("Analisis prompt selesai!")}catch(n){this.showToast(`Gagal menganalisis: ${n.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a){const e=te(a);if(!e){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(e).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}async handleEnrichPrompt(){var n;const a=((n=this.analysisResult)==null?void 0:n.optimalPrompt)||"";if(!a||!a.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!!!(P.getApiKey()&&P.getApiKey().trim())||this.geminiService.status===B.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const i=await this.geminiService.enrichPrompt(a,this.analysisResult);if(i&&i.success&&i.enrichedPrompt)this.analysisResult.optimalPrompt=i.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}catch(i){console.warn("Enrich prompt error:",i),this.showToast(`Gagal memperkaya prompt: ${i.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const n=[...e,a];this.updateInstalledShorthands(n),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const n=(this.analysisResult.installedShorthands||[]).filter(i=>i!==a);this.updateInstalledShorthands(n),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){if(this.analysisResult.installedShorthands=a,this.analysisResult.mode==="IMAGE_TO_PROMPT"&&this.analysisResult.visionData)this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,a);else if(this.analysisResult.isImageRepair&&this.analysisResult.repairInstructions){let e=this.analysisResult.repairInstructions.trim();a.length>0&&(e=`${e} ${a.join(" ")}`.trim()),this.analysisResult.optimalPrompt=e}else this.analysisResult.optimalPrompt=this.geminiService.localEngine.buildOptimalPrompt(this.analysisResult.cleanText,a);if(this.analysisResult.recommendations)for(const e of this.analysisResult.recommendations)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.primaryShorthands)for(const e of this.analysisResult.primaryShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.relatedShorthands)for(const e of this.analysisResult.relatedShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.similarShorthands)for(const e of this.analysisResult.similarShorthands)e.checked=a.includes(e.code),e.active=e.checked;this.render()}handleResolveConflict(a,e){const n=this.analysisResult.conflicts.find(r=>r.id===a);if(!n)return;let i=[...this.analysisResult.installedShorthands||[]];const s=n.type==="EDIT_VS_LOCK"||n.shorthandA&&n.shorthandA.includes("lock");if(e==="use_user_edit"){i=i.filter(t=>t!==n.shorthandA);const r=s?`Kunci ${n.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${n.shorthandB}, ${n.shorthandA} dihapus.`;this.showToast(r)}else if(e==="keep_lock"){i=i.filter(t=>t!==n.shorthandB),i.includes(n.shorthandA)||i.push(n.shorthandA);const r=s?`Lock ${n.shorthandA} dipertahankan.`:`Memilih ${n.shorthandA}, ${n.shorthandB} dihapus.`;this.showToast(r)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(r=>r.id!==a),this.updateInstalledShorthands(i)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(n),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const n=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${n.count} shorthand (${e})!`),this.render()}catch(n){this.showToast(`Gagal impor: ${n.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const n=await this.geminiService.testConnection(a,e);n.success?this.showToast(n.message,"success"):this.showToast(n.message,"error"),this.render()}handleSaveSettings(a,e){P.setApiKey(a),P.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){P.clearApiKey(),this.geminiService.status=B.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await Ba.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();if(!e)return;this.dictionaryState.selectedShorthands.some(i=>(typeof i=="string"?i:i.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render())}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=Ba.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}render(){const a=this.geminiService.getStatus(),e=ne(this.activeTab,a,i=>{this.activeTab=i,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let n=null;if(this.activeTab==="analyzer"){const s=!!(P.getApiKey()&&P.getApiKey().trim())&&this.geminiService.status!==B.FAILED;n=be({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:s,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,onModeChange:r=>{this.activeMode!==r&&(this.activeMode=r,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render())},onImageSelected:r=>{this.uploadedImage=r,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render(),this.activeMode==="IMAGE_TO_PROMPT"&&this.runAnalysis(this.currentPrompt)},onImageRemoved:()=>{this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onAnalyze:r=>this.runAnalysis(r),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:r=>this.handleSelectPreset(r),onCopyPrompt:r=>this.handleCopyPrompt(r),onCopyGeneratedPrompt:r=>this.handleCopyPrompt(r),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:r=>this.handleAddShorthand(r),onRemoveShorthand:r=>this.handleRemoveShorthand(r),onToggleRecommendation:r=>this.handleToggleRecommendation(r),onResolveConflict:(r,t)=>this.handleResolveConflict(r,t)})}else this.activeTab==="json-test"?n=ye({analysisResult:this.analysisResult,onCopyJson:i=>{navigator.clipboard.writeText(i),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?n=Ae({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:i=>{this.catalogCategory=i,this.catalogCurrentPage=1,this.render()},onSelectTarget:i=>{this.catalogTarget=i,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:i=>{this.catalogRecLevel=i,this.catalogCurrentPage=1,this.render()},onSearchChange:i=>{this.catalogSearchQuery=i,this.catalogCurrentPage=1,this.render()},onPageChange:i=>{this.catalogCurrentPage=i,this.render()},onOpenDetail:i=>{this.selectedDetailCode=i,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async i=>{await this.handleAddShorthandSubmit(i)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(i,s)=>{await this.handleImportCatalog(i,s)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:i=>{this.handleAddShorthand(i),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${i} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?n=fe({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,onSearch:i=>this.handleDictionarySearch(i),onAddShorthand:i=>this.handleDictionaryAddShorthand(i),onRemoveShorthand:i=>this.handleDictionaryRemoveShorthand(i),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy()}):this.activeTab==="settings"&&(n=Te({geminiStatusInfo:a,onTestConnection:(i,s)=>this.handleTestConnection(i,s),onSaveSettings:(i,s)=>this.handleSaveSettings(i,s),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
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
    `,e.bindEvents(this.appRoot),n.bindEvents&&n.bindEvents(this.appRoot)}}document.addEventListener("DOMContentLoaded",()=>{window.__PSA_APP__=new Ee,window.__PSA_APP__.render()});
//# sourceMappingURL=index-Lyl8fGM7.js.map
