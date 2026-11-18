# Bunny∞Nights — 静的プレリリース版

WordPressを起動せずに公開できるGitHub Pages用ファイルです。一般向け7ページを収録しています。

## アップロード
1. このZIPをPCで展開します。
2. GitHubの `yume-hosiai/bunny-nights` → Add file → Upload files。
3. 展開したフォルダーの「中身」（index.html、about、assetsなど）をまとめてドラッグします。ZIP自体や親フォルダーはアップロードしません。
4. Commit changesで保存。
5. Settings → Pages → Source: Deploy from a branch → Branch: main → /(root) → Save。
6. 表示された公開URLを開きます（想定：https://yume-hosiai.github.io/bunny-nights/）。

.nojekyll はJekyll処理を止める空ファイルです。隠しファイルを選びにくい場合も、このHTML/CSS構成はJekyllで変換しないためそのまま利用できます。

## 公開範囲
関係者ログイン・登録申請・出欠・運営ページ、WordPressプラグイン、個人情報は含みません。
キャスト紹介と接客風景は準備中。応募ページには説明と説明会準備中を掲載し、受付フォームはまだありません。開催情報はHTMLの文言を手動で更新します。

## 画像
HOMEのメイン画像は仮の紫ベルベットラウンジ画像（assets/images/lounge.webp）です。
ロゴ・ラウンジ背景・第1回集合写真を同梱。原本と同じPNG形式です（WebP化は未実施）。
企画課ロゴは未同梱のためテキスト表記にしています。
保存先に見つからなかった記録写真は「写真は準備中」の画像で表示します。写真やfooter.pngをご提供いただけば差し替え可能です。

## 編集箇所
- HOME：index.html
- 他ページ：各フォルダーのindex.html
- 見た目：assets/css/ページ名.css
- 動き：assets/js/ページ名.js
- 画像：assets/images/

リンクは相対パスなので、リポジトリ名の付いたGitHub Pagesでも動きます。
