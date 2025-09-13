document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------
    // ２言語対応の翻訳辞書
    // ---------------------------------------------------
    const translations = {
        'en': {
            'page-title': '108H Choir Festival 2025 - Our Harmony',
            'nav-about': 'Our Song',
            'nav-video': 'Video',
            'nav-diary': 'Practice Diary',
            'nav-members': 'Members',
            'nav-gallery': 'Gallery',
            'header-title': '108H Choir Festival 2025',
            'header-subtitle': 'Our harmony delivers the greatest emotion.',
            'countdown-label': 'Countdown to the Festival...',
            'unit-days': 'Days',
            'unit-hours': 'Hours',
            'unit-minutes': 'Mins',
            'unit-seconds': 'Secs',
            'song-title': '108H\'s Choir Song: YOASOBI "Gunjo"',
            'our-feelings-label': 'Our Feelings for this Song:',
            'our-feelings-text': 'We will express the powerful message of this song with all our hearts.',
            'lyrics-composer-label': 'Lyrics & Music:',
            'lyrics-composer-name': 'Ayase',
            'song-info-label': 'Song Info:',
            'song-info-text': '“Gunjo” (Ultramarine) was released on September 1, 2020, as the 5th digital single by YOASOBI. It was written, composed, and arranged by Ayase, whose unique music production colors the entire song.',
            'lyrics-label': 'Lyrics',
            'lyrics-text': `Ah, just like usual
I yawn through the passing days
Crossing the boisterous night, today too
Morning falls on the city of Shibuya
A somewhat empty feeling
How boring
But that's okay
This is fine
Without knowing, I've hidden
My true voice, let it ring out, come on
Even if I pretend not to see
It's definitely there
Paint as you feel
With the color you chose yourself
In the sleepy morning air
A blue world arrived
Saying you love what you love
It's terribly scary, but
I feel like I met
My true self
Ah, the more I reach out
The farther it goes
It doesn't go as I want, today too
I'm struggling in a rush again
Feelings of frustration
Just makes me feel pathetic
And brings tears
The more I step in
The more it hurts
The more it aches
Move forward as you feel
On this path you chose yourself
On a night rubbing heavy eyelids
A clinging blue vow
To continue what you love
It's not just "fun"
Can I really do it?
I get anxious, but
How many sheets, hey, how many sheets
I've drawn because I had no confidence
How many times, hey, how many times
What I've piled up becomes my weapon
Looking around
Comparing with anyone
What is it that only I can do?
Even now, I have no confidence
Even so
Feelings I've never felt
Thoughts I didn't know I had
Taking that first step on that day
All this pain I felt for the first time
By facing what I love
I touched a small light
It's okay, let's go, all that's left is to have fun
I'll paint risking everything
With a color only I can produce
Running both morning and night
I found the blue light
Facing what you love
It's still a scary thing, but
I'm no longer that transparent me from that day
I am
My irreplaceable self, just as I am
Without knowing, I've hidden
My true voice, let it ring out, come on
Even if I pretend not to see
It's definitely still there, even now
Without knowing, I've hidden
My true voice, let it ring out, now
Even if I pretend not to see
It's definitely there, inside you.`,
            'video-title': 'Highlight Video',
            'video-fallback': 'Your browser does not support video.',
            'video-description': 'A special video summarizing our practice! Please watch!',
            'diary-title': 'Practice Diary',
            'diary-entry1-title': '2025.09.01 First Day of Practice!',
            'diary-entry1-text': 'Practice started today. The pitch was a bit off at first, but we all did our best to harmonize!',
            'members-title': 'Member Introduction',
            'member-name1': 'Conductor: XX',
            'member-quote1': 'Quote: Let\'s deliver the best song!',
            'gallery-title': 'Photo Gallery',
            'upload-text': 'You can upload photos here!',
        },
        'ja': {
            'page-title': '108H合唱祭2025 - 私たちのハーモニー',
            'nav-about': '私たちの歌',
            'nav-video': '動画',
            'nav-diary': '練習日記',
            'nav-members': 'メンバー',
            'nav-gallery': 'ギャラリー',
            'header-title': '108H合唱祭2025',
            'header-subtitle': '私たちのハーモニーが、最高の感動を届ける。',
            'countdown-label': '合唱祭まであと...',
            'unit-days': '日',
            'unit-hours': '時間',
            'unit-minutes': '分',
            'unit-seconds': '秒',
            'song-title': '108Hの合唱曲 YOASOBI「群青」',
            'our-feelings-label': 'この曲へのみんなの思い：',
            'our-feelings-text': 'この曲の力強いメッセージを、108H全員で心を込めて歌い上げます。',
            'lyrics-composer-label': '作詞・作曲：',
            'lyrics-composer-name': 'Ayase',
            'song-info-label': '曲に関する情報：',
            'song-info-text': '「群青」（ぐんじょう）はYOASOBIの5作目のデジタル配信限定シングルとして、2020年9月1日にリリースされた。Ayaseが作詞・作曲・編曲を担当しており、彼の独特な音楽プロデュースが楽曲全体を彩っている。',
            'lyrics-label': '歌詞',
            'lyrics-text': `嗚呼、いつもの様に
過ぎる日々にあくびが出る
さんざめく夜、越え、今日も
渋谷の街に朝が降る
どこか虚しいような
そんな気持ち
つまらないな
でもそれでいい
そんなもんさ
これでいい
知らず知らず隠してた
本当の声を響かせてよ、ほら
見ないフリしていても
確かにそこにある
感じたままに描く
自分で選んだその色で
眠い空気纏う朝に
訪れた青い世界
好きなものを好きだと言う
怖くて仕方ないけど
本当の自分
出会えた気がしたんだ
嗚呼、手を伸ばせば伸ばすほどに
遠くへゆく
思うようにいかない、今日も
また慌ただしくもがいてる
悔しい気持ちも
ただ情けなくて
涙が出る
踏み込むほど
苦しくなる
痛くもなる
感じたままに進む
自分で選んだこの道を
重いまぶた擦る夜に
しがみついた青い誓い
好きなことを続けること
それは「楽しい」だけじゃない
本当にできる？
不安になるけど
何枚でも
ほら何枚でも
自信がないから描いてきたんだよ
何回でも
ほら何回でも
積み上げてきたことが武器になる
周りを見たって
誰と比べたって
僕にしかできないことはなんだ
今でも自信なんかない
それでも
感じたことない気持ち
知らずにいた想い
あの日踏み出して
初めて感じたこの痛みも全部
好きなものと向き合うことで
触れたまだ小さな光
大丈夫、行こう、あとは楽しむだけだ
全てを賭けて描く
自分にしか出せない色で
朝も夜も走り続け
見つけ出した青い光
好きなものと向き合うこと
今だって怖いことだけど
もう今はあの日の透明な僕じゃない
ありのままの
かけがえの無い僕だ
知らず知らず隠してた
本当の声を響かせてよ、ほら
見ないフリしていても
確かにそこに今もそこにあるよ
知らず知らず隠してた
本当の声を響かせてよ、さあ
見ないフリしていても
確かにそこに君の中に`,
            'video-title': 'ハイライト動画',
            'video-fallback': 'お使いのブラウザは動画に対応していません。',
            'video-description': '練習の成果をまとめたスペシャル動画です！ぜひご覧ください！',
            'diary-title': '練習日記',
            'diary-entry1-title': '2025.09.01 練習初日！',
            'diary-entry1-text': '今日から練習がスタート。最初は音程がバラバラだったけど、みんなで声を合わせて頑張りました！',
            'members-title': 'メンバー紹介',
            'member-name1': '指揮者：〇〇さん',
            'member-quote1': '一言：最高の歌を届けよう！',
            'gallery-title': 'フォトギャラリー',
            'upload-text': 'ここに写真をアップロードできます！',
        }
    };

    // ---------------------------------------------------
    // 言語切り替え機能
    // ---------------------------------------------------
    const langOptions = document.querySelectorAll('.lang-option');
    const langSelector = document.querySelector('.lang-selector');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangText = document.getElementById('current-lang-text');

    const updateContent = (lang) => {
        const selectedTranslations = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (selectedTranslations && selectedTranslations[key] !== undefined) {
                if (key === 'lyrics-text') {
                    // 歌詞のpreタグにはinnerHTMLを使う
                    element.innerHTML = selectedTranslations[key];
                } else if (key === 'lyrics-composer-name') {
                    // 強調タグ内のテキストを更新
                    element.textContent = selectedTranslations[key];
                } else if (key === 'lyrics-composer-label') {
                    // strongタグ内のテキストを更新
                    element.textContent = selectedTranslations[key];
                } else {
                    element.textContent = selectedTranslations[key];
                }
            }
        });

        const selectedLangName = document.querySelector(`.lang-option[data-lang="${lang}"]`).textContent;
        currentLangText.textContent = selectedLangName;
    };

    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = e.target.dataset.lang;
            updateContent(newLang);
            langDropdown.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });

    const userLang = navigator.language.slice(0, 2);
    const initialLang = translations[userLang] ? userLang : 'ja';
    updateContent(initialLang);

    // ---------------------------------------------------
    // カウントダウンタイマー
    // ---------------------------------------------------
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownEl = document.getElementById('countdown');

    // 2025年9月22日 10:00:00 を設定
    const choirFestivalDate = new Date('September 22, 2025 10:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = choirFestivalDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(countdownInterval);
            const festivalOverText = translations[document.documentElement.lang]?.['festival-over'] || '合唱祭、お疲れ様でした！';
            countdownEl.textContent = festivalOverText;
            return;
        }

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // ---------------------------------------------------
    // スクロールアニメーション
    // ---------------------------------------------------
    const sections = document.querySelectorAll('.animate-fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ---------------------------------------------------
    // 写真アップロード機能
    // ---------------------------------------------------
    const photoUploadInput = document.getElementById('photo-upload');
    const photoGrid = document.getElementById('photo-grid');

    if (photoUploadInput && photoGrid) {
        photoUploadInput.addEventListener('change', (event) => {
            const files = event.target.files;
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const reader = new FileReader();

                    reader.onload = (e) => {
                        const imgWrapper = document.createElement('div');
                        imgWrapper.className = 'photo-item';
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = 'Uploaded photo';
                        imgWrapper.appendChild(img);
                        photoGrid.appendChild(imgWrapper);
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    }
});