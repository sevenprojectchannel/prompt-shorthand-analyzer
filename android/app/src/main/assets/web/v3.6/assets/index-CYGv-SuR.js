(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const le={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE",LIGHTING_SHADOW:"LIGHTING_SHADOW",LIGHTING_HIGHLIGHT:"LIGHTING_HIGHLIGHT",LIGHTING_DYNAMICRANGE:"LIGHTING_DYNAMICRANGE",CONTRAST_NATURAL:"CONTRAST_NATURAL",COLOR_NATURALTONE:"COLOR_NATURALTONE",COLOR_BALANCE:"COLOR_BALANCE",DETAIL_PRESERVATION:"DETAIL_PRESERVATION",TEXTURE_PRESERVATION:"TEXTURE_PRESERVATION",NATURAL_PROCESSING:"NATURAL_PROCESSING",PERSPECTIVE_CORRECTION:"PERSPECTIVE_CORRECTION",LENS_CORRECTION:"LENS_CORRECTION",COMPOSITION_BALANCE:"COMPOSITION_BALANCE",IMAGE_HIGHDETAIL:"IMAGE_HIGHDETAIL"},$a={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},Ya=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]},{code:"/shadowrecovery",name:"Shadow Recovery & Black Level Lifting",category:"LIGHTING",target:"SHADOW_LIGHTING",description:"Mengangkat dan memulihkan detail bayangan yang terlalu gelap tanpa menimbulkan noise atau mencuci kontras.",semanticTriggers:["shadow recovery","shadow terlalu gelap","pulihkan bayangan","angkat bayangan gelap","recover shadows","dark shadows","bayangan terlalu pekat"],negativeTriggers:["bayangan pekat","gelapkan bayangan","crushed blacks"],conflicts:[],compatibleWith:["/highlightcontrol","/dynamicrange","/naturalcontrast","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika area bayangan pada subjek, pepohonan, atau latar belakang terlalu gelap sehingga kehilangan detail.",whenNotToUse:"Jangan gunakan jika kontras bayangan pekat sengaja diinginkan untuk gaya dramatis (chiaroscuro).",functionGroup:"LIGHTING_SHADOW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/liftshadows"],relationships:[{code:"/highlightcontrol",relationType:"COMPATIBLE",reason:"Sering dipadukan untuk menyeimbangkan rentang dinamis keseluruhan."}]},{code:"/highlightcontrol",name:"Highlight Control & Rolloff",category:"LIGHTING",target:"HIGHLIGHT_LIGHTING",description:"Mengendalikan area terang yang over-exposed atau blown-out agar detail tekstur cahaya tetap terjaga dengan gradasi halus.",semanticTriggers:["highlight control","highlight perlu dikendalikan","highlight terlalu terang","kendalikan highlight","kurangi overexposed","highlight recovery","blown highlights"],negativeTriggers:["tingkatkan highlight","blow out"],conflicts:[],compatibleWith:["/shadowrecovery","/dynamicrange","/naturalcontrast"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika langit, awan, atau pantulan cahaya terlalu terang hingga kehilangan detail tekstur.",whenNotToUse:"Jangan gunakan jika efek siluet atau flare cahaya terang sengaja diinginkan.",functionGroup:"LIGHTING_HIGHLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/highlightrolloff"],relationships:[{code:"/shadowrecovery",relationType:"COMPATIBLE",reason:"Bekerja bersama pemulihan shadow untuk menghasilkan eksposur seimbang."}]},{code:"/dynamicrange",name:"Dynamic Range Balancing",category:"LIGHTING",target:"DYNAMIC_RANGE",description:"Menyeimbangkan rentang dinamis antara area tergelap dan terang secara simultan untuk eksposur alami tanpa artefak HDR berlebihan.",semanticTriggers:["dynamic range","dynamic range perlu diseimbangkan","seimbangkan dynamic range","rentang dinamis seimbang","balance dynamic range","dynamic range expansion"],negativeTriggers:["kontras ekstrem"],conflicts:[],compatibleWith:["/shadowrecovery","/highlightcontrol","/naturaltone"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat foto memiliki perbedaan pencahayaan ekstrem antara area bayangan dan area terang.",whenNotToUse:"Jangan gunakan jika kontras siluet tinggi atau moody low-key lighting diinginkan.",functionGroup:"LIGHTING_DYNAMICRANGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balanceddynamicrange"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Rentang dinamis yang seimbang menjaga tone warna tetap autentik."}]},{code:"/naturalcontrast",name:"Natural Contrast Balancing",category:"IMAGE_QUALITY",target:"IMAGE_CONTRAST",description:"Menyesuaikan kurva kontras secara alami dan bertahap tanpa membuat warna jenuh berlebihan atau merusak tonal gradation.",semanticTriggers:["natural contrast","kontras alami","seimbangkan kontras","kontras terlalu tajam","kontras pudar","balanced contrast"],negativeTriggers:["kontras ekstrem","hyper contrast"],conflicts:[],compatibleWith:["/naturaltone","/detailpreservation","/colorbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika kontras gambar tampak terlalu keras atau sebaliknya terlihat washed-out/pudar.",whenNotToUse:"Jangan gunakan bila kontras gambar sudah natural dan seimbang.",functionGroup:"CONTRAST_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/balancedcontrast"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"Kontras alami menjaga nuansa warna tetap seimbang."}]},{code:"/naturaltone",name:"Natural Tonal Range & Skin Tone",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menjaga palet warna dan tonal range tetap natural, hangat, dan autentik sesuai persepsi mata manusia.",semanticTriggers:["natural tone","warna perlu dibuat lebih natural","warna lebih natural","tonal range alami","natural color","warna alami","natural skin tone"],negativeTriggers:["neon","warna over-saturated","fluorescent"],conflicts:["/cyberpunk"],compatibleWith:["/colorbalance","/texturepreservation","/detailpreservation"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk mengembalikan karakter warna asli lanskap, vegetasi, atau warna kulit subjek.",whenNotToUse:"Jangan gunakan jika grading warna stilistik ekstrem (seperti cyberpunk neon atau monochrome) ditargetkan.",functionGroup:"COLOR_NATURALTONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturaltonal"],relationships:[{code:"/colorbalance",relationType:"DIRECTLY_RELATED",reason:"Keseimbangan warna yang tepat menghasilkan tone alami."}]},{code:"/colorbalance",name:"Color Balance & White Balance Correction",category:"COLOR_TONE",target:"COLOR_BALANCE",description:"Mengoreksi tint dan temperatur warna yang menyimpang (color cast) agar titik netral putih dan abu-abu akurat.",semanticTriggers:["color balance","color balance perlu diperbaiki","koreksi white balance","keseimbangan warna","perbaiki warna","white balance correction","remove color cast"],negativeTriggers:[],conflicts:[],compatibleWith:["/naturaltone","/naturalcontrast","/rawphoto"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar memiliki color cast (misalnya terlalu kuning/hijau/kebiruan) yang tidak diinginkan.",whenNotToUse:"Jangan gunakan jika nuansa warna hangat matahari senja atau cahaya buatan bernuansa sengaja dipertahankan.",functionGroup:"COLOR_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/whitebalance"],relationships:[{code:"/naturaltone",relationType:"COMPATIBLE",reason:"White balance yang netral mendukung pembentukan tone alami."}]},{code:"/detailpreservation",name:"Original Detail Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_DETAIL",description:"Mempertahankan detail mikro arsitektur, dedaunan, permukaan benda, dan elemen halus asli agar tidak terhapus selama proses penyempurnaan.",semanticTriggers:["detail preservation","detail asli perlu dipertahankan","pertahankan detail asli","keep original detail","preserve details","jangan hilangkan detail"],negativeTriggers:["blur","hapus detail"],conflicts:[],compatibleWith:["/texturepreservation","/naturalprocessing","/highdetail"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar sudah memiliki detail halus yang bernilai tinggi dan harus dilindungi dari over-smoothing.",whenNotToUse:"Jangan gunakan jika detail gambar rusak parah dan membutuhkan rekonstruksi ulang secara total.",functionGroup:"DETAIL_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservedetails"],relationships:[{code:"/texturepreservation",relationType:"DIRECTLY_RELATED",reason:"Preservasi detail bekerja berdampingan dengan penjagaan tekstur asli."}]},{code:"/texturepreservation",name:"Authentic Texture Preservation",category:"LOCK_PRESERVATION",target:"IMAGE_TEXTURE",description:"Mencegah efek 'plastik' atau over-denoise dengan menjaga tekstur organik kulit, kain, kayu, batu, dan dedaunan tetap autentik.",semanticTriggers:["texture preservation","tekstur asli perlu dipertahankan","pertahankan tekstur asli","keep original texture","preserve texture","tekstur autentik"],negativeTriggers:["plastik","airbrushed"],conflicts:[],compatibleWith:["/detailpreservation","/rawphoto","/naturalprocessing"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tekstur permukaan benda dan kulit tampak nyata tanpa distorsi perataan buatan.",whenNotToUse:"Jangan gunakan jika efek grafis flat 2D atau render kartun halus diinginkan.",functionGroup:"TEXTURE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/preservetexture"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor mentah menjaga kejernihan mikrotekstur permukaan."}]},{code:"/naturalprocessing",name:"Natural Processing & Anti-Artifacts",category:"IMAGE_QUALITY",target:"PROCESSING_ARTIFACTS",description:"Memastikan hasil visual bebas dari haloing tepian, artifak kompresi, posterisasi warna, dan efek over-processed.",semanticTriggers:["natural processing","pemrosesan alami","tanpa artifak ai","bebas artifak pemrosesan","clean processing","anti artifacts","no haloing"],negativeTriggers:["over processed"],conflicts:[],compatibleWith:["/rawphoto","/detailpreservation","/texturepreservation"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga standar output tetap bersih dari artefak digital yang merusak kualitas fotografi.",whenNotToUse:"Jangan gunakan jika efek distorsi glitch atau seni digital disengaja.",functionGroup:"NATURAL_PROCESSING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cleanrender"],relationships:[{code:"/detailpreservation",relationType:"COMPATIBLE",reason:"Pemrosesan alami menjaga integritas detail asli."}]},{code:"/perspectivecorrection",name:"Perspective & Vertical Alignment Correction",category:"CAMERA_PHOTO",target:"PERSPECTIVE",description:"Mengoreksi distorsi keystone dan garis vertikal bangunan/ruangan yang miring agar tampak proporsional dan sejajar.",semanticTriggers:["perspective correction","koreksi perspektif","perbaiki sudut kemiringan","luruskan perspektif","keystone correction","garis miring"],negativeTriggers:[],conflicts:[],compatibleWith:["/lenscorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto arsitektur atau pemandangan dengan garis vertikal yang tampak condong atau miring secara tidak sengaja.",whenNotToUse:"Jangan gunakan jika sudut miring (Dutch angle) memang disengaja untuk alasan dramatisasi visual.",functionGroup:"PERSPECTIVE_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/keystonecorrection"],relationships:[{code:"/lenscorrection",relationType:"COMPATIBLE",reason:"Koreksi perspektif dan koreksi lensa saling melengkapi dalam merapikan geometri gambar."}]},{code:"/lenscorrection",name:"Lens Distortion & Vignette Correction",category:"CAMERA_PHOTO",target:"LENS_OPTICS",description:"Menghilangkan distorsi barrel/pincushion dan vignetting gelap pada sudut tepian lensa kamera.",semanticTriggers:["lens correction","koreksi distorsi lensa","hilangkan vignetting","perbaiki distorsi lensa","lens distortion correction","distorsi barrel"],negativeTriggers:[],conflicts:[],compatibleWith:["/perspectivecorrection","/compositionbalance"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat optik lensa menghasilkan distorsi cembung atau tepian gambar menggelap secara tidak merata.",whenNotToUse:"Jangan gunakan jika efek lensa fish-eye atau vignette retro sengaja diinginkan.",functionGroup:"LENS_CORRECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/distortioncorrection"],relationships:[{code:"/perspectivecorrection",relationType:"COMPATIBLE",reason:"Membantu meluruskan batas-batas geometri foto."}]},{code:"/compositionbalance",name:"Composition & Framing Balance",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Menata ulang keseimbangan bobot visual, ruang negatif (negative space), dan penempatan elemen dalam bidang framing.",semanticTriggers:["composition balance","keseimbangan komposisi","seimbangkan framing","komposisi seimbang","balance composition","penataan framing"],negativeTriggers:[],conflicts:[],compatibleWith:["/ruleofthirds","/perspectivecorrection"],priority:"MEDIUM",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat tata letak visual terasa berat sebelah atau framing memotong elemen penting secara canggung.",whenNotToUse:"Jangan gunakan jika komposisi foto sudah seimbang dan proporsional.",functionGroup:"COMPOSITION_BALANCE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/framingbalance"],relationships:[{code:"/ruleofthirds",relationType:"COMPATIBLE",reason:"Aturan sepertiga adalah salah satu kaidah utama untuk mencapai keseimbangan komposisi."}]},{code:"/highdetail",name:"High Fidelity Micro-Detail",category:"IMAGE_QUALITY",target:"IMAGE_DETAIL",description:"Meningkatkan kejernihan mikrotekstur dan ketajaman detail halus pada seluruh permukaan foto secara koheren.",semanticTriggers:["high detail","detail tinggi","mikro detail tajam","tingkatkan detail","high fidelity detail","detail jernih"],negativeTriggers:["blur","halus berlebih"],conflicts:[],compatibleWith:["/detailpreservation","/sharpen","/highresolution"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat elemen visual memerlukan peningkatan resolusi mikrotekstur tanpa menambahkan noise.",whenNotToUse:"Jangan gunakan jika gambar ditujukan untuk gaya lembut bertekstur minim.",functionGroup:"IMAGE_HIGHDETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/microdetail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Ketajaman mikrokontras mendukung tampilan detail tinggi."}]}];function xa(l,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),n=l.code.toLowerCase(),r=l.name.toLowerCase(),s=l.target.toLowerCase(),i=l.category.toLowerCase(),t=l.description.toLowerCase();if(n===e||n===`/${e}`)return 100;if(n.includes(e))return 75;if(l.semanticTriggers&&l.semanticTriggers.some(h=>h.toLowerCase()===e))return 95;if(l.negativeTriggers)for(const h of l.negativeTriggers){const c=h.toLowerCase(),f=e.indexOf(c);if(f!==-1){const g=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(c),m=e.slice(0,f).trim(),u=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(m);if(g||!u)return-50}}if(l.semanticTriggers)for(const h of l.semanticTriggers){const c=h.toLowerCase(),f=e.indexOf(c);if(f!==-1){const g=e.slice(0,f).trim(),m=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(g),u=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(c);if(!m||u)return 85}else if(c.includes(e))return 80}const o=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),d=e.split(/\s+/).filter(h=>h.length>2&&!o.has(h));let p=0;for(const h of l.semanticTriggers||[]){const c=h.toLowerCase();if(d.length>0&&d.every(m=>c.includes(m)))return 75;const g=d.filter(m=>c.includes(m)).length;g>p&&(p=g)}return p>1?40+p*5:r.includes(e)?50:s.includes(e)||i.includes(e)?40:t.includes(e)?30:0}function ce(l,{category:a="ALL",target:e="ALL",recommendationLevel:n="ALL",searchQuery:r=""}={}){const s=l.filter(i=>!(a!=="ALL"&&i.category!==a||e!=="ALL"&&i.target!==e||n!=="ALL"&&i.recommendationLevel!==n));if(r&&r.trim()){const i=[];for(const t of s){const o=xa(t,r);o>0&&i.push({item:t,score:o})}return i.sort((t,o)=>o.score-t.score),i.map(t=>t.item)}return s}const de="psa_v2_catalog_db",ue=1,fa="user_shorthands";class ge{constructor(a=Ya){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((e,n)=>{const r=window.indexedDB.open(de,ue);r.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(fa)||i.createObjectStore(fa,{keyPath:"code"})},r.onsuccess=s=>e(s.target.result),r.onerror=s=>n(s.target.error)}),await this.loadFromIndexedDB()}catch(e){console.warn("IndexedDB unavailable, using memory fallback:",e)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,n)=>{const i=this.db.transaction([fa],"readonly").objectStore(fa).getAll();i.onsuccess=()=>e(i.result||[]),i.onerror=()=>n(i.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const n of this.userCatalog.values()){const r=e.findIndex(s=>s.code===n.code);r!==-1?e[r]={...e[r],...n}:e.push(n)}return a?e:e.filter(n=>n.status!=="DISABLED")}searchShorthands(a,e={}){const n=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return n;const r=a.toLowerCase().trim(),s=[];for(const i of n){let t=xa(i,r);i.functionGroup&&i.functionGroup.toLowerCase().includes(r)&&(t=Math.max(t,60)),i.equivalentTo&&i.equivalentTo.some(o=>o.toLowerCase().includes(r))&&(t=Math.max(t,70)),i.relationships&&i.relationships.some(o=>{var d,p;return((d=o.code)==null?void 0:d.toLowerCase().includes(r))||((p=o.relationType)==null?void 0:p.toLowerCase().includes(r))})&&(t=Math.max(t,45)),t>0&&s.push({item:i,score:t})}return s.sort((i,t)=>t.score-i.score),s.map(i=>i.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(n=>n.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(n=>n.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(n=>n.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const n=this.getAll().find(r=>r.code===a||r.target===a);return!n||!n.relationships?[]:n.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),n=e.find(s=>s.code.toLowerCase()===a.code.toLowerCase());if(n)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:n,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const s=e.find(i=>i.functionGroup===a.functionGroup);if(s)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:s,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${s.code}).`}}const r=e.find(s=>s.equivalentTo&&s.equivalentTo.some(i=>i.toLowerCase()===a.code.toLowerCase()));return r?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:r,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${r.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((n,r)=>{const t=this.db.transaction([fa],"readwrite").objectStore(fa).put(e);t.onsuccess=()=>n(),t.onerror=()=>r(t.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(n=>n.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((n,r)=>{const t=this.db.transaction([fa],"readwrite").objectStore(fa).delete(a);t.onsuccess=()=>n(),t.onerror=()=>r(t.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:n,geminiKey:r,secret:s,password:i,...t}=e;return t});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let n=null;if(typeof a=="string")try{n=JSON.parse(a)}catch(i){throw new Error("Format JSON impor tidak valid: "+i.message)}else n=a;const r=Array.isArray(n)?n:n.entries||[];if(!Array.isArray(r))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((i,t)=>{const p=this.db.transaction([fa],"readwrite").objectStore(fa).clear();p.onsuccess=()=>i(),p.onerror=()=>t(p.error)}));let s=0;for(const i of r){if(!i||!i.code||this.coreCatalog.some(f=>f.code===i.code)&&e==="MERGE")continue;const{apiKey:o,geminiKey:d,secret:p,password:h,...c}=i;await this.add({...c,status:c.status||"APPROVED",source:c.source||"USER"}),s++}return{success:!0,count:s,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const s=this.db.transaction([fa],"readwrite").objectStore(fa).clear();s.onsuccess=()=>a(),s.onerror=()=>e(s.error)}),!0}}const Ta={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},z={getApiKey(){try{return localStorage.getItem(Ta.GEMINI_API_KEY)||""}catch{return""}},setApiKey(l){try{return l?localStorage.setItem(Ta.GEMINI_API_KEY,l.trim()):localStorage.removeItem(Ta.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(Ta.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{const l=(localStorage.getItem(Ta.GEMINI_MODEL)||"gemini-2.0-flash").trim().replace(/^models\//,"");return l.includes("1.5-pro")||l.includes("3.5")&&l!=="gemini-3.5-flash-lite"||l.includes("3.8")||l.includes("2.5-pro")?(localStorage.setItem(Ta.GEMINI_MODEL,"gemini-2.0-flash"),"gemini-2.0-flash"):l}catch{return"gemini-2.0-flash"}},setModel(l){try{const a=(l||"gemini-2.0-flash").trim().replace(/^models\//,"");return localStorage.setItem(Ta.GEMINI_MODEL,a),!0}catch{return!1}},getCustomCatalog(){try{const l=localStorage.getItem(Ta.CUSTOM_CATALOG);return l?JSON.parse(l):[]}catch{return[]}},saveCustomCatalog(l){try{return localStorage.setItem(Ta.CUSTOM_CATALOG,JSON.stringify(l)),!0}catch{return!1}},getUiPreferences(){try{const l=localStorage.getItem(Ta.UI_PREFS);return l?JSON.parse(l):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(l){try{return localStorage.setItem(Ta.UI_PREFS,JSON.stringify(l)),!0}catch{return!1}}};class pe{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,n)=>n.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const n=this.patches.get(a);return n?(n.enabled=!!e,!0):!1}safeExecuteHook(a,e,n={}){let r=e;const s=this.getActivePatches(a);for(const i of s)try{const t=i.hooks[a];if(typeof t=="function"){const o=t(r,n);o!==void 0&&(r=o)}}catch(t){console.warn(`[PatchManager] Peringatan: Patch "${i.id}" pada hook "${a}" gagal dieksekusi:`,t),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:i.id,hookName:a,error:t.message,stack:t.stack})}return r}async safeExecuteHookAsync(a,e,n={}){let r=e;const s=this.getActivePatches(a);for(const i of s)try{const t=i.hooks[a];if(typeof t=="function"){const o=await t(r,n);o!==void 0&&(r=o)}}catch(t){console.warn(`[PatchManager] Peringatan: Async Patch "${i.id}" pada hook "${a}" gagal:`,t),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:i.id,hookName:a,error:t.message})}return r}}const qa=new pe,me={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(l,a){return l&&{...l,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},he={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(l){return l&&{...l,kamusStatus:{available:!0,version:"3.1.0"}}}}};qa.registerPatch(me);qa.registerPatch(he);class ke{constructor(a=Ya,e=qa){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const n=this.normalize(a),r=this.extractExistingShorthands(a),s=this.stripShorthands(a),i=this.analyzeIntent(s),{editAreas:t,lockedAreas:o,unchangedAreas:d}=this.extractAreas(s,i),p=this.queryPrimaryShorthands(s,t,o,i),h=this.deduplicateByFunctionGroup(p).map(w=>({...w,isPrimary:!0,checked:!0,priority:"WAJIB"})),c=this.discoverRelatedShorthands(s,h,t,o),f=[...h,...c],g=this.detectConflicts(t,o,h,r),m=this.evaluateExclusions(f,h);let u=[];if(e&&Array.isArray(e))u=[...e];else{const w=h.sort((C,I)=>(C.promptIndex??999)-(I.promptIndex??999)).map(C=>C.code),A=new Set([...r,...w]);u=Array.from(A)}for(const w of f)w.checked=u.includes(w.code),w.active=w.checked;const k=this.generateVisualTransformation(t,o,s),b=this.buildOptimalPrompt(s,u),R={rawPrompt:a,normalizedPrompt:n,cleanText:s,intent:i,editAreas:t,lockedAreas:o,unchangedAreas:d,conflicts:g,primaryShorthands:h,relatedShorthands:c,recommendations:f,exclusions:m,installedShorthands:u,visualTransformation:k,optimalPrompt:b,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",R,{engine:this,patchManager:this.patchManager,rawPrompt:a}):R}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,n=[];let r;for(;(r=e.exec(a))!==null;)n.push(r[0]);return Array.from(new Set(n))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let n="MODIFIKASI_VISUAL",r="Gambar",s="Memproses instruksi visual pada gambar.",i="MEDIUM",t="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(n="PENINGKATAN_PENCAHAYAAN",r="Pencahayaan & Tata Cahaya",s="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",i="HIGH",t="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(n="PELEPASAN_PENUTUP_KEPALA",r="Hijab / Penutup Kepala",s="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",i="HIGH",t="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(n="PENGGANTIAN_BUSANA",r="Pakaian & Outfit",s="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",i="HIGH",t="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(n="PENAJAMAN_DETAIL",r="Mikrokontras & Detail",s="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",i="HIGH",t="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(n="PENGHAPUSAN_LATAR",r="Latar Belakang / Background",s="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",i="CRITICAL",t="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(n="PENGGANTIAN_LATAR",r="Latar Belakang / Background",s="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",i="HIGH",t="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(n="PENYESUAIAN_RASIO_KANVAS",r="Kanvas & Dimensi",s="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",i="HIGH",t="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(n="MODIFIKASI_RAMBUT",r="Rambut & Gaya Rambut",s="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",i="HIGH",t="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(n="MODIFIKASI_BENTUK_TUBUH",r="Bentuk Tubuh & Proporsi Lekuk",s="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",i="HIGH",t="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(n="PENYEMPURNAAN_ANATOMI_TANGAN",r="Tangan & Jari Subjek",s="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",i="HIGH",t="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(n="PENINGKATAN_RESOLUSI",r="Resolusi & Detail Gambar",s="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",i="HIGH",t="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(n="PERLUASAN_KANVAS_OUTPAINT",r="Bidang & Batas Kanvas Foto",s="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",i="HIGH",t="CANVAS_RATIO"),{primaryAction:n,primaryTarget:r,summary:s,priority:i,category:t}}extractAreas(a,e){const n=a.toLowerCase(),r=[],s=[],i=new Set,t=E=>{for(const T of E){if(!n.includes(T))continue;if([`jangan ubah ${T}`,`jangan ganti ${T}`,`jangan sentuh ${T}`,`jangan mengubah ${T}`,`pertahankan ${T}`,`kunci ${T}`,`jaga ${T}`,`${T} asli`,`${T} tetap`,`${T} sama`,`${T} harus tetap sama`,`keep ${T}`,`same ${T}`,`preserve ${T}`].some(v=>n.includes(v)))return!0}return!1},o=E=>{for(const T of E){if(!n.includes(T))continue;if([`ubah ${T}`,`ganti ${T}`,`hapus ${T}`,`hilangkan ${T}`,`perbaiki ${T}`,`tingkatkan ${T}`,`buat ${T}`,`lepas ${T}`,`lepaskan ${T}`,`buka ${T}`,`change ${T}`,`remove ${T}`].some(v=>n.includes(v))||T==="pencahayaan"&&(n.includes("perbaiki pencahayaan")||n.includes("lighting")||n.includes("terangkan"))||T==="hijab"&&(n.includes("hapus hijab")||n.includes("lepas hijab")||n.includes("lepaskan hijab")||n.includes("tanpa hijab"))||T==="baju"&&(n.includes("tanktop")||n.includes("kemeja")||n.includes("gaun")||n.includes("jaket"))||T==="rasio"&&(n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("4:5"))||T==="latar"&&(n.includes("latar baru")||n.includes("gunakan latar baru")||n.includes("hapus latar")))return!0}return!1},d=["wajah","muka","face","identitas","paras"];d.some(E=>n.includes(E))&&(i.add("FACE"),t(d)?s.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):o(d)&&r.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:n.includes("ganti wajah")?"/facechange":"/faceedit"}));const p=["hijab","kerudung","jilbab","penutup kepala","topi"];p.some(E=>n.includes(E))&&(i.add("HEADWEAR"),t(p)?s.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):r.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const h=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(h.some(E=>n.includes(E)))if(i.add("OUTFIT"),t(h))s.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let E="Pakaian subjek";n.includes("tanktop putih tali tipis")?E="Tanktop putih tali tipis":n.includes("tanktop")?E="Tanktop":n.includes("gaun")?E="Gaun":n.includes("kemeja")&&(E="Kemeja"),r.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${E}.`,shorthand:"/outfit"})}const c=["latar","background","backdrop","lingkungan"];if(c.some(E=>n.includes(E))&&(i.add("BACKGROUND"),t(c)?s.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):n.includes("hapus")||n.includes("transparan")||n.includes("hilangkan")||n.includes("buang")?r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(n.includes("ganti")||n.includes("ubah")||n.includes("baru")||n.includes("gunakan latar baru")||n.includes("studio"))&&r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(n.includes("pencahayaan")||n.includes("lighting")||n.includes("terangkan")||n.includes("cahaya"))&&(i.add("LIGHTING"),r.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(E=>n.includes(E))?(i.add("IMAGE_QUALITY"),r.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(n.includes("tajam")||n.includes("sharpen")||n.includes("perjelas")||n.includes("detail")||n.includes("ketajaman"))&&(i.add("IMAGE_QUALITY"),r.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),n.includes("rasio")||n.includes("9:16")||n.includes("16:9")||n.includes("1:1")||n.includes("4:5")||n.includes("format")){i.add("CANVAS_RATIO");let E="Rasio baru",T="/ar 9:16";n.includes("9:16")?(E="9:16 (Vertical)",T="/ar 9:16"):n.includes("16:9")?(E="16:9 (Landscape)",T="/ar 16:9"):n.includes("1:1")?(E="1:1 (Persegi)",T="/ar 1:1"):n.includes("4:5")&&(E="4:5 (Portrait)",T="/ar 4:5"),r.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${E}.`,shorthand:T})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(E=>n.includes(E))&&(i.add("CANVAS_RATIO"),r.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(n.includes("full body")||n.includes("seluruh tubuh")||n.includes("badan penuh"))&&(i.add("BODY_POSE"),r.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const u=["rambut","hair","botak","cukur"];if(u.some(E=>n.includes(E))){i.add("HAIR");const E=t(u),T=o(u)||n.includes("botak")||n.includes("merah")||n.includes("cat")||n.includes("gaya rambut");E&&T?(s.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),r.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:n.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):E?s.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):T&&r.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:n.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const k=["tubuh","badan","pose","postur"],b=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],R=b.some(E=>n.includes(E));(k.some(E=>n.includes(E))||R)&&(i.add("BODY_POSE"),t([...k,...b])?s.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):R&&r.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const A=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];A.some(E=>n.includes(E))&&(i.add("BODY_POSE"),t(A)?s.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):r.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const I=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(E=>!i.has(E.key)).map(E=>({entity:E.key,label:E.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${E.label.toLowerCase()}.`}));return{editAreas:r,lockedAreas:s,unchangedAreas:I}}findPromptIndex(a,e,n=[]){const r=a.toLowerCase();let s=999;const i=[...e.semanticTriggers||[],...n];for(const t of i){if(!t||t.length<3)continue;const o=r.indexOf(t.toLowerCase());o!==-1&&o<s&&(s=o)}return s}queryPrimaryShorthands(a,e,n,r){const s=new Map;for(const i of n)if(i.shorthand){const t=this.catalog.find(o=>o.code===i.shorthand);if(t){const o=this.findPromptIndex(a,t,[i.label,i.entity,"jangan","pertahankan","kunci"]);s.set(t.code,{item:t,code:t.code,name:t.name,category:t.category,target:i.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${i.description.toLowerCase()}`,score:100,promptIndex:o})}}for(const i of e)if(i.shorthand){const t=this.catalog.find(o=>o.code===i.shorthand);if(t){const o=this.findPromptIndex(a,t,[i.label,i.entity,"ubah","ganti","hapus"]);s.set(t.code,{item:t,code:t.code,name:t.name,category:i.category||t.category,target:i.label,priority:"WAJIB",reason:`Mendukung eksekusi ${i.description.toLowerCase()}`,score:95,promptIndex:o})}}if(e.some(i=>i.entity==="LIGHTING")&&!s.has("/enhance")){const i=this.catalog.find(t=>t.code==="/enhance");i&&s.set("/enhance",{item:i,code:i.code,name:i.name,category:i.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,i,["pencahayaan","lighting"])})}if(e.some(i=>i.entity==="IMAGE_QUALITY")&&!s.has("/sharpen")&&!s.has("/highresolution")){const i=this.catalog.find(t=>t.code==="/sharpen");i&&s.set("/sharpen",{item:i,code:i.code,name:i.name,category:i.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,i,["tajam","sharpen"])})}for(const i of this.catalog){if(s.has(i.code))continue;const t=xa(i,a);if(t>=70){if(n.some(h=>{if(h.shorthand&&i.conflicts&&i.conflicts.includes(h.shorthand))return!0;const c=this.catalog.find(f=>f.code===h.shorthand);return!!(c&&c.conflicts&&c.conflicts.includes(i.code))})||Array.from(s.values()).some(h=>{var c,f;return(f=(c=h.item)==null?void 0:c.relationships)==null?void 0:f.some(g=>g.code===i.code&&g.relationType==="ALTERNATIVE")}))continue;i.category;const p=this.findPromptIndex(a,i);s.set(i.code,{item:i,code:i.code,name:i.name,category:i.category,target:i.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${i.name}'.`,score:t,promptIndex:p})}}return Array.from(s.values())}deduplicateByFunctionGroup(a){var r,s,i;const e=new Map;for(const t of a){const o=((r=t.item)==null?void 0:r.functionGroup)||((s=t.item)==null?void 0:s.category)||t.code;e.has(o)?e.get(o).push(t):e.set(o,[t])}const n=[];for(const[t,o]of e.entries()){if(o.length===1){n.push(o[0]);continue}o.sort((c,f)=>{var R,w,A,C;const g=(R=c.item)!=null&&R.preferredRepresentative?1:0,m=(w=f.item)!=null&&w.preferredRepresentative?1:0;if(m!==g)return m-g;const u={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},k=u[(A=c.item)==null?void 0:A.status]||2,b=u[(C=f.item)==null?void 0:C.status]||2;return b!==k?b-k:(f.score||0)!==(c.score||0)?(f.score||0)-(c.score||0):c.code.length-f.code.length});const d={...o[0]},p=o.slice(1).map(c=>c.code),h=Array.from(new Set([...((i=d.item)==null?void 0:i.equivalentTo)||[],...p,...o.slice(1).flatMap(c=>{var f;return((f=c.item)==null?void 0:f.equivalentTo)||[]})])).filter(c=>c!==d.code);d.item={...d.item,equivalentTo:h},d.equivalentTo=h,n.push(d)}return n}hasConflict(a,e,n){if(!a)return!1;for(const r of e){if(a.code===r)continue;if(a.conflicts&&a.conflicts.includes(r))return!0;const s=this.catalog.find(i=>i.code===r);if(s&&s.conflicts&&s.conflicts.includes(a.code))return!0}for(const r of n){if(a.code===r)continue;if(a.conflicts&&a.conflicts.includes(r))return!0;const s=this.catalog.find(i=>i.code===r);if(s&&s.conflicts&&s.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,n,r){var f;const s=new Set(e.map(g=>g.code));for(const g of e)if(g.equivalentTo)for(const m of g.equivalentTo)s.add(m);const i=new Set(e.map(g=>{var m,u;return((m=g.item)==null?void 0:m.functionGroup)||((u=g.item)==null?void 0:u.category)})),t=new Set([...n.map(g=>g.entity),...r.map(g=>g.entity)]),o=new Set(r.map(g=>g.shorthand).filter(Boolean)),d=new Map;for(const g of e){const m=((f=g.item)==null?void 0:f.relationships)||[];for(const u of m){if(!u.code||s.has(u.code))continue;const k=this.catalog.find(R=>R.code===u.code);if(!k||this.hasConflict(k,o,s)||xa(k,a)<0)continue;const b=k.functionGroup||k.category;i.has(b)||k.category==="HEADWEAR"&&!t.has("HEADWEAR")||d.has(k.code)||d.set(k.code,{item:k,code:k.code,name:k.name,category:k.category,target:k.target,functionGroup:b,description:k.description,relationship:u.relationType||"DIRECTLY_RELATED",reason:u.reason||`Berhubungan dengan ${g.name}`,source:k.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const p={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const g of t){const m=p[g]||[];for(const u of m)for(const k of this.catalog){if(s.has(k.code)||d.has(k.code)||u.category&&k.category!==u.category||u.target&&k.target!==u.target||k.category==="HEADWEAR"&&!t.has("HEADWEAR")||k.category==="TRANSPARENCY"&&!t.has("BACKGROUND")||this.hasConflict(k,o,s)||xa(k,a)<0)continue;const b=k.functionGroup||k.category;i.has(b)||d.set(k.code,{item:k,code:k.code,name:k.name,category:k.category,target:k.target,functionGroup:b,description:k.description,relationship:u.relation||"CONTEXTUAL",reason:u.reason||`Berhubungan dengan area ${g}`,source:k.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const h=Array.from(d.values());return this.deduplicateByFunctionGroup(h).map(g=>({...g,isPrimary:!1,checked:!1,priority:g.priority||"DISARANKAN"}))}detectConflicts(a,e,n,r){const s=[];for(const o of a){const d=e.find(p=>p.entity===o.entity);if(d){const p={id:`conflict-${o.entity.toLowerCase()}`,entity:o.entity,label:o.label,type:"EDIT_VS_LOCK",shorthandA:d.shorthand||`[Lock ${o.entity}]`,shorthandB:o.shorthand||`[Ubah ${o.entity}]`,instructionA:d.description,instructionB:o.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${o.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};p.suggestion=this.generateConflictSuggestion(p),s.push(p)}}const i=Array.isArray(n)?n.map(o=>typeof o=="string"?o:o.code):Array.from(n.keys?n.keys():[]),t=Array.from(new Set([...i,...r]));for(const o of t){const d=this.catalog.find(p=>p.code===o);if(!(!d||!d.conflicts||d.conflicts.length===0)){for(const p of d.conflicts)if(t.includes(p)){if(s.some(f=>f.shorthandA===o&&f.shorthandB===p||f.shorthandA===p&&f.shorthandB===o))continue;const c=`conflict-${[o,p].sort().join("-")}`;if(!s.some(f=>f.id===c)){const f=this.catalog.find(m=>m.code===p),g={id:c,entity:d.target,label:d.name,type:"SHORTHAND_CLASH",shorthandA:o,shorthandB:p,instructionA:d.description,instructionB:f?f.description:`Konflik dengan direktif ${p}`,reason:`Shorthand ${o} bertentangan langsung dengan ${p} pada target ${d.target}.`,options:[{id:"keep_a",label:`Gunakan ${o}`},{id:"keep_b",label:`Gunakan ${p}`}]};g.suggestion=this.generateConflictSuggestion(g,d,f),s.push(g)}}}}return s}generateConflictSuggestion(a,e=null,n=null){const r=(a.shorthandA||"").toLowerCase(),s=(a.shorthandB||"").toLowerCase(),i=[r,s].sort().join(" vs ");if(i==="/backgroundlock vs /bgblur"||r==="/backgroundlock"&&s==="/bgblur"||s==="/backgroundlock"&&r==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(i==="/backgroundlock vs /studiobg"||r==="/backgroundlock"&&s==="/studiobg"||s==="/backgroundlock"&&r==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(i==="/backgroundlock vs /bgreplace"||r==="/backgroundlock"&&s==="/bgreplace"||s==="/backgroundlock"&&r==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(i==="/backgroundlock vs /bgremove"||r==="/backgroundlock"&&s==="/bgremove"||s==="/backgroundlock"&&r==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(i==="/bgremove vs /bgreplace"||r==="/bgreplace"&&s==="/bgremove"||r==="/bgremove"&&s==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(i==="/bgblur vs /bgremove"||r==="/bgblur"&&s==="/bgremove"||r==="/bgremove"&&s==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(i==="/bgremove vs /studiobg"||r==="/studiobg"&&s==="/bgremove"||r==="/bgremove"&&s==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(i==="/bgblur vs /studiobg"||r==="/studiobg"&&s==="/bgblur"||r==="/bgblur"&&s==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(r==="/facelock"||s==="/facelock"){const o=r==="/facelock"?s:r;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${o}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${o}.`}if(r==="/outfitlock"||s==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${r==="/outfitlock"?s:r}.`;if(r==="/hairlock"||s==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${r==="/hairlock"?s:r}.`;if(r==="/headwearlock"||s==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${r==="/headwearlock"?s:r} jika ingin melepas atau mengganti penutup kepala.`;if(r==="/bodylock"||s==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${r==="/bodylock"?s:r}.`;if(i==="/cinematic vs /rawphoto"||r==="/cinematic"&&s==="/rawphoto"||r==="/rawphoto"&&s==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(i==="/rawphoto vs /vintage"||r==="/vintage"&&s==="/rawphoto"||r==="/rawphoto"&&s==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(i==="/cooltone vs /warmtone"||r==="/warmtone"&&s==="/cooltone"||r==="/cooltone"&&s==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(r==="/monochrome"||s==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${r==="/monochrome"?s:r} jika gambar harus tampil berwarna.`;if(i==="/bokeh vs /sharpen"||r==="/sharpen"&&s==="/bokeh"||r==="/bokeh"&&s==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const o=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${o}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${o}) dan batalkan instruksi ubah.`}const t=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${t}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const n=new Set(a.map(i=>i.code));for(const i of a)if(i.equivalentTo)for(const t of i.equivalentTo)n.add(t);const r=new Set(e.map(i=>i.code)),s=[];for(const i of this.catalog){if(n.has(i.code))continue;let t="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const o=e.find(d=>{var p;return!!(i.conflicts&&i.conflicts.includes(d.code)||(p=d.item)!=null&&p.conflicts&&d.item.conflicts.includes(i.code))});o?t=`Bertentangan dengan direktif aktif: ${o.code} (${o.name}).`:i.category==="LOCK_PRESERVATION"||i.category==="FACE_IDENTITY"?i.code==="/facelock"||i.code==="/faceedit"||i.code==="/facechange"?t="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":i.code==="/hairlock"?t="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":i.code==="/backgroundlock"?t="Latar belakang tidak diminta untuk dikunci secara eksplisit.":i.code==="/outfitlock"?t="Pakaian subjek tidak diminta untuk dikunci.":i.code==="/headwearlock"&&(t="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):i.category==="HAIR"?t="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":i.category==="OUTFIT"?r.has("/outfit")?i.code==="/outfit-remove"?t="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":i.code==="/outfit-color"?t="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":t="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":t="Tidak ada instruksi yang memodifikasi pakaian atau busana.":i.category==="HEADWEAR"?t="Tidak ada instruksi penutup kepala atau hijab.":i.category==="BACKGROUND"||i.category==="TRANSPARENCY"?i.code==="/bgremove"?t="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":i.code==="/bgreplace"?t="Tidak ada permintaan penggantian latar belakang ke scene baru.":t="Tidak ada permintaan manipulasi latar belakang.":i.category==="CANVAS_RATIO"?t="Tidak ada instruksi pengubahan rasio kanvas gambar.":i.category==="BODY_POSE"?t="Tidak ada permintaan perubahan pose atau framing seluruh badan.":i.category==="STYLE_EFFECT"||i.category==="CAMERA_PHOTO"?t="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":i.category==="EXPRESSION"?t="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":i.category==="OBJECT"&&(t="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),s.push({code:i.code,name:i.name,category:i.category,target:i.target,description:i.description,reason:t})}return s}generateVisualTransformation(a,e,n){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:n||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const r=a.map(o=>o.label).join(", "),s=e.map(o=>o.label).join(", ");let i="Elemen visual awal gambar",t="Elemen visual teroptimasi";if(a.some(o=>o.entity==="LIGHTING"))i="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",t="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(o=>o.entity==="HEADWEAR"))i="Subjek mengenakan penutup kepala / hijab asli",t="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(s?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(o=>o.entity==="OUTFIT")){const o=a.find(d=>d.entity==="OUTFIT");i="Busana awal subjek",t=`${o?o.description:"Busana baru terpasang"}`+(s?`; ${s} tetap terkunci aman.`:"")}else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REMOVE")))i="Foto subjek dengan latar belakang bawaan",t="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REPLACE")))i="Latar belakang awal foto",t="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(o=>o.entity==="CANVAS_RATIO")){const o=a.find(d=>d.entity==="CANVAS_RATIO");i="Dimensi kanvas bawaan foto",t=`${o?o.description:"Dimensi kanvas baru disesuaikan"}`}return{from:i,to:t,summary:`Transformasi pada [${r||"Tanpa Edit"}] dengan preservasi pada [${s||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let n=a.trim();n&&!n.endsWith(".")&&!n.endsWith("!")&&!n.endsWith("?")&&(n+=".");const r=e.join(" ");return n&&r?`${n} ${r}`:r||n}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",generatedPrompt:"",visionData:null,visualBreakdown:null,timestamp:null}}}function Ga(l,a=1,e=.5){if(a<.12)return e>.85?"putih bersih / krem netral":e>.65?"abu-abu terang netral":e>.35?"abu-abu netral":e>.15?"abu-abu arang gelap":"hitam pekat monokromatik";switch(l){case"cyan":case"teal":return"biru toska / cyan cerah / denim";case"blue":return"biru muda / denim cerah";case"navy":return"biru tua / biru kobalt";case"pink":return"merah muda / pink pastel lembut";case"purple":case"violet":return"ungu lavender / violet";case"red":return"merah menyala / crimson";case"orange":return"oranye hangat / amber";case"yellow":return"kuning cerah / pastel yellow";case"lime":return"hijau muda terang / lime";case"green":return"hijau zamrud / toska alami";default:return"netral harmonis"}}function Ua(l,a=1,e=.5){if(a<.12)return e>.85?"clean white / soft cream":e>.65?"light neutral gray":e>.35?"medium neutral gray":e>.15?"dark charcoal gray":"deep monochromatic black";switch(l){case"cyan":case"teal":return"light cyan / vibrant teal / sky denim";case"blue":return"vivid denim blue / bright blue";case"navy":return"deep navy blue / royal cobalt";case"pink":return"soft pastel pink / rose";case"purple":case"violet":return"lavender / soft violet";case"red":return"vibrant crimson red";case"orange":return"warm amber orange";case"yellow":return"bright sunny yellow";case"lime":return"bright lime green";case"green":return"emerald green / mint";default:return"balanced neutral tone"}}const be={"9:16":9/16,"2:3":2/3,"3:4":3/4,"1:1":1,"4:3":4/3,"3:2":3/2,"16:9":16/9};function Ka(l,a){if(!l||!a||l<=0||a<=0)return"1:1";const e=l/a;let n="1:1",r=1/0;for(const[s,i]of Object.entries(be)){const t=Math.abs(e-i);t<r&&(r=t,n=s)}return n}function za(l,a={}){var c,f;const e=(a.filename||"").toLowerCase(),n=a.width||(l==null?void 0:l.width)||800,r=a.height||(l==null?void 0:l.height)||800,s=n/(r||1),i=Ka(n,r),o=(a.targetAspectRatio&&a.targetAspectRatio!=="Otomatis"&&a.targetAspectRatio!=="auto"?a.targetAspectRatio:null)||i;let d="square";s>1.15?d=s>1.6?"landscape-wide":"landscape":s<.88&&(d=s<.65?"portrait-tall":"portrait");const p=e.startsWith("unduhan")||e.includes("download")||e.includes("jfif"),h=e.includes("3d")||e.includes("chibi")||e.includes("doll")||e.includes("render")||e.includes("toy")||e.includes("figure")||e.includes("figurine")||e.includes("character")||e.includes("boneka")||e.includes("avatar")||e.includes("anime")||e.includes("kartun")||e.includes("cartoon")||e.includes("hoodie");if(!l||typeof l.getContext!="function"){const g=h||p&&e.endsWith(".jfif"),m=g?"cyan":"neutral";return{dimensions:{width:n,height:r,aspectRatio:o,orientation:d},styleType:g?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:g,dominantHue:m,dominantColorIndonesian:Ga(m,g?.4:.05,.5),dominantColorEnglish:Ua(m,g?.4:.05,.5),secondaryColorIndonesian:g?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:g?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:g?"latar studio netral dengan pencahayaan gradasi halus":"latar belakang netral teratur",lightingStyleIndonesian:g?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:g?.38:.18,avgLum:.55,satRatio:g?.32:.12,edgeDensity:g?16:32,centerContrast:.25}}try{const m=document.createElement("canvas");m.width=64,m.height=64;const u=m.getContext("2d",{willReadFrequently:!0});if(!u)throw new Error("Canvas 2D context unavailable");u.drawImage(l,0,0,64,64);const k=u.getImageData(0,0,64,64).data,b=4096;let R=0,w=0,A=0,C=0,I=0,E=0,T=0,U=0,v=0,D=0,H=0,G=0,O=0,P=0,N=0,Y=0;const W={cyan:0,blue:0,navy:0,pink:0,purple:0,red:0,orange:0,yellow:0,lime:0,green:0,white:0,gray:0,black:0},oa={},V={},B=new Float32Array(b);for(let q=0;q<64;q++)for(let J=0;J<64;J++){const F=(q*64+J)*4,M=k[F],ea=k[F+1],ya=k[F+2];R+=M,w+=ea,A+=ya;const ma=M/255,ba=ea/255,Aa=ya/255,Oa=Math.max(ma,ba,Aa),wa=Math.min(ma,ba,Aa);let Z=0,Pa=0,ha=(Oa+wa)/2;if(Oa!==wa){const Ma=Oa-wa;switch(Pa=ha>.5?Ma/(2-Oa-wa):Ma/(Oa+wa),Oa){case ma:Z=(ba-Aa)/Ma+(ba<Aa?6:0);break;case ba:Z=(Aa-ma)/Ma+2;break;case Aa:Z=(ma-ba)/Ma+4;break}Z*=60}B[q*64+J]=ha,C+=Pa,I+=ha,q<64/2?O+=ha:P+=ha,J<64/2?N+=ha:Y+=ha;let ta="gray";Pa<.14?ha>.82?ta="white":ha<.18?ta="black":ta="gray":(E++,Z>=345||Z<15?ta="red":Z>=15&&Z<45?ta="orange":Z>=45&&Z<70?ta="yellow":Z>=70&&Z<105?ta="lime":Z>=105&&Z<145?ta="green":Z>=145&&Z<195?ta="cyan":Z>=195&&Z<225?ta="blue":Z>=225&&Z<260?ta="navy":Z>=260&&Z<295?ta="purple":Z>=295&&Z<345&&(ta="pink")),W[ta]=(W[ta]||0)+1;const se=J>=16&&J<=48&&q>=14&&q<=50,oe=J<10||J>=54||q<8||q>=56;se&&(T+=Pa,U+=ha,v++,oa[ta]=(oa[ta]||0)+1),oe&&(D+=Pa,H+=ha,G++,V[ta]=(V[ta]||0)+1)}const X=C/b,aa=I/b,_=v?T/v:X,y=G?D/G:X,S=E/b;let L=0,j=0;for(let q=1;q<63;q++)for(let J=1;J<63;J++){const F=B[q*64+J],M=Math.abs(B[q*64+(J+1)]-B[q*64+(J-1)]),ea=Math.abs(B[(q+1)*64+J]-B[(q-1)*64+J]);L+=M+ea,j++}const K=Math.round(L/(j||1)*100),x=Object.entries(W).sort((q,J)=>J[1]-q[1]).map(q=>q[0]),$=x[0]||"neutral",Q=x[1]||"gray",ga=((c=Object.entries(V).sort((q,J)=>J[1]-q[1])[0])==null?void 0:c[0])||"white",pa=((f=Object.entries(oa).sort((q,J)=>J[1]-q[1])[0])==null?void 0:f[0])||$;let da="pencahayaan studio terdistribusi seimbang dengan fill merata";const ka=(O-P)/(b/2),ia=U/(v||1)-H/(G||1);ia>.15?da="pencahayaan studio terarah lembut pada subjek utama dengan vignette halus":ia<-.12?da="pencahayaan rim light kontur dengan pencahayaan latar belakang terdifusi":ka>.15?da="pencahayaan softbox terarah dari sudut atas dengan gradasi bayangan natural":aa<.3?da="pencahayaan dramatis low-key dengan aksen highlight tajam":aa>.7&&(da="pencahayaan terang high-key bersih tanpa bayangan pekat");const la=$==="cyan"||$==="blue"||pa==="cyan"||pa==="blue"||W.cyan+W.blue>b*.1,ca=K<22,Ea=S>.18||X>.22||la;let ua="REALISTIC_PHOTO";h||p&&(Ea||la)||ca&&Ea?ua="STYLED_3D_CHARACTER":$==="green"&&s>1.2?ua="NATURE_LANDSCAPE":$==="gray"&&K>28&&(ua="URBAN_ARCHITECTURE");const La=Ga(pa,_,aa),Na=Ua(pa,_,aa),va=Ga(Q,X,aa),Ia=Ua(Q,X,aa),Ra=Ga(ga,y,H/(G||1));return{dimensions:{width:n,height:r,aspectRatio:o,orientation:d},styleType:ua,isStylizedOr3D:ua==="STYLED_3D_CHARACTER",dominantHue:pa,dominantColorIndonesian:La,dominantColorEnglish:Na,secondaryColorIndonesian:va,secondaryColorEnglish:Ia,backgroundColorIndonesian:Ra,lightingStyleIndonesian:da,contrastLevel:Math.abs(ia)>.1?"tinggi terarah":"seimbang lembut",avgSat:Number(X.toFixed(2)),avgLum:Number(aa.toFixed(2)),satRatio:Number(S.toFixed(2)),edgeDensity:K,centerContrast:Number((_-y).toFixed(2))}}catch(g){console.warn("Canvas deep pixel analysis error:",g);const m=h||p&&e.endsWith(".jfif"),u=m?"cyan":"neutral";return{dimensions:{width:n,height:r,aspectRatio:o,orientation:d},styleType:m?"STYLED_3D_CHARACTER":"REALISTIC_PHOTO",isStylizedOr3D:m,dominantHue:u,dominantColorIndonesian:Ga(u,m?.4:.05,.5),dominantColorEnglish:Ua(u,m?.4:.05,.5),secondaryColorIndonesian:m?"putih bersih / krem netral":"abu-abu netral",secondaryColorEnglish:m?"clean white / soft cream":"neutral gray",backgroundColorIndonesian:"latar studio bersih terdifusi",lightingStyleIndonesian:m?"pencahayaan studio 3D terarah halus dengan rim light lembut":"pencahayaan terarah seimbang",contrastLevel:"seimbang",avgSat:m?.35:.18,avgLum:.55,satRatio:m?.28:.12,edgeDensity:m?16:30,centerContrast:.2}}}function fe(l,a={}){var U,v,D,H;const e=a.preferredLang==="en",n=l||{},r=(a.filename||"").toLowerCase(),s=(a.referencePrompt||"").trim(),i=s.toLowerCase(),t=`${r} ${i}`,o=a.targetAspectRatio||a.aspectRatio,d=o&&o!=="Otomatis"&&o!=="auto"?o:n.aspectRatio||((U=n.dimensions)==null?void 0:U.aspectRatio)||n.detectedRatio||"1:1",p=((v=n.dimensions)==null?void 0:v.orientation)||"square",h=n.dominantColorIndonesian||"biru toska / cyan cerah / denim",c=n.dominantColorEnglish||"light cyan / sky blue / denim",f=n.secondaryColorIndonesian||"krem / putih netral",g=n.secondaryColorEnglish||"soft cream / clean white",m=n.backgroundColorIndonesian||"latar studio bersih terdifusi",u=n.backgroundColorEnglish||"clean diffused studio backdrop",k=n.lightingStyleIndonesian||"pencahayaan studio terarah halus";if(!!(n.isStylizedOr3D||n.styleType==="STYLED_3D_CHARACTER"||t.includes("chibi")||t.includes("3d")||t.includes("doll")||t.includes("boneka")||t.includes("figurine")||t.includes("figure")||t.includes("toy")||t.includes("miniatur")||t.includes("render")||t.includes("avatar")||t.includes("karakter")||t.includes("character")||t.includes("anime")||t.includes("kartun")||t.includes("cartoon")||t.includes("hoodie")||r.startsWith("unduhan")&&(r.endsWith(".jfif")||(n.avgSat||0)>.15)))return{mainDescription:e?`Cute stylized 3D animated character figurine with expressive oversized eyes, dressed in an oversized hoodie jacket in ${c}, set against a clean studio backdrop with fine directional 3D illumination.`:`Karakter animasi 3D bergaya cute chibi doll figurine dengan mata besar ekspresif yang berbinar, mengenakan jaket hoodie berwarna ${h} bertekstur kain detail, dengan ${k}.`,subjectDescription:e?"Adorably proportioned 3D character doll featuring luminous stylized anime-like eyes, soft rosy cheeks, and smooth porcelain-grade subsurface scattering skin finish.":"Karakter figurin 3D imut (cute chibi doll) dengan proporsi wajah manis, tatapan mata besar jernih berbinar bergaya animasi 3D, pipi merona lembut, dan permukaan material kulit halus dengan subsurface scattering alami.",poseExpression:e?"Poised centered posture facing directly toward the camera, head charmingly tilted with a curious and serene expression.":"Postur tubuh imut terpusat menghadap ke arah kamera, kepala sedikit condong dengan ekspresi manis menggemaskan dan tatapan mata fokus.",identityPreservation:e?"Preserve the unique stylized 3D doll facial features, large anime eyes, and signature jacket tailoring.":"Pertahankan proporsi wajah karakter figurin 3D yang khas, bentuk mata besar berbinar, ekspresi imut, dan desain jaket asli.",outfitMaterial:e?`Cozy hoodie jacket crafted in ${c} with visible woven thread texture, refined hem stitching, hood drawstring accents, complemented by ${f}.`:`Jaket hoodie tebal berkerudung berwarna ${h} dengan kerapatan rajutan kain tampak jelas, jahitan tepi presisi, aksen tali hoodie, dan perpaduan aksen ${f}.`,environmentBackground:e?`Minimalist studio environment with soft diffused backdrop in ${m}, cleanly isolating the 3D figurine subject.`:`Latar belakang studio minimalis dengan nuansa ${m} terdifusi halus yang mengisolasi karakter secara bersih dan terfokus.`,compositionPerspective:e?`Medium closeup portrait centered framing in ${d} aspect ratio, eye-level perspective with measured shallow depth of field.`:`Komposisi medium portrait closeup terpusat dengan rasio aspek ${d}, sudut pandang kamera sejajar mata (eye-level), dan kedalaman bidang terukur (shallow depth of field).`,lightingColor:e?"Controlled 3D studio lighting with soft key fill, subtle rim highlights along the jacket contours, and clean ambient shadows.":`${k}, rim light tipis di sepanjang kontur jaket dan rambut, serta fill ambient lembut tanpa bayangan kasar.`,cameraLensDof:e?"Macro portrait perspective, crisp focus on the character's eyes and face with creamy studio background bokeh.":"Sudut pandang makro portrait, ketajaman kristal pada detail mata dan tekstur busana, dengan latar belakang bokeh studio yang lembut.",photoStyleRealism:e?"High-end 3D digital character render, Octane Render and Unreal Engine 5 aesthetic, smooth vinyl toy surface texture, extreme microcontrast.":"Gaya render digital 3D berkualitas tinggi (3D character / Octane Render aesthetic), tekstur material figurine halus, subsurface scattering lembut pada kulit, dan detail kain presisi.",aspectRatio:d,optimizationNeeds:["high detail","detail preservation","texture preservation","color balance","soft lighting","studio lighting","subsurface scattering"],suggestedShorthands:["/studio","/eyelevel","/softlight","/highdetail","/detailpreservation","/texturepreservation","/enhance"],contextualNegativePrompt:e?"real human photo, photorealistic real skin, wrinkled face, photographic grain, bad 3d render, distorted limbs, extra fingers, deformed eyes, blurry, low resolution, watermark, text":"real human photo, foto manusia asli, kulit berkerut, pori-pori kasar, photographic grain, render 3d cacat, anatomi rusak, jari ekstra, mata juling, buram, resolusi rendah, watermark, teks"};if(!!(n.styleType==="NATURE_LANDSCAPE"||t.includes("landscape")||t.includes("mountain")||t.includes("beach")||t.includes("lake")||t.includes("sunset")||t.includes("sunrise")||t.includes("forest")||t.includes("nature")||t.includes("gunung")||t.includes("pantai")||t.includes("danau")||t.includes("hutan")||t.includes("pemandangan")||t.includes("river")||t.includes("sungai")||t.includes("ocean")||t.includes("laut")||t.includes("valley")||n.dominantHue==="green"&&((D=n.dimensions)==null?void 0:D.width)/(((H=n.dimensions)==null?void 0:H.height)||1)>1.25)){const G=d==="1:1"?"16:9":d;return{mainDescription:e?`Expansive natural landscape photography capturing wide panoramic vistas, dominant ${c} earth tones, and atmospheric ambient illumination.`:`Pemandangan lanskap alam terbuka yang membentang luas dengan formasi horizon memukau, dominasi palet ${h}, dan atmosfer alam yang tenang.`,subjectDescription:e?`Layered geographical contours of undulating terrain with organic vegetation in the foreground and natural ${c} accents.`:`Hamparan bentang alam alami dengan kontur geografis berundak, vegetasi asri, dan aksen alami ${h} pada latar depan dan tengah.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Open scenic wilderness environment with expansive skyline, natural ${u}, and distant atmospheric haze.`:`Lingkungan alam terbuka dengan panorama cakrawala luas, batuan alami bernuansa ${m}, dan nuansa atmosfer yang jernih.`,compositionPerspective:e?`Wide-angle panoramic composition following rule-of-thirds framing, balanced horizontal perspective in ${G} aspect ratio, deep focus throughout.`:`Komposisi lanskap panorama sudut lebar (wide-angle shot) dengan rasio ${G}, garis horizon proporsional mengikuti kaidah rule of thirds, kedalaman ruang penuh (deep focus).`,lightingColor:e?`${k} with warm ambient glow, rich tonal dynamic range between bright skies and natural shadows.`:`${k}, rentang tonal dinamis yang seimbang antara langit terang dan bayangan alami.`,cameraLensDof:e?"24mm wide-angle lens, f/8 aperture, edge-to-edge sharpness from foreground rocks to distant horizon.":"Lensa sudut lebar (wide-angle 24mm f/8), seluruh bidang foto tajam menyeluruh dari foreground hingga cakrawala.",photoStyleRealism:e?"Realistic outdoor nature photography with microcontrast clarity, authentic earthy textures without synthetic saturation.":"Fotografi lanskap realistis dengan detail mikrokontras tinggi pada tekstur batuan dan dedaunan tanpa saturasi berlebih.",aspectRatio:G,optimizationNeeds:["shadow recovery","highlight control","dynamic range","natural tone","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/landscape","/wideangle","/deepfocus","/daylight","/rawphoto","/highdetail","/enhance"],contextualNegativePrompt:e?"people, text, buildings, cars, urban elements, low resolution, blurry, oversaturated colors, artificial clouds, chromatic aberration, digital noise, artifacts, watermark":"people, text, buildings, cars, manusia, perkotaan, low resolution, blur, oversaturated, awan sintetis, chromatic aberration, noise digital, artefak, watermark"}}if(!!(n.styleType==="URBAN_ARCHITECTURE"||t.includes("architecture")||t.includes("building")||t.includes("city")||t.includes("street")||t.includes("urban")||t.includes("tokyo")||t.includes("gedung")||t.includes("bangunan")||t.includes("jalan")||t.includes("kota")||t.includes("skyscraper")||t.includes("tower")||t.includes("facade")||t.includes("menara")||t.includes("interior")||t.includes("exterior")))return{mainDescription:e?`Contemporary urban architectural photography showcasing structural geometric lines, clean facades in ${c}, and ambient city illumination.`:`Struktur arsitektur modern dengan fasad geometris kontemporer, dominasi material bernuansa ${h}, dan garis struktural presisi.`,subjectDescription:e?`Modern architectural structure featuring precision vertical and diagonal geometry, reflective panels in ${c}, and clean structural lines.`:`Bangunan arsitektur dengan garis struktural presisi dan detail material fasad bernuansa ${h} berpadu dengan aksen ${f}.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Metropolitan urban environment with street-level pavement, architectural setting in ${u}, and clear perspective.`:`Kawasan urban perkotaan atau interior berlatar ${m} dengan perspektif geometris teratur.`,compositionPerspective:e?`Architectural perspective framed in ${d} aspect ratio with corrected converging lines, symmetrical framing, and balanced geometric balance.`:`Komposisi sudut presisi dalam rasio ${d} dengan penekanan pada garis tegak lurus, sudut pandang teratur, dan keseimbangan simetri.`,lightingColor:e?`${k} with clean highlights on structural surfaces and balanced shadows.`:`${k}, highlight teratur pada permukaan material, dan keseimbangan bayangan bersih.`,cameraLensDof:e?"35mm perspective-corrected tilt-shift lens, deep focus with maximum geometric fidelity.":"Lensa 35mm dengan koreksi distorsi perspektif (perspective correction) dan ketajaman merata menyeluruh (deep focus).",photoStyleRealism:e?"High-precision architectural documentary photography with crisp material textures and zero optic distortion.":"Fotografi arsitektur realistis dengan reproduksi tekstur material autentik dan distorsi minimal.",aspectRatio:d,optimizationNeeds:["perspective correction","lens correction","composition balance","natural contrast","high detail","detail preservation","natural processing","raw photo"],suggestedShorthands:["/architecture","/deepfocus","/naturalcontrast","/perspectivecorrection","/highdetail","/rawphoto"],contextualNegativePrompt:e?"distorted lines, bent architecture, blurry edges, heavy grain, bad reflection, overexposed, watermark, text":"garis melengkung, distorsi gedung, tepi buram, grain kasar, refleksi rusak, overexposed, watermark, teks"};if(!!(t.includes("animal")||t.includes("cat")||t.includes("dog")||t.includes("bird")||t.includes("wildlife")||t.includes("kucing")||t.includes("anjing")||t.includes("burung")||t.includes("hewan")||t.includes("satwa")))return{mainDescription:e?`Intimate wildlife portrait capturing authentic animal subject with coat tones in ${c}, sharp eye focus, and natural demeanor.`:`Potret satwa autentik dengan nuansa warna ${h}, fokus tajam pada mata, dan tekstur bulu alami.`,subjectDescription:e?`A captivating animal subject showcasing alert gaze, distinct coat patterns in ${c}, and organic vitality.`:`Seekor hewan dengan ekspresi lincah, tatapan mata jernih, dan bulu bernuansa ${h} berpadu ${f}.`,poseExpression:e?"Natural posture with head slightly angled, curious and calm demeanor directed toward the camera.":"Posisi tubuh alami dengan kepala condong proporsional dan tatapan mata fokus ke arah depan.",identityPreservation:"-",outfitMaterial:"-",environmentBackground:e?`Organic natural habitat or indoor setting in ${u} isolating the subject cleanly.`:`Lingkungan berlatar ${m} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Medium closeup shot framed in ${d} aspect ratio at eye-level with the animal, centered subject framing with shallow depth of field.`:`Closeup framing dalam rasio ${d} pada sudut pandang sejajar mata hewan (eye-level), komposisi terpusat proporsional.`,lightingColor:e?`${k} creating natural catchlights in the eyes and gentle coat highlights.`:`${k}, kilau alami pada mata, dan gradasi highlight lembut pada kontur tubuh.`,cameraLensDof:e?"135mm telephoto lens at f/2.8, shallow depth of field with creamy bokeh background.":"Lensa telephoto 135mm f/2.8, kedalaman bidang dangkal (shallow dof) dengan latar belakang blur halus.",photoStyleRealism:e?"Realistic wildlife photography preserving individual strands of fur, whiskers, and natural iris reflections.":"Fotografi satwa realistis dengan detail helai bulu yang tajam dan warna alami tanpa manipulasi sintetis.",aspectRatio:d,optimizationNeeds:["detail preservation","texture preservation","natural tone","high detail","natural processing","raw photo"],suggestedShorthands:["/eyelevel","/softlight","/telephoto","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"cartoon, illustration, 3d render, deformed anatomy, extra paws, blurry eyes, plastic fur, watermark, text":"kartun, ilustrasi, render 3d, anatomi cacat, cakar ekstra, mata buram, bulu plastik, watermark, teks"};if(!!(t.includes("product")||t.includes("food")||t.includes("coffee")||t.includes("watch")||t.includes("cake")||t.includes("produk")||t.includes("makanan")||t.includes("kopi")||t.includes("minuman")||t.includes("still-life")))return{mainDescription:e?`Commercial still-life photography featuring meticulous product placement in ${c}, balanced studio illumination, and tactile surface materiality.`:`Potret still-life komersial dengan penataan objek bernuansa ${h}, pencahayaan terukur, dan detail material berkualitas tinggi.`,subjectDescription:e?`Principal hero subject with distinct contours in ${c}, accented with ${g}, pristine surface finish, and refined craftsmanship details.`:`Objek utama dengan kontur presisi bernuansa ${h} berpadu aksen ${f}, dengan permukaan bersih dan detail pengerjaan rapi.`,poseExpression:"-",identityPreservation:"-",outfitMaterial:e?`Tactile surface materials with subtle micro-reflections and authentic manufacturing texture in ${c}.`:`Tekstur permukaan material asli bernuansa ${h} dengan mikro-refleksi halus dan kerapatan tekstur autentik.`,environmentBackground:e?`Minimalist studio tabletop environment with backdrop in ${u} complementary to the subject.`:`Studio meja still-life dengan permukaan bernuansa ${m} dan penataan elemen pendukung minimalis.`,compositionPerspective:e?`Framed in ${d} aspect ratio at 45-degree elevated angle or eye-level tabletop framing, crisp geometric alignment and focused presentation.`:`Komposisi dalam rasio ${d} dengan sudut 45 derajat atau eye-level tabletop, framing terfokus pada objek utama.`,lightingColor:e?`${k} with controlled diffused softbox highlights and soft contact drop shadows.`:`${k}, softbox diffused illumination, dan gradasi bayangan kontak yang lembut.`,cameraLensDof:e?"90mm macro lens at f/5.6, measured depth of field keeping the critical product surfaces sharp.":"Lensa makro 90mm f/5.6, depth of field terukur dengan ketajaman tinggi pada produk.",photoStyleRealism:e?"Commercial product photography with extreme tactile sharpness, color fidelity, and authentic material finish.":"Fotografi produk profesional dengan kejernihan material dan akurasi warna tinggi.",aspectRatio:d,optimizationNeeds:["detail preservation","texture preservation","color balance","natural contrast","high detail","natural processing","raw photo"],suggestedShorthands:["/studio","/softlight","/macro","/highdetail","/detailpreservation","/texturepreservation","/rawphoto"],contextualNegativePrompt:e?"dust, scratches, harsh reflections, bad lighting, low resolution, blur, watermark, text":"debu, goresan, pantulan silau keras, pencahayaan buruk, resolusi rendah, blur, watermark, teks"};const I=t.includes("woman")||t.includes("wanita")||t.includes("cewek")||t.includes("girl")||t.includes("lady")||t.includes("female")||t.includes("hijab"),E=t.includes("man")||t.includes("pria")||t.includes("cowok")||t.includes("boy")||t.includes("gentleman")||t.includes("businessman")||t.includes("male");let T=e?"an authentic focal subject":"subjek potret autentik";return I?T=e?"an adult woman with natural facial features and poised expression":"seorang wanita dengan ekspresi tenang dan fitur wajah alami":E?T=e?"an adult man with natural facial features and composed demeanor":"seorang pria dewasa dengan ekspresi tenang dan pembawaan wajar":s&&(T=s),{mainDescription:e?`Authentic photograph capturing ${T} with natural posture, dressed in ${c}, framed with balanced composition and ${k}.`:`Potret fotografi autentik dengan framing ${p} terpusat, menampilkan ${T} dengan sentuhan warna ${h}, ${k}, dan karakter visual realistis.`,subjectDescription:e?`${T} featuring authentic facial proportions, crisp eye focus, and natural anatomical alignment.`:`${T} dengan proporsi wajah alami, fokus mata tajam, dan karakter visual nyata tanpa efek sintetis.`,poseExpression:e?"Poised natural posture framed at eye-level perspective, calm composed expression directed forward.":"Postur tubuh seimbang dengan sudut pandang kamera sejajar mata (eye-level perspective), ekspresi tenang bersahaja.",identityPreservation:e?"Preserve natural facial proportions, authentic skin tones, and genuine human contours.":"Pertahankan proporsi wajah alami, warna kulit natural, dan kontur wajah manusia asli.",outfitMaterial:e?`Neat attire featuring ${c} with visible fabric weave, fine seam texture, complemented by ${g}.`:`Busana rapi dengan dominasi warna ${h} dan aksen ${f}, tekstur kain tampak jelas.`,environmentBackground:e?`Cohesive setting in ${u} isolating the subject cleanly with gentle depth of field.`:`Latar belakang bernuansa ${m} dengan kedalaman bidang lembut yang mengisolasi subjek secara bersih.`,compositionPerspective:e?`Centered portrait composition framed in ${d} aspect ratio following rule-of-thirds balance at eye-level perspective.`:`Komposisi terpusat dalam rasio aspek ${d}, sudut pandang kamera sejajar mata (eye-level), dan pembagian bidang seimbang.`,lightingColor:e?`${k} with balanced fill, natural shadow transition, and controlled highlights.`:`${k}, gradasi bayangan natural, dan highlight wajah terukur.`,cameraLensDof:e?"Prime portrait lens, shallow depth of field with creamy background bokeh separation.":"Lensa portrait prime, kedalaman bidang dangkal (shallow depth of field) dengan pemisahan latar belakang bokeh halus.",photoStyleRealism:e?"Realistic photographic style, authentic microcontrast, natural skin pore textures without artificial plastic smoothing.":"Gaya fotografi realistis dengan tekstur kulit asli tanpa efek penghalusan plastik berlebih.",aspectRatio:d,optimizationNeeds:["shadow recovery","natural contrast","natural tone","color balance","detail preservation","texture preservation","natural processing","raw photo"],suggestedShorthands:["/portrait","/studio","/eyelevel","/softlight","/rawphoto","/enhance","/highdetail"],contextualNegativePrompt:e?"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, bad eyes, plastic skin, oversaturated, blurry, watermark, text":"cartoon, 3d render, illustration, deformed face, bad anatomy, distorted hands, extra limbs, anatomi cacat, jari ekstra, mata rusak, kulit plastik, oversaturated, blur, watermark, text"}}const ja={tpl_1:"Add a realistic human subject alongside existing subjects, with coordinating attire, actively engaging in context harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_2:"Add a realistic human subject with coordinating outfit, actively participating in the context of the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_3:"Add a realistic human subject while strictly preserving all existing subjects and characters within the image. Do not modify or remove original subjects or characters. Harmonize the background with the uploaded image.",tpl_4:"Add a new subject wearing an elegant hijab, harmonizing outfit styling and color palette with the uploaded image.",tpl_5:"Add a realistic human subject wearing a hijab, with coordinating outfit and engaging in activity harmonious with the uploaded image, while strictly preserving all original subjects and characters without modification or removal.",tpl_6:"Add a realistic human male as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the male subject's clothing, pose, expression, and activity to integrate naturally and consistently with the scene. Choose attire suited to the theme, environment, atmosphere, and visual context of the uploaded image. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The male subject is only added as a new element into available space within the scene and must not replace or alter any original elements.",tpl_7:"Add a realistic human subject wearing a hijab as a new subject into the uploaded image. First analyze the theme, environment, perspective, lighting, color, scale, and scene context, then adapt the clothing, pose, expression, and activity of the subject to blend naturally with the scene. Do not modify, delete, replace, move, or alter original image elements. All original elements remain the SOURCE OF TRUTH. The subject is only added into available space within the scene and must not replace original elements."},Ja={gender:{"laki-laki":"Male",pria:"Male",cowok:"Male",perempuan:"Female",wanita:"Female",cewek:"Female"},ethnicity:{asia:"Asian",eropa:"European / Caucasian",afrika:"African","timur tengah":"Middle Eastern","asia selatan":"South Asian","asia timur":"East Asian","asia tenggara":"Southeast Asian","pasifik / oseania":"Pacific Islander / Oceanian",pasifik:"Pacific Islander",oseania:"Oceanian","amerika latin":"Latino / Hispanic"}},ye=[[/Tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,ja.tpl_1],[/Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,ja.tpl_2],[/Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar\. Jangan memodifikasi atau menghilangkan subjek\/karakter asli\. Latar belakang menyesuaikan dengan gambar unggahan\.?/gi,ja.tpl_3],[/Tambahkan subjek baru yang mengenakan hijab[,\s]+lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan\.?/gi,ja.tpl_4],[/Tambahkan subjek manusia realistis yang mengenakan hijab[,\s]+dengan pakaian yang menyesuaikan[,\s]+serta terlibat dalam aktivitas sesuai gambar unggahan[,\s]+dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan\.?/gi,ja.tpl_5],[/Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan atau mengubah elemen asli apa pun\.?/gi,ja.tpl_6],[/Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan[\s\S]*?tidak boleh menggantikan elemen asli\.?/gi,ja.tpl_7],[/tambahkan subjek manusia realistis di luar subjek yang sudah ada[,\s]+dengan pakaian yang menyesuaikan/gi,"Add a realistic human subject alongside existing subjects, with coordinating attire"],[/tambahkan subjek manusia realistis/gi,"Add a realistic human subject"],[/tambahkan subjek baru/gi,"Add a new subject"],[/tambahkan subjek/gi,"Add a subject"],[/tambahkan/gi,"Add"],[/dua orang berada di taman tropis dengan latar belakang pemandangan alam/gi,"Two people in a lush tropical garden with a natural scenic landscape backdrop"],[/dua orang berada di taman tropis/gi,"Two people in a lush tropical garden"],[/dua orang berada di/gi,"Two people in"],[/dua orang/gi,"Two people"],[/di taman tropis/gi,"in a lush tropical garden"],[/taman tropis/gi,"tropical garden"],[/dengan latar belakang pemandangan alam/gi,"with a natural scenic landscape backdrop"],[/latar belakang pemandangan alam/gi,"scenic landscape backdrop"],[/pemandangan alam/gi,"scenic landscape"],[/detail subjek utama dengan pencahayaan alami dan warna cerah/gi,"Detail of main subjects with natural daylight illumination and vibrant vivid colors"],[/detail subjek utama/gi,"Detail of main subjects"],[/subjek utama/gi,"main subjects"],[/warna cerah/gi,"vibrant vivid colors"],[/perbaiki pencahayaan foto/gi,"enhance photo lighting with balanced exposure and natural illumination"],[/perbaiki pencahayaan/gi,"enhance lighting with balanced exposure and natural contrast"],[/hapus hijab[,\s]+jangan ubah wajah/gi,"remove headwear, preserve natural hair, preserve original facial identity"],[/hapus hijab/gi,"remove headwear, display natural hair"],[/jangan ubah wajah/gi,"strictly preserve original face and facial identity"],[/pertahankan wajah asli/gi,"maintain authentic original facial identity"],[/pertahankan wajah/gi,"preserve facial identity"],[/ganti baju menjadi tanktop putih tali tipis[,\s]+jangan ubah wajah/gi,"change outfit to a delicate white spaghetti strap tank top, strictly preserve original facial identity"],[/ganti baju menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti baju/gi,"change clothing outfit"],[/ganti pakaian menjadi ([^,.]+)/gi,"change outfit to $1"],[/ganti pakaian/gi,"change outfit styling"],[/hapus latar belakang/gi,"remove background, isolate subject on clean backdrop"],[/hapus background/gi,"remove background"],[/gunakan latar baru/gi,"place subject in a new scenic environment"],[/ganti latar/gi,"replace background setting"],[/pertahankan rambut asli tetapi ubah pakaian/gi,"preserve natural authentic hair, change clothing attire"],[/pertahankan rambut asli/gi,"preserve natural authentic hair"],[/ubah rasio menjadi 9:16/gi,"aspect ratio 9:16 vertical composition"],[/ubah rasio menjadi 16:9/gi,"aspect ratio 16:9 wide panoramic composition"],[/ubah rasio menjadi 1:1/gi,"aspect ratio 1:1 square framing"],[/ubah rasio/gi,"change canvas aspect ratio"],[/resolusi tinggi/gi,"high resolution, fine micro-details"],[/kualitas tinggi/gi,"masterpiece quality, ultra-detailed"],[/anatomi tangan natural/gi,"anatomically correct natural hands and fingers"],[/anatomi tangan/gi,"natural hand anatomy"],[/memperluas foto/gi,"outpaint and expand canvas seamlessly"],[/perluas gambar/gi,"expand image canvas with harmonious environment"],[/dokter bedah sedang operasi di rumah sakit futuristik/gi,"a skilled surgical doctor performing an operation inside a high-tech futuristic hospital"],[/dokter bedah/gi,"a professional surgical doctor"],[/rumah sakit futuristik/gi,"a futuristic high-tech hospital"],[/montok/gi,"voluptuous curvy feminine figure"],[/seorang wanita muda/gi,"a young woman"],[/seorang wanita dewasa/gi,"an adult woman"],[/seorang wanita/gi,"a woman"],[/wanita muda/gi,"young woman"],[/wanita cantik/gi,"beautiful woman"],[/wanita/gi,"woman"],[/seorang pria muda/gi,"a young man"],[/seorang pria dewasa/gi,"an adult man"],[/seorang pria/gi,"a man"],[/pria muda/gi,"young man"],[/pria tampan/gi,"handsome man"],[/pria/gi,"man"],[/seorang gadis muda/gi,"a young girl"],[/seorang gadis/gi,"a girl"],[/gadis muda/gi,"young girl"],[/gadis/gi,"girl"],[/anak perempuan/gi,"a young girl"],[/anak laki-laki/gi,"a young boy"],[/anak-anak/gi,"children"],[/dengan rambut hitam panjang/gi,"with long dark hair"],[/dengan rambut panjang/gi,"with long hair"],[/dengan rambut pendek/gi,"with short hair"],[/dengan rambut pirang/gi,"with blonde hair"],[/dengan rambut bergelombang/gi,"with wavy hair"],[/dengan rambut keriting/gi,"with curly textured hair"],[/rambut hitam/gi,"dark hair"],[/rambut cokelat/gi,"brown hair"],[/mata cokelat/gi,"warm brown eyes"],[/kulit cerah/gi,"fair radiant skin"],[/kulit sawo matang/gi,"warm tan golden skin"],[/kulit halus/gi,"smooth skin texture"],[/tekstur kulit/gi,"natural skin microtexture"],[/senyum manis/gi,"gentle charming smile"],[/tersenyum lembut/gi,"softly smiling"],[/ekspresi tenang/gi,"serene composed expression"],[/tatapan mata tajam/gi,"focused engaging gaze"],[/detail fokus pada mata dan tekstur kertas buku/gi,"focus detail on expressive eyes and tactile book paper texture"],[/fokus pada mata/gi,"focused on the eyes"],[/tekstur kertas buku/gi,"tactile book paper texture"],[/tekstur kertas/gi,"paper texture"],[/mengenakan hijab/gi,"wearing a stylish hijab"],[/berhijab/gi,"wearing an elegant hijab"],[/mengenakan jaket hoodie/gi,"wearing a cozy oversized hoodie jacket"],[/mengenakan hoodie/gi,"wearing a hoodie"],[/mengenakan kemeja/gi,"wearing a crisp button-up shirt"],[/mengenakan kaos/gi,"wearing a casual t-shirt"],[/mengenakan gaun/gi,"wearing an elegant dress"],[/mengenakan jas/gi,"wearing a tailored formal suit"],[/mengenakan celana jeans/gi,"wearing denim jeans"],[/berpakaian santai/gi,"dressed in casual attire"],[/berpakaian formal/gi,"dressed in formal attire"],[/memegang buku/gi,"holding a book"],[/memegang/gi,"holding"],[/berjalan di/gi,"walking through"],[/berjalan santai/gi,"strolling gracefully"],[/berdiri di/gi,"standing in"],[/berdiri tegak/gi,"standing confidently"],[/duduk di/gi,"sitting in"],[/duduk santai/gi,"relaxing comfortably"],[/menatap kamera/gi,"looking directly at the camera"],[/menoleh ke samping/gi,"turning head slightly toward the side"],[/di perpustakaan klasik/gi,"in a classic vintage library"],[/di perpustakaan/gi,"in a library"],[/perpustakaan klasik/gi,"classic vintage library"],[/perpustakaan/gi,"library"],[/buku/gi,"book"],[/di taman bunga/gi,"in a blooming flower garden"],[/taman bunga/gi,"blooming flower garden"],[/di pantai saat senja/gi,"on a scenic beach at golden hour sunset"],[/di pantai/gi,"on a picturesque tropical beach"],[/di taman kota/gi,"in a vibrant urban city park"],[/di taman/gi,"in a lush garden park"],[/di jalanan kota/gi,"on a busy modern city street"],[/di kafe/gi,"in a cozy ambient cafe"],[/di studio foto/gi,"in a minimalist photography studio"],[/di studio/gi,"in a professional studio"],[/di kantor modern/gi,"in a sleek contemporary office"],[/di alam terbuka/gi,"in an expansive outdoor landscape"],[/saat senja/gi,"during golden hour sunset"],[/saat malam hari/gi,"at night with atmospheric city lights"],[/saat malam/gi,"at night"],[/saat pagi hari/gi,"in the fresh morning daylight"],[/saat siang hari/gi,"under bright natural midday sun"],[/hujan gerimis/gi,"soft gentle drizzle rain"],[/hujan/gi,"rainy wet pavement atmosphere"],[/pencahayaan alami/gi,"natural daylight illumination"],[/pencahayaan studio/gi,"professional studio key and fill lighting"],[/pencahayaan lembut/gi,"soft diffused ambient lighting"],[/pencahayaan sinematik/gi,"cinematic volumetric illumination"],[/cahaya keemasan/gi,"warm golden hour glow"],[/latar belakang buram/gi,"smooth creamy background bokeh"],[/latar belakang kabur/gi,"shallow depth of field with soft bokeh"],[/sudut pandang sejajar mata/gi,"eye-level camera angle"],[/sudut pandang rendah/gi,"low-angle perspective"],[/sudut pandang tinggi/gi,"high-angle perspective"],[/lensa potret 85mm/gi,"85mm portrait lens with f/1.4 aperture"],[/lensa sudut lebar/gi,"wide-angle 24mm lens"],[/komposisi rule of thirds/gi,"rule of thirds composition"],[/potret jarak dekat/gi,"closeup intimate portrait"],[/potret setengah badan/gi,"medium shot portrait"],[/seluruh badan/gi,"full-length body shot"]];function na(l){if(!l||typeof l!="string")return"";const a=l.trim();if(!a)return"";const e=[],n="___TOKEN_PH_";let r=a.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,i=>{const t=`${n}SH_${e.length}___`;return e.push({id:t,original:i}),t});r=r.replace(/--([a-zA-Z0-9_\-]+)(?:\s+([^-\s][^-\n]*))?/g,i=>{const t=`${n}FLAG_${e.length}___`;return e.push({id:t,original:i}),t});let s=!1;/^(\/imagine prompt:)/i.test(r)&&(s=!0,r=r.replace(/^(\/imagine prompt:\s*)/i,""));for(const[i,t]of ye)r=r.replace(i,t);r=r.replace(/\bdengan tetap mempertahankan\b/gi,"while strictly preserving").replace(/\bdengan mempertahankan\b/gi,"while preserving").replace(/\btanpa perubahan atau penghapusan\b/gi,"without modification or removal").replace(/\btanpa mengubah\b/gi,"without modifying").replace(/\bserta terlibat dalam aktivitas\b/gi,"and engaging in activities").replace(/\bsesuai gambar unggahan\b/gi,"harmonious with the source image").replace(/\bsesuai gambar sumber\b/gi,"harmonious with the source image").replace(/\bdengan pakaian yang menyesuaikan\b/gi,"with coordinating attire").replace(/\bpakaian yang menyesuaikan\b/gi,"coordinating attire").replace(/\bdi luar subjek yang sudah ada\b/gi,"alongside existing subjects").replace(/\bsubjek manusia realistis\b/gi,"a realistic human subject").replace(/\bseluruh subjek dan karakter asli\b/gi,"all original subjects and characters").replace(/\bsubjek\/karakter asli\b/gi,"original subjects and characters").replace(/\blatar belakang menyesuaikan\b/gi,"background harmonized with").replace(/\bsesuaikan outfit dan warna\b/gi,"harmonizing outfit styling and color palette").replace(/\bagar harmonis dengan\b/gi,"to harmonize with").replace(/\bgambar unggahan\b/gi,"uploaded source image").replace(/\bgambar sumber\b/gi,"source image").replace(/\bsubjek baru\b/gi,"a new subject").replace(/\bsubjek adalah\b/gi,"the subject is").replace(/\bsubjek berupa\b/gi,"the subject is").replace(/\bdengan\b/gi,"with").replace(/\bdan\b/gi,"and").replace(/\bserta\b/gi,"and").replace(/\bdi\b/gi,"in").replace(/\bke\b/gi,"to").replace(/\bdari\b/gi,"from").replace(/\bpada\b/gi,"on").replace(/\byang\b/gi,"that is").replace(/\btetapi\b/gi,"but").replace(/\bnamun\b/gi,"however"),r=r.replace(/\s+/g," ").replace(/\s+,/g,",").replace(/\s+\./g,".").replace(/,\s*,/g,",").replace(/\.\s*\./g,".").trim();for(const i of e)r=r.replace(i.id,i.original);return s&&(r=`/imagine prompt: ${r}`),r}function Ae(l,a=null){if(!l)return"";const{customRequest:e="",gender:n="Auto",age:r="Auto",ethnicity:s="Auto",subjectStyle:i="Auto",customSubjectStyle:t="",environmentStyle:o="Auto"}=l,d=[];if(e&&e.trim()){const m=na(e.trim());d.push(`Additional Directive (Custom Request): ${m}`)}const p=n&&!n.toLowerCase().startsWith("auto"),h=r&&!r.toLowerCase().startsWith("auto"),c=s&&!s.toLowerCase().startsWith("auto");if(p||h||c){const m=[];if(p){const u=n.toLowerCase().trim(),k=Ja.gender[u]||n;m.push(`Gender: ${k}`)}if(h){const u=parseInt(r,10),k=isNaN(u)?r:`${u} years old`;m.push(`Age: ${k}`)}if(c){const u=s.toLowerCase().trim(),k=Ja.ethnicity[u]||s;m.push(`Ethnicity: ${k}`)}d.push(`Subject Character Parameters: ${m.join(", ")}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`)}if(i&&!i.toLowerCase().startsWith("auto")){const m=i==="Custom"?t?na(t.trim()):"Custom Realistic":i;d.push(`Subject Style: Visual rendering, materiality, skin microtexture, and clothing adopt a ${m} aesthetic, prioritizing natural anatomical fidelity, authentic microtextures, and directional illumination on the subject.`)}return o&&!o.toLowerCase().startsWith("auto")&&d.push(`Environment Style: World-building, background setting, atmosphere, environmental materials, and global illumination apply ${o}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`),d.join(`

`)}function Qa(l=""){let a="Apply comprehensive photographic restoration: recover shadow details, suppress highlight blowout, normalize contrast and color balance, and preserve fine microtextures and natural skin details without overprocessing.";if(l&&l.trim()){const e=na(l.trim());return`${a} User specific adjustment target: ${e}.`}return a}const Ba=[{id:"none",label:"-- Pilih Template Prompt (Opsional) --",text:""},{id:"tpl_1",label:"Template 1: Tambahkan subjek manusia realistis di luar subjek yang sudah ada...",text:"Tambahkan subjek manusia realistis di luar subjek yang sudah ada, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_2",label:"Template 2: Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan...",text:"Tambahkan subjek manusia realistis dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_3",label:"Template 3: Tambahkan subjek manusia realistis dan pertahankan seluruh subjek...",text:"Tambahkan subjek manusia realistis dan pertahankan seluruh subjek serta karakter yang sudah ada dalam gambar. Jangan memodifikasi atau menghilangkan subjek/karakter asli. Latar belakang menyesuaikan dengan gambar unggahan."},{id:"tpl_4",label:"Template 4: Tambahkan subjek baru yang mengenakan hijab...",text:"Tambahkan subjek baru yang mengenakan hijab, lalu sesuaikan outfit dan warna agar harmonis dengan gambar unggahan."},{id:"tpl_5",label:"Template 5: Tambahkan subjek manusia realistis yang mengenakan hijab...",text:"Tambahkan subjek manusia realistis yang mengenakan hijab, dengan pakaian yang menyesuaikan, serta terlibat dalam aktivitas sesuai gambar unggahan, dengan tetap mempertahankan seluruh subjek dan karakter asli tanpa perubahan atau penghapusan."},{id:"tpl_6",label:"Template 6: Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru...",text:"Tambahkan satu subjek manusia laki-laki realistis sebagai subjek baru ke dalam gambar unggahan. Analisis terlebih dahulu tema, lingkungan, perspektif, pencahayaan, warna, skala, dan konteks adegan, kemudian sesuaikan pakaian, pose, ekspresi, dan aktivitas laki-laki tersebut agar menyatu secara natural dan konsisten dengan adegan. Pilih pakaian yang sesuai dengan tema, lingkungan, suasana, dan konteks visual gambar unggahan. Jangan mengubah, menghapus, mengganti, memindahkan, atau merusak elemen asli gambar. Semua elemen asli tetap menjadi SOURCE OF TRUTH. Laki-laki tersebut hanya ditambahkan sebagai elemen baru ke ruang yang tersedia dalam adegan dan tidak boleh menggantikan atau mengubah elemen asli apa pun."},{id:"tpl_7",label:"Template 7: Tambahkan subjek manusia realistis berhijab sebagai subjek baru...",text:"Tambahkan subjek manusia realistis berhijab sebagai subjek baru ke dalam gambar unggahan. Analisis terlebih dahulu tema, lingkungan, perspektif, pencahayaan, warna, skala, dan konteks adegan, kemudian sesuaikan pakaian, pose, ekspresi, dan aktivitas manusia agar menyatu secara natural dengan adegan. Jangan mengubah, menghapus, mengganti, memindahkan, atau merusak elemen asli gambar. Semua elemen asli tetap menjadi SOURCE OF TRUTH. Manusia hanya ditambahkan ke ruang yang tersedia dalam adegan dan tidak boleh menggantikan elemen asli."}],Te=["Auto (Smart Detection) mengikuti gambar unggahan","Laki-Laki","Perempuan"],Ee=["Auto (Smart Detection) mengikuti gambar unggahan",...Array.from({length:50},(l,a)=>`${a+1} tahun`)],ne=["Auto (Smart Detection)","Asia","Eropa","Afrika","Timur Tengah","Asia Selatan","Asia Timur","Asia Tenggara","Pasifik / Oseania","Amerika Latin"],Va=["Auto (Smart Detection)","Raw Photography Realism","Realistic","Photorealistic","Ultra Photorealistic","Live-Action","Custom"],_a=[{name:"Auto (Smart Detection)",description:"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."},{name:"Stylized 3D Cartoon",description:"Gaya kartun 3D yang sangat stilasi dengan warna berani dan proporsi ekspresif."},{name:"Pixar-style Lighting",description:"Pencahayaan hangat dan emosional khas film Pixar yang memberikan kedalaman pada karakter."},{name:"Nickelodeon Animation Style",description:"Gaya animasi enerjik dan berwarna cerah khas Nickelodeon."},{name:"SpongeBob Cinematic 3D",description:"Visual 3D sinematik bergaya dunia bawah laut SpongeBob yang ceria."},{name:"Soft Clay Render",description:"Render dengan tekstur tanah liat lembut yang memberikan kesan fisik dan taktil."},{name:"Smooth Plastic Material",description:"Material plastik halus dan mengkilap seperti mainan modern yang bersih."},{name:"Vibrant Pastel Colors",description:"Palet warna pastel yang cerah dan hidup untuk suasana yang positif."},{name:"Global Illumination",description:"Teknik pencahayaan realistis yang memantulkan cahaya di seluruh permukaan untuk kedalaman maksimal."},{name:"Clean 3D Render",description:"Hasil render 3D yang sangat bersih, tajam, dan bebas dari noise visual."},{name:"Whimsical Cartoon World",description:"Dunia kartun yang penuh keajaiban, bentuk imajinatif, dan atmosfer fantasi."},{name:"Raw Photography Realism",description:"Realisme murni seperti foto mentah kamera DSLR tanpa efek sinematik, menampilkan pori kulit, noise sensor, dan cahaya alami apa adanya."},{name:"True Camera Capture Realism",description:"Meniru hasil kamera sungguhan dengan parameter fotografi realistis seperti ISO, aperture, shutter, dan depth of field alami."},{name:"Documentary Photo Realism",description:"Gaya foto dokumenter yang jujur dan natural, komposisi tidak dibuat-buat seperti momen kehidupan nyata."},{name:"Natural Light Photorealism",description:"Meniru cahaya alami dengan warna kulit akurat dan bayangan lembut tanpa efek artistik."},{name:"Documentary Style",description:"Tampilan realistis dan informatif yang fokus pada keaslian visual."},{name:"Natural Lighting",description:"Pencahayaan alami tanpa dramatisasi atau efek berlebihan."},{name:"Realistic",description:"Tampilan natural yang mendekati dunia nyata."},{name:"Photorealistic",description:"Sangat realistis seperti hasil foto kamera modern dengan kualitas bersih."},{name:"Ultra Photorealistic Live-Action",description:"Detail sangat tajam dan bersih, masih realistis namun terasa sedikit dipoles."},{name:"Portrait Photography",description:"Fokus pada wajah dengan latar blur profesional dan pencahayaan kamera."},{name:"Photoreal Cinematic Character Study",description:"Studi karakter sangat realistis dengan sentuhan visual sinematik."},{name:"Live-Action Cinematic Photorealism",description:"Perpaduan realisme dunia nyata dengan mood dan atmosfer sinematik."},{name:"Hollywood Movie Still Realism",description:"Tampilan seperti cuplikan film Hollywood dengan color grading dramatis."},{name:"Cinematic Live-Action Portrait",description:"Potret manusia nyata dengan gaya sinema dan pencahayaan artistik."},{name:"Film Still",description:"Visual menyerupai satu frame adegan film."},{name:"Cinematic",description:"Nuansa film dengan framing dan warna dramatis."},{name:"Ultra Cinematic",description:"Cinematic tingkat tinggi dengan depth dan kontras kuat."},{name:"IMAX Look",description:"Visual megah berskala besar dengan detail tinggi."},{name:"Dramatic Lighting",description:"Pencahayaan kontras tinggi untuk emosi kuat dan tegas."},{name:"Moody Lighting",description:"Cahaya redup bernuansa emosional dan misterius."},{name:"Dark & Moody",description:"Nuansa gelap dengan atmosfer dramatis dan intens."},{name:"Hyper-Realistic",description:"Detail ekstrem dengan tekstur dan ketajaman sangat tinggi."},{name:"Hyper-Real Live-Action Character",description:"Sangat detail dan presisi namun sering terasa terlalu sempurna dan kurang alami."},{name:"Toy-like Characters",description:"Karakter dengan proporsi dan material seperti mainan koleksi."},{name:"Semi-Realistic 3D",description:"Perpaduan realisme dan gaya 3D yang masih terasa imut."},{name:"Toy Photography",description:"Foto realistis mainan dengan depth of field dan pencahayaan profesional."},{name:"Miniature World",description:"Dunia mini berskala kecil dengan detail tinggi dan perspektif makro."},{name:"Toy Diorama / Miniature World",description:"Adegan mini seperti diorama mainan dengan detail artistik."},{name:"Plastic Toy Cinematic",description:"Mainan plastik dengan sudut kamera dan pencahayaan sinematik."},{name:"Miniature / Diorama Style",description:"Tampilan dunia makro seperti diorama miniatur dengan efek tilt-shift dan detail kecil yang menakjubkan."},{name:"Hyper-Realistic Miniature / Diorama Action Style",description:"Diorama miniatur dengan detail hyper-realistic dan elemen aksi yang dinamis, memberikan kesan adegan film berskala kecil."},{name:"Miniature Diorama / LEGO Macro Photography",description:"Gaya fotografi makro dengan fokus tajam pada detail balok LEGO, bokeh latar belakang artistik, dan pencahayaan studio yang menonjolkan tekstur plastik serta skala miniatur."},{name:"Low Poly 3D",description:"Bentuk geometris sederhana dan minim detail."},{name:"Roblox-style 3D",description:"Proporsi kotak dengan wajah simpel khas game Roblox."},{name:"Stylized Roblox 3D",description:"Versi Roblox lebih halus dengan pencahayaan modern."},{name:"LEGO Style",description:"Karakter dan objek berbentuk balok LEGO berwarna cerah."},{name:"LEGO Diorama",description:"Adegan LEGO seperti miniatur pameran artistik."},{name:"LEGO Stop-Motion",description:"Tampilan LEGO dengan nuansa animasi stop-motion."},{name:"LEGO Cinematic Superhero",description:"Visual pahlawan super dalam dunia LEGO dengan pencahayaan dramatis, efek kekuatan yang bercahaya, dan komposisi epik."},{name:"LEGO Movie Action Style",description:"Gaya aksi dinamis khas film LEGO dengan motion blur, efek ledakan balok yang intens, dan sudut kamera sinematik."},{name:"LEGO Unreal Engine Cinematic",description:"Render LEGO ultra-detail menggunakan Unreal Engine, menampilkan pantulan cahaya realistis pada plastik dan atmosfer film berkualitas tinggi."},{name:"LEGO Blockbuster VFX",description:"Visual blockbuster dengan efek khusus (VFX) spektakuler seperti api, asap, dan partikel yang terintegrasi dalam estetika balok LEGO."},{name:"LEGO Epic Battle Scene",description:"Adegan pertempuran kolosal LEGO dengan ribuan minifigure, lingkungan yang hancur secara artistik, dan skala sinematik yang luar biasa."},{name:"Pixar-style Animation",description:"Animasi 3D ekspresif ala film keluarga Pixar."},{name:"Storybook 3D",description:"Visual 3D bernuansa buku cerita anak."},{name:"Whimsical Children Illustration",description:"Ilustrasi ceria, imajinatif, dan penuh fantasi anak-anak."},{name:"Cute Kawaii Style",description:"Estetika Kawaii yang sangat imut dengan elemen-elemen menggemaskan."},{name:"Chibi 3D",description:"Proporsi kecil dengan kepala besar, sangat imut."},{name:"Kawaii Style",description:"Visual super lucu dengan bentuk bulat dan ramah anak."},{name:"Cute 3D / Kawaii",description:"Karakter 3D imut dengan warna lembut."},{name:"Cute Toy Style",description:"Karakter seperti mainan dengan tekstur plastik halus."},{name:"Kids Fantasy 3D",description:"Gaya 3D fantasi ceria dan aman untuk anak."},{name:"Dreamy Pastel Fantasy",description:"Dunia fantasi dengan palet warna pastel yang lembut dan suasana seperti mimpi."},{name:"Pastel Soft Lighting",description:"Cahaya lembut bernuansa pastel yang hangat dan dreamy."},{name:"Dreamy Soft Lighting",description:"Pencahayaan halus dengan suasana seperti mimpi."},{name:"Pastel Fantasy",description:"Warna pastel lembut dengan nuansa fantasi."},{name:"Candy World",description:"Dunia fantasi manis seperti permen."},{name:"Candyland / Marshmallow World",description:"Lingkungan imajinatif penuh marshmallow dan warna cerah."},{name:"Candyland 3D Style",description:"Dunia 3D bertema permen dengan bentuk imut dan manis."},{name:"Pastel Candy Commercial Style",description:"Gaya visual seperti iklan permen anak-anak."},{name:"Hello Kitty Dessert World",description:"Dunia dessert pastel bertema Hello Kitty yang ceria."},{name:"Origami Diorama Style",description:"Visual adegan fantasi yang seluruh elemennya terbuat dari lipatan kertas origami presisi dengan tekstur kertas nyata."},{name:"Paper Craft Portrait",description:"Seni potret yang dibuat dari lapisan potongan kertas dan lipatan origami dengan efek kedalaman 3D."},{name:"Papercraft Origami",description:"Visual bergaya kerajinan kertas dengan lipatan origami yang presisi dan tekstur kertas yang nyata."},{name:"Origami Low-Poly",description:"Bentuk geometris rendah (low-poly) yang dipadukan dengan teknik lipat origami untuk tampilan artistik minimalis."},{name:"Pastel Origami Fantasy",description:"Dunia fantasi origami dengan warna-warna pastel lembut dan pencahayaan dreamy."},{name:"Plush Felt Texture",description:"Tekstur kain felt yang lembut dan empuk pada seluruh lingkungan."},{name:"Soft Fuzzy Material",description:"Material berbulu halus yang memberikan kesan hangat dan nyaman."},{name:"Kawaii Plush 3D Render",description:"Karakter 3D seperti boneka plush berbulu dan lembut."},{name:"Cute Felt Toy Aesthetic",description:"Tampilan seperti mainan kain felt buatan tangan."},{name:"Soft Toy Food Diorama",description:"Makanan yang divisualkan seperti boneka empuk."},{name:"Claymation Style",description:"Tampilan seperti animasi plastisin stop-motion."},{name:"Crochet / Knitted / Amigurumi Style",description:"Semua objek tampak dirajut dari benang."},{name:"Amigurumi 3D Style",description:"Boneka rajut imut dalam bentuk 3D."},{name:"3D Yarn World / Yarn Render",description:"Dunia 3D dengan tekstur benang di seluruh objek."},{name:"Clay + Knit Hybrid",description:"Perpaduan clay dan rajutan dengan tampilan boneka lembut."},{name:"Cozy Pastel Toy Cottage",description:"Rumah mini pastel seperti mainan rajut yang hangat."},{name:"Knitted Miniature World",description:"Dunia mini yang seluruh lingkungannya terlihat dirajut."},{name:"Crochet Dollhouse Render",description:"Rumah boneka mini berbahan rajutan crochet."},{name:"Cute Handmade Toy Aesthetic",description:"Estetika mainan buatan tangan yang hangat dan lucu."},{name:"Pastel Yarn Diorama",description:"Diorama kecil bernuansa pastel dengan tekstur benang."},{name:"Cute Pastel Diorama",description:"Diorama mini pastel dengan dunia fantasi yang sangat imut."}];function ve(l,a){return Ae(l,a)}const Ha=[{id:"AUTO",label:"✨ Auto (Adaptive AI)",description:"AI menganalisis foto secara individual, mendeteksi exposure, dynamic range, white balance, skin tone, dan menentukan treatment warna paling optimal."},{id:"SELECT_STYLE",label:"🎯 Select Style (Target Visual)",description:"Pilih arah visual / style kurasi. AI menghitung penyesuaian tonal & warna secara adaptif per-foto agar selaras dengan target style."},{id:"CUSTOM_STYLE",label:"⚙️ Custom Style (Parameter Pengguna)",description:"Atur warmth, tint, contrast, highlights, shadows, vibrance, dan tone bayangan/highlight secara presisi dengan koreksi adaptif AI."}];Ha.AUTO="AUTO";Ha.SELECT_STYLE="SELECT_STYLE";Ha.CUSTOM_STYLE="CUSTOM_STYLE";const Wa=[{category:"NATURAL / REALISTIC",icon:"🌿",styles:[{name:"Natural Vibrant",description:"Warna natural tetapi lebih hidup dan segar, dengan vibrance terarah dan color separation yang tetap realistis tanpa oversaturation."},{name:"Natural Clean",description:"Tampilan bersih, seimbang, dan realistis dengan white balance netral, contrast moderat, dan warna yang natural."},{name:"Natural DSLR",description:"Karakter foto DSLR modern dengan tonal kaya, detail natural, warna realistis, depth yang baik, dan highlight terkontrol."},{name:"Natural Film",description:"Tampilan natural dengan sentuhan film ringan, tonal lembut, highlight smooth, dan saturation terkontrol."},{name:"True to Life",description:"Memprioritaskan reproduksi warna yang paling mendekati kondisi asli dengan koreksi minimal dan akurat."},{name:"Soft Natural",description:"Tampilan natural yang lembut dengan contrast rendah hingga sedang, highlight halus, shadow tidak terlalu dalam, dan warna yang nyaman."}]},{category:"WARM / BRIGHT",icon:"☀️",styles:[{name:"Warm Cinematic",description:"Nuansa hangat dan cinematic dengan highlight warm, shadow sedikit lebih dalam, dan color separation elegan."},{name:"Golden Hour",description:"Karakter cahaya keemasan seperti golden hour dengan warmth adaptif, highlight keemasan, dan tonal hangat yang natural."},{name:"Sun-Kissed",description:"Kesan terkena cahaya matahari lembut dengan warmth ringan, highlight bercahaya, dan skin tone tetap natural."},{name:"Bright & Airy",description:"Tampilan terang, ringan, bersih, dan airy dengan shadow terangkat, contrast lembut, dan highlight tetap terkendali."},{name:"Warm Lifestyle",description:"Tampilan hangat, ramah, dan natural untuk foto lifestyle dengan warmth moderat dan warna kulit yang nyaman."},{name:"Soft Golden",description:"Nuansa keemasan yang lembut dengan highlight warm dan contrast rendah hingga sedang."}]},{category:"CINEMATIC",icon:"🎬",styles:[{name:"Moody Cinematic",description:"Atmosfer cinematic yang lebih dalam dengan shadow kaya, contrast terkontrol, saturation sedikit lebih tenang, dan mood dramatis."},{name:"Modern Cinematic",description:"Cinematic modern dengan tonal bersih, contrast elegan, warna terkontrol, dan color separation halus."},{name:"Teal & Orange Cinematic",description:"Separation cyan/teal pada area cool dan orange pada area warm secara selektif dengan perlindungan warna kulit."},{name:"Cinematic Contrast",description:"Menonjolkan depth melalui contrast lebih kuat, black lebih tegas, dan highlight tetap terjaga."},{name:"Dark Cinematic",description:"Cinematic dengan overall exposure dan shadow lebih rendah namun tetap mempertahankan detail penting pada area gelap."},{name:"Soft Cinematic",description:"Cinematic yang halus dengan contrast lembut, highlight smooth, shadow tidak crushed, dan warna tetap realistis."}]},{category:"VIBRANT / COLORFUL",icon:"🌈",styles:[{name:"Vivid Color",description:"Meningkatkan vibrance dan saturation secara selektif untuk warna yang lebih hidup tanpa oversaturation."},{name:"Rich Color",description:"Memberikan warna yang lebih kaya, dalam, dan memiliki depth dengan saturation yang dikontrol adaptif."},{name:"Color Pop",description:"Menonjolkan warna utama secara selektif sambil menjaga warna lain tetap seimbang."},{name:"Fresh Vibrant",description:"Tampilan segar, cerah, youthful, dan colorful dengan fokus pada vibrance dan clean color separation."},{name:"Deep Color",description:"Menghasilkan warna lebih pekat dan kaya dengan tonal depth lebih kuat tanpa membuat warna terlihat neon."}]},{category:"CLEAN / MODERN",icon:"✨",styles:[{name:"Clean & Fresh",description:"Warna bersih, segar, netral, dan modern dengan contrast moderat serta saturation terkontrol."},{name:"Modern Clean",description:"Tampilan modern dan polished dengan white balance akurat, tonal rapi, dan warna tidak berlebihan."},{name:"Crisp Detail",description:"Menonjolkan struktur tonal, local contrast, dan detail secara ringan tanpa menghasilkan sharpening berlebihan."},{name:"High Key Clean",description:"Tampilan dominan terang dengan shadow ringan, highlight bersih, dan contrast rendah hingga sedang."},{name:"Minimal Neutral",description:"Color grading sangat minimal dengan warna netral dan tonal natural untuk hasil profesional dan understated."}]},{category:"FILM / ARTISTIC",icon:"🎞️",styles:[{name:"Film Look",description:"Karakter film halus melalui tonal curve lembut, highlight roll-off, saturation terkontrol, dan color palette harmonis."},{name:"Vintage Film",description:"Nuansa film vintage dengan warna sedikit muted, contrast lembut, dan karakter warm/faded yang tetap mempertahankan detail."},{name:"Analog Film",description:"Karakter analog dengan tonal lembut, color response organik, saturation moderat, dan warna yang tidak terlalu digital."},{name:"Pastel Film",description:"Warna lebih lembut dan pastel dengan saturation lebih rendah, highlight airy, dan contrast ringan."},{name:"Faded Film",description:"Efek faded dengan black sedikit terangkat, contrast lembut, dan warna sedikit desaturated."},{name:"Retro Color",description:"Color palette bernuansa retro dengan karakter warna klasik tetap mempertahankan tonal dan detail foto."}]},{category:"DRAMATIC",icon:"🎭",styles:[{name:"Dark & Moody",description:"Nuansa gelap, atmospheric, dan emosional dengan shadow lebih dalam serta warna yang lebih subdued."},{name:"Dramatic Contrast",description:"Menonjolkan perbedaan terang dan gelap dengan contrast kuat namun tetap menjaga highlight dan shadow penting."},{name:"Deep Shadow",description:"Memprioritaskan depth melalui shadow lebih kaya dan pekat tanpa crushing detail penting."},{name:"Low Key Cinematic",description:"Overall image lebih gelap dengan fokus cahaya pada area utama, shadow dalam, dan karakter cinematic yang kuat."}]}],Da=[...Wa.flatMap(l=>l.styles.map(a=>({...a,category:l.category,categoryIcon:l.icon}))),{name:"Custom Style",description:"Style yang ditentukan pengguna melalui parameter color grading dengan adaptive correction berdasarkan kondisi masing-masing foto.",category:"CUSTOM",categoryIcon:"⚙️"}],Se=[{value:0,label:"0% — Original",description:"Tampilan foto asli tanpa grading"},{value:25,label:"25% — Very Subtle",description:"Sentuhan sangat halus dan tipis"},{value:50,label:"50% — Balanced (Default)",description:"Keseimbangan optimal antara gaya & kealamian foto"},{value:75,label:"75% — Strong",description:"Karakter style tegas dan terasa"},{value:100,label:"100% — Full Style",description:"Penerapan style penuh dengan proteksi batas"}],Ca={mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,protections:{highlightProtection:!0,shadowProtection:!0,skinToneProtection:!0,oversaturationProtection:!0,clippingProtection:!0,naturalColorProtection:!0},custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}},Re=[{label:"Neutral (Alami)",value:"Neutral",color:"#64748b"},{label:"Cool Blue (Sinematik Dingin)",value:"Cool Blue",color:"#38bdf8"},{label:"Deep Teal (Teal & Orange)",value:"Deep Teal",color:"#14b8a6"},{label:"Warm Amber (Keemasan Hangat)",value:"Warm Amber",color:"#f59e0b"},{label:"Slate Gray (Matte Film)",value:"Slate Gray",color:"#94a3b8"}],Ie=[{label:"Neutral (Alami)",value:"Neutral",color:"#e2e8f0"},{label:"Soft Gold (Golden Hour)",value:"Soft Gold",color:"#fde047"},{label:"Clean White (Modern Airy)",value:"Clean White",color:"#ffffff"},{label:"Warm Amber (Sunset Warmth)",value:"Warm Amber",color:"#fb923c"},{label:"Soft Rose (Pastel Aesthetic)",value:"Soft Rose",color:"#f472b6"}];function Xa(l=Ca,a=null){const e={...Ca,...l},n=e.mode||"AUTO",r=typeof e.intensity=="number"?e.intensity:50,s=[];if(s.push("STRICT PRESERVATION DIRECTIVE (ORIGINAL PHOTO IS SOURCE OF TRUTH): DO NOT regenerate the image. DO NOT use generative fill. DO NOT alter subject facial identity, face features, body structure, clothing, hair, pose, objects, or composition. Retain original source image geometry and perspective. Apply NON-DESTRUCTIVE AI COLOR GRADING and TONAL ENHANCEMENT ONLY."),n==="AUTO")s.push(`COLOUR GRADING MODE: AUTO ADAPTIVE AI. Individually assess the source photo's dynamic range, exposure, highlight roll-off, shadow depth, white balance, and skin tone. Apply intelligent, adaptive, photo-specific color correction and tonal harmonization tailored to this individual image's characteristics. Intensity: ${r}%.`);else if(n==="SELECT_STYLE"){const o=Da.find(p=>p.name===e.selectedStyle)||{name:e.selectedStyle,description:"Visual style direction"},d=na(o.description);s.push(`COLOUR GRADING STYLE TARGET: "${o.name}" (${o.category}). Description: ${d}. Adaptive execution: Use this style as a visual target/color direction. Calculate per-photo adaptive adjustments rather than static numeric presets. Intensity: ${r}%.`)}else if(n==="CUSTOM_STYLE"){const o=e.custom||{};s.push(`COLOUR GRADING CUSTOM SPECIFICATION: Warmth: ${o.warmth>0?"+":""}${o.warmth}, Tint: ${o.tint>0?"+":""}${o.tint}, Contrast: ${o.contrast>0?"+":""}${o.contrast}, Highlights: ${o.highlights>0?"+":""}${o.highlights}, Shadows: ${o.shadows>0?"+":""}${o.shadows}, Vibrance: ${o.vibrance>0?"+":""}${o.vibrance}, Saturation: ${o.saturation>0?"+":""}${o.saturation}, Clarity: ${o.clarity>0?"+":""}${o.clarity}, Shadow Tone: ${o.shadowTone||"Neutral"}, Highlight Tone: ${o.highlightTone||"Neutral"}. AI Adaptive Correction: Balance custom adjustments against the actual image telemetry. Intensity: ${r}%.`)}const i=e.protections||{},t=[];return i.skinToneProtection!==!1&&t.push("Natural Skin Tone Protection (prioritize healthy, authentic skin tones; strictly prevent unnatural orange/red/magenta/gray casts)"),i.highlightProtection!==!1&&t.push("Highlight Protection (prevent blown-out clipping, preserve highlight texture and roll-off)"),i.shadowProtection!==!1&&t.push("Shadow Protection (prevent crushed blacks, preserve low-end shadow detail)"),i.oversaturationProtection!==!1&&t.push("Oversaturation & Gamut Protection (maintain natural color boundaries)"),i.clippingProtection!==!1&&t.push("Dynamic Range Clipping Protection (keep RGB channels within broadcast-safe gamut)"),i.naturalColorProtection!==!1&&t.push("Natural Color Harmony (preserve realism of sky, foliage, and environmental textures)"),t.length>0&&s.push(`INTELLIGENT PROTECTIONS ACTIVE: ${t.join("; ")}.`),s.push("EXECUTION PRIORITY: NATURAL RESULT > STYLE ACCURACY > STRONG EFFECT. If the original photo already has optimal exposure or color, apply minimal fine-tuning. If heavily skewed, apply measured adaptive correction without artificial grading artifacts."),s.join(`

`)}function Oe(l){if(!l)return{brightness:128,contrast:50,colorTemp:"neutral",warmthScore:0,saturation:50,hasSkinTone:!1,skinTonePercentage:0,highlightClipping:0,shadowCrushing:0,dynamicRange:"normal",qualityScore:85};l.getContext("2d");const a=Math.min(l.width,320),e=Math.min(l.height,240),n=document.createElement("canvas");n.width=a,n.height=e;const r=n.getContext("2d");r.drawImage(l,0,0,a,e);const i=r.getImageData(0,0,a,e).data,t=a*e;let o=0,d=0,p=0,h=0,c=0,f=0,g=0,m=0;for(let U=0;U<i.length;U+=4){const v=i[U],D=i[U+1],H=i[U+2];o+=v,d+=D,p+=H;const G=.299*v+.587*D+.114*H;h+=G,G>242&&f++,G<15&&g++;const O=Math.max(v,D,H),P=Math.min(v,D,H),N=O===0?0:(O-P)/O;m+=N,v>D&&D>H&&v-D>=15&&D-H>=10&&G>40&&G<235&&c++}const u=o/t,k=d/t,b=p/t,R=h/t,w=m/t*100,A=u-b;let C="neutral";A>12?C="warm":A<-12&&(C="cool");const I=c/t*100,E=f/t*100,T=g/t*100;return n.width=0,n.height=0,{brightness:Math.round(R),contrast:Math.round(Math.abs(R-128)*.8+40),colorTemp:C,warmthScore:Math.round(A),avgR:Math.round(u),avgG:Math.round(k),avgB:Math.round(b),saturation:Math.round(w),hasSkinTone:I>1.2,skinTonePercentage:Number(I.toFixed(1)),highlightClipping:Number(E.toFixed(1)),shadowCrushing:Number(T.toFixed(1)),dynamicRange:E>5||T>5?"tinggi (perlu proteksi)":"seimbang",qualityScore:Math.max(50,Math.min(98,Math.round(100-E*2-T*2)))}}function we(l,a=Ca){const e={...Ca,...a},n=e.mode||"AUTO",r=(typeof e.intensity=="number"?e.intensity:50)/100,s=e.protections||{};let i=0,t=0,o=0,d=0,p=0,h=0,c=0,f=0,g=0,m=e.selectedStyle||"Natural Vibrant";if(n==="AUTO")l.brightness<100?(i+=(115-l.brightness)/100,d+=22):l.brightness>165&&(i-=(l.brightness-150)/120,o-=25),l.colorTemp==="warm"&&l.warmthScore>18?p-=Math.min(18,Math.round(l.warmthScore*.5)):l.colorTemp==="cool"&&l.warmthScore<-18&&(p+=Math.min(18,Math.round(Math.abs(l.warmthScore)*.5))),t+=12,c+=15,m=l.hasSkinTone?"Natural Clean":"Natural Vibrant";else if(n==="SELECT_STYLE"){m=e.selectedStyle||"Natural Vibrant";const b=m.toLowerCase();typeof l.brightness=="number"&&(l.brightness<110?i+=Number(((120-l.brightness)/120).toFixed(2)):l.brightness>155&&(i-=Number(((l.brightness-150)/140).toFixed(2))));const R=l.colorTemp==="warm"||typeof l.warmthScore=="number"&&l.warmthScore>10,w=l.colorTemp==="cool"||typeof l.warmthScore=="number"&&l.warmthScore<-10;b.includes("warm")||b.includes("golden")||b.includes("sun-kissed")?(p+=R?10:w?32:22,o+=8,d+=12,c+=12):b.includes("cinematic")||b.includes("teal")?b.includes("teal")?(p+=8,h-=6,t+=22,d-=8,o+=10,c+=16):b.includes("dark")||b.includes("moody")?(t+=20,d-=15,o-=10,f-=8,c+=6):(t+=16,o+=6,d+=10,c+=14):b.includes("film")||b.includes("vintage")||b.includes("analog")||b.includes("retro")?(d+=18,o-=12,t-=5,p+=8,f-=6,c+=8):b.includes("vivid")||b.includes("color pop")||b.includes("vibrant")?(c+=28,t+=15,f+=l.saturation>60?4:14):b.includes("clean")||b.includes("crisp")||b.includes("airy")?(l.colorTemp!=="neutral"&&(p-=l.warmthScore*.3),i+=b.includes("airy")?.25:.08,o+=10,d+=14,t+=12,c+=10):b.includes("dramatic")?(t+=32,d-=18,o+=14,c+=10):(c+=15,t+=10,d+=8)}else if(n==="CUSTOM_STYLE"){const b=e.custom||{};m="Custom Style",p=(b.warmth||0)*.45,h=(b.tint||0)*.35,t=(b.contrast||0)*.4,o=(b.highlights||0)*.5,d=(b.shadows||0)*.5,f=(b.saturation||0)*.4,c=(b.vibrance||0)*.45,g=(b.clarity||0)*.35}const u=[];return s.highlightProtection!==!1&&l.highlightClipping>3&&(o-=Math.round(l.highlightClipping*5),i=Math.min(i,.05),u.push("Highlight Protection aktif: Mencegah highlight blown-out & menjaga detail tekstur putih.")),s.shadowProtection!==!1&&(l.shadowCrushing>3||d<0)&&(d=Math.max(d,5),u.push("Shadow Protection aktif: Mencegah black crushing & mempertahankan detail bayangan.")),s.skinToneProtection!==!1&&l.hasSkinTone&&(p=Math.max(-15,Math.min(18,p)),f=Math.max(-15,Math.min(12,f)),u.push("Skin Tone Protection aktif: Mempertahankan keaslian & rona alami warna kulit subjek.")),s.oversaturationProtection!==!1&&l.saturation>55&&(c=Math.min(c,12),f=Math.min(f,6),u.push("Oversaturation Protection aktif: Menahan saturasi dalam batas gamut alami foto.")),{exposure:Number((i*r).toFixed(2)),contrast:Math.round(t*r),highlights:Math.round(o*r),shadows:Math.round(d*r),warmth:Math.round(p*r),temperature:Math.round(p*r),tint:Math.round(h*r),vibrance:Math.round(c*r),saturation:Math.round(f*r),clarity:Math.round(g*r),intensityPercent:Math.round(r*100),targetStyle:m,protectionLogs:u}}function Ce(){return`You are Prompt Shorthand Analyzer V3.6 - Specialized Two Worlds (2 Dunia) AI Conflict Harmonizer & Prompt Enrichment Engine.
Your mission: Audit, harmonize, and resolve all conflicts, contradictions, inconsistencies, or mismatched instructions within PROMPT OPTIMAL for the "2 Dunia" (Two Worlds) workflow.

============================================================
ABSOLUTE PRIORITY HIERARCHY (SOURCE OF TRUTH)
PARAMETER MODIFIKASI KHUSUS 2 DUNIA → PROMPT HASIL ANALISA 2 DUNIA → PROMPT OPTIMAL
============================================================
1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (HIGHEST PRIORITY - ABSOLUTE SOURCE OF TRUTH):
   - Custom Request (Directive for added subject, attire, action)
   - Subject Demographics (Gender, Age, Ethnicity)
   - Subject Visual Style (Rendering / Materiality)
   - Environment Style (World-building, background, lighting, atmosphere)
   * If any text in PROMPT OPTIMAL contradicts these active parameters, PARAMETER MODIFIKASI KHUSUS 2 DUNIA OVERRULES AND REPLACES IT.

2. PROMPT HASIL ANALISA 2 DUNIA (SECONDARY PRIORITY - ORIGINAL IMAGE CONTEXT):
   - Contains the core visual description and identity of the original source character/subject.
   * ABSOLUTE PRESERVATION: The original character's facial features, identity, physical appearance, and key clothing must remain 100% intact, undistorted, and protected from deletion or unwanted morphing.

3. PROMPT OPTIMAL (PROMPT UNDER AUDIT):
   - The prompt being reviewed and harmonized.
   - Retain all valuable, non-conflicting visual details, realistic microtextures, camera angles, lighting, and composition.

============================================================
SPECIFIC CONFLICT RESOLUTION RULES
============================================================
1. ENVIRONMENT CONFLICT RESOLUTION:
   - If an active Environment Style is chosen (not "Auto"), eliminate any contradictory original background settings (e.g., original classroom, indoor studio, plain wall) and synthesize the scene into the chosen Environment Style world, incorporating its atmosphere, materials, and lighting seamlessly.
   - The original subject must be naturally placed within this new environment while maintaining their identity.

2. SUBJECT & DEMOGRAPHIC CONFLICT RESOLUTION:
   - If an added character or modification is specified in Custom Request or Demographics (Gender, Age, Ethnicity), ensure the added subject adheres strictly to these parameters.
   - Remove any contradictory traits, clothing, or ages assigned to the added character.

3. NEGATIVE PROMPT & SHORTHAND INTEGRITY:
   - Remove any negative prompt flags that contradict the active styles (e.g., remove "--no 3d render" or "3d render" from negative prompts if the environment is a 3D animation/cartoon style).
   - All shorthand codes (e.g., /facelock, /hairlock, /raw, /candid, /masterpiece) and Midjourney parameters (--ar ..., --style ..., --v ...) MUST BE PRESERVED and placed at the end of the prompt.

4. LANGUAGE & FORMAT:
   - Output must be in natural, descriptive, clear English optimal for state-of-the-art AI image generators.
   - Do NOT output conversational filler, disclaimers, or markdown outside JSON.

Format response STRICTLY as valid JSON:
{
  "enrichedPrompt": "the complete, conflict-free, harmonized English prompt with shorthands and parameters preserved at the end",
  "conflictsResolved": ["list of resolved conflicts, e.g., 'Replaced legacy indoor studio background with chosen SpongeBob Cinematic 3D underwater environment'"]
}`}function Le({optimalPrompt:l,generatedPrompt:a,twoWorldsConfig:e}){const n=e||{};return`=== 1. PARAMETER MODIFIKASI KHUSUS 2 DUNIA (PRIORITY 1 - SOURCE OF TRUTH) ===
${[`1. Custom Request (Instruksi Tambahan): "${n.customRequest?n.customRequest.trim():"(tidak ada / kosong)"}"`,`2. Gender Subyek Tambahan: "${n.gender||"Auto"}"`,`3. Usia Karakter Tambahan: "${n.age||"Auto"}"`,`4. Suku / Etnis Karakter: "${n.ethnicity||"Auto"}"`,`5. Style Subyek: "${n.subjectStyle==="Custom"?n.customSubjectStyle||"Custom":n.subjectStyle||"Auto"}"`,`6. Environment Style (Dunia / Background): "${n.environmentStyle||"Auto"}"`].join(`
`)}

=== 2. PROMPT HASIL ANALISA 2 DUNIA (PRIORITY 2 - CONTEXT OF ORIGINAL IMAGE & SUBJECT) ===
"${(a||"").trim()||"(tidak ada analisa visual awal)"}"

=== 3. PROMPT OPTIMAL (PRIORITY 3 - TARGET AUDIT & HARMONISASI) ===
"${(l||"").trim()}"

TUGAS AI:
Audit PROMPT OPTIMAL di atas terhadap PARAMETER MODIFIKASI KHUSUS 2 DUNIA dan PROMPT HASIL ANALISA 2 DUNIA.
Selesaikan semua kontradiksi (seperti latar belakang lama vs environment style baru, deskripsi karakter tambahan yang tidak sesuai parameter, atau negative prompt yang bentrok).
Pertahankan identitas karakter asli 100%, pertahankan seluruh shorthand dan flag parameter di akhir prompt, dan hasilkan prompt final dalam bahasa Inggris yang harmonis dan siap pakai.`}function Ne(l=""){const a=l.match(/\/[a-zA-Z0-9_\-:]+/g)||[],e=[],n=l.match(/--[a-zA-Z0-9_\-]+(?:\s+[a-zA-Z0-9_.,:\-]+)*/g)||[];for(const r of n)e.includes(r.trim())||e.push(r.trim());return{shorthands:a,flags:e}}function Za({optimalPrompt:l="",generatedPrompt:a="",twoWorldsConfig:e={},analysisResult:n=null}){if(!l||!l.trim())return{success:!1,enrichedPrompt:l,conflictsResolved:[]};const r=[];let s=l.trim();const{shorthands:i}=Ne(s);let t=s.startsWith("/imagine prompt:");t&&(s=s.replace(/^\/imagine prompt:\s*/i,"").trim());const o=(e==null?void 0:e.environmentStyle)||"Auto (Smart Detection)";if(!o.toLowerCase().startsWith("auto")){const b=/3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(o),R=[/(?:standing|sitting|located|set)\s+in\s+a\s+[^.,\n]+(?:classroom|room|office|studio|bedroom|hallway|interior|backdrop)[^.,\n]*/gi,/wooden\s+classroom\s+with\s+chalkboards[^.,\n]*/gi,/in\s+a\s+(?:traditional\s+)?wooden\s+classroom[^.,\n]*/gi,/plain\s+(?:studio\s+)?backdrop[^.,\n]*/gi];let w=!1;for(const C of R)C.test(s)&&(s=s.replace(C,`seamlessly integrated into a ${o} environment`),w=!0);w&&r.push(`Harmonized legacy background into ${o} environment`),!new RegExp(`Environment Style:.*?${o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}`,"i").test(s)&&!s.toLowerCase().includes(o.toLowerCase())&&(s+=`

Environment Style: World-building, background setting, atmosphere, environmental materials, and lighting seamlessly adopt ${o}. All original subject identity, facial features, age, physical proportions, and attire remain completely intact and undistorted by the environment style.`,r.push(`Added explicit ${o} environment harmonization directive`)),b&&(/--no\s+[^,\n]*3d render/i.test(s)||/--no\s+[^,\n]*cartoon/i.test(s))&&(s=s.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),r.push(`Removed conflicting negative prompts ('3d render', 'cartoon') to match ${o}`))}const p=e!=null&&e.customRequest?e.customRequest.trim():"",h=(e==null?void 0:e.gender)||"Auto",c=(e==null?void 0:e.age)||"Auto",f=(e==null?void 0:e.ethnicity)||"Auto",g=!h.toLowerCase().startsWith("auto"),m=!c.toLowerCase().startsWith("auto"),u=!f.toLowerCase().startsWith("auto");if(g||m||u||p){if(p){const b=na(p);s.toLowerCase().includes(b.toLowerCase().slice(0,20))||(s+=`

Additional Directive (Custom Request): ${b}`,r.push(`Synchronized Custom Request directive: ${b}`))}if(g||m||u){const b=[];if(g&&b.push(`Gender: ${h==="Laki-Laki"?"Male":h==="Perempuan"?"Female":h}`),m){const w=parseInt(c,10);b.push(`Age: ${isNaN(w)?c:`${w} years old`}`)}u&&b.push(`Ethnicity: ${f}`);const R=b.join(", ");s.includes(R)||(s+=`

Subject Character Parameters: ${R}. Applied explicitly, proportionally, and naturally to the requested/added character, while strictly preserving all original subjects and characters without alteration or removal.`,r.push(`Synchronized demographic parameters: ${R}`))}}s=na(s);let k=t?`/imagine prompt: ${s}`:s;for(const b of i)k.includes(b)||(k+=` ${b}`);return{success:!0,enrichedPrompt:k.trim(),conflictsResolved:r,source:"HEURISTIC_RESOLVER"}}function Pe({enrichedPrompt:l="",optimalPrompt:a="",twoWorldsConfig:e={},originalShorthands:n=[]}){if(!l||typeof l!="string")return a;let r=na(l.trim());for(const t of n)r.includes(t)||(r+=` ${t}`);const s=(e==null?void 0:e.environmentStyle)||"";return/3d|clay|plastic|pixar|nickelodeon|spongebob|lego|cartoon|chibi|toy|amigurumi|origami|yarn/i.test(s)&&(r=r.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,"")),r.trim()}function je(l={},a={},e=""){var o;if((o=l.smartDetection)!=null&&o.gender){const d=String(l.smartDetection.gender).trim();if(/perempuan|wanita|female|woman|girl/i.test(d))return"Perempuan";if(/laki-laki|pria|male|man|boy/i.test(d))return"Laki-Laki"}const n=[l.subject,l.subjectDescription,l.mainDescription,l.visualDetails,l.outfit,l.outfitMaterial,l.expression,e].filter(Boolean).join(" ").toLowerCase(),r=["woman","female","wanita","perempuan","cewek","girl","lady","hijab","gadis","ibu","sister","mother","daughter","queen","princess","she","her"],s=["man","male","pria","laki-laki","cowok","boy","gentleman","businessman","ayah","bapak","brother","father","son","king","prince","he","his"];let i=0,t=0;for(const d of r){const p=new RegExp(`\\b${d}\\b`,"g"),h=n.match(p);h&&(i+=h.length)}for(const d of s){const p=new RegExp(`\\b${d}\\b`,"g"),h=n.match(p);h&&(t+=h.length)}return i>t?"Perempuan":(t>i,"Laki-Laki")}function Me(l={},a={},e=""){var s;if((s=l.smartDetection)!=null&&s.age){const t=String(l.smartDetection.age).trim().match(/(\d{1,2})/);if(t)return`${Math.min(50,Math.max(1,parseInt(t[1],10)))} tahun`}const n=[l.subject,l.subjectDescription,l.mainDescription,l.visualDetails,e].filter(Boolean).join(" ").toLowerCase(),r=n.match(/(?:age|usia|umur|aged|berusia)\s*(?:is|sekitar|about|approx)?\s*(\d{1,2})/i)||n.match(/\b(\d{1,2})\s*(?:years?\s*old|yo|y\.o|thn|tahun)\b/i);return r?`${Math.min(50,Math.max(1,parseInt(r[1],10)))} tahun`:/\b(baby|infant|bayi)\b/i.test(n)?"1 tahun":/\b(toddler|balita)\b/i.test(n)?"3 tahun":/\b(little\s*girl|little\s*boy|anak-anak|anak\s*kecil|child|kid|bocah)\b/i.test(n)?"8 tahun":/\b(preteen|young\s*teen)\b/i.test(n)?"12 tahun":/\b(teenager|teen|remaja|abg|high\s*school)\b/i.test(n)?"16 tahun":/\b(college|university|mahasiswa|dewasa\s*muda|young\s*adult|young\s*woman|young\s*man)\b/i.test(n)?"21 tahun":/\b(chibi|doll|figurine|cute\s*3d)\b/i.test(n)?"22 tahun":/\b(middle\s*aged|paruh\s*baya|dewasa\s*matang)\b/i.test(n)?"42 tahun":/\b(elderly|senior|old\s*man|old\s*woman|kakek|nenek|wrinkled)\b/i.test(n)?"50 tahun":/\b(adult|dewasa|pria\s*dewasa|wanita\s*dewasa)\b/i.test(n)?"28 tahun":"25 tahun"}function Ge(l={},a={},e=""){var r;if((r=l.smartDetection)!=null&&r.ethnicity){const s=String(l.smartDetection.ethnicity).trim(),i=ne.find(t=>t.toLowerCase()===s.toLowerCase()&&!t.startsWith("Auto"));if(i)return i}const n=[l.subject,l.subjectDescription,l.mainDescription,l.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(southeast\s*asian|indonesia|indonesian|melayu|malay|asean|nusantara|jawa|sunda|bali|filipino|tagalog|vietnamese|thai)\b/i.test(n)?"Asia Tenggara":/\b(east\s*asian|japanese|korean|chinese|mandarin|tokyo|seoul|beijing|jepang|korea|tionghoa|cina)\b/i.test(n)?"Asia Timur":/\b(south\s*asian|indian|india|pakistan|pakistani|bengali|bangladesh|nepali|sri\s*lanka)\b/i.test(n)?"Asia Selatan":/\b(caucasian|european|eropa|bule|nordic|slavic|british|german|french|italian|scandinavian|western)\b/i.test(n)?"Eropa":/\b(middle\s*eastern|arab|arabic|timur\s*tengah|persian|iranian|turkish|turki)\b/i.test(n)?"Timur Tengah":/\b(african|afrika|black|afro|ethiopian|nigerian|kenyan)\b/i.test(n)?"Afrika":/\b(latino|latina|hispanic|mexican|brazilian|colombian|amerika\s*latin)\b/i.test(n)?"Amerika Latin":/\b(pacific|oceania|polynesian|maori|samoan|hawaiian|pasifik|oseania)\b/i.test(n)?"Pasifik / Oseania":(/\b(asian|asia|oriental)\b/i.test(n),"Asia")}function _e(l={},a={},e=""){var r;if((r=l.smartDetection)!=null&&r.subjectStyle){const s=String(l.smartDetection.subjectStyle).trim();if(s&&!s.startsWith("Auto"))return Va.find(t=>t.toLowerCase()===s.toLowerCase()&&!t.startsWith("Auto"))||s}const n=[l.style,l.photoStyleRealism,l.subjectDescription,l.mainDescription,l.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(lego|minifigure|brick|lego\s*style)\b/i.test(n)?"LEGO Style":/\b(claymation|clay\s*render|clay\s*model|plastisin|soft\s*clay)\b/i.test(n)?"Claymation Style":/\b(anime|manga|anime\s*style|shonen|shojo|makoto\s*shinkai)\b/i.test(n)?"Anime Style":/\b(chibi|doll\s*figurine|cute\s*3d\s*character|chibi\s*3d|vinyl\s*toy|figurine)\b/i.test(n)?"Stylized 3D Character":/\b(3d\s*cartoon|pixar|disney|animated\s*character|cartoon\s*3d|3d\s*animation|cgi\s*character|cartoon)\b/i.test(n)?"3D Cartoon Style":/\b(papercraft|origami|paper\s*cut)\b/i.test(n)?"Papercraft Origami":/\b(crochet|knitted|amigurumi|yarn)\b/i.test(n)?"Crochet / Knitted Style":/\b(raw\s*photo|raw\s*photography|dslr\s*sensor|sensor\s*noise)\b/i.test(n)?"Raw Photography Realism":/\b(ultra\s*photorealistic|ultra\s*photoreal)\b/i.test(n)?"Ultra Photorealistic":/\b(photorealistic|hyper\s*realistic|photorealism)\b/i.test(n)?"Photorealistic":/\b(live-action|live\s*action)\b/i.test(n)?"Live-Action":a!=null&&a.isStylizedOr3D||(a==null?void 0:a.styleType)==="STYLED_3D_CHARACTER"?"3D Cartoon Style":"Realistic Human Style"}function xe(l={},a={},e=""){var r;if((r=l.smartDetection)!=null&&r.environmentStyle){const s=String(l.smartDetection.environmentStyle).trim();if(s&&!s.startsWith("Auto")){const i=_a.find(t=>t.name.toLowerCase()===s.toLowerCase()&&!t.name.startsWith("Auto"));return i?i.name:s}}const n=[l.environment,l.background,l.environmentBackground,l.lighting,l.lightingColor,l.mainDescription,l.visualDetails,e].filter(Boolean).join(" ").toLowerCase();return/\b(candyland|candy\s*world|marshmallow|sweets|dessert\s*world)\b/i.test(n)?"Candy World 3D Style":/\b(dreamy\s*pastel|pastel\s*fantasy|pastel\s*soft|dreamy\s*soft|pastel\s*lighting)\b/i.test(n)?"Dreamy Pastel 3D":/\b(fantasy\s*environment|magical\s*world|enchanted|fairy\s*tale|mystical)\b/i.test(n)?"Fantasy Environment":/\b(spongebob|bikini\s*bottom|underwater\s*3d)\b/i.test(n)?"SpongeBob Cinematic 3D":/\b(lego|lego\s*world|brick\s*diorama)\b/i.test(n)?"LEGO Style":/\b(claymation|clay\s*world|soft\s*clay)\b/i.test(n)?"Soft Clay Render":/\b(origami|papercraft|paper\s*diorama)\b/i.test(n)?"Papercraft Origami":/\b(plush|felt|fuzzy)\b/i.test(n)?"Cute Felt Toy Aesthetic":/\b(crochet|yarn|knitted|amigurumi)\b/i.test(n)?"Amigurumi 3D Style":/\b(clean\s*3d|studio\s*render|octane\s*render|studio\s*backdrop|clean\s*studio)\b/i.test(n)?"Clean 3D Render":/\b(stylized\s*3d\s*cartoon|cartoon\s*world|whimsical\s*cartoon)\b/i.test(n)?"Stylized 3D Cartoon":/\b(pixar|pixar-style)\b/i.test(n)?"Pixar-style Lighting":/\b(dark\s*&\s*moody|dark\s*and\s*moody|moody\s*lighting)\b/i.test(n)?"Dark & Moody":/\b(dramatic\s*lighting|high\s*contrast\s*light)\b/i.test(n)?"Dramatic Lighting":/\b(cinematic|film\s*still|movie\s*scene)\b/i.test(n)?"Cinematic":/\b(portrait\s*photography|bokeh\s*backdrop|studio\s*portrait)\b/i.test(n)?"Portrait Photography":/\b(realistic\s*environment|outdoor\s*scenic|landscape\s*photography|real\s*world|nature\s*landscape)\b/i.test(n)?"Realistic Environment":/\b(natural\s*lighting|natural\s*light|daylight|sunlight|ambient\s*daylight)\b/i.test(n)?"Natural Lighting":a!=null&&a.isStylizedOr3D||(a==null?void 0:a.styleType)==="STYLED_3D_CHARACTER"?a.dominantHue==="pink"||a.dominantHue==="cyan"?"Dreamy Pastel 3D":"Clean 3D Render":"Natural Lighting"}function ie(l={},a={},e={},n={}){const r=e||(a==null?void 0:a.visualTelemetry)||{},s=(a==null?void 0:a.name)||"",i=je(l,r,s),t=Me(l,r,s),o=Ge(l,r,s),d=_e(l,r,s),p=xe(l,r,s);return{gender:i,age:t,ethnicity:o,subjectStyle:d,environmentStyle:p}}const ra={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class $e{constructor(a=[]){this.catalog=a,this.localEngine=new ke(a),this.status=ra.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){z.getApiKey()||(this.status=ra.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!z.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const n=e.indexOf("{"),r=e.lastIndexOf("}");if(n!==-1&&r>n){const t=e.substring(n,r+1);try{return JSON.parse(t)}catch{}}const s=e.indexOf("["),i=e.lastIndexOf("]");if(s!==-1&&i>s){const t=e.substring(s,i+1);try{return JSON.parse(t)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var d;const n=(a||z.getApiKey()).trim(),r=e||z.getModel()||"gemini-2.0-flash";if(!n)return this.status=ra.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:ra.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const i=[r.trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((p,h,c)=>p&&c.indexOf(p)===h&&!p.includes("1.5-pro")&&!p.includes("2.5-pro")&&(p==="gemini-3.5-flash-lite"||!p.includes("3.5")&&!p.includes("3.8")));let t="",o=null;for(const p of i)try{const h=`https://generativelanguage.googleapis.com/v1beta/models/${p}?key=${encodeURIComponent(n)}`,c=await fetch(h,{method:"GET",headers:{"Content-Type":"application/json"}});if(c.ok){o=p;break}else{if(t=((d=(await c.json().catch(()=>({}))).error)==null?void 0:d.message)||`HTTP ${c.status}: ${c.statusText}`,c.status===404)continue;if(c.status===400||c.status===403)break}}catch(h){t=h.message||"Koneksi jaringan gagal"}if(o)return this.status=ra.CONNECTED,this.lastError=null,o!==r&&z.setModel(o),{success:!0,status:ra.CONNECTED,message:`Berhasil terhubung ke model ${o}!`};try{const p=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(n)}`,h=await fetch(p);if(h.ok){const f=((await h.json().catch(()=>({}))).models||[]).filter(m=>{var u;return(u=m.supportedGenerationMethods)==null?void 0:u.includes("generateContent")}).map(m=>m.name.replace(/^models\//,"")).filter(m=>!m.includes("1.5-pro")&&!m.includes("2.5-pro")&&!m.includes("3.5")&&!m.includes("3.8")),g=f.find(m=>m.includes("2.0-flash"))||f.find(m=>m.includes("1.5-flash"))||f[0];if(g)return z.setModel(g),this.status=ra.CONNECTED,this.lastError=null,{success:!0,status:ra.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${g})!`}}}catch{}return this.status=ra.FAILED,this.lastError=t||"Koneksi gagal",{success:!1,status:ra.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const n=z.getApiKey().trim(),r=z.getModel()||"gemini-2.0-flash";if(!n){const t=this.localEngine.analyze(a,e),o=na(t.optimalPrompt);return{...t,optimalPrompt:o,englishBasePrompt:na(t.cleanText),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."}}try{const t=await this.callGeminiAPI(a,n,r);if(t){const o=this.mergeAiWithCatalog(t,a,e);this.status=ra.CONNECTED,this.lastError=null;const d=z.getModel()||r;return{...o,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${d}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(t){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",t),this.lastError=t.message}const s=this.localEngine.analyze(a,e),i=na(s.optimalPrompt);return{...s,optimalPrompt:i,englishBasePrompt:na(s.cleanText),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,n){const s=[(n||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((t,o,d)=>t&&d.indexOf(t)===o&&!t.includes("1.5-pro")&&!t.includes("2.5-pro")&&(t==="gemini-3.5-flash-lite"||!t.includes("3.5")&&!t.includes("3.8")));let i=null;for(const t of s)try{const o=await this.executeGenerateContent(a,e,t);if(o)return t!==n&&z.setModel(t),o}catch(o){i=o,console.warn(`Model ${t} tidak dapat digunakan (${o.message}), mencoba model alternatif...`);continue}throw i||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,n){var p,h,c,f,g;const r=`https://generativelanguage.googleapis.com/v1beta/models/${n}:generateContent?key=${encodeURIComponent(e)}`,i={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
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

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},t=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!t.ok){const m=await t.text();throw new Error(`Gemini API error (${t.status}): ${m}`)}const d=(g=(f=(c=(h=(p=(await t.json()).candidates)==null?void 0:p[0])==null?void 0:h.content)==null?void 0:c.parts)==null?void 0:f[0])==null?void 0:g.text;if(!d)throw new Error("Respon Gemini kosong.");return this.extractJson(d)}mergeAiWithCatalog(a,e,n){var u,k,b,R,w;const r=this.localEngine.analyze(e,n);let s=[];const i=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const A of a.primaryShorthands){if(!A||!A.code)continue;const C=A.code.startsWith("/")?A.code:`/${A.code}`;if(i.has(C))continue;i.add(C);const I=this.catalog.find(E=>E.code.toLowerCase()===C.toLowerCase());s.push({item:I||null,code:C,name:A.name||(I==null?void 0:I.name)||C,category:A.category||(I==null?void 0:I.category)||"ONLINE_DISCOVERY",target:A.target||(I==null?void 0:I.target)||"Konsep Visual Prompt",description:A.description||(I==null?void 0:I.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:A.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:I?"CORE":"ONLINE",isOnline:!I,equivalentTo:(I==null?void 0:I.equivalentTo)||A.equivalentTo||[],functionGroup:(I==null?void 0:I.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(r.primaryShorthands&&r.primaryShorthands.length>0)for(const A of r.primaryShorthands)A.category==="LOCK_PRESERVATION"&&!i.has(A.code)&&(i.add(A.code),s.push({...A,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else r.primaryShorthands&&r.primaryShorthands.length>0&&(s=r.primaryShorthands);let t=[];const o=new Set([...s.map(A=>A.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const A of a.relatedShorthands){if(!A||!A.code)continue;const C=A.code.startsWith("/")?A.code:`/${A.code}`;if(o.has(C))continue;o.add(C);const I=this.catalog.find(E=>E.code.toLowerCase()===C.toLowerCase());t.push({item:I||null,code:C,name:A.name||(I==null?void 0:I.name)||C,category:A.category||(I==null?void 0:I.category)||"ONLINE_DISCOVERY",target:A.target||(I==null?void 0:I.target)||"Variasi Konsep Visual",description:A.description||(I==null?void 0:I.description)||"Alternatif shorthand hasil analisis semantik online.",priority:A.priority||"DISARANKAN",reason:A.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:I?"CORE":"ONLINE",isOnline:!I,equivalentTo:(I==null?void 0:I.equivalentTo)||A.equivalentTo||[],functionGroup:(I==null?void 0:I.functionGroup)||A.functionGroup||A.category||"ONLINE_EXTENSION"})}if(r.relatedShorthands&&r.relatedShorthands.length>0)for(const A of r.relatedShorthands)o.has(A.code)||(o.add(A.code),t.push(A));let d=[];n&&Array.isArray(n)?d=n:s.length>0?d=s.map(A=>A.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?d=a.installedShorthands.map(A=>A.startsWith("/")?A:`/${A}`):r.installedShorthands&&r.installedShorthands.length>0&&(d=r.installedShorthands);const p=r.cleanText||e.trim();let h="",c="";if(a.optimalPrompt&&a.optimalPrompt.trim()){if(h=na(a.optimalPrompt.trim()),c=h.replace(/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,"").trim(),d.length>0)for(const A of d)h.includes(A)||(h+=` ${A}`)}else c=na(p),c&&!c.endsWith(".")&&!c.endsWith("!")&&!c.endsWith("?")&&(c+="."),h=d.length>0?`${c} ${d.join(" ")}`.trim():c;const f={primaryAction:(u=a.intent)!=null&&u.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:r.intent.primaryAction,primaryTarget:(k=a.intent)!=null&&k.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:r.intent.primaryTarget,summary:((b=a.intent)==null?void 0:b.summary)||a.summary||r.intent.summary,priority:((R=a.intent)==null?void 0:R.priority)||r.intent.priority,category:(w=a.intent)!=null&&w.category&&a.intent.category!=="GENERAL"?a.intent.category:r.intent.category},g=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:r.editAreas,m=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:r.lockedAreas;return{rawPrompt:e,normalizedPrompt:r.normalizedPrompt,cleanText:p,englishBasePrompt:c,intent:f,editAreas:g,lockedAreas:m,unchangedAreas:r.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:r.conflicts,primaryShorthands:s,relatedShorthands:t,recommendations:[...s,...t],exclusions:r.exclusions,installedShorthands:d,visualTransformation:a.visualTransformation||r.visualTransformation,optimalPrompt:h,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var t,o,d,p,h;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const e=z.getApiKey()?z.getApiKey().trim():"",n=z.getModel()||"gemini-2.0-flash";if(!e)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const r=[n,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((c,f,g)=>c&&g.indexOf(c)===f&&(c==="gemini-3.5-flash-lite"||!c.includes("3.5")&&!c.includes("3.8"))),i={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
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

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const c of r)try{const f=`https://generativelanguage.googleapis.com/v1beta/models/${c}:generateContent?key=${encodeURIComponent(e)}`,g=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!g.ok)continue;const u=(h=(p=(d=(o=(t=(await g.json()).candidates)==null?void 0:t[0])==null?void 0:o.content)==null?void 0:d.parts)==null?void 0:p[0])==null?void 0:h.text;if(!u)continue;let k=[];try{k=this.extractJson(u)}catch{continue}if(!Array.isArray(k))continue;const b=k.filter(R=>R&&R.code&&typeof R.code=="string").map(R=>({code:R.code.startsWith("/")?R.code:`/${R.code}`,name:R.name||R.code,description:R.description||"Instruksi visual shorthand online",category:R.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:b,onlineAvailable:!0,message:b.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(f){console.warn(`Pencarian online dengan model ${c} gagal:`,f);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var c,f,g,m,u,k;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const n=z.getApiKey()?z.getApiKey().trim():"",r=z.getModel()||"gemini-2.0-flash";if(!n)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const s=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],i=[r,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((b,R,w)=>b&&w.indexOf(b)===R&&(b==="gemini-3.5-flash-lite"||!b.includes("3.5")&&!b.includes("3.8"))),t=`Anda adalah Prompt Shorthand Analyzer V3.3.5 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
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
}`,o=((c=e==null?void 0:e.intent)==null?void 0:c.summary)||"",d=`Prompt Optimal Asli:
"${a.trim()}"
${o?`Konteks/Maksud Analisis:
"${o}"
`:""}Shorthand Terpasang Wajib Dipertahankan: ${s.length>0?s.join(" "):"(tidak ada)"}`,p={contents:[{role:"user",parts:[{text:`${t}

${d}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let h=null;for(const b of i)try{const R=`https://generativelanguage.googleapis.com/v1beta/models/${b}:generateContent?key=${encodeURIComponent(n)}`,w=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!w.ok){const T=await w.text();throw new Error(`HTTP ${w.status}: ${T}`)}const C=(k=(u=(m=(g=(f=(await w.json()).candidates)==null?void 0:f[0])==null?void 0:g.content)==null?void 0:m.parts)==null?void 0:u[0])==null?void 0:k.text;if(!C)throw new Error("Respon Gemini kosong.");const I=this.extractJson(C);let E=I.enrichedPrompt||I.prompt||(typeof I=="string"?I:"");if(!E||typeof E!="string"||!E.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");E=na(E.trim());for(const T of s)E.includes(T)||(E+=` ${T}`);return{success:!0,enrichedPrompt:E,modelUsed:b}}catch(R){h=R,console.warn(`Enrich prompt dengan model ${b} gagal:`,R.message);continue}throw h||new Error("Gagal memperkaya prompt dengan Gemini.")}async enrichTwoWorldsPrompt({optimalPrompt:a,generatedPrompt:e="",twoWorldsConfig:n=null,analysisResult:r=null}){var g,m,u,k,b;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal 2 Dunia kosong.");const s=z.getApiKey()?z.getApiKey().trim():"",i=z.getModel()||"gemini-2.0-flash";if(!s){const R=Za({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:n,analysisResult:r});return{success:!0,enrichedPrompt:R.enrichedPrompt,conflictsResolved:R.conflictsResolved,modelUsed:"HEURISTIC_RESOLVER"}}const t=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],o=[i,"gemini-3.5-flash-lite","gemini-2.0-flash","gemini-2.5-flash","gemini-1.5-flash","gemini-2.5-pro"].filter((R,w,A)=>R&&A.indexOf(R)===w&&(R==="gemini-3.5-flash-lite"||!R.includes("3.5")&&!R.includes("3.8"))),d=Ce(),p=Le({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:n}),h={contents:[{role:"user",parts:[{text:`${d}

${p}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let c=null;for(const R of o)try{const w=`https://generativelanguage.googleapis.com/v1beta/models/${R}:generateContent?key=${encodeURIComponent(s)}`,A=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!A.ok){const U=await A.text();throw new Error(`HTTP ${A.status}: ${U}`)}const I=(b=(k=(u=(m=(g=(await A.json()).candidates)==null?void 0:g[0])==null?void 0:m.content)==null?void 0:u.parts)==null?void 0:k[0])==null?void 0:b.text;if(!I)throw new Error("Respon Gemini kosong.");const E=this.extractJson(I);let T=E.enrichedPrompt||E.prompt||(typeof E=="string"?E:"");if(!T||typeof T!="string"||!T.trim())throw new Error("Hasil pengayaan AI 2 Dunia kosong atau tidak valid.");return T=Pe({enrichedPrompt:T,optimalPrompt:a,twoWorldsConfig:n,originalShorthands:t}),{success:!0,enrichedPrompt:T,conflictsResolved:E.conflictsResolved||[],modelUsed:R}}catch(w){c=w,console.warn(`Enrich 2 Dunia dengan model ${R} gagal:`,w.message);continue}console.warn("Fallback ke Heuristic Conflict Resolver untuk 2 Dunia:",c==null?void 0:c.message);const f=Za({optimalPrompt:a,generatedPrompt:e,twoWorldsConfig:n,analysisResult:r});return{success:!0,enrichedPrompt:f.enrichedPrompt,conflictsResolved:f.conflictsResolved,modelUsed:"HEURISTIC_FALLBACK"}}detectImageAspect(a=null,e=null){if(a!=null&&a.width&&(a!=null&&a.height)){const r=a.width/a.height;if(r>1.6)return{ar:"16:9",orientation:"landscape-wide"};if(r>1.25)return{ar:"4:3",orientation:"landscape"};if(r>.9&&r<1.1)return{ar:"1:1",orientation:"square"};if(r<.65)return{ar:"9:16",orientation:"portrait-tall"};if(r<.85)return{ar:"3:4",orientation:"portrait"}}if(e&&typeof e=="string")try{const r=e.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"");if(typeof atob=="function"){const s=atob(r.substring(0,4e3));if(s.charCodeAt(0)===137&&s.charCodeAt(1)===80&&s.charCodeAt(2)===78&&s.charCodeAt(3)===71){const i=s.charCodeAt(16)<<24|s.charCodeAt(17)<<16|s.charCodeAt(18)<<8|s.charCodeAt(19),t=s.charCodeAt(20)<<24|s.charCodeAt(21)<<16|s.charCodeAt(22)<<8|s.charCodeAt(23);if(i>0&&t>0){const o=i/t;return o>1.6?{ar:"16:9",orientation:"landscape-wide"}:o>1.2?{ar:"4:3",orientation:"landscape"}:o>.9&&o<1.1?{ar:"1:1",orientation:"square"}:o<.65?{ar:"9:16",orientation:"portrait-tall"}:{ar:"3:4",orientation:"portrait"}}}}}catch{}const n=((a==null?void 0:a.name)||"").toLowerCase();return n.includes("portrait")||n.includes("vertical")||n.includes("story")||n.includes("reel")?{ar:"9:16",orientation:"portrait-tall"}:n.includes("square")||n.includes("feed")||n.includes("profile")||n.includes("1x1")?{ar:"1:1",orientation:"square"}:{ar:"16:9",orientation:"landscape-wide"}}assembleStructuredImagePrompt(a){if(!a)return"";const e=(a.mainDescription||a.generatedPrompt||"").trim()||"Fotografi autentik dengan pencahayaan alami dan detail realistis.",n=e.startsWith("/imagine prompt:")?e:`/imagine prompt: ${e}`;let r=(a.visualDetails||"").trim();if(!r){const s=[];(a.subject||a.subjectDescription)&&s.push((a.subject||a.subjectDescription).trim()),(a.pose||a.poseExpression&&a.poseExpression!=="-")&&s.push((a.pose||a.poseExpression).trim()),a.identityPreservation&&a.identityPreservation!=="-"&&s.push(a.identityPreservation.trim()),(a.outfit||a.outfitMaterial&&a.outfitMaterial!=="-")&&s.push((a.outfit||a.outfitMaterial).trim()),(a.environment||a.environmentBackground&&a.environmentBackground!=="-")&&s.push((a.environment||a.environmentBackground).trim()),(a.composition||a.compositionPerspective&&a.compositionPerspective!=="-")&&s.push((a.composition||a.compositionPerspective).trim()),(a.lighting||a.lightingColor&&a.lightingColor!=="-")&&s.push((a.lighting||a.lightingColor).trim()),a.cameraLensDof&&a.cameraLensDof!=="-"&&s.push(a.cameraLensDof.trim()),(a.style||a.photoStyleRealism&&a.photoStyleRealism!=="-")&&s.push((a.style||a.photoStyleRealism).trim()),r=s.join(`

`)}return r?`${n}

${r}`:n}assembleOptimalImagePrompt(a,e=[],n=null){const r=((a==null?void 0:a.mainDescription)||(a==null?void 0:a.generatedPrompt)||"").trim()||"Authentic photography with natural lighting and realistic details.",s=na(r),i=s.startsWith("/imagine prompt:")?s:`/imagine prompt: ${s}`;let t=((a==null?void 0:a.visualDetails)||"").trim();if(!t){const m=[];(a!=null&&a.subject||a!=null&&a.subjectDescription)&&m.push((a.subject||a.subjectDescription).trim()),(a!=null&&a.pose||a!=null&&a.poseExpression&&a.poseExpression!=="-")&&m.push((a.pose||a.poseExpression).trim()),a!=null&&a.identityPreservation&&a.identityPreservation!=="-"&&m.push(a.identityPreservation.trim()),(a!=null&&a.outfit||a!=null&&a.outfitMaterial&&a.outfitMaterial!=="-")&&m.push((a.outfit||a.outfitMaterial).trim()),(a!=null&&a.environment||a!=null&&a.environmentBackground&&a.environmentBackground!=="-")&&m.push((a.environment||a.environmentBackground).trim()),(a!=null&&a.composition||a!=null&&a.compositionPerspective&&a.compositionPerspective!=="-")&&m.push((a.composition||a.compositionPerspective).trim()),(a!=null&&a.lighting||a!=null&&a.lightingColor&&a.lightingColor!=="-")&&m.push((a.lighting||a.lightingColor).trim()),a!=null&&a.cameraLensDof&&a.cameraLensDof!=="-"&&m.push(a.cameraLensDof.trim()),(a!=null&&a.style||a!=null&&a.photoStyleRealism&&a.photoStyleRealism!=="-")&&m.push((a.style||a.photoStyleRealism).trim()),t=m.join(`

`)}const o=[i];if(t&&o.push(na(t)),n){const m=ve(n,a);m&&o.push(m)}const d=(a==null?void 0:a.aspectRatio)||"16:9";let h=(e||[]).map(m=>m.startsWith("/")?m:`/${m}`).join(" ");h?h+=` --ar ${d} --style raw --v 6.1`:h=`--ar ${d} --style raw --v 6.1`,o.push(h);let c=((a==null?void 0:a.negativePrompt)||(a==null?void 0:a.contextualNegativePrompt)||"").trim();const f=!!(a!=null&&a.photoStyleRealism&&/3d|render|octane|chibi|doll|figurine|toy/i.test(a.photoStyleRealism)||a!=null&&a.subjectDescription&&/3d|chibi|doll|figurine|toy/i.test(a.subjectDescription)||a!=null&&a.mainDescription&&/3d|chibi|doll|figurine|toy/i.test(a.mainDescription));c||(c=f?"real human photo, photographic grain, wrinkled skin, bad 3d render, distorted limbs, extra fingers, blurry, watermark, text":"cartoon, 3d render, illustration, deformed, blurry, watermark, text");let g=na(c.replace(/^--no\s+/i,"").trim());return f&&(g=g.replace(/cartoon,\s*/gi,"").replace(/3d render,\s*/gi,"").replace(/illustration,\s*/gi,"").replace(/,\s*3d render/gi,"").replace(/,\s*cartoon/gi,""),g.includes("real human photo")||(g=`real human photo, photographic grain, ${g}`.replace(/^,\s*/,""))),o.push(`--no ${g}`),o.join(`

`)}matchImageShorthands(a,e=null){const n=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+((e==null?void 0:e.subject)||"")+" "+((e==null?void 0:e.subjectDescription)||"")+" "+((e==null?void 0:e.outfit)||"")+" "+((e==null?void 0:e.outfitMaterial)||"")+" "+((e==null?void 0:e.pose)||"")+" "+((e==null?void 0:e.poseExpression)||"")+" "+((e==null?void 0:e.environment)||"")+" "+((e==null?void 0:e.environmentBackground)||"")+" "+((e==null?void 0:e.composition)||"")+" "+((e==null?void 0:e.compositionPerspective)||"")+" "+((e==null?void 0:e.lighting)||"")+" "+((e==null?void 0:e.lightingColor)||"")+" "+((e==null?void 0:e.cameraLensDof)||"")+" "+((e==null?void 0:e.style)||"")+" "+((e==null?void 0:e.photoStyleRealism)||"")+" "+(Array.isArray(e==null?void 0:e.suggestedShorthands)?e.suggestedShorthands.join(" "):"")+" "+(Array.isArray(e==null?void 0:e.optimizationNeeds)?e.optimizationNeeds.join(" "):"")).toLowerCase(),r=[];if(Array.isArray(e==null?void 0:e.suggestedShorthands))for(const t of e.suggestedShorthands){const o=(t||"").trim();if(!o)continue;const d=o.startsWith("/")?o.toLowerCase():`/${o.toLowerCase()}`,p=this.catalog.find(h=>h.code.toLowerCase()===d);p&&r.push({code:p.code,name:p.name,category:p.category,functionGroup:p.functionGroup||`GROUP_${p.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:p.description,priority:"WAJIB",isPrimary:!0,checked:!0,reason:"Teridentifikasi langsung oleh Vision AI dari karakteristik gambar aktual",source:"IMAGE_VISION_AI"})}for(const t of this.catalog){const o=(t.negativeTriggers||[]).map(c=>c.toLowerCase());if(o.length>0&&o.some(c=>n.includes(c)))continue;const d=(t.semanticTriggers||[]).map(c=>c.toLowerCase());let p=!1,h="";n.includes(t.code.toLowerCase())?(p=!0,h=`Terdeteksi dari direktif visual: ${t.code}`):d.some(c=>n.includes(c))?(p=!0,h=`Teridentifikasi dari atribut visual gambar (${t.name})`):Array.isArray(e==null?void 0:e.optimizationNeeds)&&e.optimizationNeeds.some(c=>t.code.toLowerCase().includes(c.toLowerCase())||(t.name||"").toLowerCase().includes(c.toLowerCase())||d.some(f=>c.toLowerCase().includes(f)))&&(p=!0,h=`Direkomendasikan untuk optimasi visual gambar (${t.name})`),p&&r.push({code:t.code,name:t.name,category:t.category,functionGroup:t.functionGroup||`GROUP_${t.code.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:t.description,priority:t.priority||"WAJIB",isPrimary:!0,checked:!0,reason:h||t.whenToUse||"Sesuai dengan karakter visual gambar",source:"IMAGE_ANALYSIS"})}const s=new Set,i=[];for(const t of r)s.has(t.functionGroup)||(s.add(t.functionGroup),i.push(t));return i}getStandard13VisualBreakdown(a){const e=(a==null?void 0:a.aspectRatio)||"16:9",n=e==="9:16"||e==="3:4";return{Subject:((a==null?void 0:a.subject)||(a==null?void 0:a.subjectDescription)||(a==null?void 0:a.mainDescription)||"Subjek visual utama teridentifikasi").trim(),Pose:((a==null?void 0:a.pose)||(a==null?void 0:a.poseExpression)||"Postur alami terpusat").trim(),Framing:((a==null?void 0:a.framing)||(n?"Vertical portrait framing":"Eye-level balanced framing")).trim(),"Camera / Angle":((a==null?void 0:a.cameraAngle)||(a==null?void 0:a.camera)||(a==null?void 0:a.cameraLensDof)||"Eye-level angle, 50mm prime f/2.8").trim(),Lighting:((a==null?void 0:a.lighting)||(a==null?void 0:a.lightingColor)||"Pencahayaan terukur dengan gradasi bayangan natural").trim(),Environment:((a==null?void 0:a.environment)||(a==null?void 0:a.environmentBackground)||"Setting lingkungan terkoordinasi secara alami").trim(),Background:((a==null?void 0:a.background)||(a==null?void 0:a.environmentBackground)||"Latar belakang dengan separasi kedalaman terukur").trim(),Outfit:((a==null?void 0:a.outfit)||(a==null?void 0:a.outfitMaterial)||"Pakaian rapi dengan tekstur bahan autentik").trim(),Expression:((a==null?void 0:a.expression)||"Ekspresi wajar, fokus tenang, dan proporsi alami").trim(),Composition:((a==null?void 0:a.composition)||(a==null?void 0:a.compositionPerspective)||"Komposisi terpusat seimbang rule-of-thirds").trim(),Style:((a==null?void 0:a.style)||(a==null?void 0:a.photoStyleRealism)||"Fotografi realistis autentik").trim(),"Color / Tone":((a==null?void 0:a.colorTone)||"Palet warna alami dengan kontras seimbang").trim(),"Aspect Ratio":e}}analyzeImageShorthandsBlueprint(a,e){const n=new Set,r=((a||"")+" "+((e==null?void 0:e.mainDescription)||"")+" "+((e==null?void 0:e.visualDetails)||"")+" "+Object.values(e||{}).filter(u=>typeof u=="string").join(" ")).toLowerCase(),s=new Map;Array.isArray(e==null?void 0:e.suggestedShorthands)&&e.suggestedShorthands.forEach(u=>{const k=(u||"").trim().toLowerCase(),b=k.startsWith("/")?k:`/${k}`;s.set(b,100)});for(const u of this.catalog){const k=u.code.toLowerCase();let b=s.get(k)||0;r.includes(k)&&(b+=35);const R=(u.semanticTriggers||[]).map(A=>A.toLowerCase());for(const A of R)A&&r.includes(A)&&(b+=20);if(Array.isArray(e==null?void 0:e.optimizationNeeds))for(const A of e.optimizationNeeds){const C=(A||"").toLowerCase();C&&(R.some(I=>C.includes(I))||(u.name||"").toLowerCase().includes(C))&&(b+=25)}(u.negativeTriggers||[]).map(A=>A.toLowerCase()).some(A=>A&&r.includes(A))&&(b=-100),b>0&&s.set(k,b)}const i=[];for(const u of this.catalog){const k=s.get(u.code.toLowerCase())||0;k>0&&i.push({item:u,score:k})}i.sort((u,k)=>k.score-u.score);const t=[],o=new Set;for(const{item:u}of i){const k=u.code.toLowerCase(),b=u.functionGroup||u.category;if(!o.has(b)&&!n.has(k)&&(o.add(b),n.add(k),t.push({code:u.code,name:u.name,category:u.category,functionGroup:b,description:u.description,target:u.target||"Visual Utama",priority:"WAJIB",isPrimary:!0,checked:!0,active:!0,reason:`Mewakili fungsi visual inti (${u.name}) dari analisis gambar aktual`,source:(s.get(k)||0)>=100?"VISION_AI":"IMAGE_ANALYSIS",equivalentTo:u.equivalentTo||[]}),t.length>=8))break}const d=[],p=new Set;for(const{item:u}of i){const k=u.code.toLowerCase(),b=u.functionGroup||u.category;if(!o.has(b)&&!p.has(b)&&!n.has(k)&&(p.add(b),n.add(k),d.push({code:u.code,name:u.name,category:u.category,functionGroup:b,description:u.description,target:u.target||"Visual Pendukung",priority:"OPSIONAL",isPrimary:!1,checked:!1,active:!1,relationship:"COMPLEMENTARY",reason:`Melengkapi fungsi visual pada domain ${u.category} (${u.name})`,source:"IMAGE_ANALYSIS",equivalentTo:u.equivalentTo||[]}),d.length>=8))break}const h=[],c=new Set([...t.map(u=>u.category),...d.map(u=>u.category)]),f=new Set([...o,...p]);for(const{item:u}of i){const k=u.code.toLowerCase(),b=u.functionGroup||u.category;if(!n.has(k)&&(f.has(b)||c.has(u.category))&&(n.add(k),h.push({code:u.code,name:u.name,category:u.category,functionGroup:b,description:u.description,target:u.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif sinonim untuk fungsi ${b} (${u.name})`,source:"IMAGE_ANALYSIS",equivalentTo:u.equivalentTo||[]}),h.length>=8))break}if(h.length<5)for(const u of this.catalog){const k=u.code.toLowerCase(),b=u.functionGroup||u.category;if(!n.has(k)&&(c.has(u.category)||f.has(b))){if((u.negativeTriggers||[]).map(w=>w.toLowerCase()).some(w=>w&&r.includes(w)))continue;if(n.add(k),h.push({code:u.code,name:u.name,category:u.category,functionGroup:b,description:u.description,target:u.target||"Alternatif Visual",priority:"ALTERNATIF",isPrimary:!1,checked:!1,active:!1,relationship:"ALTERNATIVE",reason:`Alternatif variasi gaya dalam domain ${u.category}`,source:"CATALOG_ALTERNATIVE",equivalentTo:u.equivalentTo||[]}),h.length>=8)break}}const g=[],m=[];for(const u of this.catalog){const k=u.code.toLowerCase();if(n.has(k))continue;const R=(u.negativeTriggers||[]).map(A=>A.toLowerCase()).some(A=>A&&r.includes(A)),w=!c.has(u.category);if((R||w)&&(n.add(k),m.push({code:u.code,target:u.target||u.name,reason:R?`Bertentangan dengan kondisi visual gambar aktual (${u.name})`:`Tidak relevan dengan subjek atau medium gambar (${u.category})`}),m.length>=10))break}return{primaryShorthands:t,relatedShorthands:d,similarShorthands:h,conflicts:g,exclusions:m}}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:n="image/jpeg",referencePrompt:r="",preferredLang:s="id",visualTelemetry:i=null,targetAspectRatio:t="auto",isTwoWorlds:o=!1,twoWorldsConfig:d=null}){const p=z.getApiKey().trim(),h=z.getModel()||"gemini-2.0-flash";let c=null,f="LOCAL_ENGINE",g=!1,m="";if(p&&e)try{const O=await this.executeMultimodalImageAnalysis(e,n,r,p,h,s,t,o);O&&(O.mainDescription||O.subjectDescription)&&(c=O,f="GEMINI_AI",g=!0,this.status=ra.CONNECTED,this.lastError=null,m=`🌐 Analisa Gambar AI AKTIF (${z.getModel()||h}) — Vision analysis mendalam dari gambar aktual.`)}catch(O){console.warn("Gemini multimodal image analysis failed, falling back smoothly to dynamic heuristic vision analysis:",O),this.lastError=O.message}c||(c=this.generateDynamicImageAnalysis(a,e,r,s,i,t),f=p?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",g=!!p,m=g?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual Dinamis: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Dinamis Lokal — Sambungkan Gemini API Key di Pengaturan untuk vision AI langsung)."),t&&t!=="auto"&&t!=="Otomatis"&&(c.aspectRatio=t);const u=this.assembleStructuredImagePrompt(c),k=this.getStandard13VisualBreakdown(c);c.aspectRatio&&(k["Aspect Ratio"]=c.aspectRatio);const{primaryShorthands:b,relatedShorthands:R,similarShorthands:w,conflicts:A,exclusions:C}=this.analyzeImageShorthandsBlueprint(u,c),I=b.map(O=>O.code);let E=null,T=d?{...d}:null;o&&(E=ie(c,a,i,d),c.smartDetection=E,T&&E&&((!T.gender||T.gender.startsWith("Auto"))&&(T.gender=E.gender),(!T.age||T.age.startsWith("Auto"))&&(T.age=E.age),(!T.ethnicity||T.ethnicity.startsWith("Auto"))&&(T.ethnicity=E.ethnicity),(!T.subjectStyle||T.subjectStyle.startsWith("Auto"))&&(T.subjectStyle=E.subjectStyle),(!T.environmentStyle||T.environmentStyle.startsWith("Auto"))&&(T.environmentStyle=E.environmentStyle)));const U=this.assembleOptimalImagePrompt(c,I,o?T||d:null),v={primaryAction:o?"REPRESENTASI_2_DUNIA":"REPRESENTASI_VISUAL",primaryTarget:o?"Karakteristik Visual & Dualitas Gambar Sumber":"Karakteristik Visual Gambar Aktual",summary:o?`Gambar ini merepresentasikan konsep 2 Dunia berbasis ${c.subjectDescription||c.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt representasi dualitas / dua dunia yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`:`Gambar ini merepresentasikan ${c.subjectDescription||c.mainDescription}. Analisis visual ditujukan untuk mengekstrak spesifikasi prompt yang akurat dan mempertahankan identitas subjek, ekspresi, komposisi, pencahayaan, dan detail autentik pada hasil generasi AI.`,priority:"HIGH",category:o?"TWO_WORLDS":"IMAGE_TO_PROMPT"},D=[{entity:"STRUKTUR_PROMPT",label:"Penyesuaian Struktur Prompt",description:"Menyusun urutan deskripsi sistematis: subjek utama → atribut pose & busana → pencahayaan & suasana → framing kamera."},{entity:"PENJELASAN_KATA",label:"Penyederhanaan & Presisi Frasa",description:"Mengonversi elemen visual menjadi deskripsi spesifik dan bahasa alami yang langsung dipahami oleh engine generatif AI."},{entity:"PENEKANAN_VISUAL",label:"Penekanan Elemen Visual Kunci",description:"Mempertegas karakteristik pencahayaan, tekstur material, dan proporsi nyata dari gambar sumber."},{entity:"PENGUATAN_DETAIL",label:"Penguatan Detail Mikro",description:"Menambahkan detail resolusi tinggi, kedalaman ruang (DoF), dan mikrokontras natural untuk menghindari artefak."},{entity:"PARAMETER_TEKNIS",label:"Integrasi Parameter AI Generatif",description:`Menambahkan parameter teknis standar (--ar ${c.aspectRatio||"16:9"} --style raw --v 6.1) dan direktif negative prompt (--no) untuk stabilitas hasil visual.`}],H=[{entity:"SUBJEK_UTAMA",label:"Subjek Utama & Identitas Visual",description:c.subjectDescription||c.subject||c.mainDescription},{entity:"POSE_EKSPRESI",label:"Pose & Ekspresi",description:c.poseExpression||c.pose||"Postur alami dan ekspresi wajah subjek asli"},{entity:"PAKAIAN_BUSANA",label:"Pakaian & Aksesoris",description:c.outfitMaterial||c.outfit||"Gaya pakaian dan tekstur material busana"},{entity:"FRAMING_KAMERA",label:"Framing & Angle Kamera",description:c.cameraLensDof||c.camera||"Sudut pandang lensa kamera dan rasio framing"},{entity:"BACKGROUND_ENV",label:"Background & Environment",description:c.environmentBackground||c.environment||"Setting lokasi dan latar belakang asli"},{entity:"KOMPOSISI",label:"Komposisi Visual",description:c.compositionPerspective||c.composition||"Pusat perhatian visual dan keseimbangan bidang"},{entity:"PENCAHAYAAN",label:"Pencahayaan & Suasana",description:c.lightingColor||c.lighting||"Arah pencahayaan, kontras shadow-highlight, dan tone ambient"}],G={from:`Kondisi visual aktual dari file gambar sumber: ${c.mainDescription||"Subjek dan komposisi visual nyata"}`,to:`Spesifikasi prompt AI optimal terstruktur lengkap dengan shorthand terpasang (${I.join(" ")}), parameter teknis (--ar ${c.aspectRatio||"16:9"} --style raw --v 6.1), dan negative prompt.`,summary:"💡 Translasi analitis representasi visual: Gambar sumber dianalisis secara objektif menjadi spesifikasi prompt AI generatif tanpa melakukan editing atau perombakan gambar asli."};return{mode:o?"TWO_WORLDS":"IMAGE_TO_PROMPT",source:f,isOnlineActive:g,engineNotice:m,generatedPrompt:u,optimalPrompt:U,cleanText:u,visionData:c,visualBreakdown:k,primaryShorthands:b,relatedShorthands:R,similarShorthands:w,recommendations:[...b,...R,...w],installedShorthands:I,conflicts:A,exclusions:C,editAreas:D,lockedAreas:H,unchangedAreas:H.map(O=>O.description),visualTransformation:G,intent:v,referencePrompt:r||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:n,aspectRatio:c.aspectRatio||"16:9"},twoWorldsSmartDetection:o?E:null,timestamp:new Date().toISOString()}}async executeMultimodalImageAnalysis(a,e,n,r,s,i="id",t="auto",o=!1){var b,R,w,A;const p=[(s||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((C,I,E)=>C&&E.indexOf(C)===I&&!C.includes("1.5-pro")&&!C.includes("2.5-pro")&&(C==="gemini-3.5-flash-lite"||!C.includes("3.5")&&!C.includes("3.8")));p.length===0&&p.push("gemini-2.0-flash","gemini-1.5-flash");const h=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!h||h.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let c=(e||"image/jpeg").toLowerCase().trim();c.includes("png")?c="image/png":c.includes("webp")?c="image/webp":c.includes("heic")?c="image/heic":c.includes("heif")?c="image/heif":c="image/jpeg";const g=`Anda adalah Ahli Analisis Gambar Vision AI & Prompt Engineering Profesional.
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
    - Gaya fotografi atau gaya visual asli (realistis, karakter 3D animasi, chibi figurine, digital render).${o?`
4. KHUSUS MODE 2 DUNIA (SMART DETECTION OTOMATIS):
Sertakan juga objek "smartDetection" di root JSON respons dengan nilai spesifik hasil deteksi gambar aktual:
"smartDetection": {
  "gender": "Laki-Laki" | "Perempuan",
  "age": "Perkiraan usia spesifik (contoh: 25 tahun)",
  "ethnicity": "Asia" | "Asia Tenggara" | "Asia Timur" | "Asia Selatan" | "Eropa" | "Timur Tengah" | "Afrika" | "Amerika Latin",
  "subjectStyle": "Nama spesifik style subjek (contoh: LEGO Style, 3D Cartoon Style, Anime Style, Realistic Human Style, Claymation Style, Stylized 3D Character, dll.)",
  "environmentStyle": "Nama spesifik style environment (contoh: Candy World 3D Style, Fantasy Environment, Dreamy Pastel 3D, Realistic Environment, Natural Lighting, dll.)"
}`:""}

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
}`,m=n&&n.trim()?`Analisis gambar ini dengan panduan pengguna: "${n.trim()}". Pastikan seluruh output prompt dalam Bahasa Inggris natural.`:"Analisis gambar ini secara visual mendalam dan hasilkan rincian elemen visual nyata dalam Bahasa Inggris natural untuk AI image generator.";let u=null;const k=[];for(const C of p){const I=`https://generativelanguage.googleapis.com/v1beta/models/${C}:generateContent?key=${encodeURIComponent(r)}`,E=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const T of E)try{const U={contents:[{role:"user",parts:[{text:`${g}

Instruksi: ${m}`},{inlineData:{mimeType:c,data:h}}]}],generationConfig:T},v=await fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)});if(!v.ok){const P=await v.text();if(v.status===400&&T.responseMimeType)continue;throw new Error(`HTTP ${v.status}: ${P}`)}const H=((w=(R=(b=(await v.json()).candidates)==null?void 0:b[0])==null?void 0:R.content)==null?void 0:w.parts)||[];let G="";for(const P of H)P.text&&!P.thought&&(G+=P.text);if(!G&&((A=H[0])!=null&&A.text)&&(G=H[0].text),!G)throw new Error("Respon Gemini kosong.");let O=null;try{O=this.extractJson(G)}catch{O={mainDescription:G.replace(/```[a-z]*\n?/gi,"").trim(),visualDetails:""}}if(O&&typeof O=="object"){const P=O.mainDescription||O.prompt||O.generatedPrompt||O.description||O.summary||O.subjectDescription||O.subject||O.visualDetails||O.details||O.analysis;if(P)return O.mainDescription||(O.mainDescription=String(P).trim()),O.mainDescription=na(O.mainDescription),O.visualDetails&&(O.visualDetails=na(O.visualDetails)),t&&t!=="auto"&&t!=="Otomatis"&&(O.aspectRatio=t),this.lastSuccessfulModel=C,C!==s&&z.setModel(C),O}}catch(U){u=U,k.push(`${C}: ${U.message}`),console.warn(`Model ${C} multimodal gagal:`,U.message);break}}throw u||new Error(`Gagal menganalisis gambar dengan Gemini API (${k.join(" | ")}).`)}generateDynamicImageAnalysis(a,e,n="",r="en",s=null,i="auto"){const t=s||(a==null?void 0:a.visualTelemetry)||za(null,{filename:a==null?void 0:a.name,width:a==null?void 0:a.width,height:a==null?void 0:a.height,targetAspectRatio:i});return fe(t,{preferredLang:"en",referencePrompt:n,filename:a==null?void 0:a.name,targetAspectRatio:i})}async analyzeShorthandImprove(a,e=null,n={}){var o,d,p,h,c;const r=!!(n.isColourGrading||n.mode==="COLOUR_GRADING"),s=r?"COLOUR_GRADING":n.mode||"SHORTHAND_IMPROVE",i=await this.analyzePrompt(a,e),t={conflictCount:((o=i.conflicts)==null?void 0:o.length)||0,redundancyCount:(((d=i.recommendations)==null?void 0:d.length)||0)-(((p=i.primaryShorthands)==null?void 0:p.length)||0),isOptimized:(((h=i.conflicts)==null?void 0:h.length)||0)===0,improvementAdvice:((c=i.conflicts)==null?void 0:c.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":r?"Shorthand colour grading telah dianalisis dan diselaraskan secara semantik tanpa konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...i,mode:s,isColourGrading:r,isImageRepair:!1,diagnostics:t}}async analyzeImageRepair({imageFile:a=null,imageBase64:e=null,mimeType:n="image/jpeg",notesPrompt:r="",preferredLang:s="id",isColourGrading:i=!1,mode:t="SHORTHAND_IMPROVE",colourGradingConfig:o=null,telemetry:d=null}){const p=!!(i||t==="COLOUR_GRADING"),h=p?"COLOUR_GRADING":"SHORTHAND_IMPROVE",c=z.getApiKey().trim(),f=z.getModel()||"gemini-2.0-flash",g=p?o||Ca:null,m=p?we(d||{},g):null;let u=null,k="LOCAL_ENGINE",b=!1,R="";if(c&&e)try{const O=await this.executeMultimodalImageRepairAnalysis(e,n,r,c,f,s,p,g);if(O&&(O.optimizationAreas||O.visualConditionSummary)){u=O,k="GEMINI_AI",b=!0,this.status=ra.CONNECTED,this.lastError=null;const P=z.getModel()||f;R=p?`🌐 Analisa Colour Grading AI AKTIF (${P}) — Diagnosis tone & warna komprehensif dari gambar asli.`:`🌐 Analisa Perbaikan AI AKTIF (${P}) — Diagnosis visual komprehensif dari gambar asli.`}}catch(O){console.warn("Gemini multimodal image repair analysis failed, falling back to heuristic diagnosis:",O),this.lastError=O.message}u||(u=this.generateHeuristicImageRepair(a,r,s,p,g),k=c?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",b=!!c,R=b?p?`🌐 Mode Analisa Colour Grading (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:`🌐 Mode Analisa Perbaikan Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:p?"🖥️ Mode Analisa Colour Grading (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis warna AI langsung).":"🖥️ Mode Analisa Perbaikan Gambar (Heuristik Diagnostik Lokal — Sambungkan Gemini API Key di Pengaturan untuk diagnosis visual AI langsung).");const{visualConditionSummary:w=p?"Karakteristik warna gambar telah dianalisis secara visual.":"Gambar telah dianalisis secara visual.",optimizationAreas:A=[],goodAspects:C=[],repairInstructions:I=p?"Terapkan colour grading harmonis dan profesional pada foto.":"Optimalkan kualitas dan karakteristik visual foto."}=u,E={PRIMARY_ISSUE:1,SECONDARY_ISSUE:2,OPTIMIZATION:3,PRESERVATION:4,FINISHING:5},T=[];for(const O of A){const P=Array.isArray(O.recommendedCodes)?O.recommendedCodes:[];let N=null;for(const W of P){const oa=W.startsWith("/")?W:`/${W}`,V=this.catalog.find(B=>B.code.toLowerCase()===oa.toLowerCase());if(V){N=V;break}}if(!N){const W=`${O.aspect||""} ${O.problem||""} ${O.suggestedAction||""}`.toLowerCase();for(const oa of this.catalog)if((oa.semanticTriggers||[]).map(B=>B.toLowerCase()).some(B=>W.includes(B))||W.includes(oa.name.toLowerCase())){N=oa;break}}const Y=N?N.code:P[0]?P[0].startsWith("/")?P[0]:`/${P[0]}`:null;Y&&T.push({code:Y,name:(N==null?void 0:N.name)||Y.replace("/","").toUpperCase(),category:(N==null?void 0:N.category)||(p?"COLOR_GRADING":"IMAGE_QUALITY"),functionGroup:(N==null?void 0:N.functionGroup)||`GROUP_${Y.replace(/[^a-zA-Z0-9]/g,"_").toUpperCase()}`,description:(N==null?void 0:N.description)||O.suggestedAction||(p?"Penyesuaian colour grading":"Optimasi visual gambar"),issuePriority:O.priority||"OPTIMIZATION",priorityWeight:E[O.priority]||3,aspect:O.aspect||(p?"Aspek Tone & Warna":"Aspek Visual"),problem:O.problem||"",reason:O.reason||`Diperlukan untuk ${O.suggestedAction||"mengoptimalkan aspek ini"}.`,priority:"WAJIB",isPrimary:!0,checked:!0,source:"DIAGNOSTIC_REPAIR"})}const U=new Set,v=[];for(const O of T){const P=O.functionGroup;U.has(P)||(U.add(P),v.push(O))}v.sort((O,P)=>{const N=(O.priorityWeight||3)-(P.priorityWeight||3);return N!==0?N:O.code.localeCompare(P.code)});const D=v.map(O=>O.code);let H="",G="";if(p){const O=Xa(g,m);G=O,H=D.length>0?`${O}

${D.join(" ")}`.trim():O.trim()}else{const O=Qa(I);G=O,H=D.length>0?`${O} ${D.join(" ")}`.trim():O}return{mode:h,isColourGrading:p,isImageRepair:!0,source:k,isOnlineActive:b,engineNotice:R,visualConditionSummary:w,optimizationAreas:A,goodAspects:C,repairInstructions:I,englishBasePrompt:G,colourGradingConfig:g,adaptiveAdjustments:m,telemetry:p?d:null,diagnosedShorthands:v,installedShorthands:D,optimalPrompt:H,primaryShorthands:v,relatedShorthands:[],recommendations:v,conflicts:[],exclusions:[],editAreas:A.map(O=>({entity:O.aspect||(p?"AREA_COLOUR_GRADING":"AREA_OPTIMASI"),description:O.problem||O.suggestedAction||""})),lockedAreas:C.map(O=>({entity:"ASPEK_SUDAH_BAIK",description:O})),unchangedAreas:C,intent:{primaryAction:p?"DIAGNOSIS_COLOUR_GRADING":"DIAGNOSIS_PERBAIKAN_GAMBAR",primaryTarget:p?"Tone & Palet Warna":"Kondisi Visual Foto",summary:w,priority:"HIGH",category:p?"COLOR_GRADING":"IMAGE_QUALITY"},diagnostics:{issueCount:A.length,goodCount:C.length,isOptimized:!1,improvementAdvice:p?`Ditemukan ${A.length} area warna & tone yang disesuaikan. Menampilkan ${v.length} shorthand rekomendasi tanpa batasan.`:`Ditemukan ${A.length} area visual yang membutuhkan perbaikan. Menampilkan ${v.length} shorthand rekomendasi tanpa batasan.`},imageInfo:{name:(a==null?void 0:a.name)||(p?"colour-grading-source.jpg":"repair-source.jpg"),size:(a==null?void 0:a.size)||0,type:n},timestamp:new Date().toISOString()}}async executeMultimodalImageRepairAnalysis(a,e,n,r,s,i="id",t=!1,o=null){var k,b,R,w,A,C,I,E;const p=[(s||"gemini-2.0-flash").trim().replace(/^models\//,""),"gemini-2.0-flash","gemini-3.5-flash-lite","gemini-1.5-flash","gemini-2.5-flash","gemini-1.5-flash-8b"].filter((T,U,v)=>T&&v.indexOf(T)===U&&!T.includes("1.5-pro")&&!T.includes("2.5-pro")&&(T==="gemini-3.5-flash-lite"||!T.includes("3.5")&&!T.includes("3.8")));p.length===0&&p.push("gemini-2.0-flash","gemini-1.5-flash");const h=(a||"").replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,"").replace(/\s+/g,"").trim();if(!h||h.length<50)throw new Error("Data gambar (base64) tidak valid atau kosong.");let c=(e||"image/jpeg").toLowerCase().trim();c.includes("png")?c="image/png":c.includes("webp")?c="image/webp":c.includes("heic")?c="image/heic":c.includes("heif")?c="image/heif":c="image/jpeg";const f=t?`Anda adalah Ahli Colour Grading & Visual Colorist profesional.
Tugas Anda: Menganalisis karakter warna, tonal curve, temperatur, saturasi, kontras warna, dan color harmony dari gambar yang diunggah secara menyeluruh dan obyektif sebagai SOURCE OF TRUTH.
Fokus utama: Mendiagnosis karakteristik warna gambar dan menentukan SELURUH ASPEK penyesuaian colour grading yang dibutuhkan untuk menciptakan palet warna sinematik, harmonis, atau tone estetis yang diinginkan.
${o?`
TARGET ARAH VISUAL & STYLE:
- Mode: ${o.mode||"AUTO"}
- Target Style: ${o.selectedStyle||"Natural Vibrant"}
- Intensity: ${o.intensity??50}%
- Highlight Protection: ${((k=o.protections)==null?void 0:k.highlightProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Shadow Protection: ${((b=o.protections)==null?void 0:b.shadowProtection)!==!1?"AKTIF":"NON-AKTIF"}
- Skin Tone Protection: ${((R=o.protections)==null?void 0:R.skinToneProtection)!==!1?"AKTIF (Prioritas Utama: pertahankan keaslian warna kulit alami manusia)":"NON-AKTIF"}
- Oversaturation Protection: ${((w=o.protections)==null?void 0:w.oversaturationProtection)!==!1?"AKTIF":"NON-AKTIF"}
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
7. Gunakan bahasa: ${i==="en"?"English":"Bahasa Indonesia"}.

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
7. Gunakan bahasa: ${i==="en"?"English":"Bahasa Indonesia"}. Catatan Khusus: Bidang "repairInstructions" WAJIB dalam Bahasa Inggris natural untuk generative visual AI.

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
}`,g=t?n&&n.trim()?`Analisis karakteristik warna dan tone gambar ini untuk colour grading. Catatan/preferensi warna pengguna: "${n.trim()}".`:"Analisis karakteristik warna, kurva tonal, kontras, dan saturasi gambar ini secara menyeluruh untuk rekomendasi colour grading.":n&&n.trim()?`Analisis kondisi visual gambar ini untuk perbaikan. Catatan/perhatian khusus pengguna: "${n.trim()}".`:"Analisis kondisi visual gambar ini secara menyeluruh dan tentukan seluruh aspek yang membutuhkan perbaikan atau optimasi.";let m=null;const u=[];for(const T of p){const U=`https://generativelanguage.googleapis.com/v1beta/models/${T}:generateContent?key=${encodeURIComponent(r)}`,v=[{temperature:.1,responseMimeType:"application/json"},{temperature:.1}];for(const D of v)try{const H={contents:[{role:"user",parts:[{text:`${f}

Instruksi: ${g}`},{inlineData:{mimeType:c,data:h}}]}],generationConfig:D},G=await fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});if(!G.ok){const W=await G.text();if(G.status===400&&D.responseMimeType)continue;throw new Error(`HTTP ${G.status}: ${W}`)}const P=((I=(C=(A=(await G.json()).candidates)==null?void 0:A[0])==null?void 0:C.content)==null?void 0:I.parts)||[];let N="";for(const W of P)W.text&&!W.thought&&(N+=W.text);if(!N&&((E=P[0])!=null&&E.text)&&(N=P[0].text),!N)throw new Error("Respon Gemini kosong.");let Y=null;try{Y=this.extractJson(N)}catch{Y={visualConditionSummary:N.replace(/```[a-z]*\n?/gi,"").trim(),optimizationAreas:[]}}if(Y&&typeof Y=="object"){const W=Y.visualConditionSummary||Y.summary||Y.diagnosis||Y.description;if(W||Array.isArray(Y.optimizationAreas)&&Y.optimizationAreas.length>0)return!Y.visualConditionSummary&&W&&(Y.visualConditionSummary=String(W).trim()),this.lastSuccessfulModel=T,T!==s&&z.setModel(T),Y}}catch(H){m=H,u.push(`${T}: ${H.message}`),console.warn(`Model ${T} multimodal repair gagal:`,H.message);break}}throw m||new Error(`Gagal menganalisis perbaikan gambar dengan Gemini API (${u.join(" | ")}).`)}generateHeuristicImageRepair(a,e="",n="id",r=!1,s=null){const i=(e||"").toLowerCase(),t=!!(e&&e.trim()),o=[],d=[];if(r){const f=(k,b)=>{t?k.some(R=>i.includes(R))&&o.push(b):o.push(b)};f(["suhu","temperature","warm","cool","hangat","dingin","kuning","biru","balance","cast","white balance"],{aspect:"Color Balance & Temperature",problem:"Suhu warna dan white balance memerlukan kalibrasi akurat agar nuansa visual harmonis.",priority:"PRIMARY_ISSUE",suggestedAction:"Penyelarasan suhu warna dan kalibrasi white balance netral",recommendedCodes:["/colorbalance"],reason:"Menyeimbangkan pergeseran suhu warna agar palet warna terlihat sinematik dan natural."}),f(["kontras","contrast","gamma","curve","kurva","keras","datar","flat"],{aspect:"Kurva Kontras & Tonal Gamma",problem:"Gradasi kontras antara highlight dan shadow memerlukan kurva transisi yang lebih halus dan sinematik.",priority:"PRIMARY_ISSUE",suggestedAction:"Penerapan kurva kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menciptakan kedalaman visual dengan rentang kontras organik khas film modern."}),f(["shadow","bayangan","gelap","hitam","lifted","pekat","black"],{aspect:"Shadow Toning & Black Point",problem:"Area bayangan gelap memerlukan pemulihan gradasi tonal agar tidak kehilangan nuansa warna.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan dan kontrol black point",recommendedCodes:["/shadowrecovery"],reason:"Mempertahankan kedalaman bayangan dengan detail tonal yang tetap terbaca bersih."}),f(["highlight","terang","silau","roll-off","roll off","putih","glow"],{aspect:"Highlight Roll-off & Tonal Rendah",problem:"Transisi area terang ke highlight paling tinggi memerlukan penataan yang lembut tanpa clipping keras.",priority:"SECONDARY_ISSUE",suggestedAction:"Pengendalian intensitas dan kelembutan highlight",recommendedCodes:["/highlightcontrol"],reason:"Menghindari highlight yang terlalu tajam/silau sehingga transisi pencahayaan tampak organik."}),f(["saturasi","saturation","vibrance","tone","warna","pucat","kusam","pekat","muted"],{aspect:"Rentang Tonal & Saturasi Warna",problem:"Intensitas warna dan kehangatan tonal memerlukan harmonisasi agar tidak over-saturated atau kusam.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan saturasi warna yang pas, estetis, dan nyaman dipandang."}),f(["dinamis","rentang","dynamic","range","hdr"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan dan kilau terang dapat diperluas untuk persepsi kedalaman maksimal.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Meningkatkan rentang tonal agar gradasi warna pada setiap tingkatan eksposur terpelihara utuh."}),f(["tekstur","kulit","skin","texture","asli","material"],{aspect:"Preservasi Tekstur & Warna Kulit Alami",problem:"Tekstur organik kulit dan material rentan terdistorsi oleh proses pewarnaan berlebih.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material dan keaslian warna kulit",recommendedCodes:["/texturepreservation"],reason:"Memastikan colour grading tidak mengubah pori-pori kulit, serat kain, atau tekstur alami objek."}),f(["alami","natural","realis","raw","film","sinematik","grade"],{aspect:"Karakter Pemrosesan Alami & Film Grade",problem:"Potensi terjadinya artefak digital berlebih selama proses penyesuaian grading warna.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Menjaga hasil akhir colour grading tetap memiliki nuansa fotografi autentik dan bernilai seni tinggi."}),d.length===0&&(d.push("Distribusi pencahayaan dasar dan kontras subjek utama sudah terdistribusi dengan baik."),d.push("Kerapatan detail dan tekstur dasar gambar sudah terjaga dengan jelas."),d.push("Tidak ditemukan pergeseran warna ekstrim (chromatic aberration) yang merusak kualitas gambar."));const g=(s==null?void 0:s.selectedStyle)||"Natural Vibrant",m=`Hasil diagnosis colour grading menunjukkan gambar memiliki fondasi visual yang kuat. Ditemukan ${o.length} area penyesuaian tonal curve, suhu warna, dan palet warna untuk mencapai grade estetis yang harmonis dan optimal (Arah visual: ${g}).`,u=Xa(s);return{visualConditionSummary:m,optimizationAreas:o,goodAspects:d,repairInstructions:u}}const p=(f,g)=>{t?f.some(m=>i.includes(m))&&o.push(g):o.push(g)};p(["shadow","gelap","bayangan","underexposed","pekat"],{aspect:"Shadow / Bayangan",problem:"Area bayangan gelap kehilangan informasi detail tonal dan tampak pekat.",priority:"PRIMARY_ISSUE",suggestedAction:"Pemulihan detail bayangan tanpa mencerahkan berlebih",recommendedCodes:["/shadowrecovery"],reason:"Diperlukan untuk mengangkat detail pada area bayangan gelap tanpa merusak kontras alami."}),p(["highlight","terang","silau","blown","overexposed","putih"],{aspect:"Highlight / Pencahayaan Terang",problem:"Area highlight pada permukaan terang tampak agak keras dan berisiko kehilangan tekstur.",priority:"PRIMARY_ISSUE",suggestedAction:"Pengendalian intensitas highlight",recommendedCodes:["/highlightcontrol"],reason:"Mengontrol intensitas highlight agar detail permukaan terang tetap terjaga halus."}),i.includes("tajam")||i.includes("buram")||i.includes("blur")||i.includes("fokus")||i.includes("kabur")?o.push({aspect:"Ketajaman & Fokus",problem:"Ketajaman gambar pada kontur dan tepi objek kurang terdefinisi dengan optimal.",priority:"PRIMARY_ISSUE",suggestedAction:"Peningkatan ketajaman tepi dan kontur",recommendedCodes:["/sharpen"],reason:"Meningkatkan ketajaman mikro pada tepi subjek agar gambar tampak lebih jernih."}):t||d.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),i.includes("noise")||i.includes("bintik")||i.includes("grain")?o.push({aspect:"Noise & Grain",problem:"Terdapat gangguan bintik noise digital pada area bergradasi halus.",priority:"PRIMARY_ISSUE",suggestedAction:"Pembersihan noise digital secara selektif",recommendedCodes:["/denoise"],reason:"Membersihkan bintik noise digital tanpa mengorbankan ketajaman detail esensial."}):t||d.push("Tingkat noise digital berada dalam batas yang sangat rendah dan bersih."),i.includes("perspektif")||i.includes("miring")||i.includes("tilt")?o.push({aspect:"Perspektif Garis & Sudut",problem:"Garis bidang foto tampak miring atau mengalami distorsi perspektif.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi pelurusan perspektif",recommendedCodes:["/perspectivecorrection"],reason:"Meluruskan geometri perspektif agar bidang tegak dan horizon sejajar alami."}):i.includes("distorsi")||i.includes("lensa")||i.includes("barrel")?o.push({aspect:"Distorsi Lensa",problem:"Terdapat distorsi lengkungan lensa pada area pinggir bidang foto.",priority:"PRIMARY_ISSUE",suggestedAction:"Koreksi distorsi lensa",recommendedCodes:["/lenscorrection"],reason:"Mengoreksi kelengkungan optik lensa agar proporsi subjek kembali natural."}):t||d.push("Geometri dan perspektif lensa sudah lurus dan bebas distorsi lengkung."),p(["kontras","contrast","keras","datar"],{aspect:"Kontras Visual",problem:"Rentang kontras antara area gelap dan terang membutuhkan penyesuaian gradasi yang lebih halus.",priority:"SECONDARY_ISSUE",suggestedAction:"Penerapan kontras natural seimbang",recommendedCodes:["/naturalcontrast"],reason:"Menyeimbangkan rasio kontras agar transisi antara gelap dan terang tampak organik."}),p(["balance","kuning","biru","cast","suhu","warna"],{aspect:"Keseimbangan Warna & White Balance",problem:"Keseimbangan temperatur warna memerlukan kalibrasi netral agar warna asli tidak bergeser.",priority:"SECONDARY_ISSUE",suggestedAction:"Penyelarasan white balance dan netralisasi color cast",recommendedCodes:["/colorbalance"],reason:"Mengembalikan akurasi warna alami dengan menetralkan pergeseran suhu warna."}),(i.includes("pucat")||i.includes("kusam")||i.includes("tone")||!t&&!o.some(f=>f.recommendedCodes.includes("/naturaltone")))&&(t||o.length<8)&&o.push({aspect:"Rentang Tonal Warna",problem:"Karakter tonal warna memerlukan pengayaan nuansa agar tampak hidup dan natural.",priority:"SECONDARY_ISSUE",suggestedAction:"Harmonisasi tonal warna natural",recommendedCodes:["/naturaltone"],reason:"Menghadirkan karakter warna yang kaya dan hangat tanpa saturasi berlebihan."}),p(["dinamis","rentang","dynamic","range"],{aspect:"Rentang Dinamis (Dynamic Range)",problem:"Rentang dinamis antara bayangan terdalam dan kilauan paling terang dapat dioptimalkan.",priority:"OPTIMIZATION",suggestedAction:"Perluasan rentang dinamis visual",recommendedCodes:["/dynamicrange"],reason:"Memperluas jangkauan tonal agar adegan mempertahankan detail dari shadow hingga highlight."}),(i.includes("kualitas")||i.includes("detail tinggi")||i.includes("resolusi")||i.includes("definisi"))&&o.push({aspect:"Kerapatan Detail Visual",problem:"Tingkat kejelasan detail mikro dapat ditingkatkan untuk ketajaman visual maksimal.",priority:"OPTIMIZATION",suggestedAction:"Peningkatan detail mikro berkualitas tinggi",recommendedCodes:["/highdetail"],reason:"Mengoptimalkan kerapatan mikro-detail pada seluruh bidang gambar."}),p(["detail","pertahankan","preservasi","halus"],{aspect:"Preservasi Detail Halus",problem:"Detail esensial pada subjek berisiko memudar selama proses perbaikan visual.",priority:"PRESERVATION",suggestedAction:"Penguncian dan perlindungan detail halus",recommendedCodes:["/detailpreservation"],reason:"Menjaga detail-detail mikro penting agar tidak terhapus atau blur selama optimasi."}),p(["tekstur","texture","kulit","kain","permukaan"],{aspect:"Preservasi Tekstur Alami",problem:"Tekstur permukaan material asli rentan tampak licin seperti plastik jika tidak diproteksi.",priority:"PRESERVATION",suggestedAction:"Perlindungan tekstur asli material",recommendedCodes:["/texturepreservation"],reason:"Mempertahankan tekstur asli kulit, kain, atau permukaan material agar tetap autentik."}),p(["alami","natural","realis","asli","overprocess"],{aspect:"Karakter Pemrosesan Alami",problem:"Potensi pemrosesan berlebih yang dapat mengurangi karakter fotografi asli.",priority:"FINISHING",suggestedAction:"Penerapan pemrosesan visual alami tanpa artefak sintetis",recommendedCodes:["/naturalprocessing"],reason:"Memastikan hasil perbaikan mempertahankan nuansa foto asli tanpa artefak over-processing."}),d.length===0&&(d.push("Ketajaman dan fokus subjek utama sudah terdefinisi dengan jelas."),d.push("Komposisi dan framing foto sudah proporsional."),d.push("Tidak ditemukan distorsi optik lensa yang mengganggu."));const h=`Hasil diagnosis visual menunjukkan gambar memiliki struktur fotografi yang solid. Ditemukan ${o.length} aspek yang memerlukan perbaikan terfokus untuk mencapai kualitas visual optimal.`,c=Qa(e);return{visualConditionSummary:h,optimizationAreas:o,goodAspects:d,repairInstructions:c}}}function re(l){return!l||typeof l!="string"?0:l.trim().split(/\s+/).filter(Boolean).length}function Ue(l){if(!l||typeof l!="string")return 0;const a=l.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function De(l,a=[]){if(!l||a.length===0)return 0;const e=re(l);if(e===0)return 0;const n=a.length;return Math.min(100,Math.round(n/e*100))}function He(l){return!l||typeof l!="string"?"":l.trim()}function Be(l,a,e,n){const{status:r}=a;let s="status-unconfigured",i="Gemini: Belum diuji";return r===ra.CONNECTED?(s="status-connected",i="Gemini: Tersambung"):r===ra.FAILED&&(s="status-failed",i="Gemini: Gagal"),{html:`
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
          <button type="button" class="nav-item ${l==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${l==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${l==="dictionary"?"active":""}" data-tab="dictionary" role="tab" aria-selected="${l==="dictionary"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            Kamus Shorthand
          </button>
          <button type="button" class="nav-item ${l==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${l==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${l==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${l==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${l==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${l==="settings"}">
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
            <span>${i}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(o){o.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const h=p.getAttribute("data-tab");e&&e(h)})});const d=o.querySelector("#header-status-badge");d&&n&&d.addEventListener("click",()=>n())}}}const ae=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function Ke(l){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${ae.map(n=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${n.id}" title="${n.description}">
      <span style="font-weight: 700; color: #93c5fd;">${n.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(n){n.querySelectorAll(".btn-preset-chip").forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-preset-id"),i=ae.find(t=>t.id===s);i&&l&&l(i.prompt)})})}}}function ze({config:l,uploadedImage:a,onConfigChange:e,onResetGrading:n,batchImages:r=[],activeBatchIndex:s=0,onSelectBatchImage:i}){const t=l||{},o=t.mode||"AUTO",d=t.selectedStyle||"Natural Vibrant",p=typeof t.intensity=="number"?t.intensity:50,h=t.protections||{},c=t.custom||{},f=Da.find(m=>m.name===d)||{category:"Target Visual",categoryIcon:"🎯"};return{html:`
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
              Target: <strong>${d}</strong> (${p}%)
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
            ${r.map((m,u)=>`
              <button 
                type="button" 
                class="batch-thumb-btn ${u===s?"active":""}" 
                data-batch-idx="${u}" 
                style="border: 2px solid ${u===s?"#ec4899":"rgba(255,255,255,0.1)"}; background: transparent; padding: 2px; border-radius: 4px; cursor: pointer;"
                title="Pilih Foto ${u+1}"
              >
                <img src="${m.previewUrl}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 2px; display: block;" alt="Foto ${u+1}" />
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
          ${Ha.map(m=>`
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
              Total ${Da.length} Curated Styles
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
              data-style-name="${d}"
              tabindex="0"
              style="width: 100%; display: flex; justify-content: space-between; align-items: center; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.35); color: #f8fafc; padding: 0.6rem 0.85rem; border-radius: 6px; font-size: 0.825rem; cursor: pointer; text-align: left; transition: all 0.2s ease;"
            >
              <span style="display: flex; align-items: center; gap: 0.45rem;">
                <span style="font-size: 0.95rem;">${f.categoryIcon||"🎯"}</span>
                <strong style="color: #fce7f3; font-size: 0.825rem;">${d}</strong>
                <span style="font-size: 0.72rem; color: #94a3b8; margin-left: 0.25rem;">(${f.category||"Target Visual"})</span>
              </span>
              <span id="cg-dropdown-arrow" style="font-size: 0.75rem; color: #f472b6; transition: transform 0.2s ease;">▼</span>
            </button>

            <!-- Hidden Standard Select Element (Dukungan Kompatibilitas Form & Test) -->
            <select id="cg-style-select" style="display: none;" aria-hidden="true" tabindex="-1">
              ${Wa.map(m=>`
                <optgroup label="${m.icon} ${m.category}">
                  ${m.styles.map(u=>`
                    <option value="${u.name}" ${d===u.name?"selected":""}>
                      ${u.name}
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
                ${Wa.map(m=>`
                  <div class="cg-category-group" data-cat-name="${m.category}" style="padding: 0.25rem 0;">
                    <div style="padding: 0.25rem 0.75rem; font-size: 0.68rem; font-weight: 700; color: #f472b6; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 0.35rem; background: rgba(236, 72, 153, 0.06);">
                      <span>${m.icon}</span>
                      <span>${m.category}</span>
                    </div>
                    ${m.styles.map(u=>{const k=d===u.name;return`
                        <div 
                          class="cg-style-item ${k?"selected":""}" 
                          role="option" 
                          aria-selected="${k}" 
                          data-style-name="${u.name}" 
                          tabindex="0" 
                          style="padding: 0.45rem 0.85rem; font-size: 0.8rem; color: ${k?"#f472b6":"#e2e8f0"}; background: ${k?"rgba(236, 72, 153, 0.15)":"transparent"}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: all 0.15s ease;"
                        >
                          <span>${u.name}</span>
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
                <span id="cg-val-warmth" style="color: #f472b6; font-weight: 600;">${c.warmth||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-warmth" min="-100" max="100" value="${c.warmth||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Tint -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Tint (Hijau / Magenta)</span>
                <span id="cg-val-tint" style="color: #f472b6; font-weight: 600;">${c.tint||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-tint" min="-100" max="100" value="${c.tint||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Contrast -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Contrast (Kontras)</span>
                <span id="cg-val-contrast" style="color: #f472b6; font-weight: 600;">${c.contrast||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-contrast" min="-100" max="100" value="${c.contrast||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Highlights -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Highlights</span>
                <span id="cg-val-highlights" style="color: #f472b6; font-weight: 600;">${c.highlights||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-highlights" min="-100" max="100" value="${c.highlights||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Shadows -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Shadows (Bayangan)</span>
                <span id="cg-val-shadows" style="color: #f472b6; font-weight: 600;">${c.shadows||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-shadows" min="-100" max="100" value="${c.shadows||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Vibrance -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Vibrance (Warna Cerdas)</span>
                <span id="cg-val-vibrance" style="color: #f472b6; font-weight: 600;">${c.vibrance||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-vibrance" min="-100" max="100" value="${c.vibrance||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Saturation -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Saturation (Saturasi)</span>
                <span id="cg-val-saturation" style="color: #f472b6; font-weight: 600;">${c.saturation||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-saturation" min="-100" max="100" value="${c.saturation||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>

            <!-- Clarity -->
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 0.2rem;">
                <span style="color: #cbd5e1;">Clarity (Mikro-Kontras)</span>
                <span id="cg-val-clarity" style="color: #f472b6; font-weight: 600;">${c.clarity||0}</span>
              </div>
              <input type="range" class="cg-slider" id="cg-custom-clarity" min="-100" max="100" value="${c.clarity||0}" style="width: 100%; accent-color: #ec4899;" />
            </div>
          </div>

          <!-- Split Toning (Shadow Tone & Highlight Tone) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            <div>
              <label for="cg-custom-shadow-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Shadow Tone (Rona Bayangan):
              </label>
              <select id="cg-custom-shadow-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${Re.map(m=>`
                  <option value="${m.value}" ${c.shadowTone===m.value?"selected":""}>${m.label}</option>
                `).join("")}
              </select>
            </div>
            <div>
              <label for="cg-custom-highlight-tone" style="font-size: 0.75rem; color: #cbd5e1; display: block; margin-bottom: 0.25rem;">
                Highlight Tone (Rona Highlight):
              </label>
              <select id="cg-custom-highlight-tone" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); color: #f8fafc; padding: 0.45rem 0.65rem; border-radius: 4px; font-size: 0.8rem;">
                ${Ie.map(m=>`
                  <option value="${m.value}" ${c.highlightTone===m.value?"selected":""}>${m.label}</option>
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
          ${Se.map(m=>`
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
  `,bindEvents(m){const u=m.querySelector("#colour-grading-panel");if(!u)return;const k=u.querySelector("#cg-style-tooltip"),b=u.querySelector("#cg-tooltip-title"),R=u.querySelector("#cg-tooltip-cat"),w=u.querySelector("#cg-tooltip-desc"),A=(S,L)=>{if(!k||!S)return;const j=L||S.getAttribute("data-style-name");if(!j)return;const K=Da.find(ga=>ga.name.toLowerCase()===j.toLowerCase())||{name:j,category:"Target Visual",categoryIcon:"🎯",description:"Arah visual colour grading adaptif."};b&&(b.textContent=K.name),R&&(R.textContent=`${K.categoryIcon||"🎯"} ${K.category||""}`),w&&(w.textContent=K.description),k.style.display="block",k.style.opacity="1",k.setAttribute("aria-hidden","false");const x=S.getBoundingClientRect(),$=k.getBoundingClientRect();let Q=x.top+x.height/2-$.height/2,sa=x.right+12;sa+$.width>window.innerWidth-12&&(sa=x.left-$.width-12),sa<12&&(sa=Math.max(12,Math.min(window.innerWidth-$.width-12,x.left)),Q=x.bottom+8),Q<12&&(Q=12),Q+$.height>window.innerHeight-12&&(Q=window.innerHeight-$.height-12),k.style.top=`${Math.round(Q)}px`,k.style.left=`${Math.round(sa)}px`},C=()=>{k&&(k.style.opacity="0",k.style.display="none",k.setAttribute("aria-hidden","true"))},I=(S,L)=>{S&&(S.addEventListener("mouseenter",()=>A(S,L)),S.addEventListener("mouseleave",C),S.addEventListener("focus",()=>A(S,L)),S.addEventListener("blur",C))},E=u.querySelector("#cg-style-dropdown-btn"),T=u.querySelector("#cg-style-menu"),U=u.querySelector("#cg-dropdown-arrow"),v=u.querySelector("#cg-style-search"),D=u.querySelector("#cg-style-select");let H=!1;const G=()=>{T&&(H=!0,T.style.display="block",E&&E.setAttribute("aria-expanded","true"),U&&(U.style.transform="rotate(180deg)"),v&&(v.value="",N(""),setTimeout(()=>v.focus(),50)))},O=()=>{T&&(H=!1,T.style.display="none",E&&E.setAttribute("aria-expanded","false"),U&&(U.style.transform="rotate(0deg)"),C())},P=()=>{H?O():G()};function N(S){const L=(S||"").toLowerCase().trim();u.querySelectorAll(".cg-category-group").forEach(j=>{let K=!1;j.querySelectorAll(".cg-style-item").forEach(x=>{const $=(x.getAttribute("data-style-name")||"").toLowerCase();!L||$.includes(L)?(x.style.display="flex",K=!0):x.style.display="none"}),j.style.display=K?"block":"none"})}E&&(E.addEventListener("click",S=>{S.stopPropagation(),P()}),I(E,d),E.addEventListener("keydown",S=>{S.key==="ArrowDown"||S.key==="Enter"||S.key===" "?(S.preventDefault(),G()):S.key==="Escape"&&O()})),v&&(v.addEventListener("input",S=>{N(S.target.value)}),v.addEventListener("keydown",S=>{if(S.key==="Escape")O(),E&&E.focus();else if(S.key==="ArrowDown"){S.preventDefault();const L=u.querySelector('.cg-style-item:not([style*="display: none"])');L&&L.focus()}}));const Y=S=>{var L;H&&!((L=u.querySelector("#cg-custom-dropdown"))!=null&&L.contains(S.target))&&O()};document.addEventListener("click",Y),u.querySelectorAll(".cg-style-item").forEach(S=>{const L=S.getAttribute("data-style-name");I(S,L),S.addEventListener("click",()=>{e&&L&&e({...t,selectedStyle:L}),D&&(D.value=L),O(),E&&E.focus()}),S.addEventListener("keydown",j=>{if(j.key==="Enter"||j.key===" ")j.preventDefault(),S.click();else if(j.key==="Escape")j.preventDefault(),O(),E&&E.focus();else if(j.key==="ArrowDown"){j.preventDefault();const K=Array.from(u.querySelectorAll('.cg-style-item:not([style*="display: none"])')),x=K.indexOf(S);x>=0&&x<K.length-1&&K[x+1].focus()}else if(j.key==="ArrowUp"){j.preventDefault();const K=Array.from(u.querySelectorAll('.cg-style-item:not([style*="display: none"])')),x=K.indexOf(S);x>0?K[x-1].focus():v&&v.focus()}})}),D&&D.addEventListener("change",S=>{e&&e({...t,selectedStyle:S.target.value})});const W=u.querySelector(".cg-custom-style-info");W&&I(W,"Custom Style");const oa=u.querySelector('.cg-mode-btn[data-cg-mode="CUSTOM_STYLE"]');oa&&I(oa,"Custom Style"),u.querySelectorAll(".cg-mode-btn").forEach(S=>{S.addEventListener("click",()=>{const L=S.getAttribute("data-cg-mode");e&&L!==o&&e({...t,mode:L})})});const V=u.querySelector("#cg-intensity-range");V&&V.addEventListener("input",S=>{const L=Number(S.target.value),j=u.querySelector("#cg-intensity-badge");j&&(j.textContent=`${L}%`),e&&e({...t,intensity:L})}),u.querySelectorAll("[data-cg-intensity]").forEach(S=>{S.addEventListener("click",()=>{const L=Number(S.getAttribute("data-cg-intensity"));e&&e({...t,intensity:L})})});const B=u.querySelector("#btn-reset-colour-grading");B&&B.addEventListener("click",()=>{n?n():e&&e({...t,mode:"AUTO",selectedStyle:"Natural Vibrant",intensity:50,custom:{warmth:0,tint:0,contrast:0,highlights:0,shadows:0,saturation:0,vibrance:0,clarity:0,colorIntensity:0,shadowTone:"Neutral",highlightTone:"Neutral"}})}),["warmth","tint","contrast","highlights","shadows","saturation","vibrance","clarity"].forEach(S=>{const L=u.querySelector(`#cg-custom-${S}`);L&&L.addEventListener("input",j=>{const K=Number(j.target.value),x=u.querySelector(`#cg-val-${S}`);x&&(x.textContent=K),e&&e({...t,custom:{...t.custom,[S]:K}})})});const aa=u.querySelector("#cg-custom-shadow-tone");aa&&aa.addEventListener("change",S=>{e&&e({...t,custom:{...t.custom,shadowTone:S.target.value}})});const _=u.querySelector("#cg-custom-highlight-tone");_&&_.addEventListener("change",S=>{e&&e({...t,custom:{...t.custom,highlightTone:S.target.value}})}),[{id:"#cg-prot-skin",prop:"skinToneProtection"},{id:"#cg-prot-hl",prop:"highlightProtection"},{id:"#cg-prot-sh",prop:"shadowProtection"},{id:"#cg-prot-oversat",prop:"oversaturationProtection"},{id:"#cg-prot-clip",prop:"clippingProtection"},{id:"#cg-prot-natcolor",prop:"naturalColorProtection"}].forEach(({id:S,prop:L})=>{const j=u.querySelector(S);j&&j.addEventListener("change",K=>{e&&e({...t,protections:{...t.protections,[L]:K.target.checked}})})}),u.querySelectorAll("[data-batch-idx]").forEach(S=>{S.addEventListener("click",()=>{const L=Number(S.getAttribute("data-batch-idx"));i&&i(L)})})}}}function Ve({currentValue:l="",onAnalyze:a,onReset:e,onClear:n,onSelectPreset:r,isAnalyzing:s=!1,isOnlineActive:i=!1,activeMode:t="ANALISA_PROMPT",onModeChange:o,uploadedImage:d=null,onImageSelected:p,onImageRemoved:h,selectedAspectRatio:c="auto",onAspectRatioChange:f,twoWorldsConfig:g=null,onTwoWorldsConfigChange:m,colourGradingConfig:u=null,onColourGradingConfigChange:k,onResetGrading:b,batchImages:R=[],activeBatchIndex:w=0,onSelectBatchImage:A}){var U;const C=Ke(r),I=t==="COLOUR_GRADING"?ze({config:u||Ca,uploadedImage:d,onConfigChange:k,onResetGrading:b,batchImages:R,activeBatchIndex:w,onSelectBatchImage:A}):null,E=d?d.detectedAspectRatio||(d.width&&d.height?Ka(d.width,d.height):"1:1"):null;return{html:`
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

      <!-- IMAGE UPLOAD SECTION (MODE 2, MODE 2 DUNIA, MODE 3 & MODE COLOUR GRADING) -->
      ${t==="IMAGE_TO_PROMPT"||t==="TWO_WORLDS"||t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          <input type="file" id="image-file-input" ${t==="COLOUR_GRADING"?"multiple":""} accept="image/*, .jfif, .jpg, .jpeg, .png, .webp" style="display: none;" />
          ${d?`
            <div class="image-preview-card">
              <img src="${d.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${d.name||"reference-source.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${d.size?(d.size/1024).toFixed(1)+" KB":"Gambar Sumber"} &bull;
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
                  ${c==="auto"||c==="Otomatis"||!c?E?`Otomatis (Asli: ${E})`:"Otomatis (Dimensi Asli)":`Target: ${c}`}
                </span>
              </div>
              <div class="aspect-ratio-hint">
                ${c==="auto"||c==="Otomatis"||!c?d?`Mendeteksi aspek rasio asli gambar (${d.width||"?"}×${d.height||"?"}px → ${E}). Proporsi subjek dipertahankan tanpa distorsi.`:"Mendeteksi rasio aspek otomatis dari dimensi asli gambar yang diunggah.":`Mengarahkan rasio target kanvas ke ${c} tanpa stretching atau perubahan proporsi subjek.`}
              </div>
            </div>
            <div class="aspect-ratio-btn-group" role="radiogroup" aria-label="Pilihan Rasio Aspek">
              ${["Otomatis","1:1","2:3","3:2","3:4","4:3","9:16","16:9"].map(v=>`
                  <button 
                    type="button" 
                    class="aspect-ratio-btn ${v==="Otomatis"&&(c==="auto"||c==="Otomatis"||!c)||c===v?"active":""}" 
                    data-ratio="${v}"
                    id="btn-aspect-${v.replace(":","-")}"
                    title="${v==="Otomatis"?"Deteksi otomatis dari dimensi asli gambar":`Pilih rasio target ${v}`}"
                  >
                    ${v==="Otomatis"?"🔄 Otomatis":v}
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
                ${Ba.map(v=>`
                  <option value="${v.id}">${v.label}</option>
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
                ${Te.map(v=>`
                  <option value="${v}" ${(g==null?void 0:g.gender)===v||!(g!=null&&g.gender)&&v.startsWith("Auto")?"selected":""}>${v}</option>
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
                ${Ee.map(v=>`
                  <option value="${v}" ${(g==null?void 0:g.age)===v||!(g!=null&&g.age)&&v.startsWith("Auto")?"selected":""}>${v}</option>
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
                ${ne.map(v=>`
                  <option value="${v}" ${(g==null?void 0:g.ethnicity)===v||!(g!=null&&g.ethnicity)&&v.startsWith("Auto")?"selected":""}>${v}</option>
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
                ${Va.map(v=>`
                  <option value="${v}" ${(g==null?void 0:g.subjectStyle)===v||!(g!=null&&g.subjectStyle)&&v.startsWith("Auto")?"selected":""}>${v}</option>
                `).join("")}
                ${g!=null&&g.subjectStyle&&!Va.includes(g.subjectStyle)?`
                  <option value="${g.subjectStyle}" selected>${g.subjectStyle}</option>
                `:""}
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
                ${_a.map(v=>`
                  <option value="${v.name}" ${(g==null?void 0:g.environmentStyle)===v.name||!(g!=null&&g.environmentStyle)&&v.name.startsWith("Auto")?"selected":""}>${v.name}</option>
                `).join("")}
                ${g!=null&&g.environmentStyle&&!_a.some(v=>v.name===g.environmentStyle)?`
                  <option value="${g.environmentStyle}" selected>${g.environmentStyle}</option>
                `:""}
              </select>
              <div class="two-worlds-desc-box" id="tw-env-desc">
                ${((U=_a.find(v=>v.name===((g==null?void 0:g.environmentStyle)||"Auto (Smart Detection)")))==null?void 0:U.description)||"Sistem mendeteksi dan menentukan style lingkungan paling harmonis berdasarkan gambar sumber."}
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
          ${d?"Gambar terpasang. Sistem akan mendiagnosis seluruh aspek visual (shadow, highlight, contrast, color balance, detail, tekstur, dll.) dan merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"Unggah gambar di atas untuk diagnosis visual komprehensif, atau masukkan prompt/shorthand di bawah untuk evaluasi konflik direktif dan perbaikan prompt."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: DIAGNOSTIC NOTICE -->
      ${t==="COLOUR_GRADING"?`
        <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #f472b6;">
          <strong>🎨 Mode Analisa Colour Grading:</strong> 
          ${d?"Gambar terpasang. Sistem akan mendiagnosis karakteristik warna (color balance, kurva kontras, shadow toning, highlight roll-off, saturasi, dll.) dan merekomendasikan shorthand colour grading profesional.":"Unggah gambar di atas untuk diagnosis karakter warna, kurva kontras, dan tone komprehensif, atau masukkan catatan preferensi colour grading di bawah."}
        </div>
      `:""}

      <!-- MODE COLOUR GRADING SPECIFIC: ADVANCED PANEL & PREVIEW (V3.6) -->
      ${t==="COLOUR_GRADING"&&I?I.html:""}

      <!-- Preset Test Cases (Only in Mode 1, or Mode 3 / Colour Grading without image) -->
      ${t==="ANALISA_PROMPT"||(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&!d?`
        <div id="presets-container">
          ${C.html}
        </div>
      `:""}

      <!-- Textarea Input (Hanya untuk Mode 1, Mode 3, dan Colour Grading) -->
      ${t!=="IMAGE_TO_PROMPT"&&t!=="TWO_WORLDS"?`
        <div class="form-group" style="margin-bottom: 0.85rem;">
          <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
            ${(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&d?t==="COLOUR_GRADING"?"B. Catatan Colour Grading (Opsional / Preferensi Warna):":"B. Prompt Pengguna (Opsional / Catatan Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
          </label>
          <textarea 
            id="prompt-textarea" 
            class="textarea-prompt font-mono" 
            placeholder="${(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&d?t==="COLOUR_GRADING"?"Ketik preferensi atau catatan colour grading yang diinginkan (opsional, misal: tone sinematik hangat, teal and orange, moody film grain, muted shadows)...":"Ketik catatan aspek spesifik yang ingin diperhatikan/diperbaiki (opsional, misal: fokus pada bayangan dan warna)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
          >${l||""}</textarea>
        </div>
      `:""}

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${t==="TWO_WORLDS"?"💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk sintesis prompt 2 Dunia &amp; rekomendasi shorthand.":t==="IMAGE_TO_PROMPT"?"💡 Gambar dianalisis langsung sebagai SOURCE OF TRUTH untuk menghasilkan deskripsi visual 13 atribut &amp; rekomendasi shorthand.":t==="COLOUR_GRADING"&&d?"💡 Mendiagnosis parameter warna, tone curve, saturasi &amp; merekomendasikan seluruh shorthand colour grading yang relevan tanpa batasan jumlah.":t==="SHORTHAND_IMPROVE"&&d?"💡 Mendiagnosis seluruh parameter visual &amp; merekomendasikan seluruh shorthand perbaikan yang relevan tanpa batasan jumlah.":"💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik."}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${s?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${s?t==="TWO_WORLDS"?"🌐 Menganalisis 2 Dunia...":t==="IMAGE_TO_PROMPT"?"🔍 Menganalisis Gambar...":t==="COLOUR_GRADING"&&d?"🎨 Mendiagnosis Colour Grading...":t==="SHORTHAND_IMPROVE"&&d?"🛠️ Mendiagnosis Gambar...":t==="COLOUR_GRADING"?"🎨 Menganalisis Colour Grading...":i?"Mencari Online...":"Menganalisis...":t==="TWO_WORLDS"?"🌐 Analisa 2 Dunia → Prompt":t==="IMAGE_TO_PROMPT"?"🔍 Analisa Gambar → Prompt":t==="COLOUR_GRADING"&&d?"🎨 Analisa Colour Grading Gambar":t==="COLOUR_GRADING"?"🎨 Analisa Colour Grading":t==="SHORTHAND_IMPROVE"&&d?"🛠️ Analisa Perbaikan Gambar":t==="SHORTHAND_IMPROVE"?"🛠️ Analisa Shorthand &amp; Perbaikan":i?"🌐 Analisis Prompt":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(v){t==="COLOUR_GRADING"&&I&&I.bindEvents(v),(t==="ANALISA_PROMPT"||(t==="SHORTHAND_IMPROVE"||t==="COLOUR_GRADING")&&!d)&&C.bindEvents(v);const D=v.querySelector("#prompt-textarea"),H=v.querySelector("#btn-run-analysis"),G=v.querySelector("#btn-clear-prompt"),O=v.querySelector("#btn-reset-app");v.querySelectorAll(".mode-tab-btn").forEach(B=>{B.addEventListener("click",()=>{const X=B.getAttribute("data-mode");o&&X!==t&&o(X)})});const P=v.querySelector("#image-dropzone"),N=v.querySelector("#image-file-input"),Y=v.querySelector("#btn-change-image"),W=v.querySelector("#btn-remove-image");if(N){let B=function(_){return new Promise(y=>{if(!_)return y(null);const S=_.type&&_.type.startsWith("image/"),L=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(_.name||"");if(!S&&!L)return y(null);const j=new FileReader;j.onload=K=>{const x=K.target.result,$=new Image;$.onload=()=>{const Q=$.naturalWidth||$.width||800,sa=$.naturalHeight||$.height||800;let ga=x,Sa=null,pa=null;try{let ia=Q,la=sa;if(ia>1280||la>1280){const ua=Math.min(1280/ia,1280/la);ia=Math.round(ia*ua),la=Math.round(la*ua)}const ca=document.createElement("canvas");ca.width=ia,ca.height=la,ca.getContext("2d").drawImage($,0,0,ia,la),Sa=za(ca,{filename:_.name,targetAspectRatio:c}),t==="COLOUR_GRADING"&&(pa=Oe(ca)),ga=ca.toDataURL("image/jpeg",.88)}catch(ka){console.warn("Canvas processing fallback:",ka),ga=x,Sa=za(null,{filename:_.name,targetAspectRatio:c})}const da=Ka(Q,sa);y({file:_,name:_.name,size:_.size,type:"image/jpeg",base64:ga,previewUrl:ga,width:Q,height:sa,aspectRatio:da,detectedAspectRatio:da,visualTelemetry:Sa,colorTelemetry:pa})},$.onerror=()=>{y({file:_,name:_.name,size:_.size,type:"image/jpeg",base64:x,previewUrl:x,width:0,height:0,visualTelemetry:null,colorTelemetry:null})},$.src=x},j.onerror=()=>y(null),j.readAsDataURL(_)})};var V=B;P&&(P.addEventListener("click",()=>{N.click()}),P.addEventListener("dragover",_=>{_.preventDefault(),P.classList.add("dragover")}),P.addEventListener("dragleave",()=>{P.classList.remove("dragover")}),P.addEventListener("drop",_=>{_.preventDefault(),P.classList.remove("dragover"),_.dataTransfer.files&&_.dataTransfer.files.length>0&&(t==="COLOUR_GRADING"&&_.dataTransfer.files.length>1?X(Array.from(_.dataTransfer.files)):aa(_.dataTransfer.files[0]))})),Y&&Y.addEventListener("click",()=>{N.click()}),N.addEventListener("change",()=>{N.files&&N.files.length>0&&(t==="COLOUR_GRADING"&&N.files.length>1?X(Array.from(N.files)):aa(N.files[0]),N.value="")});async function X(_){const y=_.filter(L=>{const j=L.type&&L.type.startsWith("image/"),K=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(L.name||"");return j||K});if(y.length===0){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const S=[];for(const L of y){const j=await B(L);j&&S.push(j)}S.length>0&&p&&p(S[0],S)}async function aa(_){if(!_)return;const y=_.type&&_.type.startsWith("image/"),S=/\.(jpe?g|png|webp|jfif|bmp|gif|heic|heif)$/i.test(_.name||"");if(!y&&!S){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP, JFIF).");return}const L=await B(_);L&&p&&p(L,[L])}}if(W&&W.addEventListener("click",()=>{h&&h()}),v.querySelectorAll(".aspect-ratio-btn").forEach(B=>{B.addEventListener("click",X=>{X.preventDefault();const aa=B.getAttribute("data-ratio");f&&f(aa)})}),H&&H.addEventListener("click",()=>{if(t==="IMAGE_TO_PROMPT"||t==="TWO_WORLDS"){if(!d){N&&N.click();return}a&&a("");return}const B=D?D.value:"";a&&a(B)}),G&&G.addEventListener("click",()=>{D&&(D.value=""),n&&n()}),O&&O.addEventListener("click",()=>{e&&e()}),D&&D.addEventListener("keydown",B=>{(B.ctrlKey||B.metaKey)&&B.key==="Enter"&&(B.preventDefault(),a&&a(D.value))}),t==="TWO_WORLDS"){const B=v.querySelector("#tw-prompt-template"),X=v.querySelector("#tw-custom-request"),aa=v.querySelector("#tw-gender"),_=v.querySelector("#tw-age"),y=v.querySelector("#tw-ethnicity"),S=v.querySelector("#tw-subject-style"),L=v.querySelector("#tw-custom-subject-style"),j=v.querySelector("#tw-env-style"),K=v.querySelector("#tw-env-desc"),x=($=null)=>{m&&m({customRequest:X?X.value:"",gender:aa?aa.value:"Auto (Smart Detection) mengikuti gambar unggahan",age:_?_.value:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:y?y.value:"Auto (Smart Detection)",subjectStyle:S?S.value:"Auto (Smart Detection)",customSubjectStyle:L?L.value:"",environmentStyle:j?j.value:"Auto (Smart Detection)"},$)};B&&B.addEventListener("change",()=>{const $=B.value,Q=Ba.find(sa=>sa.id===$);Q&&Q.id!=="none"&&Q.text&&X&&(X.value=Q.text,x("customRequest"))}),X&&X.addEventListener("input",()=>{if(B&&B.value!=="none"){const $=Ba.find(Q=>Q.id===B.value);$&&X.value!==$.text&&(B.value="none")}x("customRequest")}),aa&&aa.addEventListener("change",()=>x("gender")),_&&_.addEventListener("change",()=>x("age")),y&&y.addEventListener("change",()=>x("ethnicity")),S&&S.addEventListener("change",()=>{const $=S.value==="Custom";L&&(L.style.display=$?"block":"none",$&&L.focus()),x("subjectStyle")}),L&&L.addEventListener("input",()=>x("customSubjectStyle")),j&&j.addEventListener("change",()=>{const $=j.value,Q=_a.find(sa=>sa.name===$);K&&(K.textContent=Q?Q.description:""),x("environmentStyle")})}}}}function We(l=[],a,e="ANALISA_PROMPT"){const n=l&&l.length>0,r=e==="IMAGE_TO_PROMPT"?"D":"G",s=n?l.map(t=>{const o=t.type==="EDIT_VS_LOCK"||t.shorthandA&&t.shorthandA.includes("lock"),d=o?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${t.shorthandB} (Hapus ${t.shorthandA})`,p=o?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${t.shorthandA} (Hapus ${t.shorthandB})`,h=t.suggestion||Fe(t);return`
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
          ${d}
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
          <span class="card-step-badge" style="background: ${n?"#dc2626":"var(--badge-neutral-bg)"}; color: #fff;">${r}</span>
          <h2>SHORTHAND KONFLIK</h2>
        </div>
        <span class="badge ${n?"badge-wajib":"badge-neutral"}">
          ${n?`${l.length} Konflik Terdeteksi`:"0 Konflik"}
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
  `,bindEvents(t){t.querySelectorAll(".btn-resolve").forEach(o=>{o.addEventListener("click",()=>{const d=o.getAttribute("data-action"),p=o.getAttribute("data-conflict-id");a&&a(p,d)})})}}}function Fe(l){if(l.suggestion)return l.suggestion;const a=l.shorthandA||"",e=l.shorthandB||"";if(l.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const n=a.includes("lock")?a:e,r=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${n}) dan terapkan instruksi ubah (${r}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${n}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${l.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function Ye({installedShorthands:l=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:n}){const r=l.length>0?l.map(t=>`
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
            ${a.filter(t=>!l.includes(t.code)).map(t=>`
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
  `,bindEvents(t){t.querySelectorAll(".chip-remove-btn").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation();const c=p.getAttribute("data-code");e&&e(c)})});const o=t.querySelector("#btn-add-shorthand"),d=t.querySelector("#select-catalog-shorthand");o&&d&&o.addEventListener("click",()=>{const p=d.value;p&&n&&n(p)})}}}function qe({optimalPrompt:l="",installedShorthands:a=[],catalog:e=[],isOnlineActive:n=!1,isEnriching:r=!1,onCopyPrompt:s,onEnrichPrompt:i,onRemoveShorthand:t,onAddShorthand:o}){const d=Ye({installedShorthands:a,catalog:e,onRemoveShorthand:t,onAddShorthand:o}),p=re(l),h=Ue(l);return De(l,a),{html:`
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
            ${!n||r||!l?"disabled":""}
            title="${n?l?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
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
        <span>${l||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${d.html}
    </section>
  `,bindEvents(f){d.bindEvents(f);const g=f.querySelector("#btn-copy-main-prompt");g&&g.addEventListener("click",()=>{s&&s(l)});const m=f.querySelector("#btn-enrich-ai");m&&m.addEventListener("click",()=>{i&&!r&&n&&l&&i()})}}}function Je(l){const{primaryAction:a="-",primaryTarget:e="-",summary:n="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:r="-",category:s="-"}=l||{};return{html:`
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
          <span class="intent-meta-value">${r}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function Qe(l=[]){const a=l.length>0?l.map(n=>`
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
        <span class="badge badge-purple">${l.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function Xe(l=[],a=[]){const e=l.length>0?l.map(r=>`
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
        <span class="badge badge-blue">${l.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function Ze(l){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:n=""}=l||{};return{html:`
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
  `,bindEvents(){}}}function at({primaryShorthands:l=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:n=[],activeMode:r="ANALISA_PROMPT",onToggleShorthand:s}){const i=r==="IMAGE_TO_PROMPT",t=i?"A":"E",o=i?"B":"F",d=l.length>0?l:e.filter(g=>g.isPrimary!==!1&&g.priority==="WAJIB"),p=a.length>0?a:e.filter(g=>g.isPrimary===!1||g.priority!=="WAJIB"),h=d.length>0?d.map(g=>{var b,R,w;const m=n.includes(g.code),u=g.equivalentTo||((b=g.item)==null?void 0:b.equivalentTo)||[],k=g.functionGroup||((R=g.item)==null?void 0:R.functionGroup)||g.category;return`
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
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${g.source==="ONLINE"||g.isOnline?"ONLINE":((w=g.item)==null?void 0:w.status)||"CORE"}</span></div>
                ${u.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${u.map(A=>`<span class="alias-tag font-mono">${A}</span>`).join(" ")}
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
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',c=p.length>0?p.map(g=>{var R;const m=n.includes(g.code),u=g.equivalentTo||((R=g.item)==null?void 0:R.equivalentTo)||[],k=g.relationship||"CONTEXTUAL",b=g.source==="USER"?"badge-purple":"badge-neutral";return`
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
                  ${g.source==="ONLINE"||g.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${b}" style="font-size: 0.675rem;">${g.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${g.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${g.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${g.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${k}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${g.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${g.source==="ONLINE"||g.isOnline?"ONLINE":g.source||"CORE"}</span></div>
                ${u.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${u.map(w=>`<span class="alias-tag font-mono">${w}</span>`).join(" ")}
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
        <span class="badge badge-blue">${d.length} Aktif Otomatis</span>
      </div>

      ${d.length===0&&p.length===0?`
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
        ${c}
      </div>
    </section>
  `,bindEvents(g){g.querySelectorAll(".btn-toggle-rec").forEach(m=>{m.addEventListener("click",u=>{u.stopPropagation();const k=m.getAttribute("data-code");s&&s(k)})}),g.querySelectorAll(".related-checkbox").forEach(m=>{m.addEventListener("change",u=>{u.stopPropagation();const k=m.getAttribute("data-code");s&&s(k)})})}}}function et(l=[],a=[],e){const n=l.length>0?l.map(s=>{const i=a.includes(s.code),t=s.equivalentTo||[],o=s.functionGroup||s.category;return`
      <div class="rec-card similar-rec-card ${i?"rec-card-active":""}" data-code="${s.code}">
        <div class="related-item-content">
          <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
              <input 
                type="checkbox" 
                class="similar-checkbox" 
                data-code="${s.code}" 
                ${i?"checked":""} 
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
                ${t.map(d=>`<span class="alias-tag font-mono">${d}</span>`).join(" ")}
              </div>
            `:""}
          </div>
        </div>

        <div class="rec-toggle-row" style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.75rem; color: ${i?"#34d399":"var(--text-muted)"}; display: flex; align-items: center; gap: 0.35rem;">
            ${i?"✅ Dicentang (Terpasang di Prompt)":"⚪ Nonaktif (Belum Dicentang)"}
          </span>
          <button 
            type="button" 
            class="btn ${i?"btn-danger":"btn-outline"} btn-xs btn-toggle-rec" 
            data-code="${s.code}"
            title="${i?"Lepas dari prompt optimal":"Centang dan pasang ke prompt optimal"}"
          >
            ${i?"Batal Centang":"+ Centang & Pasang"}
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
        <span class="badge badge-neutral">${l.length} Alternatif</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Shorthand alternatif atau sinonim yang memiliki kesamaan fungsi/kategori dengan shorthand utama atau pendukung. Nonaktif secara default <strong>[ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${n}
      </div>
    </section>
  `,bindEvents(s){s&&(s.querySelectorAll(".similar-checkbox").forEach(i=>{i.addEventListener("change",t=>{t.stopPropagation();const o=i.getAttribute("data-code");e&&e(o)})}),s.querySelectorAll("#card-similar-shorthands .btn-toggle-rec").forEach(i=>{i.addEventListener("click",t=>{t.stopPropagation();const o=i.getAttribute("data-code");e&&e(o)})}))}}}function tt(l=[],a="ANALISA_PROMPT"){const e=l.length,n=a==="IMAGE_TO_PROMPT"?"E":"H",r=e>0?l.map(i=>`
        <div class="exclusion-item">
          <div class="exclusion-code-row">
            <span class="exclusion-code">${i.code}</span>
            <span class="exclusion-target">&bull; ${i.target}</span>
          </div>
          <p class="exclusion-reason">
            ${i.reason}
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
          ${r}
        </div>
      </div>
    </section>
  `,bindEvents(i){if(!i)return;const t=i.querySelector("#btn-toggle-exclusions"),o=i.querySelector("#exclusions-content"),d=i.querySelector("#header-exclusions");if(!t||!o)return;const p=h=>{h&&(h.preventDefault(),h.stopPropagation()),o.style.display==="none"||!o.style.display?(o.style.display="block",t.setAttribute("aria-expanded","true"),t.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,t.classList.remove("btn-secondary"),t.classList.add("btn-outline")):(o.style.display="none",t.setAttribute("aria-expanded","false"),t.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,t.classList.remove("btn-outline"),t.classList.add("btn-secondary"))};t.addEventListener("click",p),d&&(d.addEventListener("click",h=>{h.target.closest("#btn-toggle-exclusions")||p(h)}),d.addEventListener("keydown",h=>{if(h.key==="Enter"||h.key===" "){if(h.target.closest("#btn-toggle-exclusions"))return;p(h)}}))}}}function nt({analysisResult:l,currentPrompt:a,catalog:e,isAnalyzing:n,isOnlineActive:r=!1,isEnriching:s=!1,activeMode:i="ANALISA_PROMPT",uploadedImage:t=null,onModeChange:o,onImageSelected:d,onImageRemoved:p,onAnalyze:h,onReset:c,onClear:f,onSelectPreset:g,onCopyPrompt:m,onCopyGeneratedPrompt:u,onEnrichPrompt:k,onAddShorthand:b,onRemoveShorthand:R,onToggleRecommendation:w,onResolveConflict:A,selectedAspectRatio:C="auto",onAspectRatioChange:I,twoWorldsConfig:E=null,onTwoWorldsConfigChange:T,colourGradingConfig:U=null,onColourGradingConfigChange:v,onResetGrading:D,batchImages:H=[],activeBatchIndex:G=0,onSelectBatchImage:O}){var J;const{optimalPrompt:P="",generatedPrompt:N="",visualBreakdown:Y=null,isImageRepair:W=!1,visualConditionSummary:oa="",calculatedAdjustments:V=null,protectionLogs:B=[],colorGradingRecipe:X=null,optimizationAreas:aa=[],goodAspects:_=[],diagnosedShorthands:y=[],installedShorthands:S=[],conflicts:L=[],intent:j={},editAreas:K=[],lockedAreas:x=[],unchangedAreas:$=[],visualTransformation:Q={},primaryShorthands:sa=[],relatedShorthands:ga=[],similarShorthands:Sa=[],recommendations:pa=[],exclusions:da=[]}=l||{};function ka(F){switch(F){case"PRIMARY_ISSUE":return'<span class="badge badge-red" style="font-size: 0.72rem; font-weight: 700;">🔴 Masalah Utama</span>';case"SECONDARY_ISSUE":return'<span class="badge badge-amber" style="font-size: 0.72rem; font-weight: 700;">🟠 Masalah Sekunder</span>';case"OPTIMIZATION":return'<span class="badge badge-blue" style="font-size: 0.72rem; font-weight: 700;">🔵 Peningkatan Tambahan</span>';case"PRESERVATION":return'<span class="badge badge-green" style="font-size: 0.72rem; font-weight: 700;">🟢 Preservasi Detail/Tekstur</span>';case"FINISHING":return'<span class="badge badge-purple" style="font-size: 0.72rem; font-weight: 700;">🟣 Sentuhan Akhir Alami</span>';default:return'<span class="badge badge-blue" style="font-size: 0.72rem;">Optimasi</span>'}}const ia=Ve({currentValue:a,onAnalyze:h,onReset:c,onClear:f,onSelectPreset:g,isAnalyzing:n,isOnlineActive:r,activeMode:i,onModeChange:o,uploadedImage:t,onImageSelected:d,onImageRemoved:p,selectedAspectRatio:C,onAspectRatioChange:I,twoWorldsConfig:E,onTwoWorldsConfigChange:T,colourGradingConfig:U,onColourGradingConfigChange:v,onResetGrading:D,batchImages:H,activeBatchIndex:G,onSelectBatchImage:O}),la=We(L,A,i),ca=qe({optimalPrompt:P,installedShorthands:S,catalog:e,isOnlineActive:r,isEnriching:s,onCopyPrompt:m,onEnrichPrompt:k,onRemoveShorthand:R,onAddShorthand:b}),Ea=Je(j),ua=Qe(K),La=Xe(x,$),Na=Ze(Q),va=at({primaryShorthands:sa,relatedShorthands:ga,recommendations:pa,installedShorthands:S,activeMode:i,onToggleShorthand:w}),Ia=et(Sa,S,w),Ra=tt(da,i);return i==="IMAGE_TO_PROMPT"||i==="TWO_WORLDS"?N?{html:`
      <div class="analyzer-stream-container">
        <!-- 1. INPUT GAMBAR -->
        ${ia.html}

        <!-- 2. PROMPT HASIL ANALISIS GAMBAR -->
        <section class="panel analyzer-card card-generated-image-prompt" id="card-generated-image-prompt">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: #38bdf8;"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
              <h2 style="color: #38bdf8;">
                ${i==="TWO_WORLDS"?"PROMPT HASIL ANALISA 2 DUNIA":"PROMPT HASIL ANALISA GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              ${i==="TWO_WORLDS"?'<span class="badge badge-purple" style="background: rgba(168, 85, 247, 0.15); border: 1px solid #c084fc; color: #c084fc;">🌐 Mode 2 Dunia</span>':""}
              ${(l==null?void 0:l.source)==="GEMINI_AI"?`<span class="badge badge-blue" style="background: rgba(14, 165, 233, 0.15); border: 1px solid #38bdf8; color: #38bdf8;">🌐 Vision AI Aktif (${((J=l.imageInfo)==null?void 0:J.name)||"Gambar Aktual"})</span>`:'<span class="badge badge-blue">🤖 Source of Truth Visual</span>'}
              <button type="button" class="btn btn-outline btn-xs" id="btn-copy-generated-prompt" title="Salin teks deskriptif hasil analisa visual gambar">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                Salin Prompt Analisa
              </button>
            </div>
          </div>
          <div class="generated-prompt-display-box">
            <p class="font-mono" style="margin: 0; line-height: 1.6; color: #f1f5f9; font-size: 0.925rem; white-space: pre-wrap;">
              ${N}
            </p>
          </div>
          ${Y?`
            <div style="margin-top: 1rem;">
              <h3 style="font-size: 0.85rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📋</span> Rincian 13 Atribut Visual Gambar Aktual:
              </h3>
              <div class="visual-breakdown-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.55rem; font-size: 0.825rem;">
                ${Object.entries(Y).map(([M,ea],ya)=>`
                  <div style="background: rgba(15, 23, 42, 0.7); padding: 0.55rem 0.75rem; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.2); display: flex; flex-direction: column; gap: 0.2rem;">
                    <strong style="color: #38bdf8; font-size: 0.8rem;">${ya+1}. ${M}</strong>
                    <span style="color: #f1f5f9; font-size: 0.8rem; line-height: 1.4;">${ea}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </section>

        <!-- 3. PROMPT OPTIMAL -->
        ${ca.html}

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
        ${Ia.html}

        <!-- D. Shorthand Konflik -->
        ${la.html}

        <!-- E. Shorthand Tidak Diperlukan (Dikecualikan) -->
        ${Ra.html}
      </div>
    `,bindEvents(M){ia.bindEvents(M),ca.bindEvents(M),va.bindEvents(M),Ia.bindEvents(M),la.bindEvents(M),Ra.bindEvents(M);const ea=M.querySelector("#btn-copy-generated-prompt");ea&&ea.addEventListener("click",()=>{u&&u(N)})}}:{html:`
          <div class="analyzer-stream-container">
            ${ia.html}
          </div>
        `,bindEvents(M){ia.bindEvents(M)}}:{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${ia.html}

      <!-- MODE 3 / COLOUR GRADING SPECIFIC: DIAGNOSIS & REKOMENDASI PERBAIKAN / COLOUR GRADING GAMBAR CARD -->
      ${(i==="SHORTHAND_IMPROVE"||i==="COLOUR_GRADING")&&W?`
        <section class="panel analyzer-card card-repair-diagnosis" id="card-repair-diagnosis">
          <div class="card-header">
            <div class="card-title">
              <svg class="icon" viewBox="0 0 24 24" style="color: ${i==="COLOUR_GRADING"?"#ec4899":"#c084fc"};"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <h2 style="color: ${i==="COLOUR_GRADING"?"#ec4899":"#c084fc"};">
                ${i==="COLOUR_GRADING"?"🎨 DIAGNOSIS &amp; REKOMENDASI COLOUR GRADING":"🛠️ DIAGNOSIS &amp; REKOMENDASI PERBAIKAN GAMBAR"}
              </h2>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge ${i==="COLOUR_GRADING"?"badge-pink":"badge-purple"}">
                ${i==="COLOUR_GRADING"?"🎨 Diagnosis Tone & Palet Warna":"🔍 Diagnosis Visual Komprehensif"}
              </span>
              <span class="badge badge-blue">⚡ ${y.length} Shorthand (UNLIMITED)</span>
            </div>
          </div>

          <!-- 1. Ringkasan Kondisi Visual / Warna Gambar -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>${i==="COLOUR_GRADING"?"🎨":"📷"}</span> ${i==="COLOUR_GRADING"?"Ringkasan Karakter Warna & Tone Gambar:":"Ringkasan Kondisi Visual Gambar:"}
            </h3>
            <div style="background: ${i==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.08)":"rgba(168, 85, 247, 0.08)"}; border-left: 3px solid ${i==="COLOUR_GRADING"?"#ec4899":"#c084fc"}; border-radius: 4px; padding: 0.75rem 0.95rem; color: #f1f5f9; font-size: 0.875rem; line-height: 1.6;">
              ${oa}
            </div>
          </div>

          <!-- 1.5. HASIL PENYESUAIAN ADAPTIF PER-FOTO & PROTEKSI CERDAS (KHUSUS COLOUR GRADING) -->
          ${i==="COLOUR_GRADING"&&V?`
            <div style="margin-bottom: 1.15rem; background: rgba(30, 41, 59, 0.55); border: 1px solid rgba(236, 72, 153, 0.25); border-radius: 8px; padding: 0.85rem 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.55rem; flex-wrap: wrap; gap: 0.4rem;">
                <h3 style="font-size: 0.825rem; font-weight: 700; color: #f472b6; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                  <span>🎚️</span> Parameter Penyesuaian Adaptif Terhitung (Target: ${V.targetStyle||"Adaptive"} &bull; ${V.intensityPercent||50}%):
                </h3>
                <span class="badge badge-outline" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.4); font-size: 0.7rem;">
                  Non-Destructive &bull; Source Preserved
                </span>
              </div>

              <!-- Parameter Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 0.65rem;">
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Exposure</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.exposure>0?"+":""}${V.exposure} EV</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Contrast</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.contrast>0?"+":""}${V.contrast}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Highlights</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.highlights>0?"+":""}${V.highlights}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Shadows</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.shadows>0?"+":""}${V.shadows}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Warmth (Temp)</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.warmth>0?"+":""}${V.warmth}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Tint</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.tint>0?"+":""}${V.tint}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Vibrance</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.vibrance>0?"+":""}${V.vibrance}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.7); border-radius: 6px; padding: 0.4rem 0.6rem; border: 1px solid rgba(255,255,255,0.06);">
                  <div style="color: #94a3b8; font-size: 0.68rem;">Saturation</div>
                  <strong style="color: #f8fafc; font-size: 0.85rem;">${V.saturation>0?"+":""}${V.saturation}</strong>
                </div>
              </div>

              <!-- Proteksi Cerdas yang Diterapkan -->
              ${V.protectionLogs&&V.protectionLogs.length>0?`
                <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 0.5rem; font-size: 0.735rem; color: #a7f3d0; line-height: 1.45;">
                  <strong style="color: #34d399; display: block; margin-bottom: 0.2rem;">🛡️ Proteksi Cerdas Diterapkan:</strong>
                  ${V.protectionLogs.map(F=>`<div>&bull; ${F}</div>`).join("")}
                </div>
              `:""}
            </div>
          `:""}

          <!-- 2. Area yang Membutuhkan Optimasi / Penyesuaian -->
          <div style="margin-bottom: 1.15rem;">
            <h3 style="font-size: 0.825rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
              <span>⚠️</span> ${i==="COLOUR_GRADING"?"Area Penyesuaian Tone & Warna":"Area yang Membutuhkan Optimasi"} (${aa.length} Teridentifikasi):
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${aa.map((F,M)=>`
                <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 0.75rem 0.85rem;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; gap: 0.5rem;">
                    <strong style="color: #f8fafc; font-size: 0.825rem;">${M+1}. ${F.aspect}</strong>
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
          ${_&&_.length>0?`
            <div style="margin-bottom: 1.15rem;">
              <h3 style="font-size: 0.825rem; font-weight: 700; color: #4ade80; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>✅</span> Aspek yang Dinilai Sudah Baik / Optimal:
              </h3>
              <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 0.75rem 0.95rem;">
                <ul style="margin: 0; padding-left: 1.2rem; color: #bbf7d0; font-size: 0.825rem; line-height: 1.6;">
                  ${_.map(F=>`<li>${F}</li>`).join("")}
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
                <span>🎯</span> ${i==="COLOUR_GRADING"?"Rekomendasi Shorthand Colour Grading":"Rekomendasi Shorthand Perbaikan"} (${y.length} Shorthand Tanpa Batasan):
              </h3>
              <span style="font-size: 0.725rem; color: var(--text-muted);">Urutan: Masalah Utama ➔ Sekunder ➔ Peningkatan ➔ Preservasi ➔ Finishing</span>
            </div>
            <div class="repair-shorthands-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
              ${y.map(F=>`
                <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${i==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.25)":"rgba(168, 85, 247, 0.25)"}; border-radius: 8px; padding: 0.75rem 0.85rem; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <code style="background: #0f172a; color: ${i==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.85rem;">
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
                    <span class="badge badge-outline" style="font-size: 0.675rem; color: ${i==="COLOUR_GRADING"?"#f472b6":"#a855f7"}; border-color: ${i==="COLOUR_GRADING"?"rgba(236, 72, 153, 0.4)":"rgba(168, 85, 247, 0.4)"};">TERPASANG</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${ca.html}

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
      ${Ra.html}
    </div>
  `,bindEvents(F){ia.bindEvents(F),ca.bindEvents(F),va.bindEvents(F),la.bindEvents(F),Ra.bindEvents(F);const M=F.querySelector("#btn-copy-generated-prompt");M&&M.addEventListener("click",()=>{u&&u(N)})}}}function it({searchQuery:l="",searchResults:a=[],selectedShorthands:e=[],isSearching:n=!1,searchNotice:r=null,hasSearched:s=!1,onSearch:i,onAddShorthand:t,onRemoveShorthand:o,onClearAll:d,onCopyShorthands:p}){const h=new Set(e.map(u=>(u.code||u).toLowerCase())),c=e.length>0;let f="";c?f=e.map((u,k)=>{const b=typeof u=="string"?u:u.code,R=typeof u=="object"&&u.name?u.name:"";return`
          <div class="selected-shorthand-tag ${typeof u=="object"&&u.source==="ONLINE"?"tag-online":""}" title="${R?R+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${b}</span>
            <button type="button" class="btn-remove-tag" data-code="${b}" aria-label="Hapus ${b}">
              &times;
            </button>
          </div>
        `}).join(""):f=`
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
          ${r||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?g=`
      <div class="dictionary-results-grid">
        ${a.map(u=>{const k=h.has((u.code||"").toLowerCase()),b=u.source==="ONLINE",R=b?"badge-online":"badge-local",w=b?"🌐 ONLINE":"LOCAL";return`
              <div class="dictionary-card ${k?"card-selected":""}" data-code="${u.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${u.code}</span>
                    <span class="source-badge ${R}">${w}</span>
                  </div>
                  <div class="card-action">
                    ${k?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${u.code}" title="Tambahkan ${u.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${u.name||u.code}</div>
                  <div class="card-desc">${u.description||"Tidak ada deskripsi"}</div>
                  ${u.equivalentTo&&u.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${u.equivalentTo.slice(0,4).map(A=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${A}</span>`).join("")}
                      ${u.equivalentTo.length>4?`<span style="opacity: 0.6;">+${u.equivalentTo.length-4} lainnya</span>`:""}
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
                ${c?"":"disabled"} 
                title="Kosongkan seluruh shorthand terpilih">
                🗑 Hapus Semua
              </button>
              <button 
                type="button" 
                class="btn btn-primary btn-sm" 
                id="btn-copy-selected-shorthands" 
                ${c?"":"disabled"} 
                title="Salin seluruh shorthand terpilih ke clipboard">
                📋 COPY SHORTHAND
              </button>
            </div>
          </div>

          <div class="selected-tags-container" id="selected-tags-container">
            ${f}
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
              value="${l||""}"
              autocomplete="off"
              spellcheck="false"
            />
            ${l?'<button type="button" class="btn-clear-search" id="btn-clear-search" title="Bersihkan pencarian">&times;</button>':""}
          </div>
          <button type="submit" class="btn btn-primary btn-search-submit" id="btn-search-submit">
            CARI
          </button>
        </form>

        <!-- Search Status Info -->
        ${s&&a.length>0?`
              <div class="search-status-bar">
                <span>Ditemukan <strong>${a.length}</strong> shorthand relevan untuk "<em>${l}</em>"</span>
                <span class="search-priority-hint">Prioritas: 1. Katalog Lokal &bull; 2. Online Fallback</span>
              </div>
            `:""}

        <!-- RESULTS LIST -->
        <div class="results-wrapper">
          ${g}
        </div>
      </section>
    </div>
  `,bindEvents(u){const k=u.querySelector("#dictionary-search-form"),b=u.querySelector("#dictionary-search-input"),R=u.querySelector("#btn-clear-search"),w=u.querySelector("#btn-copy-selected-shorthands"),A=u.querySelector("#btn-clear-all-shorthands");k&&b&&k.addEventListener("submit",C=>{C.preventDefault();const I=b.value.trim();i&&i(I)}),R&&b&&R.addEventListener("click",()=>{b.value="",b.focus(),i&&i("")}),u.querySelectorAll(".btn-add-shorthand").forEach(C=>{C.addEventListener("click",()=>{const I=C.getAttribute("data-code"),E=a.find(T=>T.code===I);E&&t&&t(E)})}),u.querySelectorAll(".btn-remove-tag").forEach(C=>{C.addEventListener("click",()=>{const I=C.getAttribute("data-code");I&&o&&o(I)})}),w&&w.addEventListener("click",()=>{p&&p()}),A&&A.addEventListener("click",()=>{d&&d()})}}}function rt({analysisResult:l,onCopyJson:a,onRunCustomJson:e}){var p,h,c;const n=JSON.stringify({rawPrompt:(l==null?void 0:l.rawPrompt)||"",cleanText:(l==null?void 0:l.cleanText)||"",installedShorthands:(l==null?void 0:l.installedShorthands)||[]},null,2),r=JSON.stringify(l||{},null,2),s=((p=l==null?void 0:l.conflicts)==null?void 0:p.length)>0,i=!!((h=l==null?void 0:l.intent)!=null&&h.primaryAction&&l.intent.primaryAction!=="-"),t=((c=l==null?void 0:l.installedShorthands)==null?void 0:c.length)||0,o=(l==null?void 0:l.source)||"LOCAL_ENGINE";return{html:`
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
          <pre class="json-box" id="json-output-view">${r}</pre>
        </div>
      </div>
    </section>
  `,bindEvents(f){const g=f.querySelector("#btn-copy-output-json");g&&g.addEventListener("click",()=>{a&&a(r)})}}}function st({catalog:l=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:n="ALL",searchQuery:r="",currentPage:s=1,pageSize:i=12,selectedDetailCode:t=null,isAddModalOpen:o=!1,isImportModalOpen:d=!1,duplicateWarning:p=null,onSelectCategory:h,onSelectTarget:c,onSelectRecLevel:f,onSearchChange:g,onPageChange:m,onOpenDetail:u,onCloseDetail:k,onOpenAddModal:b,onCloseAddModal:R,onSubmitAddShorthand:w,onOpenImportModal:A,onCloseImportModal:C,onSubmitImport:I,onExportCatalog:E,onResetUserCatalog:T,onAddShorthandToPrompt:U}){const v=ce(l,{category:a,target:e,recommendationLevel:n,searchQuery:r}),D=v.length,H=Math.max(1,Math.ceil(D/i)),G=Math.min(Math.max(1,s),H),O=(G-1)*i,P=v.slice(O,O+i),N=Array.from(new Set(l.map(y=>y.target))).sort(),W=["ALL",...Object.keys($a)].map(y=>{const S=$a[y],L=y==="ALL"?"Semua Kategori":`${S.code}. ${S.label}`;return`
      <button type="button" class="category-tab-btn ${a===y?"active":""}" data-cat="${y}">
        ${L}
      </button>
    `}).join(""),oa=P.length>0?P.map(y=>{let S="badge-opsional";y.recommendationLevel==="WAJIB"||y.priority==="HIGH"?S="badge-wajib":y.recommendationLevel==="DISARANKAN"&&(S="badge-disarankan");const L=y.source==="USER"?"badge-purple":"badge-neutral",j=(y.semanticTriggers||[]).slice(0,3).map($=>`<span class="compat-pill">"${$}"</span>`).join(" "),K=y.equivalentTo||[],x=y.relationships||[];return`
          <div class="catalog-item-card" data-code="${y.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${y.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${L}">${y.source||"CORE"}</span>
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
              ${K.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${K.map($=>`<span class="alias-tag font-mono">${$}</span>`).join(" ")}
                </div>
              `:""}
              ${x.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${x.length} terhubung (${x.map($=>$.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${j||"-"}</div>
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
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',V=H>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${G<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${G} dari ${H} (${D} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${G>=H?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let B="";if(t){const y=l.find(S=>S.code===t);y&&(B=`
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
      `)}let X="";if(o){const y=Object.keys(le);X=`
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
                    ${Object.keys($a).map(S=>`<option value="${S}">${S} - ${$a[S].label}</option>`).join("")}
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
    `}let aa="";return d&&(aa=`
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
        <span class="badge badge-blue font-mono">${l.length} Shorthand Terdaftar</span>
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
            ${N.map(y=>`<option value="${y}" ${e===y?"selected":""}>Target: ${y}</option>`).join("")}
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
            value="${r||""}"
          />
        </div>
      </div>

      <!-- Grid of Shorthands -->
      <div class="catalog-cards-grid">
        ${oa}
      </div>

      <!-- Pagination -->
      ${V}

      <!-- Modals -->
      ${B}
      ${X}
      ${aa}
    </section>
  `,bindEvents(y){y.querySelectorAll(".category-tab-btn").forEach(M=>{M.addEventListener("click",()=>{const ea=M.getAttribute("data-cat");h&&h(ea)})});const S=y.querySelector("#select-filter-target");S&&S.addEventListener("change",M=>{c&&c(M.target.value)});const L=y.querySelector("#select-filter-rec-level");L&&L.addEventListener("change",M=>{f&&f(M.target.value)});const j=y.querySelector("#catalog-search-input");j&&j.addEventListener("input",M=>{g&&g(M.target.value)});const K=y.querySelector(".btn-prev-page");K&&K.addEventListener("click",()=>{m&&m(G-1)});const x=y.querySelector(".btn-next-page");x&&x.addEventListener("click",()=>{m&&m(G+1)});const $=y.querySelector("#btn-open-add-shorthand");$&&b&&$.addEventListener("click",b);const Q=y.querySelector("#btn-export-catalog");Q&&E&&Q.addEventListener("click",E);const sa=y.querySelector("#btn-open-import-catalog");sa&&A&&sa.addEventListener("click",A);const ga=y.querySelector("#btn-reset-user-catalog");ga&&T&&ga.addEventListener("click",T),y.querySelectorAll(".btn-open-detail").forEach(M=>{M.addEventListener("click",()=>{const ea=M.getAttribute("data-code");u&&u(ea)})});const Sa=y.querySelector("#btn-close-detail-modal"),pa=y.querySelector("#btn-close-detail-footer"),da=y.querySelector("#modal-detail-backdrop"),ka=()=>{k&&k()};Sa&&Sa.addEventListener("click",ka),pa&&pa.addEventListener("click",ka),da&&da.addEventListener("click",M=>{M.target===da&&ka()});const ia=y.querySelector("#btn-close-add-modal"),la=y.querySelector("#btn-cancel-add"),ca=y.querySelector("#modal-add-backdrop"),Ea=()=>{R&&R()};ia&&ia.addEventListener("click",Ea),la&&la.addEventListener("click",Ea),ca&&ca.addEventListener("click",M=>{M.target===ca&&Ea()});const ua=y.querySelector("#form-add-shorthand");ua&&w&&ua.addEventListener("submit",M=>{M.preventDefault();let ea=y.querySelector("#add-code").value.trim();ea.startsWith("/")||(ea="/"+ea);const ya=y.querySelector("#add-name").value.trim(),ma=y.querySelector("#add-category").value,ba=y.querySelector("#add-target").value.trim(),Aa=y.querySelector("#add-func-group").value.trim()||ma,Oa=y.querySelector("#add-desc").value.trim(),wa=y.querySelector("#add-triggers").value.trim(),Z=y.querySelector("#add-equivalent").value.trim(),Pa=wa?wa.split(",").map(ta=>ta.trim()).filter(Boolean):[],ha=Z?Z.split(",").map(ta=>ta.trim().startsWith("/")?ta.trim():"/"+ta.trim()).filter(Boolean):[];w({code:ea,name:ya,category:ma,target:ba,functionGroup:Aa,description:Oa,semanticTriggers:Pa,equivalentTo:ha,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${ba.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const La=y.querySelector("#btn-close-import-modal"),Na=y.querySelector("#btn-cancel-import"),va=y.querySelector("#modal-import-backdrop"),Ia=()=>{C&&C()};La&&La.addEventListener("click",Ia),Na&&Na.addEventListener("click",Ia),va&&va.addEventListener("click",M=>{M.target===va&&Ia()});const Ra=y.querySelector("#import-file-input"),q=y.querySelector("#import-json-textarea");Ra&&q&&Ra.addEventListener("change",M=>{const ea=M.target.files[0];if(ea){const ya=new FileReader;ya.onload=ma=>{q.value=ma.target.result},ya.readAsText(ea)}});const J=y.querySelector("#form-import-catalog");J&&I&&J.addEventListener("submit",M=>{var ma,ba,Aa;M.preventDefault();const ea=((ma=y.querySelector('input[name="import-mode"]:checked'))==null?void 0:ma.value)||"MERGE",ya=(Aa=(ba=y.querySelector("#import-json-textarea"))==null?void 0:ba.value)==null?void 0:Aa.trim();I(ya,ea)}),y.querySelectorAll(".btn-add-from-catalog").forEach(M=>{M.addEventListener("click",()=>{const ea=M.getAttribute("data-code");U&&U(ea)})});const F=y.querySelector(".btn-add-from-modal");F&&F.addEventListener("click",()=>{const M=F.getAttribute("data-code");U&&U(M),ka()})}}}function ot({geminiStatusInfo:l,onTestConnection:a,onSaveSettings:e,onClearKey:n}){const r=z.getApiKey(),s=z.getModel(),{status:i,error:t}=l;let o="status-unconfigured",d="🟡 Gemini: Belum diuji / konfigurasi";return i===ra.CONNECTED?(o="status-connected",d="🟢 Gemini: Tersambung"):i===ra.FAILED&&(o="status-failed",d="🔴 Gemini: Gagal"),{html:`
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
                <span>${d}</span>
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
  `,bindEvents(h){const c=h.querySelector("#setting-api-key"),f=h.querySelector("#setting-model-select"),g=h.querySelector("#btn-toggle-key-visibility"),m=h.querySelector("#btn-test-connection"),u=h.querySelector("#btn-save-settings"),k=h.querySelector("#btn-clear-key");g&&c&&g.addEventListener("click",()=>{const b=c.type==="password";c.type=b?"text":"password"}),m&&m.addEventListener("click",()=>{a&&a(c.value,f.value)}),u&&u.addEventListener("click",()=>{e&&e(c.value,f.value)}),k&&k.addEventListener("click",()=>{c.value="",n&&n()})}}}const ee={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class te{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const n=a.trim().toLowerCase(),r=n.startsWith("/")?n.slice(1):n,s=n.split(/\s+/).filter(Boolean),i=new Set(s);for(const o of s)if(ee[o])for(const d of ee[o])i.add(d.toLowerCase());const t=[];for(const o of e){if(!o||!o.code)continue;let d=0;const p=(o.code||"").toLowerCase(),h=p.startsWith("/")?p.slice(1):p,c=(o.name||"").toLowerCase(),f=(o.description||"").toLowerCase(),g=(o.category||"").toLowerCase(),m=Array.isArray(o.semanticTriggers)?o.semanticTriggers.map(k=>(k||"").toLowerCase()):[],u=(o.whenToUse||"").toLowerCase();p===n||h===r?d+=1e3:h.startsWith(r)?d+=600:h.includes(r)&&(d+=350);for(const k of m)if(k===n)d+=400;else if(k.includes(n))d+=250;else for(const b of i)if(b.length>2&&k.includes(b)){d+=100;break}if(c===n)d+=300;else if(c.includes(n))d+=200;else for(const k of i)if(k.length>2&&c.includes(k)){d+=80;break}if(f.includes(n))d+=150;else for(const k of i)if(k.length>2&&f.includes(k)){d+=60;break}g.includes(n)&&(d+=50),u.includes(n)&&(d+=40),d>0&&t.push({...o,score:d,source:"LOCAL",isOnline:!1})}return t.sort((o,d)=>d.score-o.score),this.deduplicateResultsByFunction(t)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,n=new Map;for(const s of a){if(!s||!s.code)continue;const i=s.code.toLowerCase();let t=n.get(i);if(!t){t=s.functionGroup||s.category||i;for(const[o,d]of e.entries())if(d.some(h=>(h.equivalentTo||[]).map(f=>typeof f=="string"?f.toLowerCase():"").includes(i))){t=o;break}}if(n.set(i,t),Array.isArray(s.equivalentTo))for(const o of s.equivalentTo)typeof o=="string"&&n.set(o.toLowerCase(),t);e.has(t)?e.get(t).push(s):e.set(t,[s])}const r=[];for(const[s,i]of e.entries()){if(i.length===1){r.push(i[0]);continue}i.sort((p,h)=>{if(p.preferredRepresentative&&!h.preferredRepresentative)return-1;if(!p.preferredRepresentative&&h.preferredRepresentative)return 1;if((h.score||0)!==(p.score||0))return(h.score||0)-(p.score||0);const c={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},f=c[p.status]||(p.source==="LOCAL"?3:1),g=c[h.status]||(h.source==="LOCAL"?3:1);return g!==f?g-f:(p.code||"").length-(h.code||"").length});const t=i[0],o=i.slice(1).map(p=>p.code),d=Array.from(new Set([...t.equivalentTo||[],...o]));r.push({...t,equivalentTo:d})}return r.sort((s,i)=>(i.score||0)-(s.score||0)),r}static async search(a,e=[],n=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const r=a.trim();let s=[];try{s=this.searchLocal(r,e)}catch(c){console.warn("[DictionaryService] Error pencarian lokal:",c),s=[]}let i=[],t=null;const o=s.some(c=>c.score>=600);if((s.length<4||!o)&&n)try{const c=await n.searchOnlineShorthand(r);if(c&&Array.isArray(c.results)){const f=new Set(s.map(g=>g.code.toLowerCase()));i=c.results.filter(g=>!f.has(g.code.toLowerCase()))}c&&c.message&&s.length===0&&(t=c.message)}catch(c){console.warn("[DictionaryService] Online fallback error:",c)}const p=this.deduplicateResultsByFunction([...s,...i]);let h=null;return p.length===0&&(h=t||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:r,results:p,localCount:s.length,onlineCount:i.length,notice:h}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class lt{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new ge(Ya),this.catalog=this.catalogRepo.getAll(),this.geminiService=new $e(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.selectedAspectRatio="auto",this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1},this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.colourGradingConfig={...Ca},this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=z.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.className="toast-container",document.body.appendChild(n));const r=document.createElement("div");r.className=`toast toast-${e}`,r.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,n.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(10px)",r.style.transition="all 0.3s ease",setTimeout(()=>r.remove(),300)},2800)}async runAnalysis(a,e=null){var n;if(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const r=this.uploadedImage.file?Object.assign(this.uploadedImage.file,{width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry}):{name:this.uploadedImage.name,size:this.uploadedImage.size,width:this.uploadedImage.width,height:this.uploadedImage.height,visualTelemetry:this.uploadedImage.visualTelemetry},s=this.selectedAspectRatio&&this.selectedAspectRatio!=="auto"&&this.selectedAspectRatio!=="Otomatis"?this.selectedAspectRatio:this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio||"auto",i=await this.geminiService.analyzeImageToPrompt({imageFile:r,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a,visualTelemetry:this.uploadedImage.visualTelemetry,targetAspectRatio:s,isTwoWorlds:this.activeMode==="TWO_WORLDS",twoWorldsConfig:this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null});if(i.mode=this.activeMode,this.activeMode==="TWO_WORLDS"){const t=i.twoWorldsSmartDetection||((n=i.visionData)==null?void 0:n.smartDetection)||ie(i.visionData,this.uploadedImage,this.uploadedImage.visualTelemetry,this.twoWorldsConfig);if(t){this.twoWorldsDetectedValues={...t};const o={...this.twoWorldsConfig},d=["gender","age","ethnicity","subjectStyle","environmentStyle"];for(const p of d)!this.twoWorldsManualLocks[p]&&t[p]&&(o[p]=t[p]);this.twoWorldsConfig=o,typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(i.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(i.visionData,i.installedShorthands||[],this.twoWorldsConfig),i.generatedPrompt=i.optimalPrompt)}}if(this.analysisResult=i,i.source==="GEMINI_AI")this.showToast(this.activeMode==="TWO_WORLDS"?"✅ Analisa 2 Dunia Vision AI berhasil!":"✅ Analisa Vision AI berhasil berdasarkan gambar aktual!","success");else if(i.source==="LOCAL_ENGINE_FALLBACK"){const t=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${t}, menggunakan analisis visual lokal.`,"warning")}else this.showToast(this.activeMode==="TWO_WORLDS"?"Analisa 2 dunia & pemetaan shorthand berhasil!":"Analisa gambar & pemetaan shorthand berhasil!")}catch(r){this.showToast(`Gagal menganalisis gambar: ${r.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(this.activeMode==="SHORTHAND_IMPROVE"||this.activeMode==="COLOUR_GRADING"){const r=this.activeMode==="COLOUR_GRADING";if(this.uploadedImage){this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const s=await this.geminiService.analyzeImageRepair({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,notesPrompt:a,isColourGrading:r,mode:this.activeMode,colourGradingConfig:r?this.colourGradingConfig:null,telemetry:r&&(this.uploadedImage.colorTelemetry||this.uploadedImage.visualTelemetry)||null});if(s.mode=this.activeMode,this.analysisResult=s,s.source==="GEMINI_AI")this.showToast(r?"✅ Diagnosis visual Vision AI & rekomendasi colour grading selesai!":"✅ Diagnosis visual Vision AI & rekomendasi perbaikan selesai!","success");else if(s.source==="LOCAL_ENGINE_FALLBACK"){const i=this.geminiService.lastError?` (${this.geminiService.lastError})`:"";this.showToast(`⚠️ Vision AI terkendala${i}, menggunakan diagnosis visual lokal.`,"warning")}else this.showToast(r?"Diagnosis visual & rekomendasi colour grading selesai!":"Diagnosis visual & rekomendasi perbaikan gambar selesai!")}catch(s){this.showToast(`Gagal menganalisis ${r?"colour grading":"perbaikan gambar"}: ${s.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast(r?"Silakan unggah gambar atau masukkan preferensi colour grading yang diinginkan.":"Silakan unggah gambar atau masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const s=await this.geminiService.analyzeShorthandImprove(a,e,{isColourGrading:r,mode:this.activeMode});s.mode=this.activeMode,this.analysisResult=s,this.showToast(r?"Analisa shorthand colour grading selesai!":"Analisa shorthand perbaikan selesai!")}catch(s){this.showToast(`Gagal menganalisis: ${s.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const r=await this.geminiService.analyzePrompt(a,e);this.analysisResult=r,this.showToast("Analisis prompt selesai!")}catch(r){this.showToast(`Gagal menganalisis: ${r.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.uploadedImage=null,this.selectedAspectRatio="auto",this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null,this.twoWorldsConfig={customRequest:"",gender:"Auto (Smart Detection) mengikuti gambar unggahan",age:"Auto (Smart Detection) mengikuti gambar unggahan",ethnicity:"Auto (Smart Detection)",subjectStyle:"Auto (Smart Detection)",customSubjectStyle:"",environmentStyle:"Auto (Smart Detection)"},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleTwoWorldsConfigChange(a,e=null){const n={...a},r=["gender","age","ethnicity","subjectStyle","environmentStyle"];if(e&&r.includes(e)){const s=n[e];s&&typeof s=="string"&&s.startsWith("Auto")?(this.twoWorldsManualLocks[e]=!1,this.twoWorldsDetectedValues&&this.twoWorldsDetectedValues[e]&&(n[e]=this.twoWorldsDetectedValues[e])):this.twoWorldsManualLocks[e]=!0}else for(const s of r)if(n[s]!==void 0&&n[s]!==this.twoWorldsConfig[s]){const i=n[s];i&&typeof i=="string"&&i.startsWith("Auto")?(this.twoWorldsManualLocks[s]=!1,this.twoWorldsDetectedValues&&this.twoWorldsDetectedValues[s]&&(n[s]=this.twoWorldsDetectedValues[s])):this.twoWorldsManualLocks[s]=!0}this.twoWorldsConfig={...this.twoWorldsConfig,...n},this.activeMode==="TWO_WORLDS"&&this.analysisResult&&this.analysisResult.visionData&&typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.twoWorldsConfig),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt),this.render()}handleColourGradingConfigChange(a){this.colourGradingConfig={...this.colourGradingConfig,...a},this.activeMode==="COLOUR_GRADING"&&this.analysisResult&&this.analysisResult.isColourGrading&&(this.analysisResult.colourGradingConfig=this.colourGradingConfig),this.render()}handleResetGrading(){this.colourGradingConfig={...Ca},this.render(),this.showToast("Pengaturan Colour Grading telah di-reset ke nilai default (Foto Asli).")}handleSelectBatchImage(a){this.batchGradingImages&&this.batchGradingImages[a]&&(this.activeGradingBatchIndex=a,this.uploadedImage=this.batchGradingImages[a],this.render())}handleAspectRatioChange(a){this.selectedAspectRatio=a;const e=a==="auto"||a==="Otomatis"?this.uploadedImage&&(this.uploadedImage.detectedAspectRatio||this.uploadedImage.aspectRatio)||"1:1":a;this.analysisResult&&this.analysisResult.visionData&&(this.analysisResult.visionData.aspectRatio=e,this.analysisResult.visualBreakdown&&(this.analysisResult.visualBreakdown["Aspect Ratio"]=e),typeof this.geminiService.assembleOptimalImagePrompt=="function"&&(this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,this.analysisResult.installedShorthands||[],this.activeMode==="TWO_WORLDS"?this.twoWorldsConfig:null),this.analysisResult.generatedPrompt=this.analysisResult.optimalPrompt)),a==="auto"||a==="Otomatis"?this.showToast(`📐 Rasio Aspek: Otomatis (Asli: ${e})`):this.showToast(`📐 Rasio Aspek Target: ${a} (Proporsi subjek dipertahankan)`),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a){const e=He(a);if(!e){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(e).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}async handleEnrichPrompt(){var n,r,s;const a=((n=this.analysisResult)==null?void 0:n.optimalPrompt)||"";if(!a||!a.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!!!(z.getApiKey()&&z.getApiKey().trim())||this.geminiService.status===ra.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{if(this.activeMode==="TWO_WORLDS"||((r=this.analysisResult)==null?void 0:r.mode)==="TWO_WORLDS"){this.showToast("Menyelaraskan & memperkaya prompt 2 Dunia dengan Gemini AI...","info");const t=await this.geminiService.enrichTwoWorldsPrompt({optimalPrompt:a,generatedPrompt:((s=this.analysisResult)==null?void 0:s.generatedPrompt)||"",twoWorldsConfig:this.twoWorldsConfig,analysisResult:this.analysisResult});if(t&&t.success&&t.enrichedPrompt){this.analysisResult.optimalPrompt=t.enrichedPrompt;const o=t.conflictsResolved&&t.conflictsResolved.length>0?"✨ Prompt Optimal 2 Dunia berhasil diperkaya & konflik diselaraskan!":"✨ Prompt Optimal 2 Dunia berhasil diperkaya dengan AI!";this.showToast(o,"success")}else throw new Error("Hasil pengayaan AI 2 Dunia tidak valid.")}else{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const t=await this.geminiService.enrichPrompt(a,this.analysisResult);if(t&&t.success&&t.enrichedPrompt)this.analysisResult.optimalPrompt=t.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}}catch(i){console.warn("Enrich prompt error:",i),this.showToast(`Gagal memperkaya prompt: ${i.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const n=[...e,a];this.updateInstalledShorthands(n),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const n=(this.analysisResult.installedShorthands||[]).filter(r=>r!==a);this.updateInstalledShorthands(n),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){if(this.analysisResult.installedShorthands=a,(this.analysisResult.mode==="IMAGE_TO_PROMPT"||this.analysisResult.mode==="TWO_WORLDS")&&this.analysisResult.visionData)this.analysisResult.optimalPrompt=this.geminiService.assembleOptimalImagePrompt(this.analysisResult.visionData,a,this.analysisResult.mode==="TWO_WORLDS"?this.twoWorldsConfig:null);else if(this.analysisResult.isColourGrading){if(typeof this.geminiService.assembleImageRepairPrompt=="function"){const e=this.uploadedImagesList[this.activeUploadedImageIndex],n=(e==null?void 0:e.colorTelemetry)||(e==null?void 0:e.visualTelemetry)||this.analysisResult.telemetry||null,r=this.geminiService.assembleImageRepairPrompt({...this.analysisResult,colourGradingConfig:this.colourGradingConfig,telemetry:n,installedOverrides:a});this.analysisResult.optimalPrompt=r.optimalPrompt}}else if(this.analysisResult.isImageRepair&&this.analysisResult.repairInstructions){const e=this.analysisResult.englishBasePrompt||na(this.analysisResult.repairInstructions.trim());this.analysisResult.optimalPrompt=a.length>0?`${e} ${a.join(" ")}`.trim():e}else{const e=this.analysisResult.englishBasePrompt||na(this.analysisResult.cleanText||"");this.analysisResult.optimalPrompt=a.length>0?`${e}. ${a.join(" ")}`.trim():e}if(this.analysisResult.recommendations)for(const e of this.analysisResult.recommendations)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.primaryShorthands)for(const e of this.analysisResult.primaryShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.relatedShorthands)for(const e of this.analysisResult.relatedShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.similarShorthands)for(const e of this.analysisResult.similarShorthands)e.checked=a.includes(e.code),e.active=e.checked;this.render()}handleResolveConflict(a,e){const n=this.analysisResult.conflicts.find(i=>i.id===a);if(!n)return;let r=[...this.analysisResult.installedShorthands||[]];const s=n.type==="EDIT_VS_LOCK"||n.shorthandA&&n.shorthandA.includes("lock");if(e==="use_user_edit"){r=r.filter(t=>t!==n.shorthandA);const i=s?`Kunci ${n.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${n.shorthandB}, ${n.shorthandA} dihapus.`;this.showToast(i)}else if(e==="keep_lock"){r=r.filter(t=>t!==n.shorthandB),r.includes(n.shorthandA)||r.push(n.shorthandA);const i=s?`Lock ${n.shorthandA} dipertahankan.`:`Memilih ${n.shorthandA}, ${n.shorthandB} dihapus.`;this.showToast(i)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(i=>i.id!==a),this.updateInstalledShorthands(r)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(n),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const n=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${n.count} shorthand (${e})!`),this.render()}catch(n){this.showToast(`Gagal impor: ${n.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const n=await this.geminiService.testConnection(a,e);n.success?this.showToast(n.message,"success"):this.showToast(n.message,"error"),this.render()}handleSaveSettings(a,e){z.setApiKey(a),z.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){z.clearApiKey(),this.geminiService.status=ra.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await te.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();if(!e)return;this.dictionaryState.selectedShorthands.some(r=>(typeof r=="string"?r:r.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render())}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=te.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}render(){const a=this.geminiService.getStatus(),e=Be(this.activeTab,a,r=>{this.activeTab=r,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let n=null;if(this.activeTab==="analyzer"){const s=!!(z.getApiKey()&&z.getApiKey().trim())&&this.geminiService.status!==ra.FAILED;n=nt({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:s,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,selectedAspectRatio:this.selectedAspectRatio,onAspectRatioChange:i=>this.handleAspectRatioChange(i),twoWorldsConfig:this.twoWorldsConfig,onTwoWorldsConfigChange:(i,t)=>this.handleTwoWorldsConfigChange(i,t),colourGradingConfig:this.colourGradingConfig,onColourGradingConfigChange:i=>this.handleColourGradingConfigChange(i),onResetGrading:()=>this.handleResetGrading(),batchImages:this.batchGradingImages,activeBatchIndex:this.activeGradingBatchIndex,onSelectBatchImage:i=>this.handleSelectBatchImage(i),onModeChange:i=>{this.activeMode!==i&&(this.activeMode=i,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render())},onImageSelected:(i,t)=>{this.uploadedImage=i,this.activeMode==="TWO_WORLDS"&&(this.twoWorldsManualLocks={gender:!1,age:!1,ethnicity:!1,subjectStyle:!1,environmentStyle:!1},this.twoWorldsDetectedValues=null),t&&Array.isArray(t)&&t.length>0?(this.batchGradingImages=t,this.activeGradingBatchIndex=0):i?(this.batchGradingImages=[i],this.activeGradingBatchIndex=0):(this.batchGradingImages=[],this.activeGradingBatchIndex=0),this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render(),(this.activeMode==="IMAGE_TO_PROMPT"||this.activeMode==="TWO_WORLDS")&&this.runAnalysis(this.currentPrompt)},onImageRemoved:()=>{this.uploadedImage=null,this.batchGradingImages=[],this.activeGradingBatchIndex=0,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()},onAnalyze:i=>this.runAnalysis(i),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:i=>this.handleSelectPreset(i),onCopyPrompt:i=>this.handleCopyPrompt(i),onCopyGeneratedPrompt:i=>this.handleCopyPrompt(i),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:i=>this.handleAddShorthand(i),onRemoveShorthand:i=>this.handleRemoveShorthand(i),onToggleRecommendation:i=>this.handleToggleRecommendation(i),onResolveConflict:(i,t)=>this.handleResolveConflict(i,t)})}else this.activeTab==="json-test"?n=rt({analysisResult:this.analysisResult,onCopyJson:r=>{navigator.clipboard.writeText(r),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?n=st({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:r=>{this.catalogCategory=r,this.catalogCurrentPage=1,this.render()},onSelectTarget:r=>{this.catalogTarget=r,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:r=>{this.catalogRecLevel=r,this.catalogCurrentPage=1,this.render()},onSearchChange:r=>{this.catalogSearchQuery=r,this.catalogCurrentPage=1,this.render()},onPageChange:r=>{this.catalogCurrentPage=r,this.render()},onOpenDetail:r=>{this.selectedDetailCode=r,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async r=>{await this.handleAddShorthandSubmit(r)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(r,s)=>{await this.handleImportCatalog(r,s)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:r=>{this.handleAddShorthand(r),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${r} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?n=it({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,onSearch:r=>this.handleDictionarySearch(r),onAddShorthand:r=>this.handleDictionaryAddShorthand(r),onRemoveShorthand:r=>this.handleDictionaryRemoveShorthand(r),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy()}):this.activeTab==="settings"&&(n=ot({geminiStatusInfo:a,onTestConnection:(r,s)=>this.handleTestConnection(r,s),onSaveSettings:(r,s)=>this.handleSaveSettings(r,s),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
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
    `,e.bindEvents(this.appRoot),n.bindEvents&&n.bindEvents(this.appRoot)}}function Fa(){if(window.__PSA_APP__)return;document.getElementById("app")&&(window.__PSA_APP__=new lt,window.__PSA_APP__.render())}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fa):Fa();window.addEventListener("load",Fa);
//# sourceMappingURL=index-CYGv-SuR.js.map
