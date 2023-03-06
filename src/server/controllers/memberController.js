import * as repo from "../repositories/memberRepository.js"

export async function all(req, res) {
    const members = await repo.getAll();
    res.send(members);
}