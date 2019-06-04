import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService, AlertService } from "../../services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;
  validateForm: FormGroup;
  status: number;
  error: string;

  submitForm(): void {
    this.loading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService.login(this.validateForm.value).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        this.error = error;
        this.alertService.error(error);
      }
    );
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    this.validateForm = this.fb.group({
      Username: ["systemadmin", [Validators.required]],
      Password: ["1234", [Validators.required]],
      remember: [true]
    });
  }
}
