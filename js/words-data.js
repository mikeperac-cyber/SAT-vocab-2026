/**
 * SAT & DSAT 2026 100 High-Yield Vocabulary Dataset
 * Meticulously curated for the 2026 Digital SAT Reading & Writing Section
 * Includes: Definitions, IPA, Turkish Meanings, Deep Nuance, DSAT Contexts, Traps, and Practice Questions.
 */

const SAT_WORDS_DATA = [
  {
    id: 1,
    word: "Corroborate",
    pos: "verb",
    ipa: "/kəˈrɒb.ə.reɪt/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To confirm, support, or give additional proof to a statement, theory, or finding with evidence.",
    turkishMeaning: "Doğrulamak, kanıtla desteklemek, teyit etmek",
    turkishNuance: "SAT'de bir hipotezin ya da iddianın başka bir bağımsız çalışma/deney tarafından 'sağlamlaştırılması' durumunda sıkça sorulur. 'Substantiate' ve 'validate' ile yakın anlamlıdır; ancak 'corroborate' genellikle mevcut bir iddiaya dışarıdan ek kanıt sunulmasını vurgular.",
    exampleSentence: "Subsequent geological core samples obtained from the Antarctic ice shelf served to corroborate Dr. Aris's controversial hypothesis regarding prehistoric atmospheric shifts.",
    satDomain: "Science / Climatology",
    sat2026HowTested: "DSAT Modül 1 ve 2'de 'Words in Context' sorularında metindeki bağımsız araştırmacıların aynı sonuca ulaştığı bağlamlarda 'support' yerine yüksek akademik tescil olarak sorulur.",
    distractorTraps: [
      "Contradict (Zıt anlam tuzağı)",
      "Postulate (Yalnızca varsayım aşaması, kanıtlama değil)",
      "Fabricate (Olumsuz ve uydurma anlamı taşır)"
    ],
    synonyms: ["Substantiate", "Validate", "Authenticate", "Confirm", "Verify"],
    antonyms: ["Refute", "Contradict", "Undermine", "Disprove"],
    tone: "Academic / Formal / Positive Validation",
    quiz: {
      passage: "Initial surveys suggested the newly discovered ruins dated to the Bronze Age. However, archaeologists hesitated to publish their findings until carbon dating of organic artifacts could _______ the initial architectural estimations.",
      options: ["corroborate", "fabricate", "undermine", "disparage"],
      correct: 0,
      explanation: "The passage notes researchers waited for carbon dating to support/confirm their initial estimations before publishing. 'Corroborate' correctly fits the requirement of confirming with evidence. 'Fabricate' means invent dishonestly, 'undermine' means weaken, and 'disparage' means belittle."
    }
  },
  {
    id: 2,
    word: "Undermine",
    pos: "verb",
    ipa: "/ˌʌn.dəˈmaɪn/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To weaken, erode, or damage the foundation, validity, or effectiveness of something gradually or insidiously.",
    turkishMeaning: "Baltalamak, temelini zayıflatmak, sarsmak",
    turkishNuance: "Doğrudan yok etmek (destroy) değil, bir argümanın, otoritenin ya da teorinin güvenilirliğini adım adım çürütmek/zayıflatmak anlamına gelir. DSAT'de bilimsel bir çelişkinin önceki teoriyi geçersiz kılması senaryolarında kilit kelimedir.",
    exampleSentence: "The discovery of anomalous fossil records in the lower strata threatened to undermine the established chronological framework of mammalian evolution.",
    satDomain: "Science / Evolutionary Biology",
    sat2026HowTested: "Metinde 'However', 'Yet', 'Anomalous findings' gibi zıtlık bağlaçlarından sonra bir argümanın güvenilirliğini sarsan unsur sorulduğunda doğru cevaptır.",
    distractorTraps: [
      "Bolster (Tam zıt anlam: güçlendirmek)",
      "Understate (Eksik ifade etmek - kök benzerliği tuzağı)",
      "Obfuscate (Kasıtlı kafa karıştırmak)"
    ],
    synonyms: ["Weaken", "Subvert", "Erode", "Compromise", "Impair"],
    antonyms: ["Bolster", "Substantiate", "Reinforce", "Strengthen"],
    tone: "Critical / Negative / Analytical",
    quiz: {
      passage: "While early econometric models assumed completely rational consumer choices, decades of behavioral psychology experiments have continued to _______ these theoretical assumptions by demonstrating systematic cognitive biases.",
      options: ["corroborate", "undermine", "replicate", "consecrate"],
      correct: 1,
      explanation: "'While' establishes contrast: theoretical assumptions were once accepted, but cognitive bias experiments have weakened/challenged them. 'Undermine' is the precise academic term for eroding theoretical assumptions."
    }
  },
  {
    id: 3,
    word: "Substantiate",
    pos: "verb",
    ipa: "/səbˈstæn.ʃi.eɪt/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To provide solid, verifiable evidence or proof to support the truth of a claim or hypothesis.",
    turkishMeaning: "Somut delillerle kanıtlamak, doğrulamak, dayanak göstermek",
    turkishNuance: "'Substance' (madde/öz) kökünden gelir; soyut bir iddiaya 'somut kanıt gövdesi' kazandırmak demektir. Türkçedeki 'altını doldurmak' deyimine çok yakındır.",
    exampleSentence: "Without quantifiable telemetry data, the research team was unable to substantiate their bold assertions regarding deep-space atmospheric turbulence.",
    satDomain: "Science / Astrophysics",
    sat2026HowTested: "DSAT 'Claim and Evidence' bağlamlarında 'without proof they could not [_____] the claim' kurgusunda sıkça test edilir.",
    distractorTraps: [
      "Speculate (Kanıtsız tahmin yürütmek)",
      "Disseminate (Yaymak, kanıtlamakla ilgisi yok)",
      "Subvert (Baltalamak)"
    ],
    synonyms: ["Validate", "Corroborate", "Verify", "Demonstrate", "Justify"],
    antonyms: ["Disprove", "Refute", "Bely", "Invalidate"],
    tone: "Formal / Rigorous / Academic",
    quiz: {
      passage: "Although the historian proposed a fascinating narrative regarding trade routes in the ancient Levant, peer reviewers noted that archaeological artifacts were insufficient to _______ her central thesis.",
      options: ["substantiate", "extrapolate", "abridge", "disparage"],
      correct: 0,
      explanation: "The sentence notes that artifacts were insufficient to prove/provide tangible evidence for her thesis. 'Substantiate' means provide evidence to support an assertion."
    }
  },
  {
    id: 4,
    word: "Refute",
    pos: "verb",
    ipa: "/rɪˈfjuːt/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To prove a statement, theory, or accusation to be definitively wrong or false through reasoning or evidence.",
    turkishMeaning: "Çürütmek, aksini ispatlamak, yalanlamak",
    turkishNuance: "'Reject' (reddetmek) ile karıştırılmamalıdır; reject sadece kabul etmemektir, 'refute' ise mantık veya kanıtla YANLIŞLIĞINI İSPATLAMAKTIR. SAT'de bu ayrım çok puan kazandırır.",
    exampleSentence: "Rigorous statistical re-analysis of the clinical trial data completely refuted the manufacturer's assertion that the compound was universally efficacious.",
    satDomain: "Science / Medicine",
    sat2026HowTested: "İki araştırmacının tartışmasında veya ikinci metnin birinci metni çürüttüğü 'Cross-Text Connections' sorularında sorulur.",
    distractorTraps: [
      "Concede (Hak vermek / teslim etmek)",
      "Repudiate (Sadece reddetmek, kanıtla çürütmek şart değil)",
      "Reiterate (Tekrarlamak)"
    ],
    synonyms: ["Disprove", "Rebut", "Confute", "Debunk", "Invalidate"],
    antonyms: ["Confirm", "Corroborate", "Validate", "Support"],
    tone: "Definitive / Logical / Counter-argumentative",
    quiz: {
      passage: "Proponents of the steady-state cosmological model struggled as emerging cosmic microwave background radiation measurements worked to definitively _______ their static universe hypothesis.",
      options: ["refute", "advocate", "postulate", "synthesize"],
      correct: 0,
      explanation: "Cosmic microwave data provided definitive evidence disproving the steady-state model. 'Refute' means prove false with evidence."
    }
  },
  {
    id: 5,
    word: "Concede",
    pos: "verb",
    ipa: "/kənˈsiːd/",
    category: "Argumentation & Evidence",
    difficulty: "Hard",
    definition: "To acknowledge, admit, or yield the truth or legitimacy of something reluctantly or after initial resistance.",
    turkishMeaning: "Kabullenmek, hak vermek, (yenilgiyi/gerçeği) istemeyerek kabul etmek",
    turkishNuance: "SAT metinlerindeki retorik manevralarda yazarın karşı tarafın haklı olduğu bir noktayı 'itiraf edip' ardından kendi ana tezini koruması durumunda (concession & counter-argument) karşımıza çıkar.",
    exampleSentence: "While the climatologist defended his core projection, he was forced to concede that the regional rainfall models lacked micro-level resolution.",
    satDomain: "Social Science / Rhetoric",
    sat2026HowTested: "Zıtlık cümlelerinde 'While he maintained X, he had to [_____] that Y was true' yapısında sorulur.",
    distractorTraps: [
      "Contend (İddia etmek - zıt anlam)",
      "Conceal (Gizlemek - ses benzerliği tuzağı)",
      "Condemn (Kınamak)"
    ],
    synonyms: ["Acknowledge", "Admit", "Grant", "Yield", "Accede"],
    antonyms: ["Deny", "Dispute", "Contend", "Refuse"],
    tone: "Nuanced / Rhetorical / Moderate",
    quiz: {
      passage: "Though the defense attorney vehemently argued for his client's innocence, he was compelled to _______ that the forensic timeline placed the defendant at the scene.",
      options: ["concede", "prevaricate", "extol", "obfuscate"],
      correct: 0,
      explanation: "'Though' signals that despite defending the client, he had to admit/yield an undeniable factual point. 'Concede' means acknowledge reluctantly."
    }
  },
  {
    id: 6,
    word: "Postulate",
    pos: "verb",
    ipa: "/ˈpɒs.tʃə.leɪt/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To suggest, propose, or assume the existence or truth of something as a basis for reasoning, discussion, or belief.",
    turkishMeaning: "Varsaymak, ileri sürmek, önerme olarak ortaya atmak",
    turkishNuance: "Henüz kanıtlanmamış bir teorinin başlangıç noktası olarak bir hipotezi ortaya koymaktır. 'Hypothesize' ve 'posit' ile eşanlamlıdır.",
    exampleSentence: "Theoretical physicists postulate the existence of dark matter to explain the anomalous rotational velocity of spiral galaxies.",
    satDomain: "Science / Physics",
    sat2026HowTested: "Bir araştırmacının yeni bir model veya açıklama öne sürdüğü giriş paragraflarında fiil boşluklarında sorulur.",
    distractorTraps: [
      "Substantiate (Kanıtlamak - bu henüz varsayım aşamasıdır)",
      "Refute (Çürütmek)",
      "Preclude (Engellemek)"
    ],
    synonyms: ["Hypothesize", "Posit", "Propose", "Premise", "Theorize"],
    antonyms: ["Prove", "Disprove", "Ignore", "Reject"],
    tone: "Theoretical / Speculative / Academic",
    quiz: {
      passage: "In order to explain why certain migratory birds navigate flawlessly on overcast nights, biophysicists _______ that the animals utilize quantum entanglement within retinal cryptochromes.",
      options: ["postulate", "debunk", "curtail", "relinquish"],
      correct: 0,
      explanation: "Scientists are proposing a theoretical mechanism to explain the phenomenon. 'Postulate' means suggest or hypothesize as the foundation of an explanation."
    }
  },
  {
    id: 7,
    word: "Equivocal",
    pos: "adjective",
    ipa: "/ɪˈkwɪv.ə.kəl/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "Open to more than one interpretation; ambiguous, uncertain, or deliberately misleading.",
    turkishMeaning: "Muğlak, iki anlama çekilebilir, net olmayan, şüpheli",
    turkishNuance: "'Equal voice' (aequus + vox) kökünden gelir. 'Unequivocal' (kesin, şüphe götürmez) kelimesinin zıddıdır. SAT'de bilimsel sonuçların kesin bir yargıya varmaya yetmediği durumlarda (inconclusive) kullanılır.",
    exampleSentence: "Because the preliminary data yielded equivocal results, the pharmaceutical board ordered an extended Phase III trial before authorizing distribution.",
    satDomain: "Science / Statistics",
    sat2026HowTested: "Metinde 'neither confirmed nor denied', 'mixed outcomes', 'unclear implications' ifadeleri geçtiğinde eşleştirilir.",
    distractorTraps: [
      "Unequivocal (Zıt anlam: apaçık, tartışmasız)",
      "Equivalent (Eşdeğer - kök tuzağı)",
      "Equitable (Adil, tarafsız)"
    ],
    synonyms: ["Ambiguous", "Noncommittal", "Vague", "Indeterminate", "Enigmatic"],
    antonyms: ["Unequivocal", "Lucid", "Unambiguous", "Explicit", "Clear"],
    tone: "Neutral / Skeptical / Analytical",
    quiz: {
      passage: "The politician’s statement on agricultural subsidies was deliberately _______, worded so carefully that both industrial farm owners and environmental lobbyists believed she supported their respective positions.",
      options: ["equivocal", "didactic", "untenable", "scrupulous"],
      correct: 0,
      explanation: "The statement allowed both opposing sides to interpret it favorably, meaning it was ambiguous and open to multiple interpretations ('equivocal')."
    }
  },
  {
    id: 8,
    word: "Ambivalent",
    pos: "adjective",
    ipa: "/æmˈbɪv.ə.lənt/",
    category: "Rhetoric & Tone",
    difficulty: "Essential",
    definition: "Having mixed, conflicting, or contradictory feelings or opinions about something or someone.",
    turkishMeaning: "Çelişkili duygular besleyen, kararsız, ikircikli",
    turkishNuance: "'Apathetic' (umursamaz / ilgisiz) ile KARIŞTIRILMAMALIDIR! Ambivalent birisi ÇOK şey hisseder ama hisleri birbiriyle çelişir (hem sever hem nefret eder). DSAT ton/yazar tutumu sorularında en popüler çeldiricilerden ve doğru cevaplardan biridir.",
    exampleSentence: "Literary critics noted that the protagonist remained ambivalent about modernization, longing for rural heritage while welcoming technological ease.",
    satDomain: "Literature / Character Analysis",
    sat2026HowTested: "DSAT Reading'de yazarın veya karakterin hem olumlu hem olumsuz yönleri aynı anda kabul ettiği durumlarda ton sorusu olarak test edilir.",
    distractorTraps: [
      "Apathetic (İlgisiz, duygusuz - çok yaygın tuzak)",
      "Unequivocal (Net, kararlı)",
      "Adversarial (Düşmanca)"
    ],
    synonyms: ["Conflicted", "Equivocal", "Undecided", "Vacillating", "Torn"],
    antonyms: ["Decisive", "Unwavering", "Certain", "Resolute"],
    tone: "Psychological / Complex / Nuanced",
    quiz: {
      passage: "Elena felt deeply _______ regarding her promotion: while she relished the intellectual prestige and financial autonomy, she dreaded relocating away from her close-knit family.",
      options: ["ambivalent", "apathetic", "vindictive", "pedantic"],
      correct: 0,
      explanation: "Elena experiences simultaneous positive and negative emotions (pride vs. reluctance to move). 'Ambivalent' precisely captures having simultaneous conflicting feelings."
    }
  },
  {
    id: 9,
    word: "Pragmatic",
    pos: "adjective",
    ipa: "/præɡˈmæt.ɪk/",
    category: "Rhetoric & Tone",
    difficulty: "Essential",
    definition: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical or idealistic considerations.",
    turkishMeaning: "Pratik, uygulamacı, faydacı, gerçekçi",
    turkishNuance: "İdealist ve hayalperest (idealistic/quixotic) yaklaşımların zıddıdır. Zor bir durumda ideolojiyi bir kenara bırakıp 'neyin işe yarayacağına' odaklanan liderler veya politikalar için kullanılır.",
    exampleSentence: "Faced with immediate municipal budget deficits, the mayor adopted a pragmatic compromise rather than pursuing ideologically rigid fiscal reforms.",
    satDomain: "History / Governance",
    sat2026HowTested: "Tarih ve sosyal bilim pasajlarında, liderlerin teorik dogmalar yerine sahadaki somut gerekliliklere göre hareket etmesi bağlamında sorulur.",
    distractorTraps: [
      "Dogmatic (Katı fikirli / teorisyen - zıt anlam)",
      "Pedantic (Aşırı kuralcı)",
      "Quixotic (Hayalperest / uygulanamaz)"
    ],
    synonyms: ["Practical", "Utilitarian", "Realistic", "Hardheaded", "Sensible"],
    antonyms: ["Idealistic", "Quixotic", "Impractical", "Dogmatic", "Utopian"],
    tone: "Positive / Realistic / Functional",
    quiz: {
      passage: "Rather than insisting on an unachievable zero-waste deadline, the environmental committee chose a _______ strategy that phased in recycling mandates incrementally.",
      options: ["pragmatic", "pedantic", "dogmatic", "specious"],
      correct: 0,
      explanation: "The committee avoided an unrealistic ideal and adopted a realistic, workable step-by-step plan. 'Pragmatic' means practical and realistic."
    }
  },
  {
    id: 10,
    word: "Pedantic",
    pos: "adjective",
    ipa: "/pɪˈdæn.tɪk/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Excessively concerned with minor details, formal rules, or displaying trivial academic knowledge ostentatiously.",
    turkishMeaning: "Aşırı kuralcı, kılı kırk yaran, bilgiçlik taslayan, detaylara boğulan",
    turkishNuance: "'Meticulous' (titiz - olumlu) kelimesinin olumsuz/eleştirel versiyonudur. Ana fikri kaçırıp önemsiz küçük kural ve teknik detaylarla karşı tarafı bunaltan kişiler/metinler için kullanılır.",
    exampleSentence: "The reviewer criticized the historian's prose as overly pedantic, noting that endless footnotes about obscure municipal bylaws obscured the grand historical narrative.",
    satDomain: "Literature / Book Review",
    sat2026HowTested: "Yazarın başka bir akademisyeni veya yazıyı 'gereksiz detaycılıkla' eleştirdiği eleştiri pasajlarında sorulur.",
    distractorTraps: [
      "Meticulous (Olumlu titiz - ton tuzağı)",
      "Profound (Derin - anlam tuzağı)",
      "Concise (Öz / kısa)"
    ],
    synonyms: ["Overly fussy", "Punctilious", "Doctrinaire", "Dogmatic", "Fastidious"],
    antonyms: ["Broad-minded", "Informal", "Careless", "Holistic"],
    tone: "Critical / Negative / Disparaging",
    quiz: {
      passage: "While thoroughness is admirable, Professor Klein's lecture deteriorated into _______ obsession as he spent forty minutes parsing a single grammatical anomaly in a minor manuscript.",
      options: ["pedantic", "lucid", "visceral", "egalitarian"],
      correct: 0,
      explanation: "The professor lost sight of the broader lesson by obsessing over an inconsequential minor detail. 'Pedantic' accurately describes this excessive focus on trivial academic rules."
    }
  },
  {
    id: 11,
    word: "Candid",
    pos: "adjective",
    ipa: "/ˈkæn.dɪd/",
    category: "Rhetoric & Tone",
    difficulty: "Essential",
    definition: "Truthful, straightforward, frank, and sincere in speech or expression; free from bias or deception.",
    turkishMeaning: "Açık sözlü, samimi, dobraca, içten",
    turkishNuance: "DSAT'de hem 'dürüst/içten' konuşan bir yazarın tonunu tarif ederken hem de diplomatik yapmacıklıktan uzak net değerlendirmelerde kullanılır.",
    exampleSentence: "In her candid memoir, the former diplomat revealed the profound disagreements that had stalled multilateral peace negotiations for over a decade.",
    satDomain: "Humanities / Memoir",
    sat2026HowTested: "Yazarın süslemeden, gerçekleri dosdoğru aktardığı bağlamlarda aranır.",
    distractorTraps: [
      "Disingenuous (Zıt anlam: iki yüzlü)",
      "Cryptic (Gizemli / kapalı)",
      "Complacent (Rehavete kapılmış)"
    ],
    synonyms: ["Frank", "Forthright", "Outspoken", "Unvarnished", "Blunt"],
    antonyms: ["Disingenuous", "Evasive", "Guarded", "Hypocritical", "Insincere"],
    tone: "Honest / Direct / Positive",
    quiz: {
      passage: "In an industry known for evasive public relations statements, the CEO’s _______ admission of software flaws was praised by tech journalists for its honesty.",
      options: ["candid", "specious", "arcane", "superfluous"],
      correct: 0,
      explanation: "The context contrasts evasive PR with a frank, honest admission. 'Candid' means straightforward and truthful."
    }
  },
  {
    id: 12,
    word: "Didactic",
    pos: "adjective",
    ipa: "/daɪˈdæk.tɪk/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Intended to teach, instruct, or impart a moral lesson, often in a patronizing or overly preachy manner.",
    turkishMeaning: "Öğretici, ders verici, nasihat edici",
    turkishNuance: "Nötr olarak 'eğitici' olabileceği gibi SAT'de sık sık 'okuyucuya parmak sallayarak ahlak dersi veren (preachy)' hafif olumsuz tonları anlatmak için kullanılır.",
    exampleSentence: "Eighteenth-century children's fables were explicitly didactic, designed less to entertain than to instill rigorous civic and moral virtues.",
    satDomain: "Literature / History of Education",
    sat2026HowTested: "Edebi eserlerin amacının sadece zevk vermek değil, ders vermek olduğunu belirten kısımlarda sorulur.",
    distractorTraps: [
      "Pedantic (Kuralcı/detaycı - çok karıştırılır)",
      "Satirical (İronik/alaycı)",
      "Aesthetic (Estetik odaklı)"
    ],
    synonyms: ["Instructive", "Pedagogical", "Moralizing", "Preachy", "Eduactive"],
    antonyms: ["Uninformative", "Hedonistic", "Entertaining solely"],
    tone: "Instructive / Sometimes Patronizing",
    quiz: {
      passage: "Modern novelists often reject the _______ approach of Victorian literature, preferring to present moral dilemmas without dictating how the reader ought to judge the characters.",
      options: ["didactic", "anomalous", "pragmatic", "immutable"],
      correct: 0,
      explanation: "Victorian literature often sought to preach or instruct moral lessons directly. 'Didactic' means intended to instruct or moralize."
    }
  },
  {
    id: 13,
    word: "Acerbic",
    pos: "adjective",
    ipa: "/əˈsɜː.bɪk/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Sharp, biting, or sour in tone, temper, or language; harshly critical.",
    turkishMeaning: "İğneleyici, keskin dilli, zehir zemberek, sert eleştirel",
    turkishNuance: "Latincedeki 'ekşi/acı' (acer) kökünden gelir. Yazarın hiciv veya eleştiri yaparken nezaketi bırakıp acımasız ve sivri dilli olması durumunu niteler.",
    exampleSentence: "The theater critic was famous for his acerbic wit, once describing a Broadway debut as 'an elaborate exercise in communal boredom.'",
    satDomain: "Humanities / Journalism",
    sat2026HowTested: "DSAT Reading'de ton analizi sorularında veya yazarın sert eleştirel üslubunu niteleyen sıfat boşluklarında çıkar.",
    distractorTraps: [
      "Sycophantic (Dalkavukça - zıt anlam)",
      "Affable (Cana yakın, yumuşak başlı)",
      "Ambivalent (Kararsız)"
    ],
    synonyms: ["Caustic", "Biting", "Mordant", "Scathing", "Tart"],
    antonyms: ["Mild", "Affable", "Complimentary", "Dulcet", "Gentle"],
    tone: "Biting / Harshly Critical / Satirical",
    quiz: {
      passage: "Known for his _______ style, the satirist mercilessly dismantled the senator's policy speech with razor-sharp quips and unsparing irony.",
      options: ["acerbic", "didactic", "reverent", "tacit"],
      correct: 0,
      explanation: "'Razor-sharp quips' and 'mercilessly dismantled' indicate a biting, sarcastic, and sharp tone. 'Acerbic' means sharp and bitingly critical."
    }
  },
  {
    id: 14,
    word: "Circumspect",
    pos: "adjective",
    ipa: "/ˈsɜː.kəm.spekt/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Wary, cautious, and unwilling to take unnecessary risks; considering all circumstances and consequences carefully.",
    turkishMeaning: "Temkinli, tedbirli, etraflıca düşünen, basiretli",
    turkishNuance: "'Circum' (etraf) + 'spect' (bakmak) -> Etrafına iyice bakıp adım atan kimse. 'Reckless' veya 'rash' kelimelerinin zıddıdır.",
    exampleSentence: "Given the volatile geopolitical climate, the ambassador delivered a remarkably circumspect statement that avoided taking a firm stance.",
    satDomain: "Social Studies / Diplomacy",
    sat2026HowTested: "Yetkililerin veya bilim insanlarının riskli bir konuda çok dikkatli ve tartarak konuştuğu durumlarda sorulur.",
    distractorTraps: [
      "Circumlocutory (Dolambaçlı laf eden - kök tuzağı)",
      "Reckless (Dikkatsiz - zıt anlam)",
      "Imperious (Buyurgan)"
    ],
    synonyms: ["Cautious", "Prudent", "Chary", "Wary", "Guarded"],
    antonyms: ["Reckless", "Rash", "Incautious", "Audacious", "Impulsive"],
    tone: "Prudent / Measured / Restrained",
    quiz: {
      passage: "Because previous drug trials had produced unforeseen side effects, the biomedical agency adopted a _______ timeline for approving the novel vaccine.",
      options: ["circumspect", "precipitous", "didactic", "specious"],
      correct: 0,
      explanation: "Previous unforeseen dangers caused regulators to be cautious and watchful. 'Circumspect' means cautious and prudent."
    }
  },
  {
    id: 15,
    word: "Reticent",
    pos: "adjective",
    ipa: "/ˈret.ɪ.sənt/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Not revealing one's thoughts or feelings readily; reserved, quiet, or reluctant to speak.",
    turkishMeaning: "Ketum, sessiz, duygularını/düşüncelerini kendine saklayan, çekimser",
    turkishNuance: "DSAT'de 'hesitant to speak' ya da 'unwilling to disclose information' ipuçlarıyla test edilir. 'Reluctant' (isteksiz) kelimesinin konuşma/paylaşım özelindeki halidir.",
    exampleSentence: "Archival records show that the chief architect was notoriously reticent in public interviews, preferring to let his structural monuments speak for themselves.",
    satDomain: "Humanities / Biography",
    sat2026HowTested: "Karakterlerin veya araştırmacıların kamuya açıklama yapmaktan kaçındığı bağlamlarda test edilir.",
    distractorTraps: [
      "Reticulated (Ağsı - sahte kök tuzağı)",
      "Loquacious (Çok konuşan - zıt anlam)",
      "Candid (Açık sözlü - zıt anlam)"
    ],
    synonyms: ["Reserved", "Taciturn", "Secretive", "Withdrawn", "Diffident"],
    antonyms: ["Loquacious", "Garrulous", "Voluble", "Expansive", "Candid"],
    tone: "Quiet / Restrained / Introverted",
    quiz: {
      passage: "Despite repeated inquiries from investigative journalists, the reclusive software pioneer remained _______ regarding the proprietary neural algorithms he had developed.",
      options: ["reticent", "prolific", "candid", "effusive"],
      correct: 0,
      explanation: "The pioneer refused to disclose details despite inquiries. 'Reticent' means reserved and reluctant to speak."
    }
  },
  {
    id: 16,
    word: "Anomalous",
    pos: "adjective",
    ipa: "/əˈnɒm.ə.ləs/",
    category: "Science & Research",
    difficulty: "Essential",
    definition: "Deviating from what is standard, normal, or expected; abnormal or irregular.",
    turkishMeaning: "Anormal, kural dışı, sapma gösteren, olağandışı",
    turkishNuance: "SAT fen pasajlarının en vazgeçilmez kelimelerindendir. Bir deneyde beklenen grafiğe veya biyolojik kurala uymayan 'aykırı değer' (outlier) çıktığında araştırmacılar buna 'anomalous reading/data' der.",
    exampleSentence: "The astronomer flagged the anomalous radiation spike detected by the radio telescope, suspecting it indicated an uncatalogued pulsar.",
    satDomain: "Science / Astronomy",
    sat2026HowTested: "Metinde 'unexpected result', 'outlier', 'inconsistent with standard models' ifadeleriyle eşleştirilir.",
    distractorTraps: [
      "Anonymous (İsimsiz - yazım benzerliği tuzağı)",
      "Typical (Sıradan - zıt anlam)",
      "Ubiquitous (Her yerde olan)"
    ],
    synonyms: ["Atypical", "Aberrant", "Irregular", "Divergent", "Exceptional"],
    antonyms: ["Conforming", "Standard", "Typical", "Normal", "Regular"],
    tone: "Scientific / Objective / Notable",
    quiz: {
      passage: "Most metals expand predictably when heated; however, bismuth contracts under specific high-pressure transitions, displaying an _______ thermodynamic behavior.",
      options: ["anomalous", "ubiquitous", "immutable", "exhaustive"],
      correct: 0,
      explanation: "'However' indicates a contrast to predictable behavior. Bismuth's behavior deviates from the norm, making it 'anomalous' (irregular/atypical)."
    }
  },
  {
    id: 17,
    word: "Empirical",
    pos: "adjective",
    ipa: "/ɪmˈpɪr.ɪ.kəl/",
    category: "Science & Research",
    difficulty: "Essential",
    definition: "Based on, concerned with, or verifiable by observation, experiment, or direct experience rather than theory or pure logic.",
    turkishMeaning: "Deneysel, gözleme dayalı, ampirik, tecrübi",
    turkishNuance: "Felsefi spekülasyonların ve soyut teorilerin zıddıdır. 'Empirical evidence' ifadesi SAT'de 'laboratuvar veya saha verileriyle kanıtlanmış bilgi' anlamında defalarca sorulmuştur.",
    exampleSentence: "While the economic theory was mathematically elegant, it lacked empirical support from actual household spending surveys.",
    satDomain: "Social Science / Economics",
    sat2026HowTested: "'Theoretical' veya 'speculative' ile zıtlık kurularak 'observation-based' bağlamında sorulur.",
    distractorTraps: [
      "Theoretical (Teorik - tam zıt kavram)",
      "Imperial (İmparatorlukla ilgili - ses benzerliği)",
      "Empyrean (Göksel)"
    ],
    synonyms: ["Experimental", "Observational", "Verifiable", "Practical", "Factual"],
    antonyms: ["Theoretical", "Speculative", "Conjectural", "Hypothetical"],
    tone: "Rigorous / Objective / Scientific",
    quiz: {
      passage: "Early philosophers debated atomic structure using metaphysical reasoning, but modern physics demands _______ evidence derived from particle accelerator experiments.",
      options: ["empirical", "arcane", "spurious", "tenuous"],
      correct: 0,
      explanation: "Metaphysical reasoning (speculation) is contrasted with evidence derived from actual physical experiments. 'Empirical' means based on experiment and observation."
    }
  },
  {
    id: 18,
    word: "Ubiquitous",
    pos: "adjective",
    ipa: "/juːˈbɪk.wɪ.təs/",
    category: "Science & Research",
    difficulty: "Essential",
    definition: "Present, appearing, or found everywhere simultaneously; omnipresent.",
    turkishMeaning: "Her yerde bulunan, yaygın, her an rastlanan",
    turkishNuance: "Teknoloji, akıllı telefonlar, mikroplastikler veya doğadaki mikroorganizmalar için DSAT'de çok popülerdir. 'Pervasive' ve 'omnipresent' ile yakın anlamlıdır.",
    exampleSentence: "In contemporary urban landscapes, smartphones have become so ubiquitous that traditional public payphones have vanished entirely.",
    satDomain: "Technology / Sociology",
    sat2026HowTested: "Bir şeyin nadir (rare/scarce) olmasının tam tersi olarak, hayatın her alanına girdiği durumlarda test edilir.",
    distractorTraps: [
      "Iniquitous (Ahlaksız/kötü - ses benzerliği)",
      "Scarce (Kıt/nadir - zıt anlam)",
      "Ephemeral (Geçici)"
    ],
    synonyms: ["Omnipresent", "Pervasive", "Everywhere", "Universal", "Prevalent"],
    antonyms: ["Rare", "Scarce", "Infrequent", "Isolated", "Uncommon"],
    tone: "Descriptive / Universal",
    quiz: {
      passage: "Microplastic contamination is no longer confined to industrial waterways; recent ecological surveys have detected its _______ presence from deep ocean trenches to Arctic snowfall.",
      options: ["ubiquitous", "negligible", "ephemeral", "anachronistic"],
      correct: 0,
      explanation: "Finding plastic in both deep oceans and Arctic snow demonstrates it is present everywhere. 'Ubiquitous' means omnipresent or found everywhere."
    }
  },
  {
    id: 19,
    word: "Ephemeral",
    pos: "adjective",
    ipa: "/ɪˈfem.ər.əl/",
    category: "Change & Permanence",
    difficulty: "Essential",
    definition: "Lasting for only a very short time; fleeting, transitory, or short-lived.",
    turkishMeaning: "Kısa ömürlü, gelip geçici, fani, anlık",
    turkishNuance: "DSAT'de kalıcı sanat eserleri, anıtlar veya genetik mutasyonların 'uzun süreli' (permanent/enduring) doğasına karşılık mevsimlik çiçekler, popüler trendler veya geçici hava olayları için kullanılır.",
    exampleSentence: "The blooming of the desert wildflowers was dazzling but ephemeral, withering away under the scorching midday sun within forty-eight hours.",
    satDomain: "Science / Botany",
    sat2026HowTested: "'Transient', 'fleeting', 'short-lived' kelimeleriyle eşleştirilir; 'perpetual' ve 'immutable' kelimeleriyle zıtlık oluşturur.",
    distractorTraps: [
      "Ethereal (Ruhani/hafif - ses benzerliği)",
      "Permanent (Kalıcı - zıt anlam)",
      "Epidemic (Salgın)"
    ],
    synonyms: ["Transient", "Transitory", "Fleeting", "Evanescent", "Short-lived"],
    antonyms: ["Permanent", "Enduring", "Perpetual", "Eternal", "Immutable"],
    tone: "Poetic / Observational / Temporal",
    quiz: {
      passage: "Social media viral trends are notoriously _______: a topic may dominate global discourse for twenty-four hours only to be utterly forgotten by the following week.",
      options: ["ephemeral", "immutable", "tenable", "prodigious"],
      correct: 0,
      explanation: "The passage highlights that trends last only a few hours before disappearing. 'Ephemeral' means short-lived and fleeting."
    }
  },
  {
    id: 20,
    word: "Transient",
    pos: "adjective",
    ipa: "/ˈtræn.zi.ənt/",
    category: "Change & Permanence",
    difficulty: "Essential",
    definition: "Lasting only for a short time; impermanent; passing through briefly.",
    turkishMeaning: "Geçici, anlık süren, kalıcı olmayan, misafir",
    turkishNuance: "'Ephemeral' ile çok yakın arkadaştır. Fizikte 'transient currents' (anlık akımlar), sosyolojide 'transient populations' (göçebe/geçici nüfus) bağlamlarında sıkça sorulur.",
    exampleSentence: "Ecologists observed that the temporary influx of migratory warblers had only a transient effect on the local insect population.",
    satDomain: "Science / Ecology",
    sat2026HowTested: "Kalıcı değişim (permanent shift) ile anlık dalgalanma arasındaki farkı vurgularken kullanılır.",
    distractorTraps: [
      "Transition (Geçiş - isim formu tuzağı)",
      "Intransigent (Uzlaşmaz - zıt kök)",
      "Enduring (Kalıcı - zıt anlam)"
    ],
    synonyms: ["Temporary", "Fleeting", "Short-term", "Fugitive", "Passing"],
    antonyms: ["Permanent", "Durable", "Perennial", "Constant"],
    tone: "Temporal / Analytical",
    quiz: {
      passage: "The sudden drop in atmospheric pressure caused only a _______ dip in temperature, which promptly normalized once the cold front bypassed the valley.",
      options: ["transient", "perpetual", "substantive", "didactic"],
      correct: 0,
      explanation: "The dip lasted only briefly and normalized quickly. 'Transient' means lasting for a short time."
    }
  },
  {
    id: 21,
    word: "Immutable",
    pos: "adjective",
    ipa: "/ɪˈmjuː.tə.bəl/",
    category: "Change & Permanence",
    difficulty: "Hard",
    definition: "Unchanging over time or unable to be changed; fixed and permanent.",
    turkishMeaning: "Değişmez, başkalaşmaz, sabit, ebedi",
    turkishNuance: "'Mutate' (mutasyona uğramak / değişmek) kelimesinin olumsuz ön ekli halidir (im-mutable). Doğa kanunları veya değişmeyen tarihi dogmalar için kullanılır.",
    exampleSentence: "Newtonian physics once regarded time and space as absolute, immutable constants across all inertial frames.",
    satDomain: "Science / Physics",
    sat2026HowTested: "Değişkenlik (fluidity/malleability) gösteren teorilerle karşılaştırıldığında değişmeyen kuralları nitelemek için sorulur.",
    distractorTraps: [
      "Mutable (Değişken - tam zıt anlam)",
      "Mute (Dilsiz/sessiz - kök tuzağı)",
      "Immune (Bağışık)"
    ],
    synonyms: ["Unchangeable", "Permanent", "Invariable", "Fixed", "Rigid"],
    antonyms: ["Mutable", "Fluid", "Variable", "Alterable", "Dynamic"],
    tone: "Definitive / Timeless / Absolute",
    quiz: {
      passage: "While linguistic conventions evolve dynamically across generations, early prescriptive grammarians falsely treated language rules as _______ stone edicts.",
      options: ["immutable", "ephemeral", "equivocal", "visceral"],
      correct: 0,
      explanation: "The grammarians treated rules as permanently fixed like stone edicts, in contrast to dynamic evolution. 'Immutable' means unchangeable."
    }
  },
  {
    id: 22,
    word: "Fluctuate",
    pos: "verb",
    ipa: "/ˈflʌk.tʃu.eɪt/",
    category: "Change & Permanence",
    difficulty: "Essential",
    definition: "To rise and fall irregularly in number, amount, or intensity; to vary continually.",
    turkishMeaning: "Dalgalanmak, inişli çıkışlı seyretmek, değişkenlik göstermek",
    turkishNuance: "DSAT grafik ve veri analizi (Data Interpretation) eşlikli Reading sorularında döviz kurları, sıcaklık değişimleri veya popülasyon grafikleri için kullanılır.",
    exampleSentence: "Because ocean surface temperatures fluctuate seasonally, marine biologists must normalize their acoustic whale-tracking data over multi-year cycles.",
    satDomain: "Science / Oceanography",
    sat2026HowTested: "Grafiklerde zikzak çizen veya sabit kalmayan değerleri ifade etmek için fiil olarak sorulur.",
    distractorTraps: [
      "Stagnate (Durgunlaşmak / sabit kalmak - zıt anlam)",
      "Fulminate (Ateş püskürmek/şiddetle karşı çıkmak - ses benzerliği)",
      "Congeal (Pıhtılaşmak)"
    ],
    synonyms: ["Oscillate", "Vary", "Waver", "Shift", "Alternate"],
    antonyms: ["Stabilize", "Remain constant", "Settle", "Standardize"],
    tone: "Quantitative / Dynamic / Objective",
    quiz: {
      passage: "Unlike retail bond yields that offer steady predictable payouts, commodity prices tend to _______ wildly in response to sudden geopolitical tensions.",
      options: ["fluctuate", "stagnate", "corroborate", "subvert"],
      correct: 0,
      explanation: "The sentence contrasts steady payouts with commodity prices that swing up and down erratically. 'Fluctuate' means vary or shift irregularly."
    }
  },
  {
    id: 23,
    word: "Mercurial",
    pos: "adjective",
    ipa: "/mɜːˈkjʊə.ri.əl/",
    category: "Change & Permanence",
    difficulty: "Hard",
    definition: "Subject to sudden or unpredictable changes of mood, mind, or temperament; volatile.",
    turkishMeaning: "Değişken, dengesiz, sağı solu belli olmayan, cıva gibi hareketli",
    turkishNuance: "Roma tanrısı Merkür'den (ve cıva elementinden) türemiştir. Ruh hali hızla değişen karakterler veya aniden yön değiştiren piyasa dinamikleri için kullanılır.",
    exampleSentence: "The general’s mercurial temperament made his junior officers nervous, as his disposition could swing from jovial to furious in a matter of seconds.",
    satDomain: "Literature / Characterization",
    sat2026HowTested: "Edebi metinlerde karakterlerin tahmin edilemez ani duygu geçişlerini nitelemek için sorulur.",
    distractorTraps: [
      "Equable (Sakin/dengeli - zıt anlam)",
      "Mercenary (Paragöz - kök benzerliği tuzağı)",
      "Martial (Askeri)"
    ],
    synonyms: ["Volatile", "Capricious", "Fickle", "Erratic", "Temperamental"],
    antonyms: ["Stable", "Constant", "Steady", "Predictable", "Equable"],
    tone: "Descriptive / Psychological / Volatile",
    quiz: {
      passage: "Investors grew wary of the startup founder's _______ decision-making, as she would radically pivot product roadmaps without consulting senior engineers.",
      options: ["mercurial", "circumspect", "dogmatic", "lucid"],
      correct: 0,
      explanation: "Radically pivoting without warning highlights unpredictable, erratic shifts. 'Mercurial' means volatile and unpredictably changeable."
    }
  },
  {
    id: 24,
    word: "Proliferate",
    pos: "verb",
    ipa: "/prəˈlɪf.ər.eɪt/",
    category: "Science & Research",
    difficulty: "Essential",
    definition: "To increase rapidly in numbers; to multiply, spread, or reproduce quickly.",
    turkishMeaning: "Hızla çoğalmak, üremek, mantar gibi türemek, yayılmak",
    turkishNuance: "Biyolojide hücrelerin bölünerek çoğalması (cell proliferation) için kullanılırken, sosyal bilimlerde akıllı telefonların, bilgi kirliliğinin veya yeni teknolojilerin aniden yayılması için kullanılır.",
    exampleSentence: "With the deregulation of the telecommunications industry, independent broadcast networks began to proliferate across the country.",
    satDomain: "Social Science / Media History",
    sat2026HowTested: "'Rapid multiplication', 'mushrooming', 'exponential growth' bağlamlarında test edilir.",
    distractorTraps: [
      "Dwindle (Azalmak - zıt anlam)",
      "Procrastinate (Ertelemek)",
      "Proscribe (Yasaklamak)"
    ],
    synonyms: ["Multiply", "Burgeon", "Mushroom", "Escalate", "Expand"],
    antonyms: ["Dwindle", "Diminish", "Decline", "Contract"],
    tone: "Dynamic / Rapid Expansion",
    quiz: {
      passage: "As renewable manufacturing costs plummeted over the past decade, solar rooftop installations have continued to _______ throughout suburban residential zones.",
      options: ["proliferate", "wither", "recede", "concede"],
      correct: 0,
      explanation: "Plummeting costs caused installations to multiply and spread rapidly. 'Proliferate' means increase rapidly in numbers."
    }
  },
  {
    id: 25,
    word: "Catalyst",
    pos: "noun",
    ipa: "/ˈkæt.əl.ɪst/",
    category: "Science & Research",
    difficulty: "Essential",
    definition: "A substance that increases the rate of a chemical reaction without itself being consumed; metaphorically, a person or event that precipitates a change.",
    turkishMeaning: "Katalizör, tetikleyici unsur, değişimi hızlandıran etken",
    turkishNuance: "Kimyadaki teknik anlamının yanında, SAT Tarih ve Edebiyat metinlerinde toplumsal bir devrimi ya da reformu ateşleyen kıvılcım/olay anlamında mecazi olarak çok sık kullanılır.",
    exampleSentence: "The publication of Thomas Paine’s 'Common Sense' acted as a powerful catalyst for the American colonies' decisive break with Great Britain.",
    satDomain: "History / Political Philosophy",
    sat2026HowTested: "'Trigger', 'spark', 'precipitating event' kelimelerinin yüksek tescilli akademik karşılığı olarak test edilir.",
    distractorTraps: [
      "Impediment (Engel - zıt anlam)",
      "Cataclysm (Büyük felaket - ses benzerliği)",
      "Catharsis (Duygusal arınma)"
    ],
    synonyms: ["Stimulus", "Trigger", "Impetus", "Spark", "Incentive"],
    antonyms: ["Inhibitor", "Impediment", "Deterrent", "Obstacle"],
    tone: "Dynamic / Transformative / Academic",
    quiz: {
      passage: "The sudden collapse of the major regional lender served as the primary _______ that transformed a localized real estate downturn into an international banking crisis.",
      options: ["catalyst", "impediment", "anachronism", "dichotomy"],
      correct: 0,
      explanation: "The bank collapse triggered and accelerated the broader crisis. 'Catalyst' means a factor that precipitates or speeds up major change."
    }
  },
  {
    id: 26,
    word: "Rudimentary",
    pos: "adjective",
    ipa: "/ˌruː.dɪˈmen.tər.i/",
    category: "Science & Research",
    difficulty: "Essential",
    definition: "Involving or limited to basic, elementary principles; primitive or undeveloped.",
    turkishMeaning: "Temel, ilkel, başlangıç düzeyinde, tam gelişmemiş",
    turkishNuance: "Arkeolojide ilkel aletler (rudimentary stone tools) veya erken dönem bilimsel yöntemlerin yetersizliğini anlatırken karşımıza çıkar.",
    exampleSentence: "Compared to modern fiber-optic sensors, the seismic monitors deployed in the 1920s were exceptionally rudimentary.",
    satDomain: "Science / Geophysics",
    sat2026HowTested: "'Primitive', 'basic', 'unsophisticated' zıtlıklarında 'advanced' veya 'intricate' karşıtı olarak sorulur.",
    distractorTraps: [
      "Sophisticated (Gelişmiş - zıt anlam)",
      "Ruddy (Kızıl/al yanaklı - ses benzerliği)",
      "Elaborate (Ayrıntılı)"
    ],
    synonyms: ["Basic", "Elementary", "Primitive", "Vestigial", "Embryonic"],
    antonyms: ["Advanced", "Sophisticated", "Complex", "Developed"],
    tone: "Descriptive / Comparative / Basic",
    quiz: {
      passage: "Early aviators navigated using only _______ celestial charts and handheld compasses, lacking the satellite-guided precision of contemporary aviation.",
      options: ["rudimentary", "scrupulous", "prodigious", "stringent"],
      correct: 0,
      explanation: "Handheld tools without satellites represent elementary, primitive navigation. 'Rudimentary' means basic or primitive."
    }
  },
  {
    id: 27,
    word: "Negligible",
    pos: "adjective",
    ipa: "/ˈneɡ.lɪ.dʒə.bəl/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "So small, insignificant, or unimportant as to be not worth considering; trifling.",
    turkishMeaning: "İhmal edilebilir, önemsiz derecede az, yok sayılabilir",
    turkishNuance: "'Neglect' (ihmal etmek) fiilinden gelir. Fen deneylerinde bir değişkenin sonucu etkilemeyecek kadar önemsiz olduğu durumlarda 'negligible margin of error' denir.",
    exampleSentence: "Researchers concluded that the ambient room noise had a negligible effect on the high-precision laser spectroscopy measurements.",
    satDomain: "Science / Physics",
    sat2026HowTested: "'Insignificant', 'trivial', 'minor impact' ipuçlarıyla test edilir; 'substantial' veya 'profound' kelimeleriyle zıtlık oluşturur.",
    distractorTraps: [
      "Negligent (İhmalkar - kişi için kullanılır, miktar için değil)",
      "Substantial (Kayda değer - zıt anlam)",
      "Audible (Duyulabilir)"
    ],
    synonyms: ["Insignificant", "Trifling", "Inconsequential", "Minor", "Trivial"],
    antonyms: ["Significant", "Substantial", "Considerable", "Vital", "Crucial"],
    tone: "Quantitative / Analytical / Dismissive",
    quiz: {
      passage: "Although critics feared that adding a lightweight aerodynamic spoiler would drastically increase fuel consumption, wind-tunnel trials proved the drag difference was entirely _______.",
      options: ["negligible", "precipitous", "prodigious", "austere"],
      correct: 0,
      explanation: "The passage notes fears were unfounded because the difference was so small it could be ignored. 'Negligible' means so small as to be insignificant."
    }
  },
  {
    id: 28,
    word: "Intricate",
    pos: "adjective",
    ipa: "/ˈɪn.trɪ.kət/",
    category: "Complexity & Nuance",
    difficulty: "Essential",
    definition: "Very complicated or detailed; having many interconnected parts or facets.",
    turkishMeaning: "Karmaşık, girift, ince detaylı, incelikli",
    turkishNuance: "Kaotik bir karmaşa (mess) değil, saat mekanizması veya DNA sarmalı gibi 'birbiriyle örülmüş ince detaylardan oluşan' pozitif veya tarafsız bir karmaşıklıktır.",
    exampleSentence: "The master weaver spent months executing the intricate geometric patterns that adorned the ceremonial silk tapestry.",
    satDomain: "Arts / Textile History",
    sat2026HowTested: "'Complex interwoven design', 'elaborate mechanism' bağlamlarında 'rudimentary' ya da 'simple' karşıtı olarak sorulur.",
    distractorTraps: [
      "Intriguing (İlgi çekici - ses benzerliği)",
      "Rudimentary (İlkel - zıt anlam)",
      "Straightforward (Basit)"
    ],
    synonyms: ["Complex", "Elaborate", "Convoluted", "Sophisticated", "Tangled"],
    antonyms: ["Simple", "Straightforward", "Uncomplicated", "Rudimentary"],
    tone: "Descriptive / Appreciative / Detailed",
    quiz: {
      passage: "Neuroscientists are only beginning to map the _______ neural pathways that coordinate human speech production across dozens of muscular and cognitive subsystems.",
      options: ["intricate", "superfluous", "candid", "negligible"],
      correct: 0,
      explanation: "The neural pathways involve numerous interconnected subsystems, indicating high complexity. 'Intricate' means very detailed and complicated."
    }
  },
  {
    id: 29,
    word: "Convoluted",
    pos: "adjective",
    ipa: "/ˈkɒn.və.luː.tɪd/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "Extremely complex, intricate, and difficult to follow or understand; twisted.",
    turkishMeaning: "Çapraşık, arap saçına dönmüş, gereksiz karmaşık, dolambaçlı",
    turkishNuance: "'Intricate' nötr/olumlu iken, 'convoluted' genellikle OLUMSUZ bir karmaşıklığı ifade eder (anlaşılması lüzumsuz derecede zor bürokrasi, kafa karıştırıcı argümanlar vb.).",
    exampleSentence: "The statutory tax code had become so convoluted that even certified accountants struggled to interpret its overlapping exemptions.",
    satDomain: "Social Science / Public Policy",
    sat2026HowTested: "'Difficult to comprehend', 'needlessly complicated argument' bağlamlarında eleştirel tonda sorulur.",
    distractorTraps: [
      "Lucid (Berrak/anlaşılır - tam zıt anlam)",
      "Convulsive (Nöbet gibi sarsıcı - ses benzerliği)",
      "Succinct (Öz ve kısa)"
    ],
    synonyms: ["Tortuous", "Labyrinthine", "Byzantine", "Tangled", "Involved"],
    antonyms: ["Lucid", "Straightforward", "Simple", "Direct", "Succinct"],
    tone: "Critical / Negative / Frustrated",
    quiz: {
      passage: "The philosopher’s writing was burdened by sentences that were so _______ that students had to reread individual paragraphs four times to extract the basic premise.",
      options: ["convoluted", "succinct", "pragmatic", "didactic"],
      correct: 0,
      explanation: "Needing to reread multiple times to find the basic premise highlights excessively complicated, twisted writing. 'Convoluted' means complex and difficult to follow."
    }
  },
  {
    id: 30,
    word: "Arcane",
    pos: "adjective",
    ipa: "/ɑːˈkeɪn/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "Understood by few; mysterious, secret, or obscure.",
    turkishMeaning: "Gizemli, sır dolu, sadece az kişinin bildiği, anlaşılması güç",
    turkishNuance: "Sadece o konunun uzmanlarının veya kadim metinleri okuyanların bildiği ezoterik bilgiler için kullanılır (esoteric knowledge).",
    exampleSentence: "To the casual observer, the alchemical manuscript appeared filled with arcane symbols and impenetrable mythological metaphors.",
    satDomain: "History / Medieval Scholarship",
    sat2026HowTested: "'Understood only by a select few', 'obscure knowledge' ipuçlarıyla eşleştirilir.",
    distractorTraps: [
      "Archaic (Eski/çağdışı - çok sık karıştırılan tuzak)",
      "Lucid (Herkesin anladığı - zıt anlam)",
      "Ubiquitous (Herkesin bildiği/yaygın)"
    ],
    synonyms: ["Esoteric", "Recondite", "Obscure", "Mysterious", "Cabbalistic"],
    antonyms: ["Well-known", "Commonplace", "Lucid", "Exoteric", "Accessible"],
    tone: "Mysterious / Academic / Elite",
    quiz: {
      passage: "Deciphering the ancient Minoan Linear A script remains a challenge because it relies on an _______ linguistic system with no known surviving deciphering key.",
      options: ["arcane", "ubiquitous", "egalitarian", "austere"],
      correct: 0,
      explanation: "A script that nobody can decipher because its rules are obscure and unknown to the modern world is 'arcane' (mysterious and understood by few)."
    }
  },
  {
    id: 31,
    word: "Obfuscate",
    pos: "verb",
    ipa: "/ˈɒb.fʌs.keɪt/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "To deliberately make something obscure, unclear, unintelligible, or difficult to understand.",
    turkishMeaning: "Kasten kafa karıştırmak, muğlaklaştırmak, örtbas etmek, anlaşılmaz kılmak",
    turkishNuance: "'Lucid' ve 'clarify' kelimelerinin tam zıddıdır. Politikacıların veya şirketlerin skandalları gizlemek için teknik jargonla gerçeği bulandırması durumunda DSAT'de karşımıza çıkar.",
    exampleSentence: "Critics argued that the corporation released hundreds of pages of irrelevant raw data solely to obfuscate their environmental liabilities.",
    satDomain: "Social Science / Corporate Law",
    sat2026HowTested: "'Clarify' zıddı olarak veya gerçeği örtbas etme amacıyla yapılan dil oyunlarını nitelemek için sorulur.",
    distractorTraps: [
      "Elucidate (Aydınlatmak - zıt anlam)",
      "Obliterate (Yok etmek - ses benzerliği)",
      "Substantiate (Kanıtlamak)"
    ],
    synonyms: ["Cloud", "Confuse", "Muddy", "Conceal", "Buddle"],
    antonyms: ["Clarify", "Elucidate", "Illuminate", "Explain", "Simplify"],
    tone: "Critical / Accusatory / Deceptive",
    quiz: {
      passage: "Rather than answering the journalist’s direct question about safety violations, the spokesperson deployed dense bureaucratic jargon to _______ the agency’s mistakes.",
      options: ["obfuscate", "elucidate", "bolster", "ameliorate"],
      correct: 0,
      explanation: "The spokesperson used jargon to cloud and conceal mistakes instead of answering clearly. 'Obfuscate' means deliberately make unclear or obscure."
    }
  },
  {
    id: 32,
    word: "Elusive",
    pos: "adjective",
    ipa: "/ɪˈluː.sɪv/",
    category: "Complexity & Nuance",
    difficulty: "Essential",
    definition: "Difficult to find, catch, achieve, define, or recall.",
    turkishMeaning: "Ele avuca sığmaz, yakalanması/tanımlanması zor, anlaşılması güç",
    turkishNuance: "Fiziksel olarak kaçan bir hayvandan (elusive snow leopard) soyut bir hedefe (elusive mathematical proof) kadar her türlü 'yakalaması zor' şeyi niteler.",
    exampleSentence: "Despite decades of intensive genetic sequencing, a definitive cure for the autoimmune disorder remained frustratingly elusive.",
    satDomain: "Science / Immunology",
    sat2026HowTested: "'Difficult to capture or pin down' durumlarında 'accessible' veya 'straightforward' karşıtı olarak çıkar.",
    distractorTraps: [
      "Allusive (İmalı/gönderme yapan - ses benzerliği tuzağı)",
      "Illusive (Yanıltıcı/hayali - kök tuzağı)",
      "Tangible (Somut/tutulabilir - zıt anlam)"
    ],
    synonyms: ["Evasive", "Fugitive", "Intangible", "Indefinable", "Slippery"],
    antonyms: ["Attainable", "Tangible", "Accessible", "Definite", "Clear"],
    tone: "Challenging / Frustrating / Abstract",
    quiz: {
      passage: "A unified equation reconciling general relativity and quantum mechanics has proven _______, continuing to evade the most brilliant theoretical physicists.",
      options: ["elusive", "ubiquitous", "didactic", "superfluous"],
      correct: 0,
      explanation: "The equation 'continues to evade' physicists and has been impossible to pin down. 'Elusive' means difficult to achieve or define."
    }
  },
  {
    id: 33,
    word: "Nuanced",
    pos: "adjective",
    ipa: "/ˈnjuː.ɑːnst/",
    category: "Complexity & Nuance",
    difficulty: "Essential",
    definition: "Characterized by subtle distinctions, shades of meaning, or complex variations.",
    turkishMeaning: "Nüanslı, ince ayrıntılara sahip, tek boyutlu olmayan, derinlikli",
    turkishNuance: "Siyah-beyaz, yüzeysel (simplistic / black-and-white) değerlendirmelerin zıddıdır. Akademik çalışmalarda bir konunun karmaşıklığını ve çok katmanlılığını övmek için kullanılır.",
    exampleSentence: "The sociologist provided a nuanced analysis of immigration patterns, rejecting crude economic stereotypes in favor of local community dynamics.",
    satDomain: "Social Studies / Sociology",
    sat2026HowTested: "'Simplistic' veya 'superficial' kelimelerinin zıddı olarak akademik kalitenin göstergesi sıfatı olarak test edilir.",
    distractorTraps: [
      "Superficial (Yüzeysel - zıt anlam)",
      "Nuisance (Sıkıntı/baş belası - kök tuzağı)",
      "Binary (İkili/basit)"
    ],
    synonyms: ["Subtle", "Refined", "Graded", "Multi-faceted", "Sophisticated"],
    antonyms: ["Simplistic", "Crude", "Superficial", "Monolithic", "Blunt"],
    tone: "Praiseworthy / Academic / Sophisticated",
    quiz: {
      passage: "Instead of blaming the historical treaty's failure entirely on one nation, the professor offered a _______ interpretation that accounted for complex economic pressures on all signatories.",
      options: ["nuanced", "rudimentary", "specious", "pedantic"],
      correct: 0,
      explanation: "The interpretation accounted for multiple subtle, complex factors rather than simple single blame. 'Nuanced' means characterized by subtle distinctions and depth."
    }
  },
  {
    id: 34,
    word: "Paradox",
    pos: "noun",
    ipa: "/ˈpær.ə.dɒks/",
    category: "Complexity & Nuance",
    difficulty: "Essential",
    definition: "A seemingly absurd or self-contradictory statement or proposition that, when investigated, may prove to be well-founded or true.",
    turkishMeaning: "Paradoks, görünüşte çelişkili ama gerçekte doğru durum, tezattaki mantık",
    turkishNuance: "Görünüşte imkansız veya çelişkili gibi duran ama altında derin bir bilimsel/felsefi gerçek barındıran durumlar (örn: Fermi Paradox, Twin Paradox) için kullanılır.",
    exampleSentence: "The paradox of modern hyper-connectivity is that while people can message anyone instantly, surveys report unprecedented levels of loneliness.",
    satDomain: "Social Science / Cultural Critique",
    sat2026HowTested: "'Contradictory yet true phenomenon' kalıbında kilit isim olarak sorulur.",
    distractorTraps: [
      "Paragon (Mükemmellik örneği - ses benzerliği)",
      "Parody (Alaycı taklit)",
      "Consistency (Tutarlılık - zıt anlam)"
    ],
    synonyms: ["Contradiction", "Incongruity", "Enigma", "Anomaly", "Oxymoron"],
    antonyms: ["Normality", "Consistency", "Axiom", "Predictability"],
    tone: "Analytical / Philosophical / Puzzling",
    quiz: {
      passage: "Economists study the 'Easterlin _______,' which reveals that despite sustained long-term rises in national GDP per capita, average self-reported happiness levels have remained flat.",
      options: ["paradox", "catalyst", "dogma", "panacea"],
      correct: 0,
      explanation: "Wealth rising while happiness stays flat is a seemingly contradictory situation that holds true upon study. 'Paradox' denotes this counterintuitive contradiction."
    }
  },
  {
    id: 35,
    word: "Dichotomy",
    pos: "noun",
    ipa: "/daɪˈkɒt.ə.mi/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "A division or contrast between two things that are represented as being entirely opposed or distinct.",
    turkishMeaning: "İkilik, iki zıt kutba bölünme, karşıt ikilem",
    turkishNuance: "Doğa ve yetiştirilme (Nature vs. Nurture) veya Sanat vs. Bilim gibi iki zıt kategoriye ayırma durumunu ifade eder. SAT'de 'false dichotomy' (sahte ikilik) kalıbı sık geçer.",
    exampleSentence: "Contemporary philosophers challenge the rigid dichotomy between mind and body, arguing that cognitive processes are thoroughly embodied.",
    satDomain: "Philosophy / Cognitive Science",
    sat2026HowTested: "İki zıt fikir arasındaki keskin ayrımı yıkmak veya tanımlamak için sorulur.",
    distractorTraps: [
      "Monotony (Monotonluk/tekdüzelik - ses tuzağı)",
      "Continuum (Süreklilik/kesintisiz bütünlük - zıt anlam)",
      "Hierarchy (Hiyerarşi)"
    ],
    synonyms: ["Division", "Split", "Polarity", "Dualism", "Separation"],
    antonyms: ["Continuum", "Unity", "Synthesis", "Harmony"],
    tone: "Philosophical / Structural / Analytical",
    quiz: {
      passage: "The literary critic argued that the traditional _______ between 'high art' and 'popular entertainment' has dissolved as graphic novels enter prestigious university curricula.",
      options: ["dichotomy", "catalyst", "paradigm", "plethora"],
      correct: 0,
      explanation: "The passage discusses the division/contrast between two opposing categories dissolving. 'Dichotomy' means a sharp division between two opposing things."
    }
  },
  {
    id: 36,
    word: "Enigmatic",
    pos: "adjective",
    ipa: "/ˌen.ɪɡˈmæt.ɪk/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "Difficult to interpret or understand; mysterious, puzzling.",
    turkishMeaning: "Gizemli, muammalı, bilmece gibi, çözülmesi zor",
    turkishNuance: "Mona Lisa'nın gülüşü veya karanlık madde gibi insanı meraklandıran ama bir türlü tam çözülemeyen gizemler için kullanılır.",
    exampleSentence: "The recluse artist left behind only an enigmatic final painting that bore no signature, date, or explanatory title.",
    satDomain: "Arts / Visual Analysis",
    sat2026HowTested: "'Puzzling', 'inscrutable', 'mysterious' bağlamlarında 'obvious' veya 'transparent' karşıtı olarak sorulur.",
    distractorTraps: [
      "Dogmatic (Katı fikirli - ses benzerliği)",
      "Transparent (Şeffaf/net - zıt anlam)",
      "Empathic (Empatik)"
    ],
    synonyms: ["Mysterious", "Inscrutable", "Cryptic", "Perplexing", "Puzzling"],
    antonyms: ["Lucid", "Transparent", "Straightforward", "Obvious", "Explicable"],
    tone: "Mysterious / Intruiging / Puzzling",
    quiz: {
      passage: "The deep-sea submersible captured footage of an _______ organism with bioluminescent geometric markings that defied existing marine taxonomic categories.",
      options: ["enigmatic", "ubiquitous", "austere", "pragmatic"],
      correct: 0,
      explanation: "The organism baffled scientists and defied existing categories. 'Enigmatic' means mysterious and difficult to interpret."
    }
  },
  {
    id: 37,
    word: "Polarize",
    pos: "verb",
    ipa: "/ˈpəʊ.lə.raɪz/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "To divide or cause to divide into two sharply contrasting, hostile, or opposing groups or sets of opinions.",
    turkishMeaning: "Kutuplaştırmak, ayrıştırmak, zıt kamplara bölmek",
    turkishNuance: "Siyaset ve sosyal medya konularında toplumun orta yolu kaybedip uç noktalarda birbirine düşman hale gelmesini ifade eder.",
    exampleSentence: "The controversial zoning proposal threatened to polarize the quiet town into contentious factions of developers and conservationists.",
    satDomain: "Social Studies / Civic Governance",
    sat2026HowTested: "'Divide into hostile camps', 'deepen division' bağlamlarında 'unify' ya da 'harmonize' zıddı olarak sorulur.",
    distractorTraps: [
      "Coalesce (Birleşmek - tam zıt anlam)",
      "Pacify (Yatıştırmak)",
      "Proliferate (Çoğalmak)"
    ],
    synonyms: ["Divide", "Splinter", "Separate", "Alienate", "Fracture"],
    antonyms: ["Unify", "Coalesce", "Harmonize", "Reconcile"],
    tone: "Sociological / Divisive / Critical",
    quiz: {
      passage: "Debates over artificial intelligence regulation have begun to _______ lawmakers, splitting them into strict prohibitionists and libertarian deregulation advocates.",
      options: ["polarize", "reconcile", "substantiate", "ameliorate"],
      correct: 0,
      explanation: "The debate is splitting people into two sharply opposing camps. 'Polarize' means divide into contrasting factions."
    }
  },
  {
    id: 38,
    word: "Hegemony",
    pos: "noun",
    ipa: "/hɪˈɡem.ə.ni/",
    category: "Power & Society",
    difficulty: "Hard",
    definition: "Leadership, dominance, or predominant influence exercised by one nation, group, or class over others.",
    turkishMeaning: "Hegemonya, baskın güç, siyasi/kültürel üstünlük",
    turkishNuance: "Sadece askeri işgal değil, ekonomik, kültürel veya dilsel üstünlük (cultural hegemony) kurma durumlarını da kapsar.",
    exampleSentence: "During the fifth century BCE, Athens established naval hegemony across the Aegean Sea through the confederation of the Delian League.",
    satDomain: "History / Ancient Civilizations",
    sat2026HowTested: "Tarih metinlerinde bir imparatorluğun veya sınıfın tartışmasız liderliğini anlatırken sorulur.",
    distractorTraps: [
      "Autonomy (Bağımsızlık/özerklik - tam zıt dinamik)",
      "Harmony (Uyum)",
      "Anarchy (Başıboşluk/düzen yokluğu)"
    ],
    synonyms: ["Dominance", "Supremacy", "Ascendancy", "Mastery", "Sovereignty"],
    antonyms: ["Subjugation", "Subordination", "Autonomy", "Powerlessness"],
    tone: "Geopolitical / Academic / Dominant",
    quiz: {
      passage: "For centuries, the British merchant fleet maintained maritime _______ over major oceanic trade passages, dictating global shipping tariffs.",
      options: ["hegemony", "dissonance", "dearth", "anachronism"],
      correct: 0,
      explanation: "The fleet held total dominance and leadership over shipping lanes. 'Hegemony' means dominance or supreme leadership."
    }
  },
  {
    id: 39,
    word: "Egalitarian",
    pos: "adjective",
    ipa: "/ɪˌɡæl.ɪˈteə.ri.ən/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "Believing in or based on the principle that all people are equal and deserve equal rights and opportunities.",
    turkishMeaning: "Eşitlikçi, hak eşitliğini savunan",
    turkishNuance: "Hiyerarşik (hierarchical) veya aristokratik düzenlerin zıddıdır. Herkesin eşit söz hakkına sahip olduğu toplumsal modeller için kullanılır.",
    exampleSentence: "Hunter-gatherer bands typically exhibited more egalitarian social structures than the strictly stratified agrarian empires that succeeded them.",
    satDomain: "Anthropology / Social History",
    sat2026HowTested: "'Stratified' (katmanlı) veya 'hierarchical' ile zıtlık oluşturularak test edilir.",
    distractorTraps: [
      "Authoritarian (Otoriter - zıt anlam)",
      "Elitist (Seçkinci - zıt anlam)",
      "Agrarian (Tarımsal - bağlam tuzağı)"
    ],
    synonyms: ["Democratic", "Equal", "Equitable", "Leveling", "Unbiased"],
    antonyms: ["Elitist", "Hierarchical", "Stratified", "Authoritarian"],
    tone: "Positive / Social / Idealistic",
    quiz: {
      passage: "Early kibbutz settlements in the twentieth century were founded on _______ ideals, mandating equal compensation and communal property sharing among all members.",
      options: ["egalitarian", "pedantic", "acerbic", "austere"],
      correct: 0,
      explanation: "Mandating equal rights, pay, and sharing reflects a belief in total human equality. 'Egalitarian' means believing in fundamental equality."
    }
  },
  {
    id: 40,
    word: "Disenfranchise",
    pos: "verb",
    ipa: "/ˌdɪs.ɪnˈfræn.tʃaɪz/",
    category: "Power & Society",
    difficulty: "Hard",
    definition: "To deprive someone of a legal right, privilege, or immunity, especially the right to vote; to marginalize.",
    turkishMeaning: "Haklarından mahrum etmek, özellikle oy hakkını elinden almak, ötekileştirmek",
    turkishNuance: "SAT Tarih ve Yurttaşlık (Civics) pasajlarında kadınların veya azınlıkların oy hakkından mahrum bırakılması bağlamında en önemli terimlerden biridir.",
    exampleSentence: "Discriminatory poll taxes and literacy tests were historically weaponized in the American South to disenfranchise African American voters.",
    satDomain: "History / Civil Rights",
    sat2026HowTested: "Hakların kısıtlanması veya oy sandığından uzaklaştırılma metinlerinde kilit eylem olarak sorulur.",
    distractorTraps: [
      "Enfranchise (Oy hakkı vermek - tam zıt anlam)",
      "Franchise (Bayilik vermek)",
      "Emancipate (Özgürleştirmek)"
    ],
    synonyms: ["Deprive", "Disempower", "Marginalize", "Disable", "Exclude"],
    antonyms: ["Enfranchise", "Empower", "Liberate", "Include"],
    tone: "Legal / Critical / Injustice-focused",
    quiz: {
      passage: "Strict newly enacted documentation regulations threatened to _______ low-income and rural citizens who lacked access to state government registries.",
      options: ["disenfranchise", "bolster", "ameliorate", "reconcile"],
      correct: 0,
      explanation: "The regulations deprived vulnerable citizens of their legal voting rights. 'Disenfranchise' means to deprive of legal rights or the franchise."
    }
  },
  {
    id: 41,
    word: "Mitigate",
    pos: "verb",
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "To make something bad, severe, painful, or harmful less intense, serious, or damaging.",
    turkishMeaning: "Hafifletmek, etkisini azaltmak, yatıştırmak",
    turkishNuance: "'Ameliorate' (iyileştirmek) ile kardeştir; ancak 'mitigate' özellikle bir tehlikenin veya zararın (risk, damage, disaster) şiddetini düşürmek için kullanılır. 'Exacerbate' (kötüleştirmek) kelimesinin zıddıdır.",
    exampleSentence: "Urban planners incorporated green roofs and permeable pavements to mitigate the destructive impact of flash flooding.",
    satDomain: "Environmental Science / Urban Planning",
    sat2026HowTested: "'Exacerbate' kelimesinin tam tersi olarak 'lessen severity of problem' durumlarında test edilir.",
    distractorTraps: [
      "Exacerbate (Kötüleştirmek - zıt anlam)",
      "Militate (Aleyhte rol oynamak - ses benzerliği tuzağı)",
      "Instigate (Kışkırtmak)"
    ],
    synonyms: ["Alleviate", "Lessen", "Attenuate", "Diminish", "Palliate"],
    antonyms: ["Exacerbate", "Aggravate", "Intensify", "Worsen"],
    tone: "Problem-solving / Constructive / Positive",
    quiz: {
      passage: "Engineers added specialized shock-absorbing dampers beneath the bridge's suspension cables to _______ the destructive vibrations induced by hurricane-force winds.",
      options: ["mitigate", "exacerbate", "postulate", "obfuscate"],
      correct: 0,
      explanation: "Dampers are installed to lessen the severity or damage of dangerous vibrations. 'Mitigate' means make less severe or damaging."
    }
  },
  {
    id: 42,
    word: "Autonomy",
    pos: "noun",
    ipa: "/ɔːˈtɒn.ə.mi/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "The right or condition of self-government; freedom from external control or influence; independence.",
    turkishMeaning: "Özerklik, kendi kendini yönetme, bağımsızlık, otonomi",
    turkishNuance: "Siyasi bir bölgenin bağımsızlığı için kullanılabileceği gibi, bireylerin kendi kararlarını alma özgürlüğü (individual autonomy) için de sıkça geçer.",
    exampleSentence: "Following years of civil protests, the province was finally granted fiscal autonomy from the central imperial administration.",
    satDomain: "History / Political Science",
    sat2026HowTested: "'Subjugation' veya 'centralized control' zıddı olarak bağımsızlık bağlamında sorulur.",
    distractorTraps: [
      "Automaton (Robot/otomat - ses tuzağı)",
      "Anatomy (Anatomi)",
      "Subjugation (Boyun eğme - zıt anlam)"
    ],
    synonyms: ["Independence", "Self-determination", "Sovereignty", "Freedom", "Liberty"],
    antonyms: ["Dependency", "Subjugation", "Servitude", "Subordination"],
    tone: "Political / Empowering / Positive",
    quiz: {
      passage: "Many remote workers value flexible schedules primarily because it grants them greater personal _______ over their daily working rhythms.",
      options: ["autonomy", "dissonance", "hegemony", "surfeit"],
      correct: 0,
      explanation: "Flexible schedules grant workers self-direction and independence. 'Autonomy' means independence and freedom from external control."
    }
  },
  {
    id: 43,
    word: "Subvert",
    pos: "verb",
    ipa: "/səbˈvɜːt/",
    category: "Power & Society",
    difficulty: "Hard",
    definition: "To undermine the power, authority, or principles of an established system, institution, or convention.",
    turkishMeaning: "Düzeni sarsmak, altını oymak, gelenekleri/otoriteyi yıkıcı şekilde dönüştürmek",
    turkishNuance: "Edebiyatta ve sanatta yerleşik kalıpları yıkıp tersyüz etmek (subvert expectations/tropes) veya siyasette rejimi gizlice sarsmak anlamında kullanılır.",
    exampleSentence: "The modernist playwright deliberately subverted traditional narrative conventions by revealing the play's climax in the opening scene.",
    satDomain: "Literature / Drama Criticism",
    sat2026HowTested: "'Challenge established norms', 'undermine authority' kalıplarında aranır.",
    distractorTraps: [
      "Substantiate (Kanıtlamak - zıt/farklı anlam)",
      "Submerge (Suya batırmak)",
      "Uphold (Desteklemek - zıt anlam)"
    ],
    synonyms: ["Undermine", "Destabilize", "Overturn", "Sabotage", "Subvert"],
    antonyms: ["Bolster", "Uphold", "Reinforce", "Support"],
    tone: "Disruptive / Rebellious / Critical",
    quiz: {
      passage: "By casting an ordinary peasant as the heroic philosopher and royalty as comic fools, the Renaissance satirist sought to _______ the rigid feudal hierarchy of his era.",
      options: ["subvert", "corroborate", "substantiate", "perpetuate"],
      correct: 0,
      explanation: "Flipping traditional status roles was an effort to undermine and destabilize the feudal hierarchy. 'Subvert' means undermine established authority or norms."
    }
  },
  {
    id: 44,
    word: "Arbitrary",
    pos: "adjective",
    ipa: "/ˈɑː.bɪ.trər.i/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "Based on random choice or personal whim rather than any reason, principle, or systematic logic; despotic.",
    turkishMeaning: "Keyfi, rastgele, gerekçesiz, kural tanımayan",
    turkishNuance: "Hukuk ve felsefede mantıklı bir kurala dayanmayan keyfi kararları (arbitrary rulings) veya bilimde rastgele belirlenmiş sınırları (arbitrary thresholds) niteler.",
    exampleSentence: "Critics argued that setting the grant eligibility cutoff at exactly forty years of age was entirely arbitrary and lacked empirical justification.",
    satDomain: "Social Science / Public Administration",
    sat2026HowTested: "'Systematic' veya 'principled' zıddı olarak mantıksız rastgelelik bağlamında sorulur.",
    distractorTraps: [
      "Arbitration (Hakemlik/arabuluculuk - kök tuzağı)",
      "Systematic (Sistematik - zıt anlam)",
      "Equitable (Adil)"
    ],
    synonyms: ["Capricious", "Random", "Whimsical", "Unreasoned", "Erratic"],
    antonyms: ["Rational", "Systematic", "Reasoned", "Methodical", "Principled"],
    tone: "Critical / Unjust / Illogical",
    quiz: {
      passage: "Citizens protested the governor's tariff decrees, arguing that tax increases should be grounded in economic data rather than _______ administrative whims.",
      options: ["arbitrary", "lucid", "exhaustive", "egalitarian"],
      correct: 0,
      explanation: "Contrasting reasoned economic data with random personal whims points directly to 'arbitrary' (unreasoned or based on whim)."
    }
  },
  {
    id: 45,
    word: "Coalesce",
    pos: "verb",
    ipa: "/kəʊ.əˈles/",
    category: "Power & Society",
    difficulty: "Hard",
    definition: "To come together to form one mass, whole, or unified group; to merge.",
    turkishMeaning: "Birleşmek, kaynaşmak, tek vücut olmak, kümelenip bütünleşmek",
    turkishNuance: "Ayrı ayrı duran küçük parçaların, fikirlerin veya grupların zamanla tek bir büyük harekete veya kütleye dönüşmesi (örn: droplets coalescing into a stream).",
    exampleSentence: "Disparate labor unions began to coalesce into a formidable national federation capable of negotiating industry-wide wage standards.",
    satDomain: "History / Labor Movement",
    sat2026HowTested: "'Polarize' veya 'splinter' kelimelerinin zıddı olarak birleşme bağlamında sorulur.",
    distractorTraps: [
      "Coerce (Zorlamak - ses tuzağı)",
      "Polarize (Ayrıştırmak - tam zıt anlam)",
      "Corrode (Aşınmak)"
    ],
    synonyms: ["Merge", "Unite", "Fuse", "Amalgamate", "Consolidate"],
    antonyms: ["Disperse", "Separate", "Splinter", "Fragment", "Polarize"],
    tone: "Unifying / Constructive / Dynamic",
    quiz: {
      passage: "Over months of debate, the scattered neighborhood activist groups finally began to _______ around a single legislative reform proposal.",
      options: ["coalesce", "polarize", "disenfranchise", "evaporate"],
      correct: 0,
      explanation: "Scattered groups came together to unite around a single proposal. 'Coalesce' means come together to form one whole."
    }
  },
  {
    id: 46,
    word: "Bolster",
    pos: "verb",
    ipa: "/ˈbəʊl.stər/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To support, strengthen, prop up, or reinforce.",
    turkishMeaning: "Güçlendirmek, desteklemek, takviye etmek",
    turkishNuance: "'Undermine' (baltalamak) kelimesinin bir numaralı zıddıdır. Bir argümanı yeni bir kanıtla güçlendirmek veya ekonomiyi yatırımlarla canlandırmak için kullanılır.",
    exampleSentence: "The defense team introduced newly uncovered surveillance footage to bolster their client’s alibi.",
    satDomain: "Legal Studies / Rhetoric",
    sat2026HowTested: "DSAT Reading'de 'Which finding, if true, would most bolster the author's claim?' soru köklerinde sıkça geçer.",
    distractorTraps: [
      "Undermine (Zayıflatmak - tam zıt anlam)",
      "Bluster (Kuru gürültü yapmak - ses tuzağı)",
      "Balk (Tereddüt edip durmak)"
    ],
    synonyms: ["Reinforce", "Strengthen", "Fortify", "Support", "Prop up"],
    antonyms: ["Undermine", "Weaken", "Subvert", "Compromise"],
    tone: "Constructive / Supportive / Positive",
    quiz: {
      passage: "To _______ public confidence in the banking system after the panic, the federal government insured customer deposits up to statutory thresholds.",
      options: ["bolster", "undermine", "obfuscate", "impede"],
      correct: 0,
      explanation: "The government insured deposits to strengthen and reinforce public confidence. 'Bolster' means support or strengthen."
    }
  },
  {
    id: 47,
    word: "Dissonance",
    pos: "noun",
    ipa: "/ˈdɪs.ə.nəns/",
    category: "Figurative & Literary",
    difficulty: "Hard",
    definition: "A lack of harmony or agreement between people, things, or musical notes; tension caused by conflicting elements.",
    turkishMeaning: "Uyumsuzluk, ahenksizlik, çelişki, çatışma",
    turkishNuance: "Hem müzikte kulak tırmalayan ses uyumsuzluğu hem de psikolojide inanç ile eylem arasındaki çatışma (cognitive dissonance) için kullanılır.",
    exampleSentence: "The film director created an eerie emotional dissonance by pairing cheerful carnival music with a visually terrifying suspense sequence.",
    satDomain: "Arts / Film Studies",
    sat2026HowTested: "'Harmony' veya 'congruity' zıddı olarak çelişen iki unsurun yarattığı gerilimi nitelemek için sorulur.",
    distractorTraps: [
      "Resonance (Yankılanma/uyum - ses tuzağı)",
      "Consonance (Ahenk - tam zıt anlam)",
      "Distance (Mesafe)"
    ],
    synonyms: ["Discord", "Incongruity", "Discrepancy", "Friction", "Strife"],
    antonyms: ["Harmony", "Consonance", "Accord", "Concord", "Agreement"],
    tone: "Tense / Conflicted / Artistic",
    quiz: {
      passage: "Psychologists define cognitive _______ as the acute mental discomfort experienced when an individual holds two mutually contradictory beliefs simultaneously.",
      options: ["dissonance", "catalyst", "paradigm", "autonomy"],
      correct: 0,
      explanation: "The mental friction or lack of harmony caused by contradictory beliefs is 'dissonance'."
    }
  },
  {
    id: 48,
    word: "Juxtaposition",
    pos: "noun",
    ipa: "/ˌdʒʌk.stə.pəˈzɪʃ.ən/",
    category: "Figurative & Literary",
    difficulty: "Hard",
    definition: "The fact of two things being seen or placed close together with contrasting effect.",
    turkishMeaning: "Yan yana koyma, tezat oluşturacak şekilde karşılaştırma",
    turkishNuance: "DSAT Edebiyat ve Sanat pasajlarında zengin bir köşkün hemen yanındaki gecekonduları göstermek veya neşeli bir sahnede ölümü anlatmak gibi tezat tekniklerinde kullanılır.",
    exampleSentence: "The photographer's exhibition relied on the stark juxtaposition of opulent skyscrapers rising immediately adjacent to crumbling tenement slums.",
    satDomain: "Arts / Photography Criticism",
    sat2026HowTested: "'Contrasting elements placed side by side' tanımıyla edebiyat veya sanat analizlerinde sorulur.",
    distractorTraps: [
      "Imposition (Yükleme/dayatma - ses tuzağı)",
      "Opposition (Doğrudan karşıtlık - yan yana koyma şartı yok)",
      "Composition (Bileşim)"
    ],
    synonyms: ["Comparison", "Contrast", "Collocation", "Proximity", "Pairing"],
    antonyms: ["Separation", "Isolation", "Remoteness"],
    tone: "Artistic / Analytical / Comparative",
    quiz: {
      passage: "The museum curator highlighted the artist’s striking _______ of antique oil portraits against hyper-modern neon light sculptures.",
      options: ["juxtaposition", "hegemony", "surfeit", "dearth"],
      correct: 0,
      explanation: "Placing antique paintings right next to modern neon sculptures to create a contrasting effect is 'juxtaposition'."
    }
  },
  {
    id: 49,
    word: "Nostalgic",
    pos: "adjective",
    ipa: "/nɒsˈtæl.dʒɪk/",
    category: "Figurative & Literary",
    difficulty: "Essential",
    definition: "Characterized by or exhibiting a sentimental longing or wistful affection for a period in the past.",
    turkishMeaning: "Nostaljik, geçmişe özlem duyan, eski günleri arayan",
    turkishNuance: "Edebiyat ve hatırat (memoir) metinlerinde yazarın çocukluk günlerini ya da kaybolmuş bir dönemi tatlı bir hüzünle anması durumudur.",
    exampleSentence: "The poet’s later verses grew deeply nostalgic, evoking the golden autumn harvests of her rural childhood in idyllic detail.",
    satDomain: "Literature / Poetry Analysis",
    sat2026HowTested: "DSAT Reading ton ve duygu sorularında 'sentimental longing for the past' ipucuyla sorulur.",
    distractorTraps: [
      "Nauseous (Mide bulandırıcı - ses tuzağı)",
      "Futuristic (Geleceğe dönük - zıt anlam)",
      "Acerbic (İğneleyici)"
    ],
    synonyms: ["Wistful", "Reminiscent", "Sentimental", "Homesick", "Longing"],
    antonyms: ["Forward-looking", "Modernist", "Unsentimental", "Cynical"],
    tone: "Sentimental / Emotional / Melancholy",
    quiz: {
      passage: "The novel’s narrator recalls his grandfather's bookstore with a warm, _______ fondness, describing the scent of aged leather bindings as a portal to an innocent bygone era.",
      options: ["nostalgic", "acerbic", "didactic", "dispassionate"],
      correct: 0,
      explanation: "Fondness and longing for a bygone past era is the definition of 'nostalgic'."
    }
  },
  {
    id: 50,
    word: "Visceral",
    pos: "adjective",
    ipa: "/ˈvɪs.ər.əl/",
    category: "Figurative & Literary",
    difficulty: "Hard",
    definition: "Relating to deep inward feelings rather than to the intellect; instinctive, gut-level, or intensely emotional.",
    turkishMeaning: "İçgüdüsel, derin hissi, akıldan ziyade karından/yürekten gelen, sarsıcı",
    turkishNuance: "Tıpta iç organlarla (viscera) ilgilidir; edebiyatta ve SAT'de ise mantıksal hesaplamalara değil, insanın ta en derinden hissettiği içgüdüsel tepkilere (visceral reaction) denir.",
    exampleSentence: "The harrowing documentary elicited a visceral reaction from audience members, many of whom gasped aloud during the catastrophic scenes.",
    satDomain: "Arts / Cinema Criticism",
    sat2026HowTested: "'Cerebral' (mantıksal/akli) kelimesinin zıddı olarak derin içgüdüsel duygu durumlarında sorulur.",
    distractorTraps: [
      "Cerebral (Akli/entelektüel - tam zıt anlam)",
      "Vicarious (Başkası üzerinden yaşayan - ses tuzağı)",
      "Virtuous (Erdemli)"
    ],
    synonyms: ["Instinctive", "Gut", "Intuitive", "Emotional", "Primordial"],
    antonyms: ["Cerebral", "Intellectual", "Logical", "Rational", "Calculated"],
    tone: "Intense / Emotional / Primal",
    quiz: {
      passage: "Rather than offering a detached, academic recounting of the battlefield, the soldier's journal captured the raw, _______ terror of trench warfare.",
      options: ["visceral", "pedantic", "didactic", "negligible"],
      correct: 0,
      explanation: "Contrasting detached academic recounting with raw, gut-level emotional terror indicates a 'visceral' experience."
    }
  },
  {
    id: 51,
    word: "Evocative",
    pos: "adjective",
    ipa: "/ɪˈvɒk.ə.tɪv/",
    category: "Figurative & Literary",
    difficulty: "Essential",
    definition: "Bringing strong images, memories, or feelings to mind; powerfully expressive.",
    turkishMeaning: "Çağrıştıran, his uyandıran, göz önüne getiren",
    turkishNuance: "'Evoke' (uyandırmak/canlandırmak) fiilinden gelir. Canlı betimlemelerle okuyucunun zihninde güçlü bir duygu veya hatıra uyandıran edebi üsluplar için kullanılır.",
    exampleSentence: "The composer’s evocative score used haunting woodwind solos to conjure the misty solitude of the Scottish highlands.",
    satDomain: "Arts / Musicology",
    sat2026HowTested: "'Vividly conjuring images or emotions' bağlamlarında 'uninspiring' karşıtı olarak sorulur.",
    distractorTraps: [
      "Equivocal (Muğlak - ses tuzağı)",
      "Provocative (Kışkırtıcı - farklı duygu)",
      "Inexpressive (Duygusuz)"
    ],
    synonyms: ["Expressive", "Resonant", "Suggestive", "Atmospheric", "Vivid"],
    antonyms: ["Uninspiring", "Bland", "Dull", "Inexpressive"],
    tone: "Rich / Atmospheric / Poetic",
    quiz: {
      passage: "The author's _______ prose style vividly transported readers to the bustling spice markets of fourteenth-century Cairo.",
      options: ["evocative", "arcane", "pedantic", "austere"],
      correct: 0,
      explanation: "Prose that vividly brings to mind and transports readers to a setting is 'evocative'."
    }
  },
  {
    id: 52,
    word: "Poignant",
    pos: "adjective",
    ipa: "/ˈpɔɪ.njənt/",
    category: "Figurative & Literary",
    difficulty: "Hard",
    definition: "Evoking a keen sense of sadness, regret, or sharp emotional tenderness; deeply moving.",
    turkishMeaning: "Yürek burkan, dokunaklı, acı veren ama derin hissettiren",
    turkishNuance: "Hafif bir kederle karışık dokunaklı durumları anlatır (örn: son bir vedalaşma sahnesi). 'g' harfi okunmaz ('poy-nyunt').",
    exampleSentence: "The film concluded with a poignant moment of silence as the elderly veteran saluted the monument of his fallen comrades.",
    satDomain: "Literature / Narrative Analysis",
    sat2026HowTested: "'Deeply moving and sorrowful' bağlamında edebiyat metinlerinde ton niteleyicisi olarak test edilir.",
    distractorTraps: [
      "Pungent (Keskin kokulu/acı - ses tuzağı)",
      "Pointed (İğneleyici/sivri)",
      "Indifferent (Duygusuz)"
    ],
    synonyms: ["Touching", "Heartbreaking", "Moving", "Affecting", "Pathetic"],
    antonyms: ["Cheerful", "Unaffecting", "Indifferent", "Joyful"],
    tone: "Melancholy / Touching / Emotional",
    quiz: {
      passage: "The memoir reaches its most _______ chapter when the author discovers a forgotten box of letters written by her grandmother on the eve of wartime exile.",
      options: ["poignant", "pragmatic", "specious", "didactic"],
      correct: 0,
      explanation: "Finding wartime exile letters creates a deeply touching, sad, and moving emotional scene ('poignant')."
    }
  },
  {
    id: 53,
    word: "Lucid",
    pos: "adjective",
    ipa: "/ˈluː.sɪd/",
    category: "Clarity & Precision",
    difficulty: "Essential",
    definition: "Expressed clearly; easy to understand; showing the ability to think clearly or rationally.",
    turkishMeaning: "Berrak, açık, kolay anlaşılır, net, aklı başında",
    turkishNuance: "'Obfuscate' ve 'convoluted' kelimelerinin panzehiridir. Karmaşık bir bilimsel konuyu herkesin anlayabileceği kadar net ve akıcı anlatan yazarlar için 'lucid style' denir.",
    exampleSentence: "Despite the staggering complexity of quantum electrodynamics, Feynman was celebrated for delivering lucid lectures accessible to undergraduates.",
    satDomain: "Science Education / Biography",
    sat2026HowTested: "'Clear and transparent explanation' bağlamında 'obscure' ve 'vague' zıddı olarak sorulur.",
    distractorTraps: [
      "Lucrative (Kârlı - kök tuzağı)",
      "Ludicrous (Gülünç/saçma)",
      "Lurid (Korkunç/sansasyonel)"
    ],
    synonyms: ["Clear", "Intelligible", "Coherent", "Transparent", "Articulate"],
    antonyms: ["Obscure", "Convoluted", "Confusing", "Vague", "Muddled"],
    tone: "Clear / Commendable / Rational",
    quiz: {
      passage: "Even jurors with no background in forensic chemistry could understand the expert witness’s _______ breakdown of the DNA sequence matching.",
      options: ["lucid", "convoluted", "arcane", "spurious"],
      correct: 0,
      explanation: "Non-experts being able to understand clearly indicates the explanation was 'lucid' (easy to understand and crystal clear)."
    }
  },
  {
    id: 54,
    word: "Succinct",
    pos: "adjective",
    ipa: "/səkˈsɪŋkt/",
    category: "Clarity & Precision",
    difficulty: "Essential",
    definition: "Briefly and clearly expressed; concise, using few words to state a point without unnecessary fluff.",
    turkishMeaning: "Öz, veciz, az ve öz, kestirme",
    turkishNuance: "DSAT Writing & Rhetorical Synthesis bölümlerinde 'conciseness' (gereksiz kelimelerden arınmışlık) kuralının sıfat karşılığıdır. 'Verbose' ve 'wordy' kelimelerinin zıddıdır.",
    exampleSentence: "The executive requested a succinct executive summary that fit onto a single page rather than a fifty-page preliminary report.",
    satDomain: "Business / Professional Writing",
    sat2026HowTested: "'Brief and direct communication' durumlarında 'verbose' ve 'rambling' zıddı olarak sorulur.",
    distractorTraps: [
      "Succulent (Sulu/lezzetli - ses tuzağı)",
      "Verbose (Çok laflı - tam zıt anlam)",
      "Superfluous (Gereksiz fazla)"
    ],
    synonyms: ["Concise", "Terse", "Pithy", "Laconic", "Compact"],
    antonyms: ["Verbose", "Wordy", "Prolix", "Rambling", "Long-winded"],
    tone: "Efficient / Direct / Professional",
    quiz: {
      passage: "The editor praised the journalist for submitting a _______ headline that summarized the entire multi-billion dollar merger in just five precise words.",
      options: ["succinct", "convoluted", "pedantic", "austere"],
      correct: 0,
      explanation: "Summarizing a complex event in just five clear words is being 'succinct' (concise and to the point)."
    }
  },
  {
    id: 55,
    word: "Meticulous",
    pos: "adjective",
    ipa: "/məˈtɪk.jə.ləs/",
    category: "Clarity & Precision",
    difficulty: "Essential",
    definition: "Showing great attention to detail; very careful and precise.",
    turkishMeaning: "Titiz, kılı kırk yaran, son derece özenli ve dikkatli",
    turkishNuance: "Bilimsel deneylerde hata yapmamak için her aşamayı santim santim kontrol eden araştırmacılar için en olumlu sıfattır. 'Pedantic' olumsuz iken 'meticulous' övgüdür.",
    exampleSentence: "Through meticulous cataloging of centuries-old church archives, the genealogist reconstructed the lineages of hundreds of immigrant families.",
    satDomain: "History / Archival Research",
    sat2026HowTested: "'Painstaking attention to detail' bağlamlarında 'careless' ve 'cursory' zıddı olarak test edilir.",
    distractorTraps: [
      "Careless (Dikkatsiz - zıt anlam)",
      "Meretricious (Gösterişli ama değersiz - ses tuzağı)",
      "Cursory (Baştan savma - zıt anlam)"
    ],
    synonyms: ["Painstaking", "Scrupulous", "Fastidious", "Thorough", "Methodical"],
    antonyms: ["Careless", "Cursory", "Sloppy", "Slapdash", "Negligent"],
    tone: "Praiseworthy / Rigorous / Diligent",
    quiz: {
      passage: "The conservator’s _______ restoration of the damaged fresco took three years, as she repaired the pigment millimeter by millimeter using micro-brushes.",
      options: ["meticulous", "ephemeral", "arbitrary", "spurious"],
      correct: 0,
      explanation: "Restoring millimeter by millimeter over three years shows extreme care and attention to detail ('meticulous')."
    }
  },
  {
    id: 56,
    word: "Scrupulous",
    pos: "adjective",
    ipa: "/ˈskruː.pjə.ləs/",
    category: "Clarity & Precision",
    difficulty: "Hard",
    definition: "Diligent, thorough, and extremely attentive to details; also, very concerned to avoid doing wrong; strictly honest.",
    turkishMeaning: "1. Kılı kırk yaran (titiz), 2. Vicdanlı, dürüst, ahlaken çok hassas",
    turkishNuance: "İki anlamı da SAT'de çıkar: Hem bir araştırmacının 'titiz' veri kaydetmesi (scrupulous record-keeping) hem de bir yargıcın 'dürüst/tarafsız' davranması.",
    exampleSentence: "The forensic auditor was celebrated for her scrupulous adherence to ethical guidelines and accounting accuracy.",
    satDomain: "Social Science / Business Ethics",
    sat2026HowTested: "Ahlaki dürüstlük veya bilimsel titizlik bağlamlarında sorulur.",
    distractorTraps: [
      "Unscrupulous (Vicdansız/ahlaksız - tam zıt anlam)",
      "Supercilious (Kibirli)",
      "Pedantic (Aşırı kuralcı/itici)"
    ],
    synonyms: ["Meticulous", "Honorable", "Conscientious", "Principled", "Exacting"],
    antonyms: ["Unscrupulous", "Careless", "Dishonest", "Sloppy", "Corrupt"],
    tone: "Ethical / Praiseworthy / Diligent",
    quiz: {
      passage: "The research laboratory maintained _______ standards of cleanliness, sterilizing every instrument three times before each surgical trial.",
      options: ["scrupulous", "dubious", "mercurial", "negligible"],
      correct: 0,
      explanation: "Sterilizing three times demonstrates rigorous and exact attention to protocol ('scrupulous')."
    }
  },
  {
    id: 57,
    word: "Plethora",
    pos: "noun",
    ipa: "/ˈpleθ.ər.ə/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "A large or excessive amount of something, often more than is needed.",
    turkishMeaning: "Aşırı bolluk, fazlalık, gereğinden çok miktar",
    turkishNuance: "'Dearth' (kıtlık) kelimesinin doğrudan zıddıdır. Seçenek veya veri bolluğundan dolayı karar vermenin zorlaştığı durumlarda sıkça kullanılır.",
    exampleSentence: "With a plethora of online streaming platforms competing for viewership, consumers faced an overwhelming abundance of content choices.",
    satDomain: "Economics / Media Studies",
    sat2026HowTested: "'Overabundance', 'excess' durumlarında 'scarcity' zıddı olarak isim boşluğunda sorulur.",
    distractorTraps: [
      "Dearth (Kıtlık - tam zıt anlam)",
      "Plebiscite (Halk oylaması - ses tuzağı)",
      "Deficiency (Eksiklik)"
    ],
    synonyms: ["Abundance", "Surfeit", "Excess", "Profusion", "Glut"],
    antonyms: ["Dearth", "Scarcity", "Shortage", "Deficiency", "Lack"],
    tone: "Quantitative / Overwhelming / Abundant",
    quiz: {
      passage: "Visitors to the technology expo were greeted by a _______ of prototype drones, autonomous vehicles, and wearable gadgets across every exhibition hall.",
      options: ["plethora", "dearth", "dissonance", "subversion"],
      correct: 0,
      explanation: "An overwhelming abundance and vast variety across every hall is a 'plethora'."
    }
  },
  {
    id: 58,
    word: "Dearth",
    pos: "noun",
    ipa: "/dɜːθ/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "A scarcity or lack of something; an inadequate supply.",
    turkishMeaning: "Kıtlık, yokluk, yetersizlik, azlık",
    turkishNuance: "'Plethora' ve 'surfeit' kelimelerinin tam zıddıdır. DSAT'de 'dearth of reliable data' (güvenilir veri kıtlığı) kalıbıyla defalarca çıkmıştır.",
    exampleSentence: "The archaeological investigation stalled due to a severe dearth of contemporary written records from the third century.",
    satDomain: "History / Historiography",
    sat2026HowTested: "'Scarcity', 'lack of evidence' bağlamlarında test edilir.",
    distractorTraps: [
      "Death (Ölüm - yazım benzerliği)",
      "Surfeit (Aşırı bolluk - zıt anlam)",
      "Wealth (Zenginlik - zıt anlam)"
    ],
    synonyms: ["Scarcity", "Shortage", "Paucity", "Lack", "Deficiency"],
    antonyms: ["Plethora", "Abundance", "Surfeit", "Profusion", "Glut"],
    tone: "Deficient / Critical / Insufficient",
    quiz: {
      passage: "Historians attempting to reconstruct everyday life in ancient Sparta struggle with a persistent _______ of primary source documents written by Spartans themselves.",
      options: ["dearth", "plethora", "juxtaposition", "hegemony"],
      correct: 0,
      explanation: "Struggling because few or no primary documents exist indicates a 'dearth' (scarcity or lack)."
    }
  },
  {
    id: 59,
    word: "Surfeit",
    pos: "noun",
    ipa: "/ˈsɜː.fɪt/",
    category: "Quantity & Intensity",
    difficulty: "Hard",
    definition: "An excessive amount of something, especially so much that one feels sickened or disgusted.",
    turkishMeaning: "Aşırılık, fazlalık, doymuşluk / bıkkınlık verecek kadar çok miktar",
    turkishNuance: "'Plethora' gibi bolluk bildirir ama 'surfeit' kelimesinde genellikle 'aşırılıktan dolayı gelen bıkkınlık/rahatsızlık' tonu bulunur.",
    exampleSentence: "After a holiday weekend characterized by a surfeit of rich desserts, guests welcomed simple broth and herbal tea.",
    satDomain: "Humanities / Cultural Reflection",
    sat2026HowTested: "'Excess to the point of satiation' durumlarında aranır.",
    distractorTraps: [
      "Forfeit (Kaybetmek/hakkından vazgeçmek - ses tuzağı)",
      "Dearth (Kıtlık - zıt anlam)",
      "Surreal (Gerçeküstü)"
    ],
    synonyms: ["Excess", "Glut", "Overabundance", "Superfluity", "Oversupply"],
    antonyms: ["Dearth", "Scarcity", "Lack", "Insufficiency"],
    tone: "Excessive / Overloaded / Heavy",
    quiz: {
      passage: "During the election week, viewers complained of a _______ of negative attack advertisements running back-to-back on every television station.",
      options: ["surfeit", "dearth", "paradigm", "anachronism"],
      correct: 0,
      explanation: "An overwhelming, excessive barrage of ads causing viewer fatigue is a 'surfeit'."
    }
  },
  {
    id: 60,
    word: "Exacerbate",
    pos: "verb",
    ipa: "/ɪɡˈzæs.ə.beɪt/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "To make a problem, bad situation, or negative feeling worse or more severe.",
    turkishMeaning: "Kötüleştirmek, alevlendirmek, yangına körükle gitmek, şiddetlendirmek",
    turkishNuance: "'Mitigate' ve 'ameliorate' kelimelerinin bir numaralı düşmanıdır! Zaten kötü olan bir durumu daha da berbat hale getirmek demektir.",
    exampleSentence: "Prolonged droughts exacerbated the region's existing agricultural crisis, driving thousands of smallholder farmers into bankruptcy.",
    satDomain: "Environmental Science / Economics",
    sat2026HowTested: "'Make problem worse', 'aggravate conditions' durumlarında aranır.",
    distractorTraps: [
      "Ameliorate (İyileştirmek - tam zıt anlam)",
      "Exasperate (Çileden çıkarmak - çok karıştırılan kelime tuzağı)",
      "Exculpate (Aklamak)"
    ],
    synonyms: ["Worsen", "Aggravate", "Inflame", "Intensify", "Compound"],
    antonyms: ["Ameliorate", "Mitigate", "Alleviate", "Soothe", "Relieve"],
    tone: "Negative / Deteriorating / Critical",
    quiz: {
      passage: "Adding new highway lanes often fails to reduce traffic congestion; in fact, urban studies demonstrate that induced demand can _______ gridlock during peak hours.",
      options: ["exacerbate", "ameliorate", "corroborate", "substantiate"],
      correct: 0,
      explanation: "The passage notes lanes fail to help and instead make traffic jams worse. 'Exacerbate' means worsen or make more severe."
    }
  },
  {
    id: 61,
    word: "Ameliorate",
    pos: "verb",
    ipa: "/əˈmiː.li.ə.reɪt/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "To make something that is bad, unpleasant, or unsatisfactory better; to improve.",
    turkishMeaning: "İyileştirmek, daha iyi duruma getirmek, ıslah etmek",
    turkishNuance: "'Exacerbate' kelimesinin doğrudan zıddıdır. Kötü çalışma koşullarını, hastalıkları veya yoksulluğu 'daha katlanılabilir ve iyi' hale getirmek için yapılan reformlarda kullanılır.",
    exampleSentence: "The municipal housing initiative aimed to ameliorate urban poverty by subsidizing rents for vulnerable low-income families.",
    satDomain: "Social Science / Public Policy",
    sat2026HowTested: "'Improve bad conditions', 'remedy defects' bağlamlarında test edilir.",
    distractorTraps: [
      "Exacerbate (Kötüleştirmek - tam zıt anlam)",
      "Amalgamate (Birleştirmek)",
      "Amenable (Uysal)"
    ],
    synonyms: ["Improve", "Better", "Enhance", "Alleviate", "Upgrade"],
    antonyms: ["Exacerbate", "Worsen", "Harm", "Deteriorate", "Damage"],
    tone: "Progressive / Constructive / Positive",
    quiz: {
      passage: "Public health officials installed clean water filtration systems in rural clinics to _______ the spread of waterborne bacterial infections.",
      options: ["ameliorate", "exacerbate", "obfuscate", "postulate"],
      correct: 0,
      explanation: "Installing filtration systems improves health conditions and combats illness. 'Ameliorate' means make better or improve."
    }
  },
  {
    id: 62,
    word: "Magnanimous",
    pos: "adjective",
    ipa: "/mæɡˈnæn.ɪ.məs/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Generous or forgiving, especially toward a rival or less powerful person.",
    turkishMeaning: "Alicenap, cömert, yüce gönüllü, bağışlayıcı",
    turkishNuance: "Latincedeki 'magna' (büyük) + 'animus' (ruh) -> Büyük ruhlu. Savaştan veya seçimden galip çıktıktan sonra intikam almak yerine mağlup tarafa şefkatle yaklaşan liderleri niteler.",
    exampleSentence: "In a magnanimous victory speech, the newly elected premier praised his defeated opponent's decades of dedicated public service.",
    satDomain: "History / Political Rhetoric",
    sat2026HowTested: "'Gracious in victory', 'forgiving toward rivals' durumlarında aranır.",
    distractorTraps: [
      "Vindictive (İntikamcı - tam zıt anlam)",
      "Unanimous (Oy birliğiyle - ses tuzağı)",
      "Parsimonious (Cimri)"
    ],
    synonyms: ["Generous", "Charitable", "Noble", "Benevolent", "Forgiving"],
    antonyms: ["Vindictive", "Petty", "Spiteful", "Mean-spirited", "Grudging"],
    tone: "Noble / Forgiving / Praiseworthy",
    quiz: {
      passage: "Rather than humiliating his vanquished adversary in court, the plaintiff made the _______ gesture of waiving all punitive damages.",
      options: ["magnanimous", "acerbic", "didactic", "pedantic"],
      correct: 0,
      explanation: "Waiving damages to show mercy to a defeated opponent is a noble, generous gesture ('magnanimous')."
    }
  },
  {
    id: 63,
    word: "Stringent",
    pos: "adjective",
    ipa: "/ˈstrɪn.dʒənt/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "Strict, precise, and exacting; imposing rigorous standards or regulations.",
    turkishMeaning: "Katı, sıkı, tavizsiz, çok sert kuralları olan",
    turkishNuance: "Havacılık güvenliği, ilaç onay süreçleri veya çevre regülasyonları gibi 'en ufak hataya tahammülü olmayan kurallar' (stringent safety protocols) için kullanılır.",
    exampleSentence: "Aviation authorities introduced stringent safety inspections following the discovery of hairline fractures in engine turbine blades.",
    satDomain: "Engineering / Regulatory Policy",
    sat2026HowTested: "'Lax' (gevşek) veya 'lenient' (müsamahakar) zıddı olarak aranır.",
    distractorTraps: [
      "Lax (Gevşek - tam zıt anlam)",
      "Astringent (Büzücü/keskin tat)",
      "Stridulous (Cırtlak ses çıkaran)"
    ],
    synonyms: ["Rigorous", "Strict", "Severe", "Exacting", "Demanding"],
    antonyms: ["Lax", "Lenient", "Flexible", "Permissive", "Casual"],
    tone: "Authoritative / Strict / Demanding",
    quiz: {
      passage: "Biopharmaceutical facilities must comply with _______ sterilization protocols to prevent particulate contamination during vaccine vial packaging.",
      options: ["stringent", "negligible", "ephemeral", "specious"],
      correct: 0,
      explanation: "High-level sterilization to prevent tiny contamination demands strict, exacting rules ('stringent')."
    }
  },
  {
    id: 64,
    word: "Precipitous",
    pos: "adjective",
    ipa: "/prɪˈsɪp.ɪ.təs/",
    category: "Quantity & Intensity",
    difficulty: "Hard",
    definition: "1. Dangerously high or steep; 2. (Of an action or change) done suddenly, hastily, and without careful consideration.",
    turkishMeaning: "1. Çok dik/uçurumlu; 2. Çok ani, hızlı ve baş döndürücü düşüş/karar",
    turkishNuance: "DSAT'de hem coğrafi bir uçurumu (precipitous cliff) hem de borsada ya da hayvan popülasyonlarında görülen 'ani ve uçuruma yuvarlanırcasına sert düşüşü' (precipitous decline) anlatır.",
    exampleSentence: "The wildlife sanctuary suffered a precipitous decline in songbird populations following the introduction of invasive feral predators.",
    satDomain: "Science / Conservation Ecology",
    sat2026HowTested: "'Sudden steep drop' veya 'rash decision' bağlamlarında test edilir.",
    distractorTraps: [
      "Gradual (Kademeli/yavaş - zıt anlam)",
      "Precipitation (Yağış - isim formu tuzağı)",
      "Conscientious (Vicdanlı)"
    ],
    synonyms: ["Steep", "Abrupt", "Headlong", "Hasty", "Sheer"],
    antonyms: ["Gradual", "Slow", "Deliberate", "Gentle", "Moderate"],
    tone: "Dramatic / Rapid / Severe",
    quiz: {
      passage: "When the central bank unexpectedly raised interest rates by three percentage points, the equity markets experienced a _______ selloff within minutes.",
      options: ["precipitous", "didactic", "scrupulous", "tenable"],
      correct: 0,
      explanation: "A sudden, steep, rapid market drop happening within minutes is 'precipitous'."
    }
  },
  {
    id: 65,
    word: "Austere",
    pos: "adjective",
    ipa: "/ɒsˈtɪər/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Severe or strict in manner, attitude, or appearance; having no comforts or luxuries; plain and simple.",
    turkishMeaning: "Sade, gösterişsiz, çileli, süssüz, sert ve tavizsiz",
    turkishNuance: "Hem keşişlerin veya minimalistlerin lükssüz yaşam tarzını (austere lifestyle) hem de süslemesiz, yalın mimariyi ve edebiyat üslubunu niteler.",
    exampleSentence: "Monastic living quarters were intentionally austere, featuring bare whitewashed stone walls, a wooden plank bed, and no decorative ornaments.",
    satDomain: "Architecture / Religion History",
    sat2026HowTested: "'Flamboyant' (süslü) veya 'opulent' (lüks) kelimelerinin tam zıddı olarak sorulur.",
    distractorTraps: [
      "Opulent (Lüks/gösterişli - zıt anlam)",
      "Astute (Zeki/uyanık - ses tuzağı)",
      "Authentic (Orijinal)"
    ],
    synonyms: ["Spartan", "Ascetic", "Plain", "Severe", "Unadorned"],
    antonyms: ["Opulent", "Flamboyant", "Luxurious", "Ornate", "Lavish"],
    tone: "Severe / Minimal / Strict",
    quiz: {
      passage: "Unlike the gilded ornamentation of the Baroque era, Bauhaus architecture championed an _______ aesthetic focused strictly on functional geometric utility.",
      options: ["austere", "ephemeral", "anachronistic", "equivocal"],
      correct: 0,
      explanation: "Contrasting with gilded, luxurious ornamentation, Bauhaus favored a stripped-down, unadorned, plain look ('austere')."
    }
  },
  {
    id: 66,
    word: "Exhaustive",
    pos: "adjective",
    ipa: "/ɪɡˈzɔː.stɪv/",
    category: "Clarity & Precision",
    difficulty: "Essential",
    definition: "Examining, including, or considering all elements or aspects; fully comprehensive.",
    turkishMeaning: "Kapsamlı, eksiksiz, en ince detayına kadar inceleyen, derinlemesine",
    turkishNuance: "'Exhausting' (yorucu) ile KARIŞTIRMAYIN! 'Exhaustive study/research' hiçbir detayı dışarıda bırakmayan, her şeyi kapsayan mükemmel bir araştırma demektir.",
    exampleSentence: "After an exhaustive three-year review of clinical records from fifty hospitals, the medical panel published its conclusive report on antibiotic resistance.",
    satDomain: "Science / Medicine",
    sat2026HowTested: "'Comprehensive and all-inclusive' araştırmaları nitelemek için 'cursory' (yüzeysel) zıddı olarak sorulur.",
    distractorTraps: [
      "Exhausting (Yorucu - çok yaygın tuzak)",
      "Cursory (Baştan savma - tam zıt anlam)",
      "Exclusive (Dışlayıcı)"
    ],
    synonyms: ["Comprehensive", "Thorough", "All-encompassing", "Exacting", "Complete"],
    antonyms: ["Cursory", "Superficial", "Incomplete", "Selective", "Partial"],
    tone: "Thorough / Academic / Authoritative",
    quiz: {
      passage: "The environmental audit was thoroughly _______, evaluating water quality, soil composition, wildlife migratory corridors, and local air pollution levels.",
      options: ["exhaustive", "ephemeral", "arbitrary", "spurious"],
      correct: 0,
      explanation: "Assessing every single aspect without leaving anything out means the audit was completely comprehensive ('exhaustive')."
    }
  },
  {
    id: 67,
    word: "Disingenuous",
    pos: "adjective",
    ipa: "/ˌdɪs.ɪnˈdʒen.ju.əs/",
    category: "Authenticity & Truth",
    difficulty: "Hard",
    definition: "Not candid or sincere, typically by pretending that one knows less about something than one really does; deceitfully calculating.",
    turkishMeaning: "Samimiyetsiz, iki yüzlü, kurnazca aldatıcı, bilmezden gelen",
    turkishNuance: "'Candid' ve 'ingenuous' kelimelerinin zıddıdır. Bir politikacının gerçeği çok iyi bildiği halde 'Benim haberim yoktu' diyerek numara yapması durumudur.",
    exampleSentence: "It was disingenuous of the tobacco executive to claim under oath that he was unaware of internal nicotine addiction studies.",
    satDomain: "Social Studies / Ethics",
    sat2026HowTested: "'Candid' ve 'sincere' zıddı olarak sahte samimiyeti nitelemek için sorulur.",
    distractorTraps: [
      "Ingenuous (Saf/masum - tam zıt anlam)",
      "Ingenious (Dahice/yaratıcı - çok büyük ses tuzağı!)",
      "Indigenous (Yerli)"
    ],
    synonyms: ["Hypocritical", "Duplicitous", "Inaccurate", "Deceitful", "Two-faced"],
    antonyms: ["Candid", "Frank", "Ingenuous", "Sincere", "Honest"],
    tone: "Critical / Condemnatory / Deceitful",
    quiz: {
      passage: "Given that the committee had drafted the controversial memo themselves, their public expression of shock at its contents was widely seen as _______.",
      options: ["disingenuous", "lucid", "magnanimous", "egalitarian"],
      correct: 0,
      explanation: "Feigning shock about something they personally wrote is insincere and deceitful ('disingenuous')."
    }
  },
  {
    id: 68,
    word: "Spurious",
    pos: "adjective",
    ipa: "/ˈspjʊə.ri.əs/",
    category: "Authenticity & Truth",
    difficulty: "Hard",
    definition: "Not being what it purports to be; false, fake, illegitimate, or based on invalid reasoning.",
    turkishMeaning: "Sahte, temelsiz, asılsız, yanıltıcı gerekçeli",
    turkishNuance: "İstatistikte 'spurious correlation' (sahte korelasyon: aralarında nedensellik bağı olmadığı halde sadece rastlantısal olarak birlikte artan iki grafik) için sıkça geçer.",
    exampleSentence: "Statisticians warned that the apparent correlation between ice cream sales and shark attacks was completely spurious, driven solely by the confounding variable of warm weather.",
    satDomain: "Science / Statistical Literacy",
    sat2026HowTested: "'Genuine' ve 'authentic' zıddı olarak mantıksal veya bilimsel sahteliklerde sorulur.",
    distractorTraps: [
      "Authentic (Hakiki - tam zıt anlam)",
      "Spurious vs Specious (Specious doğru gibi görünür ama çürüktür; Spurious düpedüz uydurmadır)",
      "Spurious vs Furious"
    ],
    synonyms: ["Bogus", "Fake", "Specious", "Counterfeit", "Fraudulent"],
    antonyms: ["Genuine", "Authentic", "Valid", "Legitimate", "True"],
    tone: "Dismissive / Critical / Analytical",
    quiz: {
      passage: "The museum returned the supposed Roman coin collection after metallurgy tests proved the alloys were modern and the artifacts were entirely _______.",
      options: ["spurious", "scrupulous", "prodigious", "tenable"],
      correct: 0,
      explanation: "Modern alloys proving the ancient artifacts were fakes makes them 'spurious' (counterfeit/false)."
    }
  },
  {
    id: 69,
    word: "Specious",
    pos: "adjective",
    ipa: "/ˈspiː.ʃəs/",
    category: "Authenticity & Truth",
    difficulty: "Hard",
    definition: "Superficially plausible or attractive, but actually wrong, deceptive, or misleading.",
    turkishMeaning: "Doğru gibi görünen ama aldatıcı/çürük olan, göz boyayan argüman",
    turkishNuance: "İlk duyduğunuzda kulağa çok mantıklı gelir; ancak yakından incelediğinizde altının bomboş ve yanıltıcı olduğunu fark edersiniz (specious reasoning).",
    exampleSentence: "The defense relied on a specious argument that, while logically enticing on the surface, crumbled under strict forensic cross-examination.",
    satDomain: "Philosophy / Critical Reasoning",
    sat2026HowTested: "'Seemingly sound but fundamentally flawed argument' kalıbında sorulur.",
    distractorTraps: [
      "Spacious (Geniş/ferah - yazım tuzağı)",
      "Plausible (Makul - specious sahte makuldür)",
      "Specious vs Species (Tür)"
    ],
    synonyms: ["Misleading", "Fallacious", "Deceptive", "Superficially sound", "Spurious"],
    antonyms: ["Sound", "Valid", "Tenable", "Genuine", "Legitimate"],
    tone: "Deceptive / Flawed / Critical",
    quiz: {
      passage: "The lobbyist’s claim that environmental regulations always cause permanent unemployment was based on _______ logic that ignored clean-energy job creation.",
      options: ["specious", "scrupulous", "austere", "lucid"],
      correct: 0,
      explanation: "An argument that seems superficially persuasive but is fundamentally misleading and ignores key data is 'specious'."
    }
  },
  {
    id: 70,
    word: "Dubious",
    pos: "adjective",
    ipa: "/ˈdjuː.bi.əs/",
    category: "Authenticity & Truth",
    difficulty: "Essential",
    definition: "Hesitating or doubting; not to be relied upon; suspect, questionable.",
    turkishMeaning: "Şüpheli, kuşkulu, güvenilmez, doğruluğu tartışmalı",
    turkishNuance: "Bir bilginin veya teorinin güvenilmez olduğunu (dubious claim) ya da kişinin tereddütte olduğunu belirtir.",
    exampleSentence: "Scholars cast a dubious eye on the anonymous historical manuscript, pointing out several blatant stylistic anachronisms.",
    satDomain: "History / Source Criticism",
    sat2026HowTested: "'Questionable', 'unreliable claim' bağlamlarında 'trustworthy' zıddı olarak sorulur.",
    distractorTraps: [
      "Indubitable (Şüphe götürmez - tam zıt anlam)",
      "Duplicitous (İki yüzlü)",
      "Docile (Uysal)"
    ],
    synonyms: ["Questionable", "Doubtful", "Suspect", "Uncertain", "Skeptical"],
    antonyms: ["Trustworthy", "Indubitable", "Certain", "Reliable", "Definite"],
    tone: "Skeptical / Questioning / Suspicious",
    quiz: {
      passage: "The scientist’s sensational assertion that he could generate limitless nuclear fusion at room temperature met with _______ reactions from the peer review panel.",
      options: ["dubious", "didactic", "egalitarian", "ubiquitous"],
      correct: 0,
      explanation: "Panel members were highly skeptical and questioned the reliability of the claim, making their reaction 'dubious'."
    }
  },
  {
    id: 71,
    word: "Plausible",
    pos: "adjective",
    ipa: "/ˈplɔː.zə.bəl/",
    category: "Authenticity & Truth",
    difficulty: "Essential",
    definition: "Seeming reasonable or probable; capable of being believed.",
    turkishMeaning: "Makul, akla yatkın, olası, inanılabilir",
    turkishNuance: "Henüz %100 kanıtlanmamış olsa bile mantık çerçevesinde mümkün ve inandırıcı olan teoriler için kullanılır (plausible explanation).",
    exampleSentence: "Geophysicists offered a plausible explanation for the sudden volcanic tremor, suggesting an underground magma pocket had ruptured.",
    satDomain: "Science / Volcanology",
    sat2026HowTested: "'Reasonable and believable hypothesis' bağlamlarında 'implausible' (akıl dışı) zıddı olarak sorulur.",
    distractorTraps: [
      "Implausible (Mantıksız/inanılmaz - zıt anlam)",
      "Laudable (Övgüye değer - ses tuzağı)",
      "Pliable (Esnek)"
    ],
    synonyms: ["Credible", "Reasonable", "Believable", "Feasible", "Tenable"],
    antonyms: ["Implausible", "Incredible", "Unbelievable", "Unlikely", "Tenuous"],
    tone: "Reasonable / Credible / Scientific",
    quiz: {
      passage: "While some ancient astronaut theories are absurd, the theory that ancient builders utilized rolling log sledges remains a highly _______ engineering mechanism.",
      options: ["plausible", "spurious", "ephemeral", "anachronistic"],
      correct: 0,
      explanation: "Using log sledges is a credible, reasonable, and believable explanation ('plausible') in contrast to absurd theories."
    }
  },
  {
    id: 72,
    word: "Ostensibly",
    pos: "adverb",
    ipa: "/ɒsˈten.sə.bli/",
    category: "Authenticity & Truth",
    difficulty: "Hard",
    definition: "As appears or is stated to be true, though not necessarily so; apparently; outwardly.",
    turkishMeaning: "Görünürde, sözde, güya, resmiyette öyle görünen ama aslında farklı olan",
    turkishNuance: "Metinde 'görünüşteki bahane' ile 'arkasındaki gerçek niyet' arasındaki tezatı kurmak için kullanılır (örn: ostensibly for defense, but actually for conquest).",
    exampleSentence: "The committee was formed ostensibly to promote fiscal transparency, but leaked emails revealed its true goal was to silence opposition whistleblowers.",
    satDomain: "Politics / Investigative Journalism",
    sat2026HowTested: "Görünüşteki iddia ile altta yatan gerçek arasındaki tezatı gösteren zarf olarak test edilir.",
    distractorTraps: [
      "Genuinely (Gerçekten - tam zıt anlam)",
      "Ostentatiously (Gösterişle/havayla - ses tuzağı)",
      "Inevitably (Kaçınılmaz olarak)"
    ],
    synonyms: ["Apparently", "Supposedly", "Outwardly", "Professedly", "Seemingly"],
    antonyms: ["Genuinely", "Truly", "Actually", "In reality"],
    tone: "Suspicious / Revealing / Analytical",
    quiz: {
      passage: "The foreign military deployment was launched _______ to provide humanitarian food relief, though geopolitical analysts noted it secured vital oil pipeline routes.",
      options: ["ostensibly", "scrupulously", "pragmatically", "lucidly"],
      correct: 0,
      explanation: "The stated outward justification (food relief) contrasted with the underlying strategic motive. 'Ostensibly' means apparently or outwardly as claimed."
    }
  },
  {
    id: 73,
    word: "Tenable",
    pos: "adjective",
    ipa: "/ˈten.ə.bəl/",
    category: "Argumentation & Evidence",
    difficulty: "Hard",
    definition: "Able to be maintained, defended, or justified against attack, objection, or criticism.",
    turkishMeaning: "Savunulabilir, mantıklı gerekçelendirilebilir, geçerliliğini koruyabilen",
    turkishNuance: "Hukukta bir dava, felsefede bir tez veya askeri bir kale için kullanılır. Mantıklı argümanlarla ayakta durabilen teorilere 'tenable position' denir.",
    exampleSentence: "As contradictory paleoclimatic data continued to emerge, the old hypothesis of sudden ice age onset was no longer tenable.",
    satDomain: "Science / Paleoclimatology",
    sat2026HowTested: "'Defensible position' bağlamında 'untenable' (savunulamaz) zıddı olarak sorulur.",
    distractorTraps: [
      "Untenable (Savunulamaz - zıt anlam)",
      "Tenacious (İnatçı/vazgeçmeyen - kök tuzağı)",
      "Tangible (Somut)"
    ],
    synonyms: ["Defensible", "Justifiable", "Sound", "Viable", "Sustainable"],
    antonyms: ["Untenable", "Indefensible", "Unjustifiable", "Flawed", "Specious"],
    tone: "Logical / Robust / Defensible",
    quiz: {
      passage: "In light of newly declassified military transcripts, the administration’s claim that it was caught off guard was no longer _______.",
      options: ["tenable", "ephemeral", "didactic", "visceral"],
      correct: 0,
      explanation: "Declassified evidence destroyed the defense of the claim, making it no longer defendable or justifiable ('tenable')."
    }
  },
  {
    id: 74,
    word: "Untenable",
    pos: "adjective",
    ipa: "/ʌnˈten.ə.bəl/",
    category: "Argumentation & Evidence",
    difficulty: "Hard",
    definition: "Not able to be maintained or defended against attack, criticism, or objection; indefensible.",
    turkishMeaning: "Savunulamaz, sürdürülemez, tutarsız, dayanıksız",
    turkishNuance: "'Tenable' kelimesinin olumsuzudur. Ortaya çıkan kanıtlar karşısında bir iddia artık çöktüğünde ve savunulacak hiçbir tarafı kalmadığında kullanılır.",
    exampleSentence: "With four key board members resigning in protest, the CEO’s continued refusal to step down became politically untenable.",
    satDomain: "Business / Corporate Governance",
    sat2026HowTested: "'Indefensible situation', 'impossible to maintain' durumlarında aranır.",
    distractorTraps: [
      "Tenable (Savunulabilir - zıt anlam)",
      "Unattainable (Ulaşılamaz)",
      "Untouchable (Dokunulmaz)"
    ],
    synonyms: ["Indefensible", "Insupportable", "Unsustainable", "Unjustifiable", "Flawed"],
    antonyms: ["Tenable", "Defensible", "Sound", "Justifiable"],
    tone: "Critical / Defeated / Flawed",
    quiz: {
      passage: "Maintaining an economy entirely dependent on single-crop exports became _______ when international commodity prices collapsed by eighty percent.",
      options: ["untenable", "pragmatic", "meticulous", "austere"],
      correct: 0,
      explanation: "An 80% price collapse made the single-crop economic system impossible to defend or sustain ('untenable')."
    }
  },
  {
    id: 75,
    word: "Tenuous",
    pos: "adjective",
    ipa: "/ˈten.ju.əs/",
    category: "Argumentation & Evidence",
    difficulty: "Hard",
    definition: "Very weak, slight, or flimsy; having little substance, strength, or basis.",
    turkishMeaning: "Zayıf, dayanıksız, pamuk ipliğine bağlı, temelsiz",
    turkishNuance: "İki olay arasındaki zayıf bağlantı (tenuous connection) veya çok ince bir ip/iplik için kullanılır. 'Substantial' ve 'robust' kelimelerinin zıddıdır.",
    exampleSentence: "The prosecutor's case relied on a tenuous link between the suspect and the vehicle, unsupported by fingerprints or DNA.",
    satDomain: "Legal Studies / Criminal Justice",
    sat2026HowTested: "'Weak and insubstantial evidence' durumlarında sorulur.",
    distractorTraps: [
      "Tenable (Savunulabilir - kök benzerliği tuzağı)",
      "Robust (Güçlü - tam zıt anlam)",
      "Tenacious (İnatçı)"
    ],
    synonyms: ["Flimsy", "Fragile", "Shaky", "Doubtful", "Insubstantial"],
    antonyms: ["Robust", "Strong", "Substantial", "Firm", "Sound"],
    tone: "Weak / Fragile / Vulnerable",
    quiz: {
      passage: "The anthropologist acknowledged that the connection between the two isolated folklore traditions was _______, based solely on a single shared proverb.",
      options: ["tenuous", "prodigious", "stringent", "exhaustive"],
      correct: 0,
      explanation: "A link based on only a single proverb is extremely weak and flimsy ('tenuous')."
    }
  },
  {
    id: 76,
    word: "Disparage",
    pos: "verb",
    ipa: "/dɪˈspær.ɪdʒ/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "To regard or represent as being of little worth; to belittle, degrade, or speak slightingly of.",
    turkishMeaning: "Küçümsemek, kötülemek, yermek, değerini hafife almak",
    turkishNuance: "'Extol' ve 'praise' kelimelerinin zıddıdır. Başka bir yazarın, teorinin veya sanatçının emeğini aşağılayarak değersizleştirmek için kullanılır.",
    exampleSentence: "Traditional academic critics often disparaged graphic novels as juvenile comic books, ignoring their sophisticated literary themes.",
    satDomain: "Literature / Cultural Criticism",
    sat2026HowTested: "'Belittle achievements', 'criticize unfairly' bağlamlarında test edilir.",
    distractorTraps: [
      "Extol (Övmek - tam zıt anlam)",
      "Disparate (Farklı/ayrı - ses ve yazım tuzağı!)",
      "Disperse (Dağıtmak)"
    ],
    synonyms: ["Belittle", "Denigrate", "Deprecate", "Deride", "Minimize"],
    antonyms: ["Extol", "Praise", "Laud", "Acclaim", "Honor"],
    tone: "Derogatory / Critical / Scornful",
    quiz: {
      passage: "Rather than engaging with the economist’s mathematical proofs, the columnist resorted to personal attacks to _______ her professional reputation.",
      options: ["disparage", "corroborate", "substantiate", "ameliorate"],
      correct: 0,
      explanation: "Using personal attacks to belittle and damage someone's reputation is to 'disparage' them."
    }
  },
  {
    id: 77,
    word: "Belie",
    pos: "verb",
    ipa: "/bɪˈlaɪ/",
    category: "Authenticity & Truth",
    difficulty: "Hard",
    definition: "To fail to give a true notion or impression of something; to disguise, contradict, or betray.",
    turkishMeaning: "Yanıltmak, çelişmek, gerçeği saklamak, tersini göstermek",
    turkishNuance: "DSAT 'Words in Context' sorularının en ünlü kelimelerindendir. 'His calm voice belied his inner panic' (Sakin sesi, içindeki paniği gizliyordu/yalanlıyordu). Dış görünüş ile iç gerçeklik arasındaki tezatı kurar.",
    exampleSentence: "The delicate, fragile appearance of the spider’s silk belies its astounding tensile strength, which rivals high-grade steel.",
    satDomain: "Science / Biomaterials",
    sat2026HowTested: "'Appear one way but actually be the opposite' bağlamında en klasik zıtlık fiili olarak sorulur.",
    distractorTraps: [
      "Belittle (Küçümsemek - kök tuzağı)",
      "Bequeath (Miras bırakmak)",
      "Betray (Bazen eşanlamlı kullanılabilir ama farklı bağlamlar içerir)"
    ],
    synonyms: ["Contradict", "Disguise", "Misrepresent", "Mask", "Conceal"],
    antonyms: ["Reveal", "Manifest", "Testify", "Demonstrate", "Betray truly"],
    tone: "Contradictory / Deceptive appearance",
    quiz: {
      passage: "The tranquil, mirror-like surface of the mountain lake _______ the turbulent geothermal currents churning hundreds of meters below.",
      options: ["belies", "bolsters", "substantiates", "proliferates"],
      correct: 0,
      explanation: "The peaceful surface contradicts and masks the dangerous turbulent currents underneath. 'Belies' means contradicts or disguises the true nature."
    }
  },
  {
    id: 78,
    word: "Incongruous",
    pos: "adjective",
    ipa: "/ɪnˈkɒŋ.ɡru.əs/",
    category: "Complexity & Nuance",
    difficulty: "Hard",
    definition: "Not in harmony or keeping with the surroundings or other aspects of something; out of place.",
    turkishMeaning: "Uyumsuz, yersiz, bağlama uymayan, aykırı",
    turkishNuance: "Tarihi bir filmde oyuncunun kolundaki dijital kol saati veya ciddi bir cenaze töreninde palyaço kostümü giyilmesi gibi 'o ortama hiç yakışmayan/uymayan' durumlar için kullanılır.",
    exampleSentence: "The hyper-modern glass-and-steel skyscraper looked entirely incongruous situated among the centuries-old cobblestone medieval cottages.",
    satDomain: "Architecture / Urban Planning",
    sat2026HowTested: "'Out of place', 'mismatched with surroundings' durumlarında 'congruous' zıddı olarak sorulur.",
    distractorTraps: [
      "Congruous (Uyumlu - tam zıt anlam)",
      "Ingenuous (Saf/masum - ses tuzağı)",
      "Inconsequential (Önemsiz)"
    ],
    synonyms: ["Out of place", "Inappropriate", "Discordant", "Mismatched", "Unsuited"],
    antonyms: ["Harmonious", "Congruous", "Fitting", "Appropriate", "Consistent"],
    tone: "Mismatched / Odd / Inconsistent",
    quiz: {
      passage: "Wearing heavy wool coats on a sun-drenched tropical beach felt delightfully _______ to the visiting polar researchers.",
      options: ["incongruous", "scrupulous", "austere", "pragmatic"],
      correct: 0,
      explanation: "Wearing heavy winter coats on a hot tropical beach is completely out of place and mismatched ('incongruous')."
    }
  },
  {
    id: 79,
    word: "Prodigious",
    pos: "adjective",
    ipa: "/prəˈdɪdʒ.əs/",
    category: "Quantity & Intensity",
    difficulty: "Hard",
    definition: "Remarkably or impressively great in extent, size, quantity, or degree; monumental.",
    turkishMeaning: "Olağanüstü, devasa, hayret verici derecede büyük, muazzam",
    turkishNuance: "'Prodigy' (dahi çocuk) kelimesiyle aynı köktendir. Bir yazarın ömrü boyunca yüzlerce kitap yazması (prodigious output) veya bir barajın devasa boyutu için kullanılır.",
    exampleSentence: "Mozart's prodigious musical output began in early childhood, composing complex symphonies before the age of ten.",
    satDomain: "Arts / Classical Music History",
    sat2026HowTested: "'Vast in scale or quantity', 'monumental achievement' bağlamlarında 'negligible' zıddı olarak sorulur.",
    distractorTraps: [
      "Prodigal (Müsrif/savurgan - çok tehlikeli kök tuzağı!)",
      "Negligible (Önemsiz az - zıt anlam)",
      "Precocious (Erken gelişmiş)"
    ],
    synonyms: ["Enormous", "Colossal", "Monumental", "Immense", "Staggering"],
    antonyms: ["Negligible", "Tiny", "Puny", "Meager", "Insignificant"],
    tone: "Monumental / Impressive / Awe-inspiring",
    quiz: {
      passage: "The volcanic eruption released a _______ cloud of ash and sulfur dioxide that circled the globe and cooled global temperatures for two years.",
      options: ["prodigious", "negligible", "didactic", "candid"],
      correct: 0,
      explanation: "A cloud massive enough to circle the entire planet is impressively and monumentally huge ('prodigious')."
    }
  },
  {
    id: 80,
    word: "Superfluous",
    pos: "adjective",
    ipa: "/suːˈpɜː.flu.əs/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "Exceeding what is sufficient or necessary; extra, redundant, or unnecessary.",
    turkishMeaning: "Gereksiz, fazlalık, lüzumsuz, fuzuli",
    turkishNuance: "DSAT Writing'in altın kuralı olan 'redundancy' (lüzumsuz tekrar) hatasının sözlük karşılığıdır. Bir metinden veya cihazdan çıkarıldığında hiçbir eksiklik yaratmayan fazlalıklar için kullanılır.",
    exampleSentence: "Because the main thesis was already clearly stated in the introduction, the entire third paragraph was deemed superfluous and cut by the editor.",
    satDomain: "Literature / Academic Writing",
    sat2026HowTested: "'Unnecessary extra detail' bağlamlarında 'essential' ve 'indispensable' zıddı olarak sorulur.",
    distractorTraps: [
      "Superficial (Yüzeysel - çok yaygın ses tuzağı!)",
      "Essential (Gerekli - tam zıt anlam)",
      "Superlative (En üstün)"
    ],
    synonyms: ["Redundant", "Excess", "Unneeded", "Surplus", "Extraneous"],
    antonyms: ["Essential", "Necessary", "Indispensable", "Vital", "Crucial"],
    tone: "Critical / Redundant / Wasteful",
    quiz: {
      passage: "When designing aerospace components, engineers strip away any _______ weight to maximize fuel efficiency and payload capacity.",
      options: ["superfluous", "scrupulous", "austere", "plausible"],
      correct: 0,
      explanation: "Engineers eliminate unnecessary, extra weight to save fuel. 'Superfluous' means unnecessary or redundant."
    }
  },
  {
    id: 81,
    word: "Retrospect",
    pos: "noun",
    ipa: "/ˈret.rə.spekt/",
    category: "Change & Permanence",
    difficulty: "Essential",
    definition: "A survey or review of a past course of events or period of time; looking backward.",
    turkishMeaning: "Geçmişe bakış, geriye dönük değerlendirme",
    turkishNuance: "'In retrospect' (geriye dönüp bakıldığında) kalıbıyla DSAT Reading pasajlarında yazarın geçmişteki bir hatayı veya olayı bugünün olgunluğuyla değerlendirdiği anlarda çıkar.",
    exampleSentence: "In retrospect, the company’s decision to abandon digital camera development in favor of film appears shockingly short-sighted.",
    satDomain: "Business / Technology History",
    sat2026HowTested: "'Looking back on past actions' kalıplarında zaman geçişi olarak sorulur.",
    distractorTraps: [
      "Prospect (Gelecek beklentisi - tam zıt yön)",
      "Aspect (Yön/veche)",
      "Introspect (Kendi içine bakmak)"
    ],
    synonyms: ["Hindsight", "Review", "Recollection", "Reminiscence"],
    antonyms: ["Foresight", "Prospect", "Anticipation"],
    tone: "Reflective / Evaluative / Temporal",
    quiz: {
      passage: "In _______, the treaty’s punitive reparations clauses paved the way for economic instability and renewed warfare two decades later.",
      options: ["retrospect", "juxtaposition", "hegemony", "dissonance"],
      correct: 0,
      explanation: "Evaluating historical consequences looking back from the future uses the phrase 'in retrospect' (in hindsight)."
    }
  },
  {
    id: 82,
    word: "Concomitant",
    pos: "adjective",
    ipa: "/kənˈkɒm.ɪ.tənt/",
    category: "Science & Research",
    difficulty: "Hard",
    definition: "Naturally accompanying, associated with, or following as a consequence.",
    turkishMeaning: "Eşlik eden, beraberinde gelen, paralel gelişen",
    turkishNuance: "Tıpta bir hastalığa eşlik eden belirtiler (concomitant symptoms) veya sanayileşmenin beraberinde getirdiği çevre kirliliği gibi 'yan yana gerçekleşen' durumlar için kullanılır.",
    exampleSentence: "Rapid urbanization in the late nineteenth century brought a concomitant rise in municipal sanitation challenges.",
    satDomain: "Social History / Urbanization",
    sat2026HowTested: "'Accompanying phenomenon', 'parallel consequence' bağlamlarında test edilir.",
    distractorTraps: [
      "Concomitant vs Competent (Yetkin)",
      "Independent (Bağımsız - zıt anlam)",
      "Preceding (Önce gelen)"
    ],
    synonyms: ["Accompanying", "Associated", "Attendant", "Concurrent", "Related"],
    antonyms: ["Unrelated", "Independent", "Preceding", "Disconnected"],
    tone: "Formal / Academic / Co-occurring",
    quiz: {
      passage: "The expansion of digital data centers has produced a _______ surge in electricity demand across regional power grids.",
      options: ["concomitant", "negligible", "pedantic", "spurious"],
      correct: 0,
      explanation: "A rise in electricity demand naturally accompanies and occurs in parallel with data center expansion ('concomitant')."
    }
  },
  {
    id: 83,
    word: "Paradigm",
    pos: "noun",
    ipa: "/ˈpær.ə.daɪm/",
    category: "Science & Research",
    difficulty: "Hard",
    definition: "A typical example or pattern of something; a distinct set of concepts, thought patterns, or standards that define a discipline.",
    turkishMeaning: "Paradigma, temel model, düşünce kalıbı, örneklem",
    turkishNuance: "Bilim felsefesinde 'paradigm shift' (paradigma değişimi: örn. Dünya merkezli evren anlayışından Güneş merkezliye geçiş) kavramıyla ünlüdür.",
    exampleSentence: "Einstein’s general theory of relativity initiated a profound paradigm shift in modern physics, redefining the nature of gravity as curved spacetime.",
    satDomain: "Science / Philosophy of Science",
    sat2026HowTested: "'Fundamental framework of thinking' veya 'archetypal model' bağlamında sorulur.",
    distractorTraps: [
      "Paradox (Çelişki - ses tuzağı!)",
      "Paragon (Kusursuz örnek)",
      "Paramount (En önemli)"
    ],
    synonyms: ["Model", "Archetype", "Framework", "Pattern", "Standard"],
    antonyms: ["Anomaly", "Aberration", "Deviation"],
    tone: "Academic / Conceptual / Fundamental",
    quiz: {
      passage: "The transition from mechanical telegraphy to digital fiber optics represented a fundamental _______ shift in global communication infrastructure.",
      options: ["paradigm", "dearth", "dissonance", "anachronism"],
      correct: 0,
      explanation: "A total transformation in the fundamental framework of thought and practice is a 'paradigm' shift."
    }
  },
  {
    id: 84,
    word: "Anachronistic",
    pos: "adjective",
    ipa: "/əˌnæk.rəˈnɪs.tɪk/",
    category: "Change & Permanence",
    difficulty: "Hard",
    definition: "Belonging or appropriate to a period other than that in which it exists, especially conspicuously old-fashioned.",
    turkishMeaning: "Çağa aykırı, zaman hatası içeren, çağ dışı kalmış",
    turkishNuance: "Antik Roma filminde gladyatörün kolunda saat olması veya modern dünyada Orta Çağ ceza yasalarını uygulamak gibi zamana uyumsuzlukları niteler.",
    exampleSentence: "In an era of instant international wire transfers, sending paper checks by surface mail feels hopelessly anachronistic.",
    satDomain: "Technology / Cultural Commentary",
    sat2026HowTested: "'Out of its proper historical time period' durumlarında sorulur.",
    distractorTraps: [
      "Anarchic (Kaotik/kuralsız - ses tuzağı)",
      "Contemporary (Çağdaş - tam zıt anlam)",
      "Archaic (Sadece eski - anachronistic zaman uyumsuzluğudur)"
    ],
    synonyms: ["Outdated", "Obsolete", "Archaic", "Antiquated", "Ill-timed"],
    antonyms: ["Contemporary", "Modern", "Timely", "Current"],
    tone: "Critical / Out of place / Temporal",
    quiz: {
      passage: "The theatrical director’s decision to have Julius Caesar consult a smartphone during the Senate debate was an intentionally _______ choice.",
      options: ["anachronistic", "scrupulous", "empirical", "austere"],
      correct: 0,
      explanation: "Placing a modern smartphone into ancient Rome is placing something outside its true historical era ('anachronistic')."
    }
  },
  {
    id: 85,
    word: "Aesthetic",
    pos: "adjective",
    ipa: "/esˈθet.ɪk/",
    category: "Figurative & Literary",
    difficulty: "Essential",
    definition: "Concerned with beauty, art, or the appreciation of visual elegance and sensory appeal.",
    turkishMeaning: "Estetik, sanatsal, güzellik anlayışına ilişkin",
    turkishNuance: "Saf işlevsellikten (pure utilitarianism) ziyade görsel veya duyusal güzelliğe odaklanan tasarım ve edebiyat akımları için kullanılır.",
    exampleSentence: "Japanese traditional pottery values an aesthetic of wabi-sabi, finding profound beauty in natural imperfection and asymmetry.",
    satDomain: "Arts / Design Philosophy",
    sat2026HowTested: "'Appreciation of beauty or artistic form' bağlamlarında 'purely utilitarian' zıddı olarak sorulur.",
    distractorTraps: [
      "Ascetic (Çileci/sade - ses tuzağı!)",
      "Athletic (Atletik)",
      "Anaesthetic (Uyuşturucu/anestezi)"
    ],
    synonyms: ["Artistic", "Tasteful", "Decorative", "Visual", "Cultivated"],
    antonyms: ["Unattractive", "Utilitarian solely", "Hideous", "Crude"],
    tone: "Artistic / Visual / Appreciative",
    quiz: {
      passage: "Beyond its structural integrity, the archbridge was praised for its breathtaking _______ appeal, seamlessly complementing the surrounding river valley.",
      options: ["aesthetic", "didactic", "pedantic", "spurious"],
      correct: 0,
      explanation: "Praising visual beauty and elegance beyond simple engineering utility points to 'aesthetic' appeal."
    }
  },
  {
    id: 86,
    word: "Voracious",
    pos: "adjective",
    ipa: "/vəˈreɪ.ʃəs/",
    category: "Quantity & Intensity",
    difficulty: "Hard",
    definition: "Wanting or devouring great quantities of food; metaphorically, having an insatiable appetite for an activity or knowledge.",
    turkishMeaning: "Doymak bilmez, açgözlü, son derece hevesli ve iştahlı",
    turkishNuance: "Fiziksel açlığın ötesinde SAT'de 'voracious reader' (kitap kurdu / oburca okuyan) gibi bilgiye aç insanlar veya kaynakları hızla tüketen endüstriler için kullanılır.",
    exampleSentence: "As a young student in the university library, she was a voracious reader, consuming several dense history volumes every weekend.",
    satDomain: "Literature / Biography",
    sat2026HowTested: "'Insatiable appetite for learning or reading' durumlarında aranır.",
    distractorTraps: [
      "Veracious (Doğru sözlü/dürüst - çok tehlikeli ses tuzağı!)",
      "Apathetic (İlgisiz - zıt anlam)",
      "Moderate (Ölçülü)"
    ],
    synonyms: ["Insatiable", "Ravenous", "Avid", "Rapacious", "Eager"],
    antonyms: ["Indifferent", "Apathetic", "Moderate", "Satiated"],
    tone: "Eager / Insatiable / Intense",
    quiz: {
      passage: "The newly engineered data algorithms possessed a _______ appetite for server computing power, draining processing capacities within seconds.",
      options: ["voracious", "negligible", "austere", "tenuous"],
      correct: 0,
      explanation: "An insatiable, immense appetite for computing resources is described as 'voracious'."
    }
  },
  {
    id: 87,
    word: "Tacit",
    pos: "adjective",
    ipa: "/ˈtæs.ɪt/",
    category: "Clarity & Precision",
    difficulty: "Hard",
    definition: "Understood, implied, or agreed upon without being stated openly in words.",
    turkishMeaning: "Zımni, sessiz, üstü kapalı anlaşılan, sözsüz kabul edilen",
    turkishNuance: "'Explicit' (açıkça yazılmış/söylenmiş) kelimesinin tam zıddıdır. İki tarafın hiç konuşmadan birbirine göz kırparak veya sessiz kalarak onay vermesidir (tacit approval).",
    exampleSentence: "By not objecting to the proposed contract amendments during the executive session, the board gave its tacit consent.",
    satDomain: "Law / Corporate Governance",
    sat2026HowTested: "'Implied without explicit words' bağlamlarında 'explicit' zıddı olarak test edilir.",
    distractorTraps: [
      "Tactile (Dokunsal - ses tuzağı)",
      "Taciturn (Az konuşan kişi)",
      "Explicit (Açık ve net - tam zıt anlam)"
    ],
    synonyms: ["Implied", "Implicit", "Insinuated", "Unspoken", "Understood"],
    antonyms: ["Explicit", "Stated", "Expressed", "Direct", "Overt"],
    tone: "Subtle / Implicit / Unspoken",
    quiz: {
      passage: "Although there was no formal treaty clause concerning fishing rights, both neighboring maritime nations operated under a _______ agreement to share the border bay.",
      options: ["tacit", "stringent", "didactic", "superfluous"],
      correct: 0,
      explanation: "An agreement that was respected without formal written words is an unspoken or 'tacit' agreement."
    }
  },
  {
    id: 88,
    word: "Pervasive",
    pos: "adjective",
    ipa: "/pəˈveɪ.sɪv/",
    category: "Quantity & Intensity",
    difficulty: "Essential",
    definition: "Spreading widely throughout an area or a group of people, especially of an unwelcome influence or physical substance.",
    turkishMeaning: "Her yana yayılan, sinen, istila eden, köşe bucak saran",
    turkishNuance: "'Ubiquitous' gibi her yerde olmayı anlatır ama 'pervasive' genellikle bir koku, sis, yolsuzluk ya da kültürel etkinin 'derinlere kadar işlemesini' vurgular.",
    exampleSentence: "Despite anti-corruption reforms, bribery remained a pervasive problem within the regional customs and border patrol agencies.",
    satDomain: "Social Science / Criminology",
    sat2026HowTested: "'Spreading through every part of a system' bağlamlarında 'isolated' zıddı olarak sorulur.",
    distractorTraps: [
      "Persuasive (İkna edici - yazım benzerliği tuzağı!)",
      "Perverse (Sapkın)",
      "Isolated (Yalıtılmış - zıt anlam)"
    ],
    synonyms: ["Prevalent", "Permeating", "Ubiquitous", "Widespread", "Omnipresent"],
    antonyms: ["Isolated", "Localized", "Limited", "Confined", "Scarce"],
    tone: "Intrusive / Widespread / Critical",
    quiz: {
      passage: "The smell of roasted coffee beans was so _______ that it drifted into every storefront along the five-block downtown promenade.",
      options: ["pervasive", "ephemeral", "negligible", "austere"],
      correct: 0,
      explanation: "An aroma spreading through every single shop along blocks is 'pervasive' (permeating everywhere)."
    }
  },
  {
    id: 89,
    word: "Inherent",
    pos: "adjective",
    ipa: "/ɪnˈhɪə.rənt/",
    category: "Authenticity & Truth",
    difficulty: "Essential",
    definition: "Existing in something as a permanent, essential, or characteristic attribute; intrinsic.",
    turkishMeaning: "Doğuştan gelen, özünde bulunan, ayrılmaz parçası olan, fıtri",
    turkishNuance: "Dışarıdan eklenmemiş, bir şeyin kendi doğasında var olan özellikler (inherent risks of mountaineering) için kullanılır.",
    exampleSentence: "Biologists caution that there is an inherent risk of genetic mutation whenever organisms are subjected to high ionizing radiation.",
    satDomain: "Science / Genetics",
    sat2026HowTested: "'Intrinsic quality', 'inseparable attribute' bağlamlarında 'extrinsic' zıddı olarak sorulur.",
    distractorTraps: [
      "Extrinsic (Dışsal - tam zıt anlam)",
      "Inherited (Miras kalan - kök tuzağı)",
      "Incoherent (Tutarsız)"
    ],
    synonyms: ["Intrinsic", "Innate", "Inborn", "Essential", "Immanent"],
    antonyms: ["Extrinsic", "Acquired", "External", "Alien", "Incidental"],
    tone: "Fundamental / Natural / Essential",
    quiz: {
      passage: "Every human aerospace flight carries an _______ element of physical danger that no amount of pre-launch simulations can completely eliminate.",
      options: ["inherent", "spurious", "ephemeral", "anachronistic"],
      correct: 0,
      explanation: "Danger that is an inseparable, intrinsic part of spaceflight is an 'inherent' risk."
    }
  },
  {
    id: 90,
    word: "Propensity",
    pos: "noun",
    ipa: "/prəˈpen.sə.ti/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "An inclination or natural tendency to behave in a particular way; a leaning.",
    turkishMeaning: "Eğilim, meyil, yatkınlık",
    turkishNuance: "Bireylerin veya hayvanların belirli durumlarda gösterdiği doğal davranış meyli (propensity for risk-taking / propensity to migrate).",
    exampleSentence: "Behavioral economists observed that investors with a high propensity for risk frequently concentrated their capital in volatile tech startups.",
    satDomain: "Social Science / Behavioral Economics",
    sat2026HowTested: "'Inclination', 'predisposition' isimlerinin eşanlamlısı olarak sorulur.",
    distractorTraps: [
      "Prosperity (Refah/zenginlik - çok yaygın ses tuzağı!)",
      "Aversion (Nefret/kaçınma - tam zıt anlam)",
      "Propinquity (Yakınlık)"
    ],
    synonyms: ["Predisposition", "Inclination", "Penchant", "Tendency", "Leaning"],
    antonyms: ["Aversion", "Disinclination", "Reluctance", "Antipathy"],
    tone: "Behavioral / Analytical / Descriptive",
    quiz: {
      passage: "Studies in evolutionary biology demonstrate that honeybees possess an innate _______ to follow sun-oriented flight paths when foraging.",
      options: ["propensity", "dearth", "dissonance", "hegemony"],
      correct: 0,
      explanation: "An innate natural tendency or inclination to follow flight paths is a 'propensity'."
    }
  },
  {
    id: 91,
    word: "Reconcile",
    pos: "verb",
    ipa: "/ˈrek.ən.saɪl/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To restore friendly relations between; to make two apparently conflicting ideas or accounts compatible.",
    turkishMeaning: "Uzlaştırmak, arayı bulmak, çelişen iki şeyi bağdaştırmak",
    turkishNuance: "DSAT'de iki düşmanın barışmasından ziyade, 'çelişkili görünen iki bilimsel veri setini birbiriyle uyumlu hale getirmek' (reconcile conflicting findings) anlamında sorulur.",
    exampleSentence: "The physicist sought to reconcile quantum mechanics with Einsteinian gravity by developing a unified multidimensional string theory.",
    satDomain: "Science / Theoretical Physics",
    sat2026HowTested: "'Make conflicting data compatible' bağlamlarında test edilir.",
    distractorTraps: [
      "Polarize (Ayrıştırmak - tam zıt anlam)",
      "Recondite (Anlaşılması zor)",
      "Reconvene (Yeniden toplanmak)"
    ],
    synonyms: ["Harmonize", "Synthesize", "Accommodate", "Integrate", "Resolve"],
    antonyms: ["Polarize", "Alienate", "Disrupt", "Estranger"],
    tone: "Constructive / Harmonizing / Analytical",
    quiz: {
      passage: "The historian’s new monograph managed to _______ two previously incompatible accounts of the 1848 revolutions by examining regional tax ledgers.",
      options: ["reconcile", "polarize", "obfuscate", "disparage"],
      correct: 0,
      explanation: "Bringing two conflicting historical accounts into agreement and compatibility is to 'reconcile' them."
    }
  },
  {
    id: 92,
    word: "Galvanize",
    pos: "verb",
    ipa: "/ˈɡæl.və.naɪz/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "To shock, excite, or stimulate someone into taking immediate action.",
    turkishMeaning: "Harekete geçirmek, canlandırmak, şevke getirmek, şok etkisiyle uyandırmak",
    turkishNuance: "Luigi Galvani'nin elektrikle kurbağa bacağını hareket ettirmesinden gelir. Rehavete kapılmış bir toplumu ani bir olayla ayağa kaldırıp eyleme sevk etmektir.",
    exampleSentence: "The unexpected environmental catastrophe galvanized citizens into organizing nationwide clean-energy demonstrations.",
    satDomain: "Social History / Activism",
    sat2026HowTested: "'Stimulate into rapid action' durumlarında 'pacify' veya 'stagnate' zıddı olarak sorulur.",
    distractorTraps: [
      "Pacify (Yatıştırmak - zıt anlam)",
      "Gentrify (Soylulaştırmak)",
      "Paralyze (Felç etmek - zıt etki)"
    ],
    synonyms: ["Stimulate", "Inspire", "Electrify", "Mobilize", "Rouse"],
    antonyms: ["Paralyze", "Pacify", "Dampen", "Depress", "Inhibit"],
    tone: "Energizing / Dynamic / Motivational",
    quiz: {
      passage: "The sudden leak of internal safety audit documents served to _______ union workers to demand immediate OSHA workplace inspections.",
      options: ["galvanize", "undermine", "curtail", "stagnate"],
      correct: 0,
      explanation: "The leak shocked and mobilized workers into immediate aggressive action ('galvanize')."
    }
  },
  {
    id: 93,
    word: "Vindicate",
    pos: "verb",
    ipa: "/ˈvɪn.dɪ.keɪt/",
    category: "Argumentation & Evidence",
    difficulty: "Hard",
    definition: "To clear someone of blame or suspicion; to show or prove that a criticized idea, claim, or person was right all along.",
    turkishMeaning: "Aklamak, temize çıkarmak, haklılığını kanıtlamak",
    turkishNuance: "Yıllarca herkesin alay ettiği bir teorisyenin, yıllar sonra yeni bir deneyle 'haklı olduğunun anlaşılması' (vindicated by history) durumudur.",
    exampleSentence: "Dr. Barbara McClintock was thoroughly vindicated when later molecular biology techniques confirmed her once-derided theory of 'jumping genes.'",
    satDomain: "Science / Genetics History",
    sat2026HowTested: "'Prove right after skepticism or accusations' bağlamlarında test edilir.",
    distractorTraps: [
      "Vindictive (İntikamcı - isim/sıfat kök tuzağı!)",
      "Condemn (Mahkum etmek - zıt anlam)",
      "Vilify (Kötülemek)"
    ],
    synonyms: ["Exonerate", "Absolve", "Justify", "Validate", "Acquit"],
    antonyms: ["Condemn", "Incriminate", "Disprove", "Blame", "Vilify"],
    tone: "Triumphant / Validating / Exonerating",
    quiz: {
      passage: "After enduring decades of ridicule from conventional archaeologists, the amateur diver was _______ when sonar mapping located the sunken ancient harbor exactly where he predicted.",
      options: ["vindicated", "disparaged", "undermined", "subverted"],
      correct: 0,
      explanation: "Proving his predictions were right after years of skepticism means he was completely 'vindicated'."
    }
  },
  {
    id: 94,
    word: "Impede",
    pos: "verb",
    ipa: "/ɪmˈpiːd/",
    category: "Power & Society",
    difficulty: "Essential",
    definition: "To delay, prevent, or hinder someone or something by obstructing them; to stand in the way of.",
    turkishMeaning: "Engellemek, aksatmak, ayak bağı olmak, sekteye uğratmak",
    turkishNuance: "Latincedeki 'pes/pedis' (ayak) kökünden gelir (ayağına pranga vurmak). 'Catalyze' ve 'facilitate' (kolaylaştırmak) kelimelerinin doğrudan zıddıdır.",
    exampleSentence: "Severe supply chain bottlenecks threatened to impede the timely delivery of vital microchips to automotive manufacturers.",
    satDomain: "Economics / Industrial Logistics",
    sat2026HowTested: "'Hinder progress' bağlamında 'facilitate' veya 'expedite' zıddı olarak sorulur.",
    distractorTraps: [
      "Expedite (Hızlandırmak - tam zıt anlam)",
      "Impel (İtmek/şevk vermek - zıt etki)",
      "Impend (Eli kulağında olmak)"
    ],
    synonyms: ["Hinder", "Obstruct", "Hamper", "Inhibit", "Block"],
    antonyms: ["Facilitate", "Expedite", "Assist", "Aid", "Promote"],
    tone: "Obstructive / Restrictive / Negative",
    quiz: {
      passage: "Dense sea ice continued to _______ the research vessel's northward navigation, forcing the expedition team to anchor south of the fjord.",
      options: ["impede", "bolster", "ameliorate", "galvanize"],
      correct: 0,
      explanation: "The ice blocked, obstructed, and delayed the ship's forward progress ('impede')."
    }
  },
  {
    id: 95,
    word: "Feasible",
    pos: "adjective",
    ipa: "/ˈfiː.zə.bəl/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "Possible to do easily or conveniently; workable and practical.",
    turkishMeaning: "Yapılabilir, uygulanabilir, olası, fizibil",
    turkishNuance: "Bir projenin sadece hayalde kalmayıp bütçe, teknoloji ve zaman açısından hayata geçirilebilir olduğunu (financially feasible) belirtir.",
    exampleSentence: "With the recent breakthrough in battery energy density, fully electric commercial passenger flights have finally become technically feasible.",
    satDomain: "Technology / Aeronautics",
    sat2026HowTested: "'Practically achievable' durumlarında 'impractical' ve 'unworkable' zıddı olarak test edilir.",
    distractorTraps: [
      "Infeasible (Uygulanamaz - zıt anlam)",
      "Flexible (Esnek - ses benzerliği)",
      "Feeble (Zayıf/güçsüz)"
    ],
    synonyms: ["Workable", "Practicable", "Viable", "Achievable", "Attainable"],
    antonyms: ["Impractical", "Impossible", "Unworkable", "Infeasible", "Utopian"],
    tone: "Practical / Realistic / Achievable",
    quiz: {
      passage: "While building a lunar elevator is a captivating science-fiction concept, current materials science makes it completely _______ with existing carbon nanotubes.",
      options: ["infeasible", "feasible", "austere", "lucid"],
      correct: 0,
      explanation: "Current materials are inadequate, making the project unworkable and impossible ('infeasible')."
    }
  },
  {
    id: 96,
    word: "Nuance",
    pos: "noun",
    ipa: "/ˈnjuː.ɑːns/",
    category: "Complexity & Nuance",
    difficulty: "Essential",
    definition: "A subtle difference in or shade of meaning, expression, sound, or color.",
    turkishMeaning: "Nüans, ince ayrım, hassas detay, küçük ama önemli fark",
    turkishNuance: "DSAT 'Words in Context' sorularının özüdür. İki kelime sözlükte aynı gibi görünse de aralarındaki 'nuance' (bağlamsal ince fark) doğru cevabı belirler.",
    exampleSentence: "Translating classical poetry requires capturing not only literal vocabulary but also every delicate emotional nuance of the original meter.",
    satDomain: "Humanities / Translation Studies",
    sat2026HowTested: "'Subtle distinction in meaning' bağlamında kilit isim olarak sorulur.",
    distractorTraps: [
      "Nuisance (Rahatsızlık - yazım tuzağı!)",
      "Grossness (Kabataslaklık - zıt anlam)",
      "Homogeneity (Tekdüzelik)"
    ],
    synonyms: ["Subtlety", "Shade", "Refinement", "Distinction", "Gradation"],
    antonyms: ["Uniformity", "Bluntness", "Simplicity"],
    tone: "Refined / Analytical / Subtle",
    quiz: {
      passage: "The diplomat was renowned for detecting the slightest _______ of tone in bilateral communiqués, discerning hesitation beneath formal pleasantries.",
      options: ["nuance", "plethora", "dearth", "anachronism"],
      correct: 0,
      explanation: "Detecting subtle shifts in emotional shade or meaning is detecting 'nuance'."
    }
  },
  {
    id: 97,
    word: "Extrapolate",
    pos: "verb",
    ipa: "/ɪkˈstræp.ə.leɪt/",
    category: "Science & Research",
    difficulty: "Hard",
    definition: "To extend or project known data, trends, or methods into an unknown area in order to arrive at an estimated conclusion.",
    turkishMeaning: "Bilinen verilerden çıkarım yapmak, trendi geleceğe/bilinmeyene uyarlamak",
    turkishNuance: "İstatistikte eldeki grafiğin çizgisini ileriye doğru uzatarak geleceği tahmin etmektir (extrapolate future trends from historical data).",
    exampleSentence: "Climatologists used five decades of polar satellite measurements to extrapolate sea-level rise through the end of the twenty-first century.",
    satDomain: "Science / Data Science",
    sat2026HowTested: "'Project trends into future from known data' bağlamlarında sorulur.",
    distractorTraps: [
      "Interpolate (Bilinen noktaların arasını hesaplamak)",
      "Fabricate (Uydurmak)",
      "Stagnate (Sabit kalmak)"
    ],
    synonyms: ["Project", "Estimate", "Infer", "Deduce", "Generalize"],
    antonyms: ["Isolate", "Confine solely", "Ignore data"],
    tone: "Analytical / Predictive / Mathematical",
    quiz: {
      passage: "Economists cautioned that researchers could not safely _______ consumer behavior in low-income nations based solely on data gathered from wealthy metropolitan suburbs.",
      options: ["extrapolate", "undermine", "corroborate", "ameliorate"],
      correct: 0,
      explanation: "Extending findings from one known group to project onto an entirely different unknown group is to 'extrapolate'."
    }
  },
  {
    id: 98,
    word: "Divergent",
    pos: "adjective",
    ipa: "/daɪˈvɜː.dʒənt/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "Tending to be different or develop in different directions; deviating from a common point.",
    turkishMeaning: "Farklılaşan, ayrışan, birbirine zıt yönlere giden, ıraksak",
    turkishNuance: "'Convergent' (aynı noktada birleşen) kelimesinin tam zıddıdır. Evrimde ortak atadan farklılaşan türler (divergent evolution) veya iki filozofun ayrılan görüşleri için kullanılır.",
    exampleSentence: "Although the twin sisters were raised in the identical household environment, they developed remarkably divergent political philosophies.",
    satDomain: "Social Science / Psychology",
    sat2026HowTested: "'Developing in opposite/different directions' bağlamında 'convergent' zıddı olarak test edilir.",
    distractorTraps: [
      "Convergent (Birleşen - tam zıt anlam)",
      "Diligent (Çalışkan - ses tuzağı)",
      "Indigent (Muhtaç/fakir)"
    ],
    synonyms: ["Differing", "Varying", "Deviating", "Conflicting", "Dissenting"],
    antonyms: ["Convergent", "Similar", "Parallel", "Conforming", "Uniform"],
    tone: "Differentiating / Analytical",
    quiz: {
      passage: "Though both biographers examined the same historical letters, they reached strikingly _______ conclusions regarding the president’s true war motivations.",
      options: ["divergent", "scrupulous", "austere", "didactic"],
      correct: 0,
      explanation: "Reaching contrasting, different directions of conclusion from the same evidence describes 'divergent' interpretations."
    }
  },
  {
    id: 99,
    word: "Converge",
    pos: "verb",
    ipa: "/kənˈvɜːdʒ/",
    category: "Argumentation & Evidence",
    difficulty: "Essential",
    definition: "To tend to meet at a point; to come together from different directions; to gradually become similar.",
    turkishMeaning: "Aynı noktada birleşmek, kesişmek, yakınsamak, hemfikir olmak",
    turkishNuance: "'Diverge' kelimesinin zıddıdır. Farklı laboratuvarların yaptığı bağımsız deneylerin sonunda 'aynı bilimsel sonuca varması' (lines of evidence converge) durumunda DSAT'de çok sevilir.",
    exampleSentence: "Multiple independent lines of genetic, fossil, and linguistic evidence converge to support the Out-of-Africa model of human migration.",
    satDomain: "Anthropology / Evolutionary Genetics",
    sat2026HowTested: "'Independent evidence pointing to the same conclusion' bağlamlarında kilit fiil olarak sorulur.",
    distractorTraps: [
      "Diverge (Ayrılmak - tam zıt anlam)",
      "Converse (Sohbet etmek / zıddı)",
      "Convert (Dönüştürmek)"
    ],
    synonyms: ["Meet", "Intersect", "Unite", "Coincide", "Concur"],
    antonyms: ["Diverge", "Scatter", "Separate", "Disperse"],
    tone: "Unifying / Conclusive / Corroborating",
    quiz: {
      passage: "Although researchers utilized five distinct computer simulation models, their final predictions regarding ocean level rise began to _______ on a narrow twenty-centimeter range.",
      options: ["converge", "diverge", "obfuscate", "polarize"],
      correct: 0,
      explanation: "Independent models coming together to agree on the same narrow conclusion are beginning to 'converge'."
    }
  },
  {
    id: 100,
    word: "Dispassionate",
    pos: "adjective",
    ipa: "/dɪsˈpæʃ.ən.ət/",
    category: "Rhetoric & Tone",
    difficulty: "Hard",
    definition: "Not influenced by strong emotion, and so able to be rational, objective, and impartial.",
    turkishMeaning: "Tarafsız, duygulardan bağımsız, soğukkanlı, nesnel",
    turkishNuance: "'Passionate' kelimesinin zıddıdır ama 'apathetic' (ilgisiz) DEĞİLDİR! Bir hakimin veya bilim insanının duygularına kapılmadan olaylara 'tam bir soğukkanlılık ve objektiflikle' yaklaşmasıdır.",
    exampleSentence: "The appellate judge offered a dispassionate legal analysis of the constitutional dispute, disregarding the impassioned political protests outside the courthouse.",
    satDomain: "Legal Studies / Constitutional Law",
    sat2026HowTested: "DSAT Reading yazarın tutumu (tone / perspective) sorularında objektif ve bilimsel metinlerin en ideal niteleyicisi olarak sorulur.",
    distractorTraps: [
      "Passionate (Tutkulu/duygusal - tam zıt anlam)",
      "Compassionate (Merhametli - ses tuzağı)",
      "Apathetic (Umursamaz/ilgisiz - bu duygu yokluğu değil, tarafsızlıktır)"
    ],
    synonyms: ["Impartial", "Objective", "Unbiased", "Detached", "Disinterested"],
    antonyms: ["Biased", "Passionate", "Emotional", "Partisan", "Prejudiced"],
    tone: "Objective / Impartial / Rational",
    quiz: {
      passage: "A peer-reviewed scientific paper requires a _______ presentation of experimental results, avoiding sensational hyperbole or emotional rhetoric.",
      options: ["dispassionate", "didactic", "visceral", "specious"],
      correct: 0,
      explanation: "Avoiding hyperbole and emotional rhetoric means presenting data rationally, objectively, and impartially ('dispassionate')."
    }
  }
];

// Provide global access
if (typeof window !== 'undefined') {
  window.SAT_WORDS_DATA = SAT_WORDS_DATA;
}
