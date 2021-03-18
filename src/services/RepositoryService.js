import http from "@/services/api";

class RepositoryService {

    list() {
        return http.get("/repositories");
    }

    details(id) {
        return http.get(`/repositories/${id}`);
    }
}
export default new RepositoryService();
