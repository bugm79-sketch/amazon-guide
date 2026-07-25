# amazon-guide

海外Pinterestから英語のGitHub Pages記事へ集客し、記事内の商品紹介を経由してAmazon USにつなぐ、日本の暮らしと商品を紹介するガイドサイトです。最初のテーマは「Matcha Station / 抹茶のある暮らし」です。

- 公開URL: https://bugm79-sketch.github.io/amazon-guide/
- 必須導線: Pinterestの英語ピン → GitHub Pagesの英語記事 → Amazon US
- PinterestからAmazonへ直接リンクしないでください。

## ファイル構成

```text
/
├── index.html                 トップページ
├── matcha-station.html        抹茶記事
├── privacy.html               プライバシーポリシー
├── disclosure.html            Amazonアソシエイト開示
├── styles.css                 共通スタイル
├── script.js                  未設定Amazonリンクの無効化
├── sitemap.xml
├── robots.txt
└── assets/
    ├── favicon.svg
    └── images/
        ├── quiet-matcha-morning-hero.webp
        ├── matcha-starter-set-lifestyle.webp
        ├── ceremonial-matcha-preparation.webp
        ├── organized-matcha-station.webp
        ├── matcha-latte-milk-frother.webp
        └── complete-matcha-station-essentials.webp
```

## ローカル確認方法

リポジトリのルートで次を実行します。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開いてください。GitHub Pagesのサブディレクトリ環境に近い確認をする場合は、親ディレクトリからサーバーを起動し、`/amazon-guide/` を開きます。

## Amazonリンクの差し替え場所

`matcha-station.html` のMatcha Set、Matcha Powder、Matcha Organizerには有効なAmazon USアフィリエイトURLを設定済みです。商品やリンクを変更する際は、対応する商品カードの `<a href="...">` を更新し、`rel="sponsored nofollow"` を維持してください。

実在商品の価格、評価、レビュー数、在庫、ブランド名は確認せずに掲載しないでください。リンク先はAmazon USの商品または適切な検索結果であることを公開前に確認してください。

## 画像の差し替え場所

`assets/images/` 内のSVGは、権利リスクのない独自のプレースホルダーです。同じファイル名・縦横比で差し替えるとHTMLを変更せず更新できます。別名や別形式にする場合は、各HTML内の `src`、Open Graphの `og:image`、Twitter Cardの `twitter:image`、構造化データの `image` を更新し、意味に合う `alt` も書き換えてください。

使用する写真は、自作、適切に許諾された素材、または利用条件が明確な素材に限定し、出典とライセンスを別途記録してください。

## GitHub Pagesの公開方法

このサイトはビルド不要の静的ファイルで、`main` ブランチのルート公開を想定しています。

1. GitHubのリポジトリで **Settings → Pages** を開く
2. **Build and deployment** のSourceを **Deploy from a branch** にする
3. Branchを **main**、フォルダを **/(root)** にして保存
4. デプロイ完了後、公開URLと全ページを確認

公開設定を変更する前に、現在のSource、Branch、Folderを必ず確認してください。

## 更新時の注意点

- Amazonアソシエイト開示文 `As an Amazon Associate I earn from qualifying purchases.` を削除しないでください。
- Pinterestのリンク先は必ずGitHub Pagesの記事にし、Amazonへ直接送らないでください。
- canonical URLは `https://bugm79-sketch.github.io/amazon-guide/` 配下に統一します。
- ルート相対パス（`/styles.css` など）は使わず、サブディレクトリで動く相対パスを維持します。
- 更新後はスマートフォン幅、相対リンク、無効なAmazonリンク、英語表示、SEOメタデータを再確認してください。
