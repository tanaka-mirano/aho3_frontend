import { Component, Input, OnInit } from '@angular/core';
import { Init_num } from '../Init_num';
import { user_info } from '../user_info';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { com_info } from '../get_comment';
import { parent_info } from '../parent_info';
import { profile } from '../profile';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  defaultLiffId = "1657029236-35JEK0VO";

  init_num: Init_num = {
    st_num: 1,
    end_num: 40,
    bi_num: 3,
    like_num: 3

  };

  user_info: user_info = {
    user_name: "",
    user_id: "",
    comment: "",

  };

  parent_info: parent_info = {
    com_id: 0,
    user_name: "",
    comment: "",
    updated_at: ""

  };

  g_parent_info: parent_info = {
    com_id: 0,
    user_name: "",
    comment: "",
    updated_at: ""

  };

  profile: profile = {
    userId: "",
    displayName: "",
    pictureUrl: "",
    statusMessage: "",
  };



  constructor(private router: Router,
    private commentService: CommentService) { }

  reply_button = false;
  edit_button = false;
  delete_com = false;
  reply_com_btn = false;  //返信コメントを表示するかしないか

  com_length = 0;  //文字数

  com_info: com_info[] = [];          //取得したコメント情報

  count = 0;            //返信コメント表示ボタンを何回押したか

  reply_com_id = 0;     //返信するコメントのcom_id

  edit_com_id = 0;      //編集するコメントのcom_id
  edit_comment = "";    //編集前のコメント

  grandparent_arr: any[] = [];

  ngOnInit(): void {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**LIFF */

    /*初期化*/

    /**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
    (window as any).liff
      .init({
        liffId: this.defaultLiffId
      })
      .then(() => {
        // start to use LIFF's api
        //initializeApp();
        //alert("initializeAppend");
        //console.log((window as any).liff.getLanguage());
      });


    /**ユーザ情報取得 */
    (window as any).liff.ready.then(() => {
      // liff.init()完了後に実行される処理
      (window as any).liff.getProfile()
        .then((profile: profile) => {
          this.user_info.user_name = profile.displayName;
          this.user_info.user_id = profile.userId;
          console.log(this.user_info.user_name);

        });
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    /**最初のコメント表示 */

    var user_id = this.user_info.user_id;

    this.commentService.getComment(user_id)
      .subscribe(com_info => {  //返ってきたものcom_infoでこれから処理するよ
        this.com_info = com_info; //インターフェースの配列に返ってきた値いれるよ

      });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  textcount(text: string) {
    this.com_length = text.length;
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**あほになる開始 */

  ok(): void {
    //console.log(this.init_num.st_num);

    this.router.navigate(['/hyouji'], { queryParams: { start: this.init_num.st_num, end: this.init_num.end_num, bi: this.init_num.bi_num, like: this.init_num.like_num } });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**コメント新規投稿 */
  submit_userinfo() {
    alert('投稿完了');

    if (this.com_length > 100) {
      alert('入力できるのは100文字までです');
    };

    var user_name = this.user_info.user_name;
    var user_id = this.user_info.user_id;
    var comment = this.user_info.comment;

    this.commentService.postnewComment(user_name, user_id, comment)
      .subscribe();


    this.commentService.getComment(user_id)
      .subscribe(com_info => {  //返ってきたものcom_infoでこれから処理するよ
        this.com_info = com_info; //インターフェースの配列に返ってきた値いれるよ

      });

  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**返信ボタン押下 */
  reply(com_id: number): void {
    if (this.edit_button == true) {
      this.edit_button = false;
    }
    this.reply_button = true;
    this.reply_com_id = com_id;
  }

  /**コメント返信実行 */

  submit_reply(): void {
    this.reply_button = false;

    alert('返信完了');

    if (this.com_length > 100) {
      alert('入力できるのは100文字までです');
    };

    var parent_id = this.reply_com_id;

    var user_name = this.user_info.user_name;
    var user_id = this.user_info.user_id;

    //var user_id = "lemon";
    //var user_name = "レモン";

    var comment = this.user_info.comment;


    this.commentService.postreplyComment(user_name, user_id, comment, parent_id)
      .subscribe();

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  /**評価ボタン */

  good(com_id: number, push_b: boolean): void {


    var user_id = this.user_info.user_id;


    this.commentService.postLike(com_id, user_id, push_b)
      .subscribe();


  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  /** コメント編集ボタン押下*/
  edit_com(comment: string, com_id: number,user_id:string) {

    if(user_id==this.user_info.user_id){
      if (this.reply_button == true) {
        this.reply_button = false;
      }
      this.edit_button = true;
      this.edit_comment = comment;
      this.edit_com_id = com_id;

    }else{
      alert('編集できるのは本人のみです');
    }
    

  }

  /** コメント編集実行*/
  submit_edit() {
    this.edit_button = false;

    if (this.com_length > 100) {
      alert('入力できるのは100文字までです');
    };

    var com_id = this.edit_com_id;

    //var user_name = this.user_info.user_name;
    var user_id = this.user_info.user_id;

    //var user_id = "apple";

    var comment = this.user_info.comment;

    this.commentService.putComment(com_id, user_id, comment)
      .subscribe();

  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  /**コメント削除 */
  delete(com_id: number, user_id: string): void {

    if (user_id == this.user_info.user_id) {
      if (confirm('本当に削除しますか？')) {
        var user_id = this.user_info.user_id;

        this.commentService.deleteComment(com_id, user_id)
          .subscribe();
      } else {
        console.log('キャンセルボタンが押されました。')
      }

    }else{
      alert("投稿した本人のみ削除可能です");
    }


  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**返信コメント表示 */
  appear_rep(com_id: number, comment: string, user_name: string, updated_at: string): void {
    this.reply_com_btn = true;  //返信コメントを表示する


    this.parent_info.com_id = com_id;
    this.parent_info.comment = comment;
    this.parent_info.user_name = user_name;
    this.parent_info.updated_at = updated_at;

    var parent = {
      com_id: 0,
      comment: "",
      user_name: "",
      updated_at: "",
    };

    parent.com_id = com_id;
    parent.comment = comment;
    parent.user_name = user_name;
    parent.updated_at = updated_at;

    this.grandparent_arr.push(parent);

    console.log(this.grandparent_arr);

    this.count++;               //返信コメント表示ボタン押下回数カウント
    console.log(this.count);

    var user_id = this.user_info.user_id; //liffで取れるようになったら
    //var user_id = "apple";      //liffで取れるようになったら消す

    this.commentService.getreplyComment(com_id, user_id)
      .subscribe(com_info => {
        this.com_info = com_info;
      });

  }

  /**前のコメント表示に戻る */
  back(): void {

    var user_id = this.user_info.user_id;
    //var user_id = "apple";              //liffで取れるようになったら消す


    if (this.count == 1) {              //返信コメント表示ボタンが一回しか押されていない＝戻ると一番上の親
      this.commentService.getComment(user_id)
        .subscribe(com_info => {
          this.com_info = com_info;
        });
      this.reply_com_btn = false;       //一番上の親しかいない表示にする
      this.count = 0;

    } else if (this.count > 1) {        //返信コメントが複数押されてる

      this.grandparent_arr.splice(-1, 1);

      this.parent_info = this.grandparent_arr.slice(-1)[0];
      console.log(this.parent_info);

      this.commentService.getreplyComment(this.parent_info.com_id, user_id)
        .subscribe(com_info => {
          this.com_info = com_info;
        });
      this.count--;
    }
  }

  back_newarea(): void {
    this.edit_button = false;
    this.reply_button = false;
  }

}