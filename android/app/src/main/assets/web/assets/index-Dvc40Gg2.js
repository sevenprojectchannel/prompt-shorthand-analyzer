(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ha={FACE_PRESERVATION:"FACE_PRESERVATION",HAIR_PRESERVATION:"HAIR_PRESERVATION",BACKGROUND_PRESERVATION:"BACKGROUND_PRESERVATION",OUTFIT_PRESERVATION:"OUTFIT_PRESERVATION",BODY_PRESERVATION:"BODY_PRESERVATION",HEADWEAR_PRESERVATION:"HEADWEAR_PRESERVATION",FACE_RETOUCH:"FACE_RETOUCH",FACE_SWAP:"FACE_SWAP",FACE_EXPRESSION:"FACE_EXPRESSION",HAIR_EDIT:"HAIR_EDIT",HAIR_COLOR:"HAIR_COLOR",NATURAL_HAIR_RECONSTRUCTION:"NATURAL_HAIR_RECONSTRUCTION",HEADWEAR_REMOVAL:"HEADWEAR_REMOVAL",HEADWEAR_ADD:"HEADWEAR_ADD",OUTFIT_EDIT:"OUTFIT_EDIT",OUTFIT_REMOVE:"OUTFIT_REMOVE",OUTFIT_COLOR:"OUTFIT_COLOR",FRAMING_FULL_BODY:"FRAMING_FULL_BODY",FRAMING_CLOSEUP:"FRAMING_CLOSEUP",BODY_POSE_EDIT:"BODY_POSE_EDIT",BACKGROUND_REMOVAL:"BACKGROUND_REMOVAL",BACKGROUND_REPLACEMENT:"BACKGROUND_REPLACEMENT",BACKGROUND_BLUR:"BACKGROUND_BLUR",BACKGROUND_CLEAN:"BACKGROUND_CLEAN",SCENE_REPLACEMENT:"SCENE_REPLACEMENT",LIGHTING_ENHANCEMENT:"LIGHTING_ENHANCEMENT",LIGHTING_STUDIO:"LIGHTING_STUDIO",LIGHTING_GOLDENHOUR:"LIGHTING_GOLDENHOUR",IMAGE_SHARPENING:"IMAGE_SHARPENING",IMAGE_DENOISE:"IMAGE_DENOISE",COLOR_WARM_TONE:"COLOR_WARM_TONE",COLOR_COOL_TONE:"COLOR_COOL_TONE",ASPECT_RATIO_VERTICAL:"ASPECT_RATIO_VERTICAL",ASPECT_RATIO_LANDSCAPE:"ASPECT_RATIO_LANDSCAPE",ASPECT_RATIO_SQUARE:"ASPECT_RATIO_SQUARE",ASPECT_RATIO_PORTRAIT:"ASPECT_RATIO_PORTRAIT",ASPECT_RATIO_ULTRAWIDE:"ASPECT_RATIO_ULTRAWIDE",TRANSPARENCY_ALPHA:"TRANSPARENCY_ALPHA",OBJECT_REMOVAL:"OBJECT_REMOVAL",OBJECT_ADD:"OBJECT_ADD",STYLE_CINEMATIC:"STYLE_CINEMATIC",STYLE_VINTAGE:"STYLE_VINTAGE",STYLE_CYBERPUNK:"STYLE_CYBERPUNK",CAMERA_RAW:"CAMERA_RAW",CAMERA_BOKEH:"CAMERA_BOKEH",CANVAS_OUTPAINT:"CANVAS_OUTPAINT",CAMERA_ANGLE_EYELEVEL:"CAMERA_ANGLE_EYELEVEL",LIGHTING_DAYLIGHT:"LIGHTING_DAYLIGHT",SCENE_OUTDOOR:"SCENE_OUTDOOR",POSE_SEATED:"POSE_SEATED",EXPRESSION_CALM:"EXPRESSION_CALM",STYLE_REALISTIC:"STYLE_REALISTIC",CAMERA_DEEPFOCUS:"CAMERA_DEEPFOCUS",COMPOSITION_RULEOFTHIRDS:"COMPOSITION_RULEOFTHIRDS",LENS_WIDEANGLE:"LENS_WIDEANGLE"},ia={LOCK_PRESERVATION:{id:"LOCK_PRESERVATION",label:"Lock & Preservation",code:"A",color:"#3b82f6",description:"Mengunci identitas, wajah, rambut, latar, busana, atau anatomi agar terlindungi 100% dari perubahan."},FACE_IDENTITY:{id:"FACE_IDENTITY",label:"Face / Identity",code:"B",color:"#60a5fa",description:"Modifikasi fitur wajah, ekspresi emosi, dan karakteristik muka."},HAIR:{id:"HAIR",label:"Hair",code:"C",color:"#f59e0b",description:"Modifikasi gaya rambut, potongan, tekstur helai, dan pewarnaan rambut."},HEADWEAR:{id:"HEADWEAR",label:"Headwear",code:"D",color:"#8b5cf6",description:"Pelepasan, penambahan, atau modifikasi hijab, topi, dan aksesori kepala."},OUTFIT:{id:"OUTFIT",label:"Outfit / Clothing",code:"E",color:"#ec4899",description:"Penggantian busana, tekstur pakaian, dan spesifikasi pakaian baru."},BODY_POSE:{id:"BODY_POSE",label:"Body / Pose",code:"F",color:"#10b981",description:"Pengaturan proporsi anatomi, gestur, skala framing tubuh (full body / closeup)."},BACKGROUND:{id:"BACKGROUND",label:"Background",code:"G",color:"#14b8a6",description:"Penggantian lokasi, manipulasi scene, dan studio backdrop."},LIGHTING:{id:"LIGHTING",label:"Lighting",code:"H",color:"#facc15",description:"Tata cahaya, dynamic range, golden hour, softbox, dan pencahayaan studio."},IMAGE_QUALITY:{id:"IMAGE_QUALITY",label:"Image Quality",code:"I",color:"#06b6d4",description:"Ketajaman mikrokontras, reduksi noise digital, dan kejernihan tekstur."},COLOR_TONE:{id:"COLOR_TONE",label:"Color / Tone",code:"J",color:"#a855f7",description:"Grading warna estetik, tone hangat/dingin, dan kurva warna profesional."},CANVAS_RATIO:{id:"CANVAS_RATIO",label:"Canvas / Aspect Ratio",code:"K",color:"#f97316",description:"Dimensi kanvas dan aspect ratio gambar (9:16, 16:9, 1:1, 4:5, 21:9)."},TRANSPARENCY:{id:"TRANSPARENCY",label:"Transparency / Alpha",code:"L",color:"#64748b",description:"Penghapusan background menjadi transparan dan isolasi subjek matte alpha."},OBJECT_EDITING:{id:"OBJECT_EDITING",label:"Object Editing",code:"M",color:"#e11d48",description:"Penghapusan objek yang mengganggu (inpainting) atau penambahan prop tertentu."},STYLE_EFFECT:{id:"STYLE_EFFECT",label:"Style / Visual Effect",code:"N",color:"#d946ef",description:"Gaya sinematik dramatis, nuansa vintage analog, dan palet futuristik."},CAMERA_PHOTO:{id:"CAMERA_PHOTO",label:"Camera / Photographic Character",code:"O",color:"#0284c7",description:"Karakteristik optik kamera nyata, lensa wide/macro, bokeh f/1.4, dan tekstur sensor RAW."}},ga=[{code:"/facelock",name:"Face Lock & Identity Preservation",category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",description:"Mengunci struktur wajah, mata, hidung, dan ekspresi asli subjek agar identitas tetap konsisten 100% tanpa distorsi saat melakukan modifikasi visual lain.",semanticTriggers:["jangan ubah wajah","pertahankan wajah","wajah tetap sama","jangan mengubah identitas","kunci muka","wajah asli","wajah harus tetap sama","preserve face","keep face","keep face unchanged","same face","preserve identity"],negativeTriggers:["ubah wajah","ganti wajah","edit wajah","makeover wajah","ganti muka"],conflicts:["/faceedit","/facechange","/expression"],compatibleWith:["/outfit","/bgreplace","/bgremove","/enhance","/hairlock","/ar 9:16","/ar 16:9","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat mengganti pakaian, latar belakang, pose, atau rasio kanvas dengan instruksi tegas bahwa wajah tidak boleh berubah.",whenNotToUse:"Jangan gunakan jika user secara eksplisit meminta mengedit ekspresi, merias wajah, atau mengubah identitas subjek.",functionGroup:"FACE_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/face-preserve","/identity-lock"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat pakaian diganti."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Melindungi fitur wajah saat penutup kepala dilepas."},{code:"/hairlock",relationType:"COMPATIBLE",reason:"Dapat dipadukan untuk menjaga wajah dan rambut sekaligus."}]},{code:"/hairlock",name:"Hair Structure & Color Lock",category:"LOCK_PRESERVATION",target:"HAIR",description:"Menjaga gaya rambut, tekstur helai rambut, dan warna rambut asli agar tidak ikut berubah saat mengganti pakaian atau latar.",semanticTriggers:["pertahankan rambut","pertahankan rambut asli","jangan ubah rambut","rambut asli","rambut tetap sama","kunci rambut","keep hair","preserve hair","same haircut","hairlock"],negativeTriggers:["ubah gaya rambut","ganti rambut","potong rambut","botak","cukur botak","cat rambut","ubah warna rambut"],conflicts:["/hairchange","/haircolor"],compatibleWith:["/facelock","/outfit","/bgremove","/bgreplace","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta modifikasi tubuh atau pakaian namun mensyaratkan rambut asli tetap utuh.",whenNotToUse:"Jangan gunakan jika user meminta model rambut baru, potong rambut, atau warna rambut lain.",functionGroup:"HAIR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hair-preserve","/lock-hair"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika perubahan pakaian dilakukan."},{code:"/headwear-remove",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut asli setelah penutup kepala dibuka."}]},{code:"/backgroundlock",name:"Background Environment Lock",category:"LOCK_PRESERVATION",target:"BACKGROUND",description:"Mengunci lingkungan, interior/eksterior latar belakang, dan pencahayaan ambien agar tidak termodifikasi saat subjek diperbaiki.",semanticTriggers:["jangan ubah latar","pertahankan background","latar asli","kunci background","latar tetap sama","pertahankan latar belakang","keep background","same backdrop","preserve background"],negativeTriggers:["hapus background","ganti background","hapus latar","ganti latar","latar transparan","latar baru","gunakan latar baru","pindah ke studio"],conflicts:["/bgremove","/bgreplace","/bgblur","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika subjek ingin diedit (misal outfit atau pencahayaan) tanpa mengganggu lingkungan ruangan atau tempat foto diambil.",whenNotToUse:"Jangan gunakan jika ada permintaan penghapusan background, penggantian lokasi, atau isolasi transparan.",functionGroup:"BACKGROUND_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bg-lock","/lock-background"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga lingkungan latar belakang tetap utuh saat pakaian diganti."},{code:"/facelock",relationType:"COMPATIBLE",reason:"Kompatibel penuh dengan penguncian wajah."}]},{code:"/outfitlock",name:"Outfit & Clothing Lock",category:"LOCK_PRESERVATION",target:"OUTFIT",description:"Mempertahankan busana, warna pakaian, dan tekstur kain asli subjek agar tidak berubah.",semanticTriggers:["jangan ubah baju","jangan mengubah pakaian","pertahankan pakaian","pertahankan baju","baju asli","kunci outfit","baju tetap sama","keep outfit","same clothes","preserve clothing"],negativeTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru"],conflicts:["/outfit","/outfit-remove","/outfit-color"],compatibleWith:["/facelock","/backgroundlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika memperbaiki foto, wajah, atau latar namun pakaian subjek harus tetap sama persis.",whenNotToUse:"Jangan gunakan jika user meminta mengganti baju atau gaya busana.",functionGroup:"OUTFIT_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clothes-lock","/lock-outfit"],relationships:[{code:"/enhance",relationType:"COMPATIBLE",reason:"Pencahayaan ditingkatkan tanpa mengubah tekstur atau warna busana asli."}]},{code:"/bodylock",name:"Body Anatomy & Pose Lock",category:"LOCK_PRESERVATION",target:"BODY_POSE",description:"Mempertahankan proporsi tubuh, pose subjek, dan gestur asli tanpa perubahan bentuk anatomi.",semanticTriggers:["jangan ubah tubuh","pertahankan pose","postur asli","kunci pose","anatomi tetap","keep body","same pose","preserve anatomy"],negativeTriggers:["ubah pose","ganti gestur","langsingkan","tubuh berotot","ganti posisi"],conflicts:["/posechange"],compatibleWith:["/facelock","/outfit","/bgremove","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menjaga proporsi tubuh dan pose natural subjek saat mengganti busana.",whenNotToUse:"Jangan gunakan jika user secara spesifik meminta pose atau aksi gerak baru.",functionGroup:"BODY_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/pose-lock","/lock-body"],relationships:[{code:"/outfit",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat busana diganti."}]},{code:"/headwearlock",name:"Headwear & Hijab Preservation Lock",category:"LOCK_PRESERVATION",target:"HEADWEAR",description:"Mengunci hijab, kerudung, topi, atau aksesori kepala asli subjek agar tidak terlepas atau termodifikasi.",semanticTriggers:["pertahankan hijab","jangan ubah hijab","kunci hijab","hijab asli","pertahankan topi","keep hijab","preserve headwear"],negativeTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user mensyaratkan hijab/penutup kepala tetap dikenakan apa adanya.",whenNotToUse:"Jangan gunakan jika user meminta melepas atau menghapus hijab.",functionGroup:"HEADWEAR_PRESERVATION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hijab-lock","/lock-headwear"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Menjaga penutup kepala dan wajah tetap utuh bersamaan."}]},{code:"/faceedit",name:"Facial Feature Retouching & Editing",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Memodifikasi atau merias karakteristik fitur wajah, make-up, atau perbaikan estetika wajah.",semanticTriggers:["ubah wajah","edit wajah","makeover wajah","percantik wajah","rias wajah","edit muka","retouch face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli","kunci muka"],conflicts:["/facelock"],compatibleWith:["/outfit","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat ada instruksi khusus untuk mempercantik atau merias wajah.",whenNotToUse:"Jangan gunakan saat ada permintaan penguncian identitas atau /facelock.",functionGroup:"FACE_RETOUCH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retouch-face","/face-enhance"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Meningkatkan kualitas visual keseluruhan bersamaan dengan retouching wajah."}]},{code:"/facechange",name:"Face & Subject Identity Swapping",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menggantikan seluruh struktur wajah dengan referensi karakter atau orang yang berbeda.",semanticTriggers:["ganti wajah","tukar wajah","ganti muka","swap face","replace face"],negativeTriggers:["jangan ubah wajah","pertahankan wajah","wajah asli"],conflicts:["/facelock"],compatibleWith:["/outfit","/bgreplace"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk face swapping atau penggantian identitas wajah.",whenNotToUse:"Dilarang digunakan jika ada instruksi preservasi wajah asli.",functionGroup:"FACE_SWAP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/faceswap","/swap-face"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone pencahayaan wajah pengganti."}]},{code:"/expression",name:"Facial Expression & Mood Styling",category:"FACE_IDENTITY",target:"FACE_IDENTITY",description:"Menyesuaikan ekspresi emosi wajah (senyum, serius, percaya diri) tanpa mengubah fitur identitas dasar.",semanticTriggers:["buat tersenyum","ubah ekspresi","tampak tersenyum","ekspresi percaya diri","smile expression","happy face"],negativeTriggers:["pertahankan ekspresi","jangan ubah ekspresi"],conflicts:["/facelock"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin subjek tampak tersenyum atau berekspresi ramah.",whenNotToUse:"Jangan gunakan jika wajah subjek dikunci mati termasuk ekspresinya.",functionGroup:"FACE_EXPRESSION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-expression","/facial-expression"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Ekspresi diubah namun identitas tetap terhubung."}]},{code:"/hairchange",name:"Hairstyle & Cut Modification",category:"HAIR",target:"HAIR",description:"Mengubah gaya potongan rambut, model rambut pendek/panjang, atau memangkas botak.",semanticTriggers:["ubah gaya rambut","ganti rambut","potong rambut","ganti model rambut","gaya rambut botak","cukur botak","rambut pendek","change hairstyle"],negativeTriggers:["pertahankan rambut asli","jangan ubah rambut","rambut asli"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user meminta gaya rambut baru atau potongan rambut spesifik.",whenNotToUse:"Jangan gunakan jika rambut asli diminta dipertahankan.",functionGroup:"HAIR_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-hairstyle","/hair-style"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah gaya rambut dengan wajah tetap terlindungi."}]},{code:"/haircolor",name:"Hair Color Tinting & Highlights",category:"HAIR",target:"HAIR",description:"Mengubah warna rambut subjek (misal: pirang, merah, cokelat) dengan kilau pantulan alami.",semanticTriggers:["cat rambut","ubah warna rambut","rambut merah","rambut pirang","rambut hitam pekat","dye hair","change hair color"],negativeTriggers:["pertahankan warna rambut","rambut asli","jangan ubah rambut"],conflicts:["/hairlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk mewarnai rambut subjek.",whenNotToUse:"Jangan gunakan jika warna rambut asli subjek dikunci.",functionGroup:"HAIR_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/dye-hair","/hair-dye"],relationships:[{code:"/hairlock",relationType:"CONTEXTUAL",reason:"Dapat mengganti warna tanpa mengubah struktur potongan rambut."}]},{code:"/naturalhair",name:"Natural Hair Texture & Volume Reconstruction",category:"HAIR",target:"HAIR",functionGroup:"NATURAL_HAIR_RECONSTRUCTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/authentic-hair","/real-hair"],description:"Merekonstruksi struktur helai rambut alami dan ketebalan natural yang terbuka saat hijab atau penutup kepala dilepas.",semanticTriggers:["tampilkan rambut natural","rambut natural","rekonstruksi rambut","rambut alami","natural hair"],negativeTriggers:["pertahankan hijab","rambut palsu","cat rambut"],conflicts:["/headwearlock"],compatibleWith:["/headwear-remove","/facelock","/enhance","/sharpen"],relationships:[{code:"/headwear-remove",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada helai rambut yang baru terbuka."}],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika membuka penutup kepala untuk memastikan helai rambut yang tampak adalah rambut alami subjek.",whenNotToUse:"Jangan gunakan jika hijab/penutup kepala tetap dikenakan."},{code:"/headwear-remove",name:"Headwear / Hijab Removal & Reconstruction",category:"HEADWEAR",target:"HEADWEAR",description:"Melepaskan atau menghapus hijab, kerudung, topi, atau penutup kepala sambil merekonstruksi rambut alami dan garis leher secara anatomis.",semanticTriggers:["hapus hijab","lepas hijab","buka hijab","tanpa hijab","lepaskan hijab","lepaskan penutup kepala","hapus penutup kepala","hapus topi","remove hijab","remove headwear","no hijab"],negativeTriggers:["pertahankan hijab","jangan ubah hijab","pakai hijab"],conflicts:["/headwearlock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada instruksi pelepasan atau penghapusan penutup kepala / hijab.",whenNotToUse:"Jangan gunakan jika penutup kepala diminta dipertahankan.",functionGroup:"HEADWEAR_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-hijab","/remove-head-cover","/take-off-headwear"],relationships:[{code:"/naturalhair",relationType:"REVEALED_BY_REMOVAL",reason:"Merekonstruksi struktur rambut alami yang terbuka saat penutup kepala dibuka."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten ketika penutup kepala dibuka."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat penutup kepala dilepas."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menajamkan helai rambut yang direkonstruksi."}]},{code:"/headwear-add",name:"Headwear & Hat Addition",category:"HEADWEAR",target:"HEADWEAR",description:"Menambahkan aksesori kepala seperti topi fedora, beanie, cap, atau bando ke kepala subjek.",semanticTriggers:["pakai topi","tambah topi","kenakan topi","add hat","wear cap"],negativeTriggers:["tanpa topi","lepas topi"],conflicts:["/headwear-remove"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta subjek mengenakan topi atau aksesori kepala.",whenNotToUse:"Jangan gunakan saat melepas penutup kepala.",functionGroup:"HEADWEAR_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/add-hat","/wear-headwear"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menambahkan topi dengan wajah tetap terkunci."}]},{code:"/outfit",name:"Selective Outfit Replacement",category:"OUTFIT",target:"OUTFIT",description:"Mengganti pakaian subjek dengan spesifikasi busana baru secara presisi dengan tetap menjaga anatomi tubuh dan lipatan kain natural.",semanticTriggers:["ganti baju","ubah pakaian","ganti outfit","pakai tanktop","pakai kemeja","baju baru","ganti busana","ganti baju menjadi tanktop","change clothes","change outfit","wear tanktop"],negativeTriggers:["jangan ubah baju","pertahankan pakaian","baju asli","kunci outfit","jangan mengubah pakaian"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/hairlock","/enhance","/ar 9:16"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user menginstruksikan perubahan pakaian atau gaya busana subjek.",whenNotToUse:"Jangan gunakan jika ada perintah eksplisit untuk mempertahankan pakaian asli.",functionGroup:"OUTFIT_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-clothes","/change-outfit","/wear-clothes"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah saat mengganti pakaian subjek."},{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{code:"/hairlock",relationType:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{code:"/posechange",relationType:"CONTEXTUAL",reason:"Menyesuaikan pose agar selaras dengan pakaian baru."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas detail lipatan kain."}]},{code:"/outfit-remove",name:"Outerwear Removal / Minimalist Layering",category:"OUTFIT",target:"OUTFIT",description:"Melepaskan jaket, mantel, atau lapisan pakaian luar untuk menampilkan pakaian di lapisan dalamnya.",semanticTriggers:["lepas jaket","buka mantel","tanpa jaket","remove jacket","take off coat"],negativeTriggers:["pertahankan jaket","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika user ingin melepas outer atau jaket subjek.",whenNotToUse:"Jangan gunakan jika pakaian luar dikunci.",functionGroup:"OUTFIT_REMOVE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-jacket","/take-off-outerwear"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Menjaga siluet tubuh saat outerwear dilepas."}]},{code:"/outfit-color",name:"Fabric & Outfit Color Adjustment",category:"OUTFIT",target:"OUTFIT",description:"Mengubah warna pakaian tanpa mengubah bentuk atau model pakaian yang dikenakan.",semanticTriggers:["ubah warna baju","ganti warna pakaian","baju warna hitam","baju warna putih","change outfit color"],negativeTriggers:["pertahankan warna baju","kunci outfit"],conflicts:["/outfitlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan jika user hanya ingin mengganti warna kain baju tanpa merombak potongannya.",whenNotToUse:"Jangan gunakan jika seluruh pakaian dirombak total.",functionGroup:"OUTFIT_COLOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/recolor-outfit","/change-clothes-color"],relationships:[{code:"/outfitlock",relationType:"CONTEXTUAL",reason:"Mengubah warna kain dengan pola potongan pakaian tetap konsisten."}]},{code:"/fullbody",name:"Full Body Framing & Shot Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Memperluas framing gambar untuk menampilkan postur subjek secara penuh dari kepala hingga ujung kaki (full body framing).",semanticTriggers:["tampilkan full body","seluruh tubuh","tampak badan penuh","badan penuh","full body shot","head to toe","full length"],negativeTriggers:["close up","zoom wajah","setengah badan","portrait crop"],conflicts:["/closeup"],compatibleWith:["/ar 9:16","/outfit","/bodylock","/facelock"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user ingin melihat seluruh tubuh subjek termasuk sepatu dan ujung pakaian.",whenNotToUse:"Jangan gunakan jika user meminta fokus foto wajah atau close-up.",functionGroup:"FRAMING_FULL_BODY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expand-fullbody","/head-to-toe"],relationships:[{code:"/bodylock",relationType:"PRESERVATION_RELATED",reason:"Memastikan proporsi kepala hingga kaki seimbang saat framing diperluas."}]},{code:"/closeup",name:"Tight Close-Up Portrait Framing",category:"BODY_POSE",target:"BODY_POSE",description:"Memusatkan framing kamera secara dekat ke area wajah dan bahu subjek.",semanticTriggers:["close up","zoom wajah","fokus wajah","portrait close up","tight shot"],negativeTriggers:["full body","seluruh tubuh"],conflicts:["/fullbody"],compatibleWith:["/facelock","/sharpen","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto profil atau potret fokus detail wajah.",whenNotToUse:"Jangan gunakan saat meminta tampilan seluruh badan.",functionGroup:"FRAMING_CLOSEUP",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/portrait-closeup","/tight-framing"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menampilkan detail wajah dekat dengan identitas asli."},{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertajam mikrokontras pori-pori dan mata."}]},{code:"/posechange",name:"Dynamic Posture & Gesture Modification",category:"BODY_POSE",target:"BODY_POSE",description:"Menyetel pose tubuh baru seperti berdiri tegak, duduk santai, atau melangkah.",semanticTriggers:["ubah pose","ganti pose","pose berdiri","pose duduk","change pose"],negativeTriggers:["pertahankan pose","jangan ubah tubuh","pose asli"],conflicts:["/bodylock"],compatibleWith:["/outfit","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika ada instruksi spesifik untuk memodifikasi pose subjek.",whenNotToUse:"Jangan gunakan jika postur asli diminta dipertahankan.",functionGroup:"BODY_POSE_EDIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/change-pose","/adjust-gesture"],relationships:[{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengubah aksi tubuh tanpa merusak wajah."}]},{code:"/bodyvoluptuous",name:"Natural Voluptuous Body Shape",category:"BODY_POSE",target:"BODY_POSE",description:"Membentuk proporsi tubuh montok, berisi, dan berlekuk secara natural dan realistis.",semanticTriggers:["montok","tubuh montok","badan montok","berisi","tubuh berisi","badan berisi","body voluptuous","voluptuous body","curvy natural","montok natural","tubuh montok natural","montok dan berisi"],negativeTriggers:["tubuh kurus","skinny","slim","langsing","badan kurus","pertahankan tubuh","jangan ubah tubuh"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/curvy","/fullfigured","/voluptuous"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta bentuk tubuh montok atau berisi secara proporsional dan natural.",whenNotToUse:"Jangan gunakan jika instruksi meminta tubuh langsing, kurus, atau postur netral.",functionGroup:"BODY_SHAPE_VOLUPTUOUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/voluptuousbody","/natural-voluptuous"],relationships:[{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif siluet tubuh berlekuk feminin."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi dengan proporsi penuh."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif montok/berisi dengan lekuk yang lebih menonjol."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat proporsi tubuh diubah."}]},{code:"/curvy",name:"Curvy Body Silhouette",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berlekuk feminin dengan lekukan pinggang dan pinggul proporsional.",semanticTriggers:["curvy","tubuh berlekuk","berlekuk","siluet berlekuk","hourglass","lekuk tubuh"],negativeTriggers:["tubuh lurus","straight body","boyish"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/bodyvoluptuous"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi menginginkan lekukan tubuh yang tegas dan feminin (hourglass).",whenNotToUse:"Jangan gunakan jika tidak menginginkan penonjolan lekuk tubuh.",functionGroup:"BODY_SHAPE_CURVY",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hourglass","/curvaceous"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif bentuk tubuh montok natural."},{code:"/voluptuous",relationType:"ALTERNATIVE",reason:"Alternatif lekuk tubuh yang lebih menonjol."}]},{code:"/fullfigured",name:"Full-Figured Proportions",category:"BODY_POSE",target:"BODY_POSE",description:"Tubuh berisi dengan proporsi penuh yang padat dan seimbang.",semanticTriggers:["fullfigured","full figured","proporsi penuh","tubuh padat berisi"],negativeTriggers:["petite","kecil","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta proporsi tubuh yang lebih berisi dan berisi penuh.",whenNotToUse:"Jangan gunakan untuk proporsi tubuh standar atau langsing.",functionGroup:"BODY_SHAPE_FULLFIGURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/full-figured"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/plussize",relationType:"ALTERNATIVE",reason:"Alternatif ukuran tubuh plus-size."}]},{code:"/plussize",name:"Plus-Size Body Scale",category:"BODY_POSE",target:"BODY_POSE",description:"Menampilkan ukuran tubuh plus-size dengan proporsi realistis.",semanticTriggers:["plus size","plussize","ukuran plus-size","plus-size","chubby","tubuh gemuk berisi"],negativeTriggers:["skinny","kurus","langsing"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta skala tubuh plus-size secara khusus.",whenNotToUse:"Jangan gunakan jika instruksi hanya meminta sedikit lekuk.",functionGroup:"BODY_SHAPE_PLUSSIZE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/plus-size"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/fullfigured",relationType:"ALTERNATIVE",reason:"Alternatif tubuh berisi penuh."}]},{code:"/voluptuous",name:"Voluptuous Prominent Curves",category:"BODY_POSE",target:"BODY_POSE",description:"Montok dan berisi dengan lekukan tubuh yang lebih menonjol.",semanticTriggers:["voluptuous","voluptuous body","voluptuous curves","lekuk menonjol","lekukan menonjol","lekuk dramatis","buxom"],negativeTriggers:["flat","rata","kurus"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat instruksi meminta lekuk tubuh montok yang lebih dramatis dan menonjol.",whenNotToUse:"Jangan gunakan jika menginginkan lekuk tubuh yang halus/natural.",functionGroup:"BODY_SHAPE_VOLUPTUOUS_PROMINENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/heavy-curves"],relationships:[{code:"/bodyvoluptuous",relationType:"ALTERNATIVE",reason:"Alternatif tubuh montok natural."},{code:"/curvy",relationType:"ALTERNATIVE",reason:"Alternatif lekuk feminin standar."}]},{code:"/handperfect",name:"Perfect Natural Hands & Fingers",category:"BODY_POSE",target:"BODY_POSE",description:"Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural, simetris, dan proporsional.",semanticTriggers:["anatomi tangan natural","tangan natural","jari sempurna","tangan sempurna","perfect hands","natural hands","anatomi tangan","tangan","jari","hand anatomy","proporsi tangan","bentuk tangan"],negativeTriggers:["sembunyikan tangan","tanpa tangan","tangan di kantong"],conflicts:["/bodylock"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen","/hands","/handanatomy"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan tangan dan jari subjek memiliki anatomi sempurna tanpa distorsi jari berlebih.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat dalam komposisi frame gambar.",functionGroup:"HAND_ANATOMY_PERFECT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-hands","/natural-hands"],relationships:[{code:"/hands",relationType:"ALTERNATIVE",reason:"Alternatif fokus komposisi pada tangan."},{code:"/handanatomy",relationType:"ALTERNATIVE",reason:"Alternatif anatomi tangan natural."},{code:"/fingerperfect",relationType:"ALTERNATIVE",reason:"Alternatif fokus kesempurnaan jari."},{code:"/handdetail",relationType:"ALTERNATIVE",reason:"Alternatif detail tangan dan jari."},{code:"/handnatural",relationType:"ALTERNATIVE",reason:"Alternatif tangan natural dan proporsional."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap konsisten saat menyempurnakan detail tangan."}]},{code:"/hands",name:"Hands Framing & Pose Focus",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada komposisi gestur tangan dan posisi tangan dalam frame.",semanticTriggers:["fokus pada tangan","fokus tangan","posisi tangan","gestur tangan","hands focus"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat gestur tangan menjadi elemen fokus utama dalam gambar.",whenNotToUse:"Jangan gunakan jika tangan tidak tampak di frame.",functionGroup:"HAND_POSE_FOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-focus"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handanatomy",name:"Natural Hand Anatomy Structure",category:"BODY_POSE",target:"BODY_POSE",description:"Anatomi tangan dan persendian tulang yang natural dan proporsional.",semanticTriggers:["anatomi tangan","struktur tangan","sendi tangan","hand anatomy"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memperbaiki struktur sendi dan anatomi tangan.",whenNotToUse:"Jangan gunakan jika tangan tidak terlihat.",functionGroup:"HAND_ANATOMY_STRUCTURE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-anatomy"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/fingerperfect",name:"Detailed Finger Perfection",category:"BODY_POSE",target:"BODY_POSE",description:"Fokus pada kesempurnaan lima jari tangan tanpa peleburan atau duplikasi.",semanticTriggers:["fokus kesempurnaan jari","kesempurnaan jari","lima jari sempurna","detail jari","finger perfect"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan ketika jari tangan mengalami artefak atau duplikasi.",whenNotToUse:"Jangan gunakan jika jari tidak terlihat jelas.",functionGroup:"FINGER_PERFECTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/perfect-fingers"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handdetail",name:"Hand & Finger Texture Detail",category:"BODY_POSE",target:"BODY_POSE",description:"Detail tekstur tangan, kuku, garis telapak, dan pori-pori kulit tangan.",semanticTriggers:["detail tangan dan jari","detail tangan","tekstur tangan","kuku tangan","hand detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/sharpen"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk close-up tangan yang membutuhkan mikrotekstur realistis.",whenNotToUse:"Jangan gunakan untuk foto subjek jarak jauh.",functionGroup:"HAND_TEXTURE_DETAIL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/hand-texture"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/handnatural",name:"Proportional Natural Hands",category:"BODY_POSE",target:"BODY_POSE",description:"Tangan natural dan proporsional sesuai postur dan ukuran tubuh subjek.",semanticTriggers:["tangan natural dan proporsional","tangan natural","proporsional tangan","natural hand proportions"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/handperfect","/enhance"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk memastikan ukuran tangan tidak terlalu besar atau kecil dibanding tubuh.",whenNotToUse:"Jangan gunakan jika tidak ada subjek manusia.",functionGroup:"HAND_PROPORTIONAL_NATURAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/natural-hand-scale"],relationships:[{code:"/handperfect",relationType:"ALTERNATIVE",reason:"Rekomendasi utama tangan dan jari sempurna natural."}]},{code:"/bgreplace",name:"Background Scene Replacement",category:"BACKGROUND",target:"BACKGROUND",description:"Mengganti latar belakang dengan pemandangan, studio, atau lokasi baru disertai harmonisasi bayangan dan cahaya subjek.",semanticTriggers:["ganti background","ganti latar belakang","gunakan latar baru","latar baru","pindah ke studio","latar pantai","pemandangan baru","change background","new backdrop","replace background"],negativeTriggers:["pertahankan background","jangan ubah latar","latar asli","latar transparan","hapus latar"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika user menginstruksikan perubahan atau penggantian latar belakang ke suasana baru.",whenNotToUse:"Jangan gunakan jika latar belakang asli dikunci atau jika diminta transparan.",functionGroup:"BACKGROUND_REPLACEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/replace-background","/change-bg","/latar-baru"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan latar baru."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar pemandangan baru."},{code:"/backgroundlock",relationType:"PRESERVATION_RELATED",reason:"Alternatif pembatalan penggantian latar."}]},{code:"/bgblur",name:"Background Defocus & Depth Blur",category:"BACKGROUND",target:"BACKGROUND",description:"Membuat latar belakang menjadi buram halus (depth of field) agar subjek di depan lebih menonjol.",semanticTriggers:["buramkan background","latar belakang blur","defocus background","blur latar"],negativeTriggers:["hapus latar","latar transparan"],conflicts:["/bgremove","/backgroundlock"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto portrait dengan efek latar belakang buram profesional.",whenNotToUse:"Jangan gunakan saat latar belakang dihapus transparan.",functionGroup:"BACKGROUND_BLUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/blur-background","/depth-blur"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Subjek tetap fokus tajam di depan latar kabur."}]},{code:"/studiobg",name:"Clean Studio Cyclorama Backdrop",category:"BACKGROUND",target:"BACKGROUND",description:"Mengubah latar belakang menjadi studio foto profesional bersih dengan gradasi abu-abu atau putih solid.",semanticTriggers:["latar studio","studio cyclorama","background polos","latar putih studio"],negativeTriggers:["pertahankan background","latar pemandangan"],conflicts:["/backgroundlock","/bgremove"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk foto produk atau foto profil studio profesional.",whenNotToUse:"Jangan gunakan jika latar belakang asli dipertahankan.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/studio-background","/studio-backdrop"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan studio dengan backdrop bersih."}]},{code:"/enhance",name:"Global Lighting & Color Enhancement",category:"LIGHTING",target:"LIGHTING",description:"Menganalisis dan menyeimbangkan ulang pencahayaan, tone warna, dynamic range, dan saturasi untuk hasil visual profesional.",semanticTriggers:["perbaiki pencahayaan","perbaiki pencahayaan foto","pencahayaan foto","terangkan foto","tata cahaya","pencahayaan redup","enhance lighting","fix lighting","lighting balance","enhance"],negativeTriggers:["pertahankan pencahayaan asli","gelapkan foto"],conflicts:[],compatibleWith:["/facelock","/sharpen","/outfit","/hdr","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat pencahayaan foto kurang seimbang, redup, atau terlalu flat.",whenNotToUse:"Jangan gunakan jika user secara sengaja menginginkan suasana siluet gelap.",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/enhance-lighting","/lighting-fix","/improve-lighting","/improve-exposure"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise yang mungkin timbul saat exposure diangkat."},{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Memberikan nuansa hangat estetik pada pencahayaan."}]},{code:"/softlight",name:"Soft Diffused Studio Illumination",category:"LIGHTING",target:"LIGHTING",description:"Menerapkan cahaya lembut tersebar tanpa bayangan tajam yang keras, ideal untuk potret wajah.",semanticTriggers:["cahaya lembut","soft lighting","diffused light","pencahayaan lembut"],negativeTriggers:["cahaya keras","harsh shadows"],conflicts:[],compatibleWith:["/facelock","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret kecantikan atau foto yang memerlukan bayangan halus.",whenNotToUse:"Jangan gunakan untuk scene yang memerlukan bayangan kontras dramatis.",functionGroup:"LIGHTING_STUDIO",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/soft-light","/diffused-lighting"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyempurnakan bayangan lembut pada wajah dan tubuh."}]},{code:"/goldenhour",name:"Warm Sunset Golden Hour Sunlight",category:"LIGHTING",target:"LIGHTING",description:"Menambahkan cahaya matahari senja hangat keemasan dari samping dengan flare lembut.",semanticTriggers:["golden hour","cahaya senja","matahari sore","sunset lighting","warm sunlight"],negativeTriggers:["cahaya dingin","studio light"],conflicts:["/studiobg"],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk foto outdoor dengan suasana sore hangat dan romantis.",whenNotToUse:"Jangan gunakan untuk foto studio formal latar polos.",functionGroup:"LIGHTING_GOLDENHOUR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sunset-glow","/warm-sunlight"],relationships:[{code:"/warmtone",relationType:"QUALITY_RELATED",reason:"Mempertegas kehangatan warna matahari senja."}]},{code:"/sharpen",name:"High-Frequency Detail Sharpening",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan mikrokontras dan ketajaman detail halus tanpa menimbulkan artefak halo atau noise yang berlebihan.",semanticTriggers:["buat foto lebih tajam","lebih tajam","tajamkan","perjelas detail","ketajaman","sharpen image","crisp focus","high clarity","sharpen"],negativeTriggers:["efek blur","soft focus","buramkan"],conflicts:["/bokeh"],compatibleWith:["/enhance","/facelock","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat foto terlihat agak buram atau kurang fokus tajam.",whenNotToUse:"Jangan gunakan jika user sengaja meminta efek soft vintage atau blur.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clarity-boost","/edge-sharpen","/tajam"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}]},{code:"/highresolution",name:"Ultra-High Resolution & Upscaling",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Meningkatkan resolusi dan kepadatan piksel ke tingkat ultra-tinggi (4K/8K) dengan rekonstruksi mikrotekstur tajam dan jernih.",semanticTriggers:["resolusi tinggi","high resolution","high res","kualitas tinggi","super resolution","superresolution","upscale","tingkatkan resolusi","resolusi super","resolusi 4k","resolusi 8k","4k","8k","ultra detailed","high detail","uhd"],negativeTriggers:["low resolution","resolusi rendah","pixel art","buram"],conflicts:[],compatibleWith:["/enhance","/facelock","/sharpen","/rawphoto","/denoise"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat instruksi meminta peningkatan resolusi gambar, detail ultra-tinggi, atau output 4K/8K.",whenNotToUse:"Jangan gunakan jika user sengaja meminta gaya resolusi rendah atau pixel art.",functionGroup:"IMAGE_RESOLUTION",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/superresolution","/upscale","/4k","/8k","/highdetail","/ultradetailed","/resolusi-tinggi"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman tepian pada resolusi tinggi."},{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan untuk mendukung detail resolusi tinggi."},{code:"/denoise",relationType:"QUALITY_RELATED",reason:"Membersihkan noise piksel saat upscaling gambar."}]},{code:"/denoise",name:"ISO Noise & Grain Reduction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Membersihkan noise digital dan bintik pada foto gelap atau beresolusi rendah sambil mempertahankan ketajaman tepian.",semanticTriggers:["hilangkan noise","bersihkan bintik","hapus grain","foto bersih","clean noise","remove grain","denoise"],negativeTriggers:["vintage grain","film grain","tambah bintik"],conflicts:["/vintage"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan pada foto malam hari atau hasil foto berpencahayaan rendah yang berbintik.",whenNotToUse:"Jangan gunakan jika gaya film retro vintage diinginkan.",functionGroup:"IMAGE_DENOISE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/noise-reduction","/clean-noise"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mencegah noise artefak teramplifikasi saat penajaman."}]},{code:"/hdr",name:"High Dynamic Range Reconstruction",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Memulihkan detail pada area sorotan terlalu terang (blown-out highlights) dan bayangan pekat (crushed shadows).",semanticTriggers:["hdr","dynamic range","pulihkan bayangan","jangan terlalu silau","seimbangkan highlight","high dynamic range"],negativeTriggers:[],conflicts:[],compatibleWith:["/enhance","/colorgrade","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan jika ada area foto yang terlalu silau atau bagian bayangan yang gelap gulita.",whenNotToUse:"Jangan gunakan pada foto yang kontras tinggi secara artistik (chiaroscuro).",functionGroup:"LIGHTING_ENHANCEMENT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/high-dynamic-range","/hdr-light"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyeimbangkan area shadow dan highlight ekstrem."}]},{code:"/cleandetail",name:"Micro-Texture Clarity & Skin Cleanliness",category:"IMAGE_QUALITY",target:"IMAGE_QUALITY",description:"Menjernihkan tekstur pori-pori dan serat pakaian dengan kejelasan ultra tanpa filter plastik.",semanticTriggers:["detail mikro","tekstur jernih","pori pori bersih","serat kain detail","clean detail"],negativeTriggers:[],conflicts:[],compatibleWith:["/sharpen","/enhance","/rawphoto"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk meningkatkan fidelitas visual foto resolusi tinggi.",whenNotToUse:"Tidak perlu jika ketajaman dasar /sharpen sudah mencukupi.",functionGroup:"IMAGE_SHARPENING",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/clean-texture","/micro-detail"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Membersihkan detail mikro tanpa distorsi."}]},{code:"/colorgrade",name:"Master Color Grading",category:"COLOR_TONE",target:"COLOR_TONE",description:"Menerapkan penyesuaian kurva warna terarah (misal: teal & orange, warm vintage, atau clean commercial) secara profesional.",semanticTriggers:["color grading","atur warna","tone warna","palet warna estetik","pewarnaan profesional","grading warna"],negativeTriggers:["hitam putih","monokrom"],conflicts:["/monochrome"],compatibleWith:["/enhance","/cinematic","/facelock"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk menyelaraskan palet warna gambar secara estetis.",whenNotToUse:"Jangan gunakan saat user meminta hasil hitam-putih monokrom.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cinematic-grade","/color-grading"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyelaraskan tone warna dengan pencahayaan."}]},{code:"/monochrome",name:"Fine-Art Black & White Tonal Range",category:"COLOR_TONE",target:"COLOR_TONE",description:"Mengonversi gambar menjadi foto hitam-putih dengan gradasi kontras kaya dan midtone halus.",semanticTriggers:["hitam putih","monokrom","black and white","grayscale","b&w"],negativeTriggers:["penuh warna","saturasi tinggi"],conflicts:["/colorgrade","/warmtone","/cooltone"],compatibleWith:["/enhance","/sharpen","/facelock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat ada permintaan foto hitam-putih atau seni monokrom.",whenNotToUse:"Jangan gunakan jika foto berwarna diinginkan.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/black-white","/bnw"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Mempertegas kontras mikrotekstur hitam-putih."}]},{code:"/warmtone",name:"Warm Amber & Gold Tonal Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan semburat warna hangat keemasan yang menenangkan dan ramah pada kulit.",semanticTriggers:["tone hangat","warm tone","nuansa hangat","warna hangat"],negativeTriggers:["tone dingin","cool tone","monokrom"],conflicts:["/cooltone","/monochrome"],compatibleWith:["/enhance","/goldenhour"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk kesan santai, hangat, dan ramah.",whenNotToUse:"Jangan gunakan bersamaan dengan /cooltone.",functionGroup:"COLOR_WARM_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/warm-palette","/golden-tone"],relationships:[{code:"/goldenhour",relationType:"CONTEXTUAL",reason:"Selaras dengan tata cahaya hangat matahari."}]},{code:"/cooltone",name:"Cool Steel & Blue Cinematic Cast",category:"COLOR_TONE",target:"COLOR_TONE",description:"Memberikan nuansa warna dingin kebiruan yang modern, futuristik, dan berkarakter tajam.",semanticTriggers:["tone dingin","cool tone","nuansa biru","warna sejuk"],negativeTriggers:["tone hangat","warm tone","monokrom"],conflicts:["/warmtone","/monochrome"],compatibleWith:["/enhance","/cinematic"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk scene bertema sci-fi, malam kota, atau formal dingin.",whenNotToUse:"Jangan gunakan bersamaan dengan /warmtone.",functionGroup:"COLOR_COOL_TONE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/cool-palette","/moody-blue-tone"],relationships:[{code:"/cinematic",relationType:"CONTEXTUAL",reason:"Menciptakan nuansa sinematik moody modern."}]},{code:"/ar 9:16",name:"Vertical Aspect Ratio 9:16",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format vertikal 9:16 yang optimal untuk smartphone, TikTok, Instagram Reels, dan YouTube Shorts.",semanticTriggers:["ubah rasio menjadi 9:16","rasio 9:16","format vertical","story format","reels format","ar 9:16","potret tinggi","dimensi 9:16"],negativeTriggers:["rasio 16:9","rasio 1:1","rasio 4:5","landscape"],conflicts:["/ar 16:9","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat gambar ditujukan untuk platform vertikal seperti Reels, Shorts, atau Stories.",whenNotToUse:"Jangan gunakan untuk banner desktop atau foto feed persegi.",functionGroup:"ASPECT_RATIO_VERTICAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 9:16","/vertical-9-16"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Sangat cocok untuk framing seluruh badan vertikal."}]},{code:"/ar 16:9",name:"Widescreen Aspect Ratio 16:9",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel rasio kanvas gambar menjadi format horizontal layar lebar 16:9 ideal untuk banner web dan desktop.",semanticTriggers:["ubah rasio menjadi 16:9","rasio 16:9","format landscape","layar lebar","ar 16:9","widescreen"],negativeTriggers:["rasio 9:16","rasio 1:1","vertical"],conflicts:["/ar 9:16","/ar 1:1","/ar 4:5"],compatibleWith:["/facelock","/enhance","/cinematic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk video thumbnail YouTube, banner situs, atau presentasi layar lebar.",whenNotToUse:"Jangan gunakan untuk konten stories ponsel vertikal.",functionGroup:"ASPECT_RATIO_LANDSCAPE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 16:9","/landscape-16-9"],relationships:[{code:"/cinematic",relationType:"COMPOSITION_RELATED",reason:"Format standar layar lebar sinematik."}]},{code:"/ar 1:1",name:"Square Aspect Ratio 1:1",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas menjadi persegi sama sisi 1:1 dengan framing seimbang.",semanticTriggers:["rasio 1:1","format persegi","kotak","square aspect","ar 1:1"],negativeTriggers:["rasio 9:16","rasio 16:9"],conflicts:["/ar 9:16","/ar 16:9","/ar 4:5"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk feed Instagram standar atau avatar foto profil.",whenNotToUse:"Jangan gunakan untuk format cerita vertikal atau sinematik layar lebar.",functionGroup:"ASPECT_RATIO_SQUARE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 1:1","/square-1-1"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Format avatar dan portrait persegi seimbang."}]},{code:"/ar 4:5",name:"Instagram Portrait Aspect Ratio 4:5",category:"CANVAS_RATIO",target:"CANVAS_RATIO",description:"Menyetel kanvas ke format potret 4:5 yang memaksimalkan tampilan layar feed Instagram.",semanticTriggers:["rasio 4:5","format 4:5","instagram portrait","ar 4:5"],negativeTriggers:["rasio 16:9","rasio 1:1"],conflicts:["/ar 9:16","/ar 16:9","/ar 1:1"],compatibleWith:["/facelock","/outfit","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk foto feed Instagram format tinggi optimal.",whenNotToUse:"Jangan gunakan untuk layar video landscape 16:9.",functionGroup:"ASPECT_RATIO_PORTRAIT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/ratio 4:5","/portrait-4-5"],relationships:[{code:"/outfit",relationType:"COMPOSITION_RELATED",reason:"Proporsi feed media sosial untuk busana subjek."}]},{code:"/bgremove",name:"Background Removal / Transparent Alpha",category:"TRANSPARENCY",target:"BACKGROUND",description:"Menghapus latar belakang subjek secara bersih hingga menjadi transparan (matte alpha channel) dengan isolasi tepian yang halus.",semanticTriggers:["hapus background","hapus latar","hapus latar belakang","latar transparan","hilangkan latar belakang","buang background","remove background","transparent background","clean cutout"],negativeTriggers:["pertahankan background","jangan ubah latar","ganti background","gunakan latar baru"],conflicts:["/backgroundlock","/bgreplace","/studiobg"],compatibleWith:["/facelock","/outfit","/enhance","/sharpen"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat user membutuhkan gambar subjek terisolasi tanpa latar belakang untuk stiker, katalog, atau desain grafis.",whenNotToUse:"Jangan gunakan jika latar belakang asli ingin dipertahankan atau diganti pemandangan lain.",functionGroup:"BACKGROUND_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/remove-background","/transparent-bg"],relationships:[{code:"/alphachannel",relationType:"DIRECTLY_RELATED",reason:"Mengisolasi subjek ke alpha matte transparan murni."},{code:"/facelock",relationType:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap utuh saat background dipotong."}]},{code:"/alphachannel",name:"Clean Edge Alpha Masking",category:"TRANSPARENCY",target:"BACKGROUND",description:"Mempertajam tepian rambut dan siluet transparan agar tidak menyisakan halo hijau/putih saat ditempel ke latar lain.",semanticTriggers:["masking transparan","alpha channel halus","pinggiran rapi transparan","feathered edge alpha"],negativeTriggers:[],conflicts:["/backgroundlock"],compatibleWith:["/bgremove","/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan sebagai pelengkap /bgremove untuk helai rambut tipis.",whenNotToUse:"Tidak diperlukan jika latar belakang tidak transparan.",functionGroup:"TRANSPARENCY_ALPHA",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/alpha-mask","/cutout-subject"],relationships:[{code:"/bgremove",relationType:"DIRECTLY_RELATED",reason:"Masking alpha channel presisi tinggi pada tepi rambut."}]},{code:"/object-remove",name:"Selective Object Inpainting & Removal",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menghapus objek pengganggu, watermark, kabel, atau noda yang tidak diinginkan dari foto secara mulus.",semanticTriggers:["hapus objek","hilangkan noda","hapus benda","bersihkan gangguan","remove object","inpaint remove"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/backgroundlock","/enhance"],priority:"HIGH",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan untuk menghapus objek yang merusak estetika foto.",whenNotToUse:"Jangan gunakan jika tidak ada objek spesifik yang ingin dihilangkan.",functionGroup:"OBJECT_REMOVAL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/inpaint-remove","/erase-object"],relationships:[{code:"/backgroundlock",relationType:"COMPATIBLE",reason:"Menghapus objek tanpa menggeser sisa pemandangan latar."}]},{code:"/object-add",name:"Context-Aware Prop & Object Insertion",category:"OBJECT_EDITING",target:"OBJECT_EDITING",description:"Menambahkan objek pendukung (misal kacamata, cangkir kopi, tas) yang berbaur secara harmonis dengan cahaya gambar.",semanticTriggers:["tambah objek","pegang cangkir","pakai kacamata","tambahkan benda","add object"],negativeTriggers:[],conflicts:[],compatibleWith:["/facelock","/outfit"],priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:"Gunakan saat user meminta menyisipkan aksesori atau properti ke foto.",whenNotToUse:"Jangan gunakan jika user meminta gambar bersih minimalis.",functionGroup:"OBJECT_ADD",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/insert-prop","/place-object"],relationships:[{code:"/enhance",relationType:"QUALITY_RELATED",reason:"Menyesuaikan bayangan objek baru dengan cahaya sekitar."}]},{code:"/cinematic",name:"Cinematic Mood & Volumetric Lighting",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan sentuhan sinematik ala film layar lebar dengan pencahayaan volumetrik dramatis dan palet warna filmic.",semanticTriggers:["gaya sinematik","nuansa film","cinematic lighting","film look","dramatis","suasana film"],negativeTriggers:["foto asli polos","flat photo"],conflicts:["/rawphoto"],compatibleWith:["/enhance","/facelock","/colorgrade"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk mendapatkan kesan dramatis sinematik berkelas bioskop.",whenNotToUse:"Jangan gunakan jika user mensyaratkan foto polos seperti jepretan mentah kamera biasa.",functionGroup:"STYLE_CINEMATIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/movie-look","/film-still"],relationships:[{code:"/ar 16:9",relationType:"COMPOSITION_RELATED",reason:"Menyempurnakan komposisi layar lebar sinematik."},{code:"/cooltone",relationType:"CONTEXTUAL",reason:"Memberikan palet warna teal and orange khas perfilman."}]},{code:"/vintage",name:"Vintage 35mm Analog Film Aesthetic",category:"STYLE_EFFECT",target:"STYLE_EFFECT",description:"Memberikan tekstur grain film 35mm retro, kehangatan analog, dan warna nostalgia khas kamera klasik.",semanticTriggers:["retro","vintage","kamera analog","film 35mm","grain vintage","nostalgia"],negativeTriggers:["foto modern tajam","clean digital"],conflicts:["/rawphoto","/denoise"],compatibleWith:["/colorgrade"],priority:"LOW",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk gaya estetika foto jadul retro yang hangat.",whenNotToUse:"Jangan gunakan saat user membutuhkan ketajaman ultra jernih modern.",functionGroup:"STYLE_VINTAGE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/retro-film","/analog-35mm"],relationships:[{code:"/warmtone",relationType:"CONTEXTUAL",reason:"Nuansa nostalgia hangat film analog."}]},{code:"/rawphoto",name:"Authentic RAW Photographic Character",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Mencegah tampilan over-processed atau filter kartun berlebihan, menghasilkan tekstur kulit realistis dengan grain sensor alami kamera profesional.",semanticTriggers:["foto asli","raw photo","seperti jepretan kamera","tekstur kulit nyata","realistic camera","natural photography","bukan kartun"],negativeTriggers:["kartun","anime","vektor","lukisan","3d render"],conflicts:["/cinematic","/vintage"],compatibleWith:["/facelock","/enhance","/sharpen"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk memastikan hasil generasi terlihat seperti foto kamera sungguhan tanpa filter berlebihan.",whenNotToUse:"Jangan gunakan jika tujuan pengguna adalah gaya ilustrasi atau lukisan art.",functionGroup:"CAMERA_RAW",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/raw-sensor","/dslr-photo"],relationships:[{code:"/sharpen",relationType:"QUALITY_RELATED",reason:"Menonjolkan ketajaman alami sensor kamera tanpa efek buatan."}]},{code:"/bokeh",name:"f/1.4 Shallow Depth of Field & Optical Bokeh",category:"CAMERA_PHOTO",target:"CAMERA_PHOTO",description:"Meniru optik bukaan lensa lebar f/1.4 dengan titik-titik lingkaran bokeh artistik pada latar belakang.",semanticTriggers:["bokeh","lensa f1.4","shallow depth of field","lingkaran cahaya blur","fokus dangkal"],negativeTriggers:["fokus menyeluruh","semua tajam"],conflicts:["/sharpen"],compatibleWith:["/facelock","/enhance"],priority:"MEDIUM",recommendationLevel:"OPSIONAL",whenToUse:"Gunakan untuk potret mewah dengan titik cahaya latar belakang membulat lembut.",whenNotToUse:"Jangan gunakan untuk foto landscape di mana seluruh pemandangan harus tajam.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/f1-4-bokeh","/shallow-dof"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Efek bokeh latar belakang membulat lembut pada portrait dekat."}]},{code:"/outpaint",name:"AI Canvas Outpainting & Expansion",category:"CANVAS_RATIO",target:"Bidang & Batas Kanvas Foto",description:"Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension) secara koheren dan mulus.",semanticTriggers:["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension","extend frame"],negativeTriggers:["jangan outpaint","crop","potong foto","persempit foto"],conflicts:["/crop"],compatibleWith:["/facelock","/enhance","/sharpen","/ar 16:9","/ar 9:16","/fullbody"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memperlebar atau memperluas latar belakang foto melampaui batas frame asli tanpa merusak subjek tengah.",whenNotToUse:"Jangan gunakan jika ingin memotong (crop) atau memfokuskan framing lebih rapat pada objek tertentu.",functionGroup:"CANVAS_OUTPAINT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/expandcanvas","/uncrop","/canvas-extension"],relationships:[{code:"/fullbody",relationType:"COMPOSITION_RELATED",reason:"Outpainting sering digunakan untuk memperlihatkan seluruh tubuh atau komposisi lingkungan sekitar."}]},{code:"/eyelevel",name:"Eye-Level Camera Angle",category:"CAMERA_PHOTO",target:"CAMERA_ANGLE",description:"Sudut pengambilan gambar sejajar ketinggian mata subjek, memberikan perspektif netral, alami, dan personal tanpa distorsi vertikal.",semanticTriggers:["sudut pandang sejajar mata","sejajar mata","kamera sejajar mata","perspektif sejajar mata","eye level","eye-level","eye level shot","eye level camera"],negativeTriggers:["sudut rendah","low angle","sudut tinggi","high angle","bird eye","worm eye"],conflicts:["/lowangle","/highangle","/birdeye"],compatibleWith:["/daylight","/outdoor","/seated","/realistic","/shallowdof","/fullbody","/closeup"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika komposisi kamera sejajar dengan ketinggian mata subjek untuk kesan netral dan alami.",whenNotToUse:"Jangan gunakan jika diinginkan sudut pandang dramatis dari bawah (low angle) atau dari atas (high angle).",functionGroup:"CAMERA_ANGLE_EYELEVEL",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/eyelevelangle"],relationships:[{code:"/closeup",relationType:"COMPOSITION_RELATED",reason:"Sudut sejajar mata sangat ideal dipadukan dengan framing portrait atau closeup."}]},{code:"/daylight",name:"Natural Daylight Illumination",category:"LIGHTING",target:"LIGHTING_NATURAL",description:"Pencahayaan alami waktu siang hari dengan distribusi sinar matahari natural dan bayangan realistis.",semanticTriggers:["siang hari","cahaya siang","pencahayaan alami","cahaya alami","sinar matahari siang","terang alami","daylight","natural daylight","natural light","natural lighting","sunlight"],negativeTriggers:["malam hari","cahaya malam","lampu neon","studio gelap","night","dark","studio lighting"],conflicts:["/night","/studiobg","/neon"],compatibleWith:["/outdoor","/eyelevel","/realistic","/shallowdof","/softlight"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan pada foto atau adegan siang hari yang memanfaatkan cahaya matahari alami.",whenNotToUse:"Jangan gunakan untuk suasana malam, ruangan gelap pekat, atau pencahayaan studio buatan tertutup.",functionGroup:"LIGHTING_DAYLIGHT",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/naturallight","/daylightillumination"],relationships:[{code:"/outdoor",relationType:"CONTEXTUAL",reason:"Pencahayaan siang hari alami memiliki sinergi kontekstual tinggi dengan lingkungan luar ruangan."}]},{code:"/outdoor",name:"Outdoor Open-Air Environment",category:"BACKGROUND",target:"SCENE_ENVIRONMENT",description:"Setting lingkungan luar ruangan terbuka alami dengan pencahayaan ambien alami tanpa dinding ruangan tertutup.",semanticTriggers:["luar ruangan","di luar ruangan","alam terbuka","area terbuka","luar gedung","taman terbuka","outdoor","open air","outside","outdoors"],negativeTriggers:["dalam ruangan","indoor","dalam studio","ruang tertutup","studio"],conflicts:["/indoor","/studiobg"],compatibleWith:["/daylight","/eyelevel","/seated","/realistic","/shallowdof"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menetapkan latar belakang dan lingkungan adegan di alam atau area luar ruangan.",whenNotToUse:"Jangan gunakan untuk setting interior, studio, atau ruangan tertutup.",functionGroup:"SCENE_OUTDOOR",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/openair","/outside"],relationships:[{code:"/daylight",relationType:"CONTEXTUAL",reason:"Lingkungan luar ruangan umumnya diterangi oleh cahaya alami siang hari."}]},{code:"/seated",name:"Seated Body Pose",category:"BODY_POSE",target:"BODY_POSE_ACTION",description:"Pose subjek dalam posisi duduk rileks atau terstruktur dengan postur anatomis stabil dan alami.",semanticTriggers:["duduk","posisi duduk","sedang duduk","wanita duduk","pria duduk","pose duduk","seated","sitting","sitting pose"],negativeTriggers:["berdiri","standing","berlari","running","melompat"],conflicts:["/standing","/running"],compatibleWith:["/eyelevel","/outdoor","/calm","/realistic","/fullbody","/bodylock"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek berada dalam postur atau gestur sedang duduk.",whenNotToUse:"Jangan gunakan jika subjek berdiri tegak atau sedang melakukan aksi dinamis berjalan/berlari.",functionGroup:"POSE_SEATED",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sittingpose","/seatedpose"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Sudut kamera sejajar mata menjaga proporsi alami subjek saat berada dalam posisi duduk."}]},{code:"/calm",name:"Calm & Serene Expression",category:"FACE_IDENTITY",target:"FACE_EXPRESSION",description:"Ekspresi wajah tenang, rileks, damai, dan netral tanpa ketegangan otot muka atau emosi agresif.",semanticTriggers:["ekspresi tenang","tenang","raut muka tenang","ekspresi damai","ekspresi rileks","calm","serene","peaceful expression","relaxed expression"],negativeTriggers:["marah","teriak","terkejut","menangis","angry","shouting","crying"],conflicts:["/angry","/surprised","/crying"],compatibleWith:["/facelock","/eyelevel","/daylight","/seated","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat subjek menampilkan ekspresi wajah yang teduh, damai, dan rileks.",whenNotToUse:"Jangan gunakan jika subjek menampilkan ekspresi dramatis, emosional, atau ekspresif berlebihan.",functionGroup:"EXPRESSION_CALM",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/serene","/relaxed"],relationships:[{code:"/facelock",relationType:"COMPATIBLE",reason:"Dapat dipadukan dengan penguncian wajah untuk menjaga identitas tetap utuh."}]},{code:"/realistic",name:"Photorealistic Aesthetic Style",category:"STYLE_EFFECT",target:"STYLE_REALISTIC",description:"Gaya rendering fotografis nyata dan realistis dengan tekstur autentik, pencahayaan fisik akurat, dan detail alami tanpa distorsi kartun.",semanticTriggers:["fotografi realistis","gaya fotografi realistis","gaya realistis","realistis","tampak nyata","natural realistic","photorealistic","realistic","photo style","realistic photography"],negativeTriggers:["anime","kartun","ilustrasi","cyberpunk","surealis","fantasy","cgi cartoon"],conflicts:["/anime","/cartoon","/cyberpunk"],compatibleWith:["/rawphoto","/daylight","/eyelevel","/shallowdof","/enhance"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk memastikan output memiliki estetika visual fotografi asli dan realistis.",whenNotToUse:"Jangan gunakan untuk karya seni ilustratif, kartun 2D, anime, atau lukisan abstrak.",functionGroup:"STYLE_REALISTIC",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/photorealistic","/realism"],relationships:[{code:"/rawphoto",relationType:"QUALITY_RELATED",reason:"Tekstur sensor RAW memperkuat karakter visual fotografi realistis."}]},{code:"/shallowdof",name:"Shallow Depth of Field (Bokeh)",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Kedalaman bidang sempit dengan titik fokus tajam pada subjek utama dan latar belakang sedikit blur atau bokeh halus.",semanticTriggers:["latar belakang sedikit blur","latar belakang blur","latar blur","sedikit blur","blur halus","kedalaman bidang sempit","shallow depth of field","shallow dof","blurred background","soft bokeh"],negativeTriggers:["latar tajam","deep focus","tajam seluruhnya","sharp background"],conflicts:["/deepfocus"],compatibleWith:["/bokeh","/eyelevel","/realistic","/daylight","/seated"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan saat latar belakang sengaja dibuat blur halus untuk mengisolasi subjek utama.",whenNotToUse:"Jangan gunakan jika seluruh latar belakang depan hingga belakang dituntut tajam sempurna.",functionGroup:"CAMERA_BOKEH",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/bokeh","/bgblur"],relationships:[{code:"/bokeh",relationType:"DIRECTLY_RELATED",reason:"Efek bokeh optik merupakan perwujudan langsung dari shallow depth of field."}]},{code:"/deepfocus",name:"Deep Focus & Edge Sharpness",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Apertur f/8-f/16 dengan kedalaman bidang luas menjaga latar depan dan latar belakang tetap tajam.",semanticTriggers:["deep focus","fokus mendalam","latar tajam","tajam dari depan hingga belakang","sharp background and foreground"],negativeTriggers:["bokeh","blur","latar blur","shallow dof"],conflicts:["/bokeh","/shallowdof","/bgblur"],compatibleWith:["/wideangle","/eyelevel","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan ketika seluruh bidang adegan dari latar depan hingga latar belakang harus tajam dan jelas.",whenNotToUse:"Jangan gunakan jika menginginkan latar belakang blur atau isolasi bokeh.",functionGroup:"CAMERA_DEEPFOCUS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/sharpdof"],relationships:[{code:"/wideangle",relationType:"COMPOSITION_RELATED",reason:"Lensa wide angle secara optik mendukung pencapaian deep focus yang luas."}]},{code:"/ruleofthirds",name:"Rule of Thirds Composition",category:"CAMERA_PHOTO",target:"COMPOSITION",description:"Komposisi seimbang berbasis aturan sepertiga (rule of thirds) menempatkan subjek pada titik perpotongan visual.",semanticTriggers:["rule of thirds","aturan sepertiga","komposisi rule of thirds","komposisi sepertiga","grid thirds"],negativeTriggers:["pusat tengah","center framing"],conflicts:["/centerframing"],compatibleWith:["/eyelevel","/outdoor","/realistic"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menerapkan kaidah estetika fotografi klasik aturan sepertiga.",whenNotToUse:"Jangan gunakan jika subjek sengaja ditempatkan simetris sempurna di tengah kanvas.",functionGroup:"COMPOSITION_RULEOFTHIRDS",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/thirdsgrid"],relationships:[{code:"/eyelevel",relationType:"COMPOSITION_RELATED",reason:"Memandu sudut pandang mata secara harmonis dengan kaidah sepertiga."}]},{code:"/wideangle",name:"Wide Angle Lens Perspective",category:"CAMERA_PHOTO",target:"CAMERA_OPTICS",description:"Perspektif lensa sudut lebar (24mm-35mm) menangkap bidang pandang luas dan kedalaman lingkungan yang dinamis.",semanticTriggers:["wide angle","lensa lebar","sudut lebar","wide-angle lens","perspektif lebar","lensa wide"],negativeTriggers:["telephoto","lensa zoom panjang","macro","closeup ketat"],conflicts:["/telephoto","/closeup"],compatibleWith:["/outdoor","/fullbody","/deepfocus"],priority:"HIGH",recommendationLevel:"WAJIB",whenToUse:"Gunakan untuk menampilkan subjek bersama lingkungan sekitar secara luas.",whenNotToUse:"Jangan gunakan untuk portrait ketat atau foto makro dengan kompresi latar belakang ekstrem.",functionGroup:"LENS_WIDEANGLE",preferredRepresentative:!0,status:"CORE",source:"CORE",equivalentTo:["/wideoptics"],relationships:[{code:"/outdoor",relationType:"COMPOSITION_RELATED",reason:"Lensa sudut lebar sangat ideal untuk menangkap bentang alam luar ruangan yang luas."}]}];function W(c,a){if(!a||typeof a!="string"||!a.trim())return 1;const e=a.toLowerCase().trim(),t=c.code.toLowerCase(),i=c.name.toLowerCase(),r=c.target.toLowerCase(),n=c.category.toLowerCase(),s=c.description.toLowerCase();if(t===e||t===`/${e}`)return 100;if(t.includes(e))return 75;if(c.semanticTriggers&&c.semanticTriggers.some(u=>u.toLowerCase()===e))return 95;if(c.negativeTriggers)for(const u of c.negativeTriggers){const p=u.toLowerCase(),h=e.indexOf(p);if(h!==-1){const g=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p),T=e.slice(0,h).trim(),k=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(T);if(g||!k)return-50}}if(c.semanticTriggers)for(const u of c.semanticTriggers){const p=u.toLowerCase(),h=e.indexOf(p);if(h!==-1){const g=e.slice(0,h).trim(),T=/(?:jangan|tidak|tanpa|bukan)(?:\s+\w{0,8})?\s*$/i.test(g),k=/^(?:jangan|tidak|tanpa|bukan)\s+/i.test(p);if(!T||k)return 85}else if(p.includes(e))return 80}const o=new Set(["jangan","tidak","tanpa","bukan","tetapi","tapi","dan","yang","untuk","dengan","dari","ke","di","ini","itu","pada"]),d=e.split(/\s+/).filter(u=>u.length>2&&!o.has(u));let l=0;for(const u of c.semanticTriggers||[]){const p=u.toLowerCase();if(d.length>0&&d.every(T=>p.includes(T)))return 75;const g=d.filter(T=>p.includes(T)).length;g>l&&(l=g)}return l>1?40+l*5:i.includes(e)?50:r.includes(e)||n.includes(e)?40:s.includes(e)?30:0}function $a(c,{category:a="ALL",target:e="ALL",recommendationLevel:t="ALL",searchQuery:i=""}={}){const r=c.filter(n=>!(a!=="ALL"&&n.category!==a||e!=="ALL"&&n.target!==e||t!=="ALL"&&n.recommendationLevel!==t));if(i&&i.trim()){const n=[];for(const s of r){const o=W(s,i);o>0&&n.push({item:s,score:o})}return n.sort((s,o)=>o.score-s.score),n.map(s=>s.item)}return r}const xa="psa_v2_catalog_db",Ba=1,j="user_shorthands";class Ka{constructor(a=ga){this.coreCatalog=a.map(e=>({...e,status:e.status||"CORE",source:e.source||"CORE",preferredRepresentative:e.preferredRepresentative!==void 0?e.preferredRepresentative:!0,equivalentTo:e.equivalentTo||[],relationships:e.relationships||[]})),this.userCatalog=new Map,this.db=null,this.isInitialized=!1}async init(){if(this.isInitialized)return this;if(!(typeof window<"u"&&typeof window.indexedDB<"u"))return this.isInitialized=!0,this;try{this.db=await new Promise((e,t)=>{const i=window.indexedDB.open(xa,Ba);i.onupgradeneeded=r=>{const n=r.target.result;n.objectStoreNames.contains(j)||n.createObjectStore(j,{keyPath:"code"})},i.onsuccess=r=>e(r.target.result),i.onerror=r=>t(r.target.error)}),await this.loadFromIndexedDB()}catch(e){console.warn("IndexedDB unavailable, using memory fallback:",e)}return this.isInitialized=!0,this}async loadFromIndexedDB(){if(this.db)try{const a=await new Promise((e,t)=>{const n=this.db.transaction([j],"readonly").objectStore(j).getAll();n.onsuccess=()=>e(n.result||[]),n.onerror=()=>t(n.error)});this.userCatalog.clear();for(const e of a)e&&e.code&&this.userCatalog.set(e.code,e)}catch(a){console.error("Error loading from IndexedDB:",a)}}getAll(a=!0){const e=[...this.coreCatalog];for(const t of this.userCatalog.values()){const i=e.findIndex(r=>r.code===t.code);i!==-1?e[i]={...e[i],...t}:e.push(t)}return a?e:e.filter(t=>t.status!=="DISABLED")}searchShorthands(a,e={}){const t=this.getAll(e.includeDisabled??!0);if(!a||!a.trim())return t;const i=a.toLowerCase().trim(),r=[];for(const n of t){let s=W(n,i);n.functionGroup&&n.functionGroup.toLowerCase().includes(i)&&(s=Math.max(s,60)),n.equivalentTo&&n.equivalentTo.some(o=>o.toLowerCase().includes(i))&&(s=Math.max(s,70)),n.relationships&&n.relationships.some(o=>{var d,l;return((d=o.code)==null?void 0:d.toLowerCase().includes(i))||((l=o.relationType)==null?void 0:l.toLowerCase().includes(i))})&&(s=Math.max(s,45)),s>0&&r.push({item:n,score:s})}return r.sort((n,s)=>s.score-n.score),r.map(n=>n.item)}getByCategory(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.category===a)}getByTarget(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.target===a)}getByFunctionGroup(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.functionGroup===a)}getBySource(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.source===a)}getByStatus(a){return!a||a==="ALL"?this.getAll():this.getAll().filter(e=>e.status===a)}getEquivalent(a){const e=this.getAll().find(t=>t.code===a);return e?e.equivalentTo||[]:[]}getConflicts(a){const e=this.getAll().find(t=>t.code===a);return e?e.conflicts||[]:[]}getCompatible(a){const e=this.getAll().find(t=>t.code===a);return e?e.compatibleWith||[]:[]}getRelated(a){const t=this.getAll().find(i=>i.code===a||i.target===a);return!t||!t.relationships?[]:t.relationships}detectSimilarFunction(a){if(!a||!a.code)return{hasSimilar:!1};const e=this.getAll(),t=e.find(r=>r.code.toLowerCase()===a.code.toLowerCase());if(t)return{hasSimilar:!0,matchType:"EXACT_CODE",existingItem:t,message:`Shorthand dengan kode ${a.code} sudah ada di katalog.`};if(a.functionGroup){const r=e.find(n=>n.functionGroup===a.functionGroup);if(r)return{hasSimilar:!0,matchType:"SAME_FUNCTION_GROUP",existingItem:r,message:`Fungsi serupa terdeteksi pada group ${a.functionGroup} (${r.code}).`}}const i=e.find(r=>r.equivalentTo&&r.equivalentTo.some(n=>n.toLowerCase()===a.code.toLowerCase()));return i?{hasSimilar:!0,matchType:"ALIAS_OF_EXISTING",existingItem:i,message:`Kode ${a.code} sudah terdaftar sebagai alias dari ${i.code}.`}:{hasSimilar:!1}}async add(a){if(!a||!a.code)throw new Error("Shorthand wajib memiliki kode unik.");const e={...a,status:a.status||"CUSTOM",source:a.source||"USER",preferredRepresentative:a.preferredRepresentative??!1,equivalentTo:a.equivalentTo||[],relationships:a.relationships||[],semanticTriggers:a.semanticTriggers||[],negativeTriggers:a.negativeTriggers||[],conflicts:a.conflicts||[],compatibleWith:a.compatibleWith||[],updatedAt:new Date().toISOString()};return this.userCatalog.set(e.code,e),this.db&&await new Promise((t,i)=>{const s=this.db.transaction([j],"readwrite").objectStore(j).put(e);s.onsuccess=()=>t(),s.onerror=()=>i(s.error)}),e}async update(a){return this.add(a)}async deleteUserEntry(a){if(this.coreCatalog.some(t=>t.code===a))throw new Error(`Shorthand ${a} merupakan bagian dari CORE CATALOG dan tidak dapat dihapus.`);return this.userCatalog.delete(a),this.db&&await new Promise((t,i)=>{const s=this.db.transaction([j],"readwrite").objectStore(j).delete(a);s.onsuccess=()=>t(),s.onerror=()=>i(s.error)}),!0}exportCatalog(){const a=this.getAll().map(e=>{const{apiKey:t,geminiKey:i,secret:r,password:n,...s}=e;return s});return JSON.stringify({catalogVersion:"2.1",exportedAt:new Date().toISOString(),entries:a},null,2)}async importCatalog(a,e="MERGE"){let t=null;if(typeof a=="string")try{t=JSON.parse(a)}catch(n){throw new Error("Format JSON impor tidak valid: "+n.message)}else t=a;const i=Array.isArray(t)?t:t.entries||[];if(!Array.isArray(i))throw new Error('Data impor harus memiliki array "entries".');e==="REPLACE"&&(this.userCatalog.clear(),this.db&&await new Promise((n,s)=>{const l=this.db.transaction([j],"readwrite").objectStore(j).clear();l.onsuccess=()=>n(),l.onerror=()=>s(l.error)}));let r=0;for(const n of i){if(!n||!n.code||this.coreCatalog.some(h=>h.code===n.code)&&e==="MERGE")continue;const{apiKey:o,geminiKey:d,secret:l,password:u,...p}=n;await this.add({...p,status:p.status||"APPROVED",source:p.source||"USER"}),r++}return{success:!0,count:r,mode:e}}async resetUserCatalog(){return this.userCatalog.clear(),this.db&&await new Promise((a,e)=>{const r=this.db.transaction([j],"readwrite").objectStore(j).clear();r.onsuccess=()=>a(),r.onerror=()=>e(r.error)}),!0}}const D={GEMINI_API_KEY:"psa_v2_gemini_api_key",GEMINI_MODEL:"psa_v2_gemini_model",CUSTOM_CATALOG:"psa_v2_custom_catalog",UI_PREFS:"psa_v2_ui_preferences",RECENT_PROMPTS:"psa_v2_recent_prompts"},N={getApiKey(){try{return localStorage.getItem(D.GEMINI_API_KEY)||""}catch{return""}},setApiKey(c){try{return c?localStorage.setItem(D.GEMINI_API_KEY,c.trim()):localStorage.removeItem(D.GEMINI_API_KEY),!0}catch{return!1}},clearApiKey(){try{return localStorage.removeItem(D.GEMINI_API_KEY),!0}catch{return!1}},getModel(){try{return localStorage.getItem(D.GEMINI_MODEL)||"gemini-2.0-flash"}catch{return"gemini-2.0-flash"}},setModel(c){try{return localStorage.setItem(D.GEMINI_MODEL,c),!0}catch{return!1}},getCustomCatalog(){try{const c=localStorage.getItem(D.CUSTOM_CATALOG);return c?JSON.parse(c):[]}catch{return[]}},saveCustomCatalog(c){try{return localStorage.setItem(D.CUSTOM_CATALOG,JSON.stringify(c)),!0}catch{return!1}},getUiPreferences(){try{const c=localStorage.getItem(D.UI_PREFS);return c?JSON.parse(c):{theme:"dark",autoAnalyze:!0}}catch{return{theme:"dark",autoAnalyze:!0}}},saveUiPreferences(c){try{return localStorage.setItem(D.UI_PREFS,JSON.stringify(c)),!0}catch{return!1}}};class Fa{constructor(){this.patches=new Map,this.executionLogs=[]}registerPatch(a){if(!a||!a.id)throw new Error("[PatchManager] Patch wajib memiliki id yang valid.");const e={id:a.id,name:a.name||a.id,version:a.version||"1.0.0",description:a.description||"",priority:typeof a.priority=="number"?a.priority:100,enabled:a.enabled!==!1,hooks:a.hooks||{},registeredAt:new Date().toISOString()};return this.patches.set(a.id,e),e}getActivePatches(a=null){return Array.from(this.patches.values()).filter(e=>e.enabled&&(!a||typeof e.hooks[a]=="function")).sort((e,t)=>t.priority-e.priority)}getAllPatches(){return Array.from(this.patches.values()).sort((a,e)=>e.priority-a.priority)}setPatchEnabled(a,e){const t=this.patches.get(a);return t?(t.enabled=!!e,!0):!1}safeExecuteHook(a,e,t={}){let i=e;const r=this.getActivePatches(a);for(const n of r)try{const s=n.hooks[a];if(typeof s=="function"){const o=s(i,t);o!==void 0&&(i=o)}}catch(s){console.warn(`[PatchManager] Peringatan: Patch "${n.id}" pada hook "${a}" gagal dieksekusi:`,s),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:n.id,hookName:a,error:s.message,stack:s.stack})}return i}async safeExecuteHookAsync(a,e,t={}){let i=e;const r=this.getActivePatches(a);for(const n of r)try{const s=n.hooks[a];if(typeof s=="function"){const o=await s(i,t);o!==void 0&&(i=o)}}catch(s){console.warn(`[PatchManager] Peringatan: Async Patch "${n.id}" pada hook "${a}" gagal:`,s),this.executionLogs.push({timestamp:new Date().toISOString(),patchId:n.id,hookName:a,error:s.message})}return i}}const ha=new Fa,Va={id:"v3-core-architecture",name:"V3.1 Safe Patch Architecture Core",version:"3.1.0",description:"Mengintegrasikan metadata arsitektur Safe Patch-Only V3.1 dan menjamin isolasi Source of Truth V3.",priority:1e3,enabled:!0,hooks:{afterAnalysis(c,a){return c&&{...c,v3Meta:{appVersion:"3.1.0",architecture:"SAFE_PATCH_ONLY",baseVersion:"3.0.0",basisSourceOfTruth:"Prompt Shorthand Analyzer V3 (v3.0.0-stable)",patchTimestamp:new Date().toISOString(),activePatchesCount:a.patchManager?a.patchManager.getActivePatches().length:1}}}}},za={id:"v3-kamus-shorthand",name:"Kamus Shorthand & Online Fallback Patch",version:"3.1.0",description:"Modul pencarian shorthand interaktif, online fallback terintegrasi, seleksi bertahap tanpa reset, dan salin massal prompt directive.",priority:900,enabled:!0,hooks:{afterAnalysis(c){return c&&{...c,kamusStatus:{available:!0,version:"3.1.0"}}}}};ha.registerPatch(Va);ha.registerPatch(za);class Ya{constructor(a=ga,e=ha){this.catalog=a,this.patchManager=e}setCatalog(a){this.catalog=a}analyze(a,e=null){if(!a||typeof a!="string"||!a.trim())return this.getEmptyResult();const t=this.normalize(a),i=this.extractExistingShorthands(a),r=this.stripShorthands(a),n=this.analyzeIntent(r),{editAreas:s,lockedAreas:o,unchangedAreas:d}=this.extractAreas(r,n),l=this.queryPrimaryShorthands(r,s,o,n),u=this.deduplicateByFunctionGroup(l).map(b=>({...b,isPrimary:!0,checked:!0,priority:"WAJIB"})),p=this.discoverRelatedShorthands(r,u,s,o),h=[...u,...p],g=this.detectConflicts(s,o,u,i),T=this.evaluateExclusions(h,u);let k=[];if(e&&Array.isArray(e))k=[...e];else{const b=u.sort((A,O)=>(A.promptIndex??999)-(O.promptIndex??999)).map(A=>A.code),R=new Set([...i,...b]);k=Array.from(R)}for(const b of h)b.checked=k.includes(b.code),b.active=b.checked;const f=this.generateVisualTransformation(s,o,r),I=this.buildOptimalPrompt(r,k),v={rawPrompt:a,normalizedPrompt:t,cleanText:r,intent:n,editAreas:s,lockedAreas:o,unchangedAreas:d,conflicts:g,primaryShorthands:u,relatedShorthands:p,recommendations:h,exclusions:T,installedShorthands:k,visualTransformation:f,optimalPrompt:I,timestamp:new Date().toISOString()};return this.patchManager&&typeof this.patchManager.safeExecuteHook=="function"?this.patchManager.safeExecuteHook("afterAnalysis",v,{engine:this,patchManager:this.patchManager,rawPrompt:a}):v}normalize(a){return a.trim().replace(/\s+/g," ")}extractExistingShorthands(a){const e=/\/([a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?)/g,t=[];let i;for(;(i=e.exec(a))!==null;)t.push(i[0]);return Array.from(new Set(t))}stripShorthands(a){return a.replace(/\/[a-zA-Z0-9_\-:]+(?:\s+[0-9:]+)?/g,"").replace(/\s+/g," ").trim()}analyzeIntent(a){const e=a.toLowerCase();let t="MODIFIKASI_VISUAL",i="Gambar",r="Memproses instruksi visual pada gambar.",n="MEDIUM",s="GENERAL";return e.includes("pencahayaan")||e.includes("lighting")||e.includes("terangkan")||e.includes("gelap")?(t="PENINGKATAN_PENCAHAYAAN",i="Pencahayaan & Tata Cahaya",r="Memperbaiki dan meningkatkan kualitas pencahayaan serta dynamic range pada foto.",n="HIGH",s="LIGHTING"):e.includes("hijab")||e.includes("kerudung")||e.includes("headwear")||e.includes("penutup kepala")?(t="PELEPASAN_PENUTUP_KEPALA",i="Hijab / Penutup Kepala",r="Melepaskan atau menghapus penutup kepala/hijab dengan rekonstruksi rambut alami subjek.",n="HIGH",s="HEADWEAR"):e.includes("baju")||e.includes("pakaian")||e.includes("outfit")||e.includes("tanktop")||e.includes("gaun")||e.includes("kemeja")?(t="PENGGANTIAN_BUSANA",i="Pakaian & Outfit",r="Mengganti busana subjek sesuai spesifikasi pakaian yang diminta.",n="HIGH",s="OUTFIT"):e.includes("tajam")||e.includes("sharpen")||e.includes("perjelas")||e.includes("jernih")||e.includes("ketajaman")?(t="PENAJAMAN_DETAIL",i="Mikrokontras & Detail",r="Meningkatkan mikrokontras ketajaman tekstur dan resolusi visual foto.",n="HIGH",s="IMAGE_QUALITY"):e.includes("hapus latar")||e.includes("hapus background")||e.includes("transparan")||e.includes("hilangkan background")||e.includes("buang background")?(t="PENGHAPUSAN_LATAR",i="Latar Belakang / Background",r="Mengisolasi subjek utama dan menghapus latar belakang menjadi transparan (matte alpha).",n="CRITICAL",s="TRANSPARENCY"):e.includes("ganti background")||e.includes("ganti latar")||e.includes("latar baru")||e.includes("gunakan latar baru")||e.includes("pemandangan baru")?(t="PENGGANTIAN_LATAR",i="Latar Belakang / Background",r="Mengganti latar belakang dengan pemandangan atau suasana lingkungan baru.",n="HIGH",s="BACKGROUND"):e.includes("rasio")||e.includes("9:16")||e.includes("16:9")||e.includes("1:1")||e.includes("4:5")||e.includes("aspect ratio")?(t="PENYESUAIAN_RASIO_KANVAS",i="Kanvas & Dimensi",r="Menyetel rasio kanvas gambar ke dimensi target yang ditentukan.",n="HIGH",s="CANVAS_RATIO"):e.includes("rambut")||e.includes("hair")||e.includes("botak")||e.includes("cukur")?(t="MODIFIKASI_RAMBUT",i="Rambut & Gaya Rambut",r="Menyesuaikan struktur, warna, atau gaya potongan rambut subjek.",n="HIGH",s="HAIR"):e.includes("montok")||e.includes("berisi")||e.includes("curvy")||e.includes("voluptuous")||e.includes("plussize")||e.includes("fullfigured")||e.includes("tubuh montok")||e.includes("badan montok")||e.includes("tubuh berlekuk")?(t="MODIFIKASI_BENTUK_TUBUH",i="Bentuk Tubuh & Proporsi Lekuk",r="Menyesuaikan bentuk dan proporsi tubuh menjadi montok / berisi secara natural.",n="HIGH",s="BODY_POSE"):e.includes("tangan")||e.includes("jari")||e.includes("hand")||e.includes("hands")||e.includes("finger")||e.includes("fingers")||e.includes("anatomi tangan")?(t="PENYEMPURNAAN_ANATOMI_TANGAN",i="Tangan & Jari Subjek",r="Menyempurnakan proporsi anatomi tangan dan jari agar tampak natural dan sempurna.",n="HIGH",s="BODY_POSE"):e.includes("resolusi")||e.includes("resolution")||e.includes("high res")||e.includes("super resolution")||e.includes("4k")||e.includes("8k")||e.includes("upscale")||e.includes("kualitas tinggi")?(t="PENINGKATAN_RESOLUSI",i="Resolusi & Detail Gambar",r="Meningkatkan resolusi dan kejernihan mikrotekstur gambar ke standar resolusi tinggi.",n="HIGH",s="IMAGE_QUALITY"):(e.includes("memperluas foto")||e.includes("perluas foto")||e.includes("perluas kanvas")||e.includes("perlebar foto")||e.includes("perlebar gambar")||e.includes("perpanjang foto")||e.includes("outpaint")||e.includes("outpainting")||e.includes("uncrop")||e.includes("expand canvas")||e.includes("canvas extension"))&&(t="PERLUASAN_KANVAS_OUTPAINT",i="Bidang & Batas Kanvas Foto",r="Memperluas dimensi bidang gambar di luar batas kanvas asli (AI Outpainting & Frame Extension).",n="HIGH",s="CANVAS_RATIO"),{primaryAction:t,primaryTarget:i,summary:r,priority:n,category:s}}extractAreas(a,e){const t=a.toLowerCase(),i=[],r=[],n=new Set,s=y=>{for(const E of y){if(!t.includes(E))continue;if([`jangan ubah ${E}`,`jangan ganti ${E}`,`jangan sentuh ${E}`,`jangan mengubah ${E}`,`pertahankan ${E}`,`kunci ${E}`,`jaga ${E}`,`${E} asli`,`${E} tetap`,`${E} sama`,`${E} harus tetap sama`,`keep ${E}`,`same ${E}`,`preserve ${E}`].some(U=>t.includes(U)))return!0}return!1},o=y=>{for(const E of y){if(!t.includes(E))continue;if([`ubah ${E}`,`ganti ${E}`,`hapus ${E}`,`hilangkan ${E}`,`perbaiki ${E}`,`tingkatkan ${E}`,`buat ${E}`,`lepas ${E}`,`lepaskan ${E}`,`buka ${E}`,`change ${E}`,`remove ${E}`].some(U=>t.includes(U))||E==="pencahayaan"&&(t.includes("perbaiki pencahayaan")||t.includes("lighting")||t.includes("terangkan"))||E==="hijab"&&(t.includes("hapus hijab")||t.includes("lepas hijab")||t.includes("lepaskan hijab")||t.includes("tanpa hijab"))||E==="baju"&&(t.includes("tanktop")||t.includes("kemeja")||t.includes("gaun")||t.includes("jaket"))||E==="rasio"&&(t.includes("9:16")||t.includes("16:9")||t.includes("1:1")||t.includes("4:5"))||E==="latar"&&(t.includes("latar baru")||t.includes("gunakan latar baru")||t.includes("hapus latar")))return!0}return!1},d=["wajah","muka","face","identitas","paras"];d.some(y=>t.includes(y))&&(n.add("FACE"),s(d)?r.push({entity:"FACE",label:"Wajah & Identitas",action:"LOCKED",description:"Fitur wajah, mata, bibir, hidung, dan ekspresi asli subjek dikunci 100%.",shorthand:"/facelock"}):o(d)&&i.push({entity:"FACE",label:"Wajah & Fitur Wajah",action:"EDIT",description:"Memodifikasi karakteristik atau ekspresi wajah subjek.",shorthand:t.includes("ganti wajah")?"/facechange":"/faceedit"}));const l=["hijab","kerudung","jilbab","penutup kepala","topi"];l.some(y=>t.includes(y))&&(n.add("HEADWEAR"),s(l)?r.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"LOCKED",description:"Penutup kepala asli dipertahankan tanpa perubahan.",shorthand:"/headwearlock"}):i.push({entity:"HEADWEAR",label:"Penutup Kepala / Hijab",action:"REMOVE / EDIT",description:"Menghapus atau melepaskan penutup kepala/hijab dengan rekonstruksi rambut alami.",shorthand:"/headwear-remove"}));const u=["baju","pakaian","outfit","busana","tanktop","kemeja","celana","gaun","jaket"];if(u.some(y=>t.includes(y)))if(n.add("OUTFIT"),s(u))r.push({entity:"OUTFIT",label:"Pakaian & Busana",action:"LOCKED",description:"Busana dan tekstur kain asli subjek tetap dipertahankan.",shorthand:"/outfitlock"});else{let y="Pakaian subjek";t.includes("tanktop putih tali tipis")?y="Tanktop putih tali tipis":t.includes("tanktop")?y="Tanktop":t.includes("gaun")?y="Gaun":t.includes("kemeja")&&(y="Kemeja"),i.push({entity:"OUTFIT",label:"Pakaian (Outfit)",action:"REPLACE",description:`Mengganti pakaian subjek menjadi: ${y}.`,shorthand:"/outfit"})}const p=["latar","background","backdrop","lingkungan"];if(p.some(y=>t.includes(y))&&(n.add("BACKGROUND"),s(p)?r.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"LOCKED",description:"Lingkungan, latar belakang, dan pencahayaan ambien dikunci.",shorthand:"/backgroundlock"}):t.includes("hapus")||t.includes("transparan")||t.includes("hilangkan")||t.includes("buang")?i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REMOVE / TRANSPARENT",description:"Latar belakang dihapus dan diubah menjadi transparan bersih.",shorthand:"/bgremove"}):(t.includes("ganti")||t.includes("ubah")||t.includes("baru")||t.includes("gunakan latar baru")||t.includes("studio"))&&i.push({entity:"BACKGROUND",label:"Latar Belakang (Background)",action:"REPLACE",description:"Mengganti latar belakang dengan suasana atau pemandangan baru.",shorthand:"/bgreplace"})),(t.includes("pencahayaan")||t.includes("lighting")||t.includes("terangkan")||t.includes("cahaya"))&&(n.add("LIGHTING"),i.push({entity:"LIGHTING",label:"Pencahayaan (Lighting)",action:"ENHANCE",description:"Pencahayaan foto dioptimalkan, menyeimbangkan highlight dan shadow.",shorthand:"/enhance"})),["resolusi","resolution","high res","super resolution","4k","8k","upscale","kualitas tinggi"].some(y=>t.includes(y))?(n.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Resolusi & Mikrotekstur Gambar",action:"HIGH_RESOLUTION",description:"Resolusi dan kepadatan piksel ditingkatkan ke tingkat resolusi ultra-tinggi.",shorthand:"/highresolution"})):(t.includes("tajam")||t.includes("sharpen")||t.includes("perjelas")||t.includes("detail")||t.includes("ketajaman"))&&(n.add("IMAGE_QUALITY"),i.push({entity:"IMAGE_QUALITY",label:"Ketajaman & Mikrokontras",action:"SHARPEN",description:"Detail halus dan mikrokontras foto dipertajam secara profesional.",shorthand:"/sharpen"})),t.includes("rasio")||t.includes("9:16")||t.includes("16:9")||t.includes("1:1")||t.includes("4:5")||t.includes("format")){n.add("CANVAS_RATIO");let y="Rasio baru",E="/ar 9:16";t.includes("9:16")?(y="9:16 (Vertical)",E="/ar 9:16"):t.includes("16:9")?(y="16:9 (Landscape)",E="/ar 16:9"):t.includes("1:1")?(y="1:1 (Persegi)",E="/ar 1:1"):t.includes("4:5")&&(y="4:5 (Portrait)",E="/ar 4:5"),i.push({entity:"CANVAS_RATIO",label:"Dimensi & Rasio Kanvas",action:"SET_ASPECT_RATIO",description:`Mengatur rasio kanvas gambar menjadi format ${y}.`,shorthand:E})}["memperluas foto","perluas foto","perluas kanvas","perlebar foto","perlebar gambar","perpanjang foto","outpaint","outpainting","uncrop","expand canvas","canvas extension"].some(y=>t.includes(y))&&(n.add("CANVAS_RATIO"),i.push({entity:"CANVAS_RATIO",label:"Ekspansi Kanvas & Outpainting",action:"PERLUASAN_KANVAS_OUTPAINT",description:"Memperluas bidang foto di luar batas kanvas asli (AI Outpainting) secara koheren dan mulus.",shorthand:"/outpaint"})),(t.includes("full body")||t.includes("seluruh tubuh")||t.includes("badan penuh"))&&(n.add("BODY_POSE"),i.push({entity:"BODY_POSE",label:"Komposisi & Framing",action:"FULL_BODY_EXPAND",description:"Memperluas framing gambar untuk menampilkan subjek dari kepala hingga kaki.",shorthand:"/fullbody"}));const k=["rambut","hair","botak","cukur"];if(k.some(y=>t.includes(y))){n.add("HAIR");const y=s(k),E=o(k)||t.includes("botak")||t.includes("merah")||t.includes("cat")||t.includes("gaya rambut");y&&E?(r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Mempertahankan rambut asli subjek.",shorthand:"/hairlock"}),i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT_STYLE",description:t.includes("botak")?"Memangkas rambut menjadi botak":"Mengubah gaya rambut subjek",shorthand:"/hairchange"})):y?r.push({entity:"HAIR",label:"Rambut Subjek",action:"LOCKED",description:"Gaya dan warna rambut asli dipertahankan konsisten.",shorthand:"/hairlock"}):E&&i.push({entity:"HAIR",label:"Rambut Subjek",action:"EDIT",description:t.includes("botak")?"Mengubah gaya rambut menjadi botak":"Mengubah gaya atau warna rambut",shorthand:"/hairchange"})}const f=["tubuh","badan","pose","postur"],I=["montok","berisi","curvy","voluptuous","plussize","fullfigured","berlekuk","hourglass"],v=I.some(y=>t.includes(y));(f.some(y=>t.includes(y))||v)&&(n.add("BODY_POSE"),s([...f,...I])?r.push({entity:"BODY_POSE",label:"Postur Tubuh & Anatomi",action:"LOCKED",description:"Pose, siluet, dan proporsi anatomis tubuh dipertahankan.",shorthand:"/bodylock"}):v&&i.push({entity:"BODY_POSE",label:"Bentuk Tubuh & Proporsi Lekuk",action:"VOLUPTUOUS_SHAPE",description:"Bentuk dan lekuk tubuh disesuaikan menjadi montok / berisi secara natural.",shorthand:"/bodyvoluptuous"}));const R=["tangan","jari","hand","hands","finger","fingers","anatomi tangan"];R.some(y=>t.includes(y))&&(n.add("BODY_POSE"),s(R)?r.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"LOCKED",description:"Bentuk dan posisi tangan asli dipertahankan konsisten.",shorthand:"/bodylock"}):i.push({entity:"BODY_POSE",label:"Anatomi Tangan & Jari",action:"HAND_PERFECT_ANATOMY",description:"Proporsi tangan dan jari disempurnakan menjadi natural dan proporsional.",shorthand:"/handperfect"}));const O=[{key:"FACE",label:"Wajah & Identitas"},{key:"BACKGROUND",label:"Latar Belakang"},{key:"OUTFIT",label:"Pakaian & Busana"},{key:"BODY_POSE",label:"Postur & Anatomi Tubuh"},{key:"LIGHTING",label:"Pencahayaan"}].filter(y=>!n.has(y.key)).map(y=>({entity:y.key,label:y.label,status:"UNCHANGED",description:`Tidak termodifikasi karena tidak ada permintaan perubahan pada ${y.label.toLowerCase()}.`}));return{editAreas:i,lockedAreas:r,unchangedAreas:O}}findPromptIndex(a,e,t=[]){const i=a.toLowerCase();let r=999;const n=[...e.semanticTriggers||[],...t];for(const s of n){if(!s||s.length<3)continue;const o=i.indexOf(s.toLowerCase());o!==-1&&o<r&&(r=o)}return r}queryPrimaryShorthands(a,e,t,i){const r=new Map;for(const n of t)if(n.shorthand){const s=this.catalog.find(o=>o.code===n.shorthand);if(s){const o=this.findPromptIndex(a,s,[n.label,n.entity,"jangan","pertahankan","kunci"]);r.set(s.code,{item:s,code:s.code,name:s.name,category:s.category,target:n.label,priority:"WAJIB",reason:`Kritis untuk menjamin ${n.description.toLowerCase()}`,score:100,promptIndex:o})}}for(const n of e)if(n.shorthand){const s=this.catalog.find(o=>o.code===n.shorthand);if(s){const o=this.findPromptIndex(a,s,[n.label,n.entity,"ubah","ganti","hapus"]);r.set(s.code,{item:s,code:s.code,name:s.name,category:n.category||s.category,target:n.label,priority:"WAJIB",reason:`Mendukung eksekusi ${n.description.toLowerCase()}`,score:95,promptIndex:o})}}if(e.some(n=>n.entity==="LIGHTING")&&!r.has("/enhance")){const n=this.catalog.find(s=>s.code==="/enhance");n&&r.set("/enhance",{item:n,code:n.code,name:n.name,category:n.category,target:"Seluruh Gambar",priority:"WAJIB",reason:"Mendukung peningkatan dan penyeimbangan kualitas visual pencahayaan secara menyeluruh.",score:85,promptIndex:this.findPromptIndex(a,n,["pencahayaan","lighting"])})}if(e.some(n=>n.entity==="IMAGE_QUALITY")&&!r.has("/sharpen")&&!r.has("/highresolution")){const n=this.catalog.find(s=>s.code==="/sharpen");n&&r.set("/sharpen",{item:n,code:n.code,name:n.name,category:n.category,target:"Detail & Mikrokontras",priority:"WAJIB",reason:"Meningkatkan kejernihan tekstur dan mikrokontras tepian objek.",score:85,promptIndex:this.findPromptIndex(a,n,["tajam","sharpen"])})}for(const n of this.catalog){if(r.has(n.code))continue;const s=W(n,a);if(s>=70){if(t.some(u=>{if(u.shorthand&&n.conflicts&&n.conflicts.includes(u.shorthand))return!0;const p=this.catalog.find(h=>h.code===u.shorthand);return!!(p&&p.conflicts&&p.conflicts.includes(n.code))})||Array.from(r.values()).some(u=>{var p,h;return(h=(p=u.item)==null?void 0:p.relationships)==null?void 0:h.some(g=>g.code===n.code&&g.relationType==="ALTERNATIVE")}))continue;n.category;const l=this.findPromptIndex(a,n);r.set(n.code,{item:n,code:n.code,name:n.name,category:n.category,target:n.target,priority:"WAJIB",reason:`Instruksi user cocok dengan trigger semantik '${n.name}'.`,score:s,promptIndex:l})}}return Array.from(r.values())}deduplicateByFunctionGroup(a){var i,r,n;const e=new Map;for(const s of a){const o=((i=s.item)==null?void 0:i.functionGroup)||((r=s.item)==null?void 0:r.category)||s.code;e.has(o)?e.get(o).push(s):e.set(o,[s])}const t=[];for(const[s,o]of e.entries()){if(o.length===1){t.push(o[0]);continue}o.sort((p,h)=>{var v,b,R,A;const g=(v=p.item)!=null&&v.preferredRepresentative?1:0,T=(b=h.item)!=null&&b.preferredRepresentative?1:0;if(T!==g)return T-g;const k={CORE:4,APPROVED:3,CUSTOM:2,DISCOVERED:1,DISABLED:0},f=k[(R=p.item)==null?void 0:R.status]||2,I=k[(A=h.item)==null?void 0:A.status]||2;return I!==f?I-f:(h.score||0)!==(p.score||0)?(h.score||0)-(p.score||0):p.code.length-h.code.length});const d={...o[0]},l=o.slice(1).map(p=>p.code),u=Array.from(new Set([...((n=d.item)==null?void 0:n.equivalentTo)||[],...l,...o.slice(1).flatMap(p=>{var h;return((h=p.item)==null?void 0:h.equivalentTo)||[]})])).filter(p=>p!==d.code);d.item={...d.item,equivalentTo:u},d.equivalentTo=u,t.push(d)}return t}hasConflict(a,e,t){if(!a)return!1;for(const i of e){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const r=this.catalog.find(n=>n.code===i);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}for(const i of t){if(a.code===i)continue;if(a.conflicts&&a.conflicts.includes(i))return!0;const r=this.catalog.find(n=>n.code===i);if(r&&r.conflicts&&r.conflicts.includes(a.code))return!0}return!1}discoverRelatedShorthands(a,e,t,i){var h;const r=new Set(e.map(g=>g.code));for(const g of e)if(g.equivalentTo)for(const T of g.equivalentTo)r.add(T);const n=new Set(e.map(g=>{var T,k;return((T=g.item)==null?void 0:T.functionGroup)||((k=g.item)==null?void 0:k.category)})),s=new Set([...t.map(g=>g.entity),...i.map(g=>g.entity)]),o=new Set(i.map(g=>g.shorthand).filter(Boolean)),d=new Map;for(const g of e){const T=((h=g.item)==null?void 0:h.relationships)||[];for(const k of T){if(!k.code||r.has(k.code))continue;const f=this.catalog.find(v=>v.code===k.code);if(!f||this.hasConflict(f,o,r)||W(f,a)<0)continue;const I=f.functionGroup||f.category;n.has(I)||f.category==="HEADWEAR"&&!s.has("HEADWEAR")||d.has(f.code)||d.set(f.code,{item:f,code:f.code,name:f.name,category:f.category,target:f.target,functionGroup:I,description:f.description,relationship:k.relationType||"DIRECTLY_RELATED",reason:k.reason||`Berhubungan dengan ${g.name}`,source:f.source||"CORE",priority:"DISARANKAN",score:80,isPrimary:!1,checked:!1})}}const l={HEADWEAR:[{category:"HAIR",relation:"REVEALED_BY_REMOVAL",reason:"Terekspos ketika hijab atau penutup kepala dibuka."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Melindungi identitas wajah tetap konsisten saat penutup kepala dimodifikasi."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada bagian kepala yang baru terbuka."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan detail helai rambut natural."}],OUTFIT:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah tetap terlindungi saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga proporsi tubuh dan postur asli subjek saat mengganti busana."},{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten saat pakaian diganti."},{category:"LOCK_PRESERVATION",target:"BACKGROUND",relation:"PRESERVATION_RELATED",reason:"Mengunci latar belakang asli agar fokus perubahan tertuju pada busana baru."},{category:"BODY_POSE",relation:"CONTEXTUAL",reason:"Menyesuaikan pose atau framing tubuh agar selaras dengan busana baru."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyeimbangkan pencahayaan pada kain pakaian baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertegas detail lipatan dan mikrokontras tekstur kain."},{category:"BACKGROUND",relation:"CONTEXTUAL",reason:"Menyelaraskan pemandangan latar belakang dengan busana baru."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Grading tone warna agar busana menyatu secara harmonis."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Penyelarasan estetika gaya visual sinematik dengan busana baru."}],BACKGROUND:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Menyelaraskan pencahayaan subjek dengan pemandangan latar belakang."},{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Mengunci identitas wajah di latar baru."},{category:"LOCK_PRESERVATION",target:"OUTFIT",relation:"PRESERVATION_RELATED",reason:"Menjaga busana asli subjek saat latar belakang diganti."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Menyelaraskan grading warna subjek dan background."},{category:"STYLE_EFFECT",relation:"CONTEXTUAL",reason:"Menyesuaikan gaya artistik scene baru."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Mempertahankan ketajaman subjek terhadap latar baru."}],LIGHTING:[{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menyempurnakan mikrokontras dan ketajaman setelah pencahayaan ditingkatkan."},{category:"COLOR_TONE",relation:"CONTEXTUAL",reason:"Memberikan nuansa tone warna estetik pada pencahayaan."}],IMAGE_QUALITY:[{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Komplementer dengan peningkatan exposure dan dynamic range."}],CANVAS_RATIO:[{category:"BODY_POSE",relation:"COMPOSITION_RELATED",reason:"Menyesuaikan framing tubuh (full body / portrait) sesuai format rasio."}],HAIR:[{category:"LOCK_PRESERVATION",target:"FACE_IDENTITY",relation:"PRESERVATION_RELATED",reason:"Menjaga identitas wajah saat gaya rambut disesuaikan."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan helai dan tekstur rambut."}],FACE:[{category:"LOCK_PRESERVATION",target:"HAIR",relation:"PRESERVATION_RELATED",reason:"Menjaga rambut tetap konsisten bersamaan dengan perlindungan wajah."},{category:"LOCK_PRESERVATION",target:"BODY_POSE",relation:"PRESERVATION_RELATED",reason:"Menjaga postur tubuh tetap konsisten bersamaan dengan perlindungan wajah."},{category:"IMAGE_QUALITY",relation:"QUALITY_RELATED",reason:"Menajamkan mikrokontras dan detail ekspresi wajah subjek."},{category:"LIGHTING",relation:"QUALITY_RELATED",reason:"Pencahayaan yang optimal dan seimbang pada wajah subjek."}]};for(const g of s){const T=l[g]||[];for(const k of T)for(const f of this.catalog){if(r.has(f.code)||d.has(f.code)||k.category&&f.category!==k.category||k.target&&f.target!==k.target||f.category==="HEADWEAR"&&!s.has("HEADWEAR")||f.category==="TRANSPARENCY"&&!s.has("BACKGROUND")||this.hasConflict(f,o,r)||W(f,a)<0)continue;const I=f.functionGroup||f.category;n.has(I)||d.set(f.code,{item:f,code:f.code,name:f.name,category:f.category,target:f.target,functionGroup:I,description:f.description,relationship:k.relation||"CONTEXTUAL",reason:k.reason||`Berhubungan dengan area ${g}`,source:f.source||"CORE",priority:"DISARANKAN",score:75,isPrimary:!1,checked:!1})}}const u=Array.from(d.values());return this.deduplicateByFunctionGroup(u).map(g=>({...g,isPrimary:!1,checked:!1,priority:g.priority||"DISARANKAN"}))}detectConflicts(a,e,t,i){const r=[];for(const o of a){const d=e.find(l=>l.entity===o.entity);if(d){const l={id:`conflict-${o.entity.toLowerCase()}`,entity:o.entity,label:o.label,type:"EDIT_VS_LOCK",shorthandA:d.shorthand||`[Lock ${o.entity}]`,shorthandB:o.shorthand||`[Ubah ${o.entity}]`,instructionA:d.description,instructionB:o.description,reason:`Kedua instruksi memiliki tujuan yang bertentangan: meminta mengunci ${o.label} sekaligus meminta mengubahnya.`,options:[{id:"use_user_edit",label:"Gunakan Instruksi Ubah (Abaikan Kunci)"},{id:"keep_lock",label:"Pertahankan Kunci (Batalkan Ubah)"},{id:"edit_shorthand",label:"Sesuaikan Shorthand Manual"}]};l.suggestion=this.generateConflictSuggestion(l),r.push(l)}}const n=Array.isArray(t)?t.map(o=>typeof o=="string"?o:o.code):Array.from(t.keys?t.keys():[]),s=Array.from(new Set([...n,...i]));for(const o of s){const d=this.catalog.find(l=>l.code===o);if(!(!d||!d.conflicts||d.conflicts.length===0)){for(const l of d.conflicts)if(s.includes(l)){if(r.some(h=>h.shorthandA===o&&h.shorthandB===l||h.shorthandA===l&&h.shorthandB===o))continue;const p=`conflict-${[o,l].sort().join("-")}`;if(!r.some(h=>h.id===p)){const h=this.catalog.find(T=>T.code===l),g={id:p,entity:d.target,label:d.name,type:"SHORTHAND_CLASH",shorthandA:o,shorthandB:l,instructionA:d.description,instructionB:h?h.description:`Konflik dengan direktif ${l}`,reason:`Shorthand ${o} bertentangan langsung dengan ${l} pada target ${d.target}.`,options:[{id:"keep_a",label:`Gunakan ${o}`},{id:"keep_b",label:`Gunakan ${l}`}]};g.suggestion=this.generateConflictSuggestion(g,d,h),r.push(g)}}}}return r}generateConflictSuggestion(a,e=null,t=null){const i=(a.shorthandA||"").toLowerCase(),r=(a.shorthandB||"").toLowerCase(),n=[i,r].sort().join(" vs ");if(n==="/backgroundlock vs /bgblur"||i==="/backgroundlock"&&r==="/bgblur"||r==="/backgroundlock"&&i==="/bgblur")return"Tentukan prioritas latar belakang: Jika ingin efek kedalaman optik (bokeh/buram lembut) agar subjek di depan lebih menonjol, pilih /bgblur dan lepaskan /backgroundlock. Namun jika lingkungan asli wajib dipertahankan utuh tanpa sentuhan blur, pertahankan /backgroundlock dan batalkan /bgblur.";if(n==="/backgroundlock vs /studiobg"||i==="/backgroundlock"&&r==="/studiobg"||r==="/backgroundlock"&&i==="/studiobg")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar menjadi backdrop studio foto profesional dengan pencahayaan terkontrol, pilih /studiobg dan lepaskan /backgroundlock. Sebaliknya, jika latar tempat foto asli harus dipertahankan 100%, pertahankan /backgroundlock.";if(n==="/backgroundlock vs /bgreplace"||i==="/backgroundlock"&&r==="/bgreplace"||r==="/backgroundlock"&&i==="/bgreplace")return"Tentukan prioritas latar belakang: Jika ingin mengganti latar dengan lokasi atau pemandangan baru, pilih /bgreplace dan lepaskan /backgroundlock. Pertahankan /backgroundlock jika lokasi asli tidak boleh diganti.";if(n==="/backgroundlock vs /bgremove"||i==="/backgroundlock"&&r==="/bgremove"||r==="/backgroundlock"&&i==="/bgremove")return"Tentukan prioritas latar belakang: Jika ingin mengisolasi subjek tanpa latar belakang (transparan murni untuk cutout/stiker/katalog), pilih /bgremove dan lepaskan /backgroundlock. Jika latar asli tetap dibutuhkan, pertahankan /backgroundlock.";if(n==="/bgremove vs /bgreplace"||i==="/bgreplace"&&r==="/bgremove"||i==="/bgremove"&&r==="/bgreplace")return"Pilih hasil akhir latar belakang: Gunakan /bgremove jika ingin hasil potongan transparan murni (matte alpha channel tanpa latar), atau gunakan /bgreplace jika ingin mengganti latar belakang dengan pemandangan/lokasi baru. Kedua direktif ini saling meniadakan.";if(n==="/bgblur vs /bgremove"||i==="/bgblur"&&r==="/bgremove"||i==="/bgremove"&&r==="/bgblur")return"Pilih efek latar: Efek blur (/bgblur) tidak dapat diterapkan jika latar belakang dihapus transparan (/bgremove). Gunakan /bgremove untuk subjek terpotong transparan, atau /bgblur untuk mempertahankan latar dengan blur lembut.";if(n==="/bgremove vs /studiobg"||i==="/studiobg"&&r==="/bgremove"||i==="/bgremove"&&r==="/studiobg")return"Pilih jenis latar: Gunakan /studiobg jika ingin subjek berada di latar belakang studio foto, atau gunakan /bgremove jika membutuhkan subjek terisolasi tanpa latar (transparan PNG).";if(n==="/bgblur vs /studiobg"||i==="/studiobg"&&r==="/bgblur"||i==="/bgblur"&&r==="/studiobg")return"Pilih salah satu: Latar studio (/studiobg) umumnya sudah bersih dan seragam. Jika menginginkan efek bokeh ekstra dramatis, pertahankan /bgblur, namun jika ingin pencahayaan studio standar, cukup gunakan /studiobg.";if(i==="/facelock"||r==="/facelock"){const o=i==="/facelock"?r:i;return`Tentukan prioritas wajah: Jika identitas wajah dan fitur asli harus persis sama (100% konsisten), pertahankan /facelock dan batalkan ${o}. Jika instruksi Anda sengaja ingin merombak ekspresi, bentuk, atau fitur muka baru, lepaskan /facelock dan gunakan ${o}.`}if(i==="/outfitlock"||r==="/outfitlock")return`Tentukan prioritas pakaian: Pertahankan /outfitlock jika busana asli subjek wajib dilindungi dari perubahan. Jika ingin mengenakan pakaian atau kostum baru, lepaskan /outfitlock dan terapkan ${i==="/outfitlock"?r:i}.`;if(i==="/hairlock"||r==="/hairlock")return`Tentukan prioritas rambut: Pertahankan /hairlock jika model dan helai rambut asli tidak boleh berubah. Jika ingin mengubah model potongan, warna, atau tekstur rambut, lepaskan /hairlock dan gunakan ${i==="/hairlock"?r:i}.`;if(i==="/headwearlock"||r==="/headwearlock")return`Tentukan prioritas penutup kepala: Pertahankan /headwearlock jika hijab/aksesori kepala asli harus tetap terpasang. Gunakan ${i==="/headwearlock"?r:i} jika ingin melepas atau mengganti penutup kepala.`;if(i==="/bodylock"||r==="/bodylock")return`Tentukan prioritas tubuh: Pertahankan /bodylock jika proporsi dan postur tubuh asli tidak boleh diubah. Jika ingin menyesuaikan bentuk kurva atau siluet tubuh, lepaskan /bodylock dan terapkan ${i==="/bodylock"?r:i}.`;if(n==="/cinematic vs /rawphoto"||i==="/cinematic"&&r==="/rawphoto"||i==="/rawphoto"&&r==="/cinematic")return"Pilih gaya visual utama: Gunakan /rawphoto untuk hasil foto mentah autentik khas sensor kamera nyata tanpa filter, atau gunakan /cinematic untuk pencahayaan dramatis dan palet warna berkelas layar lebar.";if(n==="/rawphoto vs /vintage"||i==="/vintage"&&r==="/rawphoto"||i==="/rawphoto"&&r==="/vintage")return"Pilih tekstur visual: Gunakan /rawphoto untuk ketajaman optik kamera digital modern, atau gunakan /vintage untuk nuansa analog film 35mm dengan grain klasik.";if(n==="/cooltone vs /warmtone"||i==="/warmtone"&&r==="/cooltone"||i==="/cooltone"&&r==="/warmtone")return"Tentukan temperatur warna: Pilih /warmtone untuk kesan hangat keemasan yang bersahabat, atau /cooltone untuk atmosfer dingin kebiruan yang modern dan tajam.";if(i==="/monochrome"||r==="/monochrome")return`Tentukan mode warna: Gunakan /monochrome jika menginginkan seni foto hitam-putih monokromatik murni, atau pilih ${i==="/monochrome"?r:i} jika gambar harus tampil berwarna.`;if(n==="/bokeh vs /sharpen"||i==="/sharpen"&&r==="/bokeh"||i==="/bokeh"&&r==="/sharpen")return"Tentukan fokus ketajaman: Pilih /bokeh jika menginginkan kedalaman bidang dangkal dengan blur artistik, atau pilih /sharpen jika ingin mikrotekstur tajam merata di seluruh gambar.";if(a.type==="EDIT_VS_LOCK"){const o=a.shorthandA;return`Tentukan prioritas pada ${a.label||a.entity||"area ini"}: Jika modifikasi baru memang diinginkan, lepaskan kunci (${o}) dan gunakan instruksi ubah. Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${o}) dan batalkan instruksi ubah.`}const s=a.entity||"target yang sama";return`Kedua shorthand (${a.shorthandA} dan ${a.shorthandB}) memiliki instruksi yang saling meniadakan pada ${s}. Disarankan memilih salah satu yang paling mewakili visi visual utama Anda agar AI tidak menghasilkan output yang rancu.`}evaluateExclusions(a,e=[]){const t=new Set(a.map(n=>n.code));for(const n of a)if(n.equivalentTo)for(const s of n.equivalentTo)t.add(s);const i=new Set(e.map(n=>n.code)),r=[];for(const n of this.catalog){if(t.has(n.code))continue;let s="Tidak ada instruksi yang relevan dengan fungsi shorthand ini pada prompt user.";const o=e.find(d=>{var l;return!!(n.conflicts&&n.conflicts.includes(d.code)||(l=d.item)!=null&&l.conflicts&&d.item.conflicts.includes(n.code))});o?s=`Bertentangan dengan direktif aktif: ${o.code} (${o.name}).`:n.category==="LOCK_PRESERVATION"||n.category==="FACE_IDENTITY"?n.code==="/facelock"||n.code==="/faceedit"||n.code==="/facechange"?s="Tidak ada instruksi yang menyentuh atau mengunci area wajah.":n.code==="/hairlock"?s="Tidak ada instruksi yang memodifikasi atau mengunci rambut subjek.":n.code==="/backgroundlock"?s="Latar belakang tidak diminta untuk dikunci secara eksplisit.":n.code==="/outfitlock"?s="Pakaian subjek tidak diminta untuk dikunci.":n.code==="/headwearlock"&&(s="Tidak ada instruksi penutup kepala atau hijab untuk dikunci."):n.category==="HAIR"?s="Tidak ada instruksi yang mengubah gaya atau warna rambut subjek.":n.category==="OUTFIT"?i.has("/outfit")?n.code==="/outfit-remove"?s="Instruksi adalah mengganti busana (/outfit), bukan menanggalkan busana.":n.code==="/outfit-color"?s="Instruksi mengganti model busana baru (/outfit), bukan hanya mengubah warna busana lama.":s="Fungsi modifikasi pakaian sudah diwakili oleh direktif /outfit.":s="Tidak ada instruksi yang memodifikasi pakaian atau busana.":n.category==="HEADWEAR"?s="Tidak ada instruksi penutup kepala atau hijab.":n.category==="BACKGROUND"||n.category==="TRANSPARENCY"?n.code==="/bgremove"?s="Tidak ada permintaan penghapusan latar belakang menjadi transparan.":n.code==="/bgreplace"?s="Tidak ada permintaan penggantian latar belakang ke scene baru.":s="Tidak ada permintaan manipulasi latar belakang.":n.category==="CANVAS_RATIO"?s="Tidak ada instruksi pengubahan rasio kanvas gambar.":n.category==="BODY_POSE"?s="Tidak ada permintaan perubahan pose atau framing seluruh badan.":n.category==="STYLE_EFFECT"||n.category==="CAMERA_PHOTO"?s="Gaya artistik atau karakter kamera khusus tidak dispesifikasikan.":n.category==="EXPRESSION"?s="Tidak ada instruksi perubahan ekspresi atau emosi wajah.":n.category==="OBJECT"&&(s="Tidak ada instruksi penambahan atau penghapusan objek pada adegan."),r.push({code:n.code,name:n.name,category:n.category,target:n.target,description:n.description,reason:s})}return r}generateVisualTransformation(a,e,t){if(a.length===0&&e.length===0)return{from:"Kondisi visual awal gambar sebelum diproses",to:t||"Belum ada transformasi yang diterapkan",summary:"Tidak ada modifikasi visual signifikan yang terdeteksi."};const i=a.map(o=>o.label).join(", "),r=e.map(o=>o.label).join(", ");let n="Elemen visual awal gambar",s="Elemen visual teroptimasi";if(a.some(o=>o.entity==="LIGHTING"))n="Pencahayaan awal (mungkin kurang seimbang, redup, atau flat)",s="Pencahayaan yang diperbaiki, seimbang, dan dioptimalkan secara menyeluruh";else if(a.some(o=>o.entity==="HEADWEAR"))n="Subjek mengenakan penutup kepala / hijab asli",s="Penutup kepala dilepas dengan rekonstruksi rambut alami; "+(r?"wajah & identitas tetap 100% konsisten.":"");else if(a.some(o=>o.entity==="OUTFIT")){const o=a.find(d=>d.entity==="OUTFIT");n="Busana awal subjek",s=`${o?o.description:"Busana baru terpasang"}`+(r?`; ${r} tetap terkunci aman.`:"")}else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REMOVE")))n="Foto subjek dengan latar belakang bawaan",s="Subjek terisolasi rapi dengan latar belakang transparan (alpha channel)";else if(a.some(o=>o.entity==="BACKGROUND"&&o.action.includes("REPLACE")))n="Latar belakang awal foto",s="Latar belakang digantikan dengan pemandangan baru yang harmonis";else if(a.some(o=>o.entity==="CANVAS_RATIO")){const o=a.find(d=>d.entity==="CANVAS_RATIO");n="Dimensi kanvas bawaan foto",s=`${o?o.description:"Dimensi kanvas baru disesuaikan"}`}return{from:n,to:s,summary:`Transformasi pada [${i||"Tanpa Edit"}] dengan preservasi pada [${r||"Elemen Lain"}].`}}buildOptimalPrompt(a,e){if(!a&&e.length===0)return"";let t=a.trim();t&&!t.endsWith(".")&&!t.endsWith("!")&&!t.endsWith("?")&&(t+=".");const i=e.join(" ");return t&&i?`${t} ${i}`:i||t}getEmptyResult(){return{rawPrompt:"",normalizedPrompt:"",cleanText:"",intent:{primaryAction:"-",primaryTarget:"-",summary:"Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:"-",category:"-"},editAreas:[],lockedAreas:[],unchangedAreas:[],conflicts:[],primaryShorthands:[],relatedShorthands:[],recommendations:[],exclusions:[],installedShorthands:[],visualTransformation:{from:"-",to:"-",summary:"-"},optimalPrompt:"",timestamp:null}}}const L={CONNECTED:"CONNECTED",UNCONFIGURED:"UNCONFIGURED",FAILED:"FAILED"};class Wa{constructor(a=[]){this.catalog=a,this.localEngine=new Ya(a),this.status=L.UNCONFIGURED,this.lastError=null,this.initStatusFromStorage()}setCatalog(a){this.catalog=a,this.localEngine.setCatalog(a)}initStatusFromStorage(){N.getApiKey()||(this.status=L.UNCONFIGURED)}getStatus(){return{status:this.status,error:this.lastError,hasKey:!!N.getApiKey()}}extractJson(a){if(!a||typeof a!="string")throw new Error("Respon kosong dari AI.");try{return JSON.parse(a.trim())}catch{}let e=a.replace(/```(?:json)?/gi,"").replace(/```/g,"").trim();try{return JSON.parse(e)}catch{}const t=e.indexOf("{"),i=e.lastIndexOf("}");if(t!==-1&&i>t){const s=e.substring(t,i+1);try{return JSON.parse(s)}catch{}}const r=e.indexOf("["),n=e.lastIndexOf("]");if(r!==-1&&n>r){const s=e.substring(r,n+1);try{return JSON.parse(s)}catch{}}throw new Error("Gagal mem-parsing format JSON dari respons AI.")}async testConnection(a,e){var o;const t=(a||N.getApiKey()).trim(),i=e||N.getModel()||"gemini-2.0-flash";if(!t)return this.status=L.UNCONFIGURED,this.lastError="API Key belum dimasukkan",{success:!1,status:L.UNCONFIGURED,message:"Masukkan Gemini API Key Anda terlebih dahulu."};const r=[i,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((d,l,u)=>d&&u.indexOf(d)===l);let n="",s=null;for(const d of r)try{const l=`https://generativelanguage.googleapis.com/v1beta/models/${d}?key=${encodeURIComponent(t)}`,u=await fetch(l,{method:"GET",headers:{"Content-Type":"application/json"}});if(u.ok){s=d;break}else{if(n=((o=(await u.json().catch(()=>({}))).error)==null?void 0:o.message)||`HTTP ${u.status}: ${u.statusText}`,u.status===404)continue;if(u.status===400||u.status===403)break}}catch(l){n=l.message||"Koneksi jaringan gagal"}if(s)return this.status=L.CONNECTED,this.lastError=null,s!==i&&N.setModel(s),{success:!0,status:L.CONNECTED,message:`Berhasil terhubung ke model ${s}!`};try{const d=`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(t)}`,l=await fetch(d);if(l.ok){const p=((await l.json().catch(()=>({}))).models||[]).find(h=>{var g;return(g=h.supportedGenerationMethods)==null?void 0:g.includes("generateContent")});if(p){const h=p.name.replace(/^models\//,"");return N.setModel(h),this.status=L.CONNECTED,this.lastError=null,{success:!0,status:L.CONNECTED,message:`Berhasil terhubung ke Gemini API (Model: ${h})!`}}}}catch{}return this.status=L.FAILED,this.lastError=n||"Koneksi gagal",{success:!1,status:L.FAILED,message:`Gagal tersambung ke Gemini: ${this.lastError}`}}async analyzePrompt(a,e=null){const t=N.getApiKey().trim(),i=N.getModel()||"gemini-2.0-flash";if(!t)return{...this.localEngine.analyze(a,e),source:"LOCAL_ENGINE",isOnlineActive:!1,engineNotice:"Pencarian Online Shorthand TIDAK AKTIF (Mode Heuristik Lokal — Hubungkan Gemini API Key di Pengaturan untuk mengaktifkan pencarian online tanpa batas)."};try{const n=await this.callGeminiAPI(a,t,i);if(n){const s=this.mergeAiWithCatalog(n,a,e);this.status=L.CONNECTED,this.lastError=null;const o=N.getModel()||i;return{...s,source:"GEMINI_AI",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (${o}) — Menganalisis seluruh isi prompt tanpa batas domain, topik, atau kategori.`}}}catch(n){console.warn("Gemini API call failed, maintaining connection and falling back smoothly to local engine:",n),this.lastError=n.message}return{...this.localEngine.analyze(a,e),source:"LOCAL_ENGINE_FALLBACK",isOnlineActive:!0,engineNotice:`🌐 Pencarian Online Shorthand AKTIF (Fallback lokal sementara: ${this.lastError||"timeout/limit"}). Koneksi tetap tersambung.`}}async callGeminiAPI(a,e,t){const i=[t,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((n,s,o)=>n&&o.indexOf(n)===s);let r=null;for(const n of i)try{const s=await this.executeGenerateContent(a,e,n);if(s)return n!==t&&N.setModel(n),s}catch(s){r=s,console.warn(`Model ${n} tidak dapat digunakan (${s.message}), mencoba model alternatif...`);continue}throw r||new Error("Semua model Gemini tidak dapat dijangkau.")}async executeGenerateContent(a,e,t){var l,u,p,h,g;const i=`https://generativelanguage.googleapis.com/v1beta/models/${t}:generateContent?key=${encodeURIComponent(e)}`,n={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Analyzer V3.1 dengan Fitur Pencarian Online Shorthand Terbuka & Tidak Terbatas.
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

Prompt User: "${a}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}},s=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!s.ok){const T=await s.text();throw new Error(`Gemini API error (${s.status}): ${T}`)}const d=(g=(h=(p=(u=(l=(await s.json()).candidates)==null?void 0:l[0])==null?void 0:u.content)==null?void 0:p.parts)==null?void 0:h[0])==null?void 0:g.text;if(!d)throw new Error("Respon Gemini kosong.");return this.extractJson(d)}mergeAiWithCatalog(a,e,t){var T,k,f,I,v;const i=this.localEngine.analyze(e,t);let r=[];const n=new Set;if(a&&Array.isArray(a.primaryShorthands)&&a.primaryShorthands.length>0){for(const b of a.primaryShorthands){if(!b||!b.code)continue;const R=b.code.startsWith("/")?b.code:`/${b.code}`;if(n.has(R))continue;n.add(R);const A=this.catalog.find(O=>O.code.toLowerCase()===R.toLowerCase());r.push({item:A||null,code:R,name:b.name||(A==null?void 0:A.name)||R,category:b.category||(A==null?void 0:A.category)||"ONLINE_DISCOVERY",target:b.target||(A==null?void 0:A.target)||"Konsep Visual Prompt",description:b.description||(A==null?void 0:A.description)||"Instruksi visual shorthand hasil analisis semantik online.",priority:"WAJIB",reason:b.reason||"Shorthand utama relevan berdasarkan analisis konteks prompt online.",isPrimary:!0,checked:!0,source:A?"CORE":"ONLINE",isOnline:!A,equivalentTo:(A==null?void 0:A.equivalentTo)||b.equivalentTo||[],functionGroup:(A==null?void 0:A.functionGroup)||b.functionGroup||b.category||"ONLINE_EXTENSION"})}if(i.primaryShorthands&&i.primaryShorthands.length>0)for(const b of i.primaryShorthands)b.category==="LOCK_PRESERVATION"&&!n.has(b.code)&&(n.add(b.code),r.push({...b,isPrimary:!0,checked:!0,priority:"WAJIB"}))}else i.primaryShorthands&&i.primaryShorthands.length>0&&(r=i.primaryShorthands);let s=[];const o=new Set([...r.map(b=>b.code)]);if(a&&Array.isArray(a.relatedShorthands))for(const b of a.relatedShorthands){if(!b||!b.code)continue;const R=b.code.startsWith("/")?b.code:`/${b.code}`;if(o.has(R))continue;o.add(R);const A=this.catalog.find(O=>O.code.toLowerCase()===R.toLowerCase());s.push({item:A||null,code:R,name:b.name||(A==null?void 0:A.name)||R,category:b.category||(A==null?void 0:A.category)||"ONLINE_DISCOVERY",target:b.target||(A==null?void 0:A.target)||"Variasi Konsep Visual",description:b.description||(A==null?void 0:A.description)||"Alternatif shorthand hasil analisis semantik online.",priority:b.priority||"DISARANKAN",reason:b.reason||"Alternatif relevan dari pencarian online.",isPrimary:!1,checked:!1,source:A?"CORE":"ONLINE",isOnline:!A,equivalentTo:(A==null?void 0:A.equivalentTo)||b.equivalentTo||[],functionGroup:(A==null?void 0:A.functionGroup)||b.functionGroup||b.category||"ONLINE_EXTENSION"})}if(i.relatedShorthands&&i.relatedShorthands.length>0)for(const b of i.relatedShorthands)o.has(b.code)||(o.add(b.code),s.push(b));let d=[];t&&Array.isArray(t)?d=t:r.length>0?d=r.map(b=>b.code):a.installedShorthands&&Array.isArray(a.installedShorthands)&&a.installedShorthands.length>0?d=a.installedShorthands.map(b=>b.startsWith("/")?b:`/${b}`):i.installedShorthands&&i.installedShorthands.length>0&&(d=i.installedShorthands);const l=i.cleanText||e.trim();let u=i.optimalPrompt;d.length>0?u=`${l}. ${d.join(" ")}`:a.optimalPrompt&&a.optimalPrompt.trim()&&(u=a.optimalPrompt);const p={primaryAction:(T=a.intent)!=null&&T.primaryAction&&a.intent.primaryAction!=="MODIFIKASI_VISUAL"?a.intent.primaryAction:i.intent.primaryAction,primaryTarget:(k=a.intent)!=null&&k.primaryTarget&&a.intent.primaryTarget!=="Gambar"?a.intent.primaryTarget:i.intent.primaryTarget,summary:((f=a.intent)==null?void 0:f.summary)||a.summary||i.intent.summary,priority:((I=a.intent)==null?void 0:I.priority)||i.intent.priority,category:(v=a.intent)!=null&&v.category&&a.intent.category!=="GENERAL"?a.intent.category:i.intent.category},h=a.editAreas&&Array.isArray(a.editAreas)&&a.editAreas.length>0?a.editAreas:i.editAreas,g=a.lockedAreas&&Array.isArray(a.lockedAreas)&&a.lockedAreas.length>0?a.lockedAreas:i.lockedAreas;return{rawPrompt:e,normalizedPrompt:i.normalizedPrompt,cleanText:l,intent:p,editAreas:h,lockedAreas:g,unchangedAreas:i.unchangedAreas,conflicts:a.conflicts&&a.conflicts.length>0?a.conflicts:i.conflicts,primaryShorthands:r,relatedShorthands:s,recommendations:[...r,...s],exclusions:i.exclusions,installedShorthands:d,visualTransformation:a.visualTransformation||i.visualTransformation,optimalPrompt:u,timestamp:new Date().toISOString()}}async searchOnlineShorthand(a){var s,o,d,l,u;if(!a||typeof a!="string"||!a.trim())return{results:[],onlineAvailable:!1,message:""};const e=N.getApiKey()?N.getApiKey().trim():"",t=N.getModel()||"gemini-2.0-flash";if(!e)return{results:[],onlineAvailable:!1,message:"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia (atur Gemini API Key di Pengaturan)."};const i=[t,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((p,h,g)=>p&&g.indexOf(p)===h),n={contents:[{role:"user",parts:[{text:`Anda adalah Prompt Shorthand Dictionary Assistant profesional. Berdasarkan kata kunci pencarian user dalam domain visual APAPUN (tangan/jari, pose tubuh, fotografi, pencahayaan, sinematik, busana, anime, 3D render, efek visual, kamera, warna, latar, dsb.), rekomendasikan notasi shorthand visual AI yang paling tepat, umum, atau representatif (misal: untuk tangan natural -> /handperfect, /hands, /handanatomy, /fingerperfect; untuk pencahayaan -> /enhance, /cinematic, /volumetric-lighting; untuk portrait -> /portrait, /dof, /bokeh, dsb.).
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

Kata kunci pencarian user: "${a.trim()}"`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};for(const p of i)try{const h=`https://generativelanguage.googleapis.com/v1beta/models/${p}:generateContent?key=${encodeURIComponent(e)}`,g=await fetch(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!g.ok)continue;const k=(u=(l=(d=(o=(s=(await g.json()).candidates)==null?void 0:s[0])==null?void 0:o.content)==null?void 0:d.parts)==null?void 0:l[0])==null?void 0:u.text;if(!k)continue;let f=[];try{f=this.extractJson(k)}catch{continue}if(!Array.isArray(f))continue;const I=f.filter(v=>v&&v.code&&typeof v.code=="string").map(v=>({code:v.code.startsWith("/")?v.code:`/${v.code}`,name:v.name||v.code,description:v.description||"Instruksi visual shorthand online",category:v.category||"ONLINE_EXTENDED",source:"ONLINE",isOnline:!0}));return{results:I,onlineAvailable:!0,message:I.length===0?"Tidak ada shorthand online yang cocok.":""}}catch(h){console.warn(`Pencarian online dengan model ${p} gagal:`,h);continue}return{results:[],onlineAvailable:!1,message:"Pencarian online tidak tersedia saat ini."}}async enrichPrompt(a,e=null){var p,h,g,T,k,f;if(!a||typeof a!="string"||!a.trim())throw new Error("Prompt optimal kosong.");const t=N.getApiKey()?N.getApiKey().trim():"",i=N.getModel()||"gemini-2.0-flash";if(!t)throw new Error("Gemini API Key belum terhubung. Silakan atur di menu API & Pengaturan.");const r=a.match(/\/[a-zA-Z0-9_\-:]+/g)||[],n=[i,"gemini-3.5-flash-lite","gemini-3.8-flash","gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((I,v,b)=>I&&b.indexOf(I)===v),s=`Anda adalah Prompt Shorthand Analyzer V3.3 - Asisten Ahli Prompt Enrichment untuk Generative Visual AI.
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
}`,o=((p=e==null?void 0:e.intent)==null?void 0:p.summary)||"",d=`Prompt Optimal Asli:
"${a.trim()}"
${o?`Konteks/Maksud Analisis:
"${o}"
`:""}Shorthand Terpasang Wajib Dipertahankan: ${r.length>0?r.join(" "):"(tidak ada)"}`,l={contents:[{role:"user",parts:[{text:`${s}

${d}`}]}],generationConfig:{temperature:.2,responseMimeType:"application/json"}};let u=null;for(const I of n)try{const v=`https://generativelanguage.googleapis.com/v1beta/models/${I}:generateContent?key=${encodeURIComponent(t)}`,b=await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!b.ok){const E=await b.text();throw new Error(`HTTP ${b.status}: ${E}`)}const A=(f=(k=(T=(g=(h=(await b.json()).candidates)==null?void 0:h[0])==null?void 0:g.content)==null?void 0:T.parts)==null?void 0:k[0])==null?void 0:f.text;if(!A)throw new Error("Respon Gemini kosong.");const O=this.extractJson(A);let y=O.enrichedPrompt||O.prompt||(typeof O=="string"?O:"");if(!y||typeof y!="string"||!y.trim())throw new Error("Hasil pengayaan AI kosong atau tidak valid.");y=y.trim();for(const E of r)y.includes(E)||(y+=` ${E}`);return{success:!0,enrichedPrompt:y,modelUsed:I}}catch(v){u=v,console.warn(`Enrich prompt dengan model ${I} gagal:`,v.message);continue}throw u||new Error("Gagal memperkaya prompt dengan Gemini.")}async analyzeImageToPrompt({imageFile:a=null,imageBase64:e=null,mimeType:t="image/jpeg",referencePrompt:i="",preferredLang:r="id"}){const n=N.getApiKey().trim(),s=N.getModel()||"gemini-2.0-flash";let o="",d=null,l="LOCAL_ENGINE",u=!1,p="";if(n&&e)try{const g=await this.executeMultimodalImageAnalysis(e,t,i,n,s,r);g&&g.generatedPrompt&&(o=g.generatedPrompt,d=g.visualBreakdown||null,l="GEMINI_AI",u=!0,p=`🌐 Analisa Gambar AI AKTIF (${s}) — Menghasilkan Prompt Hasil Analisa visual dari gambar asli.`)}catch(g){console.warn("Gemini multimodal image analysis failed, falling back smoothly to heuristic visual analysis:",g),this.lastError=g.message}return o||(o=this.generateHeuristicImagePrompt(a,i,r),l=n?"LOCAL_ENGINE_FALLBACK":"LOCAL_ENGINE",u=!!n,p=u?`🌐 Mode Analisa Gambar (Fallback Heuristik Visual: ${this.lastError||"offline"}).`:"🖥️ Mode Analisa Gambar (Heuristik Visual Lokal — Masukkan Gemini API Key di Pengaturan untuk analisis AI multimodal langsung)."),{...this.localEngine.analyze(o),mode:"IMAGE_TO_PROMPT",source:l,isOnlineActive:u,engineNotice:p,generatedPrompt:o,visualBreakdown:d,referencePrompt:i||"",imageInfo:{name:(a==null?void 0:a.name)||"reference-image.jpg",size:(a==null?void 0:a.size)||0,type:t}}}async executeMultimodalImageAnalysis(a,e,t,i,r,n="id"){var h,g,T,k,f;const s=[r,"gemini-2.0-flash","gemini-1.5-flash","gemini-2.5-flash"].filter((I,v,b)=>I&&b.indexOf(I)===v),o=a.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/,""),d=`Anda adalah pakar Analisis Gambar Visual AI & Prompt Engineering profesional.
Tugas Anda: Menganalisis gambar referensi yang diunggah secara objektif dan mendalam sebagai SOURCE OF TRUTH.
Identifikasi seluruh elemen visual yang BENAR-BENAR TERDAPAT PADA GAMBAR:
1. Subjek utama (usia, jenis kelamin, peran, penampilan)
2. Pose / aksi (posisi tubuh, gestur)
3. Framing / shot type (closeup, medium shot, full body)
4. Camera angle / sudut pandang kamera (sejajar mata / eye-level, low angle, high angle)
5. Pencahayaan / lighting (pencahayaan alami, daylight, soft lighting, golden hour, studio)
6. Suasana / mood (tenang, damai, profesional)
7. Latar belakang / lingkungan (luar ruangan / outdoor, taman, dalam ruangan)
8. Palet warna (natural tone, warm tone, monokrom)
9. Gaya fotografi / render style (fotografi realistis, photorealistic)
10. Depth of field (latar belakang sedikit blur, bokeh halus, deep focus)
11. Detail visual penting lainnya.

ATURAN PENTING:
- Gunakan bahasa yang sama dengan konteks prompt (${n==="en"?"English":"Bahasa Indonesia"}).
- Deskripsi harus mengalir, jelas, profesional, dan kaya detail visual nyata.
- JANGAN mengarang elemen yang tidak ada di gambar.
- JANGAN menyertakan shorthand "/" di dalam teks generatedPrompt (shorthand akan dipetakan oleh sistem shorthand terpadu).

Format respons HANYA berupa JSON valid:
{
  "generatedPrompt": "Teks deskripsi lengkap mengalir hasil analisa visual gambar...",
  "visualBreakdown": {
    "subject": "Deskripsi subjek",
    "pose": "Deskripsi pose",
    "framing": "Framing kamera",
    "angle": "Sudut pandang",
    "lighting": "Kondisi pencahayaan",
    "mood": "Suasana dan ekspresi",
    "environment": "Latar belakang dan lingkungan",
    "color": "Palet warna",
    "style": "Gaya fotografi",
    "dof": "Kedalaman bidang / bokeh",
    "details": "Detail visual penting lainnya"
  }
}`,l=t&&t.trim()?`Analisis gambar ini dengan panduan konteks pengguna: "${t.trim()}".`:"Analisis gambar ini dan buatkan Prompt Hasil Analisa visual yang komprehensif.",u={contents:[{role:"user",parts:[{inlineData:{mimeType:e||"image/jpeg",data:o}},{text:`${d}

Instruksi: ${l}`}]}],generationConfig:{temperature:.1,responseMimeType:"application/json"}};let p=null;for(const I of s)try{const v=`https://generativelanguage.googleapis.com/v1beta/models/${I}:generateContent?key=${encodeURIComponent(i)}`,b=await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!b.ok){const y=await b.text();throw new Error(`HTTP ${b.status}: ${y}`)}const A=(f=(k=(T=(g=(h=(await b.json()).candidates)==null?void 0:h[0])==null?void 0:g.content)==null?void 0:T.parts)==null?void 0:k[0])==null?void 0:f.text;if(!A)throw new Error("Respon Gemini kosong.");const O=this.extractJson(A);if(O&&O.generatedPrompt)return O}catch(v){p=v,console.warn(`Model ${I} multimodal gagal:`,v.message);continue}throw p||new Error("Gagal menganalisis gambar dengan Gemini API.")}generateHeuristicImagePrompt(a,e,t="id"){if(e&&e.trim())return e.trim();const i=((a==null?void 0:a.name)||"").toLowerCase();return i.includes("man")||i.includes("pria")?"Seorang pria duduk di luar ruangan pada siang hari dengan pencahayaan alami, sudut pandang sejajar mata, ekspresi tenang, gaya fotografi realistis dan latar belakang sedikit blur.":"Seorang wanita duduk di luar ruangan pada siang hari dengan pencahayaan alami, sudut pandang sejajar mata, ekspresi tenang, gaya fotografi realistis dan latar belakang sedikit blur."}async analyzeShorthandImprove(a,e=null){var r,n,s,o,d;const t=await this.analyzePrompt(a,e),i={conflictCount:((r=t.conflicts)==null?void 0:r.length)||0,redundancyCount:(((n=t.recommendations)==null?void 0:n.length)||0)-(((s=t.primaryShorthands)==null?void 0:s.length)||0),isOptimized:(((o=t.conflicts)==null?void 0:o.length)||0)===0,improvementAdvice:((d=t.conflicts)==null?void 0:d.length)>0?"Ditemukan beberapa konflik direktif shorthand. Sistem telah merekomendasikan resolusi terpadu pada banner konflik.":"Shorthand telah dianalisis dan dioptimalkan secara semantik tanpa konflik."};return{...t,mode:"SHORTHAND_IMPROVE",diagnostics:i}}}function Ma(c){return!c||typeof c!="string"?0:c.trim().split(/\s+/).filter(Boolean).length}function Ja(c){if(!c||typeof c!="string")return 0;const a=c.trim();return a?Math.max(1,Math.ceil(a.length/3.8)):0}function qa(c,a=[]){if(!c||a.length===0)return 0;const e=Ma(c);if(e===0)return 0;const t=a.length;return Math.min(100,Math.round(t/e*100))}function Qa(c){return!c||typeof c!="string"?"":c.trim()}function Xa(c,a,e,t){const{status:i}=a;let r="status-unconfigured",n="Gemini: Belum diuji";return i===L.CONNECTED?(r="status-connected",n="Gemini: Tersambung"):i===L.FAILED&&(r="status-failed",n="Gemini: Gagal"),{html:`
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
          <button type="button" class="nav-item ${c==="analyzer"?"active":""}" data-tab="analyzer" role="tab" aria-selected="${c==="analyzer"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            Analyzer
          </button>
          <button type="button" class="nav-item ${c==="dictionary"?"active":""}" data-tab="dictionary" role="tab" aria-selected="${c==="dictionary"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
            Kamus Shorthand
          </button>
          <button type="button" class="nav-item ${c==="json-test"?"active":""}" data-tab="json-test" role="tab" aria-selected="${c==="json-test"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m2 4v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/></svg>
            Test (JSON)
          </button>
          <button type="button" class="nav-item ${c==="catalog"?"active":""}" data-tab="catalog" role="tab" aria-selected="${c==="catalog"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
            Catalog
          </button>
          <button type="button" class="nav-item ${c==="settings"?"active":""}" data-tab="settings" role="tab" aria-selected="${c==="settings"}">
            <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            API &amp; Pengaturan
          </button>
        </nav>

        <div class="header-actions">
          <button type="button" class="status-badge ${r}" id="header-status-badge" title="Klik untuk membuka API &amp; Pengaturan">
            <span class="status-dot"></span>
            <span>${n}</span>
          </button>
        </div>
      </div>
    </header>
  `,bindEvents(o){o.querySelectorAll(".nav-item").forEach(l=>{l.addEventListener("click",()=>{const u=l.getAttribute("data-tab");e&&e(u)})});const d=o.querySelector("#header-status-badge");d&&t&&d.addEventListener("click",()=>t())}}}const Pa=[{id:"test-1",label:"Test 1: Hijab & Wajah",badge:"Headwear & Lock",prompt:"hapus hijab, jangan ubah wajah",description:"Mengubah penutup kepala/hijab namun mengunci 100% struktur wajah & identitas tanpa menyentuh background."},{id:"test-2",label:"Test 2: Baju & Wajah",badge:"Outfit & Lock",prompt:"ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah",description:"Mengganti pakaian menjadi tanktop putih dengan menjaga identitas wajah tetap terkunci."},{id:"test-3",label:"Test 3: Ketajaman",badge:"Enhance & Sharpen",prompt:"buat foto lebih tajam dan perbaiki pencahayaan",description:"Meningkatkan mikrokontras detail dan menyeimbangkan pencahayaan visual."},{id:"test-4",label:"Test 4: Transparan",badge:"Background Removal",prompt:"hapus latar belakang",description:"Menghapus background menjadi transparan tanpa menyentuh wajah atau pakaian subjek."},{id:"test-5",label:"Test 5: Konflik Rambut",badge:"Conflict Detection",prompt:"pertahankan rambut asli tetapi ubah gaya rambut menjadi botak",description:"Instruksi bertentangan: mengunci rambut sekaligus meminta mencukur botak, memicu deteksi konflik otomatis."},{id:"test-6",label:"Test 6: Full Body & Ratio",badge:"Canvas & Aspect Ratio",prompt:"ubah rasio menjadi 9:16 dan tampilkan full body",description:"Mengubah format kanvas vertikal 9:16 dan memperluas komposisi ke seluruh tubuh."},{id:"test-7",label:"Test 7: Lighting Foto",badge:"Lighting Quality",prompt:"perbaiki pencahayaan foto",description:"Memperbaiki dan meningkatkan kualitas pencahayaan pada foto."},{id:"test-8",label:"Test 8: Multi-Lock",badge:"Multi-Lock Isolation",prompt:"pertahankan background dan baju, tapi ubah warna rambut jadi merah",description:"Mengunci background & pakaian, hanya mengubah warna rambut secara presisi."}];function Za(c){return{html:`
    <div class="presets-group">
      <span class="presets-label">Preset Test Case Cepat:</span>
      <div class="presets-cloud">
        ${Pa.map(t=>`
    <button type="button" class="btn-preset-chip" data-preset-id="${t.id}" title="${t.description}">
      <span style="font-weight: 700; color: #93c5fd;">${t.label}</span>
    </button>
  `).join("")}
      </div>
    </div>
  `,bindEvents(t){t.querySelectorAll(".btn-preset-chip").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-preset-id"),n=Pa.find(s=>s.id===r);n&&c&&c(n.prompt)})})}}}function ae({currentValue:c="",onAnalyze:a,onReset:e,onClear:t,onSelectPreset:i,isAnalyzing:r=!1,isOnlineActive:n=!1,activeMode:s="ANALISA_PROMPT",onModeChange:o,uploadedImage:d=null,onImageSelected:l,onImageRemoved:u}){const p=Za(i);return{html:`
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

      <!-- MODE 2 SPECIFIC: IMAGE UPLOAD SECTION -->
      ${s==="IMAGE_TO_PROMPT"?`
        <div class="image-upload-wrapper" id="image-upload-wrapper">
          ${d?`
            <div class="image-preview-card">
              <img src="${d.previewUrl}" alt="Reference Preview" class="image-preview-thumb" id="img-reference-preview" />
              <div class="image-preview-info">
                <div class="image-filename">${d.name||"reference-image.jpg"}</div>
                <div class="image-meta">
                  Ukuran: ${d.size?(d.size/1024).toFixed(1)+" KB":"Gambar Referensi"} &bull;
                  <span style="color: #38bdf8;">SOURCE OF TRUTH Visual</span>
                </div>
              </div>
              <button type="button" class="btn btn-outline btn-xs btn-danger" id="btn-remove-image" title="Hapus gambar referensi">
                ✕ Hapus Gambar
              </button>
            </div>
          `:`
            <div class="image-dropzone" id="image-dropzone">
              <svg class="dropzone-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
              <div class="dropzone-text">Tarik &amp; lepas gambar referensi di sini, atau klik untuk memilih file</div>
              <div class="dropzone-hint">Format yang didukung: JPG, PNG, WEBP (Gambar digunakan sebagai sumber analisis visual murni)</div>
              <input type="file" id="image-file-input" accept="image/png, image/jpeg, image/webp" style="display: none;" />
            </div>
          `}
        </div>
      `:""}

      <!-- MODE 3 SPECIFIC: DIAGNOSTIC NOTICE -->
      ${s==="SHORTHAND_IMPROVE"?`
        <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.25); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.85rem; font-size: 0.825rem; color: #d8b4fe;">
          <strong>🛠️ Mode Analisa Shorthand Perbaikan:</strong> Masukkan prompt beserta shorthand yang ingin dievaluasi. Sistem mendeteksi konflik direktif, shorthand redundan, serta merekomendasikan shorthand perbaikan yang paling optimal tanpa mengubah maksud utama.
        </div>
      `:""}

      <!-- Preset Test Cases (Only in Mode 1 & 3) -->
      ${s!=="IMAGE_TO_PROMPT"?`
        <div id="presets-container">
          ${p.html}
        </div>
      `:""}

      <!-- Textarea Input -->
      <div class="form-group" style="margin-bottom: 0.85rem;">
        <label for="prompt-textarea" style="display: block; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
          ${s==="IMAGE_TO_PROMPT"?"B. Prompt Pengguna (Opsional / Konteks Tambahan):":"B. Prompt Pengguna (Indonesia / English):"}
        </label>
        <textarea 
          id="prompt-textarea" 
          class="textarea-prompt font-mono" 
          placeholder="${s==="IMAGE_TO_PROMPT"?"Ketik konteks atau instruksi spesifik untuk gambar referensi di atas (opsional)...":"Ketik atau tempelkan prompt bahasa natural Anda di sini...&#10;&#10;Contoh pencarian terbuka (apapun topik, objek, atau konsep visualnya):&#10;• memperluas foto&#10;• perbaiki pencahayaan foto&#10;• hapus hijab, jangan ubah wajah&#10;• ganti baju menjadi tanktop putih tali tipis, jangan ubah wajah&#10;• fotografer cyberpunk di jalanan tokyo dengan pantulan neon&#10;• dokter bedah di rumah sakit futuristik"}"
        >${c||""}</textarea>
      </div>

      <!-- Actions Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <small style="color: var(--text-muted); font-size: 0.775rem;">
          ${s==="IMAGE_TO_PROMPT"?"💡 Gambar dianalisis untuk menghasilkan Prompt Deskriptif &amp; Shorthand Rekomendasi Terpadu.":"💡 Menganalisis seluruh teks prompt secara semantik tanpa batas kategori atau batasan topik."}
        </small>
        <button type="button" class="btn btn-primary" id="btn-run-analysis" ${r?"disabled":""}>
          <svg class="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          ${r?s==="IMAGE_TO_PROMPT"?"🔍 Menganalisis Gambar...":n?"Mencari Online...":"Menganalisis...":s==="IMAGE_TO_PROMPT"?"🔍 Analisa Gambar → Prompt":s==="SHORTHAND_IMPROVE"?"🛠️ Analisa Shorthand &amp; Perbaikan":n?"🌐 Analisis Prompt":"Analisis Prompt"}
        </button>
      </div>
    </section>
  `,bindEvents(g){s!=="IMAGE_TO_PROMPT"&&p.bindEvents(g);const T=g.querySelector("#prompt-textarea"),k=g.querySelector("#btn-run-analysis"),f=g.querySelector("#btn-clear-prompt"),I=g.querySelector("#btn-reset-app");g.querySelectorAll(".mode-tab-btn").forEach(O=>{O.addEventListener("click",()=>{const y=O.getAttribute("data-mode");o&&y!==s&&o(y)})});const v=g.querySelector("#image-dropzone"),b=g.querySelector("#image-file-input"),R=g.querySelector("#btn-remove-image");if(v&&b){let O=function(y){if(!y||!y.type.startsWith("image/")){alert("Silakan pilih file gambar yang valid (JPG, PNG, WEBP).");return}const E=new FileReader;E.onload=_=>{l&&l({file:y,name:y.name,size:y.size,type:y.type,base64:_.target.result,previewUrl:_.target.result})},E.readAsDataURL(y)};var A=O;v.addEventListener("click",()=>{b.click()}),v.addEventListener("dragover",y=>{y.preventDefault(),v.classList.add("dragover")}),v.addEventListener("dragleave",()=>{v.classList.remove("dragover")}),v.addEventListener("drop",y=>{y.preventDefault(),v.classList.remove("dragover"),y.dataTransfer.files&&y.dataTransfer.files[0]&&O(y.dataTransfer.files[0])}),b.addEventListener("change",()=>{b.files&&b.files[0]&&O(b.files[0])})}R&&R.addEventListener("click",()=>{u&&u()}),k&&k.addEventListener("click",()=>{a&&a(T.value)}),f&&f.addEventListener("click",()=>{T.value="",t&&t()}),I&&I.addEventListener("click",()=>{e&&e()}),T&&T.addEventListener("keydown",O=>{(O.ctrlKey||O.metaKey)&&O.key==="Enter"&&(O.preventDefault(),a&&a(T.value))})}}}function ee(c=[],a){const e=c&&c.length>0,t=e?c.map(r=>{const n=r.type==="EDIT_VS_LOCK"||r.shorthandA&&r.shorthandA.includes("lock"),s=n?"Gunakan Instruksi User (Abaikan Kunci)":`Pilih ${r.shorthandB} (Hapus ${r.shorthandA})`,o=n?"Pertahankan Lock (Abaikan Ubah)":`Pilih ${r.shorthandA} (Hapus ${r.shorthandB})`,d=r.suggestion||te(r);return`
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
          ${d}
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
          ${e?`${c.length} Konflik Terdeteksi`:"0 Konflik"}
        </span>
      </div>

      ${e?`
        <p style="font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.85rem;">
          ⚠️ Terdeteksi pertentangan instruksi antara direktif yang diubah dan direktif yang dikunci:
        </p>
        <div class="conflicts-list">
          ${t}
        </div>
      `:`
        <div style="font-size: 0.85rem; color: #34d399; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0;">
          <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span>Tidak ada konflik direktif yang terdeteksi. Seluruh instruksi prompt konsisten.</span>
        </div>
      `}
    </section>
  `,bindEvents(r){r.querySelectorAll(".btn-resolve").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-action"),o=n.getAttribute("data-conflict-id");a&&a(o,s)})})}}}function te(c){if(c.suggestion)return c.suggestion;const a=c.shorthandA||"",e=c.shorthandB||"";if(c.type==="EDIT_VS_LOCK"||a.includes("lock")||e.includes("lock")){const t=a.includes("lock")?a:e,i=a.includes("lock")?e:a;return`Tentukan prioritas pada area ini: Jika modifikasi baru memang diinginkan, abaikan penguncian (${t}) dan terapkan instruksi ubah (${i}). Namun jika tampilan asli wajib dilindungi 100%, pertahankan kunci (${t}) dan batalkan instruksi ubah.`}return`Shorthand ${a} dan ${e} memiliki instruksi yang saling meniadakan pada target ${c.entity||"gambar"}. Disarankan memilih salah satu yang paling mewakili instruksi utama Anda agar hasil generasi AI konsisten dan terhindar dari ambiguitas.`}function ne({installedShorthands:c=[],catalog:a=[],onRemoveShorthand:e,onAddShorthand:t}){const i=c.length>0?c.map(s=>`
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
            ${a.filter(s=>!c.includes(s.code)).map(s=>`
      <option value="${s.code}">${s.code} - ${s.name}</option>
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
  `,bindEvents(s){s.querySelectorAll(".chip-remove-btn").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation();const p=l.getAttribute("data-code");e&&e(p)})});const o=s.querySelector("#btn-add-shorthand"),d=s.querySelector("#select-catalog-shorthand");o&&d&&o.addEventListener("click",()=>{const l=d.value;l&&t&&t(l)})}}}function ie({optimalPrompt:c="",installedShorthands:a=[],catalog:e=[],isOnlineActive:t=!1,isEnriching:i=!1,onCopyPrompt:r,onEnrichPrompt:n,onRemoveShorthand:s,onAddShorthand:o}){const d=ne({installedShorthands:a,catalog:e,onRemoveShorthand:s,onAddShorthand:o}),l=Ma(c),u=Ja(c);return qa(c,a),{html:`
    <section class="panel analyzer-card card-prompt-optimal" id="card-prompt-optimal">
      <div class="card-header">
        <div class="card-title">
          <svg class="icon" viewBox="0 0 24 24" style="color: #60a5fa;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h2 style="color: #93c5fd;">PROMPT OPTIMAL</h2>
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <span style="font-size: 0.775rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${l} kata &bull; ~${u} token
          </span>
          <button 
            type="button" 
            class="btn btn-enrich btn-sm" 
            id="btn-enrich-ai" 
            ${!t||i||!c?"disabled":""}
            title="${t?c?"Perkaya deskripsi visual dengan Gemini AI tanpa mengubah maksud utama":"Lakukan analisis prompt terlebih dahulu":"Fitur ini membutuhkan koneksi Gemini API di Pengaturan"}"
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
        <span>${c||'<span style="color: var(--text-muted); font-style: italic;">Prompt optimal akan muncul di sini setelah analisis...</span>'}</span>
      </div>

      <!-- Installed Shorthands Control Component -->
      ${d.html}
    </section>
  `,bindEvents(h){d.bindEvents(h);const g=h.querySelector("#btn-copy-main-prompt");g&&g.addEventListener("click",()=>{r&&r(c)});const T=h.querySelector("#btn-enrich-ai");T&&T.addEventListener("click",()=>{n&&!i&&t&&c&&n()})}}}function re(c){const{primaryAction:a="-",primaryTarget:e="-",summary:t="Prompt belum dianalisis. Masukkan prompt di atas untuk memulai.",priority:i="-",category:r="-"}=c||{};return{html:`
    <section class="panel analyzer-card" id="card-intent">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">A</span>
          <h2>MAKSUD PROMPT</h2>
        </div>
      </div>

      <div class="intent-summary-box">
        <strong>Ringkasan Semantik:</strong>
        <p style="margin-top: 0.35rem; color: #f1f5f9;">${t}</p>
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
          <span class="intent-meta-value">${i}</span>
        </div>
      </div>
    </section>
  `,bindEvents(){}}}function se(c=[]){const a=c.length>0?c.map(t=>`
        <div class="area-item-card area-edit">
          <div class="area-icon-col">
            <span class="badge badge-purple">${t.entity}</span>
          </div>
          <div class="area-content-col">
            <div class="area-title-row">
              <span class="area-title">${t.label}</span>
              ${t.shorthand?`<span class="badge badge-blue font-mono">${t.shorthand}</span>`:""}
            </div>
            <p class="area-desc">${t.description}</p>
          </div>
        </div>
      `).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 0.5rem 0;">Tidak ada area spesifik yang diubah, atau prompt belum dianalisis.</div>';return{html:`
    <section class="panel analyzer-card" id="card-edit-areas">
      <div class="card-header">
        <div class="card-title">
          <span class="card-step-badge">B</span>
          <h2>AREA YANG DIUBAH</h2>
        </div>
        <span class="badge badge-purple">${c.length} Terdeteksi</span>
      </div>

      <div class="areas-grid-container">
        ${a}
      </div>
    </section>
  `,bindEvents(){}}}function oe(c=[],a=[]){const e=c.length>0?c.map(i=>`
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
        <span class="badge badge-blue">${c.length} Terkunci</span>
      </div>

      <div class="areas-grid-container">
        ${e}
      </div>
    </section>
  `,bindEvents(){}}}function le(c){const{from:a="Kondisi awal gambar",to:e="Kondisi teroptimasi",summary:t=""}=c||{};return{html:`
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

      ${t?`<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; text-align: center;">${t}</p>`:""}
    </section>
  `,bindEvents(){}}}function ce({primaryShorthands:c=[],relatedShorthands:a=[],recommendations:e=[],installedShorthands:t=[],onToggleShorthand:i}){const r=c.length>0?c:e.filter(l=>l.isPrimary!==!1&&l.priority==="WAJIB"),n=a.length>0?a:e.filter(l=>l.isPrimary===!1||l.priority!=="WAJIB"),s=r.length>0?r.map(l=>{var g,T,k;const u=t.includes(l.code),p=l.equivalentTo||((g=l.item)==null?void 0:g.equivalentTo)||[],h=l.functionGroup||((T=l.item)==null?void 0:T.functionGroup)||l.category;return`
          <div class="rec-card primary-rec-card ${u?"rec-card-active":""}" data-code="${l.code}">
            <div>
              <div class="rec-card-header">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="rec-code" style="color: #60a5fa; font-size: 1rem; font-weight: 800;">✓ ${l.code}</span>
                  <span class="badge badge-wajib">WAJIB</span>
                  <span class="badge badge-blue font-mono" style="font-size: 0.675rem;">REPRESENTATIF UTAMA</span>
                  ${l.source==="ONLINE"||l.isOnline?'<span class="badge badge-online">🌐 ONLINE</span>':""}
                </div>
                <span class="badge badge-neutral" style="font-size: 0.7rem;">${l.category}</span>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${l.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${l.target}</span></div>
                <div><strong style="color: var(--text-muted);">Fungsi:</strong> <span style="color: #c084fc;">${h}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${l.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Status:</strong> <span style="color: #34d399;">${l.source==="ONLINE"||l.isOnline?"ONLINE":((k=l.item)==null?void 0:k.status)||"CORE"}</span></div>
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
                data-code="${l.code}"
                title="${u?"Lepas shorthand dari prompt optimal":"Pasang kembali ke prompt optimal"}"
              >
                ${u?"Lepas":"+ Pasang"}
              </button>
            </div>
          </div>
        `}).join(""):'<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; padding: 1rem 0;">Tidak ditemukan shorthand yang cukup relevan dari Prompt Hasil Analisa.</div>',o=n.length>0?n.map(l=>{var T;const u=t.includes(l.code),p=l.equivalentTo||((T=l.item)==null?void 0:T.equivalentTo)||[],h=l.relationship||"CONTEXTUAL",g=l.source==="USER"?"badge-purple":"badge-neutral";return`
          <div class="rec-card related-rec-card ${u?"rec-card-active":""}" data-code="${l.code}">
            <div class="related-item-content">
              <div class="related-header-row" style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
                <label class="checkbox-container" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; user-select: none;">
                  <input 
                    type="checkbox" 
                    class="related-checkbox" 
                    data-code="${l.code}" 
                    ${u?"checked":""} 
                    style="width: 1.15rem; height: 1.15rem; cursor: pointer; accent-color: #8b5cf6;"
                  />
                  <span class="rec-code" style="color: #a78bfa; font-size: 1rem; font-weight: 800;">${l.code}</span>
                </label>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-purple" style="font-size: 0.675rem;">${h}</span>
                  ${l.source==="ONLINE"||l.isOnline?'<span class="badge badge-online" style="font-size: 0.675rem;">🌐 ONLINE</span>':`<span class="badge ${g}" style="font-size: 0.675rem;">${l.source||"CORE"}</span>`}
                  <span class="badge badge-neutral" style="font-size: 0.7rem;">${l.category}</span>
                </div>
              </div>

              <div class="related-fields" style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem;">
                <div><strong style="color: var(--text-muted);">Nama:</strong> <span style="color: #f8fafc; font-weight: 600;">${l.name}</span></div>
                <div><strong style="color: var(--text-muted);">Target:</strong> <span style="color: #93c5fd;">${l.target}</span></div>
                <div><strong style="color: var(--text-muted);">Relationship:</strong> <span style="color: #c084fc; font-weight: 600;">${h}</span></div>
                <div><strong style="color: var(--text-muted);">Alasan:</strong> <span style="color: #cbd5e1;">${l.reason}</span></div>
                <div><strong style="color: var(--text-muted);">Source:</strong> <span style="color: #34d399;">${l.source==="ONLINE"||l.isOnline?"ONLINE":l.source||"CORE"}</span></div>
                ${p.length>0?`
                  <div style="margin-top: 0.2rem;">
                    <strong style="color: var(--text-muted);">Alias Setara:</strong>
                    ${p.map(k=>`<span class="alias-tag font-mono">${k}</span>`).join(" ")}
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
                data-code="${l.code}"
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

      ${r.length===0&&n.length===0?`
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
        <span class="badge badge-purple">${n.length} Rekomendasi Terhubung</span>
      </div>

      <p style="font-size: 0.825rem; color: var(--text-muted); margin-bottom: 0.85rem;">
        Ditemukan dari Semantic Graph dan relasi kontekstual antar-domain. Semua checkbox secara default <strong>OFF [ ]</strong>. Ceklis checkbox atau klik <strong>+ Centang &amp; Pasang</strong> untuk memasukkannya ke Prompt Optimal.
      </p>

      <div class="rec-grid">
        ${o}
      </div>
    </section>
  `,bindEvents(l){l.querySelectorAll(".btn-toggle-rec").forEach(u=>{u.addEventListener("click",p=>{p.stopPropagation();const h=u.getAttribute("data-code");i&&i(h)})}),l.querySelectorAll(".related-checkbox").forEach(u=>{u.addEventListener("change",p=>{p.stopPropagation();const h=u.getAttribute("data-code");i&&i(h)})})}}}function de(c=[]){const a=c.length,e=a>0?c.map(i=>`
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
  `,bindEvents(i){if(!i)return;const r=i.querySelector("#btn-toggle-exclusions"),n=i.querySelector("#exclusions-content"),s=i.querySelector("#header-exclusions");if(!r||!n)return;const o=d=>{d&&(d.preventDefault(),d.stopPropagation()),n.style.display==="none"||!n.style.display?(n.style.display="block",r.setAttribute("aria-expanded","true"),r.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>
            <span class="toggle-exclusions-text">Sembunyikan / Hide</span>
          `,r.classList.remove("btn-secondary"),r.classList.add("btn-outline")):(n.style.display="none",r.setAttribute("aria-expanded","false"),r.innerHTML=`
            <svg class="icon-sm" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span class="toggle-exclusions-text">Tampilkan / Show</span>
          `,r.classList.remove("btn-outline"),r.classList.add("btn-secondary"))};r.addEventListener("click",o),s&&(s.addEventListener("click",d=>{d.target.closest("#btn-toggle-exclusions")||o(d)}),s.addEventListener("keydown",d=>{if(d.key==="Enter"||d.key===" "){if(d.target.closest("#btn-toggle-exclusions"))return;o(d)}}))}}}function ue({analysisResult:c,currentPrompt:a,catalog:e,isAnalyzing:t,isOnlineActive:i=!1,isEnriching:r=!1,activeMode:n="ANALISA_PROMPT",uploadedImage:s=null,onModeChange:o,onImageSelected:d,onImageRemoved:l,onAnalyze:u,onReset:p,onClear:h,onSelectPreset:g,onCopyPrompt:T,onCopyGeneratedPrompt:k,onEnrichPrompt:f,onAddShorthand:I,onRemoveShorthand:v,onToggleRecommendation:b,onResolveConflict:R}){const{optimalPrompt:A="",generatedPrompt:O="",visualBreakdown:y=null,installedShorthands:E=[],conflicts:_=[],intent:U={},editAreas:J=[],lockedAreas:B=[],unchangedAreas:H=[],visualTransformation:q={},primaryShorthands:Q=[],relatedShorthands:ra=[],recommendations:ma=[],exclusions:sa=[]}=c||{},X=ae({currentValue:a,onAnalyze:u,onReset:p,onClear:h,onSelectPreset:g,isAnalyzing:t,isOnlineActive:i,activeMode:n,onModeChange:o,uploadedImage:s,onImageSelected:d,onImageRemoved:l}),Z=ee(_,R),V=ie({optimalPrompt:A,installedShorthands:E,catalog:e,isOnlineActive:i,isEnriching:r,onCopyPrompt:T,onEnrichPrompt:f,onRemoveShorthand:v,onAddShorthand:I}),aa=re(U),ea=se(J),ka=oe(B,H),m=le(q),S=ce({primaryShorthands:Q,relatedShorthands:ra,recommendations:ma,installedShorthands:E,onToggleShorthand:b}),G=de(sa);return{html:`
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${X.html}

      <!-- MODE 2 SPECIFIC: PROMPT HASIL ANALISA GAMBAR CARD -->
      ${n==="IMAGE_TO_PROMPT"&&O?`
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
              ${O}
            </p>
          </div>
          ${y?`
            <div class="visual-breakdown-grid" style="margin-top: 0.85rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.8rem;">
              ${Object.entries(y).map(([P,M])=>`
                <div style="background: rgba(255,255,255,0.03); padding: 0.45rem 0.65rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
                  <strong style="color: #38bdf8; text-transform: capitalize;">${P}:</strong>
                  <span style="color: #cbd5e1; margin-left: 0.35rem;">${M}</span>
                </div>
              `).join("")}
            </div>
          `:""}
        </section>
      `:""}

      <!-- 2. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${V.html}

      <!-- 3. Card A: Maksud Prompt -->
      ${aa.html}

      <!-- 4. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${ea.html}
        ${ka.html}
      </div>

      <!-- 5. Card D: Transformasi Visual FROM -> TO -->
      ${m.html}

      <!-- 6. Card E & F: Shorthand Utama & Shorthand Berhubungan -->
      ${S.html}

      <!-- 7. Card G: Shorthand Konflik -->
      ${Z.html}

      <!-- 8. Card H: Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${G.html}
    </div>
  `,bindEvents(P){X.bindEvents(P),V.bindEvents(P),S.bindEvents(P),Z.bindEvents(P),G.bindEvents(P);const M=P.querySelector("#btn-copy-generated-prompt");M&&M.addEventListener("click",()=>{k&&k(O)})}}}function pe({searchQuery:c="",searchResults:a=[],selectedShorthands:e=[],isSearching:t=!1,searchNotice:i=null,hasSearched:r=!1,onSearch:n,onAddShorthand:s,onRemoveShorthand:o,onClearAll:d,onCopyShorthands:l}){const u=new Set(e.map(k=>(k.code||k).toLowerCase())),p=e.length>0;let h="";p?h=e.map((k,f)=>{const I=typeof k=="string"?k:k.code,v=typeof k=="object"&&k.name?k.name:"";return`
          <div class="selected-shorthand-tag ${typeof k=="object"&&k.source==="ONLINE"?"tag-online":""}" title="${v?v+" - ":""}Klik × untuk menghapus">
            <span class="tag-code">${I}</span>
            <button type="button" class="btn-remove-tag" data-code="${I}" aria-label="Hapus ${I}">
              &times;
            </button>
          </div>
        `}).join(""):h=`
      <div class="empty-selected-notice">
        Belum ada shorthand yang dipilih. Cari shorthand di bawah lalu tekan tombol <strong>[ + ]</strong>.
      </div>
    `;let g="";return t?g=`
      <div class="searching-state">
        <div class="spinner"></div>
        <span>Mencari di katalog lokal &amp; online fallback...</span>
      </div>
    `:r&&a.length===0?g=`
      <div class="no-results-card">
        <div class="no-results-icon">🔍</div>
        <p class="no-results-text">
          ${i||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."}
        </p>
      </div>
    `:a.length>0?g=`
      <div class="dictionary-results-grid">
        ${a.map(k=>{const f=u.has((k.code||"").toLowerCase()),I=k.source==="ONLINE",v=I?"badge-online":"badge-local",b=I?"🌐 ONLINE":"LOCAL";return`
              <div class="dictionary-card ${f?"card-selected":""}" data-code="${k.code}">
                <div class="card-top">
                  <div class="card-code-wrapper">
                    <span class="card-code">${k.code}</span>
                    <span class="source-badge ${v}">${b}</span>
                  </div>
                  <div class="card-action">
                    ${f?`
                          <button type="button" class="btn btn-sm btn-selected-state" disabled title="Shorthand ini sudah masuk daftar terpilih">
                            <span class="check-icon">✓</span> DIPILIH
                          </button>
                        `:`
                          <button type="button" class="btn btn-sm btn-add-shorthand" data-code="${k.code}" title="Tambahkan ${k.code} ke daftar terpilih">
                            <span class="plus-icon">+</span> Tambah
                          </button>
                        `}
                  </div>
                </div>

                <div class="card-content">
                  <div class="card-name">${k.name||k.code}</div>
                  <div class="card-desc">${k.description||"Tidak ada deskripsi"}</div>
                  ${k.equivalentTo&&k.equivalentTo.length>0?`
                    <div class="card-equivalents" style="margin-top: 6px; font-size: 0.78rem; color: var(--text-muted, #94a3b8); display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                      <span style="opacity: 0.75;">Mewakili:</span>
                      ${k.equivalentTo.slice(0,4).map(R=>`<span style="background: rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 4px; font-family: monospace;">${R}</span>`).join("")}
                      ${k.equivalentTo.length>4?`<span style="opacity: 0.6;">+${k.equivalentTo.length-4} lainnya</span>`:""}
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
              value="${c||""}"
              autocomplete="off"
              spellcheck="false"
            />
            ${c?'<button type="button" class="btn-clear-search" id="btn-clear-search" title="Bersihkan pencarian">&times;</button>':""}
          </div>
          <button type="submit" class="btn btn-primary btn-search-submit" id="btn-search-submit">
            CARI
          </button>
        </form>

        <!-- Search Status Info -->
        ${r&&a.length>0?`
              <div class="search-status-bar">
                <span>Ditemukan <strong>${a.length}</strong> shorthand relevan untuk "<em>${c}</em>"</span>
                <span class="search-priority-hint">Prioritas: 1. Katalog Lokal &bull; 2. Online Fallback</span>
              </div>
            `:""}

        <!-- RESULTS LIST -->
        <div class="results-wrapper">
          ${g}
        </div>
      </section>
    </div>
  `,bindEvents(k){const f=k.querySelector("#dictionary-search-form"),I=k.querySelector("#dictionary-search-input"),v=k.querySelector("#btn-clear-search"),b=k.querySelector("#btn-copy-selected-shorthands"),R=k.querySelector("#btn-clear-all-shorthands");f&&I&&f.addEventListener("submit",A=>{A.preventDefault();const O=I.value.trim();n&&n(O)}),v&&I&&v.addEventListener("click",()=>{I.value="",I.focus(),n&&n("")}),k.querySelectorAll(".btn-add-shorthand").forEach(A=>{A.addEventListener("click",()=>{const O=A.getAttribute("data-code"),y=a.find(E=>E.code===O);y&&s&&s(y)})}),k.querySelectorAll(".btn-remove-tag").forEach(A=>{A.addEventListener("click",()=>{const O=A.getAttribute("data-code");O&&o&&o(O)})}),b&&b.addEventListener("click",()=>{l&&l()}),R&&R.addEventListener("click",()=>{d&&d()})}}}function ge({analysisResult:c,onCopyJson:a,onRunCustomJson:e}){var l,u,p;const t=JSON.stringify({rawPrompt:(c==null?void 0:c.rawPrompt)||"",cleanText:(c==null?void 0:c.cleanText)||"",installedShorthands:(c==null?void 0:c.installedShorthands)||[]},null,2),i=JSON.stringify(c||{},null,2),r=((l=c==null?void 0:c.conflicts)==null?void 0:l.length)>0,n=!!((u=c==null?void 0:c.intent)!=null&&u.primaryAction&&c.intent.primaryAction!=="-"),s=((p=c==null?void 0:c.installedShorthands)==null?void 0:p.length)||0,o=(c==null?void 0:c.source)||"LOCAL_ENGINE";return{html:`
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
          <pre class="json-box" id="json-input-view">${t}</pre>
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
  `,bindEvents(h){const g=h.querySelector("#btn-copy-output-json");g&&g.addEventListener("click",()=>{a&&a(i)})}}}function he({catalog:c=[],activeCategory:a="ALL",activeTarget:e="ALL",activeRecLevel:t="ALL",searchQuery:i="",currentPage:r=1,pageSize:n=12,selectedDetailCode:s=null,isAddModalOpen:o=!1,isImportModalOpen:d=!1,duplicateWarning:l=null,onSelectCategory:u,onSelectTarget:p,onSelectRecLevel:h,onSearchChange:g,onPageChange:T,onOpenDetail:k,onCloseDetail:f,onOpenAddModal:I,onCloseAddModal:v,onSubmitAddShorthand:b,onOpenImportModal:R,onCloseImportModal:A,onSubmitImport:O,onExportCatalog:y,onResetUserCatalog:E,onAddShorthandToPrompt:_}){const U=$a(c,{category:a,target:e,recommendationLevel:t,searchQuery:i}),J=U.length,B=Math.max(1,Math.ceil(J/n)),H=Math.min(Math.max(1,r),B),q=(H-1)*n,Q=U.slice(q,q+n),ra=Array.from(new Set(c.map(m=>m.target))).sort(),sa=["ALL",...Object.keys(ia)].map(m=>{const S=ia[m],G=m==="ALL"?"Semua Kategori":`${S.code}. ${S.label}`;return`
      <button type="button" class="category-tab-btn ${a===m?"active":""}" data-cat="${m}">
        ${G}
      </button>
    `}).join(""),X=Q.length>0?Q.map(m=>{let S="badge-opsional";m.recommendationLevel==="WAJIB"||m.priority==="HIGH"?S="badge-wajib":m.recommendationLevel==="DISARANKAN"&&(S="badge-disarankan");const G=m.source==="USER"?"badge-purple":"badge-neutral",K=(m.semanticTriggers||[]).slice(0,3).map($=>`<span class="compat-pill">"${$}"</span>`).join(" "),P=m.equivalentTo||[],M=m.relationships||[];return`
          <div class="catalog-item-card" data-code="${m.code}">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem; flex-wrap: wrap; gap: 0.35rem;">
                <span class="catalog-item-code">${m.code}</span>
                <div style="display: flex; gap: 0.35rem; align-items: center;">
                  <span class="badge ${G}">${m.source||"CORE"}</span>
                  <span class="badge ${S}">${m.recommendationLevel||m.priority}</span>
                  <span class="badge badge-neutral">${m.category}</span>
                </div>
              </div>
              <h3 class="catalog-item-name">${m.name}</h3>
              <p class="catalog-item-desc" style="margin-top: 0.4rem;">${m.description}</p>
            </div>

            <!-- Structured Metadata Section -->
            <div class="catalog-meta-list" style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <div><strong>Target:</strong> <span style="color: #93c5fd;">${m.target}</span></div>
              ${m.functionGroup?`<div><strong>Fungsi:</strong> <span style="color: #c084fc; font-size: 0.75rem;">${m.functionGroup}</span></div>`:""}
              ${P.length>0?`
                <div>
                  <strong>Alias:</strong> 
                  ${P.map($=>`<span class="alias-tag font-mono">${$}</span>`).join(" ")}
                </div>
              `:""}
              ${M.length>0?`
                <div>
                  <strong>Relasi:</strong> 
                  <span style="font-size: 0.75rem; color: #94a3b8;">${M.length} terhubung (${M.map($=>$.code).slice(0,2).join(", ")})</span>
                </div>
              `:""}
              <div><strong>Triggers:</strong> ${K||"-"}</div>
            </div>

            <!-- Card Actions -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.65rem; border-top: 1px solid rgba(255, 255, 255, 0.05); margin-top: 0.75rem;">
              <button type="button" class="btn btn-outline btn-xs btn-open-detail" data-code="${m.code}" title="Lihat detail lengkap direktif">
                <svg class="icon-sm" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Detail
              </button>
              <button type="button" class="btn btn-primary btn-xs btn-add-from-catalog" data-code="${m.code}">
                + Tambah ke Prompt
              </button>
            </div>
          </div>
        `}).join(""):'<div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);"><p>Tidak ada shorthand yang cocok dengan kriteria filter &amp; pencarian semantik.</p></div>',Z=B>1?`
    <div class="catalog-pagination">
      <button type="button" class="pagination-btn btn-prev-page" ${H<=1?"disabled":""}>
        &larr; Sebelumnya
      </button>
      <span class="pagination-page-indicator">
        Halaman ${H} dari ${B} (${J} Shorthand)
      </span>
      <button type="button" class="pagination-btn btn-next-page" ${H>=B?"disabled":""}>
        Berikutnya &rarr;
      </button>
    </div>
  `:"";let V="";if(s){const m=c.find(S=>S.code===s);m&&(V=`
        <div class="modal-backdrop" id="modal-detail-backdrop">
          <div class="modal-card" style="max-width: 680px;" role="dialog" aria-modal="true">
            <div class="modal-header">
              <div>
                <span class="catalog-item-code" style="font-size: 1.35rem;">${m.code}</span>
                <h3 style="font-size: 1rem; color: #ffffff; margin-top: 0.2rem;">${m.name}</h3>
              </div>
              <button type="button" class="modal-close" id="btn-close-detail-modal" aria-label="Tutup">&times;</button>
            </div>

            <div class="modal-body" style="display: flex; flex-direction: column; gap: 1rem; max-height: 70vh; overflow-y: auto;">
              <!-- Meta Row -->
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <span class="badge badge-neutral">Sumber: ${m.source||"CORE"}</span>
                <span class="badge badge-blue">Kategori: ${m.category}</span>
                <span class="badge badge-purple">Target: ${m.target}</span>
                <span class="badge badge-wajib">Level: ${m.recommendationLevel||m.priority}</span>
                ${m.preferredRepresentative?'<span class="badge badge-blue font-mono">REPRESENTATIF UTAMA</span>':""}
              </div>

              <!-- Function Group & Equivalents -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-card); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.8rem; color: var(--text-muted);">
                  <strong>Function Group:</strong> <span style="color: #c084fc;">${m.functionGroup||"-"}</span>
                </div>
                ${m.equivalentTo&&m.equivalentTo.length>0?`
                  <div style="margin-top: 0.4rem; font-size: 0.8rem;">
                    <strong>Alias Setara (Equivalent To):</strong>
                    <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 0.25rem;">
                      ${m.equivalentTo.map(S=>`<span class="alias-tag font-mono">${S}</span>`).join("")}
                    </div>
                  </div>
                `:""}
              </div>

              <!-- Relationships List -->
              ${m.relationships&&m.relationships.length>0?`
                <div>
                  <span class="detail-label" style="color: #a78bfa;">RELASI SEMANTIK TERKAIT:</span>
                  <div style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.35rem;">
                    ${m.relationships.map(S=>`
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
                <p class="detail-value" style="margin-top: 0.25rem;">${m.description}</p>
              </div>

              <!-- Kapan Digunakan -->
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #6ee7b7; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${m.whenToUse||"Sesuai dengan instruksi user yang relevan."}</p>
              </div>

              <!-- Kapan Tidak Digunakan -->
              <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.65rem 0.85rem; border-radius: var(--radius-sm);">
                <strong style="color: #fca5a5; font-size: 0.8rem; display: block; margin-bottom: 0.2rem;">KAPAN TIDAK DIGUNAKAN:</strong>
                <p style="font-size: 0.825rem; color: #e2e8f0;">${m.whenNotToUse||"Jika bertentangan dengan preferensi user."}</p>
              </div>

              <!-- Semantic Triggers -->
              <div>
                <span class="detail-label">SEMANTIC TRIGGERS:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                  ${(m.semanticTriggers||[]).map(S=>`<span class="compat-pill">"${S}"</span>`).join("")}
                </div>
              </div>

              <!-- Conflicts & Compatible -->
              <div class="grid-2" style="margin-top: 0.25rem;">
                <div>
                  <span class="detail-label" style="color: #f87171;">CONFLICTS:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${m.conflicts&&m.conflicts.length>0?m.conflicts.map(S=>`<span class="conflict-pill">${S}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Tidak ada</span>'}
                  </div>
                </div>
                <div>
                  <span class="detail-label" style="color: #60a5fa;">COMPATIBLE WITH:</span>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.35rem;">
                    ${m.compatibleWith&&m.compatibleWith.length>0?m.compatibleWith.map(S=>`<span class="compat-pill">${S}</span>`).join(""):'<span style="color: var(--text-dim); font-size: 0.8rem;">Semua shorthand standar</span>'}
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-card);">
              <button type="button" class="btn btn-outline btn-sm" id="btn-close-detail-footer">Tutup</button>
              <button type="button" class="btn btn-primary btn-sm btn-add-from-modal" data-code="${m.code}">
                + Tambah ${m.code} ke Prompt
              </button>
            </div>
          </div>
        </div>
      `)}let aa="";if(o){const m=Object.keys(Ha);aa=`
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
              ${l?`
                <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.75rem;">
                  <strong style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">
                    ⚠️ FUNGSI SERUPA TERDETEKSI:
                  </strong>
                  <p style="font-size: 0.8rem; color: #fde68a; margin: 0;">${l.message}</p>
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
                    ${Object.keys(ia).map(S=>`<option value="${S}">${S} - ${ia[S].label}</option>`).join("")}
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
                  ${m.map(S=>`<option value="${S}">`).join("")}
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
    `}let ea="";return d&&(ea=`
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
        <span class="badge badge-blue font-mono">${c.length} Shorthand Terdaftar</span>
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
        ${sa}
      </div>

      <!-- Secondary Filter & Search Bar -->
      <div class="catalog-controls" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <!-- Filter Target -->
          <select id="select-filter-target" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Target Area --</option>
            ${ra.map(m=>`<option value="${m}" ${e===m?"selected":""}>Target: ${m}</option>`).join("")}
          </select>

          <!-- Filter Recommendation Level -->
          <select id="select-filter-rec-level" class="select-input" style="padding: 0.45rem 0.75rem;">
            <option value="ALL">-- Semua Level Rekomendasi --</option>
            <option value="WAJIB" ${t==="WAJIB"?"selected":""}>Level: WAJIB</option>
            <option value="DISARANKAN" ${t==="DISARANKAN"?"selected":""}>Level: DISARANKAN</option>
            <option value="OPSIONAL" ${t==="OPSIONAL"?"selected":""}>Level: OPSIONAL</option>
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
      ${Z}

      <!-- Modals -->
      ${V}
      ${aa}
      ${ea}
    </section>
  `,bindEvents(m){m.querySelectorAll(".category-tab-btn").forEach(C=>{C.addEventListener("click",()=>{const w=C.getAttribute("data-cat");u&&u(w)})});const S=m.querySelector("#select-filter-target");S&&S.addEventListener("change",C=>{p&&p(C.target.value)});const G=m.querySelector("#select-filter-rec-level");G&&G.addEventListener("change",C=>{h&&h(C.target.value)});const K=m.querySelector("#catalog-search-input");K&&K.addEventListener("input",C=>{g&&g(C.target.value)});const P=m.querySelector(".btn-prev-page");P&&P.addEventListener("click",()=>{T&&T(H-1)});const M=m.querySelector(".btn-next-page");M&&M.addEventListener("click",()=>{T&&T(H+1)});const $=m.querySelector("#btn-open-add-shorthand");$&&I&&$.addEventListener("click",I);const ba=m.querySelector("#btn-export-catalog");ba&&y&&ba.addEventListener("click",y);const fa=m.querySelector("#btn-open-import-catalog");fa&&R&&fa.addEventListener("click",R);const ya=m.querySelector("#btn-reset-user-catalog");ya&&E&&ya.addEventListener("click",E),m.querySelectorAll(".btn-open-detail").forEach(C=>{C.addEventListener("click",()=>{const w=C.getAttribute("data-code");k&&k(w)})});const Aa=m.querySelector("#btn-close-detail-modal"),Ta=m.querySelector("#btn-close-detail-footer"),oa=m.querySelector("#modal-detail-backdrop"),ta=()=>{f&&f()};Aa&&Aa.addEventListener("click",ta),Ta&&Ta.addEventListener("click",ta),oa&&oa.addEventListener("click",C=>{C.target===oa&&ta()});const va=m.querySelector("#btn-close-add-modal"),Ea=m.querySelector("#btn-cancel-add"),la=m.querySelector("#modal-add-backdrop"),ca=()=>{v&&v()};va&&va.addEventListener("click",ca),Ea&&Ea.addEventListener("click",ca),la&&la.addEventListener("click",C=>{C.target===la&&ca()});const Ia=m.querySelector("#form-add-shorthand");Ia&&b&&Ia.addEventListener("submit",C=>{C.preventDefault();let w=m.querySelector("#add-code").value.trim();w.startsWith("/")||(w="/"+w);const F=m.querySelector("#add-name").value.trim(),x=m.querySelector("#add-category").value,z=m.querySelector("#add-target").value.trim(),na=m.querySelector("#add-func-group").value.trim()||x,Da=m.querySelector("#add-desc").value.trim(),La=m.querySelector("#add-triggers").value.trim(),wa=m.querySelector("#add-equivalent").value.trim(),Ga=La?La.split(",").map(Y=>Y.trim()).filter(Boolean):[],Ua=wa?wa.split(",").map(Y=>Y.trim().startsWith("/")?Y.trim():"/"+Y.trim()).filter(Boolean):[];b({code:w,name:F,category:x,target:z,functionGroup:na,description:Da,semanticTriggers:Ga,equivalentTo:Ua,status:"CUSTOM",source:"USER",priority:"MEDIUM",recommendationLevel:"DISARANKAN",whenToUse:`Digunakan saat prompt meminta ${z.toLowerCase()}.`,whenNotToUse:"Hindari jika bertentangan dengan preferensi user.",negativeTriggers:[],conflicts:[],compatibleWith:[]})});const Oa=m.querySelector("#btn-close-import-modal"),Ra=m.querySelector("#btn-cancel-import"),da=m.querySelector("#modal-import-backdrop"),ua=()=>{A&&A()};Oa&&Oa.addEventListener("click",ua),Ra&&Ra.addEventListener("click",ua),da&&da.addEventListener("click",C=>{C.target===da&&ua()});const Sa=m.querySelector("#import-file-input"),Ca=m.querySelector("#import-json-textarea");Sa&&Ca&&Sa.addEventListener("change",C=>{const w=C.target.files[0];if(w){const F=new FileReader;F.onload=x=>{Ca.value=x.target.result},F.readAsText(w)}});const Na=m.querySelector("#form-import-catalog");Na&&O&&Na.addEventListener("submit",C=>{var x,z,na;C.preventDefault();const w=((x=m.querySelector('input[name="import-mode"]:checked'))==null?void 0:x.value)||"MERGE",F=(na=(z=m.querySelector("#import-json-textarea"))==null?void 0:z.value)==null?void 0:na.trim();O(F,w)}),m.querySelectorAll(".btn-add-from-catalog").forEach(C=>{C.addEventListener("click",()=>{const w=C.getAttribute("data-code");_&&_(w)})});const pa=m.querySelector(".btn-add-from-modal");pa&&pa.addEventListener("click",()=>{const C=pa.getAttribute("data-code");_&&_(C),ta()})}}}function me({geminiStatusInfo:c,onTestConnection:a,onSaveSettings:e,onClearKey:t}){const i=N.getApiKey(),r=N.getModel(),{status:n,error:s}=c;let o="status-unconfigured",d="🟡 Gemini: Belum diuji / konfigurasi";return n===L.CONNECTED?(o="status-connected",d="🟢 Gemini: Tersambung"):n===L.FAILED&&(o="status-failed",d="🔴 Gemini: Gagal"),{html:`
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
                <span>${d}</span>
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
  `,bindEvents(u){const p=u.querySelector("#setting-api-key"),h=u.querySelector("#setting-model-select"),g=u.querySelector("#btn-toggle-key-visibility"),T=u.querySelector("#btn-test-connection"),k=u.querySelector("#btn-save-settings"),f=u.querySelector("#btn-clear-key");g&&p&&g.addEventListener("click",()=>{const I=p.type==="password";p.type=I?"text":"password"}),T&&T.addEventListener("click",()=>{a&&a(p.value,h.value)}),k&&k.addEventListener("click",()=>{e&&e(p.value,h.value)}),f&&f.addEventListener("click",()=>{p.value="",t&&t()})}}}const ja={wajah:["face","muka","identity","paras","facelock"],muka:["face","wajah","identity","facelock"],rambut:["hair","rambut asli","natural hair","hairlock","hairchange","gaya rambut"],pakaian:["outfit","baju","busana","pakaian asli","outfitlock","ganti baju","tanktop","dress"],baju:["outfit","pakaian","busana","outfitlock","ganti baju"],pencahayaan:["lighting","light","enhance","cahaya","studio-light","hdr"],cahaya:["lighting","light","enhance","pencahayaan"],ketajaman:["sharpen","sharp","detail","clarity","tajam"],tajam:["sharpen","ketajaman","detail"],latar:["background","latar belakang","bg","bgremove","bgreplace","backgroundlock"],background:["latar","latar belakang","bg","bgremove","bgreplace","backgroundlock"],hijab:["headwear","jilbab","kerudung","penutup kepala","headwear-remove","hijaboff"],jilbab:["headwear","hijab","penutup kepala","headwear-remove"],tubuh:["body","pose","badan","bodylock","bodyvoluptuous","curvy"],badan:["body","pose","tubuh","bodylock","bodyvoluptuous","curvy"],montok:["bodyvoluptuous","voluptuous","curvy","berisi","fullfigured","plussize","tubuh montok","lekuk"],berisi:["bodyvoluptuous","fullfigured","montok","curvy","plussize","voluptuous","tubuh berisi"],curvy:["bodyvoluptuous","curvy","berlekuk","montok","voluptuous","hourglass"],voluptuous:["bodyvoluptuous","voluptuous","montok","curvy","berisi"],kamera:["camera","lens","lensa","angle","photo"],warna:["color","grade","tone","colorgrade","duotone"],rasio:["aspect ratio","ar","ukuran","canvas","ratio"],tangan:["handperfect","hands","handanatomy","handdetail","handnatural","fingerperfect","anatomi tangan","hand"],jari:["fingerperfect","handperfect","handdetail","hands","anatomi jari","finger"],anatomi:["handanatomy","handperfect","bodylock","anatomy"],hands:["handperfect","hands","handanatomy","handdetail","tangan"],finger:["fingerperfect","handperfect","jari"],resolusi:["highresolution","superresolution","upscale","4k","8k","highdetail","resolusi tinggi"],resolution:["highresolution","superresolution","upscale","4k","8k"],kualitas:["highresolution","enhance","sharpen","rawphoto"]};class _a{static searchLocal(a,e=[]){if(!a||typeof a!="string"||!a.trim())return[];const t=a.trim().toLowerCase(),i=t.startsWith("/")?t.slice(1):t,r=t.split(/\s+/).filter(Boolean),n=new Set(r);for(const o of r)if(ja[o])for(const d of ja[o])n.add(d.toLowerCase());const s=[];for(const o of e){if(!o||!o.code)continue;let d=0;const l=(o.code||"").toLowerCase(),u=l.startsWith("/")?l.slice(1):l,p=(o.name||"").toLowerCase(),h=(o.description||"").toLowerCase(),g=(o.category||"").toLowerCase(),T=Array.isArray(o.semanticTriggers)?o.semanticTriggers.map(f=>(f||"").toLowerCase()):[],k=(o.whenToUse||"").toLowerCase();l===t||u===i?d+=1e3:u.startsWith(i)?d+=600:u.includes(i)&&(d+=350);for(const f of T)if(f===t)d+=400;else if(f.includes(t))d+=250;else for(const I of n)if(I.length>2&&f.includes(I)){d+=100;break}if(p===t)d+=300;else if(p.includes(t))d+=200;else for(const f of n)if(f.length>2&&p.includes(f)){d+=80;break}if(h.includes(t))d+=150;else for(const f of n)if(f.length>2&&h.includes(f)){d+=60;break}g.includes(t)&&(d+=50),k.includes(t)&&(d+=40),d>0&&s.push({...o,score:d,source:"LOCAL",isOnline:!1})}return s.sort((o,d)=>d.score-o.score),this.deduplicateResultsByFunction(s)}static deduplicateResultsByFunction(a=[]){if(!a||a.length<=1)return a;const e=new Map,t=new Map;for(const r of a){if(!r||!r.code)continue;const n=r.code.toLowerCase();let s=t.get(n);if(!s){s=r.functionGroup||r.category||n;for(const[o,d]of e.entries())if(d.some(u=>(u.equivalentTo||[]).map(h=>typeof h=="string"?h.toLowerCase():"").includes(n))){s=o;break}}if(t.set(n,s),Array.isArray(r.equivalentTo))for(const o of r.equivalentTo)typeof o=="string"&&t.set(o.toLowerCase(),s);e.has(s)?e.get(s).push(r):e.set(s,[r])}const i=[];for(const[r,n]of e.entries()){if(n.length===1){i.push(n[0]);continue}n.sort((l,u)=>{if(l.preferredRepresentative&&!u.preferredRepresentative)return-1;if(!l.preferredRepresentative&&u.preferredRepresentative)return 1;if((u.score||0)!==(l.score||0))return(u.score||0)-(l.score||0);const p={CORE:4,APPROVED:3,CUSTOM:2,ONLINE:1},h=p[l.status]||(l.source==="LOCAL"?3:1),g=p[u.status]||(u.source==="LOCAL"?3:1);return g!==h?g-h:(l.code||"").length-(u.code||"").length});const s=n[0],o=n.slice(1).map(l=>l.code),d=Array.from(new Set([...s.equivalentTo||[],...o]));i.push({...s,equivalentTo:d})}return i.sort((r,n)=>(n.score||0)-(r.score||0)),i}static async search(a,e=[],t=null){if(!a||typeof a!="string"||!a.trim())return{query:"",results:[],localCount:0,onlineCount:0,notice:null};const i=a.trim();let r=[];try{r=this.searchLocal(i,e)}catch(p){console.warn("[DictionaryService] Error pencarian lokal:",p),r=[]}let n=[],s=null;const o=r.some(p=>p.score>=600);if((r.length<4||!o)&&t)try{const p=await t.searchOnlineShorthand(i);if(p&&Array.isArray(p.results)){const h=new Set(r.map(g=>g.code.toLowerCase()));n=p.results.filter(g=>!h.has(g.code.toLowerCase()))}p&&p.message&&r.length===0&&(s=p.message)}catch(p){console.warn("[DictionaryService] Online fallback error:",p)}const l=this.deduplicateResultsByFunction([...r,...n]);let u=null;return l.length===0&&(u=s||"Shorthand tidak ditemukan di katalog lokal dan pencarian online tidak tersedia."),{query:i,results:l,localCount:r.length,onlineCount:n.length,notice:u}}static formatSelectedForCopy(a=[]){return a.map(e=>e?typeof e=="string"?e.trim():(e.code||"").trim():"").filter(Boolean).join(" ")}}class ke{constructor(){this.appRoot=document.getElementById("app"),this.catalogRepo=new Ka(ga),this.catalog=this.catalogRepo.getAll(),this.geminiService=new Wa(this.catalog),this.activeTab="analyzer",this.activeMode="ANALISA_PROMPT",this.uploadedImage=null,this.currentPrompt="",this.isAnalyzing=!1,this.catalogCategory="ALL",this.catalogTarget="ALL",this.catalogRecLevel="ALL",this.catalogSearchQuery="",this.catalogCurrentPage=1,this.selectedDetailCode=null,this.isAddModalOpen=!1,this.isImportModalOpen=!1,this.duplicateWarning=null,this.isEnrichingPrompt=!1,this.dictionaryState={searchQuery:"",searchResults:[],selectedShorthands:[],isSearching:!1,searchNotice:null,hasSearched:!1},this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.initRepository(),this.initGeminiStatus()}async initRepository(){try{await this.catalogRepo.init(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.render()}catch(a){console.warn("Repository init error:",a)}}async initGeminiStatus(){const a=N.getApiKey();a&&(await this.geminiService.testConnection(a),this.render())}showToast(a,e="success"){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="toast-container",document.body.appendChild(t));const i=document.createElement("div");i.className=`toast toast-${e}`,i.innerHTML=`
      <span>${e==="success"?"✅":e==="error"?"❌":"ℹ️"}</span>
      <span>${a}</span>
    `,t.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 0.3s ease",setTimeout(()=>i.remove(),300)},2800)}async runAnalysis(a,e=null){if(this.activeMode==="IMAGE_TO_PROMPT"){if(!this.uploadedImage){this.showToast("Silakan pilih atau unggah gambar referensi terlebih dahulu.","error");return}this.isAnalyzing=!0,this.currentPrompt=a||"",this.render();try{const t=await this.geminiService.analyzeImageToPrompt({imageFile:this.uploadedImage.file,imageBase64:this.uploadedImage.base64,mimeType:this.uploadedImage.type,referencePrompt:a});this.analysisResult=t,this.showToast("Analisa gambar & pemetaan shorthand berhasil!")}catch(t){this.showToast(`Gagal menganalisis gambar: ${t.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(this.activeMode==="SHORTHAND_IMPROVE"){if(!a||!a.trim()){this.showToast("Silakan masukkan prompt / shorthand yang ingin diperbaiki.","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const t=await this.geminiService.analyzeShorthandImprove(a,e);this.analysisResult=t,this.showToast("Analisa shorthand perbaikan selesai!")}catch(t){this.showToast(`Gagal menganalisis: ${t.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}return}if(!a||!a.trim()){this.showToast("Silakan masukkan prompt terlebih dahulu","error");return}this.currentPrompt=a,this.isAnalyzing=!0,this.render();try{const t=await this.geminiService.analyzePrompt(a,e);this.analysisResult=t,this.showToast("Analisis prompt selesai!")}catch(t){this.showToast(`Gagal menganalisis: ${t.message}`,"error")}finally{this.isAnalyzing=!1,this.render()}}handleReset(){this.currentPrompt="",this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.showToast("Analyzer telah di-reset ke kondisi awal."),this.render()}handleClear(){this.currentPrompt="",this.uploadedImage=null,this.analysisResult=this.geminiService.localEngine.getEmptyResult(),this.render()}handleSelectPreset(a){this.currentPrompt=a,this.runAnalysis(a)}handleCopyPrompt(a){const e=Qa(a);if(!e){this.showToast("Tidak ada prompt untuk disalin","error");return}navigator.clipboard.writeText(e).then(()=>{this.showToast("✅ Main Prompt berhasil disalin ke clipboard!")}).catch(()=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),this.showToast("✅ Main Prompt berhasil disalin!")})}async handleEnrichPrompt(){var t;const a=((t=this.analysisResult)==null?void 0:t.optimalPrompt)||"";if(!a||!a.trim()){this.showToast("Belum ada Prompt Optimal untuk diperkaya.","error");return}if(!!!(N.getApiKey()&&N.getApiKey().trim())||this.geminiService.status===L.FAILED){this.showToast("Fitur ini membutuhkan koneksi Gemini API di Pengaturan.","error");return}if(!this.isEnrichingPrompt){this.isEnrichingPrompt=!0,this.render();try{this.showToast("Memperkaya prompt dengan Gemini AI...","info");const i=await this.geminiService.enrichPrompt(a,this.analysisResult);if(i&&i.success&&i.enrichedPrompt)this.analysisResult.optimalPrompt=i.enrichedPrompt,this.showToast("✨ Prompt Optimal berhasil diperkaya dengan AI!","success");else throw new Error("Hasil pengayaan AI tidak valid.")}catch(i){console.warn("Enrich prompt error:",i),this.showToast(`Gagal memperkaya prompt: ${i.message}`,"error")}finally{this.isEnrichingPrompt=!1,this.render()}}}handleAddShorthand(a){if(!a)return;const e=this.analysisResult.installedShorthands||[];if(!e.includes(a)){const t=[...e,a];this.updateInstalledShorthands(t),this.showToast(`Shorthand ${a} ditambahkan.`)}}handleRemoveShorthand(a){const t=(this.analysisResult.installedShorthands||[]).filter(i=>i!==a);this.updateInstalledShorthands(t),this.showToast(`Shorthand ${a} dilepas.`)}handleToggleRecommendation(a){(this.analysisResult.installedShorthands||[]).includes(a)?this.handleRemoveShorthand(a):this.handleAddShorthand(a)}updateInstalledShorthands(a){if(this.analysisResult.installedShorthands=a,this.analysisResult.optimalPrompt=this.geminiService.localEngine.buildOptimalPrompt(this.analysisResult.cleanText,a),this.analysisResult.recommendations)for(const e of this.analysisResult.recommendations)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.primaryShorthands)for(const e of this.analysisResult.primaryShorthands)e.checked=a.includes(e.code),e.active=e.checked;if(this.analysisResult.relatedShorthands)for(const e of this.analysisResult.relatedShorthands)e.checked=a.includes(e.code),e.active=e.checked;this.render()}handleResolveConflict(a,e){const t=this.analysisResult.conflicts.find(n=>n.id===a);if(!t)return;let i=[...this.analysisResult.installedShorthands||[]];const r=t.type==="EDIT_VS_LOCK"||t.shorthandA&&t.shorthandA.includes("lock");if(e==="use_user_edit"){i=i.filter(s=>s!==t.shorthandA);const n=r?`Kunci ${t.shorthandA} dilepas sesuai instruksi ubah.`:`Memilih ${t.shorthandB}, ${t.shorthandA} dihapus.`;this.showToast(n)}else if(e==="keep_lock"){i=i.filter(s=>s!==t.shorthandB),i.includes(t.shorthandA)||i.push(t.shorthandA);const n=r?`Lock ${t.shorthandA} dipertahankan.`:`Memilih ${t.shorthandA}, ${t.shorthandB} dihapus.`;this.showToast(n)}else e==="dismiss"&&this.showToast("Peringatan konflik diabaikan.");this.analysisResult.conflicts=this.analysisResult.conflicts.filter(n=>n.id!==a),this.updateInstalledShorthands(i)}async handleAddShorthandSubmit(a){if(!this.duplicateWarning){const e=this.catalogRepo.detectSimilarFunction(a);if(e.hasSimilar){this.duplicateWarning=e,this.render();return}}try{await this.catalogRepo.add(a),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isAddModalOpen=!1,this.duplicateWarning=null,this.showToast(`Shorthand ${a.code} berhasil disimpan ke User Catalog!`),this.render()}catch(e){this.showToast(`Gagal menambahkan: ${e.message}`,"error")}}handleExportCatalog(){try{const a=this.catalogRepo.exportCatalog(),e=new Blob([a],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`psa-v2-catalog-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(t),this.showToast("✅ Katalog berhasil diekspor (JSON aman tanpa rahasia)!")}catch(a){this.showToast(`Gagal mengekspor: ${a.message}`,"error")}}async handleImportCatalog(a,e){if(!a||!a.trim()){this.showToast("Silakan pilih file atau paste JSON katalog.","error");return}try{const t=await this.catalogRepo.importCatalog(a,e);this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.isImportModalOpen=!1,this.showToast(`✅ Berhasil mengimpor ${t.count} shorthand (${e})!`),this.render()}catch(t){this.showToast(`Gagal impor: ${t.message}`,"error")}}async handleResetUserCatalog(){try{await this.catalogRepo.resetUserCatalog(),this.catalog=this.catalogRepo.getAll(),this.geminiService.catalog=this.catalog,this.geminiService.localEngine.catalog=this.catalog,this.showToast("User Catalog berhasil direset. Core Catalog tetap aman."),this.render()}catch(a){this.showToast(`Gagal mereset: ${a.message}`,"error")}}async handleTestConnection(a,e){this.showToast("Menguji koneksi ke Gemini API...","info");const t=await this.geminiService.testConnection(a,e);t.success?this.showToast(t.message,"success"):this.showToast(t.message,"error"),this.render()}handleSaveSettings(a,e){N.setApiKey(a),N.setModel(e),this.showToast("Pengaturan BYOK berhasil disimpan!","success"),this.geminiService.testConnection(a,e).then(()=>this.render())}handleClearKey(){N.clearApiKey(),this.geminiService.status=L.UNCONFIGURED,this.showToast("API Key telah dihapus dari perangkat ini."),this.render()}async handleDictionarySearch(a){if(this.dictionaryState.searchQuery=a,!a||!a.trim()){this.dictionaryState.searchResults=[],this.dictionaryState.hasSearched=!1,this.dictionaryState.searchNotice=null,this.render();return}this.dictionaryState.isSearching=!0,this.dictionaryState.hasSearched=!0,this.render();try{const e=await _a.search(a,this.catalog,this.geminiService);this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=e.results,this.dictionaryState.searchNotice=e.notice}catch(e){console.warn("Dictionary search error:",e),this.dictionaryState.isSearching=!1,this.dictionaryState.searchResults=[],this.dictionaryState.searchNotice="Pencarian shorthand sedang tidak tersedia. Silakan coba lagi."}this.render()}handleDictionaryAddShorthand(a){if(!a)return;const e=(a.code||"").trim();if(!e)return;this.dictionaryState.selectedShorthands.some(i=>(typeof i=="string"?i:i.code).toLowerCase()===e.toLowerCase())?this.showToast(`${e} sudah ada di daftar terpilih`,"info"):(this.dictionaryState.selectedShorthands.push(a),this.showToast(`Ditambahkan: ${e}`),this.render())}handleDictionaryRemoveShorthand(a){a&&(this.dictionaryState.selectedShorthands=this.dictionaryState.selectedShorthands.filter(e=>(typeof e=="string"?e:e.code).toLowerCase()!==a.toLowerCase()),this.showToast(`Dihapus: ${a}`,"info"),this.render())}handleDictionaryClearAll(){this.dictionaryState.selectedShorthands=[],this.showToast("Seluruh shorthand terpilih telah dikosongkan.","info"),this.render()}async handleDictionaryCopy(){const a=_a.formatSelectedForCopy(this.dictionaryState.selectedShorthands);if(!a){this.showToast("Belum ada shorthand yang dipilih untuk disalin.","warning");return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}this.showToast(`✓ Shorthand berhasil disalin: ${a}`)}catch(e){console.warn("Copy failed:",e),this.showToast(`Shorthand: ${a}`)}}render(){const a=this.geminiService.getStatus(),e=Xa(this.activeTab,a,i=>{this.activeTab=i,this.render(),window.scrollTo({top:0,behavior:"smooth"})},()=>{this.activeTab="settings",this.render(),window.scrollTo({top:0,behavior:"smooth"})});let t=null;if(this.activeTab==="analyzer"){const r=!!(N.getApiKey()&&N.getApiKey().trim())&&this.geminiService.status!==L.FAILED;t=ue({analysisResult:this.analysisResult,currentPrompt:this.currentPrompt,catalog:this.catalog,isAnalyzing:this.isAnalyzing,isOnlineActive:r,isEnriching:this.isEnrichingPrompt,activeMode:this.activeMode,uploadedImage:this.uploadedImage,onModeChange:n=>{this.activeMode=n,this.render()},onImageSelected:n=>{this.uploadedImage=n,this.render()},onImageRemoved:()=>{this.uploadedImage=null,this.render()},onAnalyze:n=>this.runAnalysis(n),onReset:()=>this.handleReset(),onClear:()=>this.handleClear(),onSelectPreset:n=>this.handleSelectPreset(n),onCopyPrompt:n=>this.handleCopyPrompt(n),onCopyGeneratedPrompt:n=>this.handleCopyPrompt(n),onEnrichPrompt:()=>this.handleEnrichPrompt(),onAddShorthand:n=>this.handleAddShorthand(n),onRemoveShorthand:n=>this.handleRemoveShorthand(n),onToggleRecommendation:n=>this.handleToggleRecommendation(n),onResolveConflict:(n,s)=>this.handleResolveConflict(n,s)})}else this.activeTab==="json-test"?t=ge({analysisResult:this.analysisResult,onCopyJson:i=>{navigator.clipboard.writeText(i),this.showToast("Output JSON berhasil disalin!")}}):this.activeTab==="catalog"?t=he({catalog:this.catalog,activeCategory:this.catalogCategory,activeTarget:this.catalogTarget,activeRecLevel:this.catalogRecLevel,searchQuery:this.catalogSearchQuery,currentPage:this.catalogCurrentPage,pageSize:12,selectedDetailCode:this.selectedDetailCode,isAddModalOpen:this.isAddModalOpen,isImportModalOpen:this.isImportModalOpen,duplicateWarning:this.duplicateWarning,onSelectCategory:i=>{this.catalogCategory=i,this.catalogCurrentPage=1,this.render()},onSelectTarget:i=>{this.catalogTarget=i,this.catalogCurrentPage=1,this.render()},onSelectRecLevel:i=>{this.catalogRecLevel=i,this.catalogCurrentPage=1,this.render()},onSearchChange:i=>{this.catalogSearchQuery=i,this.catalogCurrentPage=1,this.render()},onPageChange:i=>{this.catalogCurrentPage=i,this.render()},onOpenDetail:i=>{this.selectedDetailCode=i,this.render()},onCloseDetail:()=>{this.selectedDetailCode=null,this.render()},onOpenAddModal:()=>{this.isAddModalOpen=!0,this.duplicateWarning=null,this.render()},onCloseAddModal:()=>{this.isAddModalOpen=!1,this.duplicateWarning=null,this.render()},onSubmitAddShorthand:async i=>{await this.handleAddShorthandSubmit(i)},onOpenImportModal:()=>{this.isImportModalOpen=!0,this.render()},onCloseImportModal:()=>{this.isImportModalOpen=!1,this.render()},onSubmitImport:async(i,r)=>{await this.handleImportCatalog(i,r)},onExportCatalog:()=>{this.handleExportCatalog()},onResetUserCatalog:async()=>{confirm("Apakah Anda yakin ingin mereset User Catalog? Shorthand custom Anda akan dihapus. CORE CATALOG bawaan tetap 100% aman.")&&await this.handleResetUserCatalog()},onAddShorthandToPrompt:i=>{this.handleAddShorthand(i),this.activeTab="analyzer",this.render(),this.showToast(`Shorthand ${i} ditambahkan ke prompt analyzer!`)}}):this.activeTab==="dictionary"?t=pe({searchQuery:this.dictionaryState.searchQuery,searchResults:this.dictionaryState.searchResults,selectedShorthands:this.dictionaryState.selectedShorthands,isSearching:this.dictionaryState.isSearching,searchNotice:this.dictionaryState.searchNotice,hasSearched:this.dictionaryState.hasSearched,onSearch:i=>this.handleDictionarySearch(i),onAddShorthand:i=>this.handleDictionaryAddShorthand(i),onRemoveShorthand:i=>this.handleDictionaryRemoveShorthand(i),onClearAll:()=>this.handleDictionaryClearAll(),onCopyShorthands:()=>this.handleDictionaryCopy()}):this.activeTab==="settings"&&(t=me({geminiStatusInfo:a,onTestConnection:(i,r)=>this.handleTestConnection(i,r),onSaveSettings:(i,r)=>this.handleSaveSettings(i,r),onClearKey:()=>this.handleClearKey()}));this.appRoot.innerHTML=`
      <div class="app-container">
        ${e.html}
        <main class="main-content">
          ${t.html}
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
    `,e.bindEvents(this.appRoot),t.bindEvents&&t.bindEvents(this.appRoot)}}document.addEventListener("DOMContentLoaded",()=>{window.__PSA_APP__=new ke,window.__PSA_APP__.render()});
//# sourceMappingURL=index-Dvc40Gg2.js.map
