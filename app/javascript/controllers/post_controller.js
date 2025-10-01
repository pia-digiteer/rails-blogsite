import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post"
export default class extends Controller {
  static values = { url: String }

  connect() {
    console.log("Post!", this.urlValue);
  }

  navigate(event) {
    // Ignore clicks on links inside the card
    if (event.target.closest("a")) return
    window.location.href = this.urlValue
  }
}