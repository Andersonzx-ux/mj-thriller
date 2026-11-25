window.album = {
    title: "Thriller",
    artist: "Michael Jackson",
    releaseDate: "30 de novembro de 1982",
    recordingDate: "abril a novembro de 1982",
    genre: "Pop / R&B / Funk",
    labels: ["Epic"],
    cover: "assets/cover.jpg",
    // Paleta medida na capa (assets/cover.jpg) — ver tools/medir_paleta.py
    // Duas versões feitas só com estas cores: Noite (o palco preto com o refletor) e Dia (o terno branco-esverdeado).
    palette: {
        black: "#020701",    // fundo preto do estúdio
        shirt: "#16140D",    // camisa preta
        suit: "#E8F0DC",     // terno branco (luz)
        suitmid: "#B4BFB8",  // terno branco (meio-tom)
        glow: "#9DA99D",     // halo azulado em volta do terno
        spot: "#F1F1D8",     // refletor no topo
        skin: "#9A552C",     // pele (bronze)
        lip: "#994224",      // tom quente da boca
        pink: "#D8A494",     // início da assinatura (rosa)
        peach: "#E6CBA5",    // meio da assinatura (pêssego)
        cream: "#ECE1CA",    // fim da assinatura (creme)
        leopard: "#7D6243",  // lenço de estampa de onça
        glass: "#65736A"     // vidro quadriculado da mesa
    },
    description: "Sexto álbum de estúdio de Michael Jackson, produzido por Quincy Jones e lançado em 30 de novembro de 1982. Estima-se que seja o álbum mais vendido da história, com cerca de 70 milhões de cópias, e dele saíram sete singles no Top 10 dos EUA, entre eles \"Billie Jean\", \"Beat It\" e \"Thriller\".",
    totalDuration: "42:19",
    awards: [
        { award: "Álbum do Ano", result: "Vencedor", year: "1984", category: "Grammy Awards", description: "Thriller levou 8 Grammys na mesma noite, recorde da época." },
        { award: "Álbum mais vendido da história", result: "Estimativa", year: "", category: "Vendas", description: "Cerca de 70 milhões de cópias em todo o mundo (estimativa)." }
    ],
    technicalCredits: {
        production: ["Quincy Jones"],
        recording: ["Bruce Swedien"],
        studios: ["Westlake Recording Studios (Los Angeles)"],
        photography: "Dick Zimmerman"
    },
    // CONFIRA os nomes dos arquivos de áudio (audio/01.flac … 09.flac) e a ordem das faixas.
    // Letras (.lrc em `lyrics`) e tradução (`translation`) são opcionais; a duração aparece sozinha ao tocar.
    tracks: [
        {
            number: 1,
            title: "Wanna Be Startin' Somethin'",
            duration: "6:03",
            composers: ["Michael Jackson"],
            audio: "audio/01.flac",
            lyrics: `[00:24.86]I said you wanna be startin' somethin'
[00:26.85]You got to be startin' somethin'
[00:28.46]I said you wanna be startin' somethin'
[00:30.42]You got to be startin' somethin'
[00:32.25]It's too high to get over (yeah, yeah)
[00:34.63]You're too low to get under (yeah, yeah)
[00:36.43]You're stuck in the middle (yeah, yeah)
[00:38.54]And the pain is thunder (yeah, yeah)
[00:40.90]It's too high to get over (yeah, yeah)
[00:42.90]You're too low to get under (yeah, yeah)
[00:44.81]You're stuck in the middle (yeah, yeah)
[00:46.92]And the pain is thunder (yeah, yeah)
[00:48.83]I took my baby to the doctor
[00:50.09]With a fever, but nothin' he found
[00:51.98]By the time this hit the street
[00:53.77]They said she had a breakdown
[00:56.05]Someone's always tryin' to start my baby cryin'
[01:00.00]Talkin', squealin', lyin'
[01:01.83]Sayin' you just want to be startin' somethin'
[01:03.94]I said you wanna be startin' somethin'
[01:05.86]You got to be startin' somethin'
[01:07.89]I said you wanna be startin' somethin'
[01:09.88]You got to be startin' somethin'
[01:11.70]It's too high to get over (yeah, yeah)
[01:14.09]Too low to get under (yeah, yeah)
[01:15.87]You're stuck in the middle (yeah, yeah)
[01:17.74]And the pain is thunder (yeah, yeah)
[01:19.79]It's too high to get over (yeah, yeah)
[01:21.89]You're too low to get under (yeah, yeah)
[01:23.73]You're stuck in the middle (yeah, yeah)
[01:25.60]And the pain is thunder (yeah, yeah)
[01:27.56]You love to pretend that you're good
[01:29.49]When you're always up to no good
[01:31.47]You really can't make him hate her
[01:33.39]So your tongue became a razor
[01:35.34]Someone's always tryin' to start my baby cryin'
[01:39.20]Treacherous, cunnin', declinin'
[01:41.21]You got my baby cryin' (hee)
[01:44.59]I said you wanna be startin' somethin'
[01:45.41]You got to be startin' somethin'
[01:47.12]I said you wanna be startin' somethin'
[01:49.30]You got to be startin' somethin'
[01:51.03]It's too high to get over (yeah, yeah)
[01:53.15]Too low to get under (yeah, yeah)
[01:55.10]You're stuck in the middle (yeah, yeah)
[01:57.02]And the pain is thunder (yeah, yeah)
[01:58.92]It's too high to get over (yeah, yeah)
[02:01.05]You're too low to get under (yeah, yeah)
[02:02.92]You're stuck in the middle (yeah, yeah)
[02:04.96]And the pain is thunder (yeah, yeah)
[02:06.80]You're a vegetable (you're a vegetable)
[02:09.09]You're a vegetable (you're a vegetable)
[02:10.95]Still, they hate you (still, they hate you)
[02:12.88]You're a vegetable (you're a vegetable)
[02:14.69]You're just a buffet (you're just a buffet)
[02:16.75]You're a vegetable (you're a vegetable)
[02:18.64]They eat off of you (they eat off of you)
[02:20.64]You're a vegetable, ow!
[02:30.15]Billie Jean is always talkin' when nobody else is talkin'
[02:34.34]Tellin' lies and rubbin' shoulders
[02:36.38]So they called her mouth a motor
[02:38.34]Someone's always tryin'
[02:40.11]To start my baby cryin'
[02:42.27]Talkin', squealin', spyin'
[02:44.02]Sayin' you just want to be startin' somethin'
[02:46.32]I said you wanna be startin' somethin'
[02:48.04]You got to be startin' somethin'
[02:50.06]I said you wanna be startin' somethin'
[02:52.07]You got to be startin' somethin'
[02:54.19]It's too high to get over (yeah, yeah)
[02:56.18]Too low to get under (yeah, yeah)
[02:58.02]You're stuck in the middle (yeah, yeah)
[03:00.02]And the pain is thunder (yeah, yeah)
[03:01.98]It's too high to get over (yeah, yeah)
[03:03.98]Too low to get under (yeah, yeah)
[03:05.80]You're stuck in the middle (yeah, yeah)
[03:07.70]And the pain is thunder (yeah, yeah)
[03:09.66]You're a vegetable (you're a vegetable)
[03:11.83]You're a vegetable (you're a vegetable)
[03:13.86]Still, they hate you (still, they hate you)
[03:15.72]You're a vegetable (you're a vegetable)
[03:17.55]You're just a buffet (you're just a buffet)
[03:19.65]You're a vegetable (you're a vegetable)
[03:21.58]They eat off of you (they eat off of you)
[03:23.47]You're a vegetable, ow!
[03:33.26]Ow!
[03:40.67]Hee-hee-hee, ha (ooh!)
[03:48.86]If you can't feed your baby (yeah, yeah)
[03:50.92]Then don't have a baby (yeah, yeah)
[03:52.91]And don't think maybe (yeah, yeah)
[03:54.85]If you can't feed your baby (yeah, yeah)
[03:56.94]You'll be always tryin'
[03:58.78]To stop that child from cryin'
[04:00.95]Hustlin', stealin', lyin'
[04:02.69]Now, baby's slowly dyin'
[04:04.82]I said you wanna be startin' somethin'
[04:06.88]You got to be startin' somethin'
[04:08.73]I said you wanna be startin' somethin'
[04:10.68]You got to be startin' somethin'
[04:12.45]It's too high to get over (yeah, yeah)
[04:14.73]You're too low to get under (yeah, yeah)
[04:16.67]You're stuck in the middle (yeah, yeah)
[04:18.57]And the pain is thunder (yeah, yeah)
[04:20.35]It's too high to get over (yeah, yeah)
[04:22.46]You're too low to get under (yeah, yeah)
[04:24.46]You're stuck in the middle (yeah, yeah)
[04:26.35]And the pain is thunder (yeah, yeah)
[04:28.16]Lift your head up high and scream out to the world
[04:31.63]"I know I am someone," and let the truth unfurl (hee-ha)
[04:35.90]No one can hurt you now, because you know what's true
[04:39.43]Yes, I believe in me, so you believe in you
[04:42.85]Help me sing it
[04:43.85]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hoo-hoo)
[04:46.08]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hee-hee-hee)
[04:48.03]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hee-hee-hee)
[04:49.82]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[04:51.84]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (help me sing it, babe)
[04:54.00]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hee-hee-hee)
[04:56.08]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[04:57.88]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (yeah, sing it to the world)
[04:59.93]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (sing it out loud)
[05:02.03]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hoo-hoo)
[05:03.82]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:05.81]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (help me sing it)
[05:07.79]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:09.71]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hoo-hoo)
[05:11.63]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hee-hee)
[05:13.47]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (help me sing)
[05:15.55]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:18.02]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:19.32]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:21.38]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (sing it to the world)
[05:23.39]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:25.30]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:27.23]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:29.26]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:31.06]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:33.19]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:35.02]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:37.08]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:38.88]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hoo-hoo)
[05:40.96]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hoo-hoo)
[05:42.93]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hee-hee-hee)
[05:44.83]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa
[05:46.84]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (help me sing, babe)
[05:48.77]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hee-hee-hee)
[05:50.65]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (yeah)
[05:52.69]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (sing it to the world)
[05:54.58]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (sing it out loud)
[05:56.73]Ma-ma-se, ma-ma-sa, ma-ma-coo-sa (hoo-hoo)
[05:58.36]`
        },
        {
            number: 2,
            title: "Baby Be Mine",
            duration: "4:20",
            composers: ["Rod Temperton"],
            audio: "audio/02.flac",
            lyrics: `[00:19.77] I don't need no dreams when I'm by your side, ooh-ooh
[00:28.92] Every moment takes me to paradise
[00:35.40] Darling, let me hold you
[00:40.13] I'll warm you in my arms and melt your fears away
[00:46.32] Show you all the magic that a perfect love can make
[00:54.37] I need you night and day
[00:56.59] So baby, be mine (Baby, you got to be mine)
[01:01.10] And girl I'll give you all I got to give
[01:05.02] So baby, be my girl (All the time)
[01:10.02] And we can share this ecstasy
[01:11.93] As long as we believe in love
[01:16.44] 
[01:23.50] I won't give you reason to change your mind
[01:29.99] (I can't sit still, you thrill me, baby, be mine)
[01:32.56] You are all the future that I desire
[01:39.36] Girl, I need to hold you
[01:43.34] Share my feelings in the heat of love's embrace
[01:49.61] Show you all the passion burning in my heart today
[01:58.17] It's never going to fade
[01:59.91] So baby, be mine (Baby, you got to be mine)
[02:04.72] And girl I'll give you all I got to give
[02:08.54] So baby, be my girl (All the time)
[02:13.54] You're everything this world could be
[02:15.71] The reason that I live, oh
[02:18.46] Won't you stay with me until the morning sun
[02:22.68] I promise you now that the dawn will be different
[02:27.13] Lady can't you see that heaven's just begun
[02:31.66] It's living here inside our hearts
[02:37.75] There'll be no more mountains for us to climb
[02:43.89] (I can't be still, you thrill me, baby, be mine)
[02:46.72] This will be a love lasting for all time
[02:53.36] Girl, you got to hold me
[02:57.87] We can touch the sky and light the darkest day
[03:04.05] Hold me, only you and I can make sweet love this way
[03:12.36] There's no more I can say
[03:14.30] So baby, be mine (Baby be mine, baby you got to be mine)
[03:19.17] And girl I'll give you all I got to give (Say you're thinking of me)
[03:23.13] So baby, be my girl (All the time, show me how it should be, hold me tight)
[03:28.00] You're everything this world could be (Every night)
[03:29.97] The reason that I live (It's alright, every night)
[03:31.95] Baby, be my girl (Tell me that you love me, all the time)
[03:36.62] And girl I'll give you all I got to give (Say you're thinking of me)
[03:40.60] So baby, be mine, baby, be mine (Show me how it should be, hold me tight)
[03:45.35] You're everything this world could be to me (Every night, it's alright)
[03:49.41] C'mon, girl, c'mon, girl (Tell me that you love me, all the time)
[03:56.67] (Say you're thinking of me)
[03:57.91] So baby, be mine (Show me how it should be, hold me tight)
[04:02.96] You're everything this world could be to me (Every night, it's alright)
[04:07.68] C'mon, girl, c'mon, girl (Tell me that you love me, all the time)
[04:11.49] Baby be mine (All the time)
[04:14.37] (Say you're thinking of me)
[04:15.70] So baby, be mine, girl
[04:17.22] `
        },
        {
            number: 3,
            title: "The Girl Is Mine (com Paul McCartney)",
            duration: "3:42",
            composers: ["Michael Jackson"],
            audio: "audio/03.flac",
            lyrics: `[00:12.36] Every night she walks right in my dreams
[00:15.13] Since I met her from the start
[00:18.27] I'm so proud I am the only one
[00:21.22] Who is special in her heart
[00:23.45] The girl is mine
[00:28.85] The doggone girl is mine
[00:33.10] 
[00:35.28] I know she's mine
[00:40.07] Because the doggone girl is mine
[00:45.27] 
[00:47.66] I don't understand the way you think
[00:50.57] Saying that she's yours not mine
[00:53.46] Sending roses and your silly dreams
[00:56.42] Really just a waste of time
[00:59.01] Because she's mine
[01:04.25] The doggone girl is mine
[01:08.31] 
[01:10.64] Don't waste your time
[01:15.48] Because the doggone girl is mine
[01:20.35] 
[01:22.45] I love you more than he
[01:26.09] (Take you anywhere)
[01:28.12] Well, I love you endlessly
[01:31.98] (Loving we will share)
[01:33.23] So come and go with me
[01:37.38] To one's town
[01:40.55] But we both cannot have her
[01:43.23] So it's one or the other
[01:46.47] And one day you'll discover
[01:49.37] That she's my girl forever and ever
[01:52.55] Don't build your hopes to be let down
[01:55.66] 'Cause I really feel it's time
[01:57.96] I know she'll tell you I'm the one for her
[02:01.55] 'Cause she said I blow her mind
[02:03.76] The girl is mine
[02:05.72] The doggone girl is mine
[02:12.49] 
[02:15.59] Don't waste your time
[02:20.43] Because the doggone girl is mine
[02:23.45] She's mine, she's mine
[02:25.74] No, no, no, she's mine
[02:27.58] The girl is mine, the girl is mine
[02:30.44] The girl is mine, the girl is mine
[02:33.32] The girl is mine (mine, mine)
[02:36.64] Yep, she's mine (mine, mine)
[02:39.41] The girl is mine (mine, mine)
[02:42.18] Yeah, she's mine (mine, mine)
[02:45.07] Don't waste your time
[02:49.92] Because the doggone girl is mine
[02:52.83] The girl is mine, the girl is mine
[02:59.92] Michael, we're not going to fight about this, okay?
[03:03.41] Paul, I think I told you, I'm a lover not a fighter
[03:09.39] I've heard it all before, Michael, she told me that I'm her forever lover
[03:12.41] You know, don't you remember?
[03:14.33] Well, after loving me, she said she couldn't love another
[03:16.97] Is that what she said?
[03:18.35] Yes, she said it, you keep dreaming
[03:20.32] I don't believe it (mine, mine)
[03:23.62] The girl is mine (mine, mine)
[03:25.88] No, mine
[03:28.49] She's mine, mine, mine (mine, mine, mine, mine)
[03:31.70] 'Cause the girl is mine (mine, mine)
[03:34.03] The girl is mine (mine, mine)
[03:35.66] Girl is mine...
[03:37.94] `
        },
        {
            number: 4,
            title: "Thriller",
            duration: "5:57",
            composers: ["Rod Temperton"],
            audio: "audio/04.flac",
            lyrics: `[00:59.43] It's close to midnight and something evil's lurking in the dark
[01:07.22] Under the moonlight, you see a sight that almost stops your heart
[01:13.67] You try to scream, but terror takes the sound before you make it
[01:21.59] And you start to freeze as horror looks you right between the eyes
[01:27.10] You're paralyzed
[01:29.61] 'Cause this is thriller, thriller night
[01:34.12] And no one's gonna save you from the beast about to strike
[01:37.92] You know it's thriller, thriller night
[01:42.30] You're fighting for your life inside a killer, thriller tonight, yeah
[01:52.89] Ooh
[01:56.16] You hear the door slam, and realize there's nowhere left to run
[02:03.96] And you feel the cold hand and wonder if you'll ever see the sun
[02:10.14] And you close your eyes and hope that this is just imagination (girl)
[02:18.51] But all the while, you hear a creature creepin' up behind
[02:24.37] You're out of time
[02:26.31] 'Cause this is thriller, thriller night
[02:30.82] There ain't no second chance against the thing with 40 eyes, girl
[02:35.34] Thriller (ooh), thriller night
[02:39.04] You're fighting for your life inside a killer, thriller tonight
[02:45.61] Night creatures call
[02:47.25] And the dead start to walk in their masquerade
[02:53.38] There's no escaping the jaws of the alien this time
[02:58.33] (They're open wide) this is the end of your life
[03:04.56] Ooh
[03:06.95] They're out to get you, there's demons closing in on every side (ooh)
[03:15.09] They will possess you unless you change that number on your dial
[03:21.12] Now is the time for you and I to cuddle close together, yeah
[03:29.06] All through the night, I'll save you from the terror on the screen
[03:35.27] I'll make you see
[03:37.35] That this is thriller, thriller night
[03:41.76] 'Cause I can thrill you more than any ghoul would ever dare try
[03:46.30] Thriller (ooh), thriller night
[03:49.87] So let me hold you tight and share a killer, diller, chiller, thriller
[03:56.23] Here tonight
[03:58.30] 'Cause this is thriller, thriller night
[04:02.17] Girl, I can thrill you more than any ghoul would ever dare try
[04:06.45] Thriller (ooh), thriller night
[04:10.12] So let me hold you tight and share a killer, thriller (ow!)
[04:16.20] 
[04:22.20] I'm gonna thrill you tonight
[04:24.05] Darkness falls across the land
[04:28.11] The midnight hour is close at hand
[04:31.47] Creatures crawl in search of blood
[04:34.91] To terrorize y'all's neighborhood
[04:38.46] I'm gonna thrill you tonight
[04:39.39] And whosoever shall be found
[04:41.69] Without the soul for getting down
[04:46.27] Must stand and face the hounds of Hell
[04:50.41] And rot inside a corpse's shell
[04:54.23] I'm gonna thrill you tonight (thriller)
[04:56.81] Ooh, baby (thriller), I'm gonna thrill you tonight (thriller night, killer)
[05:01.11] Oh, darling (oh, baby), I'm gonna thrill you tonight (thriller)
[05:04.68] Ooh-ooh, baby (thriller night), I'm gonna thrill you tonight (thriller)
[05:08.91] Oh, darling (oh, baby), thriller night, baby (thriller night, baby)
[05:13.15] Ooh
[05:14.65] The foulest stench is in the air
[05:17.36] The funk of forty thousand years (thriller, thriller night)
[05:20.75] And grisly ghouls from every tomb (I'm gonna thrill you tonight, thriller)
[05:23.69] Are closing in to seal your doom (ooh, baby, oh yeah)
[05:28.32] And though you fight to stay alive (ooh, I'm gonna thrill you tonight)
[05:31.62] Your body starts to shiver (I'm gonna thrill you tonight)
[05:35.43] For no mere mortal can resist (thriller, thriller tonight)
[05:39.38] The evil of the thriller
[05:41.33] `
        },
        {
            number: 5,
            title: "Beat It",
            duration: "4:18",
            composers: ["Michael Jackson"],
            audio: "audio/05.flac",
            lyrics: `[00:38.30] They told him, "Don't you ever come around here"
[00:41.42] "Don't wanna see your face, you better disappear"
[00:44.79] The fire's in their eyes and their words are really clear
[00:47.96] So beat it, just beat it
[00:52.02] You better run, you better do what you can
[00:55.13] Don't wanna see no blood, don't be a macho man
[00:58.55] You wanna be tough, better do what you can
[01:01.70] So beat it, but you wanna be bad
[01:05.32] Just beat it (beat it), beat it (beat it)
[01:09.14] No one wants to be defeated
[01:12.50] Showin' how funky and strong is your fight
[01:15.84] It doesn't matter who's wrong or right
[01:19.22] Just beat it (beat it)
[01:21.07] Just beat it (beat it)
[01:22.61] Just beat it (beat it)
[01:24.33] Just beat it (beat it, uh)
[01:26.82] They're out to get you, better leave while you can
[01:29.73] Don't wanna be a boy, you wanna be a man
[01:33.01] You wanna stay alive, better do what you can
[01:36.54] So beat it, just beat it
[01:40.48] You have to show them that you're really not scared
[01:43.50] You're playin' with your life, this ain't no truth or dare
[01:47.08] They'll kick you, then they'll beat you
[01:48.78] Then they'll tell you it's fair
[01:50.25] So beat it, but you wanna be bad
[01:53.84] Just beat it (beat it), beat it (beat it)
[01:57.29] No one wants to be defeated
[02:00.64] Showin' how funky and strong is your fight
[02:04.31] It doesn't matter who's wrong or right
[02:07.59] Just beat it (beat it), beat it (beat it)
[02:11.25] No one wants to be defeated
[02:14.52] Showin' how funky and strong is your fight
[02:18.22] It doesn't matter who's wrong or right
[02:21.34] Just beat it (beat it, beat it, beat it)
[02:24.58] Beat it (beat it, beat it)
[02:28.03] 
[02:31.04] Beat it (beat it, beat it)
[02:33.88] Beat it (beat it, beat it)
[02:37.19] 
[02:40.84] Beat it (beat it, beat it)
[02:44.03] 
[03:17.04] Beat it (beat it), beat it (beat it)
[03:20.49] No one wants to be defeated
[03:23.79] Showin' how funky and strong is your fight
[03:27.25] It doesn't matter who's wrong or right (who's right)
[03:30.44] Just beat it (beat it), beat it (beat it)
[03:34.21] No one wants to be defeated (no one)
[03:37.63] Showin' how funky and strong is your fight
[03:41.26] It doesn't matter who's wrong or right
[03:44.45] Just beat it (beat it), beat it (beat it)
[03:48.05] No one wants to be defeated (oh, no)
[03:51.40] Showin' how funky and strong is your fight
[03:54.86] It doesn't matter who's wrong or right
[03:58.20] Just beat it (beat it), beat it (beat it)
[04:01.99] No one wants to be defeated
[04:05.36] Showin' how funky and strong is your fight
[04:08.98] It doesn't matter who's wrong or right
[04:12.07] Just beat it (beat it), beat it (beat it)
[04:13.52] `
        },
        {
            number: 6,
            title: "Billie Jean",
            duration: "4:54",
            composers: ["Michael Jackson"],
            audio: "audio/06.flac",
            lyrics: `[00:29.27] She was more like a beauty queen from a movie scene
[00:33.22] I said, "Don't mind, but what do you mean I am the one
[00:38.56] Who will dance on the floor in the round?"
[00:43.40] She said I am the one
[00:46.77] Who will dance on the floor in the round
[00:50.77] 
[00:53.73] She told me her name was Billie Jean as she caused a scene
[00:57.86] Then every head turned with eyes that dreamed of being the one
[01:03.16] Who will dance on the floor in the round
[01:09.92] People always told me, "Be careful of what you do
[01:13.89] Don't go around breaking young girls' hearts" (hee-eeh)
[01:17.83] And mother always told me, "Be careful of who you love
[01:21.92] And be careful of what you do (oh, oh)
[01:23.87] 'Cause the lie becomes the truth" (oh, oh), eh-eh
[01:26.62] Billie Jean is not my lover, uh
[01:30.63] She's just a girl who claims that I am the one (oh, baby)
[01:36.04] But the kid is not my son (ooh!), uh
[01:40.93] She says I am the one (oh, baby)
[01:44.09] But the kid is not my son
[01:47.09] (Hee-hee-hee, hee-hee-hee, ooh!) no, no
[01:51.09] For 40 days and for 40 nights, I was on her side
[01:55.36] But who can stand when she's in demand? Her schemes and plans
[02:00.46] 'Cause we danced on the floor in the round (hee)
[02:05.43] So take my strong advice
[02:08.44] Just remember to always think twice
[02:12.74] (Don't think twice!) Do think twice! (Ah-hoo)
[02:15.62] She told my baby we'd danced 'til 3:00, then she looked at me
[02:19.97] Then showed a photo of a baby crying, his eyes were like mine (oh, no)
[02:25.18] 'Cause we danced on the floor in the round, baby
[02:29.30] (Ooh, hee-hee-hee)
[02:31.84] People always told me, "Be careful of what you do
[02:35.40] And don't go around breaking young girls' hearts" (don't break no hearts)
[02:39.57] But she came and stood right by me
[02:41.77] Just the smell of sweet perfume
[02:43.87] This happened much too soon
[02:46.07] She called me to her room, hey
[02:48.53] Billie Jean is not my lover (hoo)
[02:52.60] She's just a girl who claims that I am the one, uh
[02:57.83] But the kid is not my son
[03:01.10] No-no-no, no-no-no-no-no-no (hoo)
[03:05.12] Billie Jean is not my lover, uh
[03:08.83] She's just a girl who claims that I am the one (oh, baby)
[03:13.94] But the kid is not my son (no, no)
[03:19.14] She says I am the one (oh, baby)
[03:22.11] But the kid is not my son
[03:26.66] (No, hee-hee)
[03:30.68] Hee! Hoo!
[03:34.98] 
[03:43.76] She says I am the one, uh
[03:46.99] But the kid is not my son
[03:50.57] No-no-no, hoo (oh)
[03:54.25] Billie Jean is not my lover
[03:58.18] She's just a girl who claims that I am the one (you know what you did to me, baby)
[04:03.64] But the kid is not my son
[04:06.22] No-no-no, no-no-no-no
[04:08.22] She says I am the one (no)
[04:11.38] But the kid is not my son (no-no-no)
[04:16.47] She says I am the one (you know what you did)
[04:20.54] She says he is my son (breakin' my heart, babe)
[04:24.77] She says I am the one
[04:26.75] Yeah, Billie Jean is not my lover, uh
[04:30.85] Yeah, Billie Jean is not my lover, uh
[04:35.00] Yeah, Billie Jean is not my lover, uh
[04:38.96] Yeah, Billie Jean is not my lover, uh (don't call me Billie Jean, hoo)
[04:43.02] Billie Jean is not my lover, uh (she's not at the scene)
[04:47.47] Yeah, Billie Jean is not...
[04:49.05] `
        },
        {
            number: 7,
            title: "Human Nature",
            duration: "4:06",
            composers: ["Steve Porcaro", "John Bettis"],
            audio: "audio/07.flac",
            lyrics: `[00:10.72] Looking out
[00:13.35] Across the nighttime
[00:16.06] The city winks a sleepless eye
[00:21.01] Hear her voice
[00:24.05] Shake my window
[00:26.55] Sweet seducing sighs
[00:31.33] Get me out
[00:34.29] Into the nighttime
[00:36.74] Four walls won't hold me tonight
[00:41.69] If this town
[00:44.42] Is just an apple
[00:46.94] Then let me take a bite
[00:50.98] If they say
[00:52.15] Why (why?), why (why?)
[00:54.33] Tell 'em that it's human nature
[00:57.03] Why (why?), why (why?)
[00:59.48] Does he do me that way?
[01:01.35] If they say
[01:02.25] Why (why?), why (why?)
[01:04.88] Tell 'em that it's human nature
[01:07.42] Why (why?), why (why?)
[01:09.61] Does he do me that way?
[01:12.71] Reaching out
[01:15.54] To touch a stranger
[01:18.16] Electric eyes are everywhere
[01:22.82] See that girl
[01:25.42] She knows I'm watching
[01:28.23] She likes the way I stare
[01:32.21] If they say
[01:33.27] Why (why?), why (why?)
[01:35.72] Tell 'em that it's human nature
[01:38.43] Why (why?), why (why?)
[01:40.64] Does he do me that way?
[01:42.68] If they say
[01:43.75] Why (why?), why (why?)
[01:46.20] Tell 'em that it's human nature
[01:48.74] Why (why?), why (why?)
[01:50.90] Does he do me that way?
[01:53.28] I like livin' this way
[01:56.09] I like lovin' this way
[01:59.46] 
[02:03.58] (That way) Why? Ho why?
[02:08.70] (That way) Why? Ho why?
[02:14.53] Looking out
[02:17.57] Across the morning
[02:19.96] Where the city's heart begins to beat
[02:24.86] Reaching out
[02:27.51] I touch her shoulder
[02:30.24] I'm dreaming of the street
[02:34.02] If they say
[02:35.17] Why (why?), why (why?)
[02:37.62] Tell 'em that it's human nature
[02:40.35] Why (why?), why (why?)
[02:42.38] Does he do me that way?
[02:44.53] If they say
[02:45.59] Why (why?), why (why?) (She's keeping him by, keeping him around)
[02:48.65] Hoo tell 'em
[02:50.66] Why (why?), why (why?)
[02:52.62] Does he do me that way?
[02:54.78] If they say
[02:55.67] Why (why?), why (why?)
[02:58.40] Cha, da, cha, sha, sha, sha, sha, sha (aah-ah)
[03:00.91] Why (why?), why (why?)
[03:03.10] Does he do me that way?
[03:04.92] If they say
[03:06.29] Why (why?), why (why?) (She's keeping him by, keeping him around)
[03:09.07] Hoo tell 'em
[03:11.42] Why (why?), why (why?)
[03:13.24] Does he do me that way?
[03:15.45] If they say
[03:16.31] Why (why?), why (why?)
[03:19.21] Hoo tell 'em
[03:21.64] Why (why?), why (why?)
[03:23.60] Does he do me that way
[03:25.84] If they say why
[03:26.72] Why (why?), why (why?) (She's keeping him by, keeping him around)
[03:29.27] Da, da, da, da, da, da, da, da
[03:31.81] Why (why?), why (why?)
[03:34.13] Does he do my that way?
[03:36.72] I like living this way
[03:38.84] Why? Oh, why? (that way)
[03:44.22] Why? Oh, why? (that way)
[03:49.25] Why? Oh, why? (that way)
[03:54.04] `
        },
        {
            number: 8,
            title: "P.Y.T. (Pretty Young Thing)",
            duration: "3:59",
            composers: ["Quincy Jones", "James Ingram"],
            audio: "audio/08.flac",
            lyrics: `[00:01.40] You know you, you make me feel so good inside
[00:06.53] I always wanted a girl just like you
[00:08.87] Such a P.Y.T., Pretty Young Thing, ooh
[00:16.26] Where did you come from, lady?
[00:18.76] And, ooh, won't you take me there
[00:20.81] Right away, won't you, baby?
[00:23.34] Tenderoni, you've got to be
[00:25.62] Spark my nature, sugar fly with me
[00:29.47] Don't you know now is the perfect time?
[00:34.21] We can make it right, hit the city lights
[00:37.15] Then tonight, ease the loving pain
[00:41.98] Let me take you to the max
[00:44.63] I want to love you (P.Y.T.)
[00:47.29] Pretty young thing
[00:48.65] You need some loving (T.L.C.)
[00:50.96] Tender love and care
[00:52.31] And I'll take you there, girl, ooh-oh
[00:57.78] I want to love you (P.Y.T.)
[01:00.37] Pretty young thing
[01:01.79] You need some loving (T.L.C.)
[01:04.11] Tender love and care
[01:05.41] And I'll take you there
[01:11.43] (Anywhere you want to go) yes, I will, ooh!
[01:16.49] Nothing can stop this burning desire to be with you
[01:21.26] Got to get to you, baby
[01:23.62] Won't you come, it's emergency
[01:26.23] Cool my fire yearning
[01:27.85] Honey, come set me free
[01:29.50] Don't you know now is the perfect time?
[01:34.31] We can dim the lights, just to make it right
[01:37.54] In the night, hit the loving spot
[01:42.30] I'll give you all that I've got
[01:45.04] I want to love you (P.Y.T.)
[01:47.42] Pretty young thing
[01:48.77] You need some loving (T.L.C.)
[01:51.11] Tender love and care
[01:52.43] And I'll take you there, yes, I will, yes, I will
[01:58.32] I want to love you (P.Y.T.)
[02:00.73] Pretty young thing
[02:01.81] You need some loving (T.L.C.)
[02:04.44] Tender love and care
[02:05.88] And I'll take you there
[02:08.50] Yes, I will, hee-eh
[02:14.08] (Uh!)
[02:16.18] (Ha, ha, ha, ha)
[02:21.65] (Uh!)
[02:23.84] (Ha, ha, ha)
[02:25.29] Pretty young things, repeat after me
[02:28.54] Sing, "na-na-na" (Na-na-na)
[02:32.81] "Na-na-na-na" (Na-na-na-na)
[02:36.09] Sing, "na-na-na" (Na-na-na)
[02:39.95] "Na-na-na-na" (Na-na-na-na)
[02:42.62] I will take you there, take you there
[02:47.22] I want to love you (P.Y.T.)
[02:49.64] Pretty young thing
[02:50.98] You need some loving (T.L.C.)
[02:53.54] Tender love and care
[02:54.78] And I'll take you there, take you there, take you there
[03:00.34] I want to love you (P.Y.T.)
[03:02.74] Pretty young thing
[03:04.39] You need some loving (T.L.C.)
[03:06.49] Tender love and care
[03:08.05] And I'll take you there, take you there, hoo-ooh
[03:14.14] Hoo-ooh! (P.Y.T.)
[03:17.91] Oh, baby (T.L.C)
[03:19.83] Oh, baby
[03:21.96] Hold on, ooh-ooh
[03:24.85] You know, I think you're really nice (P.Y.T.)
[03:29.25] You and I could've just put together (T.L.C)
[03:32.90] You're such a P.Y.T. to me, pretty young thing
[03:37.86] Oh, baby, oh, baby, hold on (P.Y.T.)
[03:43.30] Oh, baby (T.L.C)
[03:48.29] You can be, oh
[03:52.76] I just wanna love you, you know, it's
[03:56.68] I'd give you all
[03:57.64] `
        },
        {
            number: 9,
            title: "The Lady in My Life",
            duration: "5:00",
            composers: ["Rod Temperton"],
            audio: "audio/09.flac",
            lyrics: `[00:22.32] There'll be no darkness tonight
[00:24.93] Lady our love will shine
[00:29.85] (Lighting the night)
[00:33.40] Just put your trust in my heart
[00:37.91] And meet me in paradise
[00:42.84] (Now is the time)
[00:45.30] Girl, you're every wonder in this world to me
[00:53.84] A treasure time won't steal away
[00:59.42] So, listen to my heart
[01:02.27] Lay your body close to mine
[01:05.41] Let me fill you with my dreams
[01:09.13] I can make you feel all right
[01:12.82] And baby through the years
[01:15.73] Gonna love you more each day
[01:18.91] So, I'll promise you tonight
[01:21.74] That you will always be the lady in my life
[01:28.97] 
[01:32.48] Lay back in my tenderness
[01:35.50] Let's make this a night we won't forget
[01:40.78] Girl, I need your sweet caress, oh
[01:45.78] Reach out to a fantasy
[01:48.95] Two hearts in the beat of ecstasy
[01:54.04] Come to me, girl
[01:59.09] And I will keep you warm
[02:01.54] Through the shadows of the night
[02:04.61] Let me touch you with my love
[02:07.99] I can make you feel so right
[02:11.95] And baby through the years
[02:14.52] Even when we're old and gray
[02:17.52] I will love you more each day
[02:20.74] 'Cause you will always be the lady in my life
[02:30.38] Stay with me
[02:35.74] I want you to stay with me
[02:42.58] I need you by my side
[02:49.04] Don't you go nowhere
[02:51.44] (Ooh, girl, let me keep you warm)
[02:53.89] Let me keep you warm
[02:55.39] (You are the lady in my life)
[02:58.05] You're my lady
[02:59.74] (Fill you with the sweetest love)
[03:01.01] I wanna squeeze ya
[03:02.83] (Always the lady in my life)
[03:04.46] I wanna touch you, babe
[03:05.75] (Lay back in my tenderness)
[03:07.45] (You are the lady in my life)
[03:11.20] Do-do, do-do, doo
[03:12.26] (Rock me with your sweet caress)
[03:14.00] (Always the lady in my life)
[03:17.49] You're my lady and I love you girl
[03:18.26] (Ooh, ooh, girl, let me keep you warm)
[03:20.38] (You are the lady in my life)
[03:22.97] Don't you go nowhere
[03:24.22] (Fill you with the sweetest love)
[03:26.72] I love you
[03:27.77] (Always the lady in my life)
[03:29.66] I love you; I love you; I need you; I want you, babe
[03:31.54] (Lay back in my tenderness)
[03:33.56] Stay with me
[03:34.71] (You are the lady in my life)
[03:36.66] Don't you go no where
[03:38.28] (Rock me with your sweet caress)
[03:40.36] And I love you, babe
[03:41.95] (Always the lady in my life)
[03:44.53] All over, babe
[03:49.54] Don't you go no where
[03:55.00] You're my lady
[03:58.99] 
[04:01.58] All through the night
[04:09.74] (Ooh girl, let me keep you warm)
[04:12.19] I wanna give you all
[04:13.83] (You are the lady in my life)
[04:16.38] In my life
[04:18.31] (Fill you with the sweetest love)
[04:19.46] Let me feel you babe
[04:20.36] (Always the lady in my life)
[04:22.07] All over, all over, all over
[04:23.52] (Lay back in my tenderness)
[04:25.45] Lay back with me
[04:27.03] (You are the lady in my life)
[04:28.42] Let me touch you girl
[04:30.34] (Rock me with your sweet caress)
[04:32.30] Lay back with me
[04:33.60] (Always the lady in my life)
[04:35.51] All over, all over
[04:36.82] (Ooh girl, let me keep you warm)
[04:38.43] All over, all over, all over, all over, all over, babe
[04:40.99] (You are the lady in my life)
[04:42.18] Woo
[04:45.67] (Fill you with the sweetest love)
[04:46.65] (Always the lady in my life)
[04:49.20] You're my lady
[04:50.13] (Lay back in my tenderness)
[04:51.74] You're my lady, babe
[04:52.66] `
        }
    ]

};
