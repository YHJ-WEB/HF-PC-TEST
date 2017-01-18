import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit, AfterViewInit {
  private submitArr = [];
  constructor(private location: Location) { }

  ngOnInit() {

  }

  toolDetail = {
    title: '骨质疏松测评',
    questions: [
      {
        id: 1,
        title: '是否曾经因轻微碰撞或跌倒倒伤到骨骼',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 2,
        title: '有没有轻微碰撞或跌倒后发生髋部骨折',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 3,
        title: '有无服用"可的松，强的松"等激素超过3个月',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 4,
        title: '身高比年轻时低了吗（超过3厘米）',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 5,
        title: '经常大量饮酒吗',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 6,
        title: '每天吸烟超过20支吗',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 7,
        title: '经常腹泻吗',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }]
      },
      {
        id: 8,
        title: '是否在45岁之前就绝经了',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }, {
          id: 2,
          title: '我是男性'
        }]
      },
      {
        id: 9,
        title: '是否曾经有过连续12个月以上没有月经（出来怀孕）',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }, {
          id: 2,
          title: '我是男性'
        }]
      },
      {
        id: 10,
        title: '是否阳痿或者缺乏性欲',
        answers: [{
          id: 1,
          title: '是'
        }, {
          id: 0,
          title: '否'
        }, {
          id: 2,
          title: '我是女性'
        }]
      }
    ]
  };

  initSubmitObj(): void {
    this.toolDetail.questions.forEach((question) => {
      let item = {
        questionId: question.id,
        answerId: question.answers[0].id
      };
      this.submitArr.push(item);
    })
  }

  ngAfterViewInit(): void {
    this.initSubmitObj();
    console.log(this.submitArr)
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green'
    }).on('ifChecked', (event) => {
      let id = parseInt(event.target["id"]);
      let value = parseInt(event.target["value"]);
      this.submitArr.forEach((item) => {
        if (item.questionId == id) {
          item.answerId = value;
        }
      });
    })
  }

  submitTool(): void {
    swal({
      title: "重度危险",
      html: true,
      text: '<h4 class="padding-width-md text-left">你已经有了骨质疏松的风险，是时候注意一下了。有时间去医院，进一步检查看看，日常生活中，合理补充钙，合理日晒和运动，少喝汽水咖啡，都对骨的健康有帮助</h4>',
      confirmButtonColor: '#00BABF',
      confirmButtonText: '确定'
    }, () => {
      this.location.back();
    })
  }
}
