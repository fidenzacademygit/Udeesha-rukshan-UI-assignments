let lastScroll = 0;
      const header = document.querySelector(".nav-header");

      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
          header.style.top = "-100px";
        } else {
          header.style.top = "0";
        }

        lastScroll = currentScroll;
      });