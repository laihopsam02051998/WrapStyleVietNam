import React from "react";
import { styleHiring } from "./style";
import kingdrag from "./../../components/assets/img/kingdrag.jpg";

function Hiring() {
  const classes = styleHiring();
  return (
    <div>
      <section className={classes.hiringbanners}>
        <div className={classes.hiringbannersTitle}>
          <h5>Hãy cùng chúng tôi lập nên kì tích</h5>
          <p>Tham gia cuộc hành trình tìm kiếm đam mê đầy cảm hứng</p>
        </div>
        <div className={classes.hiringbannersContent}>
          <div className={classes.hiringbannersImage}>
            <img src={kingdrag} alt="hình giới thiệu chúng tôi" />
          </div>
          <div className={classes.hiringbannersForm}></div>
        </div>
      </section>

      {/* START HIRING MAIN  */}
      <section className={classes.hiringmain}>
        <div className={classes.hiringmainTitle}>
          <p>Tại sao bạn nên đồng hành cùng chúng tôi</p>
        </div>
        <div className={classes.hiringmainCardmain}>
          <div className={classes.hiringmainCard}>
            <div className={classes.hiringmainCardImage}>
              <img src="./../img/home_simple.a81bc52.jpg" alt />
            </div>
            <div className={classes.hiringmainCardContent}>
              <h3>Dẫn dắt sự thay đổi và tạo ra tác động tích cực</h3>
              <p>
                Chúng tôi tự hào về sự sáng tạo, nhanh nhẹn và cống hiến hết
                mình của các thành viên Wrap style VietNam. Chúng tôi tìm kiếm
                những cá nhân xuất sắc với niềm đam mê và năng lực để cùng dẫn
                dắt sự thay đổi và tạo ra những tác động có ý nghĩa cho cộng
                đồng.
              </p>
            </div>
          </div>
          <div className={classes.hiringmainCard}>
            <div className={classes.hiringmainCardImage}>
              <img src="./../img/home_together.75f951a.jpg" alt />
            </div>
            <div className={classes.hiringmainCardContent}>
              <h3>Làm việc cùng các nhân tài trên khắp thế giới</h3>
              <p>
                Quy tụ các cá nhân đa dạng trên khắp thế giới, thành viên Wrap
                style VietNam bao gồm các thành viên cùng hướng tới một tầm nhìn
                chung, niềm đam mê và cam kết gắn bó để cùng đưa các dự án tới
                thành công. Chúng tôi trao sức mạnh cho bạn để bạn phát huy tối
                đa khả năng của mình.
              </p>
            </div>
          </div>
          <div className={classes.hiringmainCard}>
            <div className={classes.hiringmainCardImage}>
              <img src="./../img/home_happy.1eccdfa.jpg" alt />
            </div>
            <div className={classes.hiringmainCardContent}>
              <h3>Làm hết sức, chơi hết mình</h3>
              <p>
                Với chúng tôi, công việc luôn đi cùng động lực từ chính bản
                thân. Tại Wrap style VietNam, bạn có thể được gặp gỡ những đồng
                nghiệp thú vị trong môi trường trẻ trung, sôi động. Mỗi ngày
                mang tới cho bạn những điều thú vị để bạn khám phá.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END HIRING MAIN  */}

      {/* START HIRING POSITION  */}
      <section className={classes.hiringposition}>
        <div className={classes.hiringpositionTitle}>
          <h3>Tìm kiếm đam mê của bạn</h3>
        </div>
        <div className={classes.hiringpositionCareer}>
          <div className={classes.hiringpositionChild}>
            <h3>designer</h3>
            <p>2 Vị trí đang tuyển</p>
          </div>
          <div className={classes.hiringpositionChild}>
            <h3>manager website</h3>
            <p>1 Vị trí đang tuyển</p>
          </div>
          <div className={classes.hiringpositionChild}>
            <h3>decal staff</h3>
            <p>10 Vị trí đang tuyển</p>
          </div>
          <div className={classes.hiringpositionChild}>
            <h3>engineer</h3>
            <p>1 Vị trí đang tuyển</p>
          </div>
          <div className={classes.hiringpositionChild}>
            <h3>technical</h3>
            <p>15 Vị trí đang tuyển</p>
          </div>
        </div>
      </section>
      {/* END HIRING POSITION   */}

      {/* START HIRING BANNERS*/}
      <section className={classes.hiringbanners} style={{ margin: "0rem" }}>
        <div className={classes.hiringbannersTitle}>
          <h5>Không ngại thử thách- Khác biệt - Năng động</h5>
        </div>
        <div className={classes.hiringbannersContent}>
          <div className={classes.hiringbannersImage}>
            <img src="./../img/49.jpg" alt />
          </div>
          <div className={classes.hiringbannersForm}>
            <h1>Tham gia ngay hôm nay</h1>
          </div>
        </div>
      </section>
      {/* END HIRING BANNERS*/}
    </div>
  );
}
export default Hiring;
