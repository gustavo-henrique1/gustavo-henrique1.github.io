import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent implements OnInit {
  optionOne = { id: 0, text: "Experiência", icon: "frame_source" };

  options = [
    { id: 1, text: "Superior", icon: "school" },
    { id: 2, text: "Ténico", icon: "book_5" },
    { id: 3, text: "Certificações", icon: "bookmarks" },
  ];
  activeIndex = 0;

  experiences = document.getElementsByClassName("box-experience");

  ngOnInit(): void {
    this.showContent(0);
  }

  showContent(id: any) {
    this.activeIndex = id;

    Array.from(this.experiences).forEach((item, i) => {
      console.log(item.id);

      if (id == i) {
        item.classList.add("show-experience");
      } else {
        item.classList.remove("show-experience");
      }
    });
  }
}
