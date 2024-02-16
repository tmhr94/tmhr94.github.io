---
title: "Self-Promotion"
layout: default
---

# Self-Promotion
## Summary
- エンジニア歴
  - 7年以上(20歳でエンジニアに転職)
- 経歴
  - 主にRailsを使用したサーバーサイドの開発が主ですが、VueやAngularなどを用いたフロントエンドの開発、デザインをもとにHTMLコーディング、モバイルアプリ開発、オンプレでサーバーを構築したりなど、幅広く作業ができます。

## 強み
- 他者と柔軟に関わっていき、良好な関係を保ち案件を進めて行けます。
  - 後述の「コミュニケーション」参考
- 要件定義からデプロイまでを一貫して行うことが出来ます。
  - 非エンジニアから要件をヒアリングし、制限(費用、スケジュール等)を聞き、制限の中で適したシステム要件をすることが可能です。
    - 実際に案件のリーダーとしてクライアントさんの会社へ出向き、要件をヒアリングして開発からテスト、リリースまでを一通り行うなどの経験があります。
- 保守性の高いコードを書くことができます。技巧的で美しいよりもいかにわかりやすく保守しやすいかを第一としております。
  - 後述の「技術」参考
- 英語で技術文書が読めたり、メソッド名なども英語的に違和感のないものをかけます。
  - TOEIC715(L355/R360)

## 性向
- 以下のときに喜びを感じやすいです。
  - 人の役に立ったことが実感できたとき。
  - 問題をスマートに解決できたとき。
- 主体的に物事を進められる環境だと、責任感を持ってやり遂げたいとモチベーションが高まります。
- 健康意識はある方だと思います。食事や筋トレ、有酸素運動など気を配っております。酒、タバコしません。
- 人との衝突はなるべく避ける傾向があります。
  - ただ、仕事上どうしても言わなければならない場合があるため、その場合は相手の意見を受け入れた上で提案するような形でなるべく角が立たずにいい方向に向かうよう努力します。

## コミュニケーション
一番大事にしている項目です。<br>
自明ですが、仕事をする上で他者と協力することは不可欠なので、他者を尊重し一緒に働いて居心地がいいと思って頂ける環境作りを目指しています。

- 人は皆大切な存在だと忘れず、相手の尊厳を損なわないような態度や発言で接するよう心がけております。
  - 参考: [人望が集まる人の考え方](https://amzn.to/3EclinP)
- 簡潔にわかりやすく物事を伝えます。
  1. どういった種類の話なのかまず伝える。質問なのか相談なのか。相手の脳のリソースを奪ってしまう。
  2. 一番伝えたいことを先に伝え、その後に背景や補足を伝える。
  - 参考: [考える技術・書く技術](https://amzn.to/3DRHP91)
- 雑談を大事にしています。

## 業務
- いま一番何が重要か？を自問する姿勢を大事にしております。
- 複雑なタスクの場合、まず作業を細かく分解して１つずつコツコツと進めていきます。
- なにか問題や疑問などあったらすぐに報告するようにしています。
- 詰まった場合は、以下のような方法を試して大体解決しております。
  - 図解化してみる。
  - 他人に質問するセリフを実際に作成してみる。
  - デバッグをし、どこまでわかっていて、どこまでわかっていないか明確にする。

## 技術
- 保守性の高いコードを意識しております。
  - テスタビリティ
    - 1つのクラスやメソッドで多くの責務を負うとそれぞれの条件分岐などのハンドリングが必要になりテストが複雑になるため責務ごとにわける。
    - DIを用い他のクラスに依存しないようにし、テストを作成する際、他のクラス用にデータを用意する必要がないようにする。
  - メンテナビリティ
    - 背景がわからない状態でコードを読んだときに「なぜ？」という疑問が残る状態を作らない。
      - 1年後の自分が読むことを想定して作る。
  - リーダビリティ
    - 本を読むかのように読めるコードを書く。クラス/メソッドを適度な粒度で分け、適切な命名をし本の見出しのような位置づけとする。
  - テストコード
    - 仕様の説明となるような実装とする。
  - gitのコミット粒度はrebaseなどを使い調整。
    - コミットログをPRのサマリ的な形で見られるようにする。
- 運用を考慮したシステムを構築できます。
  - 例外等が起きたら分析しやすいようログ出力したり、Slackなどで通知をし検知できるような作りとします。