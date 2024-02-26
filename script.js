
      // Sample data for each year
      const data = {
        2001: "Content for 2001",
        2002: "Content for 2002",
        2003: "Content for 2003",
        2004: "Content for 2004",
        2005: "Content for 2005",
        2006: "Content for 2006",
        2007: "Content for 2007",
        2008: "Content for 2008",
        2009: "Content for 2009",
      };

      // Select all year buttons
      const buttons = document.querySelectorAll(".year-button");

      // Add click event listener to each button
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          // Get the selected year from the button's data-year attribute
          const year = button.getAttribute("data-year");

          // Load the content for the selected year
          document.getElementById("content").innerHTML = data[year];
        });
      });