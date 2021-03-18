import http from "@/services/api";

class LanguageService {

    list() {
        return http.get("/languages");
    }

    details(id) {
        return http.get(`/languages/${id}`);
    }
}
export default new LanguageService();
