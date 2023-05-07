function updateCountdown() {
    // Lấy ngày hiện tại
    const now = new Date().getTime();
  
    // Tính khoảng cách thời gian giữa ngày hiện tại và Ngày Trái Đất (22/4)
    const earthDay = new Date('April 22, 2023').getTime();
    const distance = earthDay - now;
  
    // Tính số ngày, giờ, phút, giây còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Hiển thị kết quả lên trang web
    document.getElementById('countdown').innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
  }
  
  // Gọi hàm updateCountdown() mỗi giây
  setInterval(updateCountdown, 1000);