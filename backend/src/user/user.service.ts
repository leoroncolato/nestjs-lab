// Exemplo parcial do findAll ignorando deletados e incluindo relacionamentos
findAll() {
  return this.prisma.user.findMany({
    where: { deletedAt: null },
    include: { profile: true, address: true },
  });
}

// Exemplo de Soft Delete
async remove(id: string) {
  return this.prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
}