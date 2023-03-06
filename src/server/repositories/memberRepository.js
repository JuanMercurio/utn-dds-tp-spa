import { Member } from '../models/member.js'

export async function get(id) {
    return await Member.find(id);
}

export async function save(dao) {
    await dao.save();
}

export async function getAll() {
    return await Member.find();
}

export async function remove(dao) {
    await Member.deleteOne(dao)
}

export async function removeAll(dao) {
    await Member.deleteMany()
}