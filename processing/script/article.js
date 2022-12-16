const articlelist = [
    {
        image: "https://go2joy.s3.ap-southeast-1.amazonaws.com/blog/wp-content/uploads/2022/06/19093009/tai-sao-goi-la-cho-ben-thanh.jpg",
        title: "Xây Dựng",
        text: "Chợ Bến Thành là một ngôi chợ lớn nằm ở trung tâm thành phố. Từ một khu chợ được dựng bên bờ sông Bến Nghé vào thế kỷ 17, chợ Bến Thành chuyển mình thành một công trình kiên cố mang tính biểu tượng của Sài Gòn. \n\n Theo văn bản chính thức đăng trên báo Le Nouvelliste Cochinchinois (Nam Kỳ Tân Báo) vào ngày 31/3/1914 thì dự án xây lại chợ Bến Thành xuất hiện từ năm 1894, nhưng đến năm 1912 mới khởi công xây dựng. Chợ Bến Thành chính thức làm lễ khai thị vào ngày 28/3/1914.",           
    },
    {
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1641554909/blog/mco5j8no8ilogcpmccja.jpg",
        title: "Vì sao Chợ Bến Thành nổi tiếng?",
        text: "Tọa lạc ở khu vực trung tâm thành phố, sau hơn 100 năm, chợ Bến Thành không chỉ là nơi kinh doanh buôn bán mà còn là nơi chứng kiến bao đổi thay, thăng trầm của mảnh đất Sài thành.\n\n Không những thế, đây còn là một trong những địa điểm du lịch rất nổi tiếng của Sài Gòn mà bất cứ du khách nào cũng muốn ghé qua. Du khách tìm đến chợ Bến Thành không đơn thuần để mua sắm, mà còn tìm hình ảnh, cá tính đặc trưng của một thành phố, thể hiện nơi sinh hoạt đời thường của người dân.",
    },
    {
        image: "https://danviet.mediacdn.vn/296231569849192448/2022/4/24/cho-ben-thanh-16507662296381163449675.jpg",
        title: "Chợ Bến Thành có bao nhiêu cửa?",
        text:" Chợ Bến Thành thiết kế 4 cửa chính giáp 4 mặt đường và 12 cửa phụ tỏa ra 4 hướng. Mỗi cửa chính bao gồm nhiều mặt hàng phổ biến để du khách có thể tham quan hoặc thưởng thức tại chỗ:\n - Cửa Nam (cổng chính) nằm ở đường Lê Lợi, là nơi bày bán các loại vải vóc, quần áo, thực phẩm khô. Đặc biệt, nơi cửa Nam còn đặt tháp đồng hồ 3 mặt được giữ nguyên từ lúc khởi dựng, thu hút rất nhiều người đến check-in chụp ảnh. \n - Cửa Bắc nằm ở đường Lê Thánh Tôn, dẫn vào hàng thực phẩm tươi sống, trái cây.\n- Cửa Ðông nằm ở đường Phan Bội Châu, là thiên đường bánh kẹo, mỹ phẩm. \n - Cửa Tây nằm ở đường Phan Chu Trinh, tập trung các gian hàng giày dép, hàng mỹ nghệ, đồ lưu niệm.",
    },
    {
        image: "https://go2joy.s3.ap-southeast-1.amazonaws.com/blog/wp-content/uploads/2022/03/23000658/cho-ben-thanh-co-nhieu-hang-quan-300x200.jpg",
        title: "Các hàng quán đa dạng",
        text: "Chợ Bến Thành được xem là khu chợ bán lẻ có quy mô lớn nhất ở Hồ Chí Minh nhờ vào diện tích hơn 13.000m2 với gần 1.500 sạp lớn nhỏ và hơn 6.000 tiểu thương. Các sản phẩm trong chợ Bến Thành vô củng đa dạng từ hàng hóa bình dân đến những món đồ xa xỉ thì khu chợ này đều có bán, nhờ vậy mà phục vụ được nhu cầu mua sắm của mọi du khách. \n\n Chợ Bến Thành có đầy đủ các cửa hàng từ quần áo đến đặc sản khô, từ sản phẩm thủ công mỹ nghệ đến trái cây đều có. Nhờ đó du khác có thể thoải mái lựa chọn được sản phẩm ưng ý.",
    }
];


const articleobj = {
    article: document.getElementById("article"),
}

for (var i = 0; i < articlelist.length; i++) {
    if (i % 2 == 0) {
        var div = document.createElement("container");
        div.innerHTML = `
            <img class="gioithieu-image">
            <div class="gioithieu-content">
               <b></b>
               <p></p>
            </div>
        `;

        div.children[0].src = articlelist[i].image;
        div.children[1].children[0].textContent = articlelist[i].title;
        div.children[1].children[1].textContent = articlelist[i].text;

        article.appendChild(div);
    }
    else {
        var div = document.createElement("reversecontainer");
        div.innerHTML = `
            <img class="gioithieu-image">
            <div class="gioithieu-content">
               <b></b>
               <p></p>
            </div>
        `;

        div.children[0].src = articlelist[i].image;
        div.children[1].children[0].textContent = articlelist[i].title;
        div.children[1].children[1].textContent = articlelist[i].text;

        article.appendChild(div);
    }
}