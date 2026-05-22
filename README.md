# ひよこ英会話 公式サイト

福岡市南区・春日市のおうち英会話教室「ひよこ英会話」のWebサイトです。

## 公開方法（GitHub Pages）

1. GitHubで新しいリポジトリを作成（例: `hiyoko-eikaiwa`、**Public**）
2. このフォルダの中身をリポジトリにアップロード
3. リポジトリの **Settings → Pages** を開く
4. **Source** を「Deploy from a branch」、**Branch** を `main` / `(root)` にして **Save**
5. 1〜2分待つと `https://yourname.github.io/hiyoko-eikaiwa/` で公開されます

## ファイル構成

```
├── index.html              ← メインのHTML
├── content.js              ← 文言・コース情報など（編集はここ）
├── hiyoko.jsx              ← ひよこキャラのSVG
└── variant-storybook.jsx   ← デザイン本体
```

## 文言を変えたいとき

`content.js` を開いて該当部分を書き換えるだけです。例えば「先生の自己紹介」を変えたいなら `teacher.bio` の配列を編集してください。

## 教室の写真を入れたいとき

現在は絵文字（🎃 🎨 🏅 など）でプレースホルダーになっています。実際の写真と差し替える場合はご相談ください。

## ローカルでプレビュー

ブラウザで `index.html` を直接開いてもOKですが、フォントやスクリプトの読み込みのため、簡単なローカルサーバーを立てるのがおすすめ：

```bash
# Pythonがあれば
python3 -m http.server 8000
# → http://localhost:8000 を開く
```

## SNS

- Instagram: [@hiyoko_english2010](https://www.instagram.com/hiyoko_english2010/)
