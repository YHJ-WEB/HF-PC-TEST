import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  detailObj = {
    title: "常规出院指导",
    img1: 'assets/img/article/001.jpg',
    img2: 'assets/img/article/006.png',
    item: [
      {
        title: "请注意伤口",
        img: "assets/img/article/002.jpg",
        desc: "保持伤口周围的清洁干燥，如伤口出现红肿热痛或体位升高超过38.5（排除感冒因素外）请您及时来院"
      },
      {
        title: "请注意卧床休息",
        img: "assets/img/article/003.jpg",
        desc: "以卧床休息为主，卧硬板床为宜，睡觉时选择合适的枕头，保证充足的睡眠时间。"
      },
      {
        title: "请注意饮食调理",
        img: "assets/img/article/004.jpg",
        desc: "宜清淡，慎食剪，炸食品，多吃高蛋白，低脂，高热量，高纤维，高维生素食物，以保证营养"
      },
      {
        title: "结核患者饮食须注意",
        img: "assets/img/article/005.jpg",
        desc: "a.抗结核治疗期间禁止饮酒，以免诱发或加重药物肝损害发生。b.尽量少进食刺激性大的食物，饮食应以清淡为止，要营养丰富，富含多种维生素和适量的蛋白质。c.在病着炎症进展阶段少进食容易促发或加重炎症反应的食物"
      }
    ],
    summary: '如功能锻炼后感到腰部或双下肢肌肉酸痛，请您停练几天或适当减量，症状好转后再从头开始，在逐渐增加锻炼强度。',
    otherPush: [
      {
        title: "呼吸功能锻炼"
      },
      {
        title: "安全知识"
      },
      {
        title: "选择合适的枕头"
      },
      {
        title: "轴向翻身"
      }
    ]
  };

  constructor() { }

  ngOnInit() {

  }
}
