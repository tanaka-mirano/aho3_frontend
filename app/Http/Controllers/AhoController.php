<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AhoController extends Controller
{
    public function hyouji(){
        $start = request('start');
        $end = request('end');
        $bi = request('bi');
        $like = request('like');

        //requestでクエリパラメータを受け取る

        $str_bi = (string) $bi;
        $str_like = (string) $like;

        $judge1 = false;
        $judge2 = false;

        $response_ary = array();

        //開始数・終了数・倍数が0
    if ($end - $start <= 0) {
        $ary = array('i'=>404, 'img'=>"error" );
        array_push($response_ary,$ary);
        $json = json_encode($response_ary);
        return $json;
    } else if ($start == 0 || $end == 0 || $bi == 0 || $like == 0) {
        $ary = array('i'=>404, 'img'=>"error" );
        array_push($response_ary,$ary);
        $json = json_encode($response_ary);
        return $json;
    } else {

        for ($i = $start; $i <= $end; $i++) {
            $i_str = (string) $i;
            $judge1 =strpos($i_str,$str_bi);
            //カウント数と倍数が同じかどうか

            if ($bi != $like) {
                $judge2 = strpos($i_str,$str_like);
                //カウント数と好きな数が同じかどうか
            }

            if (($i % $bi == 0) || ($judge1 !== false)) {
                
                if ($judge2 === false) {   //倍数または倍数に設定した数字
                    $ary = array('i'=>$i, 'img'=>"ahoimg" );

                } else {              //倍数または倍数に設定した数字+好きな数
                    $ary = array('i'=>$i, 'img'=>"aholikeimg" );
                }

            } else if (($judge2 !== false) && ($i % $bi != 0) && ($judge1 === false)) {
                $ary = array('i'=>$i, 'img'=>"likeimg" );
                //好きな数字のみ

            } else {
                $ary = array('i'=>$i, 'img'=>"noimg" );

            }
            array_push($response_ary,$ary);
        }

        $ary = array('i'=>100, 'img'=>"omoro" );
        array_push($response_ary,$ary);
        //連想配列を配列に入れる

        $json = json_encode($response_ary);
        //jsonに変換（json_encode）

        return $json;


    }

        
    }
}
