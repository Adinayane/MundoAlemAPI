using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MundoAlemAPI.Context;
using MundoAlemAPI.Models;

namespace MundoAlemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContatoesController : ControllerBase
    {
        private readonly DataContext _context;

        public ContatoesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Contatoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contato>>> Getcontato()
        {
          if (_context.contato == null)
          {
              return NotFound();
          }
            return await _context.contato.ToListAsync();
        }

        // GET: api/Contatoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contato>> GetContato(int id)
        {
          if (_context.contato == null)
          {
              return NotFound();
          }
            var contato = await _context.contato.FindAsync(id);

            if (contato == null)
            {
                return NotFound();
            }

            return contato;
        }

        // PUT: api/Contatoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContato(int id, Contato contato)
        {
            if (id != contato.Id)
            {
                return BadRequest();
            }

            _context.Entry(contato).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContatoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contatoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contato>> PostContato(Contato contato)
        {
          if (_context.contato == null)
          {
              return Problem("Entity set 'DataContext.contato'  is null.");
          }
            _context.contato.Add(contato);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContato", new { id = contato.Id }, contato);
        }

        // DELETE: api/Contatoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContato(int id)
        {
            if (_context.contato == null)
            {
                return NotFound();
            }
            var contato = await _context.contato.FindAsync(id);
            if (contato == null)
            {
                return NotFound();
            }

            _context.contato.Remove(contato);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContatoExists(int id)
        {
            return (_context.contato?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
