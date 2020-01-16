import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../@URL/URL';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }



  // login 
  getLogin(data) {
    return this.http.post(urlServer.ipServer + 'login', data)
  }
  // register-buyer
  onRegisterBuy(data) {
    return this.http.post(urlServer.ipServer + 'register_buyer', data)
  }
  // register-sell
  onRegisterSell(data) {
    return this.http.post(urlServer.ipServer + 'register_seller', data)
  }


  // todo: Get --------------------------//

  // member
  getMember() {
    return this.http.get(urlServer.ipServer + 'member')
  }

  // test
  getTest() {
    return this.http.get(urlServer.ipServer + 'test')
  }

  // get Location
  getLocation() {
    return this.http.get(urlServer.ipServer + 'getlocation')
  }

  // รายการแนะนำ
  getRecommend() {
    return this.http.get(urlServer.ipServer + 'recommend')
  }
  // รายการแนะนำ
  getRecommainpage() {
    return this.http.get(urlServer.ipServer + 'recommainpage')
  }
  // อสังหา
  getProperty() {
    return this.http.get(urlServer.ipServer + 'property')
  }
  // บ้าน
  getHouse() {
    return this.http.get(urlServer.ipServer + 'house')
  }
  // ทาวเฮาส์
  getTownhouse() {
    return this.http.get(urlServer.ipServer + 'townhouse')
  }
  // อพาสเมน
  getApartment() {
    return this.http.get(urlServer.ipServer + 'apartment')
  }
  // อาคารพานิช
  getCommercial() {
    return this.http.get(urlServer.ipServer + 'commercial')
  }
  // คอนโด
  getCondominium() {
    return this.http.get(urlServer.ipServer + 'condominium')
  }
  // ที่ดิน
  getLand() {
    return this.http.get(urlServer.ipServer + 'land')
  }
  // ประเภทอสังหา
  getType() {
    return this.http.get(urlServer.ipServer + 'type')
  }


  // todo : ขาย
  // ขายบ้าน
  getSellHouse() {
    return this.http.get(urlServer.ipServer + 'sellhouse')
  }
  // ขายทาวเฮาส์
  getSellTownhouse() {
    return this.http.get(urlServer.ipServer + 'selltownhouse')
  }
  // ขายอพาสเมน
  getSellApartment() {
    return this.http.get(urlServer.ipServer + 'sellapart')
  }
  // ขายอาคารพานิช
  getSellCommercial() {
    return this.http.get(urlServer.ipServer + 'sellcomm')
  }
  // ขายคอนโด
  getSellCondominium() {
    return this.http.get(urlServer.ipServer + 'sellcondo')
  }
  // ขายที่ดิน
  getSellLand() {
    return this.http.get(urlServer.ipServer + 'sellland')
  }


  // todo : เช่า
  // เช่าบ้าน 
  getRentHouse() {
    return this.http.get(urlServer.ipServer + 'renthouse')
  }
  // เช่าทาวเฮาส์
  getRentTownhouse() {
    return this.http.get(urlServer.ipServer + 'renttownhouse')
  }
  // เช่าอพาสเมน
  getRentApartment() {
    return this.http.get(urlServer.ipServer + 'rentapart')
  }
  // เช่าอาคารพานิช
  getRentCommercial() {
    return this.http.get(urlServer.ipServer + 'rentcomme')
  }
  // เช่าคอนโด
  getRentCondominium() {
    return this.http.get(urlServer.ipServer + 'rentcondo')
  }
  // เช่าที่ดิน
  getRentLand() {
    return this.http.get(urlServer.ipServer + 'rentlande')
  }
  // รายละเอียดสมาชิก
  getProfile(data) {
    return this.http.get(urlServer.ipServer + 'profile/' + data)
  }
  // รายละเอียด อสังหา
  getProDetail(data) {
    return this.http.get(urlServer.ipServer + 'prodetail/' + data)
  }
  // ภาค
  getZone() {
    return this.http.get(urlServer.ipServer + 'zone')
  }
  // จังหวัด จาก ภาค
  getProvince(data) {
    return this.http.get(urlServer.ipServer + 'province/' + data)
  }
  // Limit ระดับหการใช้
  getLimited() {
    return this.http.get(urlServer.ipServer + 'limit')
  }

  // อสังหา จาก ประเภท 
  getProtype(data) {
    return this.http.get(urlServer.ipServer + 'protype/' + data)
  }
  // รายการยอดนิยม
  getPoppular() {
    return this.http.get(urlServer.ipServer + 'poppular')
  }
  // รายการโฆษณา
  getArtcle() {
    return this.http.get(urlServer.ipServer + 'article')
  }
  // รายละเอียด อสังหา
  getArtDetail(data) {
    return this.http.get(urlServer.ipServer + 'artdetial/' + data)
  }

  // รายการความต้องการ
  getRequire(data) {
    return this.http.get(urlServer.ipServer + 'requirement/' + data)
  }
  // รายการที่ตรงกัน
  getReqMatch() {
    return this.http.get(urlServer.ipServer + 'reqmatch')
  }
  // ? page : seller
  // Mypro
  getMypro(data) {
    return this.http.get(urlServer.ipServer + 'mypro/' + data)
  }
  // รายการฉบับร่าง
  getProDraft(data) {
    return this.http.get(urlServer.ipServer + 'myprodraft/' + data)
  }
  // รายการรอแก้
  getProEdit(data) {
    return this.http.get(urlServer.ipServer + 'myproedit/' + data)
  }
  // รายการปิดประกาศ
  getProClose(data) {
    return this.http.get(urlServer.ipServer + 'myproclose/' + data)
  }
  // นับรายการอสังหา
  getCountPro(data) {
    return this.http.get(urlServer.ipServer + 'countpro/' + data)
  }
  // รายการ อัพเกรด
  getUpgradeReq() {
    return this.http.get(urlServer.ipServer + 'getupgrade')
  }
  // นับ upgrade
  getCountUp() {
    return this.http.get(urlServer.ipServer + 'countup')
  }
  // รูป โปรไฟล์
  getNameAvatar(data) {
    return this.http.get(urlServer.ipServer + 'getnameavatar/' + data)
  }
  // รูป Property
  getNamePro(data) {
    return this.http.get(urlServer.ipServer + 'getnamepro/' + data)
  }


  // ! END ^ Get -------------------------//



  // todo: Post --------------------------//

  // post location
  postLocation(data) {
    return this.http.post(urlServer.ipServer + 'postlocation', data)
  }
  // post ความต้องการ
  postRequire(data) {
    return this.http.post(urlServer.ipServer + 'postreq', data)
  }
  // ? page : seller
  // post เพิ่มอสังหา เนื้อหา
  postProperty(data) {
    return this.http.post(urlServer.ipServer + 'postpro', data)
  }
  // post เพิ่มอสังหา style
  postProStyle(data) {
    return this.http.post(urlServer.ipServer + 'poststyle', data)
  }
  postProDraft(data) {
    return this.http.post(urlServer.ipServer + 'postdraft', data)
  }
  // post เพิ่มอสังหา style
  postDraftStyle(data) {
    return this.http.post(urlServer.ipServer + 'postdraftstyle', data)
  }
  // post เพิ่มรายการ อัพเกรด
  postUpgrade(data) {
    return this.http.post(urlServer.ipServer + 'postupgrade', data)
  }
  //  post รูปโปรไฟล์ single 
  postImage(formData) {
    return this.http.post(urlServer.ipServer + 'upload', formData)
  }
  // ? test post รูป Multi 
  postImageMulti(formData) {
    return this.http.post(urlServer.ipServer + 'uploadmultiple', formData)
  }
  //  post รูป Multi 
  postImageProMulti(formData) {
    return this.http.post(urlServer.ipServer + 'postproimage', formData)
  }

  // ! END ^ Post -------------------------//



  // todo: Update --------------------------//

  // update loc
  onLocation(data) {
    return this.http.put(urlServer.ipServer + 'putlocation', data)
  }

  // update recom
  onRecom(data) {
    return this.http.put(urlServer.ipServer + 'putrecom', data)
  }
  // update สถานะอสังหา
  putPropublish(data) { //เผยแพร่
    return this.http.put(urlServer.ipServer + 'propublish', data)
  }
  putProdraft(data) {  // ร่าง
    return this.http.put(urlServer.ipServer + 'prodraft', data)
  }
  putPromodify(data) {  // รอแก้ไข
    return this.http.put(urlServer.ipServer + 'promodify', data)
  }
  putProclose(data) {  // ปิดการขาย
    return this.http.put(urlServer.ipServer + 'proclose', data)
  }
  // อัพยอดวิว
  putProview(data) {
    return this.http.put(urlServer.ipServer + 'proview', data)
  }
  // อัพยอดวิว โฆษณา
  putArtview(data) {
    return this.http.put(urlServer.ipServer + 'artview', data)
  }
  // อัพเดต ข้อมูลส่วนตัว
  putProfile(data) {
    return this.http.put(urlServer.ipServer + 'putprofile', data)
  }
  // post สิทธิ์การประกาศ
  postProLimit(data) {
    return this.http.put(urlServer.ipServer + 'putprolimit', data)
  }
  //  post รูปโปรไฟล์ single 
  putAvatar(formData) {
    return this.http.put(urlServer.ipServer + 'putavatar', formData)
  }

  // ! END ^ Update -------------------------//



  // todo: Delete --------------------------//

  // delete loc
  deleteLocation(data) {
    return this.http.delete(urlServer.ipServer + 'deletelocation/' + data)
  }
  // delete req ยังทำไม่ได้
  deleteReq(data) {
    return this.http.delete(urlServer.ipServer + 'deletereq/' + data)
  }
  // delete req ยังทำไม่ได้
  deleteReqUpgerde(data) {
    return this.http.delete(urlServer.ipServer + 'deleteupgrade/' + data)
  }



  // ! END ^ Delete -------------------------//



  // todo: test --------------------------//

  // test pro
  getTestPro() {
    return this.http.get(urlServer.ipServer + 'testGetpro')
  }
  // post first chat
  postTestarea(data) {
    return this.http.post(urlServer.ipServer + 'testinsert', data)
  }
  // post Article
  postArticle(data) {
    return this.http.post(urlServer.ipServer + 'postArticle', data)
  }

  // todo: chat --------------------------//
  // get chat
  getChat(source, descination) {
    return this.http.get(urlServer.ipServer + 'chat/' + source + '/' + descination)
  }
  // get chat
  getChatUser(source) {
    return this.http.get(urlServer.ipServer + 'userchat/' + source)
  }
  // post chat
  postChat(data) {
    return this.http.post(urlServer.ipServer + 'postchat', data)
  }
  // get SearchUser chat
  getSearchUser(data) {
    return this.http.get(urlServer.ipServer + 'searchuser/' + data)
  }
  // post first chat
  postFirstChat(data) {
    return this.http.post(urlServer.ipServer + 'firstchat', data)
  }





  // // อสังหา แผนที่
  // getMpaProperty() {
  //   return this.http.get(urlServer.ipServer + 'promap')
  // }



}
