document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");
  const question = document.querySelector(".question");
  const avatar = document.querySelector(".avatar");
  const hint = document.querySelector(".hint");
  const btnGroup = document.querySelector(".btn-group");

  // ---------------- NO BUTTON DODGING ----------------
  noBtn.addEventListener("mouseover", () => {
  
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    
    const groupWidth = btnGroup.offsetWidth;
    const groupHeight = btnGroup.offsetHeight;

    
    const padding = 10;

    
    const maxX = groupWidth - btnWidth - padding;
    const maxY = groupHeight - btnHeight - padding;

   
    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });

  // ---------------- YES BUTTON CLICK ----------------
  yesBtn.addEventListener("click", () => {
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    hint.style.display = "none";

   
    question.textContent = "OKAY! 💖";
    // question.style.color = "#ff5b7f"; 

  
    avatar.src =
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2o2YTR2NzdqMGhlY2kyNXBmbG16YXN2aGJsd2U0MnV6ZzlweDR2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UL6KmK8dqmWs/giphy.gif";
    avatar.style.width = "200px";
    

    
    const moneyText = document.createElement("h3");
    moneyText.textContent = "You just won yourself a BTS concert trip baby girl hehe";
    moneyText.style.color = "#e06666";
    moneyText.style.marginTop = "0.5px";
    moneyText.style.fontSize = "1rem";
    moneyText.style.textAlign = "center";

    card.appendChild(moneyText);
  });
});






















// document.addEventListener("DOMContentLoaded", () => {
//   const card = document.querySelector(".card");
//   const yesBtn = document.querySelector(".yes-btn");
//   const noBtn = document.querySelector(".no-btn");
//   const question = document.querySelector(".question");
//   const avatar = document.querySelector(".avatar");
//   const hint = document.querySelector(".hint");

//   // ---------------- NO BUTTON DODGING ----------------
//   noBtn.addEventListener("mouseover", () => {
//     const cardRect = card.getBoundingClientRect();
//     const btnRect = noBtn.getBoundingClientRect();

//     // Calculate max X and Y inside card
//     const maxX = card.clientWidth - noBtn.offsetWidth;
//     const maxY = card.clientHeight - noBtn.offsetHeight;

//     // Random position
//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     noBtn.style.position = "absolute";
//     noBtn.style.left = `${randomX}px`;
//     noBtn.style.top = `${randomY}px`;
//   });

//   // ---------------- YES BUTTON CLICK ----------------
//   yesBtn.addEventListener("click", () => {
//     // Hide buttons and hint
//     yesBtn.style.display = "none";
//     noBtn.style.display = "none";
//     hint.style.display = "none";

//     // Change heading
//     question.textContent = "OKAY! 💖";

//     // Replace avatar with new GIF
//     avatar.src =
//       "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemcybHFvajFydTdtNTF3OG13MXhmNno0d2JhdnVldjd0cnM3bGlvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XoP9C440Yto0YJZRdY/giphy.gif";
      
//     avatar.style.width = "200px"; // optional, adjust size
//     avatar.style.marginBottom = "20px";

//     // Add "Send me money" text
//     const moneyText = document.createElement("h3");
//     moneyText.textContent = "Send me money 💸";
//     moneyText.style.color = "#034694";
//     moneyText.style.marginTop = "15px";
//     moneyText.style.fontSize = "1.2rem";
//     moneyText.style.textAlign = "center";

//     card.appendChild(moneyText);
//   });
// });

