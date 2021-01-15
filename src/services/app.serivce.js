import http from "../services/http_service";

class CandidateService {
  getDashboard(id) {
    let url = "/dashboard/" + id;
    console.log(url);

    return http.get(url);
  }
  login(password, email) {
    return http.get("/login/", {
      params: { email: email, password: password },
    });
  }
}

export default new CandidateService();
