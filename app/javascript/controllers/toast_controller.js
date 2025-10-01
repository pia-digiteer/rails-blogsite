import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toast"
export default class extends Controller {
  connect() {
    const toastEl = this.element.querySelector('.toast')
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl)
      toast.show()
    }
  }
}
